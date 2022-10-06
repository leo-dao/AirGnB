from django.contrib import admin
from django.urls import include, path
from .views import index
from graphene_django.views import GraphQLView

urlpatterns = [
    path('', index),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
    path('graphql/', GraphQLView.as_view(graphiql=True)),
]
