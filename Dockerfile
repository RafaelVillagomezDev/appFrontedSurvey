# Etapa 1: Construcción de la aplicación
FROM node:18 as build

# Crear el directorio de la aplicación
RUN mkdir -p /app

RUN chmod -R 777 /app

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa 2: Configuración de Nginx
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# ADD NGINX CONF 
ADD ./.nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

# Copia los archivos estáticos construidos desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html/

# Exponer el puerto
EXPOSE 80
# Ejecuta Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
 
