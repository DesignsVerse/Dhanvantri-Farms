# Dhanvantri Farms - Codebase Guide for Content Managers

This guide explains every part of the website codebase in simple terms, so you can easily find and update content without needing coding knowledge.

---

## 📁 **Main Folder Structure**

### **`app/` - Website Pages**
This folder contains all the pages visitors see on your website. Each folder represents a different page.

#### **Homepage (`app/page.tsx`)**
- **What it is:** The main landing page when someone visits your website
- **What you can change:** The order of sections (Hero, Services, About, etc.)
- **Location:** `app/page.tsx`

#### **Service Pages** (Individual service detail pages)
- **`app/polyhouse/page.tsx`** - Polyhouse farming information page
- **`app/net-house/page.tsx`** - Net House/Shade Net information page
- **`app/hydroponics/page.tsx`** - Hydroponics systems page
- **`app/organic-farming/page.tsx`** - Organic farming page
- **`app/mushroom/page.tsx`** - Mushroom farming page
- **`app/indoor-saffron/page.tsx`** - Indoor saffron cultivation page
- **`app/warehouse/page.tsx`** - Warehouse solutions page
- **`app/cold-storage/page.tsx`** - Cold storage facilities page
- **`app/automation/page.tsx`** - Automation systems page

#### **Other Important Pages**
- **`app/about/page.tsx`** - About Us page
- **`app/contact/page.tsx`** - Contact Us page
- **`app/blog/page.tsx`** - Blog listing page
- **`app/blog/[slug]/page.tsx`** - Individual blog post pages
- **`app/innovation/page.tsx`** - Innovation page

---

### **`components/` - Reusable Website Parts**

These are building blocks used across multiple pages. Think of them like templates.

#### **Homepage Components (`components/home/`)**
- **`Hero.tsx`** - The big banner/slider at the top of the homepage
  - Shows rotating images and headlines
  - Content comes from `data/cms-content.json` → `hero` section
  
- **`Service.tsx`** - The services grid showing all your services
  - Displays service cards with images and links
  - Content from `data/cms-content.json` → `services` section
  
- **`About.tsx`** - About section on homepage
  - Shows company information and tagline
  - Content from `data/cms-content.json` → `about` section
  
- **`Achievement.tsx`** - Statistics/numbers section (Projects, Cities, etc.)
  - Shows achievement counters
  - Content from `data/cms-content.json` → `achievements` section
  
- **`BusinessPartners.tsx`** - Partner logos section
  
- **`SuccessStories.tsx`** - Success stories/case studies section
  
- **`Testimonials.tsx`** - Customer testimonials
  - Content from `data/cms-content.json` → `testimonials` section
  
- **`FAQ.tsx`** - Frequently Asked Questions section
  - Content from `data/cms-content.json` → `faqs` section
  
- **`CallToAction.tsx`** - Call-to-action button/section
  
- **`ContactSection.tsx`** - Contact information section on homepage

#### **Layout Components (`components/layout/`)**
- **`Navigation.tsx`** - The top navigation menu bar
  - Contains: Logo, menu items (Our Services, About Us, Blog, Contact Us)
  - Has a dropdown menu for services
  - Includes the scrolling marquee banner at the top
  
- **`Footer.tsx`** - The footer at the bottom of every page
  - Contains: Company links, Support links, Service links, Contact info
  - Content from `data/cms-content.json` → `footer` section

#### **Special Components**
- **`Chatbot.tsx`** - The AI chatbot that appears on the website
  - Floating chat button in bottom right
  - Uses Google Gemini AI to answer questions
  - Connects users to WhatsApp/phone
  
- **`WhatsAppButton.tsx`** - Floating WhatsApp button
  - Quick contact button that opens WhatsApp

#### **Admin Components (`components/admin/`)**
- **`AdminLayout.tsx`** - Layout wrapper for admin pages
- **`ContentEditor.tsx`** - Editor interface for updating content
- **`ImageUpload.tsx`** - Tool for uploading images
- **`ProtectedRoute.tsx`** - Security wrapper (requires login)

---

### **`data/` - Content Storage**

#### **`data/cms-content.json`** ⭐ **MOST IMPORTANT FILE FOR CONTENT UPDATES**
This is where most of your website content lives! You can edit this file to update:

- **`hero`** - Homepage banner slides (images, titles, subtitles)
- **`services`** - Service cards (titles, descriptions, images, links)
- **`faqs`** - Frequently Asked Questions (questions and answers)
- **`testimonials`** - Customer testimonials (quotes, names, locations)
- **`achievements`** - Statistics (Projects, Cities, Associates, Views)
- **`about`** - About section content (title, description, image, tagline)
- **`footer`** - Footer links and contact information

