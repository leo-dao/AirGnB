import django
from distutils.debug import DEBUG
from pathlib import Path
from telnetlib import AUTHENTICATION
import os
from datetime import timedelta

from dotenv import load_dotenv
load_dotenv()

from django.utils.encoding import force_str
django.utils.encoding.force_text = force_str


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
CLIENT_DIR = BASE_DIR.parent / 'client'

SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
ALLOWED_HOSTS = ['localhost', '127.0.0.1']


# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'graphene_django',
    'graphql_jwt.refresh_token.apps.RefreshTokenConfig',
    'graphql_auth',
    'django_filters',
    'corsheaders',
    'accounts',
    'listings',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

AUTH_USER_MODEL = 'accounts.User'


GRAPHENE = {
    'SCHEMA': 'config.schema.schema',
    'MIDDLEWARE': [
        'graphql_jwt.middleware.JSONWebTokenMiddleware',
    ],
}

AUTHENTICATION_BACKENDS = [
    'graphql_auth.backends.GraphQLAuthBackend',
    'graphql_jwt.backends.JSONWebTokenBackend',
    'django.contrib.auth.backends.ModelBackend',
]

GRAPHQL_JWT = {
    'JWT_VERIFY_EXPIRATION': True,
    'JWT_LONG_RUNNING_REFRESH_TOKEN': True,
    'JWT_EXPIRATION_DELTA': timedelta(minutes=5),
    'JWT_REFRESH_EXPIRATION_DELTA': timedelta(days=7),
    'JWT_ALLOW_ANY_CLASSES': [
        'graphql_auth.mutations.Register',
        'graphql_auth.mutations.VerifyAccount',
        'graphql_auth.mutations.DeleteAccount',
        'graphql_auth.mutations.UpdateAccount',
        'graphql_auth.mutations.ObtainJSONWebToken',
        'graphql_auth.mutations.RefreshToken',
        'graphql_auth.mutations.SendPasswordResetEmail',
        'graphql_auth.mutations.PasswordReset',
        'graphql_auth.mutations.VerifyToken',
        'graphql_auth.mutations.ResendActivationEmail',
    ],
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            CLIENT_DIR / 'build',
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

STATICFILES_DIRS = [
    CLIENT_DIR / 'build' / 'static',
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# TODO: Create user for the database

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'AirGnB',
        'USER': 'postgres',
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': 'localhost',
        'PORT': '',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'