/** INF-ESTUDO — Fase D/Lote 2: questões autorais do INF-10. */
export const INF_10_QUESTIONS = [
  {
    "id": "Q-INF-10-001-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-001",
    "topic": "Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO: =SOMA(10;20;30) resulta em 60.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: Os três números somam sessenta. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: Os três números somam sessenta. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. Os três números somam sessenta. Detalhamento: Em Excel Microsoft 365 pt-BR e Calc em português, =SOMA(B2:B4) soma os números do intervalo. =MÉDIA(B2:B4) considera as células numéricas para calcular a média; =MÍNIMO e =MÁXIMO obtêm extremos. Para B2=10, B3=20 e B4=30, os resultados respectivos são 60, 20, 10 e 30. Uma célula vazia não equivale necessariamente a zero ao calcular média. Os intervalos têm início e fim identificados por dois pontos.",
    "concept": "SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica maior valor.",
    "trap": "Ao calcular média, não divida por número de linhas quando algumas células estão vazias ou contêm texto. Verifique se os registros são números reais, não texto importado.",
    "examTip": "SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou identificação do item, apenas valor extremo.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: =SOMA(10;20;30) resulta em 60. Ela é sustentada por: Os três números somam sessenta.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO” sem cometer o erro descrito em “MÉDIA de 10, 20 e 30 resulta em 60.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-001-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-001",
    "topic": "Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Considere as assertivas sobre Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO: I. =SOMA(10;20;30) resulta em 60. II. =MÉDIA(10;20;30) resulta em 20. III. MÉDIA de 10, 20 e 30 resulta em 60. Quais assertivas são corretas?",
    "options": [
      "Apenas II.",
      "Apenas I.",
      "Apenas I e II e III.",
      "Apenas I e II."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: I é classificada erroneamente, porque Os três números somam sessenta.",
      "Incorreta: II é classificada erroneamente, porque Sessenta dividido por três é vinte.",
      "Incorreta: III é classificada erroneamente, porque O valor 60 é a soma, não a média.",
      "Correta: I: Os três números somam sessenta. II: Sessenta dividido por três é vinte. III: O valor 60 é a soma, não a média."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: Os três números somam sessenta. II é verdadeira: Sessenta dividido por três é vinte. III é falsa: O valor 60 é a soma, não a média.",
    "concept": "SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica maior valor.",
    "trap": "Ao calcular média, não divida por número de linhas quando algumas células estão vazias ou contêm texto. Verifique se os registros são números reais, não texto importado.",
    "examTip": "SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou identificação do item, apenas valor extremo.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: =MÁXIMO(10;20;30) resulta em 30. A justificativa é: Trinta é o maior dos três.",
    "challenge": "Qual é a justificativa técnica para preferir “Usar =MÉDIA(B2:B4) para obter 20 minutos; SOMA retorna 60 e MÁXIMO retorna 30.” em vez da alternativa “Usar =SOMA(B2:B4) e informar média de 60 minutos.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-001-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-001",
    "topic": "Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "MÉDIA de 10, 20 e 30 resulta em 60.",
      "=SOMA(10;20;30) resulta em 60.",
      "=MÉDIA(10;20;30) resulta em 20.",
      "=MÁXIMO(10;20;30) resulta em 30."
    ],
    "answer": 0,
    "optionComments": [
      "EXCETO — esta é a única afirmação falsa: O valor 60 é a soma, não a média. SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não ap",
      "Afirmação tecnicamente correta, logo não é a exceção: Os três números somam sessenta. SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica ",
      "Afirmação tecnicamente correta, logo não é a exceção: Sessenta dividido por três é vinte. SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica ",
      "Afirmação tecnicamente correta, logo não é a exceção: Trinta é o maior dos três. SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica "
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “MÉDIA de 10, 20 e 30 resulta em 60.” é falsa porque O valor 60 é a soma, não a média. As demais são compatíveis com o tema.",
    "concept": "SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica maior valor.",
    "trap": "Ao calcular média, não divida por número de linhas quando algumas células estão vazias ou contêm texto. Verifique se os registros são números reais, não texto importado.",
    "examTip": "SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou identificação do item, apenas valor extremo.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou identificação do item, apenas valor extremo.",
    "challenge": "Proponha um teste simples que permita refutar “MÍNIMO de 10, 20 e 30 resulta em 30.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-001-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-001",
    "topic": "Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO: Uma secretaria registrou três tempos de atendimento de 10, 20 e 30 minutos em B2:B4. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Calcular a média somando 10+20+30 sem dividir pela contagem.",
      "Usar =MÉDIA(B2:B4) para obter 20 minutos; SOMA retorna 60 e MÁXIMO retorna 30.",
      "Usar =SOMA(B2:B4) e informar média de 60 minutos.",
      "Usar =MÍNIMO(B2:B4) para obter a maior espera."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: A média exige divisão pelo número de entradas numéricas. SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou ",
      "Correta: Usar =MÉDIA(B2:B4) para obter 20 minutos; SOMA retorna 60 e MÁXIMO retorna 30. Fundamentação: Em Excel Microsoft 365 pt-BR e Calc em português, =SOMA(B2:B4) soma os números do intervalo. =MÉDIA(B2:B4) considera as células numéricas para calcular a média; =MÍNIMO e =MÁXIMO obtêm extremos. Para B2=10, B3=20 e B4=30, os resultados respectivos sã",
      "Incorreta: SOMA agrega, não calcula média. SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou ",
      "Incorreta: MÍNIMO retorna 10, a menor espera. SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou "
    ],
    "explanation": "Usar =MÉDIA(B2:B4) para obter 20 minutos; SOMA retorna 60 e MÁXIMO retorna 30. Em Excel Microsoft 365 pt-BR e Calc em português, =SOMA(B2:B4) soma os números do intervalo. =MÉDIA(B2:B4) considera as células numéricas para calcular a média; =MÍNIMO e =MÁXIMO obtêm extremos. Para B2=10, B3=20 e B4=30, os resultados respectivos são 60, 20, 10 e 30. Uma célula vazia não equivale necessariamente a zero ao calcular média. Os intervalos têm início e fim identificados por dois pontos. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "SOMA totaliza valores, MÉDIA calcula média aritmética, MÍNIMO identifica menor valor e MÁXIMO identifica maior valor.",
    "trap": "Ao calcular média, não divida por número de linhas quando algumas células estão vazias ou contêm texto. Verifique se os registros são números reais, não texto importado.",
    "examTip": "SOMA não divide pela quantidade; MÉDIA divide pela contagem numérica. MÍNIMO/MÁXIMO não apresentam posição ou identificação do item, apenas valor extremo.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Ao calcular média, não divida por número de linhas quando algumas células estão vazias ou contêm texto. Verifique se os registros são números reais, não texto importado. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar =MÍNIMO(B2:B4) para obter a maior espera.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-002-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-002",
    "topic": "CONT.NÚM, CONT.VALORES e CONT.SE",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a CONT.NÚM, CONT.VALORES e CONT.SE: CONT.VALORES conta apenas células com números.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Inclui conteúdos textuais e outros tipos. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Inclui conteúdos textuais e outros tipos. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Inclui conteúdos textuais e outros tipos. Distinção aplicável: CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "concept": "CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a um critério.",
    "trap": "A diferença entre células vazias e células com fórmula que retorna string vazia é relevante. Ao importar dados, números armazenados como texto podem não entrar em CONT.NÚM.",
    "examTip": "CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: CONT.NÚM conta entradas numéricas no intervalo. Ela é sustentada por: Textos não são incluídos como números.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “CONT.NÚM, CONT.VALORES e CONT.SE” sem cometer o erro descrito em “CONT.VALORES conta apenas células com números.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-002-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-002",
    "topic": "CONT.NÚM, CONT.VALORES e CONT.SE",
    "type": "associacao",
    "difficulty": "media",
    "stem": "Associe a Coluna I à Coluna II sobre CONT.NÚM, CONT.VALORES e CONT.SE. Coluna I: I. CONT.NÚM. II. CONT.VALORES. III. CONT.SE. Coluna II: 1. Conta células com números. 2. Conta células não vazias. 3. Conta correspondências ao critério. Assinale a sequência de números correspondente à ordem I–III.",
    "options": [
      "1 – 3 – 2",
      "3 – 2 – 1",
      "1 – 2 – 3",
      "2 – 1 – 3"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: CONT.VALORES foi associado a Conta correspondências ao critério, mas corresponde a Conta células não vazias; CONT.SE foi associado a Conta células não vazias, mas corresponde a Conta correspondências ao critério",
      "Incorreta: CONT.NÚM foi associado a Conta correspondências ao critério, mas corresponde a Conta células com números; CONT.SE foi associado a Conta células com números, mas corresponde a Conta correspondências ao critério",
      "Correta: CONT.NÚM corresponde a Conta células com números; CONT.VALORES corresponde a Conta células não vazias; CONT.SE corresponde a Conta correspondências ao critério",
      "Incorreta: CONT.NÚM foi associado a Conta células não vazias, mas corresponde a Conta células com números; CONT.VALORES foi associado a Conta células com números, mas corresponde a Conta células não vazias"
    ],
    "explanation": "Pareamento técnico: CONT.NÚM → Conta células com números; CONT.VALORES → Conta células não vazias; CONT.SE → Conta correspondências ao critério. CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "concept": "CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a um critério.",
    "trap": "A diferença entre células vazias e células com fórmula que retorna string vazia é relevante. Ao importar dados, números armazenados como texto podem não entrar em CONT.NÚM.",
    "examTip": "CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: CONT.SE usa critério para selecionar as células a contar. A justificativa é: A condição determina o conjunto contado.",
    "challenge": "Qual é a justificativa técnica para preferir “Usar =CONT.NÚM(A1:A4), obtendo 2; para contar registros preenchidos, usar CONT.VALORES.” em vez da alternativa “Usar CONT.VALORES e afirmar que todas as três entradas são numéricas.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-002-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-002",
    "topic": "CONT.NÚM, CONT.VALORES e CONT.SE",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em CONT.NÚM, CONT.VALORES e CONT.SE: Uma equipe tem registros A1=12, A2=\"Pendente\", A3=7, A4 vazia e precisa contabilizar os dois valores numéricos. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Usar CONT.VALORES e afirmar que todas as três entradas são numéricas.",
      "Usar SOMA para contar quantas células têm números.",
      "Usar CONT.SE com critério “Pendente” para contar números.",
      "Usar =CONT.NÚM(A1:A4), obtendo 2; para contar registros preenchidos, usar CONT.VALORES."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: Uma das células contém texto. CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não prod",
      "Incorreta: SOMA acumula valores, não conta entradas. CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não prod",
      "Incorreta: Esse critério identifica a célula de texto, não números. CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não prod",
      "Correta: Usar =CONT.NÚM(A1:A4), obtendo 2; para contar registros preenchidos, usar CONT.VALORES. Fundamentação: Considere A1=12, A2=\"Pendente\", A3=7 e A4 vazia. =CONT.NÚM(A1:A4) retorna 2; =CONT.VALORES(A1:A4) retorna 3; =CONT.SE(A1:A4;\"Pendente\") retorna 1. O comportamento de fórmulas que retornam texto vazio pode exigir análise específica: a célula pode cont"
    ],
    "explanation": "Usar =CONT.NÚM(A1:A4), obtendo 2; para contar registros preenchidos, usar CONT.VALORES. Considere A1=12, A2=\"Pendente\", A3=7 e A4 vazia. =CONT.NÚM(A1:A4) retorna 2; =CONT.VALORES(A1:A4) retorna 3; =CONT.SE(A1:A4;\"Pendente\") retorna 1. O comportamento de fórmulas que retornam texto vazio pode exigir análise específica: a célula pode conter fórmula e ser contada como não vazia. Critérios textuais ficam entre aspas; a separação dos argumentos pode variar conforme as configurações regionais. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a um critério.",
    "trap": "A diferença entre células vazias e células com fórmula que retorna string vazia é relevante. Ao importar dados, números armazenados como texto podem não entrar em CONT.NÚM.",
    "examTip": "CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "challenge": "Proponha um teste simples que permita refutar “CONT.NÚM e CONT.SE retornam sempre o mesmo resultado.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-002-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-002",
    "topic": "CONT.NÚM, CONT.VALORES e CONT.SE",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre CONT.NÚM, CONT.VALORES e CONT.SE. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "CONT.VALORES conta apenas células com números.",
      "CONT.NÚM conta entradas numéricas no intervalo.",
      "CONT.VALORES conta células com conteúdo, inclusive texto.",
      "CONT.SE usa critério para selecionar as células a contar."
    ],
    "answer": 0,
    "optionComments": [
      "EXCETO — esta é a única afirmação falsa: Inclui conteúdos textuais e outros tipos. CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por u",
      "Afirmação tecnicamente correta, logo não é a exceção: Textos não são incluídos como números. CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a u",
      "Afirmação tecnicamente correta, logo não é a exceção: Não se limita a número. CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a u",
      "Afirmação tecnicamente correta, logo não é a exceção: A condição determina o conjunto contado. CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a u"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “CONT.VALORES conta apenas células com números.” é falsa porque Inclui conteúdos textuais e outros tipos. As demais são compatíveis com o tema.",
    "concept": "CONT.NÚM conta números, CONT.VALORES conta células não vazias e CONT.SE conta ocorrências que atendem a um critério.",
    "trap": "A diferença entre células vazias e células com fórmula que retorna string vazia é relevante. Ao importar dados, números armazenados como texto podem não entrar em CONT.NÚM.",
    "examTip": "CONT.NÚM não conta toda célula preenchida; CONT.VALORES inclui texto. CONT.SE filtra por um critério, não produz necessariamente soma dos valores que atendem à condição.",
    "newExample": "Antes de publicar um relatório, investigue este erro: A diferença entre células vazias e células com fórmula que retorna string vazia é relevante. Ao importar dados, números armazenados como texto podem não entrar em CONT.NÚM. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar SOMA para contar quantas células têm números.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-003-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-003",
    "topic": "SE, E, OU e condições lógicas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a SE, E, OU e condições lógicas: SE escolhe resultado conforme teste lógico.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: O teste define ramo verdadeiro ou falso. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: O teste define ramo verdadeiro ou falso. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. O teste define ramo verdadeiro ou falso. Detalhamento: Na sintaxe pt-BR =SE(B2>=60;\"Aprovado\";\"Revisar\"), a célula B2 controla o ramo escolhido. Para B2=65, o resultado é “Aprovado”. Em =E(A2>0;B2>0), o resultado é verdadeiro apenas quando ambos os critérios se confirmam. =OU(A2>0;B2>0) exige apenas um verdadeiro. É possível combinar =SE(E(...);...;...) para exigir critérios simultâneos. A disponibilidade e os separadores devem ser conferidos na versão instalada.",
    "concept": "SE retorna valores distintos conforme uma condição; E exige todas as condições verdadeiras; OU exige pelo menos uma.",
    "trap": "Erro recorrente: usar OU quando a exigência de aprovação tem de cumprir dois requisitos simultâneos. Também é comum inverter os resultados dos ramos verdadeiro e falso.",
    "examTip": "E e OU são operadores de combinação lógica, não somadores de valores numéricos. Um SE sem condição bem definida pode classificar casos incorretamente nas fronteiras, como 59,9 versus 60.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: SE escolhe resultado conforme teste lógico. Ela é sustentada por: O teste define ramo verdadeiro ou falso.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “SE, E, OU e condições lógicas” sem cometer o erro descrito em “E considera suficiente uma única condição verdadeira.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-003-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-003",
    "topic": "SE, E, OU e condições lógicas",
    "type": "lacunas",
    "difficulty": "media",
    "stem": "Complete as lacunas corretamente ao documentar SE, E, OU e condições lógicas: O recurso definido como “Escolha entre dois resultados” é ___; aquele definido como “Todas as condições verdadeiras” é ___; e o recurso definido como “Pelo menos uma condição verdadeira” é ___.",
    "options": [
      "E / OU / SE",
      "SE / E / OU",
      "SE / OU / E",
      "OU / SE / E"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: “Escolha entre dois resultados” não corresponde a “E”, mas a “SE”; “Todas as condições verdadeiras” não corresponde a “OU”, mas a “E”; “Pelo menos uma condição verdadeira” não corresponde a “SE”, mas a “OU”",
      "Correta: “Escolha entre dois resultados” define “SE”; “Todas as condições verdadeiras” define “E”; “Pelo menos uma condição verdadeira” define “OU”",
      "Incorreta: “Todas as condições verdadeiras” não corresponde a “OU”, mas a “E”; “Pelo menos uma condição verdadeira” não corresponde a “E”, mas a “OU”",
      "Incorreta: “Escolha entre dois resultados” não corresponde a “OU”, mas a “SE”; “Todas as condições verdadeiras” não corresponde a “SE”, mas a “E”; “Pelo menos uma condição verdadeira” não corresponde a “E”, mas a “OU”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: SE: Escolha entre dois resultados; E: Todas as condições verdadeiras; OU: Pelo menos uma condição verdadeira.",
    "concept": "SE retorna valores distintos conforme uma condição; E exige todas as condições verdadeiras; OU exige pelo menos uma.",
    "trap": "Erro recorrente: usar OU quando a exigência de aprovação tem de cumprir dois requisitos simultâneos. Também é comum inverter os resultados dos ramos verdadeiro e falso.",
    "examTip": "E e OU são operadores de combinação lógica, não somadores de valores numéricos. Um SE sem condição bem definida pode classificar casos incorretamente nas fronteiras, como 59,9 versus 60.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: OU devolve verdadeiro se alguma condição for verdadeira. A justificativa é: É disjunção inclusiva.",
    "challenge": "Qual é a justificativa técnica para preferir “Usar =SE(E(B2=\"Completa\";C2>=75);\"Elegível\";\"Não elegível\") para exigir ambas as condições.” em vez da alternativa “Usar OU quando os dois requisitos são obrigatórios.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-003-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-003",
    "topic": "SE, E, OU e condições lógicas",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Analise uma situação de auditoria de conceitos de SE, E, OU e condições lógicas: I. OU devolve verdadeiro se alguma condição for verdadeira. II. E devolve verdadeiro somente se todas as condições forem verdadeiras. III. SE sempre devolve o mesmo valor independentemente do teste. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "V – F – F",
      "F – V – F",
      "V – V – F",
      "V – V – V"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II está classificado de modo equivocado, pois É conjunção lógica.",
      "Incorreta: I está classificado de modo equivocado, pois É disjunção inclusiva.",
      "Correta: I: É disjunção inclusiva. II: É conjunção lógica. III: O retorno depende da condição.",
      "Incorreta: III está classificado de modo equivocado, pois O retorno depende da condição."
    ],
    "explanation": "Resolução item a item: I = V: É disjunção inclusiva. II = V: É conjunção lógica. III = F: O retorno depende da condição.",
    "concept": "SE retorna valores distintos conforme uma condição; E exige todas as condições verdadeiras; OU exige pelo menos uma.",
    "trap": "Erro recorrente: usar OU quando a exigência de aprovação tem de cumprir dois requisitos simultâneos. Também é comum inverter os resultados dos ramos verdadeiro e falso.",
    "examTip": "E e OU são operadores de combinação lógica, não somadores de valores numéricos. Um SE sem condição bem definida pode classificar casos incorretamente nas fronteiras, como 59,9 versus 60.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: E e OU são operadores de combinação lógica, não somadores de valores numéricos. Um SE sem condição bem definida pode classificar casos incorretamente nas fronteiras, como 59,9 versus 60.",
    "challenge": "Proponha um teste simples que permita refutar “SE sempre devolve o mesmo valor independentemente do teste.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-003-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-003",
    "topic": "SE, E, OU e condições lógicas",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre SE, E, OU e condições lógicas: I. E devolve verdadeiro somente se todas as condições forem verdadeiras. II. OU devolve verdadeiro se alguma condição for verdadeira. III. SE sempre devolve o mesmo valor independentemente do teste. Quais assertivas são corretas?",
    "options": [
      "Apenas I e II e III.",
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: III é classificada erroneamente, porque O retorno depende da condição.",
      "Incorreta: II é classificada erroneamente, porque É disjunção inclusiva.",
      "Incorreta: I é classificada erroneamente, porque É conjunção lógica.",
      "Correta: I: É conjunção lógica. II: É disjunção inclusiva. III: O retorno depende da condição."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: É conjunção lógica. II é verdadeira: É disjunção inclusiva. III é falsa: O retorno depende da condição.",
    "concept": "SE retorna valores distintos conforme uma condição; E exige todas as condições verdadeiras; OU exige pelo menos uma.",
    "trap": "Erro recorrente: usar OU quando a exigência de aprovação tem de cumprir dois requisitos simultâneos. Também é comum inverter os resultados dos ramos verdadeiro e falso.",
    "examTip": "E e OU são operadores de combinação lógica, não somadores de valores numéricos. Um SE sem condição bem definida pode classificar casos incorretamente nas fronteiras, como 59,9 versus 60.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Erro recorrente: usar OU quando a exigência de aprovação tem de cumprir dois requisitos simultâneos. Também é comum inverter os resultados dos ramos verdadeiro e falso. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar =SE(B2=\"Completa\";\"Elegível\";\"Não elegível\") ignorando participação.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-004-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-004",
    "topic": "SOMASE, MÉDIASE e critérios simples",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a SOMASE, MÉDIASE e critérios simples: CONT.SE soma a coluna de gastos do setor selecionado.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Conta ocorrências, não valores agregados. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Conta ocorrências, não valores agregados. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Conta ocorrências, não valores agregados. Distinção aplicável: CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "concept": "SOMASE soma valores associados a um critério; MÉDIASE calcula média dos valores que satisfazem a seleção.",
    "trap": "Um erro é somar valores de outra coluna deslocada em uma linha. Se o critério não selecionar nenhum número, MÉDIASE pode retornar erro em vez de zero.",
    "examTip": "CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: SOMASE agrega valores de linhas que atendem ao critério. Ela é sustentada por: Usa seleção por condição.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “SOMASE, MÉDIASE e critérios simples” sem cometer o erro descrito em “CONT.SE soma a coluna de gastos do setor selecionado.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-004-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-004",
    "topic": "SOMASE, MÉDIASE e critérios simples",
    "type": "classica",
    "difficulty": "media",
    "stem": "Em uma preparação de treinamento sobre SOMASE, MÉDIASE e critérios simples, qual afirmação pode ser adotada sem contrariar os conceitos do tema?",
    "options": [
      "SOMASE agrega valores de linhas que atendem ao critério.",
      "CONT.SE soma a coluna de gastos do setor selecionado.",
      "SOMASE ignora inteiramente o critério fornecido.",
      "Usar CONT.SE e apresentar 2 como total de gastos em reais."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Usa seleção por condição. SOMASE soma valores associados a um critério; MÉDIASE calcula média dos valores que satisfazem a seleção.",
      "Incorreta: Conta ocorrências, não valores agregados. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e ",
      "Incorreta: O critério determina linhas incluídas. Considere A2:A4 com setores RH, TI, RH e B2:B4 com valores 10, 20, 30. =SOMASE(A2:A4;\"RH\";B2:B4) produz 40, somando",
      "Incorreta: A função conta registros, não soma despesas. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e "
    ],
    "explanation": "SOMASE agrega valores de linhas que atendem ao critério. Usa seleção por condição. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "concept": "SOMASE soma valores associados a um critério; MÉDIASE calcula média dos valores que satisfazem a seleção.",
    "trap": "Um erro é somar valores de outra coluna deslocada em uma linha. Se o critério não selecionar nenhum número, MÉDIASE pode retornar erro em vez de zero.",
    "examTip": "CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: O critério textual pode ser colocado entre aspas na fórmula. A justificativa é: Define uma condição como “RH”.",
    "challenge": "Qual é a justificativa técnica para preferir “Aplicar =SOMASE(A2:A4;\"RH\";B2:B4), obtendo 40; a média correspondente é 20.” em vez da alternativa “Usar CONT.SE e apresentar 2 como total de gastos em reais.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-004-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-004",
    "topic": "SOMASE, MÉDIASE e critérios simples",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em SOMASE, MÉDIASE e critérios simples: Uma planilha tem setores RH, TI, RH em A2:A4 e gastos de 10, 20, 30 em B2:B4. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Usar MÉDIA(B2:B4) e afirmar que isso filtra apenas RH.",
      "Aplicar =SOMASE(A2:A4;\"RH\";B2:B4), obtendo 40; a média correspondente é 20.",
      "Usar CONT.SE e apresentar 2 como total de gastos em reais.",
      "Usar SOMA(B2:B4) e apresentar 60 como gasto do RH."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: Calcula a média de todas as linhas numéricas. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleç",
      "Correta: Aplicar =SOMASE(A2:A4;\"RH\";B2:B4), obtendo 40; a média correspondente é 20. Fundamentação: Considere A2:A4 com setores RH, TI, RH e B2:B4 com valores 10, 20, 30. =SOMASE(A2:A4;\"RH\";B2:B4) produz 40, somando as linhas RH. =MÉDIASE(A2:A4;\"RH\";B2:B4) produz 20. O intervalo de critério identifica linhas; o intervalo de soma/média fornece os va",
      "Incorreta: A função conta registros, não soma despesas. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleç",
      "Incorreta: Inclui a linha do setor TI. CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleç"
    ],
    "explanation": "Aplicar =SOMASE(A2:A4;\"RH\";B2:B4), obtendo 40; a média correspondente é 20. Considere A2:A4 com setores RH, TI, RH e B2:B4 com valores 10, 20, 30. =SOMASE(A2:A4;\"RH\";B2:B4) produz 40, somando as linhas RH. =MÉDIASE(A2:A4;\"RH\";B2:B4) produz 20. O intervalo de critério identifica linhas; o intervalo de soma/média fornece os valores. É importante alinhar as posições correspondentes e conferir o tamanho dos intervalos na versão utilizada. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "SOMASE soma valores associados a um critério; MÉDIASE calcula média dos valores que satisfazem a seleção.",
    "trap": "Um erro é somar valores de outra coluna deslocada em uma linha. Se o critério não selecionar nenhum número, MÉDIASE pode retornar erro em vez de zero.",
    "examTip": "CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "challenge": "Proponha um teste simples que permita refutar “SOMASE ignora inteiramente o critério fornecido.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-004-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-004",
    "topic": "SOMASE, MÉDIASE e critérios simples",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre SOMASE, MÉDIASE e critérios simples: I. SOMASE ignora inteiramente o critério fornecido. II. MÉDIASE calcula média dos valores selecionados. III. O critério textual pode ser colocado entre aspas na fórmula. Quais assertivas são corretas?",
    "options": [
      "Apenas III.",
      "Apenas II.",
      "Apenas II e III.",
      "Apenas I e II e III."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II é classificada erroneamente, porque Divide a soma pela contagem pertinente.",
      "Incorreta: III é classificada erroneamente, porque Define uma condição como “RH”.",
      "Correta: I: O critério determina linhas incluídas. II: Divide a soma pela contagem pertinente. III: Define uma condição como “RH”.",
      "Incorreta: I é classificada erroneamente, porque O critério determina linhas incluídas."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é falsa: O critério determina linhas incluídas. II é verdadeira: Divide a soma pela contagem pertinente. III é verdadeira: Define uma condição como “RH”.",
    "concept": "SOMASE soma valores associados a um critério; MÉDIASE calcula média dos valores que satisfazem a seleção.",
    "trap": "Um erro é somar valores de outra coluna deslocada em uma linha. Se o critério não selecionar nenhum número, MÉDIASE pode retornar erro em vez de zero.",
    "examTip": "CONT.SE contabilizaria registros RH (2), mas não somaria seus valores. SOMASE e MÉDIASE utilizam a mesma seleção e agregações distintas.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro é somar valores de outra coluna deslocada em uma linha. Se o critério não selecionar nenhum número, MÉDIASE pode retornar erro em vez de zero. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar SOMA(B2:B4) e apresentar 60 como gasto do RH.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-005-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-005",
    "topic": "PROCV, PROCX e pesquisa de informações (quando disponíveis)",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a PROCV, PROCX e pesquisa de informações (quando disponíveis): PROCV pesquisa na primeira coluna do intervalo informado.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: É limitação estrutural desse método. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: É limitação estrutural desse método. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. É limitação estrutural desse método. Detalhamento: No Excel Microsoft 365, =PROCV(E2;A2:C10;3;FALSO) busca E2 na primeira coluna A e retorna a terceira coluna do intervalo na linha exata correspondente. =PROCX(E2;A2:A10;C2:C10;\"Não encontrado\") busca E2 em A e retorna o valor de C. PROCX pode consultar valores à esquerda ou à direita, conforme as matrizes. PROCX não está disponível em todas as versões antigas do Excel e foi introduzida no LibreOffice Calc 24.8; é preciso identificar versão e idioma da função.",
    "concept": "PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrizes de busca e retorno independentes.",
    "trap": "Um erro é omitir FALSO ao procurar códigos e interpretar a correspondência aproximada como exata. Outro é assumir PROCX em um Excel 2016 sem verificar suporte.",
    "examTip": "PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: PROCV pesquisa na primeira coluna do intervalo informado. Ela é sustentada por: É limitação estrutural desse método.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “PROCV, PROCX e pesquisa de informações (quando disponíveis)” sem cometer o erro descrito em “PROCV devolve automaticamente valores à esquerda da primeira coluna de pesquisa.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-005-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-005",
    "topic": "PROCV, PROCX e pesquisa de informações (quando disponíveis)",
    "type": "exceto",
    "difficulty": "media",
    "stem": "Um servidor confere regras sobre PROCV, PROCX e pesquisa de informações (quando disponíveis). Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "PROCV pesquisa na primeira coluna do intervalo informado.",
      "PROCX tem matrizes separadas para busca e retorno.",
      "No Calc, PROCX está documentada a partir da versão 24.8.",
      "PROCX está presente sem restrição em todo Excel desde 2010."
    ],
    "answer": 3,
    "optionComments": [
      "Afirmação tecnicamente correta, logo não é a exceção: É limitação estrutural desse método. PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrize",
      "Afirmação tecnicamente correta, logo não é a exceção: Permite maior flexibilidade. PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrize",
      "Afirmação tecnicamente correta, logo não é a exceção: A disponibilidade depende da versão. PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrize",
      "EXCETO — esta é a única afirmação falsa: Versões antigas não oferecem suporte nativo universal. PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de p"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “PROCX está presente sem restrição em todo Excel desde 2010.” é falsa porque Versões antigas não oferecem suporte nativo universal. As demais são compatíveis com o tema.",
    "concept": "PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrizes de busca e retorno independentes.",
    "trap": "Um erro é omitir FALSO ao procurar códigos e interpretar a correspondência aproximada como exata. Outro é assumir PROCX em um Excel 2016 sem verificar suporte.",
    "examTip": "PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: No Calc, PROCX está documentada a partir da versão 24.8. A justificativa é: A disponibilidade depende da versão.",
    "challenge": "Qual é a justificativa técnica para preferir “Usar PROCV com correspondência exata ou PROCX em versão compatível, com matrizes alinhadas.” em vez da alternativa “Omitir o argumento de correspondência exata no PROCV sem conferir ordenação.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-005-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-005",
    "topic": "PROCV, PROCX e pesquisa de informações (quando disponíveis)",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre PROCV, PROCX e pesquisa de informações (quando disponíveis): I. PROCX tem matrizes separadas para busca e retorno. II. No Calc, PROCX está documentada a partir da versão 24.8. III. PROCX está presente sem restrição em todo Excel desde 2010. Quais assertivas são corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas II.",
      "Apenas I.",
      "Apenas I e II e III."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: I: Permite maior flexibilidade. II: A disponibilidade depende da versão. III: Versões antigas não oferecem suporte nativo universal.",
      "Incorreta: I é classificada erroneamente, porque Permite maior flexibilidade.",
      "Incorreta: II é classificada erroneamente, porque A disponibilidade depende da versão.",
      "Incorreta: III é classificada erroneamente, porque Versões antigas não oferecem suporte nativo universal."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: Permite maior flexibilidade. II é verdadeira: A disponibilidade depende da versão. III é falsa: Versões antigas não oferecem suporte nativo universal.",
    "concept": "PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrizes de busca e retorno independentes.",
    "trap": "Um erro é omitir FALSO ao procurar códigos e interpretar a correspondência aproximada como exata. Outro é assumir PROCX em um Excel 2016 sem verificar suporte.",
    "examTip": "PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão.",
    "challenge": "Proponha um teste simples que permita refutar “PROCX está presente sem restrição em todo Excel desde 2010.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-005-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-005",
    "topic": "PROCV, PROCX e pesquisa de informações (quando disponíveis)",
    "type": "associacao",
    "difficulty": "dificil",
    "stem": "Na configuração prática descrita, Associe a Coluna I à Coluna II sobre PROCV, PROCX e pesquisa de informações (quando disponíveis). Coluna I: I. PROCV. II. PROCX. III. FALSO no PROCV. Coluna II: 1. Busca vertical com coluna inicial. 2. Busca por matrizes independentes. 3. Solicita correspondência exata. Assinale a sequência de números correspondente à ordem I–III.",
    "options": [
      "3 – 2 – 1",
      "1 – 2 – 3",
      "2 – 1 – 3",
      "1 – 3 – 2"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: PROCV foi associado a Solicita correspondência exata, mas corresponde a Busca vertical com coluna inicial; FALSO no PROCV foi associado a Busca vertical com coluna inicial, mas corresponde a Solicita correspondência exata",
      "Correta: PROCV corresponde a Busca vertical com coluna inicial; PROCX corresponde a Busca por matrizes independentes; FALSO no PROCV corresponde a Solicita correspondência exata",
      "Incorreta: PROCV foi associado a Busca por matrizes independentes, mas corresponde a Busca vertical com coluna inicial; PROCX foi associado a Busca vertical com coluna inicial, mas corresponde a Busca por matrizes independentes",
      "Incorreta: PROCX foi associado a Solicita correspondência exata, mas corresponde a Busca por matrizes independentes; FALSO no PROCV foi associado a Busca por matrizes independentes, mas corresponde a Solicita correspondência exata"
    ],
    "explanation": "Pareamento técnico: PROCV → Busca vertical com coluna inicial; PROCX → Busca por matrizes independentes; FALSO no PROCV → Solicita correspondência exata. PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão.",
    "concept": "PROCV procura na primeira coluna do intervalo escolhido e retorna uma coluna à direita; PROCX usa matrizes de busca e retorno independentes.",
    "trap": "Um erro é omitir FALSO ao procurar códigos e interpretar a correspondência aproximada como exata. Outro é assumir PROCX em um Excel 2016 sem verificar suporte.",
    "examTip": "PROCV não permite procurar automaticamente em qualquer coluna do intervalo; seu valor de pesquisa deve estar na primeira coluna. Correspondência exata deve ser solicitada corretamente no PROCV, em vez de aceitar busca aproximada por padrão.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro é omitir FALSO ao procurar códigos e interpretar a correspondência aproximada como exata. Outro é assumir PROCX em um Excel 2016 sem verificar suporte. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar PROCV para procurar em C e devolver A sem reestruturar a tabela.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-006-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-006",
    "topic": "Funções de texto, data e arredondamento",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Funções de texto, data e arredondamento: DIREITA extrai caracteres do início do texto.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Extrai do final. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Extrai do final. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Extrai do final. Distinção aplicável: O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável.",
    "concept": "Funções de texto manipulam cadeias; funções de data tratam calendário; funções de arredondamento ajustam números efetivamente.",
    "trap": "Uma armadilha é usar ESQUERDA para extrair últimos caracteres de código, ou considerar HOJE() uma data fixa digitada. Revise o tratamento de matrículas e dados pessoais.",
    "examTip": "O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: ESQUERDA extrai caracteres iniciais. Ela é sustentada por: Começa no início da cadeia.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Funções de texto, data e arredondamento” sem cometer o erro descrito em “DIREITA extrai caracteres do início do texto.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-006-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-006",
    "topic": "Funções de texto, data e arredondamento",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue os itens sobre Funções de texto, data e arredondamento: I. ARRED pode alterar o resultado numérico efetivo. II. DIREITA extrai caracteres do início do texto. III. ESQUERDA extrai caracteres iniciais. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "V – V – V",
      "F – F – V",
      "V – F – V",
      "V – F – F"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II está classificado de modo equivocado, pois Extrai do final.",
      "Incorreta: I está classificado de modo equivocado, pois A operação calcula arredondamento.",
      "Correta: I: A operação calcula arredondamento. II: Extrai do final. III: Começa no início da cadeia.",
      "Incorreta: III está classificado de modo equivocado, pois Começa no início da cadeia."
    ],
    "explanation": "Resolução item a item: I = V: A operação calcula arredondamento. II = F: Extrai do final. III = V: Começa no início da cadeia.",
    "concept": "Funções de texto manipulam cadeias; funções de data tratam calendário; funções de arredondamento ajustam números efetivamente.",
    "trap": "Uma armadilha é usar ESQUERDA para extrair últimos caracteres de código, ou considerar HOJE() uma data fixa digitada. Revise o tratamento de matrículas e dados pessoais.",
    "examTip": "O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: ARRED pode alterar o resultado numérico efetivo. A justificativa é: A operação calcula arredondamento.",
    "challenge": "Qual é a justificativa técnica para preferir “Usar =ESQUERDA(A2;3) para obter “PRO” em A2=\"PROTOCOLO\", sem modificar o texto original.” em vez da alternativa “Usar DIREITA(A2;3) para obter o prefixo “PRO”.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-006-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-006",
    "topic": "Funções de texto, data e arredondamento",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Funções de texto, data e arredondamento: Um setor armazena códigos PROTOCOLO e precisa obter os três caracteres iniciais de cada um. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Usar HOJE() para extrair os primeiros caracteres do código.",
      "Alterar apenas o formato de exibição e assumir que o texto foi recortado.",
      "Usar DIREITA(A2;3) para obter o prefixo “PRO”.",
      "Usar =ESQUERDA(A2;3) para obter “PRO” em A2=\"PROTOCOLO\", sem modificar o texto original."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: HOJE devolve uma data, não parte do texto. O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 ",
      "Incorreta: Formatação não altera o conteúdo da cadeia. O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 ",
      "Incorreta: DIREITA extrai os caracteres finais. O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 ",
      "Correta: Usar =ESQUERDA(A2;3) para obter “PRO” em A2=\"PROTOCOLO\", sem modificar o texto original. Fundamentação: Em Excel pt-BR, =ESQUERDA(\"PROTOCOLO\";3) retorna \"PRO\", e =DIREITA(\"PROTOCOLO\";4) retorna \"COLO\". =HOJE() fornece a data atual do sistema e pode ser recalculada; =ARRED(12,345;2) retorna 12,35 no padrão decimal pt-BR. Arredondar numericamente difere "
    ],
    "explanation": "Usar =ESQUERDA(A2;3) para obter “PRO” em A2=\"PROTOCOLO\", sem modificar o texto original. Em Excel pt-BR, =ESQUERDA(\"PROTOCOLO\";3) retorna \"PRO\", e =DIREITA(\"PROTOCOLO\";4) retorna \"COLO\". =HOJE() fornece a data atual do sistema e pode ser recalculada; =ARRED(12,345;2) retorna 12,35 no padrão decimal pt-BR. Arredondar numericamente difere de mostrar menos casas decimais pelo formato da célula. Funções podem ter nomes localizados, e as configurações regionais influenciam separadores e exibição. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Funções de texto manipulam cadeias; funções de data tratam calendário; funções de arredondamento ajustam números efetivamente.",
    "trap": "Uma armadilha é usar ESQUERDA para extrair últimos caracteres de código, ou considerar HOJE() uma data fixa digitada. Revise o tratamento de matrículas e dados pessoais.",
    "examTip": "O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável.",
    "challenge": "Proponha um teste simples que permita refutar “ARRED altera somente a aparência visual sem mudar cálculo.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-006-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-006",
    "topic": "Funções de texto, data e arredondamento",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Complete as lacunas corretamente ao documentar Funções de texto, data e arredondamento: O recurso definido como “Extrai início de texto” é ___; aquele definido como “Fornece data corrente” é ___; e o recurso definido como “Arredonda valor numérico” é ___.",
    "options": [
      "ESQUERDA / HOJE / ARRED",
      "ESQUERDA / ARRED / HOJE",
      "ARRED / ESQUERDA / HOJE",
      "HOJE / ARRED / ESQUERDA"
    ],
    "answer": 0,
    "optionComments": [
      "Correta: “Extrai início de texto” define “ESQUERDA”; “Fornece data corrente” define “HOJE”; “Arredonda valor numérico” define “ARRED”",
      "Incorreta: “Fornece data corrente” não corresponde a “ARRED”, mas a “HOJE”; “Arredonda valor numérico” não corresponde a “HOJE”, mas a “ARRED”",
      "Incorreta: “Extrai início de texto” não corresponde a “ARRED”, mas a “ESQUERDA”; “Fornece data corrente” não corresponde a “ESQUERDA”, mas a “HOJE”; “Arredonda valor numérico” não corresponde a “HOJE”, mas a “ARRED”",
      "Incorreta: “Extrai início de texto” não corresponde a “HOJE”, mas a “ESQUERDA”; “Fornece data corrente” não corresponde a “ARRED”, mas a “HOJE”; “Arredonda valor numérico” não corresponde a “ESQUERDA”, mas a “ARRED”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: ESQUERDA: Extrai início de texto; HOJE: Fornece data corrente; ARRED: Arredonda valor numérico.",
    "concept": "Funções de texto manipulam cadeias; funções de data tratam calendário; funções de arredondamento ajustam números efetivamente.",
    "trap": "Uma armadilha é usar ESQUERDA para extrair últimos caracteres de código, ou considerar HOJE() uma data fixa digitada. Revise o tratamento de matrículas e dados pessoais.",
    "examTip": "O valor 12,345 exibido com duas casas pode aparecer 12,35, mas uma fórmula subsequente pode ainda usar 12,345 se o valor não foi arredondado pela função. Texto tratado como data não vira automaticamente data calculável.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Uma armadilha é usar ESQUERDA para extrair últimos caracteres de código, ou considerar HOJE() uma data fixa digitada. Revise o tratamento de matrículas e dados pessoais. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Alterar apenas o formato de exibição e assumir que o texto foi recortado.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-007-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-007",
    "topic": "Erros de fórmulas, referências e precedência",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Erros de fórmulas, referências e precedência: #REF! indica referência inválida.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: Pode ocorrer após remover células referenciadas. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: Pode ocorrer após remover células referenciadas. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. Pode ocorrer após remover células referenciadas. Detalhamento: Em planilhas, dividir um número por zero costuma produzir indicação de divisão por zero; usar referência a célula eliminada pode resultar em erro de referência como #REF!. Um nome de função não reconhecido pode produzir erro de nome, com grafia e nomenclatura dependentes da suíte e idioma. #VALOR! pode surgir de tipos de dados incompatíveis. Para diagnosticar, examine fórmula, referências, precedência e tipo interno de cada célula. Não esconda mensagens de erro sem investigar a origem.",
    "concept": "Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nomes de funções inválidos.",
    "trap": "Um erro operacional é substituir #REF! por zero manualmente, o que esconde a fórmula quebrada e produz relatório enganoso. Primeiro identifique qual referência desapareceu.",
    "examTip": "Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado matemático inesperado mesmo sem qualquer mensagem de erro.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: #REF! indica referência inválida. Ela é sustentada por: Pode ocorrer após remover células referenciadas.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Erros de fórmulas, referências e precedência” sem cometer o erro descrito em “#REF! confirma que a função calculou corretamente.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-007-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-007",
    "topic": "Erros de fórmulas, referências e precedência",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Considere as assertivas sobre Erros de fórmulas, referências e precedência: I. #REF! indica referência inválida. II. Divisão por zero produz erro em vez de quociente numérico normal. III. #REF! confirma que a função calculou corretamente. Quais assertivas são corretas?",
    "options": [
      "Apenas I e II e III.",
      "Apenas I e II.",
      "Apenas II.",
      "Apenas I."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: III é classificada erroneamente, porque Indica falha de referência.",
      "Correta: I: Pode ocorrer após remover células referenciadas. II: A operação é indefinida. III: Indica falha de referência.",
      "Incorreta: I é classificada erroneamente, porque Pode ocorrer após remover células referenciadas.",
      "Incorreta: II é classificada erroneamente, porque A operação é indefinida."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: Pode ocorrer após remover células referenciadas. II é verdadeira: A operação é indefinida. III é falsa: Indica falha de referência.",
    "concept": "Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nomes de funções inválidos.",
    "trap": "Um erro operacional é substituir #REF! por zero manualmente, o que esconde a fórmula quebrada e produz relatório enganoso. Primeiro identifique qual referência desapareceu.",
    "examTip": "Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado matemático inesperado mesmo sem qualquer mensagem de erro.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Fórmulas com tipo incompatível podem gerar erro de valor. A justificativa é: Operações exigem tipos esperados.",
    "challenge": "Qual é a justificativa técnica para preferir “Inspecionar e reparar as referências destruídas pela exclusão, validando o resultado com os dados originais.” em vez da alternativa “Substituir a mensagem #REF! por 0 em todas as linhas sem revisão.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-007-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-007",
    "topic": "Erros de fórmulas, referências e precedência",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Erros de fórmulas, referências e precedência. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "Divisão por zero produz erro em vez de quociente numérico normal.",
      "Fórmulas com tipo incompatível podem gerar erro de valor.",
      "Qualquer erro em fórmula é resolvido mudando a fonte da célula.",
      "#REF! indica referência inválida."
    ],
    "answer": 2,
    "optionComments": [
      "Afirmação tecnicamente correta, logo não é a exceção: A operação é indefinida. Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nom",
      "Afirmação tecnicamente correta, logo não é a exceção: Operações exigem tipos esperados. Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nom",
      "EXCETO — esta é a única afirmação falsa: Formatação não corrige sintaxe ou dados. Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pod",
      "Afirmação tecnicamente correta, logo não é a exceção: Pode ocorrer após remover células referenciadas. Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nom"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “Qualquer erro em fórmula é resolvido mudando a fonte da célula.” é falsa porque Formatação não corrige sintaxe ou dados. As demais são compatíveis com o tema.",
    "concept": "Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nomes de funções inválidos.",
    "trap": "Um erro operacional é substituir #REF! por zero manualmente, o que esconde a fórmula quebrada e produz relatório enganoso. Primeiro identifique qual referência desapareceu.",
    "examTip": "Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado matemático inesperado mesmo sem qualquer mensagem de erro.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado matemático inesperado mesmo sem qualquer mensagem de erro.",
    "challenge": "Proponha um teste simples que permita refutar “Qualquer erro em fórmula é resolvido mudando a fonte da célula.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-007-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-007",
    "topic": "Erros de fórmulas, referências e precedência",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Erros de fórmulas, referências e precedência: Após excluir uma coluna, uma fórmula do relatório exibe #REF! e deixa de calcular total. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Substituir a mensagem #REF! por 0 em todas as linhas sem revisão.",
      "Interpretar #REF! como prova de divisão por zero.",
      "Alterar apenas a cor da célula com erro.",
      "Inspecionar e reparar as referências destruídas pela exclusão, validando o resultado com os dados originais."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: Isso mascara problema e compromete totalização. Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado ma",
      "Incorreta: O código sinaliza referência inválida, não zero no divisor. Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado ma",
      "Incorreta: Formatação não repara a referência. Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado ma",
      "Correta: Inspecionar e reparar as referências destruídas pela exclusão, validando o resultado com os dados originais. Fundamentação: Em planilhas, dividir um número por zero costuma produzir indicação de divisão por zero; usar referência a célula eliminada pode resultar em erro de referência como #REF!. Um nome de função não reconhecido pode produzir erro de nome, com grafia e nom"
    ],
    "explanation": "Inspecionar e reparar as referências destruídas pela exclusão, validando o resultado com os dados originais. Em planilhas, dividir um número por zero costuma produzir indicação de divisão por zero; usar referência a célula eliminada pode resultar em erro de referência como #REF!. Um nome de função não reconhecido pode produzir erro de nome, com grafia e nomenclatura dependentes da suíte e idioma. #VALOR! pode surgir de tipos de dados incompatíveis. Para diagnosticar, examine fórmula, referências, precedência e tipo interno de cada célula. Não esconda mensagens de erro sem investigar a origem. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Erros de fórmula podem surgir por referências inexistentes, tipos incompatíveis, divisões por zero ou nomes de funções inválidos.",
    "trap": "Um erro operacional é substituir #REF! por zero manualmente, o que esconde a fórmula quebrada e produz relatório enganoso. Primeiro identifique qual referência desapareceu.",
    "examTip": "Erro na referência não é o mesmo que erro de valor ou de divisão por zero. Precedência pode gerar resultado matemático inesperado mesmo sem qualquer mensagem de erro.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro operacional é substituir #REF! por zero manualmente, o que esconde a fórmula quebrada e produz relatório enganoso. Primeiro identifique qual referência desapareceu. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Interpretar #REF! como prova de divisão por zero.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-008-01",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-008",
    "topic": "Diferenças de sintaxe e separadores entre versões e suítes",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Diferenças de sintaxe e separadores entre versões e suítes: Todo Calc e todo Excel usam necessariamente separadores e nomes iguais.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Há diferenças de idioma e configuração. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Há diferenças de idioma e configuração. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Há diferenças de idioma e configuração. Distinção aplicável: Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "concept": "Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configurações do editor.",
    "trap": "Copiar uma fórmula textual de tutorial estrangeiro pode causar erro de nome ou de separador, mesmo quando a ideia matemática está correta. Ajuste a sintaxe sem mudar a condição lógica.",
    "examTip": "Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: A sintaxe de fórmulas pode variar com idioma e configuração. Ela é sustentada por: Nomes e separadores podem ser localizados.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Diferenças de sintaxe e separadores entre versões e suítes” sem cometer o erro descrito em “Todo Calc e todo Excel usam necessariamente separadores e nomes iguais.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-008-02",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-008",
    "topic": "Diferenças de sintaxe e separadores entre versões e suítes",
    "type": "associacao",
    "difficulty": "media",
    "stem": "Associe a Coluna I à Coluna II sobre Diferenças de sintaxe e separadores entre versões e suítes. Coluna I: I. Separador de argumentos. II. Separador decimal. III. Idioma da função. Coluna II: 1. Delimita parâmetros de função. 2. Distingue parte inteira e fracionária. 3. Determina nome localizado do comando. Assinale a sequência de números correspondente à ordem I–III.",
    "options": [
      "1 – 2 – 3",
      "2 – 1 – 3",
      "1 – 3 – 2",
      "3 – 2 – 1"
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Separador de argumentos corresponde a Delimita parâmetros de função; Separador decimal corresponde a Distingue parte inteira e fracionária; Idioma da função corresponde a Determina nome localizado do comando",
      "Incorreta: Separador de argumentos foi associado a Distingue parte inteira e fracionária, mas corresponde a Delimita parâmetros de função; Separador decimal foi associado a Delimita parâmetros de função, mas corresponde a Distingue parte inteira e fracionária",
      "Incorreta: Separador decimal foi associado a Determina nome localizado do comando, mas corresponde a Distingue parte inteira e fracionária; Idioma da função foi associado a Distingue parte inteira e fracionária, mas corresponde a Determina nome localizado do comando",
      "Incorreta: Separador de argumentos foi associado a Determina nome localizado do comando, mas corresponde a Delimita parâmetros de função; Idioma da função foi associado a Delimita parâmetros de função, mas corresponde a Determina nome localizado do comando"
    ],
    "explanation": "Pareamento técnico: Separador de argumentos → Delimita parâmetros de função; Separador decimal → Distingue parte inteira e fracionária; Idioma da função → Determina nome localizado do comando. Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "concept": "Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configurações do editor.",
    "trap": "Copiar uma fórmula textual de tutorial estrangeiro pode causar erro de nome ou de separador, mesmo quando a ideia matemática está correta. Ajuste a sintaxe sem mudar a condição lógica.",
    "examTip": "Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: A lógica matemática deve ser preservada ao traduzir sintaxe. A justificativa é: Trocar nome e separador não implica inverter condição.",
    "challenge": "Qual é a justificativa técnica para preferir “Adaptar para =SE(A1>0;\"Sim\";\"Não\") no Excel pt-BR, conferindo idioma e separadores da instalação.” em vez da alternativa “Trocar a lógica de A1>0 por A1<0 para corrigir apenas a sintaxe.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-008-03",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-008",
    "topic": "Diferenças de sintaxe e separadores entre versões e suítes",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Diferenças de sintaxe e separadores entre versões e suítes: Uma fórmula copiada de tutorial em inglês usa =IF(A1>0,\"Yes\",\"No\") e não é reconhecida no Excel pt-BR configurado com ponto e vírgula. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Concluir que toda função nova existe em todas as versões.",
      "Adaptar para =SE(A1>0;\"Sim\";\"Não\") no Excel pt-BR, conferindo idioma e separadores da instalação.",
      "Trocar a lógica de A1>0 por A1<0 para corrigir apenas a sintaxe.",
      "Assumir que todas as instalações usam vírgula para argumentos."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: Disponibilidade pode variar por edição e versão. Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não preci",
      "Correta: Adaptar para =SE(A1>0;\"Sim\";\"Não\") no Excel pt-BR, conferindo idioma e separadores da instalação. Fundamentação: Em um Excel pt-BR típico, =SE(A1>0;\"Sim\";\"Não\") usa ponto e vírgula para separar argumentos e vírgula decimal. Em outra localidade, a grafia e os separadores podem ser diferentes. O LibreOffice Calc permite configurar separadores de argumentos e nome",
      "Incorreta: Alteraria o critério de negócio indevidamente. Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não preci",
      "Incorreta: Separadores dependem da configuração regional/software. Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não preci"
    ],
    "explanation": "Adaptar para =SE(A1>0;\"Sim\";\"Não\") no Excel pt-BR, conferindo idioma e separadores da instalação. Em um Excel pt-BR típico, =SE(A1>0;\"Sim\";\"Não\") usa ponto e vírgula para separar argumentos e vírgula decimal. Em outra localidade, a grafia e os separadores podem ser diferentes. O LibreOffice Calc permite configurar separadores de argumentos e nomes de funções; fórmulas importadas de XLSX podem sofrer adaptações. PROCX, por exemplo, só existe em certas versões. Para interpretar um erro, verifique software, versão, idioma da função e configuração regional antes de alterar a lógica matemática. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configurações do editor.",
    "trap": "Copiar uma fórmula textual de tutorial estrangeiro pode causar erro de nome ou de separador, mesmo quando a ideia matemática está correta. Ajuste a sintaxe sem mudar a condição lógica.",
    "examTip": "Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "challenge": "Proponha um teste simples que permita refutar “Trocar “>” por “<” é mera mudança de separador regional.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-10-008-04",
    "moduleId": "INF-10",
    "subtopicId": "INF-10-008",
    "topic": "Diferenças de sintaxe e separadores entre versões e suítes",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Diferenças de sintaxe e separadores entre versões e suítes. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "Na configuração pt-BR típica, ponto e vírgula separa argumentos.",
      "A lógica matemática deve ser preservada ao traduzir sintaxe.",
      "Trocar “>” por “<” é mera mudança de separador regional.",
      "A sintaxe de fórmulas pode variar com idioma e configuração."
    ],
    "answer": 2,
    "optionComments": [
      "Afirmação tecnicamente correta, logo não é a exceção: É convenção comum dessa localidade. Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configuraç",
      "Afirmação tecnicamente correta, logo não é a exceção: Trocar nome e separador não implica inverter condição. Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configuraç",
      "EXCETO — esta é a única afirmação falsa: Inverte a condição lógica. Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de cam",
      "Afirmação tecnicamente correta, logo não é a exceção: Nomes e separadores podem ser localizados. Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configuraç"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “Trocar “>” por “<” é mera mudança de separador regional.” é falsa porque Inverte a condição lógica. As demais são compatíveis com o tema.",
    "concept": "Nomes de funções, separadores de argumento e símbolos decimais variam com idioma, localidade e configurações do editor.",
    "trap": "Copiar uma fórmula textual de tutorial estrangeiro pode causar erro de nome ou de separador, mesmo quando a ideia matemática está correta. Ajuste a sintaxe sem mudar a condição lógica.",
    "examTip": "Vírgula decimal e ponto e vírgula de argumentos têm funções diferentes. O separador de campos do CSV não precisa coincidir com o separador usado dentro de fórmulas.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Copiar uma fórmula textual de tutorial estrangeiro pode causar erro de nome ou de separador, mesmo quando a ideia matemática está correta. Ajuste a sintaxe sem mudar a condição lógica. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Assumir que todas as instalações usam vírgula para argumentos.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  }
];
