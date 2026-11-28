/** INF-ESTUDO — Fase D/Lote 2: questões autorais do INF-06. */
export const INF_06_QUESTIONS = [
  {
    "id": "Q-INF-06-001-01",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-001",
    "topic": "Distribuições Linux, kernel e ambiente gráfico",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Distribuições Linux, kernel e ambiente gráfico: GNOME é um kernel alternativo ao Linux.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: GNOME é ambiente gráfico, não núcleo. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: GNOME é ambiente gráfico, não núcleo. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. GNOME é ambiente gráfico, não núcleo. Distinção aplicável: Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto.",
    "concept": "O kernel Linux é o núcleo responsável por serviços básicos do sistema; uma distribuição combina esse núcleo com programas, bibliotecas e ferramentas para formar um ambiente utilizável.",
    "trap": "Um erro comum é concluir que todo Linux usa a mesma tela e os mesmos aplicativos. Outro é chamar GNOME de distribuição. A disponibilidade de programas e comandos pode variar com a distribuição e com a versão instalada.",
    "examTip": "Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: Distribuições podem incluir o mesmo kernel Linux e interfaces diferentes. Ela é sustentada por: A camada gráfica é separável do núcleo.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Distribuições Linux, kernel e ambiente gráfico” sem cometer o erro descrito em “GNOME é um kernel alternativo ao Linux.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-001-02",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-001",
    "topic": "Distribuições Linux, kernel e ambiente gráfico",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue os itens sobre Distribuições Linux, kernel e ambiente gráfico: I. Um sistema Linux pode ser administrado pelo terminal. II. GNOME é um kernel alternativo ao Linux. III. Distribuições podem incluir o mesmo kernel Linux e interfaces diferentes. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "V – F – F",
      "V – V – V",
      "F – F – V",
      "V – F – V"
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: III está classificado de modo equivocado, pois A camada gráfica é separável do núcleo.",
      "Incorreta: II está classificado de modo equivocado, pois GNOME é ambiente gráfico, não núcleo.",
      "Incorreta: I está classificado de modo equivocado, pois Interface gráfica não é requisito para todas as tarefas.",
      "Correta: I: Interface gráfica não é requisito para todas as tarefas. II: GNOME é ambiente gráfico, não núcleo. III: A camada gráfica é separável do núcleo."
    ],
    "explanation": "Resolução item a item: I = V: Interface gráfica não é requisito para todas as tarefas. II = F: GNOME é ambiente gráfico, não núcleo. III = V: A camada gráfica é separável do núcleo.",
    "concept": "O kernel Linux é o núcleo responsável por serviços básicos do sistema; uma distribuição combina esse núcleo com programas, bibliotecas e ferramentas para formar um ambiente utilizável.",
    "trap": "Um erro comum é concluir que todo Linux usa a mesma tela e os mesmos aplicativos. Outro é chamar GNOME de distribuição. A disponibilidade de programas e comandos pode variar com a distribuição e com a versão instalada.",
    "examTip": "Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Um sistema Linux pode ser administrado pelo terminal. A justificativa é: Interface gráfica não é requisito para todas as tarefas.",
    "challenge": "Qual é a justificativa técnica para preferir “Verificar qual ambiente gráfico está ativo antes de atribuir a diferença à distribuição ou ao kernel.” em vez da alternativa “Reinstalar o kernel para tornar os ícones iguais.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-001-03",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-001",
    "topic": "Distribuições Linux, kernel e ambiente gráfico",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Distribuições Linux, kernel e ambiente gráfico: Em um laboratório administrativo, dois computadores usam Ubuntu, mas têm áreas de trabalho com aparência diferente. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Verificar qual ambiente gráfico está ativo antes de atribuir a diferença à distribuição ou ao kernel.",
      "Tratar GNOME e Ubuntu como nomes de um mesmo componente.",
      "Concluir que um computador deixou de executar Linux.",
      "Reinstalar o kernel para tornar os ícones iguais."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Verificar qual ambiente gráfico está ativo antes de atribuir a diferença à distribuição ou ao kernel. Fundamentação: O kernel administra processos, memória e comunicação com hardware. Uma distribuição, como Ubuntu ou Debian, reúne instalador, gerenciador de pacotes e outros componentes. GNOME e KDE Plasma são ambientes gráficos possíveis, não distribuições nem núcl",
      "Incorreta: Um é ambiente gráfico; o outro é distribuição. Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da ",
      "Incorreta: Diferença visual não demonstra mudança de kernel. Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da ",
      "Incorreta: Ícones são definidos sobretudo pelo ambiente gráfico e suas configurações. Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da "
    ],
    "explanation": "Verificar qual ambiente gráfico está ativo antes de atribuir a diferença à distribuição ou ao kernel. O kernel administra processos, memória e comunicação com hardware. Uma distribuição, como Ubuntu ou Debian, reúne instalador, gerenciador de pacotes e outros componentes. GNOME e KDE Plasma são ambientes gráficos possíveis, não distribuições nem núcleos. Uma mesma distribuição pode oferecer mais de um ambiente gráfico, e o computador pode operar sem interface gráfica. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "O kernel Linux é o núcleo responsável por serviços básicos do sistema; uma distribuição combina esse núcleo com programas, bibliotecas e ferramentas para formar um ambiente utilizável.",
    "trap": "Um erro comum é concluir que todo Linux usa a mesma tela e os mesmos aplicativos. Outro é chamar GNOME de distribuição. A disponibilidade de programas e comandos pode variar com a distribuição e com a versão instalada.",
    "examTip": "Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto.",
    "challenge": "Proponha um teste simples que permita refutar “Todas as distribuições Linux obrigatoriamente têm a mesma interface.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-001-04",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-001",
    "topic": "Distribuições Linux, kernel e ambiente gráfico",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Complete as lacunas corretamente ao documentar Distribuições Linux, kernel e ambiente gráfico: O recurso definido como “Núcleo que gerencia recursos básicos” é ___; aquele definido como “Conjunto que reúne kernel e ferramentas” é ___; e o recurso definido como “Camada visual de interação” é ___.",
    "options": [
      "Distribuição / Ambiente gráfico / Kernel",
      "Kernel / Distribuição / Ambiente gráfico",
      "Kernel / Ambiente gráfico / Distribuição",
      "Ambiente gráfico / Kernel / Distribuição"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: “Núcleo que gerencia recursos básicos” não corresponde a “Distribuição”, mas a “Kernel”; “Conjunto que reúne kernel e ferramentas” não corresponde a “Ambiente gráfico”, mas a “Distribuição”; “Camada visual de interação” não corresponde a “Kernel”, mas a “Ambiente gráfico”",
      "Correta: “Núcleo que gerencia recursos básicos” define “Kernel”; “Conjunto que reúne kernel e ferramentas” define “Distribuição”; “Camada visual de interação” define “Ambiente gráfico”",
      "Incorreta: “Conjunto que reúne kernel e ferramentas” não corresponde a “Ambiente gráfico”, mas a “Distribuição”; “Camada visual de interação” não corresponde a “Distribuição”, mas a “Ambiente gráfico”",
      "Incorreta: “Núcleo que gerencia recursos básicos” não corresponde a “Ambiente gráfico”, mas a “Kernel”; “Conjunto que reúne kernel e ferramentas” não corresponde a “Kernel”, mas a “Distribuição”; “Camada visual de interação” não corresponde a “Distribuição”, mas a “Ambiente gráfico”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: Kernel: Núcleo que gerencia recursos básicos; Distribuição: Conjunto que reúne kernel e ferramentas; Ambiente gráfico: Camada visual de interação.",
    "concept": "O kernel Linux é o núcleo responsável por serviços básicos do sistema; uma distribuição combina esse núcleo com programas, bibliotecas e ferramentas para formar um ambiente utilizável.",
    "trap": "Um erro comum é concluir que todo Linux usa a mesma tela e os mesmos aplicativos. Outro é chamar GNOME de distribuição. A disponibilidade de programas e comandos pode variar com a distribuição e com a versão instalada.",
    "examTip": "Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro comum é concluir que todo Linux usa a mesma tela e os mesmos aplicativos. Outro é chamar GNOME de distribuição. A disponibilidade de programas e comandos pode variar com a distribuição e com a versão instalada. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Concluir que um computador deixou de executar Linux.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-002-01",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-002",
    "topic": "Estrutura de diretórios e caminhos no Linux",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Estrutura de diretórios e caminhos no Linux: Um caminho iniciado por / é absoluto no Linux.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: Ele se resolve a partir da raiz. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: Ele se resolve a partir da raiz. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. Ele se resolve a partir da raiz. Detalhamento: O diretório / é o início da hierarquia, não uma unidade C:. /home costuma abrigar diretórios pessoais; /etc contém muitos arquivos de configuração; /tmp é empregado para arquivos temporários; /var contém dados variáveis, como registros. Caminhos com / podem ser absolutos (/home/ana) ou relativos (Documentos/relatorio.odt). O nome de diretório e as permissões determinam o acesso concreto.",
    "concept": "No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e recursos em uma hierarquia.",
    "trap": "Evite assumir que todo arquivo de configuração pertence a /home ou que caminhos relativos funcionam independentemente do diretório atual. Sistemas e distribuições podem acrescentar diretórios específicos.",
    "examTip": "A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório pessoal não é o mesmo que o diretório raiz; o atalho ~ costuma indicar a pasta pessoal do usuário no shell.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: Um caminho iniciado por / é absoluto no Linux. Ela é sustentada por: Ele se resolve a partir da raiz.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Estrutura de diretórios e caminhos no Linux” sem cometer o erro descrito em “O separador universal de diretórios Linux é a barra invertida \\.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-002-02",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-002",
    "topic": "Estrutura de diretórios e caminhos no Linux",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Considere as assertivas sobre Estrutura de diretórios e caminhos no Linux: I. Um caminho iniciado por / é absoluto no Linux. II. /home é frequentemente usado para diretórios pessoais. III. O separador universal de diretórios Linux é a barra invertida \\. Quais assertivas são corretas?",
    "options": [
      "Apenas I.",
      "Apenas I e II e III.",
      "Apenas I e II.",
      "Apenas II."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II é classificada erroneamente, porque Essa é uma convenção comum das distribuições.",
      "Incorreta: III é classificada erroneamente, porque O separador convencional do Linux é /.",
      "Correta: I: Ele se resolve a partir da raiz. II: Essa é uma convenção comum das distribuições. III: O separador convencional do Linux é /.",
      "Incorreta: I é classificada erroneamente, porque Ele se resolve a partir da raiz."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: Ele se resolve a partir da raiz. II é verdadeira: Essa é uma convenção comum das distribuições. III é falsa: O separador convencional do Linux é /.",
    "concept": "No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e recursos em uma hierarquia.",
    "trap": "Evite assumir que todo arquivo de configuração pertence a /home ou que caminhos relativos funcionam independentemente do diretório atual. Sistemas e distribuições podem acrescentar diretórios específicos.",
    "examTip": "A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório pessoal não é o mesmo que o diretório raiz; o atalho ~ costuma indicar a pasta pessoal do usuário no shell.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Caminhos relativos dependem do diretório de trabalho atual. A justificativa é: Não começam na raiz e precisam de contexto.",
    "challenge": "Qual é a justificativa técnica para preferir “Reconhecer /home/ana/Documentos/relatorio.odt como caminho absoluto e verificar permissões no diretório.” em vez da alternativa “Usar C:\\home\\ana como caminho absoluto padrão do Linux.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-002-03",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-002",
    "topic": "Estrutura de diretórios e caminhos no Linux",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Estrutura de diretórios e caminhos no Linux. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "Um caminho iniciado por / é absoluto no Linux.",
      "/home é frequentemente usado para diretórios pessoais.",
      "Caminhos relativos dependem do diretório de trabalho atual.",
      "O separador universal de diretórios Linux é a barra invertida \\."
    ],
    "answer": 3,
    "optionComments": [
      "Afirmação tecnicamente correta, logo não é a exceção: Ele se resolve a partir da raiz. No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e ",
      "Afirmação tecnicamente correta, logo não é a exceção: Essa é uma convenção comum das distribuições. No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e ",
      "Afirmação tecnicamente correta, logo não é a exceção: Não começam na raiz e precisam de contexto. No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e ",
      "EXCETO — esta é a única afirmação falsa: O separador convencional do Linux é /. A barra / separa componentes do caminho; a barra invertida é a separação convencional do W"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “O separador universal de diretórios Linux é a barra invertida \\.” é falsa porque O separador convencional do Linux é /. As demais são compatíveis com o tema.",
    "concept": "No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e recursos em uma hierarquia.",
    "trap": "Evite assumir que todo arquivo de configuração pertence a /home ou que caminhos relativos funcionam independentemente do diretório atual. Sistemas e distribuições podem acrescentar diretórios específicos.",
    "examTip": "A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório pessoal não é o mesmo que o diretório raiz; o atalho ~ costuma indicar a pasta pessoal do usuário no shell.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório pessoal não é o mesmo que o diretório raiz; o atalho ~ costuma indicar a pasta pessoal do usuário no shell.",
    "challenge": "Proponha um teste simples que permita refutar “/etc é a pasta padrão para relatórios pessoais do usuário.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-002-04",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-002",
    "topic": "Estrutura de diretórios e caminhos no Linux",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Estrutura de diretórios e caminhos no Linux: Um servidor precisa localizar seu relatório na pasta Documentos e recebe o caminho /home/ana/Documentos/relatorio.odt. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Reconhecer /home/ana/Documentos/relatorio.odt como caminho absoluto e verificar permissões no diretório.",
      "Usar C:\\home\\ana como caminho absoluto padrão do Linux.",
      "Interpretar Documentos/relatorio.odt como absoluto em qualquer pasta.",
      "Gravar o relatório diretamente em /etc por ser um arquivo de usuário."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Reconhecer /home/ana/Documentos/relatorio.odt como caminho absoluto e verificar permissões no diretório. Fundamentação: O diretório / é o início da hierarquia, não uma unidade C:. /home costuma abrigar diretórios pessoais; /etc contém muitos arquivos de configuração; /tmp é empregado para arquivos temporários; /var contém dados variáveis, como registros. Caminhos com ",
      "Incorreta: A hierarquia Linux parte de /, não de uma letra de unidade. A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório ",
      "Incorreta: Sem / inicial, esse caminho depende do diretório atual. A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório ",
      "Incorreta: /etc é normalmente destinado a configurações do sistema. A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório "
    ],
    "explanation": "Reconhecer /home/ana/Documentos/relatorio.odt como caminho absoluto e verificar permissões no diretório. O diretório / é o início da hierarquia, não uma unidade C:. /home costuma abrigar diretórios pessoais; /etc contém muitos arquivos de configuração; /tmp é empregado para arquivos temporários; /var contém dados variáveis, como registros. Caminhos com / podem ser absolutos (/home/ana) ou relativos (Documentos/relatorio.odt). O nome de diretório e as permissões determinam o acesso concreto. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e recursos em uma hierarquia.",
    "trap": "Evite assumir que todo arquivo de configuração pertence a /home ou que caminhos relativos funcionam independentemente do diretório atual. Sistemas e distribuições podem acrescentar diretórios específicos.",
    "examTip": "A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório pessoal não é o mesmo que o diretório raiz; o atalho ~ costuma indicar a pasta pessoal do usuário no shell.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Evite assumir que todo arquivo de configuração pertence a /home ou que caminhos relativos funcionam independentemente do diretório atual. Sistemas e distribuições podem acrescentar diretórios específicos. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Interpretar Documentos/relatorio.odt como absoluto em qualquer pasta.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-003-01",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-003",
    "topic": "Arquivos, usuários e permissões básicas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Arquivos, usuários e permissões básicas: A permissão w de um arquivo, sozinha, garante seu apagamento.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Apagar afeta o diretório que contém o arquivo. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Apagar afeta o diretório que contém o arquivo. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Apagar afeta o diretório que contém o arquivo. Distinção aplicável: Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "concept": "Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outros usuários.",
    "trap": "Não presuma que chmod 777 seja solução segura: amplia permissões de todos. Mudanças de propriedade e modos exigem cautela, pois podem expor arquivos administrativos.",
    "examTip": "Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: A leitura de um arquivo é representada por r na classe autorizada. Ela é sustentada por: É a permissão básica de leitura.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Arquivos, usuários e permissões básicas” sem cometer o erro descrito em “A permissão w de um arquivo, sozinha, garante seu apagamento.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-003-02",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-003",
    "topic": "Arquivos, usuários e permissões básicas",
    "type": "associacao",
    "difficulty": "media",
    "stem": "Associe a Coluna I à Coluna II sobre Arquivos, usuários e permissões básicas. Coluna I: I. r. II. w. III. x. Coluna II: 1. Permissão de leitura. 2. Permissão de alteração. 3. Execução de arquivo ou travessia de diretório. Assinale a sequência de números correspondente à ordem I–III.",
    "options": [
      "3 – 2 – 1",
      "1 – 2 – 3",
      "2 – 1 – 3",
      "1 – 3 – 2"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: r foi associado a Execução de arquivo ou travessia de diretório, mas corresponde a Permissão de leitura; x foi associado a Permissão de leitura, mas corresponde a Execução de arquivo ou travessia de diretório",
      "Correta: r corresponde a Permissão de leitura; w corresponde a Permissão de alteração; x corresponde a Execução de arquivo ou travessia de diretório",
      "Incorreta: r foi associado a Permissão de alteração, mas corresponde a Permissão de leitura; w foi associado a Permissão de leitura, mas corresponde a Permissão de alteração",
      "Incorreta: w foi associado a Execução de arquivo ou travessia de diretório, mas corresponde a Permissão de alteração; x foi associado a Permissão de alteração, mas corresponde a Execução de arquivo ou travessia de diretório"
    ],
    "explanation": "Pareamento técnico: r → Permissão de leitura; w → Permissão de alteração; x → Execução de arquivo ou travessia de diretório. Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "concept": "Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outros usuários.",
    "trap": "Não presuma que chmod 777 seja solução segura: amplia permissões de todos. Mudanças de propriedade e modos exigem cautela, pois podem expor arquivos administrativos.",
    "examTip": "Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: A exclusão pode depender das permissões do diretório, não apenas do arquivo. A justificativa é: A operação modifica entradas no diretório.",
    "challenge": "Qual é a justificativa técnica para preferir “Conferir proprietário, grupo e permissões do arquivo e ajustar o acesso mínimo necessário, sem abrir permissão geral.” em vez da alternativa “Aplicar permissão total para todos os usuários como padrão.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-003-03",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-003",
    "topic": "Arquivos, usuários e permissões básicas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Arquivos, usuários e permissões básicas: Um relatório de pessoal deve poder ser lido pelo grupo de trabalho, mas não por usuários externos ao grupo. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Confiar apenas no nome da pasta para garantir sigilo.",
      "Presumir que o bit x significa exatamente a mesma operação em arquivo e diretório.",
      "Conferir proprietário, grupo e permissões do arquivo e ajustar o acesso mínimo necessário, sem abrir permissão geral.",
      "Aplicar permissão total para todos os usuários como padrão."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: O acesso depende dos modos efetivos e da identidade do usuário. Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclus",
      "Incorreta: Em diretórios ele permite travessia, não execução do diretório como programa. Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclus",
      "Correta: Conferir proprietário, grupo e permissões do arquivo e ajustar o acesso mínimo necessário, sem abrir permissão geral. Fundamentação: Em uma saída de ls -l, o primeiro caractere indica tipo e os grupos seguintes mostram permissões do dono, grupo e outros. Para arquivos, r indica leitura, w alteração do conteúdo e x execução. Para diretórios, x corresponde sobretudo a atravessar/ace",
      "Incorreta: Amplia indevidamente o acesso a dados possivelmente confidenciais. Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclus"
    ],
    "explanation": "Conferir proprietário, grupo e permissões do arquivo e ajustar o acesso mínimo necessário, sem abrir permissão geral. Em uma saída de ls -l, o primeiro caractere indica tipo e os grupos seguintes mostram permissões do dono, grupo e outros. Para arquivos, r indica leitura, w alteração do conteúdo e x execução. Para diretórios, x corresponde sobretudo a atravessar/acessar entradas quando se conhece o nome; r permite listar nomes e w, combinada com x, permite alterações de entradas. chmod muda modos de acesso conforme autorização. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outros usuários.",
    "trap": "Não presuma que chmod 777 seja solução segura: amplia permissões de todos. Mudanças de propriedade e modos exigem cautela, pois podem expor arquivos administrativos.",
    "examTip": "Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "challenge": "Proponha um teste simples que permita refutar “chmod 777 é a opção obrigatória para proteger dados sensíveis.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-003-04",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-003",
    "topic": "Arquivos, usuários e permissões básicas",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Um servidor confere regras sobre Arquivos, usuários e permissões básicas. Todas as afirmações abaixo são compatíveis com a técnica, EXCETO uma. Assinale a exceção.",
    "options": [
      "A leitura de um arquivo é representada por r na classe autorizada.",
      "Em diretórios, x viabiliza travessia do caminho.",
      "A exclusão pode depender das permissões do diretório, não apenas do arquivo.",
      "A permissão w de um arquivo, sozinha, garante seu apagamento."
    ],
    "answer": 3,
    "optionComments": [
      "Afirmação tecnicamente correta, logo não é a exceção: É a permissão básica de leitura. Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outro",
      "Afirmação tecnicamente correta, logo não é a exceção: Sua semântica difere da de executar um programa. Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outro",
      "Afirmação tecnicamente correta, logo não é a exceção: A operação modifica entradas no diretório. Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outro",
      "EXCETO — esta é a única afirmação falsa: Apagar afeta o diretório que contém o arquivo. Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder a"
    ],
    "explanation": "O comando EXCETO pede a afirmação que deve ser rejeitada. “A permissão w de um arquivo, sozinha, garante seu apagamento.” é falsa porque Apagar afeta o diretório que contém o arquivo. As demais são compatíveis com o tema.",
    "concept": "Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outros usuários.",
    "trap": "Não presuma que chmod 777 seja solução segura: amplia permissões de todos. Mudanças de propriedade e modos exigem cautela, pois podem expor arquivos administrativos.",
    "examTip": "Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Não presuma que chmod 777 seja solução segura: amplia permissões de todos. Mudanças de propriedade e modos exigem cautela, pois podem expor arquivos administrativos. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Confiar apenas no nome da pasta para garantir sigilo.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-004-01",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-004",
    "topic": "Gerenciadores de arquivos, terminais e comandos elementares",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Gerenciadores de arquivos, terminais e comandos elementares: pwd mostra o diretório de trabalho corrente.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Correta a escolha CERTO: O shell usa esse contexto em caminhos relativos. Esse fundamento demonstra a validade da proposição.",
      "Incorreta a escolha ERRADO: O shell usa esse contexto em caminhos relativos. A proposição respeita o conceito estudado."
    ],
    "explanation": "A afirmação é verdadeira. O shell usa esse contexto em caminhos relativos. Detalhamento: No shell de Linux, pwd informa o diretório atual; ls lista entradas; cd altera o diretório; mkdir cria uma pasta; cp copia arquivos; mv move ou renomeia; rm remove entradas conforme argumentos e permissões. Um comando pode receber opções e caminhos relativos ou absolutos. A maioria dos comandos não pede confirmação por padrão, de modo que a seleção de destinos merece conferência.",
    "concept": "Gerenciadores de arquivos oferecem operações visuais; o terminal permite executar comandos, cuja sintaxe e efeitos devem ser compreendidos antes da execução.",
    "trap": "Um erro perigoso é usar comandos destrutivos sem conferir o diretório atual e os arquivos envolvidos. Outro é acreditar que tudo removido no terminal pode ser restaurado da Lixeira do usuário.",
    "examTip": "cp copia e mantém a origem; mv movimenta ou altera o nome; rm é remoção e não equivale necessariamente a mover para uma Lixeira gráfica. Em ambientes gráficos, a exclusão pode ter semântica diferente da de rm.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: pwd mostra o diretório de trabalho corrente. Ela é sustentada por: O shell usa esse contexto em caminhos relativos.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Gerenciadores de arquivos, terminais e comandos elementares” sem cometer o erro descrito em “rm sempre envia arquivos para a Lixeira da interface gráfica.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-004-02",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-004",
    "topic": "Gerenciadores de arquivos, terminais e comandos elementares",
    "type": "lacunas",
    "difficulty": "media",
    "stem": "Complete as lacunas corretamente ao documentar Gerenciadores de arquivos, terminais e comandos elementares: O recurso definido como “Mostra diretório atual” é ___; aquele definido como “Copia conteúdo” é ___; e o recurso definido como “Move ou renomeia” é ___.",
    "options": [
      "pwd / cp / mv",
      "pwd / mv / cp",
      "mv / pwd / cp",
      "cp / mv / pwd"
    ],
    "answer": 0,
    "optionComments": [
      "Correta: “Mostra diretório atual” define “pwd”; “Copia conteúdo” define “cp”; “Move ou renomeia” define “mv”",
      "Incorreta: “Copia conteúdo” não corresponde a “mv”, mas a “cp”; “Move ou renomeia” não corresponde a “cp”, mas a “mv”",
      "Incorreta: “Mostra diretório atual” não corresponde a “mv”, mas a “pwd”; “Copia conteúdo” não corresponde a “pwd”, mas a “cp”; “Move ou renomeia” não corresponde a “cp”, mas a “mv”",
      "Incorreta: “Mostra diretório atual” não corresponde a “cp”, mas a “pwd”; “Copia conteúdo” não corresponde a “mv”, mas a “cp”; “Move ou renomeia” não corresponde a “pwd”, mas a “mv”"
    ],
    "explanation": "A sequência se justifica pelas funções distintas: pwd: Mostra diretório atual; cp: Copia conteúdo; mv: Move ou renomeia.",
    "concept": "Gerenciadores de arquivos oferecem operações visuais; o terminal permite executar comandos, cuja sintaxe e efeitos devem ser compreendidos antes da execução.",
    "trap": "Um erro perigoso é usar comandos destrutivos sem conferir o diretório atual e os arquivos envolvidos. Outro é acreditar que tudo removido no terminal pode ser restaurado da Lixeira do usuário.",
    "examTip": "cp copia e mantém a origem; mv movimenta ou altera o nome; rm é remoção e não equivale necessariamente a mover para uma Lixeira gráfica. Em ambientes gráficos, a exclusão pode ter semântica diferente da de rm.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: cd muda o diretório de trabalho do shell. A justificativa é: Afeta a interpretação de caminhos relativos posteriores.",
    "challenge": "Qual é a justificativa técnica para preferir “Conferir os caminhos e usar uma operação de cópia, como cp, deixando a origem intacta.” em vez da alternativa “Usar mv para duplicar mantendo as duas cópias em seus locais originais.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-004-03",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-004",
    "topic": "Gerenciadores de arquivos, terminais e comandos elementares",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Analise uma situação de auditoria de conceitos de Gerenciadores de arquivos, terminais e comandos elementares: I. cd muda o diretório de trabalho do shell. II. cp copia um arquivo para outro destino. III. mv é o comando específico para listar arquivos de uma pasta. Assinale a sequência de verdadeiro/falso.",
    "options": [
      "F – V – F",
      "V – V – F",
      "V – V – V",
      "V – F – F"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: I está classificado de modo equivocado, pois Afeta a interpretação de caminhos relativos posteriores.",
      "Correta: I: Afeta a interpretação de caminhos relativos posteriores. II: A operação preserva a origem. III: ls executa essa listagem.",
      "Incorreta: III está classificado de modo equivocado, pois ls executa essa listagem.",
      "Incorreta: II está classificado de modo equivocado, pois A operação preserva a origem."
    ],
    "explanation": "Resolução item a item: I = V: Afeta a interpretação de caminhos relativos posteriores. II = V: A operação preserva a origem. III = F: ls executa essa listagem.",
    "concept": "Gerenciadores de arquivos oferecem operações visuais; o terminal permite executar comandos, cuja sintaxe e efeitos devem ser compreendidos antes da execução.",
    "trap": "Um erro perigoso é usar comandos destrutivos sem conferir o diretório atual e os arquivos envolvidos. Outro é acreditar que tudo removido no terminal pode ser restaurado da Lixeira do usuário.",
    "examTip": "cp copia e mantém a origem; mv movimenta ou altera o nome; rm é remoção e não equivale necessariamente a mover para uma Lixeira gráfica. Em ambientes gráficos, a exclusão pode ter semântica diferente da de rm.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: cp copia e mantém a origem; mv movimenta ou altera o nome; rm é remoção e não equivale necessariamente a mover para uma Lixeira gráfica. Em ambientes gráficos, a exclusão pode ter semântica diferente da de rm.",
    "challenge": "Proponha um teste simples que permita refutar “mv é o comando específico para listar arquivos de uma pasta.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-004-04",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-004",
    "topic": "Gerenciadores de arquivos, terminais e comandos elementares",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre Gerenciadores de arquivos, terminais e comandos elementares: I. cp copia um arquivo para outro destino. II. cd muda o diretório de trabalho do shell. III. mv é o comando específico para listar arquivos de uma pasta. Quais assertivas são corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II.",
      "Apenas I e II e III."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: II é classificada erroneamente, porque Afeta a interpretação de caminhos relativos posteriores.",
      "Incorreta: I é classificada erroneamente, porque A operação preserva a origem.",
      "Correta: I: A operação preserva a origem. II: Afeta a interpretação de caminhos relativos posteriores. III: ls executa essa listagem.",
      "Incorreta: III é classificada erroneamente, porque ls executa essa listagem."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é verdadeira: A operação preserva a origem. II é verdadeira: Afeta a interpretação de caminhos relativos posteriores. III é falsa: ls executa essa listagem.",
    "concept": "Gerenciadores de arquivos oferecem operações visuais; o terminal permite executar comandos, cuja sintaxe e efeitos devem ser compreendidos antes da execução.",
    "trap": "Um erro perigoso é usar comandos destrutivos sem conferir o diretório atual e os arquivos envolvidos. Outro é acreditar que tudo removido no terminal pode ser restaurado da Lixeira do usuário.",
    "examTip": "cp copia e mantém a origem; mv movimenta ou altera o nome; rm é remoção e não equivale necessariamente a mover para uma Lixeira gráfica. Em ambientes gráficos, a exclusão pode ter semântica diferente da de rm.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Um erro perigoso é usar comandos destrutivos sem conferir o diretório atual e os arquivos envolvidos. Outro é acreditar que tudo removido no terminal pode ser restaurado da Lixeira do usuário. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Usar rm para fazer uma cópia de segurança do modelo.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-005-01",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-005",
    "topic": "Software livre, código aberto e licenciamento",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item relativo a Software livre, código aberto e licenciamento: Todo freeware é necessariamente software livre.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta a escolha CERTO: Freeware pode ter licença proprietária restritiva. A proposição apresentada não corresponde à regra técnica.",
      "Correta a escolha ERRADO: Freeware pode ter licença proprietária restritiva. Assim, a afirmação deve ser rejeitada."
    ],
    "explanation": "A afirmação é falsa. Freeware pode ter licença proprietária restritiva. Distinção aplicável: Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "concept": "Software livre é definido por liberdades de usar, estudar, modificar e redistribuir programas nos termos da licença; software gratuito refere-se ao preço.",
    "trap": "Não equipare licença livre a ausência de obrigações; não presuma que softwares pagos são necessariamente proprietários. A avaliação institucional inclui suporte, requisitos e segurança, não só o custo inicial.",
    "examTip": "Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "newExample": "Num atendimento diferente, uma equipe interpreta esta regra: Software livre permite liberdades de uso, estudo, alteração e redistribuição conforme licença. Ela é sustentada por: Essas liberdades caracterizam sua categoria.",
    "challenge": "Em um segundo departamento, quais evidências você verificaria para aplicar corretamente “Software livre, código aberto e licenciamento” sem cometer o erro descrito em “Todo freeware é necessariamente software livre.”?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-005-02",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-005",
    "topic": "Software livre, código aberto e licenciamento",
    "type": "classica",
    "difficulty": "media",
    "stem": "Em uma preparação de treinamento sobre Software livre, código aberto e licenciamento, qual afirmação pode ser adotada sem contrariar os conceitos do tema?",
    "options": [
      "Todo freeware é necessariamente software livre.",
      "A GPL e a licença MIT impõem sempre obrigações idênticas.",
      "Autorizar distribuição porque o instalador é gratuito.",
      "Software livre permite liberdades de uso, estudo, alteração e redistribuição conforme licença."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: Freeware pode ter licença proprietária restritiva. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, iso",
      "Incorreta: As condições variam conforme o tipo de licença. Código aberto descreve disponibilidade de código com licenças que permitem formas de uso, modificação e redistribui",
      "Incorreta: Preço zero não concede automaticamente direitos autorais adicionais. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, iso",
      "Correta: Essas liberdades caracterizam sua categoria. Software livre é definido por liberdades de usar, estudar, modificar e redistribuir programas nos termos da licença; software gratuito refer"
    ],
    "explanation": "Software livre permite liberdades de uso, estudo, alteração e redistribuição conforme licença. Essas liberdades caracterizam sua categoria. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "concept": "Software livre é definido por liberdades de usar, estudar, modificar e redistribuir programas nos termos da licença; software gratuito refere-se ao preço.",
    "trap": "Não equipare licença livre a ausência de obrigações; não presuma que softwares pagos são necessariamente proprietários. A avaliação institucional inclui suporte, requisitos e segurança, não só o custo inicial.",
    "examTip": "Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "newExample": "Na conferência do processo administrativo, verifique o fato: Gratuidade e liberdade de modificação são atributos independentes. A justificativa é: Preço não determina permissões.",
    "challenge": "Qual é a justificativa técnica para preferir “Verificar se a licença permite modificação e redistribuição e quais obrigações acompanham a distribuição.” em vez da alternativa “Autorizar distribuição porque o instalador é gratuito.” em uma nova situação?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-005-03",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-005",
    "topic": "Software livre, código aberto e licenciamento",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema em Software livre, código aberto e licenciamento: Uma unidade recebeu um editor sem custo e quer modificá-lo e distribuir a versão modificada. Qual procedimento é tecnicamente adequado e minimiza erros?",
    "options": [
      "Verificar se a licença permite modificação e redistribuição e quais obrigações acompanham a distribuição.",
      "Autorizar distribuição porque o instalador é gratuito.",
      "Supor que código disponível na internet significa qualquer uso permitido.",
      "Concluir que software livre nunca pode ser comercializado."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Verificar se a licença permite modificação e redistribuição e quais obrigações acompanham a distribuição. Fundamentação: Código aberto descreve disponibilidade de código com licenças que permitem formas de uso, modificação e redistribuição. Licenças livres podem exigir obrigações, como preservar avisos de autoria ou distribuir códigos derivados em certas condições. GPL",
      "Incorreta: Preço zero não concede automaticamente direitos autorais adicionais. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte",
      "Incorreta: Direitos dependem dos termos de licença. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte",
      "Incorreta: Liberdades de licença não proíbem cobrança por cópias ou serviços. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte"
    ],
    "explanation": "Verificar se a licença permite modificação e redistribuição e quais obrigações acompanham a distribuição. Código aberto descreve disponibilidade de código com licenças que permitem formas de uso, modificação e redistribuição. Licenças livres podem exigir obrigações, como preservar avisos de autoria ou distribuir códigos derivados em certas condições. GPL e MIT são exemplos com condições diferentes; a escolha exige ler a licença específica. Uma organização pública também deve verificar compatibilidade, suporte e segurança antes de adotar uma ferramenta. As demais propostas confundem conceitos ou introduzem riscos apontados na aula.",
    "concept": "Software livre é definido por liberdades de usar, estudar, modificar e redistribuir programas nos termos da licença; software gratuito refere-se ao preço.",
    "trap": "Não equipare licença livre a ausência de obrigações; não presuma que softwares pagos são necessariamente proprietários. A avaliação institucional inclui suporte, requisitos e segurança, não só o custo inicial.",
    "examTip": "Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "newExample": "Na preparação de treinamento da equipe, confronte esta distinção: Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "challenge": "Proponha um teste simples que permita refutar “A GPL e a licença MIT impõem sempre obrigações idênticas.” usando os conceitos do subtópico.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-06-005-04",
    "moduleId": "INF-06",
    "subtopicId": "INF-06-005",
    "topic": "Software livre, código aberto e licenciamento",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "Analise a decisão de uma equipe técnica e avalie as proposições sobre Software livre, código aberto e licenciamento: I. A GPL e a licença MIT impõem sempre obrigações idênticas. II. Uma licença pode condicionar a distribuição de derivados. III. Gratuidade e liberdade de modificação são atributos independentes. Quais assertivas são corretas?",
    "options": [
      "Apenas II.",
      "Apenas II e III.",
      "Apenas I e II e III.",
      "Apenas III."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: III é classificada erroneamente, porque Preço não determina permissões.",
      "Correta: I: As condições variam conforme o tipo de licença. II: Há modelos copyleft e permissivos diferentes. III: Preço não determina permissões.",
      "Incorreta: I é classificada erroneamente, porque As condições variam conforme o tipo de licença.",
      "Incorreta: II é classificada erroneamente, porque Há modelos copyleft e permissivos diferentes."
    ],
    "explanation": "Avaliação independente de cada assertiva: I é falsa: As condições variam conforme o tipo de licença. II é verdadeira: Há modelos copyleft e permissivos diferentes. III é verdadeira: Preço não determina permissões.",
    "concept": "Software livre é definido por liberdades de usar, estudar, modificar e redistribuir programas nos termos da licença; software gratuito refere-se ao preço.",
    "trap": "Não equipare licença livre a ausência de obrigações; não presuma que softwares pagos são necessariamente proprietários. A avaliação institucional inclui suporte, requisitos e segurança, não só o custo inicial.",
    "examTip": "Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto.",
    "newExample": "Antes de publicar um relatório, investigue este erro: Não equipare licença livre a ausência de obrigações; não presuma que softwares pagos são necessariamente proprietários. A avaliação institucional inclui suporte, requisitos e segurança, não só o custo inicial. Explique o ajuste técnico necessário.",
    "challenge": "Escreva uma regra de conferência que evite “Supor que código disponível na internet significa qualquer uso permitido.” durante uma atividade administrativa diferente.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  }
];
