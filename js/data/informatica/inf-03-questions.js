/** INF-ESTUDO — Fase D/Lote 1-R: material pedagógico autoral revisto. */
export const INF_03_QUESTIONS = [
  {
    "id": "Q-INF-03-001-01",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-001",
    "topic": "Bits, bytes e múltiplos de armazenamento",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item sobre bits, bytes e múltiplos de armazenamento: Um byte possui oito bits.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A opção CERTO é a resposta: A proposição é verdadeira no contexto descrito. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
      "ERRADO não se aplica: A proposição é verdadeira no contexto descrito. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo."
    ],
    "explanation": "A proposição é verdadeira no contexto descrito. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
    "concept": "Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
    "trap": "Erro típico: afirmar que 1 KiB vale 1.000 bytes ou multiplicar velocidade sem converter bit para byte. Em provas, registre a conta e o arredondamento.",
    "examTip": "Verifique as informações e distinções apresentadas antes de marcar uma alternativa. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
    "newExample": "Um arquivo de 1.024 bytes ocupa exatamente 1 KiB, mas não exatamente 1 kB.",
    "challenge": "Quantos bytes existem em 4 KiB?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-001-02",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-001",
    "topic": "Bits, bytes e múltiplos de armazenamento",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue cada afirmação e assinale a sequência V/F correta: I. KiB usa a base binária, equivalente a 1.024 bytes. II. MB e Mb não são a mesma unidade: o primeiro usa bytes e o segundo bits. III. O prefixo Mb significa obrigatoriamente megabyte.",
    "options": [
      "F – V – F",
      "F – F – V",
      "V – F – F",
      "V – V – F"
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) I: I é verdadeiro porque KiB é prefixo binário: 2^10 = 1.024 bytes.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é verdadeiro porque KiB é prefixo binário: 2^10 = 1.024 bytes. II é verdadeiro porque B indica byte e b indica bit nas notações padronizadas; oito bits formam um byte. III é falso porque Mb significa megabit, não megabyte; a distinção é indicada pela letra final.",
      "Incorreta. A classificação diverge no(s) item(ns) II: II é verdadeiro porque B indica byte e b indica bit nas notações padronizadas; oito bits formam um byte.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) KiB é prefixo binário: 2^10 = 1.024 bytes. 2) B indica byte e b indica bit nas notações padronizadas; oito bits formam um byte. 3) Mb significa megabit, não megabyte; a distinção é indicada pela letra final."
    ],
    "explanation": "Resolução individual das assertivas: I: V — KiB é prefixo binário: 2^10 = 1.024 bytes. II: V — B indica byte e b indica bit nas notações padronizadas; oito bits formam um byte. III: F — Mb significa megabit, não megabyte; a distinção é indicada pela letra final.",
    "concept": "Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
    "trap": "Erro típico: afirmar que 1 KiB vale 1.000 bytes ou multiplicar velocidade sem converter bit para byte. Em provas, registre a conta e o arredondamento.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
    "newExample": "Uma rede nominal de 80 Mb/s tem limite teórico de 10 MB/s antes de outros custos.",
    "challenge": "Qual é a taxa teórica em MB/s de 96 Mb/s?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-001-03",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-001",
    "topic": "Bits, bytes e múltiplos de armazenamento",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Sobre bits, bytes e múltiplos de armazenamento, as afirmações estão adequadas, EXCETO uma. Identifique a INCORRETA.",
    "options": [
      "Oito bytes equivalem a um bit.",
      "Um byte possui oito bits.",
      "KiB usa a base binária, equivalente a 1.024 bytes.",
      "MB e Mb não são a mesma unidade: o primeiro usa bytes e o segundo bits."
    ],
    "answer": 0,
    "optionComments": [
      "Correta segundo o comando EXCETO. A afirmação é tecnicamente falsa: Um byte possui oito bits: oito bytes representam 64 bits, não um único bit.",
      "Não é a exceção: esta afirmação é verdadeira porque Um byte contém oito bits por definição, independentemente do arquivo armazenado.",
      "Não é a exceção: esta afirmação é verdadeira porque KiB usa o prefixo binário 2¹⁰, equivalente a 1.024 bytes.",
      "Não é a exceção: esta afirmação é verdadeira porque B maiúsculo representa byte e b minúsculo representa bit; as grandezas diferem por fator oito."
    ],
    "explanation": "O comando EXCETO solicita a única proposição incorreta. Ela afirma «Oito bytes equivalem a um bit.», porém: Um byte possui oito bits: oito bytes representam 64 bits, não um único bit. As demais correspondem a conceitos ou procedimentos válidos.",
    "concept": "Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
    "trap": "Erro típico: afirmar que 1 KiB vale 1.000 bytes ou multiplicar velocidade sem converter bit para byte. Em provas, registre a conta e o arredondamento.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
    "newExample": "Um documento de 8.192 bits contém 1.024 bytes.",
    "challenge": "Converta 16.384 bits para bytes e depois para KiB.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-001-04",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-001",
    "topic": "Bits, bytes e múltiplos de armazenamento",
    "type": "associacao",
    "difficulty": "dificil",
    "stem": "Associe cada termo à definição correspondente. Termos: A) bit; B) byte; C) KiB. Definições: 1) oito bits; 2) 1.024 bytes; 3) dígito binário. Assinale a sequência para A–B–C.",
    "options": [
      "1 – 2 – 3",
      "3 – 1 – 2",
      "1 – 3 – 2",
      "2 – 1 – 3"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: A foi ligado à definição 1, mas exige 3; B foi ligado à definição 2, mas exige 1; C foi ligado à definição 3, mas exige 2. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
      "Correta: A corresponde à definição 3; B corresponde à definição 1; C corresponde à definição 2. Associação correta: bit = dígito binário; byte = oito bits; KiB = 1.024 bytes. Fundamento complementar: Bits, bytes e múltiplos de armazenamento. Confronte a alternativa com as condições da situação e descarte procedimentos que apenas mudam nomes ou aparências.",
      "Incorreta: A foi ligado à definição 1, mas exige 3; B foi ligado à definição 3, mas exige 1. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
      "Incorreta: A foi ligado à definição 2, mas exige 3; C foi ligado à definição 3, mas exige 2. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias."
    ],
    "explanation": "Associação correta: bit = dígito binário; byte = oito bits; KiB = 1.024 bytes. Fundamento complementar: Bits, bytes e múltiplos de armazenamento. Confronte a alternativa com as condições da situação e descarte procedimentos que apenas mudam nomes ou aparências.",
    "concept": "Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
    "trap": "Erro típico: afirmar que 1 KiB vale 1.000 bytes ou multiplicar velocidade sem converter bit para byte. Em provas, registre a conta e o arredondamento.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
    "newExample": "Um pendrive anunciado em GB decimal pode apresentar número diferente quando exibido em GiB.",
    "challenge": "Explique por que capacidade anunciada e exibida podem divergir sem defeito.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-002-01",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-002",
    "topic": "HD, SSD, pendrive, cartões e mídias ópticas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item sobre hd, ssd, pendrive, cartões e mídias ópticas: Um SSD geralmente não possui partes móveis para a leitura de dados.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A opção CERTO é a resposta: A proposição é verdadeira no contexto descrito. HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
      "ERRADO não se aplica: A proposição é verdadeira no contexto descrito. HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança."
    ],
    "explanation": "A proposição é verdadeira no contexto descrito. HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
    "concept": "HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico.",
    "trap": "Erro comum: tratar pendrive como backup suficiente ou supor que todo computador atual possui leitor de DVD.",
    "examTip": "Verifique as informações e distinções apresentadas antes de marcar uma alternativa. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
    "newExample": "Um SSD portátil acessa dados em memória flash, diferente de um HD magnético.",
    "challenge": "Qual mídia escolher se o equipamento não possui leitor de DVD?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-002-02",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-002",
    "topic": "HD, SSD, pendrive, cartões e mídias ópticas",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Analise separadamente as afirmações e assinale a combinação correta: I. Todo computador tem obrigatoriamente leitor de DVD. II. HDs convencionais empregam discos magnéticos giratórios. III. Um HD magnético usa exclusivamente chips flash para guardar arquivos.",
    "options": [
      "Apenas II",
      "Apenas I e III",
      "I, II e III",
      "Apenas I e II"
    ],
    "answer": 0,
    "optionComments": [
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Muitos computadores não incluem unidade óptica; não é componente obrigatório. 2) HD magnético lê e grava em pratos giratórios. 3) Flash é típica de SSDs e pendrives, não a tecnologia exclusiva de um HD magnético.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é falso porque Muitos computadores não incluem unidade óptica; não é componente obrigatório. II é verdadeiro porque HD magnético lê e grava em pratos giratórios. III é falso porque Flash é típica de SSDs e pendrives, não a tecnologia exclusiva de um HD magnético.",
      "Incorreta. A classificação diverge no(s) item(ns) I, III: I é falso porque Muitos computadores não incluem unidade óptica; não é componente obrigatório. III é falso porque Flash é típica de SSDs e pendrives, não a tecnologia exclusiva de um HD magnético.",
      "Incorreta. A classificação diverge no(s) item(ns) I: I é falso porque Muitos computadores não incluem unidade óptica; não é componente obrigatório."
    ],
    "explanation": "Resolução individual das assertivas: I: F — Muitos computadores não incluem unidade óptica; não é componente obrigatório. II: V — HD magnético lê e grava em pratos giratórios. III: F — Flash é típica de SSDs e pendrives, não a tecnologia exclusiva de um HD magnético.",
    "concept": "HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico.",
    "trap": "Erro comum: tratar pendrive como backup suficiente ou supor que todo computador atual possui leitor de DVD.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
    "newExample": "Uma estação sem leitor óptico não abre um DVD só pela presença do disco.",
    "challenge": "Que característica técnica distingue HD magnético e SSD?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-002-03",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-002",
    "topic": "HD, SSD, pendrive, cartões e mídias ópticas",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "No exame dos procedimentos de armazenamento, unidades e formatos de arquivo, avalie I, II e III e escolha as afirmações verdadeiras: I. Um SSD geralmente não possui partes móveis para a leitura de dados. II. Um HD magnético usa exclusivamente chips flash para guardar arquivos. III. HDs convencionais empregam discos magnéticos giratórios.",
    "options": [
      "I, II e III",
      "Apenas I e III",
      "Apenas I",
      "Apenas II e III"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) II: II é falso porque HD magnético utiliza pratos giratórios; chips flash são típicos do SSD.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança. 2) HD magnético utiliza pratos giratórios; chips flash são típicos do SSD. 3) HD magnético lê e grava em pratos giratórios.",
      "Incorreta. A classificação diverge no(s) item(ns) III: III é verdadeiro porque HD magnético lê e grava em pratos giratórios.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II: I é verdadeiro porque HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança. II é falso porque HD magnético utiliza pratos giratórios; chips flash são típicos do SSD."
    ],
    "explanation": "As afirmações precisam ser julgadas individualmente: I=V: HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança. II=F: HD magnético utiliza pratos giratórios; chips flash são típicos do SSD. III=V: HD magnético lê e grava em pratos giratórios.",
    "concept": "HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico.",
    "trap": "Erro comum: tratar pendrive como backup suficiente ou supor que todo computador atual possui leitor de DVD.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
    "newExample": "Um pendrive cabe no bolso, mas pode ser perdido e exige cópia de segurança.",
    "challenge": "Por que a única cópia de um relatório não deve ficar num pendrive?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-002-04",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-002",
    "topic": "HD, SSD, pendrive, cartões e mídias ópticas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Considere a situação de trabalho: O setor quer uma mídia portátil para cópia temporária de relatórios não sigilosos, sem depender de leitor óptico. Assinale a alternativa TECNICAMENTE CORRETA.",
    "options": [
      "Escolher mídia óptica sem conferir se os equipamentos têm unidade leitora.",
      "Armazenar a única cópia na RAM, presumindo persistência ao desligar.",
      "Utilizar uma unidade USB compatível e conferir a cópia antes de removê-la.",
      "Dispensar a conferência do arquivo copiado porque a mídia é eletrônica."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: Mídia óptica exige leitor compatível, que pode faltar nos equipamentos.",
      "Incorreta: RAM perde conteúdo sem energia e não serve como única cópia persistente.",
      "Correta: Utilizar uma unidade USB compatível e conferir a cópia antes de removê-la. HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
      "Incorreta: Ser eletrônico não comprova integridade da cópia; ela deve ser conferida."
    ],
    "explanation": "Utilizar uma unidade USB compatível e conferir a cópia antes de removê-la. HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico.",
    "concept": "HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico.",
    "trap": "Erro comum: tratar pendrive como backup suficiente ou supor que todo computador atual possui leitor de DVD.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
    "newExample": "Uma unidade externa pode usar HD ou SSD; “externo” não descreve o mecanismo interno.",
    "challenge": "Que testes confirmar após copiar arquivos para armazenamento externo?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-003-01",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-003",
    "topic": "Arquivos, pastas, caminhos e extensões",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item sobre arquivos, pastas, caminhos e extensões: Um caminho relativo indica necessariamente toda a unidade desde a raiz.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "CERTO não se aplica: A proposição é falsa porque confunde conceitos ou atribui uma função inexistente. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo. Um caminho relativo indica necessariamente toda a unidade desde a raiz. A regra correta é: Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
      "A opção ERRADO é a resposta: A proposição é falsa porque confunde conceitos ou atribui uma função inexistente. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo. Um caminho relativo indica necessariamente toda a unidade desde a raiz. A regra correta é: Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato."
    ],
    "explanation": "A proposição é falsa porque confunde conceitos ou atribui uma função inexistente. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo. Um caminho relativo indica necessariamente toda a unidade desde a raiz. A regra correta é: Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "concept": "Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "trap": "Erro comum: pensar que ocultar extensões converte o documento ou que arquivos homônimos em pastas diferentes são o mesmo item.",
    "examTip": "Verifique as informações e distinções apresentadas antes de marcar uma alternativa. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo.",
    "newExample": "O documento “C:\\Atas\\2026\\janeiro.pdf” possui caminho absoluto.",
    "challenge": "Como saber se um caminho é absoluto no Windows?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-003-02",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-003",
    "topic": "Arquivos, pastas, caminhos e extensões",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue cada afirmação e assinale a sequência V/F correta: I. Pastas podem ser aninhadas em níveis. II. A ocultação de extensões apaga os formatos internos dos arquivos. III. Extensão é parte do nome do arquivo, embora possa ficar oculta no Explorador.",
    "options": [
      "V – V – F",
      "V – F – V",
      "F – V – F",
      "F – F – V"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) II, III: II é falso porque Ocultar a exibição da extensão não altera a estrutura interna do arquivo. III é verdadeiro porque A extensão integra o nome e pode ficar oculta por configuração do Explorador.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Diretórios podem estar contidos em outros diretórios. 2) Ocultar a exibição da extensão não altera a estrutura interna do arquivo. 3) A extensão integra o nome e pode ficar oculta por configuração do Explorador.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é verdadeiro porque Diretórios podem estar contidos em outros diretórios. II é falso porque Ocultar a exibição da extensão não altera a estrutura interna do arquivo. III é verdadeiro porque A extensão integra o nome e pode ficar oculta por configuração do Explorador.",
      "Incorreta. A classificação diverge no(s) item(ns) I: I é verdadeiro porque Diretórios podem estar contidos em outros diretórios."
    ],
    "explanation": "Resolução individual das assertivas: I: V — Diretórios podem estar contidos em outros diretórios. II: F — Ocultar a exibição da extensão não altera a estrutura interna do arquivo. III: V — A extensão integra o nome e pode ficar oculta por configuração do Explorador.",
    "concept": "Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "trap": "Erro comum: pensar que ocultar extensões converte o documento ou que arquivos homônimos em pastas diferentes são o mesmo item.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo.",
    "newExample": "Um nome relativo como “relatorio.pdf” depende da pasta na qual se procura.",
    "challenge": "O que falta para localizar um arquivo indicado apenas por nome relativo?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-003-03",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-003",
    "topic": "Arquivos, pastas, caminhos e extensões",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Em uma rotina administrativa, julgue V (verdadeiro) ou F (falso) cada enunciado e assinale a sequência correta: I. Pastas podem ser aninhadas em níveis. II. Um caminho absoluto localiza o arquivo em relação à raiz ou unidade. III. Todo arquivo deve ficar diretamente na raiz da unidade.",
    "options": [
      "V – V – V",
      "V – F – F",
      "V – V – F",
      "F – V – F"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) III: III é falso porque Arquivos podem ser organizados em subpastas, não precisam ficar na raiz.",
      "Incorreta. A classificação diverge no(s) item(ns) II: II é verdadeiro porque Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Diretórios podem estar contidos em outros diretórios. 2) Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo. 3) Arquivos podem ser organizados em subpastas, não precisam ficar na raiz.",
      "Incorreta. A classificação diverge no(s) item(ns) I: I é verdadeiro porque Diretórios podem estar contidos em outros diretórios."
    ],
    "explanation": "As afirmações precisam ser julgadas individualmente: I=V: Diretórios podem estar contidos em outros diretórios. II=V: Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo. III=F: Arquivos podem ser organizados em subpastas, não precisam ficar na raiz.",
    "concept": "Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "trap": "Erro comum: pensar que ocultar extensões converte o documento ou que arquivos homônimos em pastas diferentes são o mesmo item.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo.",
    "newExample": "O Explorador pode ocultar a extensão sem modificar bytes do arquivo.",
    "challenge": "Por que mostrar extensões ajuda a identificar tipo sem realizar conversão?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-003-04",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-003",
    "topic": "Arquivos, pastas, caminhos e extensões",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Complete a lacuna para orientar a equipe: “Uma pessoa salvou relatorio.pdf em duas pastas diferentes e precisa localizar a versão de novembro. Nessa situação, deve-se ____.”",
    "options": [
      "Comparar somente os nomes, pois o sistema nunca aceita arquivos homônimos.",
      "Decidir exclusivamente pela extensão .pdf, ignorando a pasta de origem.",
      "Selecionar o primeiro resultado de pesquisa sem conferir o caminho e a data.",
      "Conferir o caminho completo de cada cópia, não apenas o nome do arquivo."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: O sistema aceita nomes iguais em caminhos diferentes; nome sozinho não identifica versão.",
      "Incorreta: A extensão indica formato, não qual das cópias está atualizada.",
      "Incorreta: O primeiro resultado pode ser cópia antiga ou de outra pasta; confira caminho e data.",
      "Correta: Conferir o caminho completo de cada cópia, não apenas o nome do arquivo. Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo."
    ],
    "explanation": "Conferir o caminho completo de cada cópia, não apenas o nome do arquivo. Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "concept": "Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "trap": "Erro comum: pensar que ocultar extensões converte o documento ou que arquivos homônimos em pastas diferentes são o mesmo item.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo.",
    "newExample": "As pastas “A” e “B” podem conter arquivos com mesmo nome, mas destinos diferentes.",
    "challenge": "Como conferir que uma cópia de documento está na pasta correta?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-004-01",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-004",
    "topic": "Sistemas de arquivos e permissões básicas",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item sobre sistemas de arquivos e permissões básicas: NTFS pode empregar permissões de acesso a arquivos e diretórios.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A opção CERTO é a resposta: A proposição é verdadeira no contexto descrito. Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
      "ERRADO não se aplica: A proposição é verdadeira no contexto descrito. Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas."
    ],
    "explanation": "A proposição é verdadeira no contexto descrito. Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
    "concept": "Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas.",
    "trap": "Erro comum: usar acesso de leitura como prova de que há autorização para excluir ou modificar. Nunca contorne regras de acesso: solicite correção pelos canais oficiais.",
    "examTip": "Verifique as informações e distinções apresentadas antes de marcar uma alternativa. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
    "newExample": "Um servidor possui leitura de ata, mas não pode substituí-la porque falta permissão de escrita.",
    "challenge": "Qual permissão falta para editar um arquivo que já pode ser lido?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-004-02",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-004",
    "topic": "Sistemas de arquivos e permissões básicas",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Analise separadamente as afirmações e assinale a combinação correta: I. Todos os sistemas de arquivos implementam permissões idênticas. II. O sistema de arquivos define como dados e metadados são organizados na mídia. III. Uma permissão de leitura não implica automaticamente autorização para modificar arquivos.",
    "options": [
      "Apenas II",
      "Apenas I e III",
      "Apenas II e III",
      "I, II e III"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) III: III é verdadeiro porque Leitura e modificação são operações distintas, sujeitas a direitos específicos.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II: I é falso porque NTFS, exFAT e outros sistemas de arquivos têm funcionalidades distintas, inclusive quanto a permissões. II é verdadeiro porque A organização de blocos, diretórios e metadados é papel do sistema de arquivos.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) NTFS, exFAT e outros sistemas de arquivos têm funcionalidades distintas, inclusive quanto a permissões. 2) A organização de blocos, diretórios e metadados é papel do sistema de arquivos. 3) Leitura e modificação são operações distintas, sujeitas a direitos específicos.",
      "Incorreta. A classificação diverge no(s) item(ns) I: I é falso porque NTFS, exFAT e outros sistemas de arquivos têm funcionalidades distintas, inclusive quanto a permissões."
    ],
    "explanation": "Resolução individual das assertivas: I: F — NTFS, exFAT e outros sistemas de arquivos têm funcionalidades distintas, inclusive quanto a permissões. II: V — A organização de blocos, diretórios e metadados é papel do sistema de arquivos. III: V — Leitura e modificação são operações distintas, sujeitas a direitos específicos.",
    "concept": "Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas.",
    "trap": "Erro comum: usar acesso de leitura como prova de que há autorização para excluir ou modificar. Nunca contorne regras de acesso: solicite correção pelos canais oficiais.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
    "newExample": "Uma unidade NTFS pode combinar regras de acesso por conta e pasta.",
    "challenge": "Por que copiar o mesmo arquivo para outra pasta não concede automaticamente acesso ao original?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-004-03",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-004",
    "topic": "Sistemas de arquivos e permissões básicas",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Sobre sistemas de arquivos e permissões básicas, as afirmações estão adequadas, EXCETO uma. Identifique a INCORRETA.",
    "options": [
      "NTFS pode empregar permissões de acesso a arquivos e diretórios.",
      "O sistema de arquivos define como dados e metadados são organizados na mídia.",
      "Uma permissão de leitura não implica automaticamente autorização para modificar arquivos.",
      "Uma conta sem direito de escrita deve conseguir alterar todos os arquivos protegidos."
    ],
    "answer": 3,
    "optionComments": [
      "Não é a exceção: esta afirmação é verdadeira porque NTFS oferece controle de acesso e metadados de permissões em sistemas Windows compatíveis.",
      "Não é a exceção: esta afirmação é verdadeira porque Um sistema de arquivos define organização de registros, arquivos e metadados na mídia.",
      "Não é a exceção: esta afirmação é verdadeira porque Direito de leitura não autoriza automaticamente modificar, salvar ou excluir o mesmo objeto.",
      "Correta segundo o comando EXCETO. A afirmação é tecnicamente falsa: Sem direito de escrita, a conta não pode modificar livremente arquivos protegidos."
    ],
    "explanation": "O comando EXCETO solicita a única proposição incorreta. Ela afirma «Uma conta sem direito de escrita deve conseguir alterar todos os arquivos protegidos.», porém: Sem direito de escrita, a conta não pode modificar livremente arquivos protegidos. As demais correspondem a conceitos ou procedimentos válidos.",
    "concept": "Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas.",
    "trap": "Erro comum: usar acesso de leitura como prova de que há autorização para excluir ou modificar. Nunca contorne regras de acesso: solicite correção pelos canais oficiais.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
    "newExample": "Dois sistemas de arquivos podem diferir quanto a metadados e controle de permissão.",
    "challenge": "Que diferença pode existir entre NTFS e exFAT quanto a permissões?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-004-04",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-004",
    "topic": "Sistemas de arquivos e permissões básicas",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Analise o caso de atendimento: Um servidor consegue abrir um relatório numa pasta compartilhada, mas não salvar alterações nela. Qual procedimento preserva a função descrita?",
    "options": [
      "Verificar se possui permissão de escrita além da permissão de leitura.",
      "Deduzir que a permissão de leitura inclui automaticamente modificar e excluir.",
      "Trocar a extensão do relatório para obter a permissão de escrita.",
      "Compartilhar outro link para o mesmo arquivo sem revisar as permissões existentes."
    ],
    "answer": 0,
    "optionComments": [
      "Correta: Verificar se possui permissão de escrita além da permissão de leitura. Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
      "Incorreta: Direito de ler não inclui necessariamente modificar ou excluir.",
      "Incorreta: A extensão faz parte do nome e não muda a autorização do usuário.",
      "Incorreta: Compartilhar novamente sem conferir regras efetivas pode manter o bloqueio."
    ],
    "explanation": "Verificar se possui permissão de escrita além da permissão de leitura. Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas.",
    "concept": "Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas.",
    "trap": "Erro comum: usar acesso de leitura como prova de que há autorização para excluir ou modificar. Nunca contorne regras de acesso: solicite correção pelos canais oficiais.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
    "newExample": "Uma pasta compartilhada exige verificar direitos de rede e do arquivo.",
    "challenge": "Quais camadas conferir ao receber “acesso negado” numa pasta de rede?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-005-01",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-005",
    "topic": "Compressão, extração e formatos ZIP e similares",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item sobre compressão, extração e formatos zip e similares: ZIP pode reunir múltiplos arquivos e pastas numa única estrutura.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "A opção CERTO é a resposta: A proposição é verdadeira no contexto descrito. Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
      "ERRADO não se aplica: A proposição é verdadeira no contexto descrito. Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP."
    ],
    "explanation": "A proposição é verdadeira no contexto descrito. Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
    "concept": "Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote.",
    "trap": "Erro comum: supor que extração executa programas automaticamente ou que toda compactação terá a mesma redução percentual.",
    "examTip": "Verifique as informações e distinções apresentadas antes de marcar uma alternativa. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
    "newExample": "Um arquivo ZIP pode reunir três relatórios e seus nomes numa única estrutura.",
    "challenge": "Quando a compactação sem perdas permite restaurar o conteúdo exato?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-005-02",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-005",
    "topic": "Compressão, extração e formatos ZIP e similares",
    "type": "vf",
    "difficulty": "media",
    "stem": "Julgue cada afirmação e assinale a sequência V/F correta: I. Compactação sem perdas permite reconstruir os dados originais. II. Arquivos já comprimidos podem oferecer pouca redução adicional. III. Extrair um ZIP significa abrir automaticamente todos os executáveis contidos nele.",
    "options": [
      "F – V – F",
      "F – F – V",
      "V – F – F",
      "V – V – F"
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) I: I é verdadeiro porque Compressão sem perdas permite recuperar os dados originais com fidelidade.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é verdadeiro porque Compressão sem perdas permite recuperar os dados originais com fidelidade. II é verdadeiro porque Um arquivo já comprimido tem pouca redundância explorável adicional. III é falso porque Extrair descompacta conteúdo, mas não equivale a executar programas nele contidos.",
      "Incorreta. A classificação diverge no(s) item(ns) II: II é verdadeiro porque Um arquivo já comprimido tem pouca redundância explorável adicional.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Compressão sem perdas permite recuperar os dados originais com fidelidade. 2) Um arquivo já comprimido tem pouca redundância explorável adicional. 3) Extrair descompacta conteúdo, mas não equivale a executar programas nele contidos."
    ],
    "explanation": "Resolução individual das assertivas: I: V — Compressão sem perdas permite recuperar os dados originais com fidelidade. II: V — Um arquivo já comprimido tem pouca redundância explorável adicional. III: F — Extrair descompacta conteúdo, mas não equivale a executar programas nele contidos.",
    "concept": "Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote.",
    "trap": "Erro comum: supor que extração executa programas automaticamente ou que toda compactação terá a mesma redução percentual.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
    "newExample": "Um JPEG já comprimido pode encolher muito pouco dentro de novo ZIP.",
    "challenge": "Por que dois arquivos de tamanhos iguais podem ter compressibilidade distinta?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-005-03",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-005",
    "topic": "Compressão, extração e formatos ZIP e similares",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "No exame dos procedimentos de armazenamento, unidades e formatos de arquivo, avalie I, II e III e escolha as afirmações verdadeiras: I. Compactar um arquivo é o mesmo que criptografá-lo obrigatoriamente. II. ZIP pode reunir múltiplos arquivos e pastas numa única estrutura. III. Compactação sem perdas permite reconstruir os dados originais.",
    "options": [
      "I, II e III",
      "Apenas I",
      "Apenas I e II",
      "Apenas II e III"
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) I: I é falso porque Compactação e criptografia são operações distintas; uma não implica a outra.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é falso porque Compactação e criptografia são operações distintas; uma não implica a outra. II é verdadeiro porque Um arquivo já comprimido tem pouca redundância explorável adicional. III é verdadeiro porque Compressão sem perdas permite recuperar os dados originais com fidelidade.",
      "Incorreta. A classificação diverge no(s) item(ns) I, III: I é falso porque Compactação e criptografia são operações distintas; uma não implica a outra. III é verdadeiro porque Compressão sem perdas permite recuperar os dados originais com fidelidade.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Compactação e criptografia são operações distintas; uma não implica a outra. 2) Um arquivo já comprimido tem pouca redundância explorável adicional. 3) Compressão sem perdas permite recuperar os dados originais com fidelidade."
    ],
    "explanation": "As afirmações precisam ser julgadas individualmente: I=F: Compactação e criptografia são operações distintas; uma não implica a outra. II=V: Um arquivo já comprimido tem pouca redundância explorável adicional. III=V: Compressão sem perdas permite recuperar os dados originais com fidelidade.",
    "concept": "Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote.",
    "trap": "Erro comum: supor que extração executa programas automaticamente ou que toda compactação terá a mesma redução percentual.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
    "newExample": "Extrair arquivos não significa executá-los nem verificar se são confiáveis.",
    "challenge": "Como distinguir abrir lista de conteúdo de extrair os itens?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-005-04",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-005",
    "topic": "Compressão, extração e formatos ZIP e similares",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Considere a situação de trabalho: Uma equipe recebeu arquivo.zip com relatórios e precisa editar o conteúdo de um dos documentos. Assinale a alternativa TECNICAMENTE CORRETA.",
    "options": [
      "Alterar a extensão de .zip para .docx, esperando que o relatório apareça pronto.",
      "Extrair o documento para local apropriado e abri-lo em aplicativo compatível.",
      "Abrir o pacote sem inspecionar os itens e executar automaticamente arquivos desconhecidos.",
      "Tratar a compressão ZIP como permissão para editar qualquer formato interno sem extração."
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta: Trocar extensão de ZIP não extrai nem converte conteúdo.",
      "Correta: Extrair o documento para local apropriado e abri-lo em aplicativo compatível. Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
      "Incorreta: Executar itens desconhecidos ao abrir pacote amplia o risco de segurança.",
      "Incorreta: Compactação não dispensa extrair ou usar aplicativo que leia o formato interno."
    ],
    "explanation": "Extrair o documento para local apropriado e abri-lo em aplicativo compatível. Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote.",
    "concept": "Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote.",
    "trap": "Erro comum: supor que extração executa programas automaticamente ou que toda compactação terá a mesma redução percentual.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
    "newExample": "Uma equipe confere extensões e remetente antes de abrir arquivo compactado.",
    "challenge": "Que verificações de segurança são recomendadas ao receber um ZIP não esperado?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-006-01",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-006",
    "topic": "PDF, documentos, planilhas, imagens e arquivos executáveis",
    "type": "ce",
    "difficulty": "media",
    "stem": "Julgue o item sobre pdf, documentos, planilhas, imagens e arquivos executáveis: Toda página de PDF é texto editável automaticamente.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "CERTO não se aplica: A proposição é falsa porque confunde conceitos ou atribui uma função inexistente. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais. Toda página de PDF é texto editável automaticamente. A regra correta é: PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
      "A opção ERRADO é a resposta: A proposição é falsa porque confunde conceitos ou atribui uma função inexistente. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais. Toda página de PDF é texto editável automaticamente. A regra correta é: PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows."
    ],
    "explanation": "A proposição é falsa porque confunde conceitos ou atribui uma função inexistente. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais. Toda página de PDF é texto editável automaticamente. A regra correta é: PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
    "concept": "PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
    "trap": "Erro comum: assumir que todo PDF é texto ou que imagem PNG é um programa executável só por estar no mesmo diretório.",
    "examTip": "Verifique as informações e distinções apresentadas antes de marcar uma alternativa. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais.",
    "newExample": "Um documento DOCX pode ser editado; PDF pode priorizar distribuição de layout.",
    "challenge": "Como transformar um documento editável em PDF sem apenas renomeá-lo?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-006-02",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-006",
    "topic": "PDF, documentos, planilhas, imagens e arquivos executáveis",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "Analise separadamente as afirmações e assinale a combinação correta: I. Trocar .xlsx por .pdf altera corretamente o conteúdo para PDF. II. XLSX é formato relacionado a planilhas eletrônicas. III. Um arquivo .png é, por definição, um aplicativo executável Windows.",
    "options": [
      "Apenas II",
      "Apenas I e III",
      "I, II e III",
      "Apenas I e II"
    ],
    "answer": 0,
    "optionComments": [
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Renomear a extensão não converte internamente uma planilha em PDF. 2) XLSX armazena estruturas de planilha eletrônica. 3) PNG é formato de imagem, não executável do Windows por definição.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é falso porque Renomear a extensão não converte internamente uma planilha em PDF. II é verdadeiro porque XLSX armazena estruturas de planilha eletrônica. III é falso porque PNG é formato de imagem, não executável do Windows por definição.",
      "Incorreta. A classificação diverge no(s) item(ns) I, III: I é falso porque Renomear a extensão não converte internamente uma planilha em PDF. III é falso porque PNG é formato de imagem, não executável do Windows por definição.",
      "Incorreta. A classificação diverge no(s) item(ns) I: I é falso porque Renomear a extensão não converte internamente uma planilha em PDF."
    ],
    "explanation": "Resolução individual das assertivas: I: F — Renomear a extensão não converte internamente uma planilha em PDF. II: V — XLSX armazena estruturas de planilha eletrônica. III: F — PNG é formato de imagem, não executável do Windows por definição.",
    "concept": "PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
    "trap": "Erro comum: assumir que todo PDF é texto ou que imagem PNG é um programa executável só por estar no mesmo diretório.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais.",
    "newExample": "Uma planilha XLSX contém estrutura de células e fórmulas, diferente de imagem PNG.",
    "challenge": "Que recurso pode tornar pesquisável um PDF composto apenas de imagens?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-006-03",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-006",
    "topic": "PDF, documentos, planilhas, imagens e arquivos executáveis",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Em uma rotina administrativa, julgue V (verdadeiro) ou F (falso) cada enunciado e assinale a sequência correta: I. PDF é usualmente empregado para compartilhar documentos com apresentação preservada. II. Um arquivo .png é, por definição, um aplicativo executável Windows. III. XLSX é formato relacionado a planilhas eletrônicas.",
    "options": [
      "V – V – V",
      "V – F – V",
      "V – F – F",
      "F – V – F"
    ],
    "answer": 1,
    "optionComments": [
      "Incorreta. A classificação diverge no(s) item(ns) II: II é falso porque Renomear extensão não converte conteúdo nem transforma PNG em aplicativo.",
      "Correta. Todos os julgamentos correspondem aos fundamentos: 1) Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais. 2) Renomear extensão não converte conteúdo nem transforma PNG em aplicativo. 3) XLSX armazena estruturas de planilha eletrônica.",
      "Incorreta. A classificação diverge no(s) item(ns) III: III é verdadeiro porque XLSX armazena estruturas de planilha eletrônica.",
      "Incorreta. A classificação diverge no(s) item(ns) I, II, III: I é verdadeiro porque Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais. II é falso porque Renomear extensão não converte conteúdo nem transforma PNG em aplicativo. III é verdadeiro porque XLSX armazena estruturas de planilha eletrônica."
    ],
    "explanation": "As afirmações precisam ser julgadas individualmente: I=V: Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais. II=F: Renomear extensão não converte conteúdo nem transforma PNG em aplicativo. III=V: XLSX armazena estruturas de planilha eletrônica.",
    "concept": "PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
    "trap": "Erro comum: assumir que todo PDF é texto ou que imagem PNG é um programa executável só por estar no mesmo diretório.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais.",
    "newExample": "Um PDF escaneado pode exigir OCR para permitir busca textual.",
    "challenge": "Por que mudar o nome para .png não transforma uma planilha em imagem?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-03-006-04",
    "moduleId": "INF-03",
    "subtopicId": "INF-03-006",
    "topic": "PDF, documentos, planilhas, imagens e arquivos executáveis",
    "type": "associacao",
    "difficulty": "dificil",
    "stem": "Associe cada termo à definição correspondente. Termos: A) DOCX; B) XLSX; C) PNG. Definições: 1) imagem; 2) documento de texto; 3) planilha. Assinale a sequência para A–B–C.",
    "options": [
      "1 – 2 – 3",
      "1 – 3 – 2",
      "2 – 3 – 1",
      "2 – 1 – 3"
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: A foi ligado à definição 1, mas exige 2; B foi ligado à definição 2, mas exige 3; C foi ligado à definição 3, mas exige 1. PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
      "Incorreta: A foi ligado à definição 1, mas exige 2; C foi ligado à definição 2, mas exige 1. PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
      "Correta: A corresponde à definição 2; B corresponde à definição 3; C corresponde à definição 1. Associação correta: DOCX = documento de texto; XLSX = planilha; PNG = imagem. Fundamento complementar: PDF, documentos, planilhas, imagens e arquivos executáveis. Confronte a alternativa com as condições da situação e descarte procedimentos que apenas mudam nomes ou aparências.",
      "Incorreta: B foi ligado à definição 1, mas exige 3; C foi ligado à definição 3, mas exige 1. PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows."
    ],
    "explanation": "Associação correta: DOCX = documento de texto; XLSX = planilha; PNG = imagem. Fundamento complementar: PDF, documentos, planilhas, imagens e arquivos executáveis. Confronte a alternativa com as condições da situação e descarte procedimentos que apenas mudam nomes ou aparências.",
    "concept": "PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
    "trap": "Erro comum: assumir que todo PDF é texto ou que imagem PNG é um programa executável só por estar no mesmo diretório.",
    "examTip": "Analise cada afirmação ou decisão à luz do caso, sem escolher pela letra da opção. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais.",
    "newExample": "Um EXE recebido de remetente desconhecido não deve ser executado sem verificação de origem.",
    "challenge": "Qual cuidado tomar antes de abrir arquivos executáveis não solicitados?",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  }
];
