import { Get, Router } from "@fartlabs/rtx";

// TODO: Random fart noises endpoints. Prior art:
// https://github.com/gddmadoss/movies/blob/9c0b71ed5a900a8754f6abef75c409e6e2fd6d82/sounds.ts
//

const sillyJokes = [
  "At FartLabs, we don't have bugs, we have 'undocumented emissions.'",
  "Our motto for debugging: 'Find the source and air it out.'",
  "We just shipped our new 'Code Smell Detector.'",
  "A developer at FartLabs doesn't push code to production. They just let it rip.",
  "The FartLabs daily stand-up meeting is called 'The Morning De-Briefing.'",
  "I asked a dev for a quick software fix. He said, 'No problem, I'll pull a solution out of the wazoo.'",
  "Their back-end team is known for producing very powerful, silent APIs.",
  "The intern was asked to analyze the server logs. He came back and said they smelled funny.",
  "What do you call a bad deployment at FartLabs? A brown-out.",
  "Why was the FartLabs developer so calm under pressure? He had excellent release control.",
];

/**
 * sillyShits are shits documented by Gregory Davidson.
 *
 * Do not edit.
 */
const sillyShits = [
  "Bull",
  "Dog",
  "Chicken",
  "Good",
  "Soccer",
  "Dumb",
  "Oh!",
  "No",
  "Stupid",
  "Turkey",
  "You",
  "Tough",
  "Bat",
  "Little",
  "Crock of",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const router = (
  <Router default={() => new Response("Not found", { status: 404 })}>
    <Get
      pattern="/"
      handler={() =>
        new Response(
          "<h1>Welcome to <code>silly.fart.tools</code></h1>" +
            "<h2>Directory</h2>" +
            "<ul>" +
            '<li><a href="/jokes">Jokes</a>, <a href="/jokes/random">Random Joke</a></li>' +
            '<li><a href="/shits">Shits</a>, <a href="/shits/random">Random Shit</a></li>' +
            "</ul>",
          { headers: { "Content-Type": "text/html" } },
        )}
    />
    <Get
      pattern="/jokes"
      handler={() =>
        Response.json(sillyJokes)}
    />
    <Get
      pattern="/jokes/random"
      handler={() => new Response(pickRandom(sillyJokes))}
    />
    <Get
      pattern="/shits"
      handler={() => Response.json(sillyShits)}
    />
    <Get
      pattern="/shits/random"
      handler={() => new Response(pickRandom(sillyShits))}
    />
  </Router>
);

export default {
  fetch: (request: Request) => {
    return router.fetch(request);
  },
} satisfies Deno.ServeDefaultExport;
