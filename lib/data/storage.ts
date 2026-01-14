// Hybrid storage: Vercel KV for production, file system for local development
import fs from 'fs';
import path from 'path';
import { kv } from '@vercel/kv';
import type { CMSContent } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'cms-content.json');
const KV_KEY = 'cms-content';

// Check if we're using Vercel KV (production) or file system (local)
const useKV = Boolean(process.env.KV_URL || process.env.KV_REST_API_URL);

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
    phone: '+91-8839582448',
    email: 'info@dhanvantrifarms.com',
    address: 'Near Old SBI\nGarhakota, District Sagar\nMadhya Pradesh 470229, India',
  },
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

// KV helpers (for production)
async function readFromKV(): Promise<CMSContent> {
  try {
    const stored = await kv.get<CMSContent>(KV_KEY);
    if (stored) {
      return { ...defaultContent, ...stored };
    }
  } catch (error) {
    console.error('Error reading from KV:', error);
  }
  return defaultContent;
}

async function writeToKV(content: CMSContent): Promise<void> {
  try {
    await kv.set(KV_KEY, content);
  } catch (error) {
    console.error('Error writing to KV:', error);
    throw new Error('Unable to save content to KV storage.');
  }
}

// Main exported functions
export async function readContent(): Promise<CMSContent> {
  if (useKV) {
    return await readFromKV();
  } else {
    return readFromFile();
  }
}

export async function writeContent(content: CMSContent): Promise<void> {
  if (useKV) {
    await writeToKV(content);
  } else {
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
if (!useKV) {
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