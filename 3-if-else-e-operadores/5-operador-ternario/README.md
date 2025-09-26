# ❓ Aula 5: Operador Ternário

## 📖 O que você vai aprender

Nesta aula, você aprenderá como escrever condições de forma mais concisa usando o operador ternário, uma habilidade essencial para:

- Escrever código mais limpo e compacto
- Atribuir valores condicionais rapidamente
- Simplificar if-else simples
- Melhorar a legibilidade em casos específicos

## 🧠 Conceito

O operador ternário é uma forma abreviada de escrever if-else simples. É especialmente útil para atribuições condicionais e pode ser lido como "se isso, então aquilo, senão aquilo outro".

### Sintaxe

```javascript
condição ? valorSeVerdadeiro : valorSeFalso;
```

### Comparação com if-else

```javascript
// Com if-else
let resultado;
if (idade >= 18) {
  resultado = "Adulto";
} else {
  resultado = "Menor";
}

// Com operador ternário
let resultado = idade >= 18 ? "Adulto" : "Menor";
```

### Quando Usar

- Atribuições condicionais simples
- Valores de retorno
- Interpolação em strings
- Condições com apenas dois resultados possíveis
