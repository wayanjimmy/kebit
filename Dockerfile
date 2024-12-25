FROM docker.io/denoland/deno:2.1.4 AS build
WORKDIR /kebitdev
COPY . .
RUN deno task build
RUN deno compile --include static --include _fresh --include deno.json -A main.ts

FROM gcr.io/distroless/cc
WORKDIR /app
COPY --from=build /kebitdev/kebitdev /app/main
ENTRYPOINT ["/app/main"]
