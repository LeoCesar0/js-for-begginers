const jogador = {
  nome: "Alex",
  nivel: 45,
  classe: "guerreiro", // mago, arqueiro, guerreiro
  hp: 85,
  mp: 30,
  experiencia: 89750,
  ouro: 1250,
  equipamentos: ["espada", "escudo", "armadura"],
  skills: ["atacar", "defender", "berserker"],
};

const inimigo = {
  nome: "Dragão Ancião",
  nivel: 50,
  tipo: "boss", // comum, elite, boss
  hp: 200,
  resistencias: ["fogo", "gelo"],
  fraquezas: ["raio"],
};

const acao = "atacar"; // atacar, magia, item, fugir
const situacao = {
  turno: 3,
  clima: "tempestade", // normal, chuva, tempestade, sol
  localizacao: "montanha", // planicie, floresta, montanha, caverna
  grupoJogadores: 1, // sozinho = 1, grupo = 2-4
};

// Crie um sistema de combate complexo que considere:
// 1. Verificar se o jogador pode realizar a ação
// 2. Calcular dano baseado em classe, equipamentos, clima
// 3. Aplicar bônus/penalidades por localização
// 4. Considerar resistências e fraquezas do inimigo
// 5. Calcular experiência e ouro ganhos
// 6. Verificar se jogador sobe de nível
// Use TODAS as técnicas aprendidas no módulo!

// console.log(`⚔️ SISTEMA DE COMBATE`);
// console.log(`====================`);
// console.log(`${jogador.nome} (Nv.${jogador.nivel} ${jogador.classe}) vs ${inimigo.nome}`);
// console.log(`Localização: ${situacao.localizacao} | Clima: ${situacao.clima}`);
// console.log(`Turno: ${situacao.turno}`);

// // Verificar se pode atacar
// const podeAgir = jogador.hp > 0 && ...;
// const temRecursos = acao === "magia" ? jogador.mp >= 20 : true;
// const temEquipamento = acao === "atacar" ? jogador.equipamentos.includes("espada") : true;

// if (podeAgir && temRecursos && temEquipamento) {
//   console.log("\n✅ Ação válida! Executando...");

//   let danoBase = 0;
//   let custoMP = 0;

//   // Calcular dano por ação (switch)
//   switch (acao) {
//     case "atacar":
//       // Dano base por classe
//       switch (jogador.classe) {
//         case "guerreiro":
//           danoBase = 50;
//           break;
//         case "arqueiro":
//           danoBase = 35;
//           break;
//         case "mago":
//           danoBase = 25;
//           break;
//       }
//       break;

//     case "magia":
//       // Complete...
//       break;

//     case "item":
//       // Complete...
//       break;
//   }

//   // Bônus por equipamentos (if-else)
//   if (jogador.equipamentos.includes("espada") && acao === "atacar") {
//     danoBase += 15;
//   }
//   if (jogador.equipamentos.includes("armadura")) {
//     // Reduz dano recebido em 10
//   }

//   // Modificadores por clima (ternário)
//   const modificadorClima = situacao.clima === "tempestade" && jogador.classe === "mago"
//     ? 1.5 // mago ganha bônus na tempestade
//     : situacao.clima === "chuva" && acao === "magia"
//       ? 0.8 // magia enfraquecida na chuva
//       : 1.0; // normal

//   // Modificadores por localização
//   const modificadorLocal = // Complete com ternário aninhado...

//   // Dano final
//   let danoFinal = Math.round(danoBase * modificadorClima * modificadorLocal);

//   // Verificar resistências/fraquezas do inimigo
//   const tipoAtaque = acao === "magia" && situacao.clima === "tempestade" ? "raio" : "físico";
//
//   if (inimigo.resistencias.includes(tipoAtaque)) {
//     danoFinal = Math.round(danoFinal * 0.5);
//     console.log("🛡️ Inimigo resistente ao ataque!");
//   } else if (inimigo.fraquezas.includes(tipoAtaque)) {
//     danoFinal = Math.round(danoFinal * 2.0);
//     console.log("💥 SUPER EFETIVO!");
//   }

//   console.log(`\n💪 Dano causado: ${danoFinal}`);
//
//   // Calcular recompensas se derrotar
//   const inimigoMorreu = (inimigo.hp - danoFinal) <= 0;
//
//   if (inimigoMorreu) {
//     console.log(`\n🏆 ${inimigo.nome} derrotado!`);

//     // Experiência por tipo de inimigo
//     const expGanha = inimigo.tipo === "boss" ? 5000 : inimigo.tipo === "elite" ? 2000 : 500;
//     const ouroGanho = inimigo.nivel * 10;

//     console.log(`📈 +${expGanha} EXP`);
//     console.log(`💰 +${ouroGanho} ouro`);

//     // Verificar se sobe de nível
//     const expTotal = jogador.experiencia + expGanha;
//     const expProximoNivel = jogador.nivel * 2000; // Simplificado

//     if (expTotal >= expProximoNivel) {
//       console.log(`\n🎉 SUBIU DE NÍVEL! ${jogador.nivel} → ${jogador.nivel + 1}`);
//       console.log(`💪 +10 HP, +5 MP`);
//     }
//   }

// } else {
//   console.log("\n❌ Não pode realizar esta ação!");
//
//   // Mostrar motivos específicos
//   if (!podeAgir) console.log("💀 Jogador sem HP");
//   if (!temRecursos) console.log("🔮 MP insuficiente");
//   if (!temEquipamento) console.log("⚔️ Equipamento necessário");
// }
