/** INF-ESTUDO — Fase D/Lote 1-R: material pedagógico autoral revisto. */
export const INF_03_DIAGNOSTICS = {
  "INF-03": [
    {
      "subtopicId": "INF-03-001",
      "front": "No contexto de “Bits, bytes e múltiplos de armazenamento”, como você resolveria este caso? A equipe recebeu um arquivo com 4.096 bytes e deseja expressar o valor em KiB.",
      "back": "Registrar 4 KiB, porque 4.096 ÷ 1.024 = 4. Bit representa um dígito binário; byte reúne oito bits; as unidades têm convenções decimais e binárias. Atenção: Na notação decimal, 1 kB = 1.000 bytes; na binária, 1 KiB = 1.024 bytes. MB e Mb diferem por fator oito na mesma base; MiB e MB são grandezas próximas, mas não idênticas. Sempre explicite base e unidade antes de efetuar um cálculo."
    },
    {
      "subtopicId": "INF-03-002",
      "front": "No contexto de “HD, SSD, pendrive, cartões e mídias ópticas”, como você resolveria este caso? O setor quer uma mídia portátil para cópia temporária de relatórios não sigilosos, sem depender de leitor óptico.",
      "back": "Utilizar uma unidade USB compatível e conferir a cópia antes de removê-la. HD grava magneticamente; SSD usa memória flash; pendrive e cartões também usam armazenamento eletrônico. Atenção: SSDs não têm cabeças de leitura mecânicas como HDs. HD magnético é diferente de SSD flash; “externo” descreve o modo de conexão, não uma tecnologia única de armazenamento. Portabilidade não implica segurança."
    },
    {
      "subtopicId": "INF-03-003",
      "front": "No contexto de “Arquivos, pastas, caminhos e extensões”, como você resolveria este caso? Uma pessoa salvou relatorio.pdf em duas pastas diferentes e precisa localizar a versão de novembro.",
      "back": "Conferir o caminho completo de cada cópia, não apenas o nome do arquivo. Caminho identifica a localização de arquivo ou pasta em uma hierarquia; extensão é sufixo do nome que sugere formato. Atenção: Caminhos absolutos partem de uma raiz ou unidade; relativos dependem do diretório atual. Caminho absoluto oferece referência completa a partir da raiz ou unidade; relativo depende do contexto. Nome e extensão compõem a identificação do arquivo, mas não validam seu conteúdo."
    },
    {
      "subtopicId": "INF-03-004",
      "front": "No contexto de “Sistemas de arquivos e permissões básicas”, como você resolveria este caso? Um servidor consegue abrir um relatório numa pasta compartilhada, mas não salvar alterações nela.",
      "back": "Verificar se possui permissão de escrita além da permissão de leitura. Sistema de arquivos organiza o armazenamento e seus metadados; permissões controlam quais operações são autorizadas. Atenção: NTFS é exemplo de sistema de arquivos usado no Windows e suporta permissões. “Poder abrir” não significa “poder alterar”. Formato do sistema de arquivos, compartilhamento de rede e permissões são camadas distintas."
    },
    {
      "subtopicId": "INF-03-005",
      "front": "No contexto de “Compressão, extração e formatos ZIP e similares”, como você resolveria este caso? Uma equipe recebeu arquivo.zip com relatórios e precisa editar o conteúdo de um dos documentos.",
      "back": "Extrair o documento para local apropriado e abri-lo em aplicativo compatível. Compactação reduz ou reorganiza a representação de dados; arquivos ZIP podem agrupar vários itens em um só pacote. Atenção: Compactação sem perdas permite recuperar exatamente os dados originais; nem todo conteúdo reduz muito de tamanho. Compactar não significa converter os documentos nem criar automaticamente backup de longo prazo. ZIP é formato de contêiner; criptografia e assinatura são propriedades adicionais, não inerentes a todo ZIP."
    },
    {
      "subtopicId": "INF-03-006",
      "front": "No contexto de “PDF, documentos, planilhas, imagens e arquivos executáveis”, como você resolveria este caso? O responsável tem um arquivo XLSX e precisa produzir versão estática para circular aos interessados.",
      "back": "Usar a exportação para PDF do aplicativo de planilha e conferir a apresentação. PDF é formato de documento; DOCX de texto editável; XLSX de planilha; PNG/JPEG de imagem; EXE geralmente de executável Windows. Atenção: O aplicativo utilizado pode depender da extensão e do conteúdo real. Extensão indica formato presumido, mas não é ferramenta de conversão. PDF, DOCX e XLSX podem ter finalidades distintas, mesmo quando contêm as mesmas informações visuais."
    }
  ]
};
