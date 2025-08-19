# FROM python:3.9.18-alpine3.18

# RUN apk add build-base

# RUN apk add postgresql-dev gcc python3-dev musl-dev

# ARG FLASK_APP
# ARG FLASK_ENV
# ARG DATABASE_URL
# ARG SCHEMA
# ARG SECRET_KEY

# WORKDIR /var/www

# COPY requirements.txt .

# RUN pip install -r requirements.txt
# RUN pip install psycopg2

# COPY . .

# RUN flask db upgrade
# RUN flask seed all
# CMD gunicorn app:app

# FROM python:3.9.18-alpine3.18

# RUN apk add build-base
# RUN apk add postgresql-dev gcc python3-dev musl-dev

# ARG FLASK_APP
# ARG FLASK_ENV
# ARG DATABASE_URL
# ARG SCHEMA
# ARG SECRET_KEY

# WORKDIR /var/www

# COPY requirements.txt .
# RUN pip install -r requirements.txt
# RUN pip install psycopg2

# COPY . .

# RUN flask db upgrade
# # RUN flask seed all  <- Comment this out first
# CMD gunicorn app:app


# THIS runs

# Build React app
# FROM node:16-alpine as build-stage

# WORKDIR /react-app
# COPY react-vite/package*.json ./
# RUN npm install
# COPY react-vite/ ./
# RUN npm run build

# # Python Flask app
# FROM python:3.9.18-alpine3.18

# RUN apk add build-base
# RUN apk add postgresql-dev gcc python3-dev musl-dev

# ARG FLASK_APP
# ARG FLASK_ENV
# ARG DATABASE_URL
# ARG SCHEMA
# ARG SECRET_KEY

# WORKDIR /var/www

# COPY requirements.txt .
# RUN pip install -r requirements.txt
# RUN pip install psycopg2

# COPY . .

# # Copy built React app to Flask static directory
# COPY --from=build-stage /react-app/dist ./app/static

# RUN flask db upgrade

# CMD gunicorn app:app

# # Build React app
# FROM node:16-alpine as build-stage
# WORKDIR /react-app
# COPY react-vite/package*.json ./
# RUN npm install
# COPY react-vite/ ./
# RUN echo "=== BUILDING REACT APP ==="
# RUN npx vite build
# RUN echo "=== REACT BUILD COMPLETE - CHECKING DIST FOLDER ==="
# RUN ls -la dist/
# RUN echo "=== CONTENTS OF DIST ==="
# RUN find dist/ -type f

# Python Flask app  
FROM python:3.9.18-alpine3.18
RUN apk add build-base
RUN apk add postgresql-dev gcc python3-dev musl-dev

ARG FLASK_APP
ARG FLASK_ENV
ARG DATABASE_URL
ARG SCHEMA
ARG SECRET_KEY

WORKDIR /var/www
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install psycopg2
COPY . .

# Copy built React app to Flask static directory
RUN echo "=== COPYING REACT BUILD TO FLASK STATIC ==="
COPY --from=build-stage /react-app/dist ./app/static

RUN echo "=== CHECKING FLASK STATIC DIRECTORY ==="
RUN ls -la ./app/static/
RUN echo "=== SEARCHING FOR HTML FILES ==="
RUN find ./app -name "*.html" -type f
RUN echo "=== FLASK APP STRUCTURE ==="
RUN ls -la ./app/

RUN flask db upgrade
CMD gunicorn app:app

# Build React app
FROM node:16-alpine as build-stage
WORKDIR /react-app
COPY react-vite/package*.json ./
RUN npm install
COPY react-vite/ ./
RUN npx vite build
