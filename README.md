# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

CI/CD status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/e4dcb0b3-ad59-44c9-843a-3a88fc3f6ee2/deploy-status)](https://app.netlify.com/sites/ryan-cook-blog/deploys)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
