async function buscarHora() {
    const elemento = document.getElementById('data-hora');
    elemento.textContent = 'Carregando...';
  
    try {
      const resposta = await fetch('https://api-time-ati6.onrender.com');
      const dados = await resposta.json();
  
      // Exibe diretamente o campo "date"
      elemento.textContent = dados.date;
    } catch (erro) {
      console.error('Erro ao buscar data/hora:', erro);
      elemento.textContent = 'Erro ao carregar horário';
    }
  }
  
  window.onload = buscarHora;
  