const dadosCliente = {
  nome: "   joão DA silva   ",
  cpf: "123.456.789-01",
  rg: "12.345.678-9",
  dataNascimento: "15/03/1990",
  rendaMensal: "3.500,75",
  email: "  JOAO@GMAIL.COM  ",
  telefone: "11987654321",
  endereco: {
    cep: "01234567",
    rua: "  rua das flores, 123  ",
    cidade: "  são paulo  ",
    estado: "SP",
  },
};

// Crie um sistema completo de validação que:
// 1. Sanitize e valide TODOS os campos
// 2. Use métodos de strings para limpar e formatar
// 3. Use conversão de numbers para valores numéricos
// 4. Use if-else para todas as validações
// 5. Calcule uma "pontuação de crédito" baseada nos dados
// 6. Dê feedback detalhado de cada campo

// console.log("📋 SISTEMA DE VALIDAÇÃO DE CLIENTE");
// console.log("======================================");

// let pontuacaoCredito = 0;
// let camposValidos = 0;
// let totalCampos = 0;

// // VALIDAÇÃO DE NOME
// totalCampos++;
// const nomeLimpo = dadosCliente.nome.trim().toLowerCase();
// const nomeFormatado = // Primeira letra de cada palavra maiúscula
// let nomeValido = false;

// if (...) { // verificações do nome
//   nomeValido = true;
//   camposValidos++;
//   pontuacaoCredito += 10;
//   console.log(`✅ Nome: ${nomeFormatado}`);
// } else {
//   console.log(`❌ Nome: inválido`);
// }

// // VALIDAÇÃO DE CPF
// totalCampos++;
// const cpfNumeros = dadosCliente.cpf.replace(/\D/g, "");
// let cpfValido = false;

// if (...) { // verifica tamanho, formato, etc.
//   cpfValido = true;
//   camposValidos++;
//   pontuacaoCredito += 15;
//   console.log(`✅ CPF: ${cpfNumeros.slice(0,3)}.${cpfNumeros.slice(3,6)}.${cpfNumeros.slice(6,9)}-${cpfNumeros.slice(9)}`);
// } else {
//   console.log(`❌ CPF: inválido`);
// }

// // VALIDAÇÃO DE DATA DE NASCIMENTO
// totalCampos++;
// const partesData = dadosCliente.dataNascimento.split("/");
// let dataValida = false;
// let idade = 0;

// if (partesData.length === 3) {
//   const dia = Number(partesData[0]);
//   const mes = Number(partesData[1]);
//   const ano = Number(partesData[2]);

//   if (...) { // valide dia, mês, ano
//     // Calcule idade
//     const anoAtual = 2024;
//     idade = anoAtual - ano;
//
//     if (...) { // idade válida
//       dataValida = true;
//       camposValidos++;
//       pontuacaoCredito += idade >= 25 ? 20 : 10; // Bônus para mais velhos
//       console.log(`✅ Data Nascimento: ${dadosCliente.dataNascimento} (${idade} anos)`);
//     }
//   }
// }

// if (!dataValida) {
//   console.log(`❌ Data de Nascimento: inválida`);
// }

// // VALIDAÇÃO DE RENDA
// totalCampos++;
// const rendaLimpa = dadosCliente.rendaMensal.replace(".", "").replace(",", ".");
// const rendaNumero = Number(rendaLimpa);
// let rendaValida = false;

// if (...) { // valide renda
//   rendaValida = true;
//   camposValidos++;
//
//   // Pontuação baseada na renda
//   if (rendaNumero >= 10000) {
//     pontuacaoCredito += 30;
//   } else if (rendaNumero >= 5000) {
//     pontuacaoCredito += 20;
//   } else {
//     pontuacaoCredito += 10;
//   }
//
//   console.log(`✅ Renda: R$ ${rendaNumero.toFixed(2)}`);
// } else {
//   console.log(`❌ Renda: inválida`);
// }

// // VALIDAÇÃO DE EMAIL (reutilize código do exemplo)
// totalCampos++;
// // Complete...

// // VALIDAÇÃO DE TELEFONE
// totalCampos++;
// // Complete...

// // VALIDAÇÃO DE ENDEREÇO
// totalCampos++;
// const cepNumeros = dadosCliente.endereco.cep.replace(/\D/g, "");
// const ruaLimpa = dadosCliente.endereco.rua.trim();
// const cidadeLimpa = dadosCliente.endereco.cidade.trim();
// let enderecoValido = false;

// if (...) { // valide todos os campos do endereço
//   enderecoValido = true;
//   camposValidos++;
//   pontuacaoCredito += 15;
//   console.log(`✅ Endereço: ${ruaLimpa}, ${cidadeLimpa}/${dadosCliente.endereco.estado}`);
// } else {
//   console.log(`❌ Endereço: inválido`);
// }

// // RESULTADO FINAL
// const percentualValido = (camposValidos / totalCampos) * 100;
// console.log(`\n📊 RESULTADO FINAL:`);
// console.log(`Campos válidos: ${camposValidos}/${totalCampos} (${percentualValido.toFixed(1)}%)`);
// console.log(`Pontuação de crédito: ${pontuacaoCredito}/150`);

// // Classificação final
// let classificacao = "";
// if (camposValidos === totalCampos && pontuacaoCredito >= 120) {
//   classificacao = "🌟 CLIENTE PREMIUM";
// } else if (percentualValido >= 80 && pontuacaoCredito >= 80) {
//   classificacao = "🥇 CLIENTE GOLD";
// } else if (percentualValido >= 60) {
//   classificacao = "🥈 CLIENTE PADRÃO";
// } else {
//   classificacao = "❌ CADASTRO REJEITADO";
// }

// console.log(`\n${classificacao}`);

// if (pontuacaoCredito >= 60) {
//   const limiteSugerido = (rendaNumero * 3).toFixed(2);
//   console.log(`💳 Limite de crédito sugerido: R$ ${limiteSugerido}`);
// }
