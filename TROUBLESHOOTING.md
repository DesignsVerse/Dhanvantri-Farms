# 🔧 Troubleshooting: Redis Not Working in Production

If you're seeing the error: `EROFS: read-only file system`, it means Redis is not being detected. Follow these steps:

## ✅ Step 1: Verify Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **Dhanvantri-Farms**
3. Go to **Settings** → **Environment Variables**
4. Look for these variables:
   - `UPSTASH_REDIS_REST_URL` (should start with `https://`)
   - `UPSTASH_REDIS_REST_TOKEN` (long string)

**If they're missing:**
- Upstash Redis integration might not be complete
- Go to **Storage** tab and verify Upstash Redis is linked

## ✅ Step 2: Verify Upstash Integration

1. Go to Vercel Dashboard → Your Project → **Storage** tab
2. You should see **Upstash** listed
3. Click on it to see details
4. Make sure it shows as **"Linked"** or **"Connected"**

**If not linked:**
1. Click **"Add Integration"** or **"Link"**
2. Select your Upstash Redis database
3. Wait for it to link

## ✅ Step 3: Check Environment Variable Names

Vercel might use different variable names. Check if you have:
- `UPSTASH_REDIS_REST_URL` ✅ (correct)
- `UPSTASH_REDIS_REST_TOKEN` ✅ (correct)
- OR `KV_REST_API_URL` (alternative)
- OR `KV_REST_API_TOKEN` (alternative)

The code checks for both, but `UPSTASH_REDIS_REST_URL` is the standard.

## ✅ Step 4: Redeploy After Adding Variables

**IMPORTANT:** After adding environment variables:
1. Go to **Deployments** tab
2. Click the **"..."** menu on latest deployment
3. Click **"Redeploy"**
4. OR push a new commit to trigger redeploy

Environment variables are only available after redeployment!

## ✅ Step 5: Check Deployment Logs

1. Go to Vercel Dashboard → Your Project → **Deployments**
2. Click on the latest deployment
3. Check **Function Logs** (not Build Logs)
4. Look for:
   - `Redis not configured in production!` - means env vars missing
   - `Error reading from Redis:` - connection issue
   - `UPSTASH_REDIS_REST_URL: SET` or `MISSING` - diagnostic info

## ✅ Step 6: Manual Environment Variable Check

If you want to verify variables are set, you can temporarily add this to your API route:

```typescript
// Temporary debug code (remove after testing)
console.log('Environment Check:');
console.log('UPSTASH_REDIS_REST_URL:', process.env.UPSTASH_REDIS_REST_URL ? 'SET' : 'MISSING');
console.log('UPSTASH_REDIS_REST_TOKEN:', process.env.UPSTASH_REDIS_REST_TOKEN ? 'SET' : 'MISSING');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('VERCEL:', process.env.VERCEL);
```

Then check Function Logs after making a request.

## ✅ Step 7: Verify Upstash Dashboard

1. Go to [Upstash Console](https://console.upstash.com/)
2. Select your Redis database
3. Check **Usage** tab
4. If you see commands being used → Redis is working! ✅
5. If no commands → Redis is not being called

## 🔍 Common Issues

### Issue: Variables exist but still getting file system error

**Solution:**
- Variables might not be available to the function
- Make sure variables are set for **Production** environment
- Redeploy after adding variables

### Issue: "Redis not configured" error

**Solution:**
- Check variable names match exactly
- No typos in variable names
- Variables are set for correct environment (Production)

### Issue: Variables show in dashboard but code doesn't see them

**Solution:**
- **Redeploy!** Variables only available after redeployment
- Check if variables are set for all environments (Production, Preview, Development)

## 📝 Quick Fix Checklist

- [ ] Upstash Redis added in Vercel Storage
- [ ] Environment variables visible in Settings → Environment Variables
- [ ] Variables named correctly: `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- [ ] Variables set for **Production** environment
- [ ] Redeployed after adding variables
- [ ] Checked Function Logs for errors
- [ ] Upstash dashboard shows database is active

## 🆘 Still Not Working?

1. **Check the exact error message** from Function Logs
2. **Share the error** - it will help diagnose
3. **Verify Upstash database** is active (not paused)
4. **Try creating a new Upstash database** and linking it again

---

**The most common issue:** Not redeploying after adding environment variables! Always redeploy! 🚀
