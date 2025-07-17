FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .env.production .env.production

COPY . .
RUN npm run build -- --mode production

FROM node:18 as serve

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
