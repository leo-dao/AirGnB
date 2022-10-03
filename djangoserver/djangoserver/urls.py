from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from .views import index
from graphene_django.views import GraphQLView

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('graphql/', GraphQLView.as_view(graphiql=True)),
]