**How to edit:** Open this JSON file and update the text values. Keep the structure the same!

---

### **`app/api/` - Backend Functions**

These handle behind-the-scenes operations:

#### **`app/api/chat/route.ts`** - Chatbot AI
- Connects to Google Gemini AI
- Handles chatbot conversations
- Contains the chatbot's personality and knowledge about Dhanvantri Farms
- **What you can change:** The system prompt (lines 30-61) to modify how the chatbot talks

#### **`app/api/auth/`** - Login/Logout
- **`login/route.ts`** - Handles admin login
- **`logout/route.ts`** - Handles logout
- **`check/route.ts`** - Checks if user is logged in

#### **`app/api/cms/route.ts`** - Content Management
- Saves content updates from admin panel
- Reads/writes to `data/cms-content.json`

#### **`app/api/upload/route.ts`** - Image Upload
- Handles image uploads in admin panel
- Saves images to `public/uploads/` folder

---

### **`app/admin/` - Admin Panel Pages**

This is where you log in to manage content through a user-friendly interface.

#### **`app/admin/login/page.tsx`** - Admin Login Page
- Login page for content managers
- Requires username and password

#### **`app/admin/dashboard/page.tsx`** - Admin Dashboard
- Main admin control panel
- Shows links to edit different content sections:
  - Hero Slides
  - Services
  - FAQs
  - Testimonials
  - Achievements
  - About Content

#### **`app/admin/content/`** - Content Editing Pages
- **`hero/page.tsx`** - Edit homepage banner slides
- **`services/page.tsx`** - Edit service cards
- **`faqs/page.tsx`** - Edit FAQs
- **`testimonials/page.tsx`** - Edit testimonials
- **`achievements/page.tsx`** - Edit achievement statistics
- **`about/page.tsx`** - Edit about section
- **`blogs/page.tsx`** - Manage blog posts

---

### **`public/` - Images and Static Files**

All images and files that visitors can access directly.

#### **Image Folders:**
- **`public/1.jpg` to `public/8.jpg`** - Service card images
- **`public/farm.jpg`** - About section image
- **`public/hero/`** - Homepage banner images (1.jpg to 5.jpg)
- **`public/service/`** - Service-specific images:
  - `poly/` - Polyhouse images
  - `net/` - Net House images
  - `hydro/` - Hydroponics images
  - `organic/` - Organic farming images
  - `mushroom/` - Mushroom farming images
  - `saffron/` - Indoor saffron images
  - `warehouse/` - Warehouse images
  - `cold/` - Cold storage images
- **`public/story/`** - Success story images
- **`public/uploads/`** - Images uploaded through admin panel

#### **Other Files:**
- **`public/robots.txt`** - Search engine instructions
- **`public/sitemap.xml`** - Website structure for search engines

---

### **Configuration Files** (Usually don't need to edit)

