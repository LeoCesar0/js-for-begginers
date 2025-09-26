const transacoes = [
  {
    id: "001",
    tipo: "deposito",
    valor: "1.500,00",
    data: "15/01/2024",
    conta: "12345-6",
  },
  {
    id: "002",
    tipo: "saque",
    valor: "500.50",
    data: "16/01/2024",
    conta: "12345-6",
  },
  {
    id: "003",
    tipo: "transferencia",
    valor: "abc",
    data: "17/01/2024",
    conta: "67890-1",
  },
  {
    id: "004",
    tipo: "pagamento",
    valor: "2500,99",
    data: "32/01/2024",
    conta: "12345-6",
  },
  { id: "005", tipo: "deposito", valor: "-100", data: "18/01/2024", conta: "" },
];

const contaCorrente = {
  numero: "12345-6",
  saldo: 5000.0,
  limite: 1000.0,
  ativa: true,
};

// Crie um sistema de validação de transações bancárias que:
// 1. Valide cada transação individualmente
// 2. Use TODOS os conceitos: strings, numbers, if-else
// 3. Calcule saldo final após transações válidas
// 4. Gere relatório completo com estatísticas
// 5. Identifique padrões suspeitos

// console.log("🏦 SISTEMA DE VALIDAÇÃO BANCÁRIA");
// console.log("======================================");
// console.log(`Conta: ${contaCorrente.numero}`);
// console.log(`Saldo inicial: R$ ${contaCorrente.saldo.toFixed(2)}`);
// console.log(`Limite: R$ ${contaCorrente.limite.toFixed(2)}`);
// console.log(`Status: ${contaCorrente.ativa ? "Ativa" : "Bloqueada"}`);

// let saldoFinal = contaCorrente.saldo;
// let transacoesValidas = 0;
// let transacoesInvalidas = 0;
// let valorTotalProcessado = 0;
// let depositosTotal = 0;
// let saquesTotal = 0;
// let suspeitas = [];

// console.log("\n📄 PROCESSANDO TRANSAÇÕES:");
// console.log("===================================");

// for (let i = 0; i < transacoes.length; i++) {
//   const transacao = transacoes[i];
//   console.log(`\nTransação ${transacao.id}:`);

//   let transacaoValida = true;
//   let erros = [];

//   // 1. VALIDAR TIPO
//   const tiposValidos = ["deposito", "saque", "transferencia", "pagamento"];
//   if (!tiposValidos.includes(transacao.tipo.toLowerCase())) {
//     erros.push("Tipo inválido");
//     transacaoValida = false;
//   }

//   // 2. VALIDAR VALOR (converter diferentes formatos)
//   let valorNumero = 0;
//   const valorLimpo = transacao.valor.toString().replace(".", "").replace(",", ".");
//   valorNumero = Number(valorLimpo);

//   if (...) { // valide valor
//     erros.push("Valor inválido");
//     transacaoValida = false;
//   }

//   // 3. VALIDAR DATA
//   let dataValida = false;
//   const partesData = transacao.data.split("/");

//   if (partesData.length === 3) {
//     const dia = Number(partesData[0]);
//     const mes = Number(partesData[1]);
//     const ano = Number(partesData[2]);

//     if (...) { // valide dia, mês, ano
//       dataValida = true;
//     }
//   }

//   if (!dataValida) {
//     erros.push("Data inválida");
//     transacaoValida = false;
//   }

//   // 4. VALIDAR CONTA
//   const contaLimpa = transacao.conta.trim();
//   if (...) { // valide formato da conta
//     erros.push("Conta inválida");
//     transacaoValida = false;
//   }

//   // 5. VALIDAR REGRAS DE NEGÓCIO
//   if (transacaoValida) {
//     switch (transacao.tipo.toLowerCase()) {
//       case "saque":
//       case "transferencia":
//       case "pagamento":
//         const saldoAposOperacao = saldoFinal - valorNumero;
//         if (saldoAposOperacao < -contaCorrente.limite) {
//           erros.push("Saldo insuficiente (excede limite)");
//           transacaoValida = false;
//         }
//         break;
//     }

//     // Detectar padrões suspeitos
//     if (valorNumero > 10000) {
//       suspeitas.push(`${transacao.id}: Valor alto (R$ ${valorNumero.toFixed(2)})`);
//     }
//   }

//   // 6. PROCESSAR TRANSAÇÃO
//   if (transacaoValida) {
//     console.log(`  ✅ ${transacao.tipo.toUpperCase()}: R$ ${valorNumero.toFixed(2)}`);
//
//     switch (transacao.tipo.toLowerCase()) {
//       case "deposito":
//         saldoFinal += valorNumero;
//         depositosTotal += valorNumero;
//         break;
//       case "saque":
//       case "transferencia":
//       case "pagamento":
//         saldoFinal -= valorNumero;
//         saquesTotal += valorNumero;
//         break;
//     }

//     transacoesValidas++;
//     valorTotalProcessado += valorNumero;
//   } else {
//     console.log(`  ❌ REJEITADA: ${erros.join(", ")}`);
//     transacoesInvalidas++;
//   }
// }

// // RELATÓRIO FINAL
// console.log("\n📈 RELATÓRIO FINAL:");
// console.log("====================");
// console.log(`Transações processadas: ${transacoes.length}`);
// console.log(`Válidas: ${transacoesValidas}`);
// console.log(`Inválidas: ${transacoesInvalidas}`);
// console.log(`Taxa de aprovação: ${((transacoesValidas / transacoes.length) * 100).toFixed(1)}%`);

// console.log("\n💰 MOVIMENTAÇÃO FINANCEIRA:");
// console.log(`Saldo inicial: R$ ${contaCorrente.saldo.toFixed(2)}`);
// console.log(`Total em depósitos: R$ ${depositosTotal.toFixed(2)}`);
// console.log(`Total em saídas: R$ ${saquesTotal.toFixed(2)}`);
// console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
// console.log(`Saldo disponível: R$ ${(saldoFinal + contaCorrente.limite).toFixed(2)}`);

// // Status da conta
// const statusConta = saldoFinal >= 0
//   ? "🟢 Positivo"
//   : saldoFinal >= -contaCorrente.limite
//     ? "🟡 No limite"
//     : "🔴 Estourou limite";

// console.log(`Status da conta: ${statusConta}`);

// // Alertas de segurança
// if (suspeitas.length > 0) {
//   console.log("\n⚠️ ALERTAS DE SEGURANÇA:");
//   suspeitas.forEach(suspeita => console.log(`  ${suspeita}`));
// }

// // Recomendações
// if (saldoFinal < 0) {
//   console.log("\n🚨 RECOMENDAÇÃO: Regularizar saldo negativo");
// } else if (saldoFinal > 50000) {
//   console.log("\n💸 RECOMENDAÇÃO: Considerar investimentos");
// }
