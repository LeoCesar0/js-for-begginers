const tipoEvento = "casamento"; // casamento, aniversário, corporativo
const numeroConvidados = 150;
const orcamento = 8000;
const localDisponivel = true;
const fimDeSemana = true;

// Sistema de orçamento para eventos:
// 1. Primeiro nível: tipo de evento (preços diferentes)
// 2. Segundo nível: número de convidados (taxas por faixa)
// 3. Terceiro nível: fim de semana (taxa extra)
// 4. Quarto nível: verificar se orçamento é suficiente

// console.log(`🎉 ORÇAMENTO PARA ${tipoEvento.toUpperCase()}`);
// console.log(`Convidados: ${numeroConvidados}`);
// console.log(`Orçamento disponível: R$ ${orcamento}`);
// console.log(`Local disponível: ${localDisponivel ? "Sim" : "Não"}`);
// console.log(`Fim de semana: ${fimDeSemana ? "Sim" : "Não"}`);
// console.log("=====================================");

// let precoBase = 0;
// let precoFinal = 0;

// if (localDisponivel) {
//   console.log("✅ Local disponível");

//   // Definir preço base por tipo de evento
//   if (...) { // casamento
//     precoBase = 80; // por pessoa
//     console.log("💒 Evento: Casamento");
//   } else if (...) { // aniversário
//     precoBase = 50; // por pessoa
//     console.log("🎂 Evento: Aniversário");
//   } else if (...) { // corporativo
//     precoBase = 60; // por pessoa
//     console.log("🏢 Evento: Corporativo");
//   } else {
//     console.log("❌ Tipo de evento não disponível");
//   }

//   if (precoBase > 0) {
//     precoFinal = precoBase * numeroConvidados;
//     console.log(`Preço base: R$ ${precoBase} x ${numeroConvidados} = R$ ${precoFinal}`);

//     // Verificar taxa de fim de semana
//     if (...) {
//       const taxa = precoFinal * 0.2; // 20% a mais
//       precoFinal += taxa;
//       console.log(`Taxa fim de semana (20%): R$ ${taxa.toFixed(2)}`);
//     }

//     console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);

//     // Verificar orçamento
//     if (...) {
//       const sobra = orcamento - precoFinal;
//       console.log(`✅ ORÇAMENTO APROVADO! Sobra: R$ ${sobra.toFixed(2)}`);
//     } else {
//       const falta = precoFinal - orcamento;
//       console.log(`❌ ORÇAMENTO INSUFICIENTE! Falta: R$ ${falta.toFixed(2)}`);
//     }
//   }
// } else {
//   console.log("❌ Local não disponível na data");
// }
