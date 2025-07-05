# Vercel Deployment Checklist

## Pre-deployment Steps

### 1. Frontend Preparation
- [x] API routes configured for production
- [x] Environment variables documented
- [x] Error handling improved
- [x] Build optimization configured
- [x] TypeScript and lint errors addressed

### 2. Backend Preparation (Deploy First)
- [ ] Choose backend hosting platform (Railway, Render, or Heroku)
- [ ] Set up environment variables:
  - [ ] `PINECONE_API_KEY`
  - [ ] `GROQ_API_KEY`
- [ ] Deploy Python backend
- [ ] Test backend endpoints
- [ ] Note down backend URL

### 3. Frontend Deployment
- [ ] Push code to GitHub
- [ ] Import project to Vercel
- [ ] Set environment variable:
  - [ ] `PYTHON_BACKEND_URL` = your backend URL
- [ ] Deploy and test

## Quick Deploy Commands

```bash
# 1. Commit your changes
git add .
git commit -m "Ready for Vercel deployment"
git push origin main

# 2. Test build locally
npm run build
npm run start

# 3. Deploy to Vercel (if using CLI)
npx vercel --prod
```

## Environment Variables Needed

### Frontend (Vercel)
- `PYTHON_BACKEND_URL`: https://your-backend-url.com

### Backend (Railway/Render/Heroku)
- `PINECONE_API_KEY`: Your Pinecone API key
- `GROQ_API_KEY`: Your Groq API key

## Post-deployment Verification

- [ ] Frontend loads correctly
- [ ] All sections display properly
- [ ] Chatbot button appears
- [ ] Chatbot connects and responds
- [ ] Mobile responsiveness works
- [ ] All links function correctly

## Troubleshooting

1. **Chatbot not responding**
   - Check backend deployment status
   - Verify `PYTHON_BACKEND_URL` is correct
   - Check backend logs for errors

2. **Build failures**
   - Check for TypeScript errors
   - Verify all dependencies are in package.json
   - Check Vercel build logs

3. **Images not loading**
   - Ensure images are in public folder
   - Check image paths in components
