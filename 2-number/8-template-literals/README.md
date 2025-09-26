# 🧩 Aula 8: Template Literals com Números

## 📖 O que você vai aprender

Nesta aula, você aprenderá como combinar números e strings usando template literals, uma habilidade essencial para:

- Criar mensagens dinâmicas com cálculos
- Formatar relatórios com dados numéricos
- Combinar conhecimentos de strings e numbers
- Gerar saídas profissionais e organizadas

## 🧠 Conceito

Template literals permitem inserir números e expressões matemáticas diretamente em strings, criando mensagens dinâmicas e formatadas.

### Sintaxe com Números

```javascript
`Texto ${numero} mais texto``Resultado: ${calculo} unidades``Total: R$ ${preco.toFixed(
  2
)}``Média: ${(a + b + c) / 3}`;
```

### Combinando com Métodos

```javascript
`Valor: ${valor.toFixed(
  2
)}``Aleatório: ${Math.random()}``Arredondado: ${Math.round(numero)}`;
```

### Casos de Uso

- Relatórios financeiros
- Dashboards de dados
- Mensagens de confirmação
- Logs de sistema
