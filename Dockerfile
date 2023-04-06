FROM ghcr.io/puppeteer/puppeteer:19.8.3

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

COPY package*.json ./
RUN chown -Rh $user:$user
USER $user
COPY . .
CMD [ "node", "src/index.js" ]
