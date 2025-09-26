const voo = {
  numero: "TAM3021",
  origem: "São Paulo",
  destino: "Rio de Janeiro",
  horario: "14:30",
  disponivel: true,
  preco: 300,
  classe: "economica", // economica, executiva, primeira
};

const passageiro = {
  nome: "Maria Santos",
  idade: 28,
  documento: "12345678901",
  milhas: 15000,
  categoria: "gold", // bronze, prata, gold, diamante
  bagagem: 25, // kg
  necessidadeEspecial: false,
};

const sistema = {
  promocaoAtiva: true,
  overbooking: false,
  horaLimite: "13:30", // 1h antes do voo
};

// Crie um sistema complexo de reserva de voo que considere:
// 1. Verificações básicas (voo disponível, documento, etc.)
// 2. Cálculo de preço com descontos por categoria e milhas
// 3. Verificação de bagagem (econômica: 23kg, executiva: 32kg, primeira: 40kg)
// 4. Aplicação de taxas extras se necessário
// 5. Verificação de overbooking e prioridades
// Use todas as técnicas: if-else, operadores lógicos, switch, ternário

// console.log(`✈️ SISTEMA DE RESERVA DE VOO`);
// console.log(`===============================`);
// console.log(`Voo: ${voo.numero} - ${voo.origem} → ${voo.destino}`);
// console.log(`Passageiro: ${passageiro.nome}`);
// console.log(`Categoria: ${passageiro.categoria}`);

// // Verificações básicas
// const documentoValido = ...;
// const vooDisponivel = ...;
// const dentroDoHorario = ...; // simplificado

// if (...) { // todas verificações básicas
//   console.log("\n✅ VERIFICAÇÕES BÁSICAS APROVADAS");

//   // Cálculo de preço base
//   let precoFinal = voo.preco;

//   // Desconto por categoria (switch)
//   switch (...) {
//     case "diamante":
//       // 20% desconto
//       break;
//     case "gold":
//       // 15% desconto
//       break;
//     case "prata":
//       // 10% desconto
//       break;
//     case "bronze":
//       // 5% desconto
//       break;
//   }

//   // Desconto por milhas (ternário)
//   const descontoMilhas = passageiro.milhas >= 10000 ? 50 : passageiro.milhas >= 5000 ? 25 : 0;
//   precoFinal -= descontoMilhas;

//   // Verificar bagagem
//   const limiteBagagem = voo.classe === "primeira" ? 40 : voo.classe === "executiva" ? 32 : 23;
//   const taxaBagagem = passageiro.bagagem > limiteBagagem ? (passageiro.bagagem - limiteBagagem) * 15 : 0;

//   // Taxa por necessidade especial
//   const taxaEspecial = passageiro.necessidadeEspecial ? 30 : 0;

//   precoFinal += taxaBagagem + taxaEspecial;

//   console.log(`\n💰 CÁLCULO DO PREÇO:`);
//   console.log(`Preço base: R$ ${voo.preco}`);
//   console.log(`Desconto categoria: R$ ${voo.preco - (precoFinal + descontoMilhas - taxaBagagem - taxaEspecial)}`);
//   console.log(`Desconto milhas: R$ ${descontoMilhas}`);
//   console.log(`Taxa bagagem: R$ ${taxaBagagem}`);
//   console.log(`Taxa especial: R$ ${taxaEspecial}`);
//   console.log(`TOTAL: R$ ${precoFinal}`);

//   // Verificar overbooking e prioridade
//   if (sistema.overbooking) {
//     const temPrioridade = ...;
//     if (temPrioridade) {
//       console.log("\n🎯 RESERVA CONFIRMADA (prioridade)");
//     } else {
//       console.log("\n⏳ LISTA DE ESPERA (overbooking)");
//     }
//   } else {
//     console.log("\n✅ RESERVA CONFIRMADA!");
//   }

// } else {
//   console.log("\n❌ RESERVA NEGADA");
//   // Mostrar motivos específicos...
// }
