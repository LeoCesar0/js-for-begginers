// 🔀 EXEMPLO 1: Switch-Case
// =========================

console.log("=== SWITCH-CASE BÁSICO ===\n");

const diaSemana = 3;
const mes = "dezembro";
const nota = "B";

console.log("=== DIA DA SEMANA ===\n");

// Comparando if-else vs switch
console.log(`Dia da semana (número): ${diaSemana}`);

// Com switch-case
switch (diaSemana) {
  case 1:
    console.log("SWITCH: Segunda-feira");
    break;
  case 2:
    console.log("SWITCH: Terça-feira");
    break;
  case 3:
    console.log("SWITCH: Quarta-feira");
    break;
  case 4:
    console.log("SWITCH: Quinta-feira");
    break;
  case 5:
    console.log("SWITCH: Sexta-feira");
    break;
  case 6:
    console.log("SWITCH: Sábado");
    break;
  case 7:
    console.log("SWITCH: Domingo");
    break;
  default:
    console.log("SWITCH: Dia inválido");
    break;
}

// Com if-else para comparação
if (diaSemana === 1) {
  console.log("IF-ELSE: Segunda-feira");
} else if (diaSemana === 2) {
  console.log("IF-ELSE: Terça-feira");
} else if (diaSemana === 3) {
  console.log("IF-ELSE: Quarta-feira");
} else {
  console.log("IF-ELSE: Outro dia...");
}

console.log("\n=== AGRUPANDO CASES ===\n");

console.log(`Mês: ${mes}`);

// Agrupando cases com mesmo resultado
switch (mes.toLowerCase()) {
  case "dezembro":
  case "janeiro":
  case "fevereiro":
    console.log("🔥 Estação: Verão");
    break;
  case "março":
  case "abril":
  case "maio":
    console.log("🍂 Estação: Outono");
    break;
  case "junho":
  case "julho":
  case "agosto":
    console.log("❄️ Estação: Inverno");
    break;
  case "setembro":
  case "outubro":
  case "novembro":
    console.log("🌸 Estação: Primavera");
    break;
  default:
    console.log("❌ Mês inválido");
    break;
}

console.log("\n=== SISTEMA DE NOTAS ===\n");

console.log(`Nota: ${nota}`);

switch (nota.toUpperCase()) {
  case "A":
    console.log("🏆 Excelente! (9.0 - 10.0)");
    console.log("Parabéns pelo desempenho!");
    break;
  case "B":
    console.log("😊 Bom! (7.0 - 8.9)");
    console.log("Continue assim!");
    break;
  case "C":
    console.log("😐 Regular (5.0 - 6.9)");
    console.log("Pode melhorar!");
    break;
  case "D":
    console.log("😞 Insuficiente (0.0 - 4.9)");
    console.log("Precisa estudar mais!");
    break;
  default:
    console.log("❌ Nota inválida");
    break;
}

console.log("\n=== EXEMPLO PRÁTICO - CALCULADORA ===\n");

const numero1 = 15;
const numero2 = 5;
const operacao = "+";

console.log(`Calculadora: ${numero1} ${operacao} ${numero2}`);

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    console.log(`Resultado: ${numero1} + ${numero2} = ${resultado}`);
    break;
  case "-":
    resultado = numero1 - numero2;
    console.log(`Resultado: ${numero1} - ${numero2} = ${resultado}`);
    break;
  case "*":
    resultado = numero1 * numero2;
    console.log(`Resultado: ${numero1} × ${numero2} = ${resultado}`);
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
      console.log(`Resultado: ${numero1} ÷ ${numero2} = ${resultado}`);
    } else {
      console.log("❌ Erro: Divisão por zero!");
    }
    break;
  case "%":
    resultado = numero1 % numero2;
    console.log(`Resultado: ${numero1} % ${numero2} = ${resultado}`);
    break;
  case "**":
    resultado = numero1 ** numero2;
    console.log(`Resultado: ${numero1} ^ ${numero2} = ${resultado}`);
    break;
  default:
    console.log("❌ Operação inválida! Use: +, -, *, /, %, **");
    break;
}

console.log("\n=== SISTEMA DE MENU ===\n");

const opcaoMenu = "2";

console.log("🍕 PIZZARIA DO CÓDIGO");
console.log("==================");
console.log("1. Margherita - R$ 25");
console.log("2. Pepperoni - R$ 30");
console.log("3. Quatro Queijos - R$ 35");
console.log("4. Calabresa - R$ 28");
console.log("0. Sair");
console.log(`\nOpção escolhida: ${opcaoMenu}`);

switch (opcaoMenu) {
  case "1":
    console.log("✅ Pizza Margherita selecionada!");
    console.log("💰 Preço: R$ 25.00");
    console.log("🍕 Ingredientes: Molho, mussarela, manjericão");
    break;
  case "2":
    console.log("✅ Pizza Pepperoni selecionada!");
    console.log("💰 Preço: R$ 30.00");
    console.log("🍕 Ingredientes: Molho, mussarela, pepperoni");
    break;
  case "3":
    console.log("✅ Pizza Quatro Queijos selecionada!");
    console.log("💰 Preço: R$ 35.00");
    console.log(
      "🍕 Ingredientes: Molho, mussarela, gorgonzola, parmesão, provolone"
    );
    break;
  case "4":
    console.log("✅ Pizza Calabresa selecionada!");
    console.log("💰 Preço: R$ 28.00");
    console.log("🍕 Ingredientes: Molho, mussarela, calabresa, cebola");
    break;
  case "0":
    console.log("👋 Obrigado pela visita!");
    break;
  default:
    console.log("❌ Opção inválida! Escolha de 0 a 4.");
    break;
}
