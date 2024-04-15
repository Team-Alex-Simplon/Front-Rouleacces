
# syntax=docker/dockerfile:1

# Version spécifique de Node.js
ARG NODE_VERSION=16

# Utiliser une image de Node.js basée sur Alpine
FROM node:${NODE_VERSION}-alpine

# Définir l'environnement Node.js sur production
ENV NODE_ENV production

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Utiliser le cache de npm pour accélérer les installations
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copier tous les fichiers du répertoire actuel dans le répertoire de travail du conteneur
COPY . .

# Exposer le port 3000 sur le conteneur
EXPOSE 3000

# Commande par défaut pour démarrer l'application React
CMD ["npm", "start"]
