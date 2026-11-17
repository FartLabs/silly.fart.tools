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

```sh
deno task build     # bundles main.tsx to dist/worker.js
npx wrangler deploy # uploads the Worker and attaches silly.fart.tools
```

`deno task check` runs format, lint and the build, and is what CI runs.
