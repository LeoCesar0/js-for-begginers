// 🪆 EXEMPLO 2: Sistema de Notas
// ==============================

console.log("=== SISTEMA DE NOTAS COMPLEXO ===\n");

const aluno = "Pedro";
const nota1 = 8.5;
const nota2 = 7.0;
const frequencia = 85; // porcentagem
const trabalhoEntregue = true;

console.log(`Aluno: ${aluno}`);
console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}`);
console.log(
  `Frequência: ${frequencia}%, Trabalho entregue: ${trabalhoEntregue}`
);

const media = (nota1 + nota2) / 2;
console.log(`Média: ${media.toFixed(1)}`);

// Primeiro nível: frequência mínima
if (frequencia >= 75) {
  console.log("✅ Frequência adequada");

  // Segundo nível: média das notas
  if (media >= 7.0) {
    console.log("✅ Média suficiente");

    // Terceiro nível: trabalho entregue
    if (trabalhoEntregue) {
      console.log("🎉 APROVADO COM LOUVOR!");
    } else {
      console.log("✅ APROVADO (sem trabalho extra)");
    }
  } else if (media >= 5.0) {
    console.log("⚠️ Média baixa");

    // Recuperação depende do trabalho
    if (trabalhoEntregue) {
      console.log("📚 APROVADO NA RECUPERAÇÃO (trabalho salvou!)");
    } else {
      console.log("❌ REPROVADO (média baixa sem trabalho)");
    }
  } else {
    console.log("❌ REPROVADO (média muito baixa)");
  }
} else {
  console.log("❌ REPROVADO (frequência insuficiente)");
}

console.log("\n=== TESTANDO OUTROS ALUNOS ===");

const outrosAlunos = [
  { nome: "Ana", nota1: 9.0, nota2: 8.5, freq: 90, trabalho: true },
  { nome: "Carlos", nota1: 6.0, nota2: 5.5, freq: 80, trabalho: true },
  { nome: "Beatriz", nota1: 4.0, nota2: 3.5, freq: 70, trabalho: false },
  { nome: "Diego", nota1: 8.0, nota2: 7.5, freq: 85, trabalho: false },
];

outrosAlunos.forEach((aluno) => {
  console.log(`\n--- ${aluno.nome} ---`);
  const mediaAluno = (aluno.nota1 + aluno.nota2) / 2;

  if (aluno.freq >= 75) {
    if (mediaAluno >= 7.0) {
      if (aluno.trabalho) {
        console.log("🎉 APROVADO COM LOUVOR!");
      } else {
        console.log("✅ APROVADO");
      }
    } else if (mediaAluno >= 5.0 && aluno.trabalho) {
      console.log("📚 RECUPERAÇÃO");
    } else {
      console.log("❌ REPROVADO");
    }
  } else {
    console.log("❌ REPROVADO (falta)");
  }
});
