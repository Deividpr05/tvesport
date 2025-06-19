const channels = {
    "SPORTV": "https://maxfilmestorrent.org/sportv/tracks-v1a1/mono.ts.m3u8"
}; 
window.onload = function () {
  fetch('https://script.google.com/macros/s/AKfycbwUC0_HNcJAiBCvxZchCWGo9a67HVXsN12MzW_t-7EC7crRACkV3EuaHDxd54vs0ZQmpQ/exec')
    .then(response => response.text())
    .then(data => console.log('Sucesso:', data))
    .catch(error => console.error('Erro:', error));
};


