/** INF-ESTUDO — Fase D/Lote 1-R: material pedagógico autoral revisto. */
export const INF_03_LESSONS = {
  "INF-03-001": {
    "id": "INF-03-001",
    "objective": "Explicar bits, bytes e múltiplos de armazenamento.",
    "concept": "Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias.",
    "explanation": "O bit é unidade binária de informação; oito bits compõem um byte. Convenções usam b minúsculo para bit e B maiúsculo para byte, embora sistemas e fabricantes nem sempre sejam rigorosos em apresentações. Prefixos decimais usam múltiplos de mil: kB = 1.000 bytes e MB = 1.000.000 bytes; prefixos binários usam potências de 1.024: KiB = 1.024 bytes e MiB = 1.048.576 bytes. Para comparar taxa de transmissão e tamanho, converta as unidades: uma taxa teórica de 80 Mb/s corresponde a 10 MB/s antes de descontar protocolos e condições reais. Não confunda capacidade anunciada com espaço disponível ao usuário, pois há diferenças de unidade e espaço ocupado por metadados e sistema.",
    "example": "Um arquivo de 2.048 bytes corresponde exatamente a 2 KiB, mas a 2,048 kB em notação decimal. Aplicação administrativa: A equipe recebeu um arquivo com 4.096 bytes e deseja expressar o valor em KiB. Justificativa: Registrar 4 KiB, porque 4.096 ÷ 1.024 = 4.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Um KiB equivale exatamente a mil bytes.",
    "summary": "Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias. Um byte possui oito bits.",
    "reviewQuestion": "Qual é o valor em KiB de um arquivo com 3.072 bytes?",
    "reviewAnswer": "3.072 bytes ÷ 1.024 bytes por KiB = 3 KiB. É importante não trocar 3.072 por 4.096 na conta.",
    "introduction": "Uma conexão de rede indicada em Mb/s e um arquivo indicado em MB não estão na mesma unidade. Interpretar essa diferença é essencial para questões de concursos.",
    "differences": "MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo.",
    "commonMistakes": "Erro típico: afirmar que 1 KiB vale 1.000 bytes ou multiplicar velocidade sem converter bit para byte. Em provas, registre a conta e o arredondamento."
  },
  "INF-03-002": {
    "id": "INF-03-002",
    "objective": "Explicar hd, ssd, pendrive, cartões e mídias ópticas.",
    "concept": "HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico.",
    "explanation": "HDs magnéticos convencionais usam pratos giratórios e mecanismos de leitura; SSDs armazenam dados em memória flash, sem partes mecânicas móveis no caminho de leitura. Pendrives e cartões também costumam usar flash, mas características de resistência e velocidade variam. Mídias ópticas como CD, DVD e Blu-ray dependem de leitor compatível e não estão presentes em todos os computadores. A escolha depende de frequência de acesso, desempenho exigido, transferência entre equipes e políticas de proteção. Nenhuma dessas mídias substitui uma estratégia de backup: falhas físicas, remoção indevida, roubo e erro humano podem afetar todas elas. Em órgãos públicos, mídias removíveis podem ser sujeitas a controles específicos.",
    "example": "Um SSD substituiu um HD em um terminal de atendimento; o sistema passou a abrir aplicativos mais rapidamente, mas backups continuaram necessários. Aplicação administrativa: O setor quer uma mídia portátil para cópia temporária de relatórios não sigilosos, sem depender de leitor óptico. Justificativa: Utilizar uma unidade USB compatível e conferir a cópia antes de removê-la.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Todo computador tem obrigatoriamente leitor de DVD.",
    "summary": "HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico. Um SSD geralmente não possui partes móveis para a leitura de dados.",
    "reviewQuestion": "Qual diferença física relevante existe entre HD magnético e SSD?",
    "reviewAnswer": "HD magnético usa discos giratórios e mecanismos de leitura; SSD costuma usar memória flash sem partes móveis nesse processo.",
    "introduction": "Ao escolher mídia para armazenar documentos, compare tecnologia, portabilidade, capacidade, custo e risco de perda, em vez de supor que todas se comportam como um HD tradicional.",
    "differences": "HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança.",
    "commonMistakes": "Erro comum: tratar pendrive como backup suficiente ou supor que todo computador atual possui leitor de DVD."
  },
  "INF-03-003": {
    "id": "INF-03-003",
    "objective": "Explicar arquivos, pastas, caminhos e extensões.",
    "concept": "Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato.",
    "explanation": "O caminho identifica a posição de um item numa estrutura de diretórios. Em Windows, um exemplo absoluto é C:\\Setor\\2026\\contrato.pdf; ele parte de uma unidade e indica as pastas percorridas. Um caminho relativo depende de uma pasta de referência. Pastas aninhadas formam níveis; nomes repetidos são permitidos em localizações diferentes. Extensões ajudam a reconhecer o formato e a selecionar programas associados, mas o Explorador pode ocultá-las conforme configuração. Ocultar a extensão muda a apresentação do nome, não o conteúdo. Ao pesquisar arquivos, confira a pasta atual e use critérios adicionais para evitar editar uma versão antiga.",
    "example": "Em C:\\Setor\\2026\\relatorio.xlsx, C: identifica a unidade, Setor e 2026 são pastas, e relatorio.xlsx é o arquivo. Aplicação administrativa: Uma pessoa salvou relatorio.pdf em duas pastas diferentes e precisa localizar a versão de novembro. Justificativa: Conferir o caminho completo de cada cópia, não apenas o nome do arquivo.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Todo arquivo deve ficar diretamente na raiz da unidade.",
    "summary": "Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato. Um caminho absoluto localiza o arquivo em relação à raiz ou unidade.",
    "reviewQuestion": "Por que nomes iguais não são suficientes para identificar um arquivo?",
    "reviewAnswer": "Dois nomes iguais podem estar em diretórios diferentes, ter datas ou conteúdos distintos; caminho completo identifica a localização.",
    "introduction": "Para localizar um contrato, o usuário precisa distinguir o nome do arquivo de seu caminho e compreender por que extensões podem aparecer ocultas.",
    "differences": "Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo.",
    "commonMistakes": "Erro comum: pensar que ocultar extensões converte o documento ou que arquivos homônimos em pastas diferentes são o mesmo item."
  },
  "INF-03-004": {
    "id": "INF-03-004",
    "objective": "Explicar sistemas de arquivos e permissões básicas.",
    "concept": "Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas.",
    "explanation": "Sistemas de arquivos organizam dados e metadados de arquivos e pastas na mídia. NTFS, usado em instalações do Windows, oferece suporte a permissões que podem restringir leitura, modificação e outras operações. Outros sistemas de arquivos possuem características diferentes, por isso não se devem presumir permissões idênticas. Em pastas compartilhadas na rede, o acesso pode depender tanto das permissões do compartilhamento quanto das permissões do próprio arquivo; a regra efetiva precisa considerar ambas. Uma credencial permite identificar o usuário, mas não garante autorização para qualquer operação. Modificar nome ou extensão de um arquivo não eleva privilégios. Antes de pedir alteração de permissões, verifique a necessidade do trabalho e encaminhe ao responsável.",
    "example": "Uma pasta de pessoal permite leitura à equipe autorizada, mas bloqueia alteração para visitantes; a proteção não decorre apenas do nome da pasta. Aplicação administrativa: Um servidor consegue abrir um relatório numa pasta compartilhada, mas não salvar alterações nela. Justificativa: Verificar se possui permissão de escrita além da permissão de leitura.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Trocar o nome de uma pasta concede automaticamente acesso de administrador.",
    "summary": "Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas. NTFS pode empregar permissões de acesso a arquivos e diretórios.",
    "reviewQuestion": "Por que a possibilidade de ler um arquivo não prova poder de edição?",
    "reviewAnswer": "Permissão de leitura autoriza consultar dados, enquanto editar exige direitos específicos de escrita ou modificação, que podem faltar.",
    "introduction": "Uma pessoa consegue abrir uma planilha compartilhada, mas não consegue salvar mudanças. A distinção entre leitura e gravação deve ser observada antes de buscar defeitos no programa.",
    "differences": "“Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas.",
    "commonMistakes": "Erro comum: usar acesso de leitura como prova de que há autorização para excluir ou modificar. Nunca contorne regras de acesso: solicite correção pelos canais oficiais.",
    "references": [
      {
        "title": "Microsoft Learn — Sistemas de arquivos",
        "url": "https://learn.microsoft.com/pt-br/windows-hardware/drivers/ifs/about-file-system-drivers"
      }
    ]
  },
  "INF-03-005": {
    "id": "INF-03-005",
    "objective": "Explicar compressão, extração e formatos zip e similares.",
    "concept": "Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote.",
    "explanation": "Compactação combina arquivos e metadados num contêiner; algoritmos sem perdas podem reduzir redundância e permitir reconstrução fiel após extração. O resultado varia conforme o conteúdo: imagens já compactadas ou vídeos podem diminuir pouco. Extração é o processo de recuperar arquivos do contêiner para um destino; abrir a lista de conteúdos de um ZIP não equivale necessariamente a extrair tudo. ZIP não oferece por si só garantia de autenticidade nem proteção completa contra programas maliciosos. Em ambiente administrativo, confira remetente, nomes, extensões, pasta de destino e capacidade de armazenamento antes de extrair. Se houver executáveis inesperados, não os inicie apenas porque vieram dentro do arquivo.",
    "example": "Um departamento reúne cinco relatórios em um ZIP para transferi-los em uma única remessa; após extrair, confere a integridade dos documentos. Aplicação administrativa: Uma equipe recebeu arquivo.zip com relatórios e precisa editar o conteúdo de um dos documentos. Justificativa: Extrair o documento para local apropriado e abri-lo em aplicativo compatível.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Extrair um ZIP significa abrir automaticamente todos os executáveis contidos nele.",
    "summary": "Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote. ZIP pode reunir múltiplos arquivos e pastas numa única estrutura.",
    "reviewQuestion": "Por que compactação e criptografia não são sinônimos?",
    "reviewAnswer": "Compactação busca reduzir espaço ou agrupar itens; criptografia protege o conteúdo contra leitura sem chave. Uma não implica a outra.",
    "introduction": "Um conjunto de relatórios enviados em ZIP ocupa menos espaço ou reúne vários arquivos, mas isso não significa que os documentos tenham sido abertos ou verificados.",
    "differences": "Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP.",
    "commonMistakes": "Erro comum: supor que extração executa programas automaticamente ou que toda compactação terá a mesma redução percentual."
  },
  "INF-03-006": {
    "id": "INF-03-006",
    "objective": "Explicar pdf, documentos, planilhas, imagens e arquivos executáveis.",
    "concept": "PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows.",
    "explanation": "DOCX é usado para documentos de texto editáveis; XLSX é um formato comum de planilhas; PNG costuma armazenar imagens sem perdas; PDF prioriza uma representação de documento para visualização e distribuição. Arquivos executáveis, como EXE no Windows, têm propósito diferente e exigem cautela de procedência. Um PDF pode conter texto pesquisável ou apenas imagens digitalizadas; o fato de abrir no leitor não prova editabilidade plena. Para converter formatos, use a função de exportação ou conversor confiável e confira o resultado. Renomear “planilha.xlsx” como “planilha.pdf” não converte a estrutura interna. Em trâmites oficiais, priorize o formato solicitado pelo procedimento e preserve versões editáveis quando apropriado.",
    "example": "Um relatório em .xlsx pode ser editado em planilha, depois exportado para PDF para distribuição; o PDF não substitui o arquivo de cálculo original. Aplicação administrativa: O responsável tem um arquivo XLSX e precisa produzir versão estática para circular aos interessados. Justificativa: Usar a exportação para PDF do aplicativo de planilha e conferir a apresentação.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Um arquivo .png é, por definição, um aplicativo executável Windows.",
    "summary": "PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows. PDF é usualmente empregado para compartilhar documentos com apresentação preservada.",
    "reviewQuestion": "Que vantagem e que limitação comum há ao exportar uma planilha para PDF?",
    "reviewAnswer": "PDF tende a preservar apresentação para distribuição, mas pode perder editabilidade e recursos de fórmula disponíveis na planilha original.",
    "introduction": "Um arquivo do Word, uma planilha, uma imagem e um PDF podem ser enviados por e-mail, mas não são intercambiáveis apenas por terem extensões parecidas.",
    "differences": "Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais.",
    "commonMistakes": "Erro comum: assumir que todo PDF é texto ou que imagem PNG é um programa executável só por estar no mesmo diretório."
  }
};
