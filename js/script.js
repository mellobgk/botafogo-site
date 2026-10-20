"use strict";
// Interações de demonstração: menu, quiz, favoritos, Canvas e formulário local.
const menuBotao = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');
menuBotao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuBotao.setAttribute('aria-expanded', String(aberto));
});
menu.addEventListener('click', (evento) => {
  if (evento.target.closest('a')) {
    menu.classList.remove('aberto');
    menuBotao.setAttribute('aria-expanded', 'false');
  }
});
const quiz = document.querySelector('#quiz-form');
quiz.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const resposta = new FormData(quiz).get('ano');
  document.querySelector('#resultado-quiz').textContent = resposta === '1904'
    ? 'Correto! O futebol do Botafogo começou em 1904.'
    : 'Ainda não. A resposta esperada é 1904.';
});
const favoritoBotao = document.querySelector('#botao-favorito');
const favoritoStatus = document.querySelector('#status-favorito');
let favorito = false;
try { favorito = localStorage.getItem('botafogo-favorito') === 'sim'; } catch (erro) { console.info('Armazenamento local indisponível.'); }
function atualizarFavorito() {
  favoritoBotao.setAttribute('aria-pressed', String(favorito));
  favoritoBotao.textContent = favorito ? '★ Remover favorito' : '☆ Favoritar Botafogo';
  favoritoStatus.textContent = favorito ? 'Botafogo está nos seus favoritos.' : 'Ainda não foi favoritado.';
}
favoritoBotao.addEventListener('click', () => {
  favorito = !favorito;
  try { localStorage.setItem('botafogo-favorito', favorito ? 'sim' : 'nao'); } catch (erro) { console.info('Preferência não pôde ser salva.'); }
  atualizarFavorito();
});
atualizarFavorito();
const canvas = document.querySelector('#canvas-estrela');
const contexto = canvas.getContext('2d');
if (contexto) {
  contexto.fillStyle = '#0e0e10';
  contexto.fillRect(0, 0, canvas.width, canvas.height);
  contexto.beginPath();
  for (let ponto = 0; ponto < 10; ponto++) {
    const angulo = -Math.PI / 2 + ponto * Math.PI / 5;
    const raio = ponto % 2 === 0 ? 68 : 28;
    const x = 160 + Math.cos(angulo) * raio;
    const y = 85 + Math.sin(angulo) * raio;
    if (ponto === 0) contexto.moveTo(x, y);
    else contexto.lineTo(x, y);
  }
  contexto.closePath();
  contexto.fillStyle = '#f4f3ef';
  contexto.fill();
}
const contato = document.querySelector('#form-contato');
contato.addEventListener('submit', (evento) => {
  evento.preventDefault();
  document.querySelector('#form-feedback').textContent = 'Formulário validado! Esta demonstração não envia mensagens para um servidor.';
  contato.reset();
});
