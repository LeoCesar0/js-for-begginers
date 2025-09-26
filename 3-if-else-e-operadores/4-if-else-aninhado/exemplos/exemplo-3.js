// 🪆 EXEMPLO 3: Sistema de Desconto
// =================================

console.log("=== SISTEMA DE DESCONTO ===\n");

const cliente = "Maria";
const valorCompra = 500;
const clienteVip = true;
const primeiraCompra = false;
const temCupom = true;
const valorCupom = 50;

console.log(`🛒 CALCULANDO DESCONTO - ${cliente}`);
console.log(`Valor da compra: R$ ${valorCompra}`);
console.log(`Cliente VIP: ${clienteVip}`);
console.log(`Primeira compra: ${primeiraCompra}`);
console.log(`Tem cupom: ${temCupom}`);

let desconto = 0;
let descontoDescricao = "";

// Primeiro nível: valor da compra
if (valorCompra >= 1000) {
  console.log("💰 Compra alta");
  desconto = 0.15; // 15%
  descontoDescricao = "Desconto por compra alta (15%)";
} else if (valorCompra >= 500) {
  console.log("💸 Compra média");

  // Segundo nível: tipo de cliente
  if (clienteVip) {
    console.log("⭐ Cliente VIP");
    desconto = 0.12; // 12%
    descontoDescricao = "Desconto VIP para compra média (12%)";
  } else {
    desconto = 0.08; // 8%
    descontoDescricao = "Desconto padrão para compra média (8%)";
  }
} else {
  console.log("🛍️ Compra baixa");

  // Segundo nível: primeira compra?
  if (primeiraCompra) {
    console.log("🎁 Primeira compra");
    desconto = 0.1; // 10%
    descontoDescricao = "Desconto primeira compra (10%)";
  } else if (clienteVip) {
    desconto = 0.05; // 5%
    descontoDescricao = "Desconto VIP para compra baixa (5%)";
  } else {
    desconto = 0.02; // 2%
    descontoDescricao = "Desconto mínimo (2%)";
  }
}

// Terceiro nível: cupom adicional
if (temCupom) {
  console.log("🎫 Aplicando cupom adicional");
  const descontoAtual = valorCompra * desconto;
  const descontoTotal = descontoAtual + valorCupom;
  const total = valorCompra - descontoTotal;

  console.log(`${descontoDescricao}: R$ ${descontoAtual.toFixed(2)}`);
  console.log(`Cupom: R$ ${valorCupom.toFixed(2)}`);
  console.log(`Desconto total: R$ ${descontoTotal.toFixed(2)}`);
  console.log(`TOTAL A PAGAR: R$ ${total.toFixed(2)}`);
} else {
  const descontoValor = valorCompra * desconto;
  const total = valorCompra - descontoValor;

  console.log(`${descontoDescricao}: R$ ${descontoValor.toFixed(2)}`);
  console.log(`TOTAL A PAGAR: R$ ${total.toFixed(2)}`);
}

console.log("\n=== SIMULANDO DIFERENTES CENÁRIOS ===");

const cenarios = [
  { valor: 1500, vip: false, primeira: false, cupom: false },
  { valor: 300, vip: false, primeira: true, cupom: true },
  { valor: 800, vip: true, primeira: false, cupom: true },
  { valor: 150, vip: true, primeira: false, cupom: false },
];

cenarios.forEach((cenario, index) => {
  console.log(`\n--- Cenário ${index + 1} ---`);
  console.log(
    `Valor: R$ ${cenario.valor}, VIP: ${cenario.vip}, Primeira: ${cenario.primeira}, Cupom: ${cenario.cupom}`
  );

  let desc = 0;

  if (cenario.valor >= 1000) {
    desc = 0.15;
  } else if (cenario.valor >= 500) {
    desc = cenario.vip ? 0.12 : 0.08;
  } else {
    if (cenario.primeira) {
      desc = 0.1;
    } else if (cenario.vip) {
      desc = 0.05;
    } else {
      desc = 0.02;
    }
  }

  const descontoValor = cenario.valor * desc;
  const cupomValor = cenario.cupom ? 50 : 0;
  const total = cenario.valor - descontoValor - cupomValor;

  console.log(
    `Total: R$ ${total.toFixed(2)} (desconto: ${(desc * 100).toFixed(
      0
    )}% + cupom: R$ ${cupomValor})`
  );
});
