FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install

RUN apt-get update && \
apt-get install -y --no-install-recommends openssh-client git

# clone friends stuff over
RUN git clone ssh://git@codeberg.org/clembs/friends-blog.git src/content/friends

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]