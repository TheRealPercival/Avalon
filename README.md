# Avalon

This is an online version of Don Eskridge's _Avalon: Big Box Edition_. It involves some house rules and features that make it different from the original game, but most of the original game mechanics are the same.

## Project Structure

### `client/`

The frontend client is a Next.js application written in TypeScript configured to work as a progresive web app.

### `server/`

Our websocket server is also written in TypeScript and uses the Socket.IO library to enable real-time bidirectional communication between the clients and the server.

### `shared/`

We have a shared directiory we use to share TypeScript types and other resources between both applications to ensure consistent type references.
