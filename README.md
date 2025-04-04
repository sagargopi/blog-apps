# Blog Application

A full-stack blog application with user authentication and CRUD operations.

## Features
- User authentication
- Create, read, update, and delete blog posts
- Responsive design
- RESTful API
- Production-ready security settings

## Tech Stack
- Backend: Django + Django REST Framework
- Frontend: React
- Database: PostgreSQL (production) / SQLite (development)
- Styling: Material-UI

## Live Demo
- Frontend: [Coming soon]
- Backend API: [Coming soon]

## Quick Deploy Instructions

### Backend (Railway)
1. Create a Railway account
2. Create new project and environment:
   - Click "New Project"
   - Name: "staging"
   - Select "Empty Environment"

3. Add PostgreSQL Database:
   - Click "New" → "Database" → "PostgreSQL"
   - Wait for provisioning

4. Add Backend Service:
   - Click "New" → "GitHub Repo"
   - Select this repository
   - Root Directory: `backend`
   - Start Command: `gunicorn blogbackend.wsgi:application`

5. Configure Environment Variables:
   ```
   DJANGO_SECRET_KEY=your_secret_key
   DJANGO_DEBUG=False
   PYTHON_VERSION=3.9
   ALLOWED_HOSTS=.railway.app
   ```

6. Run Migrations:
   - Go to "Shell" tab
   - Run: `python manage.py migrate`
   - Run: `python manage.py createsuperuser`

### Frontend (Netlify)
1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select this repository
4. Configure:
   - Base directory: `frontend`
   - Build command: `chmod +x build.sh && ./build.sh`
   - Publish directory: `dist`
5. Add Environment Variables:
   - Update `config.js` with your Railway backend URL

## Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/sagargopi/blog-apps.git
   cd blog-apps
   ```

2. Start backend:
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. Start frontend:
   ```bash
   cd frontend
   python -m http.server 3000
   ```

Visit:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/
- Admin: http://localhost:8000/admin/

## Default Admin Credentials
- Username: admin
- Password: admin123
- Email: admin@example.com

## Security Notes
- In production, make sure to:
  1. Change the default admin password
  2. Set secure DJANGO_SECRET_KEY
  3. Update ALLOWED_HOSTS in settings.py
  4. Enable SSL/HTTPS (automatic with Railway)

## Repository Structure
```
blog-app/
├── backend/              # Django application
│   ├── blog/            # Main app
│   ├── blogbackend/     # Project settings
│   └── requirements.txt # Python dependencies
└── frontend/            # React application
    ├── index.html      # Entry point
    ├── app.js         # React components
    └── styles.css     # Styling
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
