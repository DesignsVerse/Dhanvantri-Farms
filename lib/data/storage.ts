// Hybrid storage: Upstash Redis for production, file system for local development
import fs from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';
import type { CMSContent } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'cms-content.json');
const REDIS_KEY = 'cms-content';

// Lazy initialization of Redis (check at runtime, not module load)
function getRedis(): Redis | null {
  // Check for Upstash Redis environment variables
  // Vercel might use different variable names, so check multiple possibilities
  const url = process.env.UPSTASH_REDIS_REST_URL || 
              process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || 
                process.env.KV_REST_API_TOKEN;

  if (url && token) {
    try {
      return new Redis({
        url: url,
        token: token,
      });
    } catch (error) {
      console.error('Failed to initialize Redis:', error);
      return null;
    }
  }
  return null;
}

// Check if we're using Redis (production) or file system (local)
function useRedis(): boolean {
  return Boolean(getRedis());
}

// Initialize default content if file doesn't exist
const defaultContent: CMSContent = {
  hero: [
    {
      id: '1',
      image: '/service/poly/1.jpg',
      title: 'Polyhouse Farming',
      subtitle: 'Maximize productivity with our climate-controlled polyhouses designed for year-round farming success.',
      order: 1,
    },
    {
      id: '2',
      image: '/service/organic/1.jpg',
      title: 'Sustainable Organic Farming',
      subtitle: 'Embrace chemical-free farming with Dhanvantri Farms for healthier crops and eco-friendly growth.',
      order: 2,
    },
    {
      id: '3',
      image: '/service/8.jpg',
      title: 'Modern Mushroom Farming',
      subtitle: 'Explore new revenue streams with Dhanvantri Farms innovative mushroom farming setups.',
      order: 3,
    },
    {
      id: '4',
      image: '/service/warehouse/1.jpg',
      title: 'Smart Agri Warehousing',
      subtitle: 'Secure your harvest with Dhanvantri Farms cutting-edge agricultural warehousing solutions.',
      order: 4,
    },
    {
      id: '5',
      image: '/service/cold/cold.jpg',
      title: 'Cold Storage Facilities',
      subtitle: 'Preserve freshness and extend shelf life with Dhanvantri Farms state-of-the-art cold storage systems.',
      order: 5,
    },
  ],
  services: [
    { id: '1', title: 'Polyhouse', description: 'Climate-controlled farming solutions', image: '/1.jpg', href: '/polyhouse', order: 1 },
    { id: '2', title: 'Net House', description: 'Protected cultivation structures', image: '/2.jpg', href: '/net-house', order: 2 },
    { id: '3', title: 'Hydroponics', description: 'Soilless farming systems', image: '/3.jpg', href: '/hydroponics', order: 3 },
    { id: '4', title: 'Organic Farming', description: 'Sustainable and chemical-free agriculture', image: '/4.jpg', href: '/organic-farming', order: 4 },
    { id: '5', title: 'Warehouse', description: 'Efficient storage solutions', image: '/5.jpg', href: '/warehouse', order: 5 },
    { id: '6', title: 'Cold Storage', description: 'Temperature-controlled storage', image: '/6.jpg', href: '/cold-storage', order: 6 },
    { id: '7', title: 'Indoor Saffron', description: 'Premium saffron cultivation', image: '/8.jpg', href: '/indoor-saffron', order: 7 },
    { id: '8', title: 'Mushroom Farming', description: 'Modern mushroom cultivation', image: '/7.jpg', href: '/mushroom', order: 8 },
  ],
  faqs: [
    {
      id: '1',
      question: 'What is the ROI timeline for smart farming investments?',
      answer: 'Most farmers see a return on investment within 2-3 years with Dhanvantri Farms\' smart farming solutions. Our advanced systems boost crop yields by 300-400% while reducing operational costs by 30-40%. The exact timeline depends on crop type, market conditions, and system complexity.',
      order: 1,
    },
    {
      id: '2',
      question: 'Do you provide installation and maintenance services?',
      answer: 'Yes, Dhanvantri Farms offers complete end-to-end services, including site preparation, installation, commissioning, training, and ongoing maintenance. Our technical team ensures seamless setup and provides 24/7 support for all automated systems.',
      order: 2,
    },
    {
      id: '3',
      question: 'Which crops are best suited for hydroponic cultivation?',
      answer: 'Leafy vegetables (lettuce, spinach, herbs), tomatoes, cucumbers, peppers, and strawberries thrive in Dhanvantri Farms\' hydroponic systems. We guide you to select the best crops based on your local market demand and climate conditions.',
      order: 3,
    },
    {
      id: '4',
      question: 'What financing options are available for large projects?',
      answer: 'Dhanvantri Farms provides flexible financing solutions, including equipment financing, lease options, and partnerships with agricultural banks. Government subsidies for modern farming technology can cover 40-60% of project costs in many states.',
      order: 4,
    },
    {
      id: '5',
      question: 'How much water do hydroponic systems save compared to traditional farming?',
      answer: 'Dhanvantri Farms\' hydroponic systems use 90% less water than traditional soil-based farming. Our closed-loop systems recirculate nutrient solutions, and precise irrigation eliminates waste, making them ideal for water-scarce regions.',
      order: 5,
    },
    {
      id: '6',
      question: 'What ongoing support do you provide after installation?',
      answer: 'Dhanvantri Farms offers comprehensive support, including remote monitoring, regular maintenance, troubleshooting, crop guidance, market linkage support, and system upgrades. Our agronomists are available for consultation throughout the growing season.',
      order: 6,
    },
  ],
  testimonials: [
    {
      id: '1',
      quote: 'Our polyhouse from this company transformed our farm. We now produce high-quality vegetables throughout the year with minimal water usage.',
      author: 'Rajesh Kumar',
      location: 'Punjab',
      order: 1,
    },
    {
      id: '2',
      quote: 'The climate control features are outstanding. We\'ve seen a massive increase in yield and quality for our exotic flowers.',
      author: 'Priya Sharma',
      location: 'Maharashtra',
      order: 2,
    },
  ],
  achievements: [
    { id: '1', label: 'Projects', value: 350, suffix: '+', order: 1 },
    { id: '2', label: 'Cities', value: 300, suffix: '+', order: 2 },
    { id: '3', label: 'Associates', value: 500, suffix: '+', order: 3 },
    { id: '4', label: 'Views', value: 110, suffix: 'K+', order: 4 },
  ],
  about: {
    title: 'Farmer Success Stories',
    description: 'Explore how hi-tech farming solutions are transforming agriculture. From polyhouses to hydroponics, our innovations empower farmers to achieve sustainable yields and a prosperous future.',
    image: '/farm.jpg',
    tagline: 'Innovating agriculture for a sustainable future.',
  },
  navigation: [],
  footer: {
    company: [
      { label: 'About the Company', href: '/about' },
      { label: 'Our Innovations', href: '/innovation' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Why Choose Us', href: '/about' },
      { label: 'Our Mission', href: '/about' },
      { label: 'Success Stories', href: '/about' },
    ],
    support: [
      { label: 'Technical Support', href: '/contact' },
      { label: 'Installation Guide', href: '/contact' },
      { label: 'Maintenance Services', href: '/contact' },
      { label: 'Training Programs', href: '/contact' },
      { label: 'Consultation Services', href: '/contact' },
      { label: 'Customer Care', href: '/contact' },
    ],
    services: [
      { label: 'Polyhouse Solutions', href: '/polyhouse' },
      { label: 'Polyhouse Advantages', href: '/polyhouse/polyhouse-advantages' },
      { label: 'Hydroponics Systems', href: '/hydroponics' },
      { label: 'Net House Technology', href: '/net-house' },
      { label: 'Automation Systems', href: '/automation' },
      { label: 'Cold Storage Solutions', href: '/cold-storage' },
    ],
    phone: '+91-7415282414',
    email: 'info@dhanvantrifarms.com',
    address: 'Near Old SBI\nGarhakota, District Sagar\nMadhya Pradesh 470229, India',
  },
  blogs: [
    {
      id: '1',
      title: 'The Future of Smart Farming: How Technology is Revolutionizing Agriculture',
      slug: 'future-of-smart-farming',
      excerpt: 'Discover how modern technology and smart farming solutions are transforming traditional agriculture, increasing yields, and promoting sustainable practices.',
      content: '<p>In recent years, the agricultural sector has witnessed a remarkable transformation, driven by technological innovations and smart farming solutions. At Dhanvantri Farms, we are at the forefront of this revolution, helping farmers across India embrace modern agricultural practices.</p><h2>The Rise of Smart Farming</h2><p>Smart farming integrates advanced technologies like IoT sensors, automated irrigation systems, and climate-controlled environments to optimize crop production. These innovations enable farmers to:</p><ul><li>Monitor crop health in real-time</li><li>Optimize water and nutrient usage</li><li>Reduce dependency on weather conditions</li><li>Increase crop yields by 300-400%</li><li>Minimize environmental impact</li></ul><h2>Key Technologies in Modern Agriculture</h2><p>From polyhouse farming to hydroponics, modern agricultural technologies offer unprecedented control over growing conditions. Climate-controlled environments ensure year-round production, while automated systems reduce manual labor and human error.</p><h2>Conclusion</h2><p>The future of farming is here, and it\'s smarter, more efficient, and more sustainable than ever before. By adopting these technologies, farmers can not only increase their productivity but also contribute to a more sustainable agricultural ecosystem.</p>',
      author: 'Dhanvantri Farms Team',
      publishedAt: '2024-01-15',
      image: '/service/poly/1.jpg',
      category: 'Technology',
      tags: ['Smart Farming', 'Technology', 'Innovation'],
      featured: true,
      order: 1,
    },
    {
      id: '2',
      title: 'Maximizing Crop Yields with Polyhouse Farming: A Complete Guide',
      slug: 'maximizing-crop-yields-polyhouse',
      excerpt: 'Learn how polyhouse farming can help you achieve 3-4x higher yields compared to traditional farming methods, with year-round production capabilities.',
      content: '<p>Polyhouse farming has emerged as one of the most effective methods for maximizing agricultural productivity. This comprehensive guide explores how you can leverage polyhouse technology to transform your farming operations.</p><h2>What is Polyhouse Farming?</h2><p>Polyhouse farming involves growing crops in a controlled environment covered with polyethylene sheets. This structure protects crops from adverse weather conditions while maintaining optimal temperature, humidity, and light levels.</p><h2>Benefits of Polyhouse Farming</h2><ul><li><strong>Year-round Production:</strong> Grow crops regardless of seasonal changes</li><li><strong>Higher Yields:</strong> Achieve 3-4x more production than open-field farming</li><li><strong>Water Efficiency:</strong> Reduce water consumption by up to 70%</li><li><strong>Pest Control:</strong> Better protection against pests and diseases</li><li><strong>Quality Improvement:</strong> Produce premium quality crops with consistent characteristics</li></ul><h2>Getting Started</h2><p>Starting a polyhouse farm requires careful planning and investment. At Dhanvantri Farms, we provide end-to-end solutions including design, installation, and training to help you succeed.</p>',
      author: 'Agricultural Experts',
      publishedAt: '2024-01-10',
      image: '/service/poly/2.jpg',
      category: 'Farming Techniques',
      tags: ['Polyhouse', 'Crop Yield', 'Farming'],
      featured: true,
      order: 2,
    },
    {
      id: '3',
      title: 'Sustainable Agriculture: Building a Greener Future',
      slug: 'sustainable-agriculture-green-future',
      excerpt: 'Explore sustainable farming practices that protect the environment while ensuring food security for future generations.',
      content: '<p>Sustainable agriculture is not just a trend—it\'s a necessity for our planet\'s future. This article delves into how modern farming practices can be both productive and environmentally responsible.</p><h2>The Importance of Sustainability</h2><p>With growing concerns about climate change and environmental degradation, sustainable farming practices have become crucial. These methods focus on:</p><ul><li>Reducing chemical usage</li><li>Conserving water resources</li><li>Maintaining soil health</li><li>Protecting biodiversity</li><li>Reducing carbon footprint</li></ul><h2>Organic Farming Solutions</h2><p>Organic farming represents a key pillar of sustainable agriculture. By eliminating synthetic chemicals and focusing on natural processes, organic farming promotes healthier ecosystems and produces safer food products.</p><h2>Our Commitment</h2><p>At Dhanvantri Farms, we are committed to promoting sustainable agricultural practices. Our solutions are designed to maximize productivity while minimizing environmental impact.</p>',
      author: 'Sustainability Team',
      publishedAt: '2024-01-05',
      image: '/service/organic/1.jpg',
      category: 'Sustainability',
      tags: ['Sustainability', 'Organic Farming', 'Environment'],
      featured: false,
      order: 3,
    },
  ],
};

// File system helpers (for local development)
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readFromFile(): CMSContent {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
      const parsedContent = JSON.parse(fileContent);
      return { ...defaultContent, ...parsedContent };
    }
  } catch (error) {
    console.error('Error reading content file:', error);
  }
  return defaultContent;
}

