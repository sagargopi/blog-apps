import os
import django
from django.contrib.auth import get_user_model

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blogbackend.settings')
django.setup()

# Run migrations
from django.core.management import execute_from_command_line
print('Running migrations...')
execute_from_command_line(['manage.py', 'migrate'])

# Create superuser if it doesn't exist
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    print('Creating superuser...')
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
