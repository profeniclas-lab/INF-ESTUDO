/** INF-ESTUDO — Fase D/Lote 2: diagnóstico do INF-10. */
export const INF_10_DIAGNOSTICS = {
  "INF-10": [
    {
      "subtopicId": "INF-10-001",
      "front": "Você precisa atuar em funções soma, média, mínimo e máximo. Uma secretaria registrou três tempos de atendimento de 10, 20 e 30 minutos em B2:B4. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar =MÉDIA(B2:B4) para obter 20 minutos; SOMA retorna 60 e MÁXIMO retorna 30. Justificativa: SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica maior valor. SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou identificação do item, apenas valor extremo. Erro a evitar: Ao calcular média, não divida por número de linhas quando algumas células estão vazias ou contêm texto. Verifique se os registros são números reais, não texto importado."
    },
    {
      "subtopicId": "INF-10-002",
      "front": "Você precisa atuar em cont.núm, cont.valores e cont.se. Uma equipe tem registros A1=12, A2=\"Pendente\", A3=7, A4 vazia e precisa contabilizar os dois valores numéricos. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar =CONT.NÚM(A1:A4), obtendo 2; para contar registros preenchidos, usar CONT.VALORES. Justificativa: CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a um critério. CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição. Erro a evitar: A diferença entre células vazias e células com fórmula que retorna string vazia é relevante. Ao importar dados, números armazenados como texto podem não entrar em CONT.NÚM."
    },
    {
      "subtopicId": "INF-10-003",
      "front": "Você precisa atuar em se, e, ou e condições lógicas. Uma bolsa interna só é concedida se o servidor tiver documentação completa e participação mínima. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar =SE(E(B2=\"Completa\";C2>=75);\"Elegível\";\"Não elegível\") para exigir ambas as condições. Justificativa: SE retorna valores distintos conforme uma condição; E exige todas as condições verdadeiras; OU exige pelo menos uma. E e OU são operadores de combinação lógica, não somadores de valores numéricos. Um SE sem condição bem definida pode classificar casos incorretamente nas fronteiras, como 59,9 versus 60. Erro a evitar: Erro recorrente: usar OU quando a exigência de aprovação tem de cumprir dois requisitos simultâneos. Também é comum inverter os resultados dos ramos verdadeiro e falso."
    },
    {
      "subtopicId": "INF-10-004",
      "front": "Você precisa atuar em somase, médiase e critérios simples. Uma planilha tem setores RH, TI, RH em A2:A4 e gastos de 10, 20, 30 em B2:B4. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Aplicar =SOMASE(A2:A4;\"RH\";B2:B4), obtendo 40; a média correspondente é 20. Justificativa: SOMASE soma valores associados a um critério; MÉDIASE calcula média dos valores que satisfazem a seleção. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas. Erro a evitar: Um erro é somar valores de outra coluna deslocada em uma linha. Se o critério não selecionar nenhum número, MÉDIASE pode retornar erro em vez de zero."
    },
    {
      "subtopicId": "INF-10-005",
      "front": "Você precisa atuar em procv, procx e pesquisa de informações (quando disponíveis). Um setor busca um código de matrícula na coluna A e deseja devolver o nome correspondente na coluna C. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar PROCV com correspondência exata ou PROCX em versão compatível, com matrizes alinhadas. Justificativa: PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrizes de busca e retorno independentes. PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão. Erro a evitar: Um erro é omitir FALSO ao procurar códigos e interpretar a correspondência aproximada como exata. Outro é assumir PROCX em um Excel 2016 sem verificar suporte."
    },
    {
      "subtopicId": "INF-10-006",
      "front": "Você precisa atuar em funções de texto, data e arredondamento. Um setor armazena códigos PROTOCOLO e precisa obter os três caracteres iniciais de cada um. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar =ESQUERDA(A2;3) para obter “PRO” em A2=\"PROTOCOLO\", sem modificar o texto original. Justificativa: Funções de texto manipulam cadeias; funções de data tratam calendário; funções de arredondamento ajustam números efetivamente. O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável. Erro a evitar: Uma armadilha é usar ESQUERDA para extrair últimos caracteres de código, ou considerar HOJE() uma data fixa digitada. Revise o tratamento de matrículas e dados pessoais."
    },
    {
      "subtopicId": "INF-10-007",
      "front": "Você precisa atuar em erros de fórmulas, referências e precedência. Após excluir uma coluna, uma fórmula do relatório exibe #REF! e deixa de calcular total. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Inspecionar e reparar as referências destruídas pela exclusão, validando o resultado com os dados originais. Justificativa: Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nomes de funções inválidos. Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado matemático inesperado mesmo sem qualquer mensagem de erro. Erro a evitar: Um erro operacional é substituir #REF! por zero manualmente, o que esconde a fórmula quebrada e produz relatório enganoso. Primeiro identifique qual referência desapareceu."
    },
    {
      "subtopicId": "INF-10-008",
      "front": "Você precisa atuar em diferenças de sintaxe e separadores entre versões e suítes. Uma fórmula copiada de tutorial em inglês usa =IF(A1>0,\"Yes\",\"No\") e não é reconhecida no Excel pt-BR configurado com ponto e vírgula. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Adaptar para =SE(A1>0;\"Sim\";\"Não\") no Excel pt-BR, conferindo idioma e separadores da instalação. Justificativa: Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configurações do editor. Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas. Erro a evitar: Copiar uma fórmula textual de tutorial estrangeiro pode causar erro de nome ou de separador, mesmo quando a ideia matemática está correta. Ajuste a sintaxe sem mudar a condição lógica."
    }
  ]
};
