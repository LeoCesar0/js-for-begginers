const evento = "show";
const ingresso = "vip";
const idade = 17;
const acompanhado = true;

// Sistema de entrada em evento:
// 1. Entrada VIP: qualquer idade se acompanhado OU maior de 18
// 2. Entrada comum: maior de 16
// 3. Menores de 16: apenas se acompanhados
// Use operadores lógicos para criar a lógica

// console.log(`🎫 VERIFICAÇÃO DE ENTRADA - ${evento.toUpperCase()}`);
// console.log(`Tipo do ingresso: ${ingresso}`);
// console.log(`Idade: ${idade} anos`);
// console.log(`Acompanhado: ${acompanhado ? "Sim" : "Não"}`);

// let podeEntrar = false;
// let motivo = "";

// if (ingresso === "vip") {
//   if (...) {
//     podeEntrar = true;
//   } else {
//     motivo = "VIP menor de idade sem acompanhante";
//   }
// } else {
//   if (...) {
//     podeEntrar = true;
//   } else if (...) {
//     podeEntrar = true;
//   } else {
//     motivo = "Menor de 16 anos sem acompanhante";
//   }
// }

// if (podeEntrar) {
//   console.log("✅ ENTRADA LIBERADA!");
// } else {
//   console.log(`❌ ENTRADA NEGADA: ${motivo}`);
// }
