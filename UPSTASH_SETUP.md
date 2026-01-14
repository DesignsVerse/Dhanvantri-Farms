# Upstash Redis Setup Guide (FREE)

Your CMS has been configured to use **Upstash Redis** from the Vercel Marketplace - a free, serverless Redis database perfect for your CMS!

## 🎉 Why Upstash Redis?

- ✅ **FREE Tier:** 10,000 commands/day (plenty for a CMS!)
- ✅ **Serverless:** No infrastructure to manage
- ✅ **Fast:** Global edge network
- ✅ **Easy Setup:** Integrates directly with Vercel

## 🚀 Quick Setup Steps

### 1. Add Upstash Redis from Vercel Marketplace

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **Dhanvantri-Farms**
3. Go to the **Storage** tab
4. Click **Create New** → **Select Existing**
5. Scroll down to **Marketplace Database Providers**
6. Find **Upstash** → Click on it
7. Click **Add Integration** or **Create Database**
8. Choose **Redis** (not Vector/Queue/Search)
9. Select the **FREE** plan
10. Choose a name (e.g., `dhanvantri-cms`)
11. Select a region closest to your users
12. Click **Create** or **Add**

### 2. Environment Variables (Auto-Added)

Upstash will automatically add these environment variables to your Vercel project:
- `UPSTASH_REDIS_REST_URL` - Redis REST API URL
- `UPSTASH_REDIS_REST_TOKEN` - Authentication token

**Verify they're added:**
- Go to **Settings** → **Environment Variables**
- You should see both variables listed

### 3. Deploy Your Code

Push your changes:

```bash
git add .
git commit -m "Switch to Upstash Redis for free CMS storage"
git push origin main
```

Vercel will automatically redeploy with Upstash Redis connected.

## ✅ How It Works

- **Production (Vercel):** Uses Upstash Redis - changes persist across deployments
- **Local Development:** Falls back to file system (`data/cms-content.json`)

The code automatically detects:
- If `UPSTASH_REDIS_REST_URL` exists → Uses Redis
- Otherwise → Uses file system

## 🧪 Testing

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Works with file system storage
   - Changes saved to `data/cms-content.json`

2. **Production Testing:**
   - After deploying, go to `/admin/login`
   - Make changes in the CMS
   - Changes should persist! ✅

## 💰 Free Tier Limits

Upstash Redis FREE tier includes:
- **10,000 commands/day** (reads + writes)
- **256 MB storage**
- **Unlimited databases**

For a CMS, 10,000 commands/day is plenty! Each save operation uses ~2-3 commands.

## 🐛 Troubleshooting

### "Redis not configured" error

**Solution:**
1. Make sure Upstash Redis is added in Vercel Storage
2. Check environment variables are present
3. Redeploy after adding Upstash

### Changes not persisting

**Check:**
1. Vercel deployment logs for errors
2. Environment variables in Vercel dashboard
3. Upstash dashboard to see if commands are being used

### Want to test Redis locally?

Create `.env.local`:
```env
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-token-here
```

Get these from:
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Or Upstash Dashboard → Your Database → REST API

## 📊 Monitor Usage

Check your usage:
1. Go to [Upstash Dashboard](https://console.upstash.com/)
2. Select your database
3. View **Usage** tab to see commands/day

## 🎯 Next Steps

1. ✅ Add Upstash Redis from Vercel Marketplace (FREE)
2. ✅ Push your code (already done)
3. ✅ Test CMS in production
4. ✅ Enjoy persistent storage! 🎉

---

**Need Help?** 
- [Upstash Docs](https://docs.upstash.com/redis)
- [Vercel + Upstash Guide](https://vercel.com/integrations/upstash)
