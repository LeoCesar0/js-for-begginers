// 🔍 EXEMPLO 2: Validação de Telefone e Senha
// ===========================================

console.log("=== VALIDAÇÃO DE TELEFONE E SENHA ===\n");

const dados = {
  telefone: "(11) 99999-8888",
  senha: "MinhaSenh@123",
  confirmarSenha: "MinhaSenh@123",
};

console.log(`Telefone: "${dados.telefone}"`);
console.log(`Senha: "${dados.senha}"`);
console.log(`Confirmar: "${dados.confirmarSenha}"`);

// VALIDAÇÃO DE TELEFONE (strings + patterns)
let telefoneValido = false;
let telefoneErro = "";

// Remover formatação
const telefoneNumeros = dados.telefone.replace(/\D/g, ""); // Remove tudo que não é dígito

if (dados.telefone.trim() === "") {
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
  : dados.telefone;

console.log("\nTELEFONE:");
console.log(`  Original: "${dados.telefone}"`);
console.log(`  Apenas números: "${telefoneNumeros}"`);
console.log(`  Formatado: "${telefoneFormatado}"`);
console.log(
  `  Válido: ${telefoneValido ? "✅" : "❌"} ${
    telefoneValido ? "" : telefoneErro
  }`
);

// VALIDAÇÃO DE SENHA (strings + complexity)
let senhaValida = false;
let senhaErros = [];

const senha = dados.senha;
const confirmarSenha = dados.confirmarSenha;

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

// TESTANDO DIFERENTES SENHAS
console.log("\n=== TESTANDO SENHAS ===");

const senhasTeste = [
  { senha: "123456", conf: "123456" },
  { senha: "MinhaSenh@", conf: "MinhaSenh@" },
  { senha: "MinhaSenha123", conf: "MinhaSenha123" },
  { senha: "Senha@123", conf: "Senha@456" },
  { senha: "MeuPa$$w0rd!", conf: "MeuPa$$w0rd!" },
];

senhasTeste.forEach((teste, index) => {
  console.log(`\n--- Teste ${index + 1}: "${teste.senha}" ---`);

  const erros = [];

  if (teste.senha.length < 8) erros.push("Muito curta");
  if (teste.senha === teste.senha.toLowerCase()) erros.push("Sem maiúscula");
  if (teste.senha === teste.senha.toUpperCase()) erros.push("Sem minúscula");
  if (!/\d/.test(teste.senha)) erros.push("Sem número");
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(teste.senha)) erros.push("Sem símbolo");
  if (teste.senha !== teste.conf) erros.push("Não confere");

  if (erros.length === 0) {
    console.log("✅ SENHA VÁLIDA");
  } else {
    console.log(`❌ Problemas: ${erros.join(", ")}`);
  }
});
