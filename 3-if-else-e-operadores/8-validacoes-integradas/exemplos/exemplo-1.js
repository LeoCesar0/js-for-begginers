// 🔍 EXEMPLO 1: Validação de Nome e Email
// ==========================================

console.log("=== VALIDAÇÃO DE NOME E EMAIL ===\n");

// Simulando dados de um formulário
const formulario = {
  nome: "  Maria da Silva  ",
  email: "MARIA@EMAIL.COM.BR",
  idade: "25",
  telefone: "(11) 99999-8888",
};

console.log("=== DADOS RECEBIDOS ===\n");
console.log(`Nome: "${formulario.nome}"`);
console.log(`Email: "${formulario.email}"`);
console.log(`Idade: "${formulario.idade}"`);
console.log(`Telefone: "${formulario.telefone}"`);

console.log("\n=== VALIDAÇÕES ===\n");

// 1. VALIDAÇÃO DE NOME (strings)
let nomeValido = false;
let nomeErro = "";

// Sanitizar: remover espaços e capitalizar
const nomeLimpo = formulario.nome.trim();
const nomeFormatado = nomeLimpo
  .split(" ")
  .map(
    (palavra) =>
      palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
  )
  .join(" ");

if (nomeLimpo.length === 0) {
  nomeErro = "Nome é obrigatório";
} else if (nomeLimpo.length < 2) {
  nomeErro = "Nome deve ter pelo menos 2 caracteres";
} else if (nomeLimpo.length > 50) {
  nomeErro = "Nome deve ter no máximo 50 caracteres";
} else if (!/^[a-zA-Z\sÀ-ſ]+$/.test(nomeLimpo)) {
  nomeErro = "Nome deve conter apenas letras e espaços";
} else {
  nomeValido = true;
}

console.log("NOME:");
console.log(`  Original: "${formulario.nome}"`);
console.log(`  Formatado: "${nomeFormatado}"`);
console.log(
  `  Válido: ${nomeValido ? "✅" : "❌"} ${nomeValido ? "" : nomeErro}`
);

// 2. VALIDAÇÃO DE EMAIL (strings)
let emailValido = false;
let emailErro = "";

// Sanitizar: trim e lowercase
const emailLimpo = formulario.email.trim().toLowerCase();

if (emailLimpo.length === 0) {
  emailErro = "Email é obrigatório";
} else if (!emailLimpo.includes("@")) {
  emailErro = "Email deve conter @";
} else if (!emailLimpo.includes(".")) {
  emailErro = "Email deve conter domínio";
} else if (emailLimpo.indexOf("@") === 0) {
  emailErro = "Email não pode começar com @";
} else if (emailLimpo.endsWith("@") || emailLimpo.endsWith(".")) {
  emailErro = "Email com formato inválido";
} else if (emailLimpo.split("@").length !== 2) {
  emailErro = "Email deve ter apenas um @";
} else {
  emailValido = true;
}

console.log("\nEMAIL:");
console.log(`  Original: "${formulario.email}"`);
console.log(`  Limpo: "${emailLimpo}"`);
console.log(
  `  Válido: ${emailValido ? "✅" : "❌"} ${emailValido ? "" : emailErro}`
);

// 3. VALIDAÇÃO DE IDADE (numbers)
let idadeValida = false;
let idadeErro = "";

// Converter string para number
const idadeNumero = Number(formulario.idade);

