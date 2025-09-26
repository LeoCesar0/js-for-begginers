// 🧩 EXEMPLO 4: Sistema de Empréstimo
// ===================================

console.log("=== SISTEMA DE EMPRÉSTIMO ===\n");

const cliente = {
  nome: "Carlos Silva",
  idade: 32,
  renda: 5000,
  temCPF: true,
  temRenda: true,
  temRestricao: false,
  anosEmprego: 3,
  possuiImovel: true,
  valorSolicitado: 50000,
};

console.log(`🏦 ANÁLISE DE EMPRÉSTIMO - ${cliente.nome.toUpperCase()}`);
console.log("================================================");

// Condições básicas
const idadeOk = cliente.idade >= 21 && cliente.idade <= 65;
const documentosOk = cliente.temCPF && cliente.temRenda;
const creditoLimpo = !cliente.temRestricao;
const estabilidadeOk = cliente.anosEmprego >= 2;

// Condições financeiras
const rendaMinima = cliente.renda >= 2000;
const comprometimentoOk = cliente.valorSolicitado <= cliente.renda * 0.3 * 60; // 30% por 60 meses
const garantiaOk = cliente.possuiImovel || cliente.valorSolicitado <= 30000;

// Análise final complexa
const aprovacaoBasica = idadeOk && documentosOk && creditoLimpo;
const aprovacaoFinanceira = rendaMinima && comprometimentoOk && estabilidadeOk;
const aprovacaoGarantia = garantiaOk;

console.log("\n📄 VERIFICAÇÕES:");
console.log(`Idade (21-65): ${idadeOk ? "✅" : "❌"} ${cliente.idade} anos`);
console.log(
  `Documentos: ${documentosOk ? "✅" : "❌"} CPF e comprovante de renda`
);
console.log(`Crédito limpo: ${creditoLimpo ? "✅" : "❌"} Sem restrições`);
console.log(
  `Estabilidade: ${estabilidadeOk ? "✅" : "❌"} ${
    cliente.anosEmprego
  } anos de emprego`
);
console.log(`Renda mínima: ${rendaMinima ? "✅" : "❌"} R$ ${cliente.renda}`);
console.log(
  `Comprometimento: ${comprometimentoOk ? "✅" : "❌"} Valor vs renda`
);
console.log(`Garantia: ${garantiaOk ? "✅" : "❌"} Imóvel ou valor baixo`);

// Decisão final usando todas as técnicas
if (aprovacaoBasica && aprovacaoFinanceira && aprovacaoGarantia) {
  // Switch para definir condições baseado no perfil
  const perfilCliente =
    cliente.renda >= 8000 && cliente.possuiImovel
      ? "premium"
      : cliente.renda >= 5000
      ? "gold"
      : "standard";

  switch (perfilCliente) {
    case "premium":
      console.log("\n🎆 EMPRÉSTIMO APROVADO - PERFIL PREMIUM!");
      console.log("💰 Taxa: 1.2% ao mês");
      console.log("📅 Prazo: Até 72 meses");
      console.log("🎁 Benefícios: Seguro gratis + cartão platinum");
      break;

    case "gold":
      console.log("\n🥇 EMPRÉSTIMO APROVADO - PERFIL GOLD!");
      console.log("💰 Taxa: 1.5% ao mês");
      console.log("📅 Prazo: Até 60 meses");
      console.log("🎁 Benefícios: Seguro com desconto");
      break;

    default:
      console.log("\n🟢 EMPRÉSTIMO APROVADO - PERFIL PADRÃO");
      console.log("💰 Taxa: 2.0% ao mês");
      console.log("📅 Prazo: Até 48 meses");
      break;
  }

  const prestacao = (cliente.valorSolicitado * 1.02) / 48; // Simplificado
  console.log(
    `📄 Valor solicitado: R$ ${cliente.valorSolicitado.toLocaleString()}`
  );
  console.log(`💵 Prestação estimada: R$ ${prestacao.toFixed(2)}`);
} else {
  console.log("\n❌ EMPRÉSTIMO NEGADO");

  // Feedback específico
  if (!aprovacaoBasica) {
    console.log("🚨 Problema: Documentação ou restrições");
  }
  if (!aprovacaoFinanceira) {
    console.log("🚨 Problema: Renda insuficiente ou instabilidade");
  }
  if (!aprovacaoGarantia) {
    console.log("🚨 Problema: Falta de garantias");
  }
}

console.log("\n=== SIMULANDO OUTROS CLIENTES ===");

const outrosClientes = [
  {
    nome: "Ana",
    idade: 28,
    renda: 3000,
    cpf: true,
    restricao: false,
    emprego: 4,
    imovel: false,
    valor: 25000,
  },
  {
    nome: "Bruno",
    idade: 45,
    renda: 12000,
    cpf: true,
    restricao: false,
    emprego: 8,
    imovel: true,
    valor: 80000,
  },
  {
    nome: "Carla",
    idade: 19,
    renda: 1500,
    cpf: true,
    restricao: true,
    emprego: 1,
    imovel: false,
    valor: 15000,
  },
];

outrosClientes.forEach((cliente) => {
  console.log(`\n--- ${cliente.nome} ---`);

  const basico = cliente.idade >= 21 && cliente.cpf && !cliente.restricao;
  const financeiro =
    cliente.renda >= 2000 &&
    cliente.emprego >= 2 &&
    cliente.valor <= cliente.renda * 18;
  const garantia = cliente.imovel || cliente.valor <= 30000;

  const aprovado = basico && financeiro && garantia;

  console.log(`Resultado: ${aprovado ? "✅ APROVADO" : "❌ NEGADO"}`);
  if (!aprovado) {
    if (!basico) console.log("  Problema: Documentos/Idade/Restrição");
    if (!financeiro) console.log("  Problema: Renda/Estabilidade");
    if (!garantia) console.log("  Problema: Garantias");
  }
});
