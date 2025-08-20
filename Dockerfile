FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN apt-get update && \
apt-get install -y --no-install-recommends openssh-client git

ARG SSH_KEY_B64
RUN mkdir -p /root/.ssh && \
    echo "$SSH_KEY_B64" | base64 -d > /root/.ssh/id_ed25519 && \
    chmod 600 /root/.ssh/id_ed25519 && \
    ssh-keyscan -H codeberg.org >> /root/.ssh/known_hosts

RUN npm install

# clone friends stuff over
RUN git clone ssh://git@codeberg.org/clembs/friends-blog.git src/content/friends

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]