// 🔍 EXEMPLO 4: Validação Completa Integrada
// ==========================================

console.log("=== SISTEMA COMPLETO DE VALIDAÇÃO ===\n");

// Simulando dados de um formulário completo
const formulario = {
  nome: "  Maria da Silva  ",
  email: "MARIA@EMAIL.COM.BR",
  idade: "25",
  telefone: "(11) 99999-8888",
  senha: "MinhaSenh@123",
  confirmarSenha: "MinhaSenh@123",
  salario: "5.500,50",
};

console.log("=== DADOS RECEBIDOS DO FORMULÁRIO ===\n");
Object.entries(formulario).forEach(([campo, valor]) => {
  console.log(`${campo}: "${valor}"`);
});

// Função de validação integrada
function validarFormulario(dados) {
  const resultados = {
    nome: { valido: false, erro: "", valorLimpo: "" },
    email: { valido: false, erro: "", valorLimpo: "" },
    idade: { valido: false, erro: "", valorLimpo: 0 },
    telefone: { valido: false, erro: "", valorLimpo: "" },
    senha: { valido: false, erro: "", valorLimpo: "" },
    salario: { valido: false, erro: "", valorLimpo: 0 },
  };

  // NOME
  const nomeLimpo = dados.nome.trim();
  const nomeFormatado = nomeLimpo
    .split(" ")
    .map(
      (palavra) =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
    )
    .join(" ");

  if (nomeLimpo.length === 0) {
    resultados.nome.erro = "Nome é obrigatório";
  } else if (nomeLimpo.length < 2) {
    resultados.nome.erro = "Nome muito curto";
  } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeLimpo)) {
    resultados.nome.erro = "Nome com caracteres inválidos";
  } else {
    resultados.nome.valido = true;
    resultados.nome.valorLimpo = nomeFormatado;
  }

  // EMAIL
  const emailLimpo = dados.email.trim().toLowerCase();

  if (!emailLimpo.includes("@") || !emailLimpo.includes(".")) {
    resultados.email.erro = "Email inválido";
  } else if (emailLimpo.split("@").length !== 2) {
    resultados.email.erro = "Email deve ter apenas um @";
  } else {
    resultados.email.valido = true;
    resultados.email.valorLimpo = emailLimpo;
  }

  // IDADE
  const idadeNumero = Number(dados.idade);

  if (Number.isNaN(idadeNumero)) {
    resultados.idade.erro = "Idade deve ser um número";
  } else if (idadeNumero < 18 || idadeNumero > 120) {
    resultados.idade.erro = "Idade deve estar entre 18 e 120 anos";
  } else {
    resultados.idade.valido = true;
    resultados.idade.valorLimpo = idadeNumero;
  }

  // TELEFONE
  const telefoneNumeros = dados.telefone.replace(/\D/g, "");

  if (telefoneNumeros.length !== 11) {
    resultados.telefone.erro = "Telefone deve ter 11 dígitos";
  } else {
    resultados.telefone.valido = true;
    resultados.telefone.valorLimpo = `(${telefoneNumeros.slice(
      0,
      2
    )}) ${telefoneNumeros.slice(2, 7)}-${telefoneNumeros.slice(7)}`;
  }

  // SENHA
  const senha = dados.senha;
  const senhaErros = [];

  if (senha.length < 8) senhaErros.push("mínimo 8 caracteres");
  if (senha === senha.toLowerCase()) senhaErros.push("sem maiúscula");
  if (!/\d/.test(senha)) senhaErros.push("sem número");
  if (!/[!@#$%^&*]/.test(senha)) senhaErros.push("sem símbolo");
  if (senha !== dados.confirmarSenha) senhaErros.push("não confere");

  if (senhaErros.length > 0) {
    resultados.senha.erro = senhaErros.join(", ");
  } else {
    resultados.senha.valido = true;
    resultados.senha.valorLimpo = "••••••••";
  }

  // SALÁRIO
  const salarioLimpo = dados.salario.replace(/\./g, "").replace(",", ".");
  const salarioNumero = Number(salarioLimpo);

  if (Number.isNaN(salarioNumero)) {
    resultados.salario.erro = "Salário inválido";
  } else if (salarioNumero < 1320) {
    resultados.salario.erro = "Salário abaixo do mínimo";
  } else {
    resultados.salario.valido = true;
    resultados.salario.valorLimpo = salarioNumero;
  }

  return resultados;
}

// Executar validação
const validacao = validarFormulario(formulario);

console.log("\n=== RESULTADO DA VALIDAÇÃO ===\n");

// Mostrar resultados
Object.entries(validacao).forEach(([campo, resultado]) => {
  const status = resultado.valido ? "✅" : "❌";
  const valor = resultado.valido ? resultado.valorLimpo : resultado.erro;

  console.log(`${status} ${campo.toUpperCase()}: ${valor}`);
});

// Resumo final
const camposValidos = Object.values(validacao).filter((r) => r.valido).length;
const totalCampos = Object.keys(validacao).length;
const percentual = ((camposValidos / totalCampos) * 100).toFixed(1);

console.log(
  `\n📊 RESUMO: ${camposValidos}/${totalCampos} campos válidos (${percentual}%)`
);

if (camposValidos === totalCampos) {
  console.log("\n🎉 FORMULÁRIO APROVADO!");

  console.log("\n📝 DADOS PROCESSADOS:");
  console.log(`Nome: ${validacao.nome.valorLimpo}`);
  console.log(`Email: ${validacao.email.valorLimpo}`);
  console.log(`Idade: ${validacao.idade.valorLimpo} anos`);
  console.log(`Telefone: ${validacao.telefone.valorLimpo}`);
  console.log(`Salário: R$ ${validacao.salario.valorLimpo.toFixed(2)}`);
} else {
  console.log("\n❌ FORMULÁRIO REJEITADO!");
  console.log("Corrija os erros acima e tente novamente.");
}
