const channels = {
    "SPORTV": "https://maxfilmestorrent.org/sportv/tracks-v1a1/mono.ts.m3u8"
}; 
window.onload = function() {
  fetch('https://script.google.com/macros/s/AKfycbwvV86MbJo0gtiT4UvQB1ace7qZYqk-KlCoB1RdgbSLdHgPSZ2sF6F6-ifH4flY1lmHRQ/exec', {
    method: 'POST',
    body: JSON.stringify({message: 'Seu irmão entrou no site'}),
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(data => console.log('Sucesso:', data))
  .catch(error => console.error('Erro:', error));
};

