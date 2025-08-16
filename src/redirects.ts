/**
 * most of these links are honestly just for archival purposes and to ensure every link
 * ever shared still works (i like preservation somewhat)
 */

const redirectList = [
  // shortlinks to creation platforms
  { source: "/kofi", destination: "https://ko-fi.com/clembs" },
  { source: /\/gh\/(.*)/, destination: "https://github.com/Clembs/$1" },
  { source: /\/github\/(.*)/, destination: "https://github.com/Clembs/$1" },
  { source: "/itchio", destination: "https://clembs.itch.io" },
  { source: "/npm", destination: "https://npmjs.com/~clembs" },
  {
    source: "/soundcloud/$1",
    destination: "https://soundcloud.com/Clembs/$1",
  },
  { source: "/twitter", destination: "https://x.com/clembsv" },
  { source: "/x", destination: "https://x.com/clembsv" },

  // legacy redirects to make sure every link still works
  { source: /\/videos\/(.*)/, destination: "/files/videos/$1" },
  { source: /\/files\/(.*)/, destination: "https://c.clembs.com/$1" },
  { source: /\/media\/(.*)/, destination: "https://m.clembs.com/$1" },
  { source: /\/crbt\/(.*)/, destination: "https://crbt.app/$1" },
  { source: "/rickroll", destination: "https://youtu.be/dQw4w9WgXcQ" },
  { source: "/archive/crbt", destination: "https://crbt.app" },
  {
    source: "/archive/purplet",
    destination: "https://github.com/CRBT-Team/Purplet",
  },
  { source: "/archive/messages", destination: "https://clembs.com/messages" },
  {
    source: "/archive/acknowledgements",
    destination: "https://npmjs.org/acknowledgements",
  },
  { source: "/buymeacoffee", destination: "https://ko-fi.com/clembs" },
  { source: "/boosty", destination: "https://ko-fi.com/clembs" },
  { source: "/questions", destination: "/messages" },
  { source: /\/branding\/(.*)/, destination: "/blog/$1" },
  { source: /\/blog\/design\/(.*)/, destination: "/blog/$1" },
  { source: "/blog/design", destination: "/blog#work" },
  { source: "/branding", destination: "/blog#work" },
  { source: "/software", destination: "/blog#work" },
  { source: "/contact", destination: "#contact" },
  { source: "/stream", destination: "/disabled-redirect#twitch" },

  // very old projects
  {
    source: "/grazalink",
    destination: "https://sites.google.com/view/grazalink",
  },
  { source: "/flapps", destination: "https://sites.google.com/view/flapps" },
  { source: "/unibros/latest", destination: "/unibros/unibros-demo3.zip" },

  // things i privated/deleted/archived for good
  { source: "/discord", destination: "/disabled-redirect#discord" },
  { source: "/twitch", destination: "/disabled-redirect#twitch" },
  { source: "/yt", destination: "/disabled-redirect#youtube" },
  { source: "/youtube", destination: "/disabled-redirect#youtube" },
  { source: "/instagram", destination: "/disabled-redirect" },
  { source: "/mastodon", destination: "/disabled-redirect" },
  { source: "/onlyfans", destination: "/disabled-redirect" }, // this was a troll back when i thought it was funny
  { source: "/spotify", destination: "/disabled-redirect" },
  { source: "/steam", destination: "/disabled-redirect" },
];

export function handleRedirect(url: URL) {
  for (const redirect of redirectList) {
    if (
      typeof redirect.source === "string" &&
      url.pathname.startsWith(redirect.source)
    ) {
      return redirect.destination;
    }

    if (
      redirect.source instanceof RegExp &&
      redirect.source.test(url.pathname)
    ) {
      const match = redirect.source.exec(url.pathname);
      if (match) {
        return redirect.destination.replace("$1", match[1]);
      }
    }
  }
}
