// Anything that isn't a real asset of the page reaches this handler.
// 410 Gone: the domain's previous life (an OpenCart store, †2022) keeps attracting
// crawlers and scanners — tell Google & friends those URLs are permanently dead.
export default {
  async fetch() {
    return new Response("Gone", { status: 410, headers: { "content-type": "text/plain" } });
  },
};
