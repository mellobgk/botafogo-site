# Botafogo de Futebol e Regatas — Front-end

Projeto acadêmico da disciplina Desenvolvimento Front-end para Web.

## Como executar
Abra `index.html` no navegador ou use Live Server no VS Code. Não é necessário instalar dependências.

## Tecnologias
HTML5 semântico, CSS3 (Flexbox, Grid, media queries), SVG, Canvas e JavaScript puro.

## Funcionalidades
- Navegação responsiva com botão acessível em telas pequenas.
- Quiz sobre a fundação do Botafogo.
- Favorito persistido no `localStorage` (quando disponível).
- Ilustração Canvas e emblema SVG.
- Formulário com validação HTML5. **Demonstração local: não envia dados.**
- Player HTML5 com formatos MP4 e WebM e legenda VTT, caso os arquivos sejam fornecidos.

## Arquivos de mídia pendentes
O HTML original faz referência a `assets/videos/botafogo.mp4`, `botafogo.webm`, `legenda.vtt` e `assets/images/botafogo-poster.jpg`. Esses arquivos não foram enviados e devem ser adicionados para o vídeo funcionar. Não foram inventados conteúdos ou vídeos.

## Checklist e entregas
O guia de avaliação exige também evidências externas ao código: repositório público, commits descritivos, branches e PRs; Lighthouse antes/depois; deploy GitHub Pages, URL pública e HTTPS. Esses itens **não estão automaticamente concluídos** por este pacote. As aulas 10–15 requerem atividades e PRs próprios; o projeto inclui algumas funcionalidades antecipadas, mas não substitui essas entregas.

## Observação
Há divergência de numeração entre a apostila enviada (JavaScript como Aula 09) e o guia de avaliação por pares (JavaScript como Aula 10). Confirme com o professor qual roteiro usar em cada entrega.

## Avaliação

- 21/10 - avaliação em pares -

### Aula 6 — CSS3 — Sintaxe, Seletores e Box Model

**1. Seletores eficientes**

- **Status:** Atende Plenamente
- **Comentário:** O `css/style.css` não usa `!important` em nenhum ponto. Os seletores são de classe com nomes claros (`.topo__inner`, `.botao--principal`, `.painel`) e poucos níveis de aninhamento. O seletor mais longo (`#form-contato input:not([type=checkbox])`, linha 260) é justificável, porque limita o estilo ao formulário de contato.

**2. Box model consistente**

- **Status:** Atende Plenamente
- **Comentário:** `* { box-sizing: border-box; }` está na linha 14, aplicado a todo o projeto, e o `body` zera a margem padrão (linha 17).

**3. CSS organizado**

- **Status:** Atende Plenamente
- **Comentário:** Todo o estilo está no arquivo externo `css/style.css`, ligado por um único `<link>`, e o `index.html` não tem nenhum atributo `style=""`. Há duas ressalvas de organização (sem afetar o critério): o bloco das linhas 238–274 está escrito em formato compactado, sem quebras de linha, o que dificulta a leitura; e existe um `style.css` na raiz do repositório que não é carregado por nenhuma página e é uma versão antiga do mesmo arquivo. Vale apagá-lo para não gerar confusão.

### Aula 8 — CSS3 — Menus e Navegação

**4. Menu funcional e responsivo**

- **Status:** Atende Plenamente
- **Comentário:** Em tela grande o menu é uma lista em Flexbox que quebra de linha (`.topo nav ul`, linhas 110 e 243). Em telas de até 650px aparece um `<button>` semântico "☰ Menu" (linha 246 e `@media`, linhas 264–273). O `script.js` (linhas 3–14) alterna a classe `aberto`, mantém o `aria-expanded` coerente e fecha o menu ao clicar num link.

**5. Estados de interação visíveis**

- **Status:** Atende Plenamente
- **Comentário:** O `:hover` e o `:focus-visible` dos links do menu estão juntos na linha 245: a cor passa de cinza para branco e aparece um sublinhado de 2px. Além disso, o `:focus-visible` global (linha 240) desenha um contorno branco de 3px, bem visível sobre o fundo preto.

**6. Sem sobreposição indevida**

- **Status:** Atende Parcialmente
- **Comentário:** O cabeçalho é `position: sticky` com `z-index: 10` e fundo preto (linha 241), e é o único elemento posicionado, então nada o cobre. O problema é o contrário: não há `scroll-padding-top` nem `scroll-margin-top` em lugar nenhum. Ao clicar num link do menu (por exemplo "História"), a seção vai para o topo da janela e o cabeçalho sticky (cerca de 83px de altura, pelo CSS) cobre o título `<h2>`, que fica a 3rem do início da seção. Sugestão: `html { scroll-padding-top: 6rem; }`. Confira clicando nos links do menu.

### Aula 9 — CSS3 — Botões e Formulários

**7. Foco visível em botões/campos**

- **Status:** Atende Plenamente
- **Comentário:** A regra global `:focus-visible { outline: 3px solid #f4f3ef; outline-offset: 4px; }` (linha 240) vale para botões, links e campos, e não há `outline: none` em nenhum lugar do CSS. Navegando com Tab dá para ver claramente o elemento em foco.

**8. Hierarquia visual de ações**

- **Status:** Atende Plenamente
- **Comentário:** `.botao--principal` (linha 253) tem fundo branco, texto preto e peso 600. `.botao--secundario` (linha 254) é transparente com borda cinza. No formulário de contato o botão de envio é o principal e o de limpar (`type="reset"`) é o secundário (`index.html`, linhas 467 e 471).

**9. Usabilidade nativa preservada**

- **Status:** Atende Plenamente
- **Comentário:** Os campos mantêm `type` e `required` coerentes (e-mail, telefone, mensagem), e o `select` e o `reset` são nativos. A estilização não remove o comportamento padrão, e o checkbox usa `accent-color` (linha 261) em vez de ser redesenhado. O `script.js` (linhas 56–61) só trata o evento `submit`, que o navegador dispara depois de passar na validação nativa.

### Cálculo da Nota Final

| # | Critério | Status | Pontos |
|---|----------|--------|--------|
| 1 | Seletores eficientes | Atende Plenamente | 2 |
| 2 | Box model consistente | Atende Plenamente | 2 |
| 3 | CSS organizado | Atende Plenamente | 2 |
| 4 | Menu funcional e responsivo | Atende Plenamente | 2 |
| 5 | Estados de interação visíveis | Atende Plenamente | 2 |
| 6 | Sem sobreposição indevida | Atende Parcialmente | 1 |
| 7 | Foco visível em botões/campos | Atende Plenamente | 2 |
| 8 | Hierarquia visual de ações | Atende Plenamente | 2 |
| 9 | Usabilidade nativa preservada | Atende Plenamente | 2 |

**Nota Final: 9,4** (17 de 18 pontos)

Nota por aula: Aula 6 = 10,0 · Aula 8 = 8,3 · Aula 9 = 10,0
