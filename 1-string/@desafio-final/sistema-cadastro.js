// 🏆 DESAFIO FINAL: Sistema de Cadastro Completo
// ==============================================

/*
CENÁRIO COMPLETO:
Você foi contratado para criar um sistema de cadastro de usuários para uma empresa.
O sistema deve integrar TODOS os conceitos de strings aprendidos:
- toLowerCase/toUpperCase
- length
- trim
- split
- replace
- interpolação

INSTRUÇÕES:
- Complete todas as funções seguindo o padrão estabelecido
- Use os conceitos de strings de forma criativa e eficiente
- Cada função deve demonstrar domínio dos métodos aprendidos
*/

// 📝 UTILS: Funções auxiliares

// Validar e formatar nome completo
const processarNome = ({ nome }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Deve:
  // 1. trim() para remover espaços
  // 2. Normalizar espaços múltiplos entre palavras
  // 3. Capitalizar primeira letra de cada palavra (charAt + toUpperCase)
  // 4. Validar tamanho mínimo (length)
  // 5. Criar iniciais
  // 6. Gerar username baseado no nome
  // Retorne: {
  //   original: string,
  //   formatado: string,
  //   iniciais: string,
  //   username: string,
  //   valido: boolean,
  //   erros: string[]
  // }
};

// Validar e normalizar email
const processarEmail = ({ email }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Deve:
  // 1. trim() e toLowerCase()
  // 2. Validar formato básico
  // 3. Extrair domínio usando split
  // 4. Verificar se domínio é válido
  // 5. Verificar se local (parte antes @) é válido
  // Retorne: {
  //   original: string,
  //   normalizado: string,
  //   local: string,
  //   dominio: string,
  //   valido: boolean,
  //   erros: string[]
  // }
};

// Analisar força da senha
const analisarForcaSenha = ({ senha }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Use charAt() para analisar cada caractere e contar:
  // - Minúsculas, maiúsculas, números, especiais
  // - Detectar sequências (123, abc, aaa)
  // - Verificar tamanho com length
  // - Calcular pontuação de força
  // Retorne: {
  //   senha: string,
  //   tamanho: number,
  //   pontuacao: number, // 0-100
  //   nivel: 'muito_fraca' | 'fraca' | 'media' | 'forte' | 'muito_forte',
  //   criterios: {
  //     tamanho: boolean,
  //     minusculas: boolean,
  //     maiusculas: boolean,
  //     numeros: boolean,
  //     especiais: boolean,
  //     semSequencias: boolean
  //   },
  //   sugestoes: string[]
  // }
};

// Processar e formatar telefone
const processarTelefone = ({ telefone }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Deve:
  // 1. Extrair apenas números usando replace()
  // 2. Validar quantidade de dígitos com length
  // 3. Aplicar máscara usando interpolação
  // 4. Validar se é celular ou fixo
  // Retorne: {
  //   original: string,
  //   numeros: string,
  //   formatado: string,
  //   tipo: 'fixo' | 'celular' | 'invalido',
  //   valido: boolean,
  //   erros: string[]
  // }
};

// Processar dados CSV
const processarCSV = ({ csvData }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Deve:
  // 1. split() por linhas
  // 2. split() cada linha por vírgulas
  // 3. trim() cada campo
  // 4. Processar cada usuário usando as funções acima
  // 5. Gerar relatório de validação
  // Retorne: {
  //   totalLinhas: number,
  //   usuariosValidos: any[],
  //   usuariosInvalidos: any[],
  //   relatorio: string // Template literal formatado
  // }
};

// Gerar cartão de usuário em HTML
const gerarCartaoUsuario = ({ usuario }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Use template literals para criar HTML
  // Integre os resultados de todas as funções de processamento
  // Crie um card bonito e informativo
  // Retorne: string (HTML do cartão)
};

// Gerar relatório de usuários
const gerarRelatorio = ({ usuarios }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Use template literals para criar relatório detalhado
  // Inclua estatísticas, gráficos ASCII, etc.
  // Seja criativo com interpolação e formatação
  // Retorne: string (relatório formatado)
};

// 📝 FUNÇÃO PRINCIPAL (esta será exportada)
const sistemaCadastro = ({ acao, dados }) => {
  // 🚀 SEU CÓDIGO AQUI
  // Função principal que coordena todas as outras
  // Use switch/if para diferentes ações
  // Integre todas as funcionalidades criadas
  // Retorne resultado apropriado para cada ação
};

// Exportando apenas a função principal
module.exports = { sistemaCadastro };

// 🧪 ÁREA DE TESTES
if (require.main === module) {
  console.log("🏆 SISTEMA DE CADASTRO - TESTES");
  console.log("=".repeat(50));

  // Aqui você pode descomentar e testar suas implementações

  /*
    // Teste básico
    const resultado = sistemaCadastro({
        acao: 'processar_usuario',
        dados: {
            nome: "  joão silva santos  ",
            email: "  JOAO@EMAIL.COM  ",
            telefone: "  11 99999-9999  ",
            senha: "MinhaSenh@123"
        }
    });
    
    console.log(resultado);
    */

  console.log("\n💡 Descomente os testes para validar sua implementação!");
}
