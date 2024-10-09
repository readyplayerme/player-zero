FROM node:20.15.1-alpine as builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM builder as production

COPY --from=builder /app/src /app/src
COPY --from=builder /app/_build /app/_build
COPY --from=builder /app/.ancros /app/.ancros
COPY --from=builder /app/.env /app/.env
COPY --from=builder /app/ecosystem.config.cjs /app/ecosystem.config.cjs
COPY --from=builder /app/jtsx.config.example.js /app/jtsx.config.example.js
COPY --from=builder /app/jtsx.config.example.js /app/jtsx.config.example.js

RUN npm install pm2 -g

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
