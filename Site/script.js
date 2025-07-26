const dadosLevels = [
  { pity: 0.45 },       // Level 0 para 1
  { pity: 0.225 },      // Level 1 para 2
  { pity: 0.14625 },    // Level 2 para 3
  { pity: 0.1125 },     // Level 3 para 4
  { pity: 0.075375 }    // Level 4 para 5
];

function calcularRoubos() {
  const nivelAtual = parseInt(document.getElementById("nivelAtual").value);
  const progressoAtual = parseFloat(document.getElementById("progressoAtual").value);
  const nivelAlvo = parseInt(document.getElementById("nivelAlvo").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(progressoAtual) || progressoAtual < 0 || progressoAtual >= 100) {
    resultado.textContent = "Digite uma porcentagem válida entre 0 e 99,99.";
    resultado.style.color = "#d9534f";
    return;
  }
  if (nivelAlvo <= nivelAtual) {
    resultado.textContent = "O nível alvo deve ser maior que o nível atual.";
    resultado.style.color = "#d9534f";
    return;
  }

  let totalRoubos = 0;
  let detalhes = "";

  let pityAtual = dadosLevels[nivelAtual].pity;
  let faltandoNoAtual = (100 - progressoAtual) / pityAtual;
  totalRoubos += faltandoNoAtual;
  detalhes += `Level ${nivelAtual} → ${nivelAtual + 1}: ${Math.ceil(faltandoNoAtual)} roubos (parcial)\n`;

  for (let lvl = nivelAtual + 1; lvl < nivelAlvo; lvl++) {
    let pity = dadosLevels[lvl].pity;
    let roubosNivel = 100 / pity;
    totalRoubos += roubosNivel;
    detalhes += `Level ${lvl} → ${lvl + 1}: ${Math.ceil(roubosNivel)} roubos\n`;
  }

  detalhes += `\nTotal aproximado: ${Math.ceil(totalRoubos)} roubos`;
  resultado.textContent = detalhes;
  resultado.style.color = "#0056b3";
}

function limparCampos() {
  document.getElementById("nivelAtual").value = "0";
  document.getElementById("progressoAtual").value = "";
  document.getElementById("nivelAlvo").value = "1";
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Preencha os dados e clique em calcular.";
  resultado.style.color = "#0056b3";
}
