# 🧩 Aula 7: Condições Complexas

## 📖 O que você vai aprender

Nesta aula, você aprenderá como combinar todas as técnicas anteriores para criar lógicas complexas, uma habilidade essencial para:

- Resolver problemas do mundo real com múltiplas variáveis
- Combinar diferentes tipos de condições
- Otimizar código complexo
- Criar sistemas de decisão avançados

## 🧠 Conceito

Condições complexas são aquelas que combinam múltiplos operadores, tipos de dados e estruturas condicionais. Elas exigem planejamento e organização para manter o código legível e eficiente.

### Técnicas de Combinação

```javascript
// Operadores lógicos com parênteses
if ((idade >= 18 && temRenda) || (idade >= 16 && temFiador)) {
  // lógica
}

// Switch dentro de if
if (ativo) {
  switch (tipo) {
    case "premium":
      /* ... */ break;
  }
}

// Ternário com operadores lógicos
const acesso = logado && premium ? "total" : logado ? "básico" : "negado";
```

### Boas Práticas

- Use parênteses para deixar prioridades claras
- Divida condições muito complexas em variáveis
- Comente lógicas complexas
- Prefira clareza à concisão
