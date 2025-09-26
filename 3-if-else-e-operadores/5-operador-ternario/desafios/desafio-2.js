const produtos = [
  { nome: "Notebook", preco: 2500, categoria: "eletrônicos", estoque: 5 },
  { nome: "Cadeira", preco: 300, categoria: "móveis", estoque: 0 },
  { nome: "Mouse", preco: 50, categoria: "eletrônicos", estoque: 15 },
  { nome: "Mesa", preco: 800, categoria: "móveis", estoque: 2 },
];

// Use operador ternário para criar um relatório que mostre:
// 1. Status do estoque ("Disponível" ou "Esgotado")
// 2. Categoria do preço ("Caro" >= 1000, "Médio" >= 100, "Barato" < 100)
// 3. Urgência de reposição ("Alta" se estoque <= 2, "Normal" se > 2)
// 4. Desconto aplicável (5% para eletrônicos, 3% para móveis)

// console.log("📊 RELATÓRIO DE PRODUTOS");
// console.log("========================");

// for (let i = 0; i < produtos.length; i++) {
//   const produto = produtos[i];

//   // Use apenas operador ternário para estas variáveis:
//   const statusEstoque = ...;
//   const categoriaPreco = ...;
//   const urgenciaReposicao = ...;
//   const percentualDesconto = ...;
//   const precoComDesconto = ...;

//   console.log(`\n${produto.nome}:`);
//   console.log(`  Preço: R$ ${produto.preco} (${categoriaPreco})`);
//   console.log(`  Estoque: ${produto.estoque} unidades (${statusEstoque})`);
//   console.log(`  Urgência: ${urgenciaReposicao}`);
//   console.log(`  Desconto: ${percentualDesconto}%`);
//   console.log(`  Preço final: R$ ${precoComDesconto.toFixed(2)}`);
// }
