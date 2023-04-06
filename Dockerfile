FROM ghcr.io/puppeteer/puppeteer:19.8.3

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /

COPY package*.json ./

COPY . .
CMD [ "node", "src/index.js" ]
