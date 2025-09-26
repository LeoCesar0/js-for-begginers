// 🧩 EXEMPLO 2: Switch Dentro de If
// =================================

console.log("=== SWITCH DENTRO DE IF ===\n");

const usuario = {
  nome: "Ana",
  ativo: true,
  tipo: "premium",
  saldo: 150,
};

const sistema = {
  manutencao: false,
  horaAtual: 14, // 14h
  diaUtil: true,
};

if (usuario.ativo && !sistema.manutencao) {
  console.log("✅ Usuário ativo e sistema operacional");

  switch (usuario.tipo.toLowerCase()) {
    case "premium":
      console.log("🌟 Acesso Premium - Sem restrições");
      if (usuario.saldo > 100) {
        console.log("💰 Saldo alto - Ofertas especiais disponíveis");
      }
      break;

    case "gold":
      console.log("🥇 Acesso Gold - Restrições mínimas");
      if (sistema.horaAtual >= 6 && sistema.horaAtual <= 22) {
        console.log("🕑 Horário permitido para Gold");
      } else {
        console.log("❌ Fora do horário Gold (6h-22h)");
      }
      break;

    case "basico":
    default:
      console.log("🥈 Acesso Básico - Restrições aplicadas");
      if (
        sistema.diaUtil &&
        sistema.horaAtual >= 9 &&
        sistema.horaAtual <= 18
      ) {
        console.log("🕑 Horário comercial - Acesso liberado");
      } else {
        console.log("❌ Fora do horário comercial");
      }
      break;
  }
} else {
  console.log("❌ Acesso negado - Usuário inativo ou sistema em manutenção");
}

console.log("\n=== TESTANDO DIFERENTES USUÁRIOS ===");

const usuarios = [
  { nome: "Bruno", ativo: true, tipo: "basico", saldo: 50 },
  { nome: "Carla", ativo: true, tipo: "gold", saldo: 200 },
  { nome: "Diego", ativo: false, tipo: "premium", saldo: 300 },
  { nome: "Elena", ativo: true, tipo: "premium", saldo: 80 },
];

usuarios.forEach((user) => {
  console.log(`\n--- ${user.nome} ---`);

  if (user.ativo && !sistema.manutencao) {
    switch (user.tipo) {
      case "premium":
        console.log("🌟 Premium");
        if (user.saldo > 100) {
          console.log("💎 Acesso VIP + Ofertas");
        } else {
          console.log("⭐ Acesso Premium");
        }
        break;

      case "gold":
        console.log("🥇 Gold");
        if (sistema.horaAtual >= 6 && sistema.horaAtual <= 22) {
          console.log("✅ Acesso liberado");
        } else {
          console.log("⏰ Fora do horário");
        }
        break;

      default:
        console.log("🥈 Básico");
        if (
          sistema.diaUtil &&
          sistema.horaAtual >= 9 &&
          sistema.horaAtual <= 18
        ) {
          console.log("✅ Horário comercial");
        } else {
          console.log("❌ Fora do horário");
        }
    }
  } else {
    console.log("❌ Acesso negado");
  }
});
