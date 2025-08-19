FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

RUN apt-get update && \
    apt-get install -y --no-install-recommends openssh-client git

COPY scripts/clone-friends-blog.sh /scripts/
RUN chmod +x /scripts/clone-friends-blog.sh

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["/bin/bash", "-c", "/scripts/clone-friends-blog.sh", "&&", "node", "./dist/server/entry.mjs"]