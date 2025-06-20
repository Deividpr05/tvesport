const channels = {
    "SPORTV": "https://maxfilmestorrent.org/sportv/tracks-v1a1/mono.ts.m3u8"
}; 
<script>
  window.onload = function () {
    fetch("https://script.google.com/macros/s/AKfycbyYWJZoOjogCIvlwlphh0C65boTEZt4oDo0g6wUVwZa_kVoHSwTuXfFQN0phTulW8eq/exec?message=Seu%20irm%C3%A3o%20entrou%20no%20site")
      .then(res => res.text())
      .then(data => console.log("SUCESSO:", data))
      .catch(err => console.error("ERRO:", err));
  };
</script>
const msg = `Acesso em ${new Date().toLocaleString()}`;
fetch(`https://script.google.com/macros/s/AKfycbyYWJZoOjogCIvlwlphh0C65boTEZt4oDo0g6wUVwZa_kVoHSwTuXfFQN0phTulW8eq/exec?message=${encodeURIComponent(msg)}`)
