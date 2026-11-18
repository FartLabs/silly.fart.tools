# silly.fart.tools

🤪 Free placeholder API for your silly FartLabs apps.

## Development

Run the development server:

```sh
deno task start
```

---

Developed with ❤️ [**@FartLabs**](https://fartlabs.org)

## Deploying

`silly.fart.tools` runs as a Cloudflare Worker (`silly-fart-tools`). Deno Deploy Classic is shut down, so this replaces
it.

Every push to `main` deploys through Cloudflare Workers Builds. The build image has no Deno, so the build command is
`npm i -g deno@2.9.6 && deno task build`, followed by `npx wrangler deploy`. To deploy by hand:

```sh
deno task build     # bundles main.tsx to dist/worker.js
npx wrangler deploy # uploads the Worker and attaches silly.fart.tools
```

`deno task check` runs format, lint and the build, and is what CI runs.
