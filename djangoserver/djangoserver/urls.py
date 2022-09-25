from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

from graphene_django.views import GraphQLView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('graphql/', GraphQLView.as_view(graphiql=True)),
]