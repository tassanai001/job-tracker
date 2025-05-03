# Use full Node image (not Alpine)
FROM node:18

WORKDIR /app

# Copy files and install bcrypt with rebuild
COPY package*.json ./
RUN npm install --omit=dev && npm rebuild bcrypt

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
