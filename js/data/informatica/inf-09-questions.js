/** INF-ESTUDO — Fase D/Lote 2: questões autorais do INF-09. */
export const INF_09_QUESTIONS = [
  {
    "id": "Q-INF-09-001-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-001",
    "topic": "Pasta de trabalho, planilha, células, linhas e colunas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Pasta de trabalho, planilha, células, linhas e colunas: Em B3, B indica a linha e 3 indica a coluna.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Na notação A1 é o inverso. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Na notação A1 é o inverso. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Na notação A1 é o inverso. Distinção aplicável: Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário.",
    "concept": "Uma pasta de trabalho reúne planilhas; células são identificadas pelo encontro de coluna e linha, como B3.",
    "trap": "Não confunda a contagem de células de um intervalo com o número de linhas. Mesclar células pode dificultar referências e ordenação de registros administrativos.",
    "examTip": "Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: B3 significa coluna B e linha 3. Ela é sustentada por: Essa é a convenção usual A1.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Pasta de trabalho, planilha, células, linhas e colunas” sem cometer o erro descrito em “Em B3, B indica a linha e 3 indica a coluna.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-001-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-001",
    "topic": "Pasta de trabalho, planilha, células, linhas e colunas",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue os itens sobre Pasta de trabalho, planilha, células, linhas e colunas: I. Uma pasta de trabalho pode ter mais de uma planilha. II. Em B3, B indica a linha e 3 indica a coluna. III. B3 significa coluna B e linha 3. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "V – F – V",
      "V – F – F",
      "V – V – V",
      "F – F – V"
    ],
    "answer": 0,
    "optionComments": [
      "Correta: I: Várias folhas podem compor o mesmo arquivo. II: Na notação A1 é o inverso. III: Essa é a convenção usual A1.",
      "Incorreta: III está classificado de modo equivocado, pois Essa é a convenção usual A1.",
      "Incorreta: II está classificado de modo equivocado, pois Na notação A1 é o inverso.",
      "Incorreta: I está classificado de modo equivocado, pois Várias folhas podem compor o mesmo arquivo."
    ],
    "explanation": "Resolução item a item: I = V: Várias folhas podem compor o mesmo arquivo. II = F: Na notação A1 é o inverso. III = V: Essa é a convenção usual A1.",
    "concept": "Uma pasta de trabalho reúne planilhas; células são identificadas pelo encontro de coluna e linha, como B3.",
    "trap": "Não confunda a contagem de células de um intervalo com o número de linhas. Mesclar células pode dificultar referências e ordenação de registros administrativos.",
    "examTip": "Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Uma pasta de trabalho pode ter mais de uma planilha. A justificativa é: Várias folhas podem compor o mesmo arquivo.",
    "challenge": "Qual é a justificativa técnica para preferir “Reconhecer B2:D6 como 5 linhas × 3 colunas = 15 células e usar cada coluna para um campo.” em vez da alternativa “Contar apenas cinco células porque o intervalo tem cinco linhas.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-001-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-001",
    "topic": "Pasta de trabalho, planilha, células, linhas e colunas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Pasta de trabalho, planilha, células, linhas e colunas: Uma planilha de estoque precisa reservar o intervalo B2:D6 para três campos em cinco registros. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Contar apenas cinco células porque o intervalo tem cinco linhas.",
      "Reconhecer B2:D6 como 5 linhas × 3 colunas = 15 células e usar cada coluna para um campo.",
      "Usar uma única célula mesclada para armazenar todos os registros.",
      "Tratar B2 e D6 como nomes de arquivos separados."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: Cada linha possui três células, totalizando quinze. Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1",
      "Correta: Reconhecer B2:D6 como 5 linhas × 3 colunas = 15 células e usar cada coluna para um campo. Fundamentação: Em Excel para Microsoft 365 e LibreOffice Calc, a coluna B e a linha 3 definem a referência B3. Um intervalo A1:C4 inclui as células de três colunas e quatro linhas, totalizando doze posições. Planilhas podem conter dados, fórmulas, tabelas e gráfico",
      "Incorreta: A estrutura por linha e coluna é necessária para filtro e cálculo. Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1",
      "Incorreta: São endereços de células na folha. Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1"
    ],
    "explanation": "Reconhecer B2:D6 como 5 linhas × 3 colunas = 15 células e usar cada coluna para um campo. Em Excel para Microsoft 365 e LibreOffice Calc, a coluna B e a linha 3 definem a referência B3. Um intervalo A1:C4 inclui as células de três colunas e quatro linhas, totalizando doze posições. Planilhas podem conter dados, fórmulas, tabelas e gráficos; o arquivo de trabalho pode conter várias abas. A célula ativa é aquela que recebe digitação ou edição; selecionar um intervalo não o transforma automaticamente em uma única célula. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Uma pasta de trabalho reúne planilhas; células são identificadas pelo encontro de coluna e linha, como B3.",
    "trap": "Não confunda a contagem de células de um intervalo com o número de linhas. Mesclar células pode dificultar referências e ordenação de registros administrativos.",
    "examTip": "Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário.",
    "challenge": "Proponha um teste simples que permita refutar “O intervalo A1:C4 contém quatro células ao todo.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-001-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-001",
    "topic": "Pasta de trabalho, planilha, células, linhas e colunas",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Complete as lacunas corretamente ao documentar Pasta de trabalho, planilha, células, linhas e colunas: O recurso definido como “Arquivo que agrupa planilhas” é ___; aquele definido como “Folha em abas” é ___; e o recurso definido como “Interseção entre linha e coluna” é ___.",
    "options": [
      "Célula / Pasta de trabalho / Planilha",
      "Planilha / Célula / Pasta de trabalho",
      "Pasta de trabalho / Planilha / Célula",
      "Pasta de trabalho / Célula / Planilha"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: “Arquivo que agrupa planilhas” não corresponde a “Célula”, mas a “Pasta de trabalho”; “Folha em abas” não corresponde a “Pasta de trabalho”, mas a “Planilha”; “Interseção entre linha e coluna” não corresponde a “Planilha”, mas a “Célula”",
      "Incorreta: “Arquivo que agrupa planilhas” não corresponde a “Planilha”, mas a “Pasta de trabalho”; “Folha em abas” não corresponde a “Célula”, mas a “Planilha”; “Interseção entre linha e coluna” não corresponde a “Pasta de trabalho”, mas a “Célula”",
      "Correta: “Arquivo que agrupa planilhas” define “Pasta de trabalho”; “Folha em abas” define “Planilha”; “Interseção entre linha e coluna” define “Célula”",
      "Incorreta: “Folha em abas” não corresponde a “Célula”, mas a “Planilha”; “Interseção entre linha e coluna” não corresponde a “Planilha”, mas a “Célula”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: Pasta de trabalho: Arquivo que agrupa planilhas; Planilha: Folha em abas; Célula: Interseção entre linha e coluna.",
    "concept": "Uma pasta de trabalho reúne planilhas; células são identificadas pelo encontro de coluna e linha, como B3.",
    "trap": "Não confunda a contagem de células de um intervalo com o número de linhas. Mesclar células pode dificultar referências e ordenação de registros administrativos.",
    "examTip": "Pasta de trabalho é o arquivo que agrupa folhas; planilha é uma folha; célula é a interseção. Em referência A1, a letra identifica coluna e o número identifica linha, não o contrário.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Não confunda a contagem de células de um intervalo com o número de linhas. Mesclar células pode dificultar referências e ordenação de registros administrativos. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Tratar B2 e D6 como nomes de arquivos separados.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-002-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-002",
    "topic": "Seleção, edição, cópia, preenchimento e séries",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Seleção, edição, cópia, preenchimento e séries: Referências relativas podem mudar ao copiar fórmula.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: O deslocamento ajusta endereços. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: O deslocamento ajusta endereços. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. O deslocamento ajusta endereços. Detalhamento: Ao copiar uma célula com o número 7, o destino pode receber o mesmo valor. Ao preencher uma série, como 2, 4, 6, o programa pode inferir a progressão. Arrastar uma fórmula altera referências relativas conforme o deslocamento: se C2 contém =A2+B2, copiá-la para C3 costuma produzir =A3+B3. Colar especial pode transferir apenas valores, formatos ou outros atributos. As possibilidades dependem do editor, da seleção e do comando utilizado.",
    "concept": "Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referências relativas em fórmulas.",
    "trap": "Um erro é arrastar fórmula sem conferir referências ou supor que toda seleção de uma célula numérica criará série crescente. A interpretação da alça depende dos dados e da forma de uso.",
    "examTip": "Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. Colar apenas valores elimina a fórmula no destino, preservando o resultado calculado naquele momento.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: Referências relativas podem mudar ao copiar fórmula. Ela é sustentada por: O deslocamento ajusta endereços.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Seleção, edição, cópia, preenchimento e séries” sem cometer o erro descrito em “Copiar fórmula mantém obrigatoriamente todas as referências iguais.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-002-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-002",
    "topic": "Seleção, edição, cópia, preenchimento e séries",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Considere as assertivas sobre Seleção, edição, cópia, preenchimento e séries: I. Referências relativas podem mudar ao copiar fórmula. II. Colar especial pode transferir apenas valores. III. Copiar fórmula mantém obrigatoriamente todas as referências iguais. Quais assertivas são corretas?",
    "options": [
      "Apenas II.",
      "Apenas I.",
      "Apenas I e II e III.",
      "Apenas I e II."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: I é classificada erroneamente, porque O deslocamento ajusta endereços.",
      "Incorreta: II é classificada erroneamente, porque É diferente de colar fórmulas.",
      "Incorreta: III é classificada erroneamente, porque Referências relativas costumam se ajustar.",
      "Correta: I: O deslocamento ajusta endereços. II: É diferente de colar fórmulas. III: Referências relativas costumam se ajustar."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: O deslocamento ajusta endereços. II é verdadeira: É diferente de colar fórmulas. III é falsa: Referências relativas costumam se ajustar.",
    "concept": "Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referências relativas em fórmulas.",
    "trap": "Um erro é arrastar fórmula sem conferir referências ou supor que toda seleção de uma célula numérica criará série crescente. A interpretação da alça depende dos dados e da forma de uso.",
    "examTip": "Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. Colar apenas valores elimina a fórmula no destino, preservando o resultado calculado naquele momento.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Séries reconhecem padrões quando o preenchimento é configurado. A justificativa é: A sequência depende dos valores iniciais.",
    "challenge": "Qual é a justificativa técnica para preferir “Copiar a fórmula =A2+B2 de C2 para C3 e conferir que o resultado utiliza A3 e B3.” em vez da alternativa “Digitar manualmente o resultado de C2 em C3.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-002-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-002",
    "topic": "Seleção, edição, cópia, preenchimento e séries",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Seleção, edição, cópia, preenchimento e séries. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "Colar somente valores preserva a fórmula editável no destino.",
      "Referências relativas podem mudar ao copiar fórmula.",
      "Colar especial pode transferir apenas valores.",
      "Séries reconhecem padrões quando o preenchimento é configurado."
    ],
    "answer": 0,
    "optionComments": [
      "EXCETO — esta é a única afirmação falsa: Preserva o resultado, não a expressão. Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências",
      "Afirmação tecnicamente correta, logo não é a exceção: O deslocamento ajusta endereços. Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referênc",
      "Afirmação tecnicamente correta, logo não é a exceção: É diferente de colar fórmulas. Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referênc",
      "Afirmação tecnicamente correta, logo não é a exceção: A sequência depende dos valores iniciais. Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referênc"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “Colar somente valores preserva a fórmula editável no destino.” é falsa porque Preserva o resultado, não a expressão. As demais são compatíveis com o tema.",
    "concept": "Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referências relativas em fórmulas.",
    "trap": "Um erro é arrastar fórmula sem conferir referências ou supor que toda seleção de uma célula numérica criará série crescente. A interpretação da alça depende dos dados e da forma de uso.",
    "examTip": "Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. Colar apenas valores elimina a fórmula no destino, preservando o resultado calculado naquele momento.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. Colar apenas valores elimina a fórmula no destino, preservando o resultado calculado naquele momento.",
    "challenge": "Proponha um teste simples que permita refutar “Colar somente valores preserva a fórmula editável no destino.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-002-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-002",
    "topic": "Seleção, edição, cópia, preenchimento e séries",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Seleção, edição, cópia, preenchimento e séries: Uma secretaria calcula em C2 a soma das quantidades em A2 e B2 e quer repetir o cálculo para a linha seguinte. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Colar somente formato e esperar que a fórmula seja copiada.",
      "Copiar a fórmula =A2+B2 de C2 para C3 e conferir que o resultado utiliza A3 e B3.",
      "Digitar manualmente o resultado de C2 em C3.",
      "Manter =A2+B2 em C3 se a intenção é calcular a linha 3."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: Colagem de formato não transfere o cálculo. Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. C",
      "Correta: Copiar a fórmula =A2+B2 de C2 para C3 e conferir que o resultado utiliza A3 e B3. Fundamentação: Ao copiar uma célula com o número 7, o destino pode receber o mesmo valor. Ao preencher uma série, como 2, 4, 6, o programa pode inferir a progressão. Arrastar uma fórmula altera referências relativas conforme o deslocamento: se C2 contém =A2+B2, cop",
      "Incorreta: Não considera os valores da linha seguinte. Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. C",
      "Incorreta: A fórmula precisa referenciar a nova linha. Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. C"
    ],
    "explanation": "Copiar a fórmula =A2+B2 de C2 para C3 e conferir que o resultado utiliza A3 e B3. Ao copiar uma célula com o número 7, o destino pode receber o mesmo valor. Ao preencher uma série, como 2, 4, 6, o programa pode inferir a progressão. Arrastar uma fórmula altera referências relativas conforme o deslocamento: se C2 contém =A2+B2, copiá-la para C3 costuma produzir =A3+B3. Colar especial pode transferir apenas valores, formatos ou outros atributos. As possibilidades dependem do editor, da seleção e do comando utilizado. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Copiar e preencher células pode replicar valores ou séries; a alça de preenchimento pode adaptar referências relativas em fórmulas.",
    "trap": "Um erro é arrastar fórmula sem conferir referências ou supor que toda seleção de uma célula numérica criará série crescente. A interpretação da alça depende dos dados e da forma de uso.",
    "examTip": "Copiar valor e preencher série são operações distintas; copiar fórmula envolve referências que podem variar. Colar apenas valores elimina a fórmula no destino, preservando o resultado calculado naquele momento.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro é arrastar fórmula sem conferir referências ou supor que toda seleção de uma célula numérica criará série crescente. A interpretação da alça depende dos dados e da forma de uso. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Manter =A2+B2 em C3 se a intenção é calcular a linha 3.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-003-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-003",
    "topic": "Tipos de dados, números, datas e textos",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Tipos de dados, números, datas e textos: Matrícula com zeros iniciais deve sempre virar número para preservar o código.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Conversão numérica pode eliminar os zeros. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Conversão numérica pode eliminar os zeros. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Conversão numérica pode eliminar os zeros. Distinção aplicável: Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "concept": "Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor interno.",
    "trap": "Não resolva a perda de zeros iniciais alterando números de documento em valores monetários. Identificadores são dados categóricos e não devem ser somados.",
    "examTip": "Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: Números são usados diretamente em operações aritméticas. Ela é sustentada por: Seu tipo permite cálculos.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Tipos de dados, números, datas e textos” sem cometer o erro descrito em “Matrícula com zeros iniciais deve sempre virar número para preservar o código.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-003-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-003",
    "topic": "Tipos de dados, números, datas e textos",
    "type": "associacao",
    "difficulty": "media",
    "stem": "Associe a Coluna I à Coluna II sobre Tipos de dados, números, datas e textos. Coluna I: I. Número. II. Texto. III. Data. Coluna II: 1. Valor adequado a cálculo. 2. Cadeia de caracteres. 3. Valor interpretado como calendário. Assinale a sequência de números correspondente à ordem I–III.",
    "options": [
      "1 – 3 – 2",
      "3 – 2 – 1",
      "1 – 2 – 3",
      "2 – 1 – 3"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: Texto foi associado a Valor interpretado como calendário, mas corresponde a Cadeia de caracteres; Data foi associado a Cadeia de caracteres, mas corresponde a Valor interpretado como calendário",
      "Incorreta: Número foi associado a Valor interpretado como calendário, mas corresponde a Valor adequado a cálculo; Data foi associado a Valor adequado a cálculo, mas corresponde a Valor interpretado como calendário",
      "Correta: Número corresponde a Valor adequado a cálculo; Texto corresponde a Cadeia de caracteres; Data corresponde a Valor interpretado como calendário",
      "Incorreta: Número foi associado a Cadeia de caracteres, mas corresponde a Valor adequado a cálculo; Texto foi associado a Valor adequado a cálculo, mas corresponde a Cadeia de caracteres"
    ],
    "explanation": "Pareamento técnico: Número → Valor adequado a cálculo; Texto → Cadeia de caracteres; Data → Valor interpretado como calendário. Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "concept": "Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor interno.",
    "trap": "Não resolva a perda de zeros iniciais alterando números de documento em valores monetários. Identificadores são dados categóricos e não devem ser somados.",
    "examTip": "Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Formato visual não determina sozinho a interpretação do dado importado. A justificativa é: A origem e o tipo interno importam.",
    "challenge": "Qual é a justificativa técnica para preferir “Importar ou formatar matrículas como texto para preservar os identificadores completos.” em vez da alternativa “Somar matrículas como quantidades para preservar zeros.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-003-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-003",
    "topic": "Tipos de dados, números, datas e textos",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Tipos de dados, números, datas e textos: Um setor importa matrículas 00073 e 00104, mas a planilha elimina os zeros à esquerda. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Somar matrículas como quantidades para preservar zeros.",
      "Aplicar apenas formato percentual às matrículas.",
      "Tratar os códigos 00073 e 73 como cadeias equivalentes em todo sistema.",
      "Importar ou formatar matrículas como texto para preservar os identificadores completos."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: Identificadores não representam medidas numéricas. Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garant",
      "Incorreta: Percentual altera apresentação e pode distorcer o código. Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garant",
      "Incorreta: Os zeros podem fazer parte do identificador oficial. Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garant",
      "Correta: Importar ou formatar matrículas como texto para preservar os identificadores completos. Fundamentação: Uma célula numérica pode participar diretamente de somas. Uma data válida é tratada como valor de data, permitindo cálculos de intervalos; sua apresentação depende da localidade. Um código de matrícula com zeros iniciais, como 00125, deve ser tratado"
    ],
    "explanation": "Importar ou formatar matrículas como texto para preservar os identificadores completos. Uma célula numérica pode participar diretamente de somas. Uma data válida é tratada como valor de data, permitindo cálculos de intervalos; sua apresentação depende da localidade. Um código de matrícula com zeros iniciais, como 00125, deve ser tratado com cuidado, pois ao virar número pode perder zeros na exibição padrão. Um valor numérico formatado como moeda continua numérico, enquanto uma cadeia como “R$ 50” importada como texto pode impedir a soma. A interpretação de CSV também depende de separadores e configuração regional. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor interno.",
    "trap": "Não resolva a perda de zeros iniciais alterando números de documento em valores monetários. Identificadores são dados categóricos e não devem ser somados.",
    "examTip": "Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "challenge": "Proponha um teste simples que permita refutar “Todo texto que parece data é automaticamente uma data válida na planilha.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-003-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-003",
    "topic": "Tipos de dados, números, datas e textos",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Tipos de dados, números, datas e textos. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "Todo texto que parece data é automaticamente uma data válida na planilha.",
      "Números são usados diretamente em operações aritméticas.",
      "Códigos com zeros iniciais frequentemente devem ser preservados como texto.",
      "Formato visual não determina sozinho a interpretação do dado importado."
    ],
    "answer": 0,
    "optionComments": [
      "EXCETO — esta é a única afirmação falsa: Importação e localidade podem produzir texto. Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 1",
      "Afirmação tecnicamente correta, logo não é a exceção: Seu tipo permite cálculos. Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor int",
      "Afirmação tecnicamente correta, logo não é a exceção: Zeros podem ser parte do identificador. Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor int",
      "Afirmação tecnicamente correta, logo não é a exceção: A origem e o tipo interno importam. Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor int"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “Todo texto que parece data é automaticamente uma data válida na planilha.” é falsa porque Importação e localidade podem produzir texto. As demais são compatíveis com o tema.",
    "concept": "Planilhas distinguem números, textos e datas; a formatação exibida não altera necessariamente o valor interno.",
    "trap": "Não resolva a perda de zeros iniciais alterando números de documento em valores monetários. Identificadores são dados categóricos e não devem ser somados.",
    "examTip": "Número 25 e texto “25” podem parecer iguais, mas diferem em cálculos e ordenação. Exibir 15/03/2026 não garante que a célula tenha valor de data válido, especialmente após importação.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Não resolva a perda de zeros iniciais alterando números de documento em valores monetários. Identificadores são dados categóricos e não devem ser somados. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Aplicar apenas formato percentual às matrículas.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-004-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-004",
    "topic": "Formatação de células e formatos numéricos",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Formatação de células e formatos numéricos: 0,25 formatado como percentual aparece como 25%.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: A apresentação multiplica visualmente por 100. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: A apresentação multiplica visualmente por 100. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. A apresentação multiplica visualmente por 100. Detalhamento: Um valor interno de 0,25 pode ser mostrado como 25% ao aplicar o formato percentual, sem mudar o número armazenado. Moeda pode acrescentar símbolo monetário e casas decimais; o cálculo usa o valor interno. Arredondamento visual difere de arredondar efetivamente por fórmula. Bordas, preenchimentos e estilos apoiam leitura, mas não corrigem números digitados incorretamente. A localização influencia separadores decimais e formatos de data e moeda.",
    "concept": "Formatar células ajusta a aparência dos dados: casas decimais, moeda, porcentagem, bordas, cores e alinhamento.",
    "trap": "É comum formatar 0,125 como 0,13 e depois supor que cálculos usam exatamente 0,13; a célula pode continuar armazenando 0,125.",
    "examTip": "O valor 0,25 com formato percentual aparece como 25%; digitar 25 e aplicar percentual pode mostrar 2500%. Reduzir casas decimais não elimina necessariamente frações internas usadas nas contas.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: 0,25 formatado como percentual aparece como 25%. Ela é sustentada por: A apresentação multiplica visualmente por 100.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Formatação de células e formatos numéricos” sem cometer o erro descrito em “Aplicar percentual transforma internamente 0,25 em 25.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-004-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-004",
    "topic": "Formatação de células e formatos numéricos",
    "type": "lacunas",
    "difficulty": "media",
    "stem": "Complete as lacunas corretamente ao documentar Formatação de células e formatos numéricos: O recurso definido como “Exibição proporcional de um número” é ___; aquele definido como “Formato monetário” é ___; e o recurso definido como “Precisão visual exibida” é ___.",
    "options": [
      "Moeda / Casas decimais / Percentual",
      "Percentual / Moeda / Casas decimais",
      "Percentual / Casas decimais / Moeda",
      "Casas decimais / Percentual / Moeda"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: “Exibição proporcional de um número” não corresponde a “Moeda”, mas a “Percentual”; “Formato monetário” não corresponde a “Casas decimais”, mas a “Moeda”; “Precisão visual exibida” não corresponde a “Percentual”, mas a “Casas decimais”",
      "Correta: “Exibição proporcional de um número” define “Percentual”; “Formato monetário” define “Moeda”; “Precisão visual exibida” define “Casas decimais”",
      "Incorreta: “Formato monetário” não corresponde a “Casas decimais”, mas a “Moeda”; “Precisão visual exibida” não corresponde a “Moeda”, mas a “Casas decimais”",
      "Incorreta: “Exibição proporcional de um número” não corresponde a “Casas decimais”, mas a “Percentual”; “Formato monetário” não corresponde a “Percentual”, mas a “Moeda”; “Precisão visual exibida” não corresponde a “Moeda”, mas a “Casas decimais”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: Percentual: Exibição proporcional de um número; Moeda: Formato monetário; Casas decimais: Precisão visual exibida.",
    "concept": "Formatar células ajusta a aparência dos dados: casas decimais, moeda, porcentagem, bordas, cores e alinhamento.",
    "trap": "É comum formatar 0,125 como 0,13 e depois supor que cálculos usam exatamente 0,13; a célula pode continuar armazenando 0,125.",
    "examTip": "O valor 0,25 com formato percentual aparece como 25%; digitar 25 e aplicar percentual pode mostrar 2500%. Reduzir casas decimais não elimina necessariamente frações internas usadas nas contas.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Moeda é formato que pode conservar natureza numérica. A justificativa é: Símbolo não exige converter para texto.",
    "challenge": "Qual é a justificativa técnica para preferir “Aplicar formato percentual, exibindo 7,5%, sem multiplicar manualmente o valor da célula por 100.” em vez da alternativa “Multiplicar o valor por 100 e depois aplicar formato percentual.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-004-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-004",
    "topic": "Formatação de células e formatos numéricos",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Analise uma situação de auditoria de conceitos de Formatação de células e formatos numéricos: I. Moeda é formato que pode conservar natureza numérica. II. Diminuir decimais exibidos pode preservar o valor interno. III. Uma borda em célula modifica o resultado de SOMA. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "V – F – F",
      "F – V – F",
      "V – V – F",
      "V – V – V"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II está classificado de modo equivocado, pois Formato não necessariamente arredonda dados.",
      "Incorreta: I está classificado de modo equivocado, pois Símbolo não exige converter para texto.",
      "Correta: I: Símbolo não exige converter para texto. II: Formato não necessariamente arredonda dados. III: Borda é propriedade visual.",
      "Incorreta: III está classificado de modo equivocado, pois Borda é propriedade visual."
    ],
    "explanation": "Resolução item a item: I = V: Símbolo não exige converter para texto. II = V: Formato não necessariamente arredonda dados. III = F: Borda é propriedade visual.",
    "concept": "Formatar células ajusta a aparência dos dados: casas decimais, moeda, porcentagem, bordas, cores e alinhamento.",
    "trap": "É comum formatar 0,125 como 0,13 e depois supor que cálculos usam exatamente 0,13; a célula pode continuar armazenando 0,125.",
    "examTip": "O valor 0,25 com formato percentual aparece como 25%; digitar 25 e aplicar percentual pode mostrar 2500%. Reduzir casas decimais não elimina necessariamente frações internas usadas nas contas.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: O valor 0,25 com formato percentual aparece como 25%; digitar 25 e aplicar percentual pode mostrar 2500%. Reduzir casas decimais não elimina necessariamente frações internas usadas nas contas.",
    "challenge": "Proponha um teste simples que permita refutar “Uma borda em célula modifica o resultado de SOMA.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-004-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-004",
    "topic": "Formatação de células e formatos numéricos",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre Formatação de células e formatos numéricos: I. Diminuir decimais exibidos pode preservar o valor interno. II. Moeda é formato que pode conservar natureza numérica. III. Uma borda em célula modifica o resultado de SOMA. Quais assertivas são corretas?",
    "options": [
      "Apenas I e II e III.",
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: III é classificada erroneamente, porque Borda é propriedade visual.",
      "Incorreta: II é classificada erroneamente, porque Símbolo não exige converter para texto.",
      "Incorreta: I é classificada erroneamente, porque Formato não necessariamente arredonda dados.",
      "Correta: I: Formato não necessariamente arredonda dados. II: Símbolo não exige converter para texto. III: Borda é propriedade visual."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: Formato não necessariamente arredonda dados. II é verdadeira: Símbolo não exige converter para texto. III é falsa: Borda é propriedade visual.",
    "concept": "Formatar células ajusta a aparência dos dados: casas decimais, moeda, porcentagem, bordas, cores e alinhamento.",
    "trap": "É comum formatar 0,125 como 0,13 e depois supor que cálculos usam exatamente 0,13; a célula pode continuar armazenando 0,125.",
    "examTip": "O valor 0,25 com formato percentual aparece como 25%; digitar 25 e aplicar percentual pode mostrar 2500%. Reduzir casas decimais não elimina necessariamente frações internas usadas nas contas.",
    "newExample": "Antes de publicar um relatório, investigue este erro: É comum formatar 0,125 como 0,13 e depois supor que cálculos usam exatamente 0,13; a célula pode continuar armazenando 0,125. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Inserir o símbolo % como texto sem conferir tipo.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-005-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-005",
    "topic": "Operadores aritméticos e precedência de fórmulas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Operadores aritméticos e precedência de fórmulas: A fórmula =2+3*4 resulta em 20.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: O cálculo correto é 2+12 =14. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: O cálculo correto é 2+12 =14. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. O cálculo correto é 2+12 =14. Distinção aplicável: A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "concept": "Fórmulas de planilha seguem precedência de operadores: potências, multiplicação/divisão e soma/subtração, considerando parênteses.",
    "trap": "Um erro frequente é calcular da esquerda para a direita ignorando precedência. A dificuldade aumenta quando uma fórmula soma totais e depois calcula percentuais.",
    "examTip": "A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: Em =2+3*4 o resultado é 14. Ela é sustentada por: Multiplicação precede soma.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Operadores aritméticos e precedência de fórmulas” sem cometer o erro descrito em “A fórmula =2+3*4 resulta em 20.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-005-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-005",
    "topic": "Operadores aritméticos e precedência de fórmulas",
    "type": "classica",
    "difficulty": "media",
    "stem": "Em uma preparação de treinamento sobre Operadores aritméticos e precedência de fórmulas, qual afirmação pode ser adotada sem contrariar os conceitos do tema?",
    "options": [
      "Em =2+3*4 o resultado é 14.",
      "A fórmula =2+3*4 resulta em 20.",
      "Parênteses nunca afetam resultado de fórmula.",
      "Utilizar =(3+4)*3 e registrar 14."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Multiplicação precede soma. Fórmulas de planilha seguem precedência de operadores: potências, multiplicação/divisão e soma/subtração, considerando parênteses.",
      "Incorreta: O cálculo correto é 2+12 =14. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquant",
      "Incorreta: Podem mudar precedência. A expressão =2+3*4 resulta em 14 porque a multiplicação ocorre antes da soma. Já =(2+3)*4 resulta em 20. Referência",
      "Incorreta: Essa expressão resulta em 21, além de modelar outra situação que não corresponde ao custo pedido. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquant"
    ],
    "explanation": "Em =2+3*4 o resultado é 14. Multiplicação precede soma. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "concept": "Fórmulas de planilha seguem precedência de operadores: potências, multiplicação/divisão e soma/subtração, considerando parênteses.",
    "trap": "Um erro frequente é calcular da esquerda para a direita ignorando precedência. A dificuldade aumenta quando uma fórmula soma totais e depois calcula percentuais.",
    "examTip": "A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: A fórmula =10/(2+3) resulta em 2. A justificativa é: Soma do denominador ocorre primeiro.",
    "challenge": "Qual é a justificativa técnica para preferir “Registrar =3*4+2, cujo resultado é 14, respeitando multiplicação antes da soma.” em vez da alternativa “Utilizar =(3+4)*3 e registrar 14.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-005-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-005",
    "topic": "Operadores aritméticos e precedência de fórmulas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Operadores aritméticos e precedência de fórmulas: Uma coordenação quer calcular o custo de três itens a 4 reais cada, além de uma taxa fixa de 2 reais. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Digitar a operação como texto sem sinal de igualdade.",
      "Registrar =3*4+2, cujo resultado é 14, respeitando multiplicação antes da soma.",
      "Utilizar =(3+4)*3 e registrar 14.",
      "Aplicar =3*(4+2) e esperar total 14."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: Pode não ser interpretada como fórmula. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, en",
      "Correta: Registrar =3*4+2, cujo resultado é 14, respeitando multiplicação antes da soma. Fundamentação: A expressão =2+3*4 resulta em 14 porque a multiplicação ocorre antes da soma. Já =(2+3)*4 resulta em 20. Referências a células substituem números sem mudar o princípio. Parênteses definem agrupamentos; operadores de mesma precedência exigem atenção à",
      "Incorreta: Essa expressão resulta em 21, além de modelar outra situação que não corresponde ao custo pedido. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, en",
      "Incorreta: Isso multiplicaria também a taxa fixa e produziria 18. A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, en"
    ],
    "explanation": "Registrar =3*4+2, cujo resultado é 14, respeitando multiplicação antes da soma. A expressão =2+3*4 resulta em 14 porque a multiplicação ocorre antes da soma. Já =(2+3)*4 resulta em 20. Referências a células substituem números sem mudar o princípio. Parênteses definem agrupamentos; operadores de mesma precedência exigem atenção à associatividade definida pelo software. A fórmula deve começar por = no uso convencional dos editores; inserir operadores em texto não realiza cálculo. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Fórmulas de planilha seguem precedência de operadores: potências, multiplicação/divisão e soma/subtração, considerando parênteses.",
    "trap": "Um erro frequente é calcular da esquerda para a direita ignorando precedência. A dificuldade aumenta quando uma fórmula soma totais e depois calcula percentuais.",
    "examTip": "A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "challenge": "Proponha um teste simples que permita refutar “Parênteses nunca afetam resultado de fórmula.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-005-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-005",
    "topic": "Operadores aritméticos e precedência de fórmulas",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre Operadores aritméticos e precedência de fórmulas: I. Parênteses nunca afetam resultado de fórmula. II. Parênteses podem alterar a ordem de avaliação. III. A fórmula =10/(2+3) resulta em 2. Quais assertivas são corretas?",
    "options": [
      "Apenas III.",
      "Apenas II.",
      "Apenas II e III.",
      "Apenas I e II e III."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II é classificada erroneamente, porque Definem agrupamentos explícitos.",
      "Incorreta: III é classificada erroneamente, porque Soma do denominador ocorre primeiro.",
      "Correta: I: Podem mudar precedência. II: Definem agrupamentos explícitos. III: Soma do denominador ocorre primeiro.",
      "Incorreta: I é classificada erroneamente, porque Podem mudar precedência."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é falsa: Podem mudar precedência. II é verdadeira: Definem agrupamentos explícitos. III é verdadeira: Soma do denominador ocorre primeiro.",
    "concept": "Fórmulas de planilha seguem precedência de operadores: potências, multiplicação/divisão e soma/subtração, considerando parênteses.",
    "trap": "Um erro frequente é calcular da esquerda para a direita ignorando precedência. A dificuldade aumenta quando uma fórmula soma totais e depois calcula percentuais.",
    "examTip": "A multiplicação * difere do símbolo visual ×; o operador de potência é ^. A expressão =10/2+3 resulta em 8, enquanto =10/(2+3) resulta em 2.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro frequente é calcular da esquerda para a direita ignorando precedência. A dificuldade aumenta quando uma fórmula soma totais e depois calcula percentuais. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Aplicar =3*(4+2) e esperar total 14.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-006-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-006",
    "topic": "Referências relativas, absolutas e mistas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Referências relativas, absolutas e mistas: $A$1 fixa coluna e linha durante cópia.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: Ambas as dimensões têm cifrão. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: Ambas as dimensões têm cifrão. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. Ambas as dimensões têm cifrão. Detalhamento: Em Excel e Calc com referência A1, A1 é relativa, $A$1 é absoluta e $A1 fixa somente a coluna A. A$1 fixa somente a linha 1. Copiar =B2*$E$1 de C2 para C3 transforma o termo relativo B2 em B3 e mantém $E$1. A posição do cifrão controla a dimensão fixa; seu uso não é formato monetário quando está na referência. O resultado de uma cópia depende do deslocamento e de quais dimensões estão ancoradas.",
    "concept": "Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mistas fixam apenas uma dimensão.",
    "trap": "Muitas planilhas erram o percentual de imposto ao copiar fórmula e deslocar também a célula com alíquota. O travamento precisa ser escolhido conforme a orientação de cópia.",
    "examTip": "Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: $A$1 fixa coluna e linha durante cópia. Ela é sustentada por: Ambas as dimensões têm cifrão.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Referências relativas, absolutas e mistas” sem cometer o erro descrito em “$A1 fixa apenas a linha.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-006-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-006",
    "topic": "Referências relativas, absolutas e mistas",
    "type": "exceto",
    "difficulty": "media",
    "stem": "Um servidor confere regras sobre Referências relativas, absolutas e mistas. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "$A$1 fixa coluna e linha durante cópia.",
      "$A1 fixa a coluna A e permite mudar a linha.",
      "A$1 fixa a linha 1 e permite mudar a coluna.",
      "$A1 fixa apenas a linha."
    ],
    "answer": 3,
    "optionComments": [
      "Afirmação tecnicamente correta, logo não é a exceção: Ambas as dimensões têm cifrão. Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mista",
      "Afirmação tecnicamente correta, logo não é a exceção: Referência mista de coluna fixa. Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mista",
      "Afirmação tecnicamente correta, logo não é a exceção: Referência mista de linha fixa. Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mista",
      "EXCETO — esta é a única afirmação falsa: O cifrão está antes da letra, fixando a coluna. Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “$A1 fixa apenas a linha.” é falsa porque O cifrão está antes da letra, fixando a coluna. As demais são compatíveis com o tema.",
    "concept": "Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mistas fixam apenas uma dimensão.",
    "trap": "Muitas planilhas erram o percentual de imposto ao copiar fórmula e deslocar também a célula com alíquota. O travamento precisa ser escolhido conforme a orientação de cópia.",
    "examTip": "Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: A$1 fixa a linha 1 e permite mudar a coluna. A justificativa é: Referência mista de linha fixa.",
    "challenge": "Qual é a justificativa técnica para preferir “Em C2, usar =B2*$E$1; ao copiar para C3, obter =B3*$E$1.” em vez da alternativa “Escrever =B2*E1 e supor que E1 permanecerá fixa ao copiar.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-006-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-006",
    "topic": "Referências relativas, absolutas e mistas",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre Referências relativas, absolutas e mistas: I. $A1 fixa a coluna A e permite mudar a linha. II. A$1 fixa a linha 1 e permite mudar a coluna. III. Copiar =B2*$E$1 para baixo altera automaticamente $E$1 para $E$2. Quais assertivas são corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas II.",
      "Apenas I.",
      "Apenas I e II e III."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: I: Referência mista de coluna fixa. II: Referência mista de linha fixa. III: A referência absoluta permanece fixa.",
      "Incorreta: I é classificada erroneamente, porque Referência mista de coluna fixa.",
      "Incorreta: II é classificada erroneamente, porque Referência mista de linha fixa.",
      "Incorreta: III é classificada erroneamente, porque A referência absoluta permanece fixa."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: Referência mista de coluna fixa. II é verdadeira: Referência mista de linha fixa. III é falsa: A referência absoluta permanece fixa.",
    "concept": "Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mistas fixam apenas uma dimensão.",
    "trap": "Muitas planilhas erram o percentual de imposto ao copiar fórmula e deslocar também a célula com alíquota. O travamento precisa ser escolhido conforme a orientação de cópia.",
    "examTip": "Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia.",
    "challenge": "Proponha um teste simples que permita refutar “Copiar =B2*$E$1 para baixo altera automaticamente $E$1 para $E$2.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-006-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-006",
    "topic": "Referências relativas, absolutas e mistas",
    "type": "associacao",
    "difficulty": "dificil",
    "stem": "Na configuração prática descrita, Associe a Coluna I à Coluna II sobre Referências relativas, absolutas e mistas. Coluna I: I. A1. II. $A$1. III. A$1. Coluna II: 1. Referência relativa. 2. Referência absoluta. 3. Referência mista com linha fixa. Assinale a sequência de números correspondente à ordem I–III.",
    "options": [
      "3 – 2 – 1",
      "1 – 2 – 3",
      "2 – 1 – 3",
      "1 – 3 – 2"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: A1 foi associado a Referência mista com linha fixa, mas corresponde a Referência relativa; A$1 foi associado a Referência relativa, mas corresponde a Referência mista com linha fixa",
      "Correta: A1 corresponde a Referência relativa; $A$1 corresponde a Referência absoluta; A$1 corresponde a Referência mista com linha fixa",
      "Incorreta: A1 foi associado a Referência absoluta, mas corresponde a Referência relativa; $A$1 foi associado a Referência relativa, mas corresponde a Referência absoluta",
      "Incorreta: $A$1 foi associado a Referência mista com linha fixa, mas corresponde a Referência absoluta; A$1 foi associado a Referência absoluta, mas corresponde a Referência mista com linha fixa"
    ],
    "explanation": "Pareamento técnico: A1 → Referência relativa; $A$1 → Referência absoluta; A$1 → Referência mista com linha fixa. Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia.",
    "concept": "Referências relativas se ajustam ao copiar; referências absolutas fixam linha e coluna; referências mistas fixam apenas uma dimensão.",
    "trap": "Muitas planilhas erram o percentual de imposto ao copiar fórmula e deslocar também a célula com alíquota. O travamento precisa ser escolhido conforme a orientação de cópia.",
    "examTip": "Não confunda $B3 com B$3: o primeiro fixa a coluna, o segundo fixa a linha. Uma referência absoluta não impede editar o conteúdo da célula de origem; apenas impede deslocamento durante cópia.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Muitas planilhas erram o percentual de imposto ao copiar fórmula e deslocar também a célula com alíquota. O travamento precisa ser escolhido conforme a orientação de cópia. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar =B$2*E1 para copiar verticalmente todos os preços.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-007-01",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-007",
    "topic": "Salvar, abrir, importar e exportar planilhas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Salvar, abrir, importar e exportar planilhas: CSV preserva todas as abas e gráficos de qualquer pasta de trabalho.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Não armazena esse conjunto de recursos. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Não armazena esse conjunto de recursos. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Não armazena esse conjunto de recursos. Distinção aplicável: Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos.",
    "concept": "XLSX e ODS são formatos de planilha editável; CSV é um formato tabular de texto que não guarda todos os recursos de uma pasta de trabalho.",
    "trap": "É comum importar planilha CSV de matrícula e converter indevidamente matrículas para números. Também se deve conferir se o arquivo inclui apenas a aba desejada.",
    "examTip": "Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: CSV representa dados tabulares em texto. Ela é sustentada por: É um formato de intercâmbio simples.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Salvar, abrir, importar e exportar planilhas” sem cometer o erro descrito em “CSV preserva todas as abas e gráficos de qualquer pasta de trabalho.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-007-02",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-007",
    "topic": "Salvar, abrir, importar e exportar planilhas",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue os itens sobre Salvar, abrir, importar e exportar planilhas: I. O delimitador precisa ser conferido na importação CSV. II. CSV preserva todas as abas e gráficos de qualquer pasta de trabalho. III. CSV representa dados tabulares em texto. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "V – V – V",
      "F – F – V",
      "V – F – V",
      "V – F – F"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II está classificado de modo equivocado, pois Não armazena esse conjunto de recursos.",
      "Incorreta: I está classificado de modo equivocado, pois Ele define como texto será dividido em colunas.",
      "Correta: I: Ele define como texto será dividido em colunas. II: Não armazena esse conjunto de recursos. III: É um formato de intercâmbio simples.",
      "Incorreta: III está classificado de modo equivocado, pois É um formato de intercâmbio simples."
    ],
    "explanation": "Resolução item a item: I = V: Ele define como texto será dividido em colunas. II = F: Não armazena esse conjunto de recursos. III = V: É um formato de intercâmbio simples.",
    "concept": "XLSX e ODS são formatos de planilha editável; CSV é um formato tabular de texto que não guarda todos os recursos de uma pasta de trabalho.",
    "trap": "É comum importar planilha CSV de matrícula e converter indevidamente matrículas para números. Também se deve conferir se o arquivo inclui apenas a aba desejada.",
    "examTip": "Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: O delimitador precisa ser conferido na importação CSV. A justificativa é: Ele define como texto será dividido em colunas.",
    "challenge": "Qual é a justificativa técnica para preferir “Exportar os registros como CSV conforme especificação do sistema e, na importação, definir a coluna de matrícula como texto.” em vez da alternativa “Renomear arquivo .ods para .csv no gerenciador.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-007-03",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-007",
    "topic": "Salvar, abrir, importar e exportar planilhas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Salvar, abrir, importar e exportar planilhas: Um setor precisa trocar uma lista simples com outro sistema, preservando códigos de matrícula como 00045. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Importar matrículas como números por padrão sem verificar zeros.",
      "Usar CSV e esperar preservar gráficos e três abas.",
      "Renomear arquivo .ods para .csv no gerenciador.",
      "Exportar os registros como CSV conforme especificação do sistema e, na importação, definir a coluna de matrícula como texto."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: Zeros iniciais podem ser descartados. Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar exten",
      "Incorreta: CSV não representa esses recursos completos. Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar exten",
      "Incorreta: Renomeação não transforma o formato interno. Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar exten",
      "Correta: Exportar os registros como CSV conforme especificação do sistema e, na importação, definir a coluna de matrícula como texto. Fundamentação: No Excel, XLSX é formato comum de pasta de trabalho; no Calc, ODS é formato aberto nativo. CSV armazena linhas de registros e separadores textuais, mas não conserva múltiplas abas, estilos complexos ou gráficos como uma pasta XLSX/ODS. Importar CSV e"
    ],
    "explanation": "Exportar os registros como CSV conforme especificação do sistema e, na importação, definir a coluna de matrícula como texto. No Excel, XLSX é formato comum de pasta de trabalho; no Calc, ODS é formato aberto nativo. CSV armazena linhas de registros e separadores textuais, mas não conserva múltiplas abas, estilos complexos ou gráficos como uma pasta XLSX/ODS. Importar CSV exige conferir codificação, delimitador, separador decimal e colunas que contêm códigos com zeros iniciais. A exportação entre formatos pode exigir revisão de fórmulas e compatibilidade de funções. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "XLSX e ODS são formatos de planilha editável; CSV é um formato tabular de texto que não guarda todos os recursos de uma pasta de trabalho.",
    "trap": "É comum importar planilha CSV de matrícula e converter indevidamente matrículas para números. Também se deve conferir se o arquivo inclui apenas a aba desejada.",
    "examTip": "Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos.",
    "challenge": "Proponha um teste simples que permita refutar “Trocar extensão é conversão suficiente para preservar fórmulas.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-09-007-04",
    "moduleId": "INF-09",
    "subtopicId": "INF-09-007",
    "topic": "Salvar, abrir, importar e exportar planilhas",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Complete as lacunas corretamente ao documentar Salvar, abrir, importar e exportar planilhas: O recurso definido como “Pasta editável associada ao Excel” é ___; aquele definido como “Pasta editável do Calc” é ___; e o recurso definido como “Registros tabulares em texto” é ___.",
    "options": [
      "XLSX / ODS / CSV",
      "XLSX / CSV / ODS",
      "CSV / XLSX / ODS",
      "ODS / CSV / XLSX"
    ],
    "answer": 0,
    "optionComments": [
      "Correta: “Pasta editável associada ao Excel” define “XLSX”; “Pasta editável do Calc” define “ODS”; “Registros tabulares em texto” define “CSV”",
      "Incorreta: “Pasta editável do Calc” não corresponde a “CSV”, mas a “ODS”; “Registros tabulares em texto” não corresponde a “ODS”, mas a “CSV”",
      "Incorreta: “Pasta editável associada ao Excel” não corresponde a “CSV”, mas a “XLSX”; “Pasta editável do Calc” não corresponde a “XLSX”, mas a “ODS”; “Registros tabulares em texto” não corresponde a “ODS”, mas a “CSV”",
      "Incorreta: “Pasta editável associada ao Excel” não corresponde a “ODS”, mas a “XLSX”; “Pasta editável do Calc” não corresponde a “CSV”, mas a “ODS”; “Registros tabulares em texto” não corresponde a “XLSX”, mas a “CSV”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: XLSX: Pasta editável associada ao Excel; ODS: Pasta editável do Calc; CSV: Registros tabulares em texto.",
    "concept": "XLSX e ODS são formatos de planilha editável; CSV é um formato tabular de texto que não guarda todos os recursos de uma pasta de trabalho.",
    "trap": "É comum importar planilha CSV de matrícula e converter indevidamente matrículas para números. Também se deve conferir se o arquivo inclui apenas a aba desejada.",
    "examTip": "Salvar uma planilha como CSV não é o mesmo que gerar um arquivo XLSX editável com todas as abas. Alterar extensão do nome não converte dados internos.",
    "newExample": "Antes de publicar um relatório, investigue este erro: É comum importar planilha CSV de matrícula e converter indevidamente matrículas para números. Também se deve conferir se o arquivo inclui apenas a aba desejada. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar CSV e esperar preservar gráficos e três abas.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  }
];
