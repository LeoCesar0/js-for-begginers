const empresa = "TechShop";
const vendas = [1500, 2300, 1800, 2700, 1900];

// Crie um relatório mensal de vendas que mostre:
// 1. Nome da empresa (maiúsculo)
// 2. Vendas de cada semana formatadas
// 3. Total do mês calculado na string
// 4. Média semanal
// 5. Melhor e pior semana

// let totalMes = 0;
// for (let i = 0; i < vendas.length; i++) {
//     totalMes += vendas[i];
// }

// const mediaSemanal = totalMes / vendas.length;
// const melhorSemana = Math.max(...vendas);
// const piorSemana = Math.min(...vendas);

// console.log(`📈 RELATÓRIO MENSAL - ${empresa.toUpperCase()}`);
// console.log("=".repeat(40));

// for (let i = 0; i < vendas.length; i++) {
//     console.log(`Semana ${i + 1}: R$ ${vendas[i].toFixed(2)}`);
// }

// console.log("-".repeat(40));
// console.log(`Total do mês: R$ ${totalMes.toFixed(2)}`);
// console.log(`Média semanal: R$ ${mediaSemanal.toFixed(2)}`);
// console.log(`Melhor semana: R$ ${melhorSemana.toFixed(2)}`);
// console.log(`Pior semana: R$ ${piorSemana.toFixed(2)}`);

// const crescimento = ((melhorSemana - piorSemana) / piorSemana) * 100;
// console.log(`Variação: ${crescimento.toFixed(1)}% entre melhor e pior semana`);
