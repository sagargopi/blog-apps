# Blog Application

A full-stack blog application with user authentication and CRUD operations.

## Features
- User authentication
- Create, read, update, and delete blog posts
- Responsive design
- RESTful API

## Tech Stack
- Backend: Django + Django REST Framework
- Frontend: React
- Database: SQLite (can be changed to PostgreSQL for production)
- Styling: Material-UI

## Deployment Instructions

### Backend Deployment (Railway)
1. Create a Railway account at https://railway.app
2. Install Railway CLI: `npm i -g @railway/cli`
3. Login to Railway: `railway login`
4. Initialize project: `railway init`
5. Create PostgreSQL database: `railway add`
6. Deploy:
   ```bash
   cd backend
   railway up
   ```

### Frontend Deployment (Vercel)
1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Login to Vercel: `vercel login`
4. Deploy:
   ```bash
   cd frontend
   vercel
   ```

## Environment Variables
Backend (Railway):
- `DJANGO_SECRET_KEY`: Your Django secret key
- `DJANGO_DEBUG`: Set to 'False' in production
- `DATABASE_URL`: Automatically set by Railway

Frontend (Vercel):
- `REACT_APP_API_URL`: Your Railway backend URL

## Local Development
1. Start backend:
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

2. Start frontend:
   ```bash
   cd frontend
   python -m http.server 3000
   ```

## Default Admin Credentials
- Username: admin
- Password: admin123
- Email: admin@example.com
