# Himanshu Gangwar Portfolio

A modern portfolio website built with Next.js, featuring an AI-powered chatbot assistant.

## Features

- 🎨 Modern, responsive design
- 🤖 AI-powered chatbot assistant
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 Professional portfolio sections

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Python Flask, Pinecone, Groq
- **UI Components**: Radix UI, Lucide Icons
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)

## Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd myPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your API keys for the Python backend

4. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev

   # Or start only frontend (if backend is deployed)
   npm run dev:frontend
   ```

## Deployment

### Frontend (Vercel)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables:
     - `PYTHON_BACKEND_URL`: URL of your deployed Python backend

3. **Environment Variables Required**
   - `PYTHON_BACKEND_URL`: https://your-backend-url.com

### Backend Deployment Options

#### Option 1: Railway
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Select the `python_backend` folder
4. Set environment variables:
   - `PINECONE_API_KEY`
   - `GROQ_API_KEY`

#### Option 2: Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect your GitHub repo
4. Set build command: `cd python_backend && pip install -r requirements.txt`
5. Set start command: `cd python_backend && python app.py`
6. Add environment variables

#### Option 3: Heroku
1. Install Heroku CLI
2. Create new app: `heroku create your-app-name`
3. Add Python buildpack: `heroku buildpacks:set heroku/python`
4. Set environment variables: `heroku config:set PINECONE_API_KEY=your_key`
5. Deploy: `git push heroku main`

## Project Structure

```
myPortfolio/
├── src/
│   ├── app/
│   │   ├── api/qna/route.ts     # API proxy to Python backend
│   │   ├── page.tsx             # Main page
│   │   └── layout.tsx           # Root layout
│   ├── components/
│   │   ├── common/
│   │   │   └── FloatingChatbot.tsx  # AI chatbot component
│   │   └── sections/            # Portfolio sections
│   └── lib/                     # Utilities
├── python_backend/
│   ├── app.py                   # Flask backend
│   └── requirements.txt         # Python dependencies
├── public/                      # Static assets
└── vercel.json                  # Vercel configuration
```

## Troubleshooting

### Common Issues

1. **Chatbot not working**
   - Check if `PYTHON_BACKEND_URL` is set correctly
   - Verify backend is deployed and accessible

2. **Build errors**
   - Run `npm run lint` to check for issues
   - Ensure all dependencies are installed

3. **Environment variables**
   - Make sure all required env vars are set in production
   - Check Vercel dashboard for environment variables

## Contact

For any questions or issues, please contact Himanshu Gangwar.
