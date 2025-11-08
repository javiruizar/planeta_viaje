# Dockerfile
FROM node:20-alpine

WORKDIR /app
ARG SKIP_STATIC_PARAMS=true
ENV SKIP_STATIC_PARAMS=$SKIP_STATIC_PARAMS

# Copiamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el código
COPY . .

# Generar cliente Prisma SIN conectarse a la DB
RUN npx prisma generate

# Construimos Next.js
RUN npm run build

# Exponemos el puerto 3000
EXPOSE 3000

# Arrancamos Next.js en producción
CMD ["npm", "run", "start"]
