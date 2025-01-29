FROM node:20-alpine AS builder

WORKDIR /mnt
COPY package.json package-lock.json* ./
RUN npm i

COPY . .
RUN npm run build


FROM node:20-alpine AS runner

# RUN npm install -g npm@11.0.0

WORKDIR /mnt
COPY --from=builder /mnt/public ./public
COPY --from=builder /mnt/.next ./.next
COPY --from=builder /mnt/node_modules ./node_modules
COPY --from=builder /mnt/package.json ./package.json

# ENV SWC_BINARY_PATH=/mnt/node_modules/@next/swc-linux-arm64-musl/next-swc.linux-arm64-musl.node

ENV PORT=9090
EXPOSE 9090

CMD ["npm", "run", "start"]