if (formulario.idade.trim() === "") {
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

console.log("\nIDADE:");
console.log(`  String: "${formulario.idade}"`);
console.log(`  Número: ${idadeNumero}`);
console.log(`  Tipo: ${typeof idadeNumero}`);
console.log(
  `  Válida: ${idadeValida ? "✅" : "❌"} ${idadeValida ? "" : idadeErro}`
);

// 4. VALIDAÇÃO DE TELEFONE (strings + patterns)
let telefoneValido = false;
let telefoneErro = "";

// Remover formatação
const telefoneNumeros = formulario.telefone.replace(/\D/g, ""); // Remove tudo que não é dígito

if (formulario.telefone.trim() === "") {
  telefoneErro = "Telefone é obrigatório";
} else if (telefoneNumeros.length !== 11) {
  telefoneErro = "Telefone deve ter 11 dígitos (DDD + número)";
} else if (
  !telefoneNumeros.startsWith("11") &&
  !telefoneNumeros.startsWith("21")
) {
  // Simplificado: apenas alguns DDDs para exemplo
  telefoneErro = "DDD inválido (apenas 11 ou 21 neste exemplo)";
} else {
  telefoneValido = true;
}

const telefoneFormatado = telefoneValido
  ? `(${telefoneNumeros.slice(0, 2)}) ${telefoneNumeros.slice(
      2,
      7
    )}-${telefoneNumeros.slice(7)}`
  : formulario.telefone;

console.log("\nTELEFONE:");
console.log(`  Original: "${formulario.telefone}"`);
console.log(`  Apenas números: "${telefoneNumeros}"`);
console.log(`  Formatado: "${telefoneFormatado}"`);
console.log(
  `  Válido: ${telefoneValido ? "✅" : "❌"} ${
    telefoneValido ? "" : telefoneErro
  }`
);

// 5. VALIDAÇÃO DE SENHA (strings + complexity)
let senhaValida = false;
let senhaErros = [];

const senha = formulario.senha;
const confirmarSenha = formulario.confirmarSenha;

// Verificações de senha
if (senha.length < 8) {
  senhaErros.push("Mínimo 8 caracteres");
}
if (senha === senha.toLowerCase()) {
  senhaErros.push("Deve conter maiúscula");
}
if (senha === senha.toUpperCase()) {
  senhaErros.push("Deve conter minúscula");
}
if (!/\d/.test(senha)) {
  senhaErros.push("Deve conter número");
}
if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
  senhaErros.push("Deve conter símbolo especial");
}
if (senha !== confirmarSenha) {
  senhaErros.push("Senhas não coincidem");
}

senhaValida = senhaErros.length === 0;

console.log("\nSENHA:");
console.log(`  Tamanho: ${senha.length} caracteres`);
console.log(`  Tem maiúscula: ${senha !== senha.toLowerCase() ? "✅" : "❌"}`);
console.log(`  Tem minúscula: ${senha !== senha.toUpperCase() ? "✅" : "❌"}`);
console.log(`  Tem número: ${/\d/.test(senha) ? "✅" : "❌"}`);
console.log(
  `  Tem símbolo: ${/[!@#$%^&*(),.?":{}|<>]/.test(senha) ? "✅" : "❌"}`
);
console.log(`  Confirmação: ${senha === confirmarSenha ? "✅" : "❌"}`);
console.log(
  `  Válida: ${senhaValida ? "✅" : "❌"} ${
    senhaValida ? "" : senhaErros.join(", ")
  }`
);

// 6. VALIDAÇÃO DE SALÁRIO (numbers + format brasileiro)
let salarioValido = false;
let salarioErro = "";

// Converter formato brasileiro para americano
const salarioLimpo = formulario.salario
  .replace(/\./g, "") // Remove pontos (milhares)
  .replace(",", "."); // Troca vírgula por ponto (decimais)

const salarioNumero = Number(salarioLimpo);

if (formulario.salario.trim() === "") {
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
  ? `R$ ${salarioNumero.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
  : formulario.salario;

console.log("\nSALÁRIO:");
console.log(`  Original: "${formulario.salario}"`);
console.log(`  Convertido: ${salarioNumero}`);
console.log(`  Formatado: "${salarioFormatado}"`);
console.log(
  `  Válido: ${salarioValido ? "✅" : "❌"} ${salarioValido ? "" : salarioErro}`
);

// 7. RESULTADO FINAL
console.log("\n=== RESULTADO DA VALIDAÇÃO ===\n");

const camposValidos = [
  { nome: "Nome", valido: nomeValido },
  { nome: "Email", valido: emailValido },
  { nome: "Idade", valido: idadeValida },
  { nome: "Telefone", valido: telefoneValido },
  { nome: "Senha", valido: senhaValida },
  { nome: "Salário", valido: salarioValido },
];

const todosValidos = camposValidos.every((campo) => campo.valido);
const totalCampos = camposValidos.length;
const camposAprovados = camposValidos.filter((campo) => campo.valido).length;

camposValidos.forEach((campo) => {
  console.log(`${campo.valido ? "✅" : "❌"} ${campo.nome}`);
});

console.log(`\n📊 RESUMO: ${camposAprovados}/${totalCampos} campos válidos`);

if (todosValidos) {
  console.log("\n🎉 FORMULÁRIO APROVADO!");
  console.log("\n📄 DADOS PROCESSADOS:");
  console.log(`Nome: ${nomeFormatado}`);
  console.log(`Email: ${emailLimpo}`);
  console.log(`Idade: ${idadeNumero} anos`);
  console.log(`Telefone: ${telefoneFormatado}`);
  console.log(`Salário: ${salarioFormatado}`);
} else {
  console.log("\n❌ FORMULÁRIO REJEITADO!");
  console.log("Corrija os erros acima e tente novamente.");
}
