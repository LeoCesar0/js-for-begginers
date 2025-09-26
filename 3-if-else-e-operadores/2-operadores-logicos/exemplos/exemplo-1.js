// 🔗 EXEMPLO 1: Operadores Lógicos
// =================================

console.log("=== OPERADORES LÓGICOS ===\n");

const idade = 20;
const temCarteira = true;
const temCarro = false;
const dinheiro = 50;

console.log("=== OPERADOR && (E/AND) ===");
console.log(`Idade: ${idade}, Tem carteira: ${temCarteira}`);

// Ambas condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
  console.log("✅ Pode dirigir: maior de idade E tem carteira");
} else {
  console.log("❌ Não pode dirigir");
}

console.log("\n=== OPERADOR || (OU/OR) ===");
const formaPagamento = "cartão";

console.log(`Forma de pagamento: ${formaPagamento}`);

// Pelo menos uma condição deve ser verdadeira
if (
  formaPagamento === "dinheiro" ||
  formaPagamento === "pix" ||
  formaPagamento === "cartão"
) {
  console.log("✅ Forma de pagamento aceita");
} else {
  console.log("❌ Forma de pagamento não aceita");
}

console.log("\n=== OPERADOR ! (NÃO/NOT) ===");
const logado = false;

console.log(`Usuário logado: ${logado}`);

if (!logado) {
  console.log("❌ Usuário NÃO está logado - redirecionando para login");
} else {
  console.log("✅ Usuário está logado");
}

console.log("\n=== COMBINANDO OPERADORES ===");
const produto = "smartphone";
const preco = 800;
const categoria = "eletrônicos";
const emEstoque = true;

console.log(
  `Produto: ${produto}, Preço: R$ ${preco}, Categoria: ${categoria}, Em estoque: ${emEstoque}`
);

// Combinando && e ||
if ((preco < 1000 || categoria === "eletrônicos") && emEstoque) {
  console.log("✅ Produto disponível para compra");
} else {
  console.log("❌ Produto não disponível");
}

console.log("\n=== EXEMPLO PRÁTICO - ACESSO AO SISTEMA ===");
const usuario = "admin";
const senha = "123456";
const tentativas = 2;
const contaBloqueada = false;

console.log("🔐 VERIFICANDO ACESSO");
console.log(`Usuário: ${usuario}`);
console.log(`Tentativas restantes: ${3 - tentativas}`);
console.log(`Conta bloqueada: ${contaBloqueada}`);

if (
  !contaBloqueada &&
  tentativas < 3 &&
  usuario === "admin" &&
  senha === "123456"
) {
  console.log("✅ ACESSO LIBERADO - Bem-vindo!");
} else if (contaBloqueada) {
  console.log("❌ ACESSO NEGADO - Conta bloqueada");
} else if (tentativas >= 3) {
  console.log("❌ ACESSO NEGADO - Muitas tentativas");
} else {
  console.log("❌ ACESSO NEGADO - Credenciais inválidas");
}
