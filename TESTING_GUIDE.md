# 🧪 CMS Testing Guide

Follow these steps to verify your CMS is working correctly in production with Upstash Redis.

## ✅ Pre-Testing Checklist

Before testing, verify:
- [ ] Upstash Redis is added in Vercel Storage
- [ ] Environment variables are set (`UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`)
- [ ] Code is deployed to Vercel (check deployment status)
- [ ] Deployment completed successfully (no errors)

## 🚀 Step-by-Step Testing

### 1. Access Admin Login

1. Go to your production URL: `https://your-domain.vercel.app/admin/login`
2. You should see the admin login page
3. Login with your credentials:
   - Username: `admin` (or your custom username)
   - Password: `admin123` (or your custom password)

### 2. Test Content Reading

1. After logging in, you should be redirected to `/admin/dashboard`
2. Navigate to any content section:
   - `/admin/content/hero` - Hero slides
   - `/admin/content/services` - Services
   - `/admin/content/faqs` - FAQs
   - `/admin/content/testimonials` - Testimonials
   - `/admin/content/achievements` - Achievements
   - `/admin/content/about` - About section

3. **Expected:** You should see existing content loaded (default content if first time)

### 3. Test Content Writing (CRITICAL TEST)

This is the main test to verify Redis is working:

1. Go to `/admin/content/hero` (or any content section)
2. Click **"Add New"** or edit an existing item
3. Make a small change:
   - Change a title
   - Update description
   - Modify order
4. Click **"Save All"** or **"Save"**
5. **Expected:** You should see a success message
6. **Check:** Refresh the page - your changes should still be there! ✅

### 4. Test Persistence (THE KEY TEST)

This verifies Redis is actually saving:

1. Make a change in the CMS (e.g., update a FAQ question)
2. Save it
3. **Wait 30 seconds**
4. Refresh the page
5. **Expected:** Your change is still there ✅
6. **Even better test:**
   - Make a change
   - Save it
   - Close the browser tab
   - Open a new tab
   - Go back to the CMS
   - **Expected:** Your change persists! ✅

### 5. Test Multiple Sections

Test different content types:
- [ ] Hero slides - Add/edit/delete
- [ ] Services - Update descriptions
- [ ] FAQs - Add new question
- [ ] Testimonials - Update quote
- [ ] Achievements - Change numbers
- [ ] About - Update description

### 6. Verify Frontend Updates

1. Make a change in CMS (e.g., update hero slide title)
2. Save it
3. Go to your homepage: `https://your-domain.vercel.app`
4. **Expected:** The change should appear on the frontend
5. Refresh the page - change should persist

## 🔍 Troubleshooting Tests

### Test 1: Check Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify you see:
   - `UPSTASH_REDIS_REST_URL` (should start with `https://`)
   - `UPSTASH_REDIS_REST_TOKEN` (should be a long string)
3. If missing, Upstash integration might not be complete

### Test 2: Check Deployment Logs

1. Go to Vercel Dashboard → Your Project → Deployments
2. Click on latest deployment
3. Check **Build Logs** and **Function Logs**
4. Look for errors related to:
   - `UPSTASH_REDIS_REST_URL`
   - `Redis not configured`
   - Connection errors

### Test 3: Check Upstash Dashboard

1. Go to [Upstash Console](https://console.upstash.com/)
2. Select your database
3. Check **Usage** tab - you should see commands being used
4. If you see commands, Redis is working! ✅

### Test 4: Browser Console Check

1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Make a change in CMS
4. Look for errors (red messages)
5. **Expected:** No Redis-related errors

## 🐛 Common Issues & Solutions

### Issue: "Redis not configured" error

**Solution:**
1. Verify environment variables in Vercel
2. Make sure Upstash Redis is linked to your project
3. Redeploy after adding Upstash

### Issue: Changes not saving

**Check:**
1. Browser console for errors
2. Vercel function logs
3. Upstash dashboard - are commands being used?
4. Network tab - is API call successful?

### Issue: Changes disappear after refresh

**This means Redis is NOT working:**
1. Check environment variables
2. Verify Upstash is properly integrated
3. Check deployment logs for errors
4. Make sure you're testing on production, not localhost

### Issue: "Failed to fetch data" error

**Solution:**
1. Check API route is working: `/api/cms?section=hero`
2. Verify Redis connection
3. Check Vercel function logs

## ✅ Success Indicators

Your CMS is working correctly if:

- ✅ You can login to admin panel
- ✅ You can view existing content
- ✅ You can edit and save content
- ✅ Changes persist after page refresh
- ✅ Changes persist after closing browser
- ✅ Changes appear on frontend
- ✅ No errors in browser console
- ✅ Upstash dashboard shows command usage

## 📊 Quick Test Script

Run this quick test:

1. **Login** → `/admin/login`
2. **Go to FAQs** → `/admin/content/faqs`
3. **Edit first FAQ** → Change the question text
4. **Save** → Click "Save All"
5. **Refresh page** → Changes should persist ✅
6. **Check homepage** → Changes should appear ✅

If all steps pass, your CMS is working perfectly! 🎉

## 🆘 Still Having Issues?

1. Check Vercel deployment logs
2. Check Upstash dashboard for errors
3. Verify environment variables
4. Try redeploying
5. Check browser console for specific errors

---

**Need help?** Share the error message from:
- Browser console
- Vercel function logs
- Upstash dashboard
