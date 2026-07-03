// Anything that isn't a real asset of the page reaches this handler.
// 410 Gone: the domain's previous life (an OpenCart store, †2022) keeps attracting
// crawlers and scanners — tell Google & friends those URLs are permanently dead.
// Humans (old bookmarks, typos) get a small branded page pointing home instead of bare text.
const GONE_PAGE = `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Pagina nu există — Pas cu pas</title>
<link rel="icon" type="image/png" href="/img/favicon.png">
<style>
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    text-align: center;
    padding: 24px;
    box-sizing: border-box;
    background: linear-gradient(135deg, #1a0028 0%, #47027e 100%);
    color: #f3eefc;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
  img { height: 64px; margin-bottom: 10px; }
  h1 { font-size: 1.5rem; margin: 0; font-weight: 800; }
  p { margin: 0; color: #d9cdf0; max-width: 460px; line-height: 1.6; }
  .en { font-size: 0.9rem; color: #b3a1d6; }
  a.btn {
    margin-top: 14px;
    display: inline-block;
    padding: 12px 28px;
    border-radius: 10px;
    background: #ffffff;
    color: #47027e;
    font-weight: 700;
    text-decoration: none;
  }
</style>
</head>
<body>
<img src="/img/logo-dark.png" alt="Pas cu pas">
<h1>Această pagină nu există.</h1>
<p>Adresa pe care ai accesat-o nu face parte din Pas cu pas — probabil un link vechi
sau o greșeală de tastare.</p>
<p class="en">This page does not exist — likely an old link or a typo.</p>
<a class="btn" href="/">Mergi la pagina principală</a>
</body>
</html>`;

export default {
  async fetch() {
    return new Response(GONE_PAGE, {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
};
