const channels = {
    "SPORTV": "https://maxfilmestorrent.org/sportv/tracks-v1a1/mono.ts.m3u8"
}; 
window.onload = function () {
  fetch("https://script.google.com/macros/library/d/1WGMulXD7zot5IhxTyXY9wvw8GTnLkhTtVuyLjqRUZ2PbDBMTqR2ZQJc_/2")
    .then(res => res.text())
    .then(data => console.log("Deu bom:", data))
    .catch(err => console.error("Deu ruim:", err));
};

