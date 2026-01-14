# Vercel KV Setup Guide

Your CMS has been migrated to use **Vercel KV** (Redis) for production storage. This allows your content to persist in Vercel's serverless environment.

## 🚀 Quick Setup Steps

### 1. Create a Vercel KV Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **Dhanvantri-Farms**
3. Go to the **Storage** tab
4. Click **Create Database**
5. Select **KV** (Redis)
6. Choose a name (e.g., `dhanvantri-cms`)
7. Select a region closest to your users
8. Click **Create**

### 2. Link KV to Your Project

After creating the KV database, Vercel will automatically:
- Add the required environment variables (`KV_URL`, `KV_REST_API_URL`, etc.)
- Link them to your project

**Note:** If you need to manually link:
1. Go to your project settings
2. Navigate to **Storage**
3. Find your KV database
4. Click **Link** if not already linked

### 3. Verify Environment Variables

Vercel should automatically add these to your project:
- `KV_URL` - Redis connection URL
- `KV_REST_API_URL` - REST API endpoint
- `KV_REST_API_TOKEN` - Authentication token
- `KV_REST_API_READ_ONLY_TOKEN` - Read-only token

You can verify these in:
- **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

### 4. Deploy Your Changes

After setting up KV, push your code:

```bash
git add .
git commit -m "Migrate CMS to Vercel KV for production"
git push origin main
```

Vercel will automatically redeploy with the new storage system.

## ✅ How It Works

- **Production (Vercel):** Uses Vercel KV (Redis) for persistent storage
- **Local Development:** Falls back to file system (`data/cms-content.json`)

The code automatically detects which environment you're in:
- If `KV_URL` or `KV_REST_API_URL` exists → Uses KV
- Otherwise → Uses file system

## 🔍 Testing

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Should work with file system storage
   - Changes saved to `data/cms-content.json`

2. **Production Testing:**
   - After deploying, go to `/admin/login`
   - Make changes in the CMS
   - Changes should persist across deployments

## 🐛 Troubleshooting

### "Unable to save content to KV storage"

**Solution:** Make sure:
1. KV database is created in Vercel
2. Environment variables are set
3. Project is linked to the KV database
4. Redeploy after setting up KV

### Changes not persisting

**Check:**
1. Vercel deployment logs for errors
2. Environment variables are present
3. KV database is active (not paused)

### Local development issues

If you want to test KV locally:
1. Create a `.env.local` file
2. Add your KV credentials:
   ```env
   KV_URL=your_kv_url
   KV_REST_API_URL=your_rest_api_url
   KV_REST_API_TOKEN=your_token
   ```
3. Restart your dev server

## 📝 Migration Notes

- Existing content in `data/cms-content.json` will be used as default
- First time you save in production, it will initialize KV with your content
- You can still edit locally using the file system
- Production changes are stored in KV and persist across deployments

## 💡 Next Steps

1. ✅ Create KV database in Vercel
2. ✅ Deploy your code
3. ✅ Test CMS in production
4. ✅ Verify content persists after redeployment

---

**Need Help?** Check Vercel's [KV Documentation](https://vercel.com/docs/storage/vercel-kv)
