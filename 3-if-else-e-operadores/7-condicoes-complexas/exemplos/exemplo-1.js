// 🧩 EXEMPLO 1: Combinação de Operadores
// ========================================

console.log("=== COMBINAÇÃO DE OPERADORES ===\n");

// Dados de exemplo
const usuario = {
  nome: "Ana",
  idade: 25,
  email: "ana@empresa.com",
  ativo: true,
  tipo: "premium",
  saldo: 150,
  tentativasLogin: 2,
  ultimoLogin: "2024-01-15",
};

const sistema = {
  manutencao: false,
  horaAtual: 14, // 14h
  diaUtil: true,
};

// Lógica complexa com parênteses
const podeAcessar =
  usuario.ativo &&
  usuario.tentativasLogin < 3 &&
  !sistema.manutencao &&
  (usuario.tipo === "premium" ||
    (sistema.diaUtil && sistema.horaAtual >= 9 && sistema.horaAtual <= 18));

console.log(`Usuário: ${usuario.nome}`);
console.log(`Pode acessar sistema: ${podeAcessar ? "Sim" : "Não"}`);

// Detalhando as condições
const contaValida = usuario.ativo && usuario.tentativasLogin < 3;
const sistemaDisponivel = !sistema.manutencao;
const horarioPermitido =
  usuario.tipo === "premium" ||
  (sistema.diaUtil && sistema.horaAtual >= 9 && sistema.horaAtual <= 18);

console.log(`\nDetalhamento:`);
console.log(`  Conta válida: ${contaValida}`);
console.log(`  Sistema disponível: ${sistemaDisponivel}`);
console.log(`  Horário permitido: ${horarioPermitido}`);

console.log("\n=== EXEMPLO PRÁTICO ===\n");

// Testando diferentes cenários
const usuarios = [
  { nome: "Bruno", ativo: true, tipo: "basico", tentativas: 1 },
  { nome: "Carla", ativo: false, tipo: "premium", tentativas: 0 },
  { nome: "Diego", ativo: true, tipo: "premium", tentativas: 4 },
];

usuarios.forEach((user) => {
  const acesso =
    user.ativo &&
    user.tentativas < 3 &&
    !sistema.manutencao &&
    (user.tipo === "premium" ||
      (sistema.diaUtil && sistema.horaAtual >= 9 && sistema.horaAtual <= 18));

  console.log(`${user.nome}: ${acesso ? "✅ Acesso" : "❌ Negado"}`);
});
