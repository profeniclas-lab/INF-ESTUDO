/** INF-ESTUDO — Fase D/Lote 3: Planilhas: organização, análise e gráficos. Material pedagógico autoral. */
export const INF_11_DIAGNOSTICS = {
  "INF-11": [
    {
      "subtopicId": "INF-11-001",
      "front": "Uma planilha de 80 protocolos possui as colunas número, setor e vencimento. A chefia quer ver apenas o setor Compras, em ordem crescente de vencimento, sem perder linhas dos demais setores. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Filtrar o campo Setor por Compras e classificar a tabela inteira pelo campo Vencimento, em ordem crescente. Fundamentação: Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização. Uma opção inadequada seria 'Excluir todas as linhas de outros setores e classificar apenas a coluna de datas', pois A exclusão remove dados e a ordenação isolada rompe a correspondência entre protocolo e prazo. Compare também: Classificação crescente e decrescente alteram a ordem; filtragem preserva a sequência relativa do conjunto visível, mas oculta registros que não atendem ao critério. Localizar uma palavra não equivale a filtrar todas as linhas de um setor. Remover filtro não é desfazer exclusão de dados."
    },
    {
      "subtopicId": "INF-11-002",
      "front": "Um setor cadastra material com situação digitada por vários servidores e prazos de vistoria. Precisa reduzir variações de escrita e destacar as vistorias vencidas. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Aplicar validação por lista à coluna Situação e formatação condicional baseada em data à coluna Prazo. Fundamentação: Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado. Uma opção inadequada seria 'Colorir todas as células de Prazo e aceitar qualquer texto em Situação', pois A cor fixa não avalia vencimento e a entrada continua inconsistente. Compare também: Validação age na entrada dos dados ou alerta sobre valores inválidos; formatação condicional sinaliza visualmente um estado. Formatação manual é fixa até o usuário alterá-la; a condicional pode mudar quando o valor mudar. Destaque visual não equivale a bloqueio da edição."
    },
    {
      "subtopicId": "INF-11-003",
      "front": "O almoxarifado recebe novos itens toda semana. Em Excel Microsoft 365, a fórmula de relatório deve referenciar a coluna Quantidade mesmo quando novas linhas forem adicionadas. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Transformar a lista em Tabela chamada Estoque e usar referência à coluna, como Estoque[Quantidade], em fórmula compatível. Fundamentação: Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas. Uma opção inadequada seria 'Formatar A1:A50 com bordas e afirmar que isso criou uma Tabela com expansão automática', pois Estilo visual não cria o objeto de Tabela. Compare também: Uma Tabela do Excel não é apenas células coloridas com bordas: tem comportamento e nomenclatura específicos. Uma referência estruturada usa nomes de tabela/coluna, enquanto A1 utiliza letras e números. O Calc trabalha com recursos semelhantes de organização, mas com diferenças de interface e expressão."
    },
    {
      "subtopicId": "INF-11-004",
      "front": "A direção deseja avaliar os atendimentos de janeiro a junho e identificar quais meses tiveram quedas. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Construir um gráfico de linhas com meses em ordem cronológica no eixo horizontal e total de atendimentos no vertical. Fundamentação: Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo. Uma opção inadequada seria 'Usar gráfico de setores para mostrar cada mês como fração fixa do total anual e inferir tendência contínua', pois Fatias expressam participação e não deixam clara a evolução entre períodos. Compare também: Gráfico não substitui a tabela-fonte: sua correção depende dos dados. Um gráfico de linha com meses ordenados não significa automaticamente relação causal entre ações e resultados. Setores pressupõem uma decomposição consistente do total; colunas são mais flexíveis para diferenças entre categorias."
    },
    {
      "subtopicId": "INF-11-005",
      "front": "O setor financeiro tem 200 lançamentos com Unidade, Despesa e Valor e precisa saber o total de despesas por unidade sem mudar a base original. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Criar tabela dinâmica com Unidade em Linhas e Valor em Valores configurado para Soma, conferindo os totais. Fundamentação: Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem. Uma opção inadequada seria 'Deletar as linhas originais após obter a primeira soma e manter apenas o resumo', pois Isso destrói rastreabilidade e impede auditoria de registros individuais. Compare também: Filtro comum apenas mostra linhas; tabela dinâmica reorganiza e sintetiza informações. Contagem de registros não significa soma de valores. Mudanças no relatório dinâmico normalmente não reescrevem a tabela de origem, e o resumo depende de uma fonte consistente."
    },
    {
      "subtopicId": "INF-11-006",
      "front": "Uma relação de materiais possui 12 colunas, mas o conselho precisa apenas de Código, Descrição, Quantidade e Valor em PDF legível. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Definir área de impressão para as quatro colunas necessárias e conferir orientação, escala e prévia antes de exportar. Fundamentação: Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas. Uma opção inadequada seria 'Imprimir todas as colunas e reduzir a escala até que os textos se tornem quase ilegíveis', pois A redução excessiva compromete leitura e pode divulgar dados auxiliares. Compare também: Área de impressão é o recorte; orientação é a direção da folha; escala altera o tamanho impresso; margem é o espaço ao redor do conteúdo. Configuração de papel não corrige valores nem formata automaticamente a tabela-fonte."
    }
  ]
};
