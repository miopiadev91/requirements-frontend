FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration=production

FROM nginx:alpine
<<<<<<< HEAD:Dockerfile.dev

COPY --from=build /app/dist/w3crm/browser /usr/share/nginx/html
=======
>>>>>>> dvalerio:Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/testing-deploy/browser /usr/share/nginx/html
EXPOSE 80
