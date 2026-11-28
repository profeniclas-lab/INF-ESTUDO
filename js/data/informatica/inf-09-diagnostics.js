/** INF-ESTUDO — Fase D/Lote 2: diagnóstico do INF-09. */
export const INF_09_DIAGNOSTICS = {
  "INF-09": [
    {
      "subtopicId": "INF-09-001",
      "front": "Você precisa atuar em pasta de trabalho, planilha, células, linhas e colunas. Uma planilha de estoque precisa reservar o intervalo B2:D6 para três campos em cinco registros. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Reconhecer B2:D6 como 5 linhas × 3 colunas = 15 células e usar cada coluna para um campo. Justificativa: Uma pasta de trabalho reúne planilhas; células são identificadas pelo encontro de coluna e linha, como B3. Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário. Erro a evitar: Não confunda a contagem de células de um intervalo com o número de linhas. Mesclar células pode dificultar referências e ordenação de registros administrativos."
    },
    {
      "subtopicId": "INF-09-002",
      "front": "Você precisa atuar em seleção, edição, cópia, preenchimento e séries. Uma secretaria calcula em C2 a soma das quantidades em A2 e B2 e quer repetir o cálculo para a linha seguinte. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Copiar a fórmula =A2+B2 de C2 para C3 e conferir que o resultado utiliza A3 e B3. Justificativa: Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referências relativas em fórmulas. Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. Colar apenas valores elimina a fórmula no destino, preservando o resultado calculado naquele momento. Erro a evitar: Um erro é arrastar fórmula sem conferir referências ou supor que toda seleção de uma célula numérica criará série crescente. A interpretação da alça depende dos dados e da forma de uso."
    },
    {
      "subtopicId": "INF-09-003",
      "front": "Você precisa atuar em tipos de dados, números, datas e textos. Um setor importa matrículas 00073 e 00104, mas a planilha elimina os zeros à esquerda. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Importar ou formatar matrículas como texto para preservar os identificadores completos. Justificativa: Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor interno. Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação. Erro a evitar: Não resolva a perda de zeros iniciais alterando números de documento em valores monetários. Identificadores são dados categóricos e não devem ser somados."
    },
    {
      "subtopicId": "INF-09-004",
      "front": "Você precisa atuar em formatação de células e formatos numéricos. Uma planilha contém taxa de 0,075 e o relatório precisa mostrar a taxa em porcentagem. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Aplicar formato percentual, exibindo 7,5%, sem multiplicar manualmente o valor da célula por 100. Justificativa: Formatar células ajusta a aparência dos dados: casas decimais, moeda, porcentagem, bordas, cores e alinhamento. O valor 0,25 com formato percentual aparece como 25%; digitar 25 e aplicar percentual pode mostrar 2500%. Reduzir casas decimais não elimina necessariamente frações internas usadas nas contas. Erro a evitar: É comum formatar 0,125 como 0,13 e depois supor que cálculos usam exatamente 0,13; a célula pode continuar armazenando 0,125."
    },
    {
      "subtopicId": "INF-09-005",
      "front": "Você precisa atuar em operadores aritméticos e precedência de fórmulas. Uma coordenação quer calcular o custo de três itens a 4 reais cada, além de uma taxa fixa de 2 reais. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Registrar =3*4+2, cujo resultado é 14, respeitando multiplicação antes da soma. Justificativa: Fórmulas de planilha seguem precedência de operadores: potências, multiplicação/divisão e soma/subtração, considerando parênteses. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2. Erro a evitar: Um erro frequente é calcular da esquerda para a direita ignorando precedência. A dificuldade aumenta quando uma fórmula soma totais e depois calcula percentuais."
    },
    {
      "subtopicId": "INF-09-006",
      "front": "Você precisa atuar em referências relativas, absolutas e mistas. Uma tabela usa B2 como preço de item e E1 como alíquota única para todas as linhas. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Em C2, usar =B2*$E$1; ao copiar para C3, obter =B3*$E$1. Justificativa: Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mistas fixam apenas uma dimensão. Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia. Erro a evitar: Muitas planilhas erram o percentual de imposto ao copiar fórmula e deslocar também a célula com alíquota. O travamento precisa ser escolhido conforme a orientação de cópia."
    },
    {
      "subtopicId": "INF-09-007",
      "front": "Você precisa atuar em salvar, abrir, importar e exportar planilhas. Um setor precisa trocar uma lista simples com outro sistema, preservando códigos de matrícula como 00045. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Exportar os registros como CSV conforme especificação do sistema e, na importação, definir a coluna de matrícula como texto. Justificativa: XLSX e ODS são formatos de planilha editável; CSV é um formato tabular de texto que não guarda todos os recursos de uma pasta de trabalho. Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos. Erro a evitar: É comum importar planilha CSV de matrícula e converter indevidamente matrículas para números. Também se deve conferir se o arquivo inclui apenas a aba desejada."
    }
  ]
};
