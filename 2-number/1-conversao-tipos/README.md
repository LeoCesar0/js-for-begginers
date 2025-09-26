# 🔄 Aula 1: Conversão de Tipos

## 📖 O que você vai aprender

Nesta aula, você aprenderá como converter strings em números, uma habilidade essencial para:

- Processar dados de formulários
- Realizar cálculos com valores inseridos pelo usuário
- Tratar entradas de diferentes tipos
- Validar dados numéricos

## 🧠 Conceito

JavaScript oferece várias formas de converter strings em números. Cada método tem suas particularidades e casos de uso específicos.

### Sintaxe

```javascript
Number(valor); // Converte para número (mais restritivo)
parseInt(valor); // Converte para número inteiro
parseFloat(valor); // Converte para número decimal
```

### Diferenças importantes

- `Number()` é mais restritivo e retorna `NaN` se houver caracteres inválidos
- `parseInt()` para na primeira letra e retorna o número até esse ponto
- `parseFloat()` funciona igual ao parseInt mas preserva decimais