function writeToFile(content: CMSContent): void {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(content, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing content file:', error);
    throw new Error('Unable to save content to file system.');
  }
}

// Redis helpers (for production)
async function readFromRedis(): Promise<CMSContent> {
  const redis = getRedis();
  if (!redis) {
    console.warn('Redis not available, using default content');
    return defaultContent;
  }
  try {
    const stored = await redis.get<CMSContent>(REDIS_KEY);
    if (stored) {
      return { ...defaultContent, ...stored };
    }
  } catch (error) {
    console.error('Error reading from Redis:', error);
  }
  return defaultContent;
}

async function writeToRedis(content: CMSContent): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    // In production, this should never happen if Redis is properly configured
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;
    if (isProduction) {
      console.error('Redis not configured in production! Check environment variables:');
      console.error('UPSTASH_REDIS_REST_URL:', process.env.UPSTASH_REDIS_REST_URL ? 'SET' : 'MISSING');
      console.error('UPSTASH_REDIS_REST_TOKEN:', process.env.UPSTASH_REDIS_REST_TOKEN ? 'SET' : 'MISSING');
      throw new Error('Redis not configured in production. Please add Upstash Redis integration in Vercel Storage.');
    }
    throw new Error('Redis not configured');
  }
  try {
    await redis.set(REDIS_KEY, content);
  } catch (error) {
    console.error('Error writing to Redis:', error);
    throw new Error('Unable to save content to Redis storage.');
  }
}

