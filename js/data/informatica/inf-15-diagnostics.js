/** INF-ESTUDO — Fase D/Lote 3: Navegadores: Edge, Chrome e Firefox. Material pedagógico autoral. */
export const INF_15_DIAGNOSTICS = {
  "INF-15": [
    {
      "subtopicId": "INF-15-001",
      "front": "Uma servidora quer manter o sistema de protocolo aberto enquanto consulta duas normas no mesmo navegador Windows, sem sair da tela principal. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Abrir duas novas guias com Ctrl+T e alterná-las, preservando a guia do protocolo sem fechá-la. Fundamentação: Guias organizam páginas numa mesma janela; janelas são unidades independentes, e atalhos comuns facilitam navegação sem alterar necessariamente o conteúdo. Uma opção inadequada seria 'Usar Ctrl+W para criar uma nova guia de consulta', pois Esse atalho fecha a guia em foco. Compare também: Nova guia não equivale a nova janela; fechar guia não encerra necessariamente o navegador. A barra de endereços recebe URL ou consulta conforme configuração; o campo de pesquisa dentro da página tem outra finalidade. A tecla Alt+Tab alterna janelas do sistema Windows, não necessariamente guias de um único navegador."
    },
    {
      "subtopicId": "INF-15-002",
      "front": "Um servidor visita mensalmente o portal de licitações e precisa achar rapidamente um edital PDF já baixado. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Salvar o portal oficial nos favoritos e localizar o PDF na pasta de downloads escolhida, confirmando sua versão. Fundamentação: Favoritos guardam referências a páginas; histórico registra visitas; downloads são arquivos recebidos que permanecem onde foram salvos. Uma opção inadequada seria 'Confiar que salvar favorito criou uma cópia offline do edital', pois Favorito aponta para um endereço e não necessariamente guarda o documento. Compare também: Favoritos são escolhas feitas pelo usuário; histórico decorre das visitas registradas. Download armazena dados do arquivo em local configurado; remover entrada da lista de downloads não implica necessariamente excluir o arquivo. Sincronizar favoritos entre dispositivos depende de conta e configuração."
    },
    {
      "subtopicId": "INF-15-003",
      "front": "Um navegador continua exibindo versão antiga da folha de estilos de um portal, embora o servidor tenha sido atualizado; o usuário deseja testar sem apagar PDFs baixados. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Verificar recarga e limpar seletivamente dados de cache do site, preservando arquivos baixados e avaliando a sessão atual. Fundamentação: Cookie é dado associado a site ou sessão; cache guarda recursos para reutilização; histórico registra páginas visitadas em determinadas condições. Uma opção inadequada seria 'Excluir a pasta Downloads para atualizar o visual do site', pois Arquivos baixados não são a causa normal de recursos Web em cache. Compare também: Cookie pode identificar sessão; cache armazena cópias de recursos; histórico lista navegação. Apagar cache não costuma cancelar uma conta criada no servidor. Excluir cookies não remove necessariamente os arquivos de PDF baixados."
    },
    {
      "subtopicId": "INF-15-004",
      "front": "Um regulamento publicado em página Web contém muitas seções; o servidor precisa localizar “prazo de recurso” e imprimir a parte pertinente. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Usar Ctrl+F para localizar a expressão na página e Ctrl+P com visualização prévia para conferir impressão. Fundamentação: Localizar na página procura termos no documento aberto; zoom muda escala de exibição e impressão produz uma saída paginada com opções próprias. Uma opção inadequada seria 'Usar Ctrl+T para buscar expressão no texto da página', pois Esse atalho abre guia, não pesquisa conteúdo. Compare também: Ctrl+F busca na página; motor de busca pesquisa conteúdos indexados na Web. Zoom altera visualização sem reescrever texto de origem. Salvar página HTML não equivale a gerar PDF de impressão e pode produzir arquivos dependentes de recursos associados."
    },
    {
      "subtopicId": "INF-15-005",
      "front": "Um servidor utiliza um computador compartilhado para consultar serviço online e quer evitar que outro usuário veja o histórico local da sessão, sem presumir invisibilidade na rede. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Usar sessão privativa quando apropriado, encerrar o acesso e sair do serviço, sabendo que downloads e registros remotos podem persistir. Fundamentação: Navegação privativa reduz certos registros locais após a sessão, mas não garante anonimato na rede; perfis, extensões e sincronização têm propósitos diferentes. Uma opção inadequada seria 'Afirmar que o modo privativo impede qualquer registro no servidor do serviço', pois O modo atua principalmente sobre dados armazenados localmente pelo navegador. Compare também: Modo privativo não é VPN nem serviço de anonimização total. Perfil organiza dados de usuários; guia privativa é uma sessão com tratamento local distinto. Sincronização mantém dados semelhantes entre dispositivos, mas não substitui backup versionado. Extensão é código adicional sujeito a permissões."
    },
    {
      "subtopicId": "INF-15-006",
      "front": "Um site desconhecido solicita câmera e notificações enquanto mostra aviso de certificado inválido, embora o usuário só desejasse ler um edital público. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Não fornecer dados nem conceder permissões desnecessárias; conferir endereço por canal oficial e resolver o alerta antes de continuar. Fundamentação: Permissões de site controlam recursos como câmera, microfone e notificações; HTTPS protege transporte e certificados ajudam a verificar o servidor, mas não garantem conteúdo legítimo. Uma opção inadequada seria 'Aceitar câmera e notificações porque qualquer portal de consulta necessita desses recursos', pois Leitura de edital não exige, por padrão, acesso a dispositivos. Compare também: Permissão de câmera concede recurso local; certificado TLS participa da segurança da conexão. Bloquear notificações não equivale a bloquear todos os cookies. HTTPS protege comunicação, não avalia veracidade do texto publicado nem legitimidade institucional independentemente do domínio."
    }
  ]
};
