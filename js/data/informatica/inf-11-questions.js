/** INF-ESTUDO — Fase D/Lote 3: Planilhas: organização, análise e gráficos. Material pedagógico autoral. */
export const INF_11_QUESTIONS = [
  {
    "id": "Q-INF-11-001-01",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-001",
    "topic": "Classificar, filtrar e localizar dados",
    "type": "ce",
    "difficulty": "media",
    "stem": "Na organização de um órgão público, considere classificar, filtrar e localizar dados. Julgue a afirmação: 'Um filtro pode esconder linhas sem removê-las da base'",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A proposição está correta: O critério controla a exibição; as linhas voltam quando o filtro é limpo. Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização.",
      "A escolha ERRADO é inadequada: O critério controla a exibição; as linhas voltam quando o filtro é limpo. O enunciado enuncia uma propriedade válida, não sua negação."
    ],
    "explanation": "Proposição verdadeira. O critério controla a exibição; as linhas voltam quando o filtro é limpo. Classificação crescente e decrescente alteram a ordem; filtragem preserva a sequência relativa do conjunto visível, mas oculta registros que não atendem ao critério. Localizar uma palavra não equivale a filtrar todas as linhas de um setor. Remover filtro não é desfazer exclusão de dados.",
    "concept": "Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização.",
    "trap": "Ordenar exclusivamente a coluna de datas quebra o vínculo com os protocolos. Confundir linhas ocultas pelo filtro com linhas excluídas leva à falsa impressão de perda. Uma coluna com datas como texto pode ser ordenada alfabeticamente, e não cronologicamente.",
    "examTip": "Classificação crescente e decrescente alteram a ordem; filtragem preserva a sequência relativa do conjunto visível, mas oculta registros que não atendem ao critério. Localizar uma palavra não equivale a filtrar todas as linhas de um setor. Remover filtro não é desfazer exclusão de dados. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em um manual de procedimentos, a equipe confirma a seguinte regra antes de usar o sistema: Ordenar a tabela inteira preserva a associação dos campos de cada registro. Todas as colunas da linha precisam acompanhar a chave de ordenação.",
    "challenge": "Reescreva a afirmação 'Limpar um filtro restaura automaticamente linhas que foram excluídas do arquivo' de modo tecnicamente correto e mostre uma consequência para uma unidade administrativa.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-001-02",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-001",
    "topic": "Classificar, filtrar e localizar dados",
    "type": "vf",
    "difficulty": "media",
    "stem": "Examine as proposições sobre classificar, filtrar e localizar dados no contexto de rotinas administrativas: I. Ordenar a tabela inteira preserva a associação dos campos de cada registro II. Um filtro pode esconder linhas sem removê-las da base III. Limpar um filtro restaura automaticamente linhas que foram excluídas do arquivo Assinale a sequência V/F correta.",
    "options": [
      "V – F – F",
      "F – V – F",
      "V – V – F",
      "V – V – V"
    ],
    "answer": 2,
    "optionComments": [
      "Sequência incorreta em II: O critério controla a exibição; as linhas voltam quando o filtro é limpo. Logo a proposição é verdadeira.",
      "Sequência incorreta em I: Todas as colunas da linha precisam acompanhar a chave de ordenação. Logo a proposição é verdadeira.",
      "Sequência correta: I é verdadeira porque Todas as colunas da linha precisam acompanhar a chave de ordenação.; II é verdadeira porque O critério controla a exibição; as linhas voltam quando o filtro é limpo.; III é falsa porque Limpar filtro altera visibilidade; exclusões exigem desfazer ou recuperar os dados.",
      "Sequência incorreta em III: Limpar filtro altera visibilidade; exclusões exigem desfazer ou recuperar os dados. Logo a proposição é falsa."
    ],
    "explanation": "I é V: Todas as colunas da linha precisam acompanhar a chave de ordenação. II é V: O critério controla a exibição; as linhas voltam quando o filtro é limpo. III é F: Limpar filtro altera visibilidade; exclusões exigem desfazer ou recuperar os dados.",
    "concept": "Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização.",
    "trap": "Ordenar exclusivamente a coluna de datas quebra o vínculo com os protocolos. Confundir linhas ocultas pelo filtro com linhas excluídas leva à falsa impressão de perda. Uma coluna com datas como texto pode ser ordenada alfabeticamente, e não cronologicamente.",
    "examTip": "Classificação crescente e decrescente alteram a ordem; filtragem preserva a sequência relativa do conjunto visível, mas oculta registros que não atendem ao critério. Localizar uma palavra não equivale a filtrar todas as linhas de um setor. Remover filtro não é desfazer exclusão de dados. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em uma nova auditoria, um estagiário precisa distinguir 'Classificar', 'Filtrar' e 'Localizar'. Exibir somente as linhas que satisfazem os critérios definidos.",
    "challenge": "Monte um exemplo com três registros concretos que demonstre a diferença entre Classificar e Filtrar, apontando onde um erro seria percebido.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-001-03",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-001",
    "topic": "Classificar, filtrar e localizar dados",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Considere o caso: Uma planilha de 80 protocolos possui as colunas número, setor e vencimento. A chefia quer ver apenas o setor Compras, em ordem crescente de vencimento, sem perder linhas dos demais setores. Considerando o resultado solicitado e os riscos apresentados, qual solução é tecnicamente justificada?",
    "options": [
      "Excluir todas as linhas de outros setores e classificar apenas a coluna de datas",
      "Localizar a palavra Compras em uma célula e considerar os 80 registros filtrados",
      "Ordenar a coluna de vencimento sozinha e usar a cor da fonte para identificar Compras",
      "Filtrar o campo Setor por Compras e classificar a tabela inteira pelo campo Vencimento, em ordem crescente."
    ],
    "answer": 3,
    "optionComments": [
      "Inadequada: A exclusão remove dados e a ordenação isolada rompe a correspondência entre protocolo e prazo. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: A pesquisa pontual não restringe o conjunto de linhas apresentado. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: A coluna deixa de acompanhar o registro, e cor de fonte não substitui o critério de filtro. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Adequada: Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização. Na situação, a ação mantém o objetivo de uma planilha de 80 protocolos possui as colunas número, setor e vencimento. A chefia quer ver apenas o setor Compras, em ordem crescente de vencimento, sem perder linhas dos demais setores."
    ],
    "explanation": "A solução escolhida é: Filtrar o campo Setor por Compras e classificar a tabela inteira pelo campo Vencimento, em ordem crescente. Fundamentação: Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização. Compare as demais alternativas com os riscos de Ordenar exclusivamente a coluna de datas quebra o vínculo com os protocolos. Confundir linhas ocultas pelo filtro com linhas excluídas leva à falsa impressão de perda. Uma coluna com datas como texto pode ser ordenada alfabeticamente, e não cronologicamente.",
    "concept": "Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização.",
    "trap": "Ordenar exclusivamente a coluna de datas quebra o vínculo com os protocolos. Confundir linhas ocultas pelo filtro com linhas excluídas leva à falsa impressão de perda. Uma coluna com datas como texto pode ser ordenada alfabeticamente, e não cronologicamente.",
    "examTip": "Classificação crescente e decrescente alteram a ordem; filtragem preserva a sequência relativa do conjunto visível, mas oculta registros que não atendem ao critério. Localizar uma palavra não equivale a filtrar todas as linhas de um setor. Remover filtro não é desfazer exclusão de dados. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Num segundo processo da mesma área, foi necessário aplicar a distinção de que datas tratadas como texto podem apresentar ordenação incorreta. Isso é importante porque A interpretação do tipo de dado afeta a ordem cronológica.",
    "challenge": "Descreva dois testes observáveis para confirmar a execução de 'Filtrar o campo Setor por Compras e classificar a tabela inteira pelo campo Vencimento, em ordem crescente.' sem comprometer dados já existentes.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-001-04",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-001",
    "topic": "Classificar, filtrar e localizar dados",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Uma comissão elaborou recomendações sobre classificar, filtrar e localizar dados. Todas as afirmações abaixo são tecnicamente corretas, EXCETO uma. Qual NÃO deve integrar o material?",
    "options": [
      "Um filtro pode esconder linhas sem removê-las da base",
      "Ordenar a tabela inteira preserva a associação dos campos de cada registro",
      "Datas tratadas como texto podem apresentar ordenação incorreta",
      "Classificar somente a coluna de vencimento mantém, necessariamente, o protocolo correto ao lado da data"
    ],
    "answer": 3,
    "optionComments": [
      "Proposição adequada: O critério controla a exibição; as linhas voltam quando o filtro é limpo. Ela atende ao conceito.",
      "Proposição adequada: Todas as colunas da linha precisam acompanhar a chave de ordenação. Ela atende ao conceito.",
      "Proposição adequada: A interpretação do tipo de dado afeta a ordem cronológica. Ela atende ao conceito.",
      "Proposição inadequada, portanto resposta do EXCETO: Sem expandir a seleção, valores podem deixar de corresponder ao seu registro. É a única que viola a propriedade técnica exigida."
    ],
    "explanation": "A exceção é 'Classificar somente a coluna de vencimento mantém, necessariamente, o protocolo correto ao lado da data'. Sem expandir a seleção, valores podem deixar de corresponder ao seu registro. As outras três refletem propriedades válidas: O critério controla a exibição; as linhas voltam quando o filtro é limpo.; Todas as colunas da linha precisam acompanhar a chave de ordenação.; A interpretação do tipo de dado afeta a ordem cronológica.",
    "concept": "Classificar reordena registros por uma chave; filtrar apenas restringe quais linhas ficam visíveis, sem apagar os registros excluídos da visualização.",
    "trap": "Ordenar exclusivamente a coluna de datas quebra o vínculo com os protocolos. Confundir linhas ocultas pelo filtro com linhas excluídas leva à falsa impressão de perda. Uma coluna com datas como texto pode ser ordenada alfabeticamente, e não cronologicamente.",
    "examTip": "Classificação crescente e decrescente alteram a ordem; filtragem preserva a sequência relativa do conjunto visível, mas oculta registros que não atendem ao critério. Localizar uma palavra não equivale a filtrar todas as linhas de um setor. Remover filtro não é desfazer exclusão de dados. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Durante outra atividade de capacitação, constatou-se que um filtro pode esconder linhas sem removê-las da base. A justificativa registrada foi: O critério controla a exibição; as linhas voltam quando o filtro é limpo.",
    "challenge": "Um parecer sustenta que 'Classificar somente a coluna de vencimento mantém, necessariamente, o protocolo correto ao lado da data'. Explique a falha dessa conclusão e apresente procedimento verificável que use Localizar corretamente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-002-01",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-002",
    "topic": "Formatação condicional e validação de dados",
    "type": "ce",
    "difficulty": "media",
    "stem": "Durante a análise de uma prova, considere formatação condicional e validação de dados. Julgue a afirmação: 'A cor criada pela formatação condicional altera o valor numérico do prazo'",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "A escolha CERTO aceita uma afirmação falsa. Formatação modifica apresentação, não o conteúdo do campo. Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado.",
      "Correto julgar ERRADO: Formatação modifica apresentação, não o conteúdo do campo. A conclusão do item contradiz a distinção técnica."
    ],
    "explanation": "Proposição falsa. Formatação modifica apresentação, não o conteúdo do campo. Validação age na entrada dos dados ou alerta sobre valores inválidos; formatação condicional sinaliza visualmente um estado. Formatação manual é fixa até o usuário alterá-la; a condicional pode mudar quando o valor mudar. Destaque visual não equivale a bloqueio da edição.",
    "concept": "Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado.",
    "trap": "Inserir cores manualmente para sinalizar prazo não é uma regra automática. Considerar que a validação impede todas as formas de colagem/importação pode gerar falsa segurança. Se o prazo estiver armazenado como texto, comparações de data podem apresentar resultados inesperados.",
    "examTip": "Validação age na entrada dos dados ou alerta sobre valores inválidos; formatação condicional sinaliza visualmente um estado. Formatação manual é fixa até o usuário alterá-la; a condicional pode mudar quando o valor mudar. Destaque visual não equivale a bloqueio da edição. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em um manual de procedimentos, a equipe confirma a seguinte regra antes de usar o sistema: Uma lista de validação ajuda a padronizar a coluna Situação. Oferece opções permitidas e reduz variantes de digitação.",
    "challenge": "Reescreva a afirmação 'A cor criada pela formatação condicional altera o valor numérico do prazo' de modo tecnicamente correto e mostre uma consequência para uma unidade administrativa.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-002-02",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-002",
    "topic": "Formatação condicional e validação de dados",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Uma equipe confere procedimentos ligados a formatação condicional e validação de dados. Considere: I. A cor criada pela formatação condicional altera o valor numérico do prazo II. Uma lista de validação ajuda a padronizar a coluna Situação III. Células contendo datas como texto exigem cautela nas regras de prazo Quais assertivas estão corretas?",
    "options": [
      "Apenas III",
      "Apenas II e III",
      "Apenas I",
      "Apenas II"
    ],
    "answer": 1,
    "optionComments": [
      "Combinação incorreta: II deveria integrar a resposta. Oferece opções permitidas e reduz variantes de digitação.",
      "Combinação correta: I é falsa: Formatação modifica apresentação, não o conteúdo do campo. II é válida: Oferece opções permitidas e reduz variantes de digitação. III é válida: Tipos inadequados podem comprometer comparação com datas reais.",
      "Combinação incorreta: I não deveria integrar a resposta. Formatação modifica apresentação, não o conteúdo do campo.",
      "Combinação incorreta: III deveria integrar a resposta. Tipos inadequados podem comprometer comparação com datas reais."
    ],
    "explanation": "I incorreta: Formatação modifica apresentação, não o conteúdo do campo. II correta: Oferece opções permitidas e reduz variantes de digitação. III correta: Tipos inadequados podem comprometer comparação com datas reais.",
    "concept": "Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado.",
    "trap": "Inserir cores manualmente para sinalizar prazo não é uma regra automática. Considerar que a validação impede todas as formas de colagem/importação pode gerar falsa segurança. Se o prazo estiver armazenado como texto, comparações de data podem apresentar resultados inesperados.",
    "examTip": "Validação age na entrada dos dados ou alerta sobre valores inválidos; formatação condicional sinaliza visualmente um estado. Formatação manual é fixa até o usuário alterá-la; a condicional pode mudar quando o valor mudar. Destaque visual não equivale a bloqueio da edição. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em uma nova auditoria, um estagiário precisa distinguir 'Validação', 'Formatação condicional' e 'Formatação manual'. Regra visual dependente do conteúdo ou de fórmula.",
    "challenge": "Monte um exemplo com três registros concretos que demonstre a diferença entre Validação e Formatação condicional, apontando onde um erro seria percebido.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-002-03",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-002",
    "topic": "Formatação condicional e validação de dados",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Uma unidade relata: Um setor cadastra material com situação digitada por vários servidores e prazos de vistoria. Precisa reduzir variações de escrita e destacar as vistorias vencidas. Considerando o resultado solicitado e os riscos apresentados, qual solução é tecnicamente justificada?",
    "options": [
      "Proteger somente a primeira linha, supondo que o cabeçalho valide as demais entradas",
      "Substituir automaticamente todas as datas vencidas por hoje",
      "Aplicar validação por lista à coluna Situação e formatação condicional baseada em data à coluna Prazo.",
      "Colorir todas as células de Prazo e aceitar qualquer texto em Situação"
    ],
    "answer": 2,
    "optionComments": [
      "Inadequada: Proteger cabeçalhos não estabelece regra de valores aceitos. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: Isso altera dados históricos em vez de apenas sinalizar quais prazos venceram. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Adequada: Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado. Na situação, a ação mantém o objetivo de um setor cadastra material com situação digitada por vários servidores e prazos de vistoria. Precisa reduzir variações de escrita e destacar as vistorias vencidas.",
      "Inadequada: A cor fixa não avalia vencimento e a entrada continua inconsistente. A escolha não satisfaz o objetivo específico indicado no caso."
    ],
    "explanation": "A solução escolhida é: Aplicar validação por lista à coluna Situação e formatação condicional baseada em data à coluna Prazo. Fundamentação: Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado. Compare as demais alternativas com os riscos de Inserir cores manualmente para sinalizar prazo não é uma regra automática. Considerar que a validação impede todas as formas de colagem/importação pode gerar falsa segurança. Se o prazo estiver armazenado como texto, comparações de data podem apresentar resultados inesperados.",
    "concept": "Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado.",
    "trap": "Inserir cores manualmente para sinalizar prazo não é uma regra automática. Considerar que a validação impede todas as formas de colagem/importação pode gerar falsa segurança. Se o prazo estiver armazenado como texto, comparações de data podem apresentar resultados inesperados.",
    "examTip": "Validação age na entrada dos dados ou alerta sobre valores inválidos; formatação condicional sinaliza visualmente um estado. Formatação manual é fixa até o usuário alterá-la; a condicional pode mudar quando o valor mudar. Destaque visual não equivale a bloqueio da edição. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Num segundo processo da mesma área, foi necessário aplicar a distinção de que células contendo datas como texto exigem cautela nas regras de prazo. Isso é importante porque Tipos inadequados podem comprometer comparação com datas reais.",
    "challenge": "Descreva dois testes observáveis para confirmar a execução de 'Aplicar validação por lista à coluna Situação e formatação condicional baseada em data à coluna Prazo.' sem comprometer dados já existentes.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-002-04",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-002",
    "topic": "Formatação condicional e validação de dados",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Examine as proposições sobre formatação condicional e validação de dados no contexto de rotinas administrativas: I. Validação de dados e formatação condicional são o mesmo mecanismo de proteção II. Células contendo datas como texto exigem cautela nas regras de prazo III. A cor criada pela formatação condicional altera o valor numérico do prazo IV. Uma lista de validação ajuda a padronizar a coluna Situação Assinale a sequência V/F correta.",
    "options": [
      "F – V – F – F",
      "F – F – F – V",
      "V – V – F – V",
      "F – V – F – V"
    ],
    "answer": 3,
    "optionComments": [
      "Sequência incorreta em IV: Oferece opções permitidas e reduz variantes de digitação. Logo a proposição é verdadeira.",
      "Sequência incorreta em II: Tipos inadequados podem comprometer comparação com datas reais. Logo a proposição é verdadeira.",
      "Sequência incorreta em I: Validação trata entrada; formatação condicional trata aparência. Logo a proposição é falsa.",
      "Sequência correta: I é falsa porque Validação trata entrada; formatação condicional trata aparência.; II é verdadeira porque Tipos inadequados podem comprometer comparação com datas reais.; III é falsa porque Formatação modifica apresentação, não o conteúdo do campo.; IV é verdadeira porque Oferece opções permitidas e reduz variantes de digitação."
    ],
    "explanation": "I é F: Validação trata entrada; formatação condicional trata aparência. II é V: Tipos inadequados podem comprometer comparação com datas reais. III é F: Formatação modifica apresentação, não o conteúdo do campo. IV é V: Oferece opções permitidas e reduz variantes de digitação.",
    "concept": "Validação de dados orienta ou restringe entradas; formatação condicional modifica a aparência conforme uma regra, sem corrigir o valor armazenado.",
    "trap": "Inserir cores manualmente para sinalizar prazo não é uma regra automática. Considerar que a validação impede todas as formas de colagem/importação pode gerar falsa segurança. Se o prazo estiver armazenado como texto, comparações de data podem apresentar resultados inesperados.",
    "examTip": "Validação age na entrada dos dados ou alerta sobre valores inválidos; formatação condicional sinaliza visualmente um estado. Formatação manual é fixa até o usuário alterá-la; a condicional pode mudar quando o valor mudar. Destaque visual não equivale a bloqueio da edição. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Durante outra atividade de capacitação, constatou-se que formatação condicional pode atualizar o destaque após mudança do valor. A justificativa registrada foi: A regra é reavaliada para o intervalo ao qual está aplicada.",
    "challenge": "Um parecer sustenta que 'Validação de dados e formatação condicional são o mesmo mecanismo de proteção'. Explique a falha dessa conclusão e apresente procedimento verificável que use Formatação manual corretamente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-003-01",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-003",
    "topic": "Tabelas, intervalos e referências estruturadas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Em um controle administrativo, considere tabelas, intervalos e referências estruturadas. Julgue a afirmação: 'Uma Tabela do Excel pode ampliar referências ao incluir novos registros'",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A proposição está correta: Seu comportamento estruturado facilita manter intervalos coerentes. Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas.",
      "A escolha ERRADO é inadequada: Seu comportamento estruturado facilita manter intervalos coerentes. O enunciado enuncia uma propriedade válida, não sua negação."
    ],
    "explanation": "Proposição verdadeira. Seu comportamento estruturado facilita manter intervalos coerentes. Uma Tabela do Excel não é apenas células coloridas com bordas: tem comportamento e nomenclatura específicos. Uma referência estruturada usa nomes de tabela/coluna, enquanto A1 utiliza letras e números. O Calc trabalha com recursos semelhantes de organização, mas com diferenças de interface e expressão.",
    "concept": "Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas.",
    "trap": "Atribuir o nome Estoque a uma planilha não cria automaticamente uma Tabela Excel chamada Estoque. Uma fórmula escrita com sintaxe estruturada específica do Excel pode precisar adaptação no Calc. Selecionar apenas parte dos dados ao criar a tabela deixa registros de fora.",
    "examTip": "Uma Tabela do Excel não é apenas células coloridas com bordas: tem comportamento e nomenclatura específicos. Uma referência estruturada usa nomes de tabela/coluna, enquanto A1 utiliza letras e números. O Calc trabalha com recursos semelhantes de organização, mas com diferenças de interface e expressão. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em um manual de procedimentos, a equipe confirma a seguinte regra antes de usar o sistema: A referência Estoque[Quantidade] identifica uma coluna de tabela chamada Estoque. O nome e os colchetes pertencem à sintaxe estruturada do Excel.",
    "challenge": "Reescreva a afirmação 'Aplicar cores e bordas transforma obrigatoriamente o intervalo em Tabela do Excel' de modo tecnicamente correto e mostre uma consequência para uma unidade administrativa.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-003-02",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-003",
    "topic": "Tabelas, intervalos e referências estruturadas",
    "type": "associacao",
    "difficulty": "media",
    "stem": "Relacione as colunas usadas no tema Tabelas, intervalos e referências estruturadas. Coluna I: 1. Intervalo; 2. Tabela do Excel; 3. Referência estruturada; Coluna II: A. Objeto com cabeçalhos, nome e referências estruturadas.; B. Expressão que usa o nome da tabela e de suas colunas.; C. Endereços de células, como A2:A50, numa planilha.; Qual sequência das letras A, B e C corresponde, respectivamente, aos itens 1, 2 e 3?",
    "options": [
      "C, A, B",
      "A, B, C",
      "A, C, B",
      "B, A, C"
    ],
    "answer": 0,
    "optionComments": [
      "Associação correta: Intervalo corresponde a Endereços de células, como A2:A50, numa planilha.; Tabela do Excel corresponde a Objeto com cabeçalhos, nome e referências estruturadas.; Referência estruturada corresponde a Expressão que usa o nome da tabela e de suas colunas.",
      "Associação incorreta para 'Intervalo': Endereços de células, como A2:A50, numa planilha. O item da coluna II indicado nessa proposta descreve outro conceito.",
      "Associação incorreta para 'Intervalo': Endereços de células, como A2:A50, numa planilha. O item da coluna II indicado nessa proposta descreve outro conceito.",
      "Associação incorreta para 'Intervalo': Endereços de células, como A2:A50, numa planilha. O item da coluna II indicado nessa proposta descreve outro conceito."
    ],
    "explanation": "Intervalo: Endereços de células, como A2:A50, numa planilha.; Tabela do Excel: Objeto com cabeçalhos, nome e referências estruturadas.; Referência estruturada: Expressão que usa o nome da tabela e de suas colunas.",
    "concept": "Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas.",
    "trap": "Atribuir o nome Estoque a uma planilha não cria automaticamente uma Tabela Excel chamada Estoque. Uma fórmula escrita com sintaxe estruturada específica do Excel pode precisar adaptação no Calc. Selecionar apenas parte dos dados ao criar a tabela deixa registros de fora.",
    "examTip": "Uma Tabela do Excel não é apenas células coloridas com bordas: tem comportamento e nomenclatura específicos. Uma referência estruturada usa nomes de tabela/coluna, enquanto A1 utiliza letras e números. O Calc trabalha com recursos semelhantes de organização, mas com diferenças de interface e expressão. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em uma nova auditoria, um estagiário precisa distinguir 'Intervalo', 'Tabela do Excel' e 'Referência estruturada'. Objeto com cabeçalhos, nome e referências estruturadas.",
    "challenge": "Monte um exemplo com três registros concretos que demonstre a diferença entre Intervalo e Tabela do Excel, apontando onde um erro seria percebido.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-003-03",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-003",
    "topic": "Tabelas, intervalos e referências estruturadas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Na avaliação prática, observe: O almoxarifado recebe novos itens toda semana. Em Excel Microsoft 365, a fórmula de relatório deve referenciar a coluna Quantidade mesmo quando novas linhas forem adicionadas. Considerando o resultado solicitado e os riscos apresentados, qual solução é tecnicamente justificada?",
    "options": [
      "Fixar manualmente um intervalo curto sem revisar quando linhas são incluídas",
      "Transformar a lista em Tabela chamada Estoque e usar referência à coluna, como Estoque[Quantidade], em fórmula compatível.",
      "Formatar A1:A50 com bordas e afirmar que isso criou uma Tabela com expansão automática",
      "Digitar a palavra Estoque na aba e usar [@Quantidade] em qualquer célula fora de contexto"
    ],
    "answer": 1,
    "optionComments": [
      "Inadequada: Novos registros podem ficar fora da fórmula e gerar total incompleto. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Adequada: Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas. Na situação, a ação mantém o objetivo de o almoxarifado recebe novos itens toda semana. Em Excel Microsoft 365, a fórmula de relatório deve referenciar a coluna Quantidade mesmo quando novas linhas forem adicionadas.",
      "Inadequada: Estilo visual não cria o objeto de Tabela. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: Nomear uma aba não define o objeto e o contexto da referência de linha. A escolha não satisfaz o objetivo específico indicado no caso."
    ],
    "explanation": "A solução escolhida é: Transformar a lista em Tabela chamada Estoque e usar referência à coluna, como Estoque[Quantidade], em fórmula compatível. Fundamentação: Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas. Compare as demais alternativas com os riscos de Atribuir o nome Estoque a uma planilha não cria automaticamente uma Tabela Excel chamada Estoque. Uma fórmula escrita com sintaxe estruturada específica do Excel pode precisar adaptação no Calc. Selecionar apenas parte dos dados ao criar a tabela deixa registros de fora.",
    "concept": "Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas.",
    "trap": "Atribuir o nome Estoque a uma planilha não cria automaticamente uma Tabela Excel chamada Estoque. Uma fórmula escrita com sintaxe estruturada específica do Excel pode precisar adaptação no Calc. Selecionar apenas parte dos dados ao criar a tabela deixa registros de fora.",
    "examTip": "Uma Tabela do Excel não é apenas células coloridas com bordas: tem comportamento e nomenclatura específicos. Uma referência estruturada usa nomes de tabela/coluna, enquanto A1 utiliza letras e números. O Calc trabalha com recursos semelhantes de organização, mas com diferenças de interface e expressão. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Num segundo processo da mesma área, foi necessário aplicar a distinção de que a sintaxe de referências estruturadas do excel não deve ser presumida idêntica no calc. Isso é importante porque Os dois programas têm modelos e funções de tabela com diferenças.",
    "challenge": "Descreva dois testes observáveis para confirmar a execução de 'Transformar a lista em Tabela chamada Estoque e usar referência à coluna, como Estoque[Quantidade], em fórmula compatível.' sem comprometer dados já existentes.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-003-04",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-003",
    "topic": "Tabelas, intervalos e referências estruturadas",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Uma equipe confere procedimentos ligados a tabelas, intervalos e referências estruturadas. Considere: I. A sintaxe de referências estruturadas do Excel não deve ser presumida idêntica no Calc II. O nome de uma planilha equivale necessariamente ao nome de uma Tabela no Excel III. Uma Tabela do Excel pode ampliar referências ao incluir novos registros Quais assertivas estão corretas?",
    "options": [
      "Apenas II",
      "Apenas III",
      "Apenas I e III",
      "Apenas I"
    ],
    "answer": 2,
    "optionComments": [
      "Combinação incorreta: I deveria integrar a resposta. Os dois programas têm modelos e funções de tabela com diferenças.",
      "Combinação incorreta: I deveria integrar a resposta. Os dois programas têm modelos e funções de tabela com diferenças.",
      "Combinação correta: I é válida: Os dois programas têm modelos e funções de tabela com diferenças. II é falsa: São entidades diferentes e têm opções próprias de nomeação. III é válida: Seu comportamento estruturado facilita manter intervalos coerentes.",
      "Combinação incorreta: III deveria integrar a resposta. Seu comportamento estruturado facilita manter intervalos coerentes."
    ],
    "explanation": "I correta: Os dois programas têm modelos e funções de tabela com diferenças. II incorreta: São entidades diferentes e têm opções próprias de nomeação. III correta: Seu comportamento estruturado facilita manter intervalos coerentes.",
    "concept": "Um intervalo comum é apenas uma região de células; uma Tabela do Excel é um objeto com cabeçalhos, filtros e referências estruturadas.",
    "trap": "Atribuir o nome Estoque a uma planilha não cria automaticamente uma Tabela Excel chamada Estoque. Uma fórmula escrita com sintaxe estruturada específica do Excel pode precisar adaptação no Calc. Selecionar apenas parte dos dados ao criar a tabela deixa registros de fora.",
    "examTip": "Uma Tabela do Excel não é apenas células coloridas com bordas: tem comportamento e nomenclatura específicos. Uma referência estruturada usa nomes de tabela/coluna, enquanto A1 utiliza letras e números. O Calc trabalha com recursos semelhantes de organização, mas com diferenças de interface e expressão. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Durante outra atividade de capacitação, constatou-se que uma tabela do excel pode ampliar referências ao incluir novos registros. A justificativa registrada foi: Seu comportamento estruturado facilita manter intervalos coerentes.",
    "challenge": "Um parecer sustenta que 'O nome de uma planilha equivale necessariamente ao nome de uma Tabela no Excel'. Explique a falha dessa conclusão e apresente procedimento verificável que use Referência estruturada corretamente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-004-01",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-004",
    "topic": "Gráficos: escolha, criação e interpretação",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar um novo servidor, considere gráficos: escolha, criação e interpretação. Julgue a afirmação: 'Gráfico de setores é sempre a melhor forma de mostrar crescimento mês a mês'",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "A escolha CERTO aceita uma afirmação falsa. Setores representam composições do total, não sequência temporal. Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo.",
      "Correto julgar ERRADO: Setores representam composições do total, não sequência temporal. A conclusão do item contradiz a distinção técnica."
    ],
    "explanation": "Proposição falsa. Setores representam composições do total, não sequência temporal. Gráfico não substitui a tabela-fonte: sua correção depende dos dados. Um gráfico de linha com meses ordenados não significa automaticamente relação causal entre ações e resultados. Setores pressupõem uma decomposição consistente do total; colunas são mais flexíveis para diferenças entre categorias.",
    "concept": "Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo.",
    "trap": "Selecionar meses como texto fora de ordem produz uma tendência enganosa. Um eixo vertical começando perto do maior número pode exagerar diferenças em gráficos de colunas. Um gráfico em pizza com muitas categorias torna leitura e comparações pouco confiáveis.",
    "examTip": "Gráfico não substitui a tabela-fonte: sua correção depende dos dados. Um gráfico de linha com meses ordenados não significa automaticamente relação causal entre ações e resultados. Setores pressupõem uma decomposição consistente do total; colunas são mais flexíveis para diferenças entre categorias. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em um manual de procedimentos, a equipe confirma a seguinte regra antes de usar o sistema: Linhas ajudam a acompanhar séries ordenadas no tempo. Conectar pontos em ordem temporal evidencia variações.",
    "challenge": "Reescreva a afirmação 'Gráfico de setores é sempre a melhor forma de mostrar crescimento mês a mês' de modo tecnicamente correto e mostre uma consequência para uma unidade administrativa.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-004-02",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-004",
    "topic": "Gráficos: escolha, criação e interpretação",
    "type": "lacunas",
    "difficulty": "media",
    "stem": "Complete as três lacunas, na ordem, para um material de formação sobre gráficos: escolha, criação e interpretação: 'A descrição “Comparação de categorias por barras verticais.” corresponde a ____; “Evolução de valores ao longo de uma sequência ordenada.” corresponde a ____; e “Proporção de categorias em relação a um todo.” corresponde a ____.' Qual preenchimento é tecnicamente correto?",
    "options": [
      "Linhas / Colunas / Setores",
      "Colunas / Setores / Linhas",
      "Setores / Linhas / Colunas",
      "Colunas / Linhas / Setores"
    ],
    "answer": 3,
    "optionComments": [
      "Na lacuna 1, 'Linhas' não expressa 'Comparação de categorias por barras verticais.'. O termo apropriado seria 'Colunas'.",
      "Na lacuna 2, 'Setores' não expressa 'Evolução de valores ao longo de uma sequência ordenada.'. O termo apropriado seria 'Linhas'.",
      "Na lacuna 1, 'Setores' não expressa 'Comparação de categorias por barras verticais.'. O termo apropriado seria 'Colunas'.",
      "Preenchimento correto: Colunas — Comparação de categorias por barras verticais.; Linhas — Evolução de valores ao longo de uma sequência ordenada.; Setores — Proporção de categorias em relação a um todo."
    ],
    "explanation": "Colunas: Comparação de categorias por barras verticais.; Linhas: Evolução de valores ao longo de uma sequência ordenada.; Setores: Proporção de categorias em relação a um todo.",
    "concept": "Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo.",
    "trap": "Selecionar meses como texto fora de ordem produz uma tendência enganosa. Um eixo vertical começando perto do maior número pode exagerar diferenças em gráficos de colunas. Um gráfico em pizza com muitas categorias torna leitura e comparações pouco confiáveis.",
    "examTip": "Gráfico não substitui a tabela-fonte: sua correção depende dos dados. Um gráfico de linha com meses ordenados não significa automaticamente relação causal entre ações e resultados. Setores pressupõem uma decomposição consistente do total; colunas são mais flexíveis para diferenças entre categorias. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em uma nova auditoria, um estagiário precisa distinguir 'Colunas', 'Linhas' e 'Setores'. Evolução de valores ao longo de uma sequência ordenada.",
    "challenge": "Monte um exemplo com três registros concretos que demonstre a diferença entre Colunas e Linhas, apontando onde um erro seria percebido.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-004-03",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-004",
    "topic": "Gráficos: escolha, criação e interpretação",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Um setor registra a situação: A direção deseja avaliar os atendimentos de janeiro a junho e identificar quais meses tiveram quedas. Considerando o resultado solicitado e os riscos apresentados, qual solução é tecnicamente justificada?",
    "options": [
      "Construir um gráfico de linhas com meses em ordem cronológica no eixo horizontal e total de atendimentos no vertical.",
      "Usar gráfico de setores para mostrar cada mês como fração fixa do total anual e inferir tendência contínua",
      "Ordenar os meses alfabeticamente e ligar os pontos com uma linha",
      "Omitir rótulos e unidades para caber mais efeitos visuais"
    ],
    "answer": 0,
    "optionComments": [
      "Adequada: Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo. Na situação, a ação mantém o objetivo de a direção deseja avaliar os atendimentos de janeiro a junho e identificar quais meses tiveram quedas.",
      "Inadequada: Fatias expressam participação e não deixam clara a evolução entre períodos. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: A sequência alfabética altera a ordem temporal e distorce a tendência. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: Sem identificação, não é possível conferir a interpretação dos números. A escolha não satisfaz o objetivo específico indicado no caso."
    ],
    "explanation": "A solução escolhida é: Construir um gráfico de linhas com meses em ordem cronológica no eixo horizontal e total de atendimentos no vertical. Fundamentação: Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo. Compare as demais alternativas com os riscos de Selecionar meses como texto fora de ordem produz uma tendência enganosa. Um eixo vertical começando perto do maior número pode exagerar diferenças em gráficos de colunas. Um gráfico em pizza com muitas categorias torna leitura e comparações pouco confiáveis.",
    "concept": "Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo.",
    "trap": "Selecionar meses como texto fora de ordem produz uma tendência enganosa. Um eixo vertical começando perto do maior número pode exagerar diferenças em gráficos de colunas. Um gráfico em pizza com muitas categorias torna leitura e comparações pouco confiáveis.",
    "examTip": "Gráfico não substitui a tabela-fonte: sua correção depende dos dados. Um gráfico de linha com meses ordenados não significa automaticamente relação causal entre ações e resultados. Setores pressupõem uma decomposição consistente do total; colunas são mais flexíveis para diferenças entre categorias. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Num segundo processo da mesma área, foi necessário aplicar a distinção de que escalas e rótulos interferem na interpretação dos gráficos. Isso é importante porque Eixos truncados e falta de unidades podem induzir conclusões equivocadas.",
    "challenge": "Descreva dois testes observáveis para confirmar a execução de 'Construir um gráfico de linhas com meses em ordem cronológica no eixo horizontal e total de atendimentos no vertical.' sem comprometer dados já existentes.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-004-04",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-004",
    "topic": "Gráficos: escolha, criação e interpretação",
    "type": "associacao",
    "difficulty": "dificil",
    "stem": "Relacione as colunas usadas no tema Gráficos: escolha, criação e interpretação. Coluna I: 1. Colunas; 2. Linhas; 3. Setores; Coluna II: A. Comparação de categorias por barras verticais.; B. Evolução de valores ao longo de uma sequência ordenada.; C. Proporção de categorias em relação a um todo.; Qual sequência das letras A, B e C corresponde, respectivamente, aos itens 1, 2 e 3?",
    "options": [
      "B, C, A",
      "A, B, C",
      "A, C, B",
      "B, A, C"
    ],
    "answer": 1,
    "optionComments": [
      "Associação incorreta para 'Colunas': Comparação de categorias por barras verticais. O item da coluna II indicado nessa proposta descreve outro conceito.",
      "Associação correta: Colunas corresponde a Comparação de categorias por barras verticais.; Linhas corresponde a Evolução de valores ao longo de uma sequência ordenada.; Setores corresponde a Proporção de categorias em relação a um todo.",
      "Associação incorreta para 'Linhas': Evolução de valores ao longo de uma sequência ordenada. O item da coluna II indicado nessa proposta descreve outro conceito.",
      "Associação incorreta para 'Colunas': Comparação de categorias por barras verticais. O item da coluna II indicado nessa proposta descreve outro conceito."
    ],
    "explanation": "Colunas: Comparação de categorias por barras verticais.; Linhas: Evolução de valores ao longo de uma sequência ordenada.; Setores: Proporção de categorias em relação a um todo.",
    "concept": "Gráficos transformam dados em representação visual: colunas comparam categorias, linhas destacam evolução temporal e setores exibem partes de um todo.",
    "trap": "Selecionar meses como texto fora de ordem produz uma tendência enganosa. Um eixo vertical começando perto do maior número pode exagerar diferenças em gráficos de colunas. Um gráfico em pizza com muitas categorias torna leitura e comparações pouco confiáveis.",
    "examTip": "Gráfico não substitui a tabela-fonte: sua correção depende dos dados. Um gráfico de linha com meses ordenados não significa automaticamente relação causal entre ações e resultados. Setores pressupõem uma decomposição consistente do total; colunas são mais flexíveis para diferenças entre categorias. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Durante outra atividade de capacitação, constatou-se que colunas são adequadas para comparar quantidades entre setores. A justificativa registrada foi: Alturas permitem contraste direto entre categorias.",
    "challenge": "Um parecer sustenta que 'Alterar o desenho do gráfico corrige automaticamente valores incorretos na tabela-fonte'. Explique a falha dessa conclusão e apresente procedimento verificável que use Setores corretamente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-005-01",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-005",
    "topic": "Tabelas dinâmicas: finalidade e uso básico",
    "type": "ce",
    "difficulty": "media",
    "stem": "Na organização de um órgão público, considere tabelas dinâmicas: finalidade e uso básico. Julgue a afirmação: 'O campo Valores define a operação de agregação em uma tabela dinâmica'",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A proposição está correta: Soma, contagem e média produzem resumos distintos. Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem.",
      "A escolha ERRADO é inadequada: Soma, contagem e média produzem resumos distintos. O enunciado enuncia uma propriedade válida, não sua negação."
    ],
    "explanation": "Proposição verdadeira. Soma, contagem e média produzem resumos distintos. Filtro comum apenas mostra linhas; tabela dinâmica reorganiza e sintetiza informações. Contagem de registros não significa soma de valores. Mudanças no relatório dinâmico normalmente não reescrevem a tabela de origem, e o resumo depende de uma fonte consistente.",
    "concept": "Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem.",
    "trap": "Se o campo Valor for interpretado como texto, o aplicativo pode sugerir contagem em vez de soma. Esquecer a atualização pode ocultar novos lançamentos. Misturar unidades de medida na mesma coluna invalida o total agregado.",
    "examTip": "Filtro comum apenas mostra linhas; tabela dinâmica reorganiza e sintetiza informações. Contagem de registros não significa soma de valores. Mudanças no relatório dinâmico normalmente não reescrevem a tabela de origem, e o resumo depende de uma fonte consistente. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em um manual de procedimentos, a equipe confirma a seguinte regra antes de usar o sistema: O campo Linhas pode agrupar registros por unidade. Cada unidade compõe um grupo do relatório.",
    "challenge": "Reescreva a afirmação 'Tabela dinâmica exige apagar a base original para mostrar somas por grupo' de modo tecnicamente correto e mostre uma consequência para uma unidade administrativa.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-005-02",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-005",
    "topic": "Tabelas dinâmicas: finalidade e uso básico",
    "type": "vf",
    "difficulty": "media",
    "stem": "Examine as proposições sobre tabelas dinâmicas: finalidade e uso básico no contexto de rotinas administrativas: I. O campo Valores define a operação de agregação em uma tabela dinâmica II. Tabela dinâmica exige apagar a base original para mostrar somas por grupo III. O campo Linhas pode agrupar registros por unidade Assinale a sequência V/F correta.",
    "options": [
      "V – V – V",
      "F – F – V",
      "V – F – V",
      "V – F – F"
    ],
    "answer": 2,
    "optionComments": [
      "Sequência incorreta em II: A base pode ser preservada e consultada. Logo a proposição é falsa.",
      "Sequência incorreta em I: Soma, contagem e média produzem resumos distintos. Logo a proposição é verdadeira.",
      "Sequência correta: I é verdadeira porque Soma, contagem e média produzem resumos distintos.; II é falsa porque A base pode ser preservada e consultada.; III é verdadeira porque Cada unidade compõe um grupo do relatório.",
      "Sequência incorreta em III: Cada unidade compõe um grupo do relatório. Logo a proposição é verdadeira."
    ],
    "explanation": "I é V: Soma, contagem e média produzem resumos distintos. II é F: A base pode ser preservada e consultada. III é V: Cada unidade compõe um grupo do relatório.",
    "concept": "Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem.",
    "trap": "Se o campo Valor for interpretado como texto, o aplicativo pode sugerir contagem em vez de soma. Esquecer a atualização pode ocultar novos lançamentos. Misturar unidades de medida na mesma coluna invalida o total agregado.",
    "examTip": "Filtro comum apenas mostra linhas; tabela dinâmica reorganiza e sintetiza informações. Contagem de registros não significa soma de valores. Mudanças no relatório dinâmico normalmente não reescrevem a tabela de origem, e o resumo depende de uma fonte consistente. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em uma nova auditoria, um estagiário precisa distinguir 'Linhas', 'Valores' e 'Atualizar'. Medida resumida com função como Soma ou Contagem.",
    "challenge": "Monte um exemplo com três registros concretos que demonstre a diferença entre Linhas e Valores, apontando onde um erro seria percebido.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-005-03",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-005",
    "topic": "Tabelas dinâmicas: finalidade e uso básico",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Considere o caso: O setor financeiro tem 200 lançamentos com Unidade, Despesa e Valor e precisa saber o total de despesas por unidade sem mudar a base original. Considerando o resultado solicitado e os riscos apresentados, qual solução é tecnicamente justificada?",
    "options": [
      "Deletar as linhas originais após obter a primeira soma e manter apenas o resumo",
      "Colocar Valor em Linhas e Unidade em Valores sem revisar o tipo de agregação",
      "Usar somente um filtro por unidade e afirmar que foi criado um resumo automático de todas as unidades",
      "Criar tabela dinâmica com Unidade em Linhas e Valor em Valores configurado para Soma, conferindo os totais."
    ],
    "answer": 3,
    "optionComments": [
      "Inadequada: Isso destrói rastreabilidade e impede auditoria de registros individuais. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: A disposição não responde diretamente ao total monetário por unidade. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: O filtro não agrega os totais de cada grupo simultaneamente. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Adequada: Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem. Na situação, a ação mantém o objetivo de o setor financeiro tem 200 lançamentos com Unidade, Despesa e Valor e precisa saber o total de despesas por unidade sem mudar a base original."
    ],
    "explanation": "A solução escolhida é: Criar tabela dinâmica com Unidade em Linhas e Valor em Valores configurado para Soma, conferindo os totais. Fundamentação: Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem. Compare as demais alternativas com os riscos de Se o campo Valor for interpretado como texto, o aplicativo pode sugerir contagem em vez de soma. Esquecer a atualização pode ocultar novos lançamentos. Misturar unidades de medida na mesma coluna invalida o total agregado.",
    "concept": "Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem.",
    "trap": "Se o campo Valor for interpretado como texto, o aplicativo pode sugerir contagem em vez de soma. Esquecer a atualização pode ocultar novos lançamentos. Misturar unidades de medida na mesma coluna invalida o total agregado.",
    "examTip": "Filtro comum apenas mostra linhas; tabela dinâmica reorganiza e sintetiza informações. Contagem de registros não significa soma de valores. Mudanças no relatório dinâmico normalmente não reescrevem a tabela de origem, e o resumo depende de uma fonte consistente. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Num segundo processo da mesma área, foi necessário aplicar a distinção de que mudanças na fonte podem exigir atualização da tabela dinâmica. Isso é importante porque Relatórios podem usar dados em cache e intervalos previamente definidos.",
    "challenge": "Descreva dois testes observáveis para confirmar a execução de 'Criar tabela dinâmica com Unidade em Linhas e Valor em Valores configurado para Soma, conferindo os totais.' sem comprometer dados já existentes.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-005-04",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-005",
    "topic": "Tabelas dinâmicas: finalidade e uso básico",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Complete as três lacunas, na ordem, para um material de formação sobre tabelas dinâmicas: finalidade e uso básico: 'A descrição “Agrupamento de categorias no relatório.” corresponde a ____; “Medida resumida com função como Soma ou Contagem.” corresponde a ____; e “Recalcular o relatório a partir dos dados da origem.” corresponde a ____.' Qual preenchimento é tecnicamente correto?",
    "options": [
      "Linhas / Valores / Atualizar",
      "Valores / Linhas / Atualizar",
      "Linhas / Atualizar / Valores",
      "Atualizar / Valores / Linhas"
    ],
    "answer": 0,
    "optionComments": [
      "Preenchimento correto: Linhas — Agrupamento de categorias no relatório.; Valores — Medida resumida com função como Soma ou Contagem.; Atualizar — Recalcular o relatório a partir dos dados da origem.",
      "Na lacuna 1, 'Valores' não expressa 'Agrupamento de categorias no relatório.'. O termo apropriado seria 'Linhas'.",
      "Na lacuna 2, 'Atualizar' não expressa 'Medida resumida com função como Soma ou Contagem.'. O termo apropriado seria 'Valores'.",
      "Na lacuna 1, 'Atualizar' não expressa 'Agrupamento de categorias no relatório.'. O termo apropriado seria 'Linhas'."
    ],
    "explanation": "Linhas: Agrupamento de categorias no relatório.; Valores: Medida resumida com função como Soma ou Contagem.; Atualizar: Recalcular o relatório a partir dos dados da origem.",
    "concept": "Tabela dinâmica resume dados por campos agrupados e operações como soma ou contagem; não altera obrigatoriamente os registros da origem.",
    "trap": "Se o campo Valor for interpretado como texto, o aplicativo pode sugerir contagem em vez de soma. Esquecer a atualização pode ocultar novos lançamentos. Misturar unidades de medida na mesma coluna invalida o total agregado.",
    "examTip": "Filtro comum apenas mostra linhas; tabela dinâmica reorganiza e sintetiza informações. Contagem de registros não significa soma de valores. Mudanças no relatório dinâmico normalmente não reescrevem a tabela de origem, e o resumo depende de uma fonte consistente. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Durante outra atividade de capacitação, constatou-se que o campo valores define a operação de agregação em uma tabela dinâmica. A justificativa registrada foi: Soma, contagem e média produzem resumos distintos.",
    "challenge": "Um parecer sustenta que 'Contar lançamentos gera necessariamente o mesmo resultado que somar valores monetários'. Explique a falha dessa conclusão e apresente procedimento verificável que use Atualizar corretamente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-006-01",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-006",
    "topic": "Impressão, área de impressão e layout de página",
    "type": "ce",
    "difficulty": "media",
    "stem": "Durante a análise de uma prova, considere impressão, área de impressão e layout de página. Julgue a afirmação: 'Ajustar a escala para uma página garante automaticamente legibilidade de todas as colunas'",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "A escolha CERTO aceita uma afirmação falsa. A redução excessiva pode deixar texto pequeno demais. Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas.",
      "Correto julgar ERRADO: A redução excessiva pode deixar texto pequeno demais. A conclusão do item contradiz a distinção técnica."
    ],
    "explanation": "Proposição falsa. A redução excessiva pode deixar texto pequeno demais. Área de impressão é o recorte; orientação é a direção da folha; escala altera o tamanho impresso; margem é o espaço ao redor do conteúdo. Configuração de papel não corrige valores nem formata automaticamente a tabela-fonte.",
    "concept": "Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas.",
    "trap": "Imprimir a planilha inteira expõe abas ou colunas auxiliares sem necessidade. Reduzir para caber tudo numa folha pode tornar letras ilegíveis. Um intervalo de impressão fixado anteriormente pode deixar de incluir novos registros.",
    "examTip": "Área de impressão é o recorte; orientação é a direção da folha; escala altera o tamanho impresso; margem é o espaço ao redor do conteúdo. Configuração de papel não corrige valores nem formata automaticamente a tabela-fonte. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em um manual de procedimentos, a equipe confirma a seguinte regra antes de usar o sistema: Paisagem pode acomodar mais colunas lado a lado. A folha tem mais espaço horizontal que em retrato de mesmo tamanho.",
    "challenge": "Reescreva a afirmação 'Ajustar a escala para uma página garante automaticamente legibilidade de todas as colunas' de modo tecnicamente correto e mostre uma consequência para uma unidade administrativa.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-006-02",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-006",
    "topic": "Impressão, área de impressão e layout de página",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Uma equipe confere procedimentos ligados a impressão, área de impressão e layout de página. Considere: I. Paisagem pode acomodar mais colunas lado a lado II. Pré-visualizar a impressão ajuda a detectar cortes e páginas vazias III. Ajustar a escala para uma página garante automaticamente legibilidade de todas as colunas Quais assertivas estão corretas?",
    "options": [
      "Apenas III",
      "Apenas I e II",
      "Apenas I",
      "Apenas II"
    ],
    "answer": 1,
    "optionComments": [
      "Combinação incorreta: I deveria integrar a resposta. A folha tem mais espaço horizontal que em retrato de mesmo tamanho.",
      "Combinação correta: I é válida: A folha tem mais espaço horizontal que em retrato de mesmo tamanho. II é válida: A prévia mostra a distribuição estimada do conteúdo. III é falsa: A redução excessiva pode deixar texto pequeno demais.",
      "Combinação incorreta: II deveria integrar a resposta. A prévia mostra a distribuição estimada do conteúdo.",
      "Combinação incorreta: I deveria integrar a resposta. A folha tem mais espaço horizontal que em retrato de mesmo tamanho."
    ],
    "explanation": "I correta: A folha tem mais espaço horizontal que em retrato de mesmo tamanho. II correta: A prévia mostra a distribuição estimada do conteúdo. III incorreta: A redução excessiva pode deixar texto pequeno demais.",
    "concept": "Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas.",
    "trap": "Imprimir a planilha inteira expõe abas ou colunas auxiliares sem necessidade. Reduzir para caber tudo numa folha pode tornar letras ilegíveis. Um intervalo de impressão fixado anteriormente pode deixar de incluir novos registros.",
    "examTip": "Área de impressão é o recorte; orientação é a direção da folha; escala altera o tamanho impresso; margem é o espaço ao redor do conteúdo. Configuração de papel não corrige valores nem formata automaticamente a tabela-fonte. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Em uma nova auditoria, um estagiário precisa distinguir 'Área de impressão', 'Orientação' e 'Escala'. Disposição retrato ou paisagem da folha.",
    "challenge": "Monte um exemplo com três registros concretos que demonstre a diferença entre Área de impressão e Orientação, apontando onde um erro seria percebido.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-006-03",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-006",
    "topic": "Impressão, área de impressão e layout de página",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Uma unidade relata: Uma relação de materiais possui 12 colunas, mas o conselho precisa apenas de Código, Descrição, Quantidade e Valor em PDF legível. Considerando o resultado solicitado e os riscos apresentados, qual solução é tecnicamente justificada?",
    "options": [
      "Excluir permanentemente as oito colunas não solicitadas para reduzir a impressão",
      "Alterar o tamanho da fonte da tela e presumir que as quebras de página serão adequadas",
      "Definir área de impressão para as quatro colunas necessárias e conferir orientação, escala e prévia antes de exportar.",
      "Imprimir todas as colunas e reduzir a escala até que os textos se tornem quase ilegíveis"
    ],
    "answer": 2,
    "optionComments": [
      "Inadequada: É desnecessário destruir os dados da planilha de trabalho. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Inadequada: A visualização em tela não substitui verificar área, escala e paginação de impressão. A escolha não satisfaz o objetivo específico indicado no caso.",
      "Adequada: Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas. Na situação, a ação mantém o objetivo de uma relação de materiais possui 12 colunas, mas o conselho precisa apenas de Código, Descrição, Quantidade e Valor em PDF legível.",
      "Inadequada: A redução excessiva compromete leitura e pode divulgar dados auxiliares. A escolha não satisfaz o objetivo específico indicado no caso."
    ],
    "explanation": "A solução escolhida é: Definir área de impressão para as quatro colunas necessárias e conferir orientação, escala e prévia antes de exportar. Fundamentação: Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas. Compare as demais alternativas com os riscos de Imprimir a planilha inteira expõe abas ou colunas auxiliares sem necessidade. Reduzir para caber tudo numa folha pode tornar letras ilegíveis. Um intervalo de impressão fixado anteriormente pode deixar de incluir novos registros.",
    "concept": "Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas.",
    "trap": "Imprimir a planilha inteira expõe abas ou colunas auxiliares sem necessidade. Reduzir para caber tudo numa folha pode tornar letras ilegíveis. Um intervalo de impressão fixado anteriormente pode deixar de incluir novos registros.",
    "examTip": "Área de impressão é o recorte; orientação é a direção da folha; escala altera o tamanho impresso; margem é o espaço ao redor do conteúdo. Configuração de papel não corrige valores nem formata automaticamente a tabela-fonte. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Num segundo processo da mesma área, foi necessário aplicar a distinção de que pré-visualizar a impressão ajuda a detectar cortes e páginas vazias. Isso é importante porque A prévia mostra a distribuição estimada do conteúdo.",
    "challenge": "Descreva dois testes observáveis para confirmar a execução de 'Definir área de impressão para as quatro colunas necessárias e conferir orientação, escala e prévia antes de exportar.' sem comprometer dados já existentes.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-11-006-04",
    "moduleId": "INF-11",
    "subtopicId": "INF-11-006",
    "topic": "Impressão, área de impressão e layout de página",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Uma comissão elaborou recomendações sobre impressão, área de impressão e layout de página. Todas as afirmações abaixo são tecnicamente corretas, EXCETO uma. Qual NÃO deve integrar o material?",
    "options": [
      "Paisagem pode acomodar mais colunas lado a lado",
      "Pré-visualizar a impressão ajuda a detectar cortes e páginas vazias",
      "Configurar área de impressão apaga todas as células fora do intervalo escolhido",
      "Área de impressão pode restringir as células enviadas para impressão"
    ],
    "answer": 2,
    "optionComments": [
      "Proposição adequada: A folha tem mais espaço horizontal que em retrato de mesmo tamanho. Ela atende ao conceito.",
      "Proposição adequada: A prévia mostra a distribuição estimada do conteúdo. Ela atende ao conceito.",
      "Proposição inadequada, portanto resposta do EXCETO: A área delimita saída impressa, não exclui conteúdo da planilha. É a única que viola a propriedade técnica exigida.",
      "Proposição adequada: O recorte é configurado independentemente da seleção atual de tela. Ela atende ao conceito."
    ],
    "explanation": "A exceção é 'Configurar área de impressão apaga todas as células fora do intervalo escolhido'. A área delimita saída impressa, não exclui conteúdo da planilha. As outras três refletem propriedades válidas: O recorte é configurado independentemente da seleção atual de tela.; A folha tem mais espaço horizontal que em retrato de mesmo tamanho.; A prévia mostra a distribuição estimada do conteúdo.",
    "concept": "Área de impressão define quais células serão impressas; orientação, escala e margens controlam como a seleção será distribuída nas páginas.",
    "trap": "Imprimir a planilha inteira expõe abas ou colunas auxiliares sem necessidade. Reduzir para caber tudo numa folha pode tornar letras ilegíveis. Um intervalo de impressão fixado anteriormente pode deixar de incluir novos registros.",
    "examTip": "Área de impressão é o recorte; orientação é a direção da folha; escala altera o tamanho impresso; margem é o espaço ao redor do conteúdo. Configuração de papel não corrige valores nem formata automaticamente a tabela-fonte. Identifique a ação pedida no enunciado antes de escolher a alternativa.",
    "newExample": "Durante outra atividade de capacitação, constatou-se que área de impressão pode restringir as células enviadas para impressão. A justificativa registrada foi: O recorte é configurado independentemente da seleção atual de tela.",
    "challenge": "Um parecer sustenta que 'Configurar área de impressão apaga todas as células fora do intervalo escolhido'. Explique a falha dessa conclusão e apresente procedimento verificável que use Escala corretamente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  }
];