// Main exported functions
export async function readContent(): Promise<CMSContent> {
  if (useRedis()) {
    return await readFromRedis();
  } else {
    return readFromFile();
  }
}

export async function writeContent(content: CMSContent): Promise<void> {
  if (useRedis()) {
    await writeToRedis(content);
  } else {
    // In production, we should never reach here if Redis is configured
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;
    if (isProduction) {
      console.error('Attempting to write to file system in production!');
      console.error('Environment check:');
      console.error('NODE_ENV:', process.env.NODE_ENV);
      console.error('VERCEL:', process.env.VERCEL);
      console.error('UPSTASH_REDIS_REST_URL:', process.env.UPSTASH_REDIS_REST_URL ? 'SET' : 'MISSING');
      console.error('UPSTASH_REDIS_REST_TOKEN:', process.env.UPSTASH_REDIS_REST_TOKEN ? 'SET' : 'MISSING');
      throw new Error('Cannot write to file system in production. Please configure Upstash Redis in Vercel Storage.');
    }
    writeToFile(content);
  }
}

export async function updateContentSection<T extends keyof CMSContent>(
  section: T,
  data: CMSContent[T]
): Promise<void> {
  const content = await readContent();
  content[section] = data;
  await writeContent(content);
}

// Initialize default content on first run (only for file system)
// Only run this check if we're definitely not in production
if (!process.env.VERCEL && !process.env.UPSTASH_REDIS_REST_URL) {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      ensureDataDir();
      fs.writeFileSync(DATA_FILE, JSON.stringify(defaultContent, null, 2), 'utf-8');
      console.log('Created default CMS content file');
    }
  } catch (error) {
    console.warn('Could not create CMS content file:', error);
  }
}