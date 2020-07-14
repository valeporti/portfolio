

# Portfolio Valentin Portillo
## Hello!


> Here you will find the code used to develop my portfolio page. Have a look if you want, it's MERN (Mongo, Express, React+Redux, Node) framework and it's server rendered.

- [Website](https://portfolio-vp.herokuapp.com/)


## Quickstart

*needs NPM and NODE installed -> versions in package.json*

```
  git clone https://github.com/valeporti/portfolio.git
  cd portfolio
  npm install
  npm run dev
```

**Note : Please make sure your MongoDB is running.** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/). Also `npm3` is required to install dependencies properly.

## Available Commands

1. `npm run dev` - starts the developement server with hot reloading enabled

1. `npm run start` - starts the production server

1. `npm run bs` - bundles the code and starts the production server

## File Structure

### Webpack Configs

MERN uses Webpack for bundling modules. There are four types of Webpack configs provided `webpack.config.dev.js` (for development), `webpack.config.prod.js` (for production), `webpack.config.server.js` (for bundling server in production) and `webpack.config.babel.js` (for [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders) for server rendering of assets included through webpack).

### Server

MERN uses express web framework. Our app sits in server.js where we check for NODE_ENV.

If NODE_ENV is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

**Note:** A new Redux Store has populated afresh on every request.

### Client

Client directory contains all the shared components, routes, modules.
