# 🪆 Aula 4: if-else Aninhado

## 📖 O que você vai aprender

Nesta aula, você aprenderá como criar estruturas condicionais dentro de outras, uma habilidade essencial para:

- Implementar lógicas complexas e hierárquicas
- Criar sistemas de decisão em múltiplos níveis
- Organizar condições dependentes
- Desenvolver fluxos de validação estruturados

## 🧠 Conceito

O if-else aninhado é quando colocamos uma estrutura condicional dentro de outra. É como fazer perguntas que dependem de respostas anteriores, criando uma árvore de decisões.

### Estrutura Básica

```javascript
if (condicao1) {
  if (condicao2) {
    // executa se ambas forem verdadeiras
  } else {
    // executa se condicao1 é verdadeira, mas condicao2 é falsa
  }
} else {
  if (condicao3) {
    // executa se condicao1 é falsa, mas condicao3 é verdadeira
  } else {
    // executa se condicao1 e condicao3 são falsas
  }
}
```

### Boas Práticas

- Use indentação clara para visualizar os níveis
- Evite muitos níveis (máximo 3-4)
- Considere usar operadores lógicos quando possível
- Comente lógicas complexas
