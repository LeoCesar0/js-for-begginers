# 🔗 Aula 2: Operadores Lógicos

## 📖 O que você vai aprender

Nesta aula, você aprenderá como combinar condições usando operadores lógicos, uma habilidade essencial para:

- Criar condições mais complexas e precisas
- Combinar múltiplas verificações em uma só
- Inverter o resultado de condições
- Implementar lógicas de validação avançadas

## 🧠 Conceito

Os operadores lógicos permitem combinar ou modificar condições booleanas (verdadeiro/falso). São como conectores que juntam várias perguntas em uma só.

### Operadores Principais

```javascript
&&  // E (AND) - verdadeiro apenas se AMBOS forem verdadeiros
||  // OU (OR) - verdadeiro se PELO MENOS UM for verdadeiro
!   // NÃO (NOT) - inverte o resultado (verdadeiro vira falso)
```

### Exemplos de Uso

```javascript
// AND (&&) - ambas condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
  // pode dirigir
}

// OR (||) - pelo menos uma condição deve ser verdadeira
if (formaPagamento === "dinheiro" || formaPagamento === "pix") {
  // aceita pagamento
}

// NOT (!) - inverte a condição
if (!logado) {
  // usuário NÃO está logado
}
```
