const funcionario = "Ana Silva";
const cargo = "desenvolvedor";
const anosEmpresa = 3;
const performanceNota = 8.5;
const metaAlcancada = true;

// Crie um sistema de promoção que avalia:
// 1. Primeiro nível: cargo (desenvolvedor, analista, gerente)
// 2. Segundo nível: tempo de empresa (mínimo 2 anos)
// 3. Terceiro nível: performance (nota >= 8.0)
// 4. Quarto nível: meta alcançada
// Use if-else aninhado para determinar o tipo de promoção

// console.log(`👨‍💼 AVALIAÇÃO DE PROMOÇÃO - ${funcionario.toUpperCase()}`);
// console.log(`Cargo atual: ${cargo}`);
// console.log(`Anos na empresa: ${anosEmpresa}`);
// console.log(`Performance: ${performanceNota}`);
// console.log(`Meta alcançada: ${metaAlcancada ? "Sim" : "Não"}`);
// console.log("=====================================");

// if (...) { // cargo válido
//   console.log("✅ Cargo elegível para promoção");

//   if (...) { // tempo suficiente
//     console.log("✅ Tempo de empresa adequado");

//     if (...) { // performance boa
//       console.log("✅ Performance excelente");

//       if (...) { // meta alcançada
//         if (cargo === "desenvolvedor") {
//           console.log("🎉 PROMOVIDO A DESENVOLVEDOR SÊNIOR!");
//         } else if (cargo === "analista") {
//           console.log("🎉 PROMOVIDO A ANALISTA SÊNIOR!");
//         } else {
//           console.log("🎉 PROMOVIDO A GERENTE SÊNIOR!");
//         }
//       } else {
//         console.log("📈 AUMENTO SALARIAL (meta não alcançada)");
//       }
//     } else {
//       console.log("📚 TREINAMENTO RECOMENDADO (performance baixa)");
//     }
//   } else {
//     console.log("⏰ AGUARDAR MAIS TEMPO (mínimo 2 anos)");
//   }
// } else {
//   console.log("❌ Cargo não elegível para promoção");
// }
