// 🔍 EXEMPLO 3: Validação de Salário e Números
// ============================================

console.log("=== VALIDAÇÃO DE SALÁRIO ===\n");

const formularios = [
  { salario: "5.500,50" }, // formato brasileiro
  { salario: "2500.75" }, // formato americano
  { salario: "abc" }, // inválido
  { salario: "1000" }, // abaixo do mínimo
  { salario: "15.000,00" }, // formato brasileiro com milhares
];

formularios.forEach((form, index) => {
  console.log(`\n--- Formulário ${index + 1}: "${form.salario}" ---`);

  // VALIDAÇÃO DE SALÁRIO (numbers + format brasileiro)
  let salarioValido = false;
  let salarioErro = "";

  // Converter formato brasileiro para americano
  const salarioLimpo = form.salario
    .replace(/\./g, "") // Remove pontos (milhares)
    .replace(",", "."); // Troca vírgula por ponto (decimais)

  const salarioNumero = Number(salarioLimpo);

  if (form.salario.trim() === "") {
    salarioErro = "Salário é obrigatório";
  } else if (Number.isNaN(salarioNumero)) {
    salarioErro = "Salário deve ser um número válido";
  } else if (salarioNumero < 0) {
    salarioErro = "Salário não pode ser negativo";
  } else if (salarioNumero < 1320) {
    // Salário mínimo 2024
    salarioErro = "Salário abaixo do mínimo";
  } else if (salarioNumero > 100000) {
    salarioErro = "Salário muito alto para validação";
  } else {
    salarioValido = true;
  }

  const salarioFormatado = salarioValido
    ? `R$ ${salarioNumero.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`
    : form.salario;

  console.log(`  Original: "${form.salario}"`);
  console.log(`  Limpo: "${salarioLimpo}"`);
  console.log(`  Convertido: ${salarioNumero}`);
  console.log(`  Formatado: "${salarioFormatado}"`);
  console.log(
    `  Válido: ${salarioValido ? "✅" : "❌"} ${
      salarioValido ? "" : salarioErro
    }`
  );
});

console.log("\n=== VALIDAÇÃO DE IDADE E NÚMEROS ===");

const idades = ["25", "17", "abc", "-5", "150", "25.5"];

idades.forEach((idadeStr) => {
  console.log(`\n--- Idade: "${idadeStr}" ---`);

  let idadeValida = false;
  let idadeErro = "";

  // Converter string para number
  const idadeNumero = Number(idadeStr);

  if (idadeStr.trim() === "") {
    idadeErro = "Idade é obrigatória";
  } else if (Number.isNaN(idadeNumero)) {
    idadeErro = "Idade deve ser um número";
  } else if (!Number.isInteger(idadeNumero)) {
    idadeErro = "Idade deve ser um número inteiro";
  } else if (idadeNumero < 0) {
    idadeErro = "Idade não pode ser negativa";
  } else if (idadeNumero < 18) {
    idadeErro = "Idade mínima é 18 anos";
  } else if (idadeNumero > 120) {
    idadeErro = "Idade máxima é 120 anos";
  } else {
    idadeValida = true;
  }

  console.log(`  String: "${idadeStr}"`);
  console.log(`  Número: ${idadeNumero}`);
  console.log(`  Tipo: ${typeof idadeNumero}`);
  console.log(`  É inteiro: ${Number.isInteger(idadeNumero)}`);
  console.log(`  É NaN: ${Number.isNaN(idadeNumero)}`);
  console.log(
    `  Válida: ${idadeValida ? "✅" : "❌"} ${idadeValida ? "" : idadeErro}`
  );
});

console.log("\n=== CONVERTER DIFERENTES FORMATOS ===");

const valoresMonetarios = [
  "1.234,56", // brasileiro
  "1234.56", // americano
  "1,234.56", // americano com milhares
  "R$ 1.500,00", // brasileiro com símbolo
  "$1,500.00", // americano com símbolo
  "1.500", // ambíguo
  "abc,def", // inválido
];

valoresMonetarios.forEach((valor) => {
  console.log(`\n"${valor}":`);

  // Tentar formato brasileiro primeiro
  let numeroLimpo = valor
    .replace(/[R$\s]/g, "") // Remove R, $, espaços
    .replace(/\./g, "") // Remove pontos (milhares)
    .replace(",", "."); // Vírgula vira ponto

  let numero = Number(numeroLimpo);

  // Se não funcionou, tentar formato americano
  if (Number.isNaN(numero)) {
    numeroLimpo = valor
      .replace(/[$R\s]/g, "") // Remove símbolos
      .replace(/,(?=\d{3})/g, ""); // Remove vírgulas de milhares
    numero = Number(numeroLimpo);
  }

  if (Number.isNaN(numero)) {
    console.log("  ❌ Não foi possível converter");
  } else {
    console.log(`  ✅ Convertido: ${numero}`);
    console.log(`  💰 Formatado: R$ ${numero.toFixed(2)}`);
  }
});
