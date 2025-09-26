// ⚖️ EXEMPLO 2: Comparações com Strings
// =====================================

console.log("=== COMPARAÇÕES COM STRINGS ===\n");

const emailProibido = "joao@email.com";
const email = "joao@email.com";
const idade = 5;

let emailValido = false;
let idadeValida = false;
let emailEhProibido = false;
let formulárioVálido = false;

console.log(`Email: ${email}`);
console.log(`Idade: ${idade}`);

const emailEhString = typeof email === "string";

if (email.includes("@") && email.includes(".com") && emailEhString) {
  emailValido = true;
  console.log("Email Válido");
} else {
  console.log("❌ Email inválido");
}

if (typeof idade === "number") {
  idadeValida = true;
  console.log("Email Válido");
} else {
  console.log("❌ Email inválido");
}

if (email !== emailProibido) {
  emailEhProibido = false;
  console.log("✅ Email permitido");
} else {
  emailEhProibido = true;

  console.log("❌ Email proibido");
}

if (!emailValido || !idadeValida || emailEhProibido) {
  console.log("❌ Dados inválidos");
  formulárioVálido = false;
} else {
  console.log("✅ Dados válidos");
  formulárioVálido = true;
}

console.log(`Formulário Válido: ${formulárioVálido}`);

console.log("Sempre prefira === e !== para evitar conversões inesperadas!");
