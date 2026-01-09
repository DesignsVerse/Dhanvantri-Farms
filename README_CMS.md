# CMS Admin Portal - Setup Guide

This project includes a custom Content Management System (CMS) that allows you to manage website content without touching code.

## 🚀 Quick Start

### 1. Access the Admin Portal

Navigate to: `http://localhost:3000/admin/login`

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

⚠️ **Important:** Change these credentials in production by setting environment variables.

### 2. Change Admin Credentials

Create a `.env.local` file in the root directory:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
```

### 3. Data Storage

All content is stored in JSON format at: `data/cms-content.json`

This file is automatically created when you first save content. Make sure to:
- **Backup this file regularly**
- **Add it to version control** (optional, but recommended)
- The file is gitignored by default for security

## 📋 Available Content Management Pages

1. **Hero Slides** (`/admin/content/hero`)
   - Manage homepage hero carousel slides
   - Add/edit/delete slides
   - Reorder slides

2. **Services** (`/admin/content/services`)
   - Manage service cards on homepage
   - Update service descriptions and images

3. **FAQs** (`/admin/content/faqs`)
   - Add/edit/delete frequently asked questions
   - Reorder FAQ items

4. **Testimonials** (`/admin/content/testimonials`)
   - Manage customer testimonials
   - Add author names and locations

5. **Achievements** (`/admin/content/achievements`)
   - Update statistics and achievements
   - Change values, labels, and suffixes

6. **About Content** (`/admin/content/about`)
   - Edit about section content
   - Update title, description, image, and tagline

## 🛠️ How It Works

### Architecture

- **Storage**: JSON file-based storage (`data/cms-content.json`)
- **API Routes**: Next.js API routes handle CRUD operations
- **Authentication**: Simple session-based auth (cookies)
- **Frontend**: React components fetch data from API

### API Endpoints

- `GET /api/cms?section=<section>` - Fetch content
- `POST /api/cms` - Update content
- `POST /api/auth/login` - Admin login
- `GET /api/auth/check` - Check authentication
- `POST /api/auth/logout` - Logout

### Frontend Integration

Components use custom hooks to fetch CMS data:

```typescript
import { useHeroSlides } from '@/lib/hooks/useCMS';

const { data, loading, error } = useHeroSlides();
```

## 🔒 Security Notes

1. **Change default credentials** before deploying
2. **Use HTTPS** in production
3. **Consider adding rate limiting** for API routes
4. **Backup data regularly**
5. **Restrict admin route access** (consider IP whitelisting)

## 📝 Content Structure

### Hero Slides
```json
{
  "id": "string",
  "image": "string (path)",
  "title": "string",
  "subtitle": "string",
  "order": "number"
}
```

### Services
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "image": "string (path)",
  "href": "string (URL)",
  "order": "number"
}
```

### FAQs
```json
{
  "id": "string",
  "question": "string",
  "answer": "string",
  "order": "number"
}
```

## 🐛 Troubleshooting

### Can't login?
- Check `.env.local` file exists
- Verify credentials match environment variables
- Clear browser cookies

### Changes not showing?
- Check browser cache
- Verify API is working: `http://localhost:3000/api/cms?section=hero`
- Check `data/cms-content.json` file exists and has content

### Data lost?
- Check `data/cms-content.json` file
- Restore from backup if available
- Default content will be recreated if file is missing

## 🚀 Deployment

1. Set environment variables on your hosting platform
2. Ensure `data/` directory is writable
3. Backup `data/cms-content.json` regularly
4. Consider using a database for production (MongoDB, PostgreSQL, etc.)

## 📞 Support

For issues or questions, check:
- API routes in `app/api/`
- Components in `components/admin/`
- Data storage in `lib/data/storage.ts`

---

**Note:** This is a lightweight CMS solution. For larger projects, consider migrating to a database-backed solution or a headless CMS like Sanity, Strapi, or Contentful.


