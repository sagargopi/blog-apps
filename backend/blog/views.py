from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import BlogPost
from .serializers import BlogPostSerializer

# Create your views here.

class BlogPostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        return BlogPost.objects.all().order_by('-created_at')
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