- **`package.json`** - Lists all software dependencies
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.ts`** - Styling/design configuration
- **`next.config.js`** - Next.js framework configuration

---

## 🎯 **Quick Reference: Where to Change What**

### **Homepage Banner (Hero Section)**
- **Via Admin Panel:** Go to `/admin/content/hero`
- **Via File:** Edit `data/cms-content.json` → `hero` array
- **Images:** Replace files in `public/hero/` folder

### **Service Cards**
- **Via Admin Panel:** Go to `/admin/content/services`
- **Via File:** Edit `data/cms-content.json` → `services` array
- **Images:** Replace files in `public/` (1.jpg to 8.jpg) or `public/service/` folders

### **FAQs**
- **Via Admin Panel:** Go to `/admin/content/faqs`
- **Via File:** Edit `data/cms-content.json` → `faqs` array

### **Testimonials**
- **Via Admin Panel:** Go to `/admin/content/testimonials`
- **Via File:** Edit `data/cms-content.json` → `testimonials` array

### **Achievement Numbers**
- **Via Admin Panel:** Go to `/admin/content/achievements`
- **Via File:** Edit `data/cms-content.json` → `achievements` array

### **About Section**
- **Via Admin Panel:** Go to `/admin/content/about`
- **Via File:** Edit `data/cms-content.json` → `about` object

### **Footer Links**
- **Via File:** Edit `data/cms-content.json` → `footer` object

### **Navigation Menu**
- **Via File:** Edit `components/layout/Navigation.tsx` → `menuItems` array (around line 21)

### **Contact Information**
- **Phone/Email/Address:** Edit `data/cms-content.json` → `footer` → `phone`, `email`, `address`
- **WhatsApp Number:** Edit `components/WhatsAppButton.tsx` (search for phone number)

### **Chatbot Behavior**
- **Via File:** Edit `app/api/chat/route.ts` → `systemPrompt` (lines 30-61)
- This controls what the chatbot knows and how it responds

---

## 📝 **How to Update Content**

### **Method 1: Using Admin Panel (Recommended)**
1. Go to your website URL + `/admin/login`
2. Log in with your credentials
3. Navigate to the section you want to edit (e.g., "Hero Slides", "Services")
4. Make your changes
5. Click "Save"
6. Changes appear on the website immediately

### **Method 2: Editing JSON File Directly**
1. Open `data/cms-content.json`
2. Find the section you want to edit
3. Update the text values (keep the structure/formatting the same)
4. Save the file
5. The website will automatically update

### **Method 3: Editing Component Files**
1. Open the relevant component file (e.g., `components/layout/Navigation.tsx`)
2. Find the text you want to change
3. Update it (be careful with quotes and formatting)
4. Save the file

---

## 🖼️ **How to Update Images**

### **Replacing Existing Images:**
1. Find the image file in the `public/` folder
2. Replace it with a new image (keep the same filename!)
3. Or upload via admin panel at `/admin/content/[section]`

### **Adding New Images:**
1. Upload through admin panel (recommended)
2. Or add to `public/uploads/` folder
3. Reference the new image path in your content

---

## 🔐 **Admin Access**

- **Login URL:** `yourwebsite.com/admin/login`
- **Dashboard:** `yourwebsite.com/admin/dashboard`
- **Credentials:** Stored in environment variables (ask developer for access)

---

## 🎨 **Design & Styling**

- **Colors:** Mainly green/lime theme (configured in `tailwind.config.ts`)
- **Fonts:** Inter and Poppins (configured in `app/layout.tsx`)
- **Responsive:** Website works on mobile, tablet, and desktop

---

## 🤖 **Chatbot Configuration**

The chatbot uses Google Gemini AI. To modify:
- **Personality/Knowledge:** Edit `app/api/chat/route.ts` → `systemPrompt`
- **Company Info:** Update phone, email, address in the system prompt
- **Services Info:** Update service descriptions in the system prompt

---

## 📞 **Important Contact Info Locations**

Update these in multiple places for consistency:
1. **`data/cms-content.json`** → `footer` section
2. **`components/WhatsAppButton.tsx`** (phone number)
3. **`app/api/chat/route.ts`** → `systemPrompt` (for chatbot)
4. **`components/Chatbot.tsx`** (hardcoded references)

---

## ⚠️ **Important Notes**

1. **Always backup** `data/cms-content.json` before making major changes
2. **Test changes** on a development/staging site first if possible
3. **Image formats:** Use JPG or PNG, optimize file sizes for faster loading
4. **JSON syntax:** Be careful with commas, quotes, and brackets when editing JSON files
5. **File paths:** Image paths start with `/` (e.g., `/hero/1.jpg` not `hero/1.jpg`)

---

## 🆘 **Common Tasks**

### **Add a New FAQ:**
1. Go to `/admin/content/faqs` or edit `data/cms-content.json`
2. Add a new object in the `faqs` array with `id`, `question`, `answer`, and `order`

### **Update Achievement Numbers:**
1. Go to `/admin/content/achievements` or edit `data/cms-content.json`
2. Update the `value` field for the achievement you want to change

### **Change Homepage Banner:**
1. Go to `/admin/content/hero` or edit `data/cms-content.json`
2. Update `title`, `subtitle`, or `image` path
3. Replace the image file in `public/hero/` folder

### **Add a New Service:**
1. Go to `/admin/content/services` or edit `data/cms-content.json`
2. Add a new object in the `services` array
3. Create a new page in `app/[service-name]/page.tsx` (requires developer)

---

## 📚 **File Extension Guide**

- **`.tsx`** - React component files (UI elements)
- **`.ts`** - TypeScript files (logic/functions)
- **`.json`** - Data files (content storage)
- **`.css`** - Styling files
- **`.jpg/.png`** - Image files

---

## 🎯 **Summary**

- **Content:** Edit `data/cms-content.json` or use admin panel at `/admin`
- **Images:** Replace files in `public/` folder or upload via admin
- **Pages:** Each folder in `app/` is a page (except `api/` and `admin/`)
- **Components:** Reusable parts in `components/` folder
- **Admin Panel:** User-friendly interface at `/admin/login`

---

**Need Help?** Contact your developer or refer to the other documentation files:
- `README.md` - General project information
- `CMS_SETUP.md` - CMS setup instructions
- `GEMINI_SETUP.md` - Chatbot AI setup
- `TESTING_GUIDE.md` - Testing instructions
- `TROUBLESHOOTING.md` - Common issues and solutions
