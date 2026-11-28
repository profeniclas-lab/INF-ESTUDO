/** INF-ESTUDO — Fase D/Lote 2: diagnóstico do INF-06. */
export const INF_06_DIAGNOSTICS = {
  "INF-06": [
    {
      "subtopicId": "INF-06-001",
      "front": "Você precisa atuar em distribuições linux, kernel e ambiente gráfico. Em um laboratório administrativo, dois computadores usam Ubuntu, mas têm áreas de trabalho com aparência diferente. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Verificar qual ambiente gráfico está ativo antes de atribuir a diferença à distribuição ou ao kernel. Justificativa: O kernel Linux é o núcleo responsável por serviços básicos do sistema; uma distribuição combina esse núcleo com programas, bibliotecas e ferramentas para formar um ambiente utilizável. Kernel não é sinônimo de distribuição; distribuição não é o mesmo que ambiente gráfico. Trocar a aparência da área de trabalho não significa substituir o núcleo. O terminal é uma alternativa de interação, não um sistema operacional distinto. Erro a evitar: Um erro comum é concluir que todo Linux usa a mesma tela e os mesmos aplicativos. Outro é chamar GNOME de distribuição. A disponibilidade de programas e comandos pode variar com a distribuição e com a versão instalada."
    },
    {
      "subtopicId": "INF-06-002",
      "front": "Você precisa atuar em estrutura de diretórios e caminhos no linux. Um servidor precisa localizar seu relatório na pasta Documentos e recebe o caminho /home/ana/Documentos/relatorio.odt. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Reconhecer /home/ana/Documentos/relatorio.odt como caminho absoluto e verificar permissões no diretório. Justificativa: No Linux, os caminhos absolutos partem do diretório raiz /, e a árvore de diretórios organiza arquivos e recursos em uma hierarquia. A barra / separa componentes do caminho; a barra invertida é a separação convencional do Windows. O diretório pessoal não é o mesmo que o diretório raiz; o atalho ~ costuma indicar a pasta pessoal do usuário no shell. Erro a evitar: Evite assumir que todo arquivo de configuração pertence a /home ou que caminhos relativos funcionam independentemente do diretório atual. Sistemas e distribuições podem acrescentar diretórios específicos."
    },
    {
      "subtopicId": "INF-06-003",
      "front": "Você precisa atuar em arquivos, usuários e permissões básicas. Um relatório de pessoal deve poder ser lido pelo grupo de trabalho, mas não por usuários externos ao grupo. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Conferir proprietário, grupo e permissões do arquivo e ajustar o acesso mínimo necessário, sem abrir permissão geral. Justificativa: Permissões Linux de leitura, escrita e execução são avaliadas para classes de proprietário, grupo e outros usuários. Proprietário e grupo são identidades distintas; escrever um arquivo não equivale a poder apagá-lo, pois exclusão depende das permissões do diretório. Um diretório pode ser atravessado sem autorização para listar seus nomes. Erro a evitar: Não presuma que chmod 777 seja solução segura: amplia permissões de todos. Mudanças de propriedade e modos exigem cautela, pois podem expor arquivos administrativos."
    },
    {
      "subtopicId": "INF-06-004",
      "front": "Você precisa atuar em gerenciadores de arquivos, terminais e comandos elementares. Um técnico precisa duplicar um modelo de ofício em outra pasta sem apagar o original. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Conferir os caminhos e usar uma operação de cópia, como cp, deixando a origem intacta. Justificativa: Gerenciadores de arquivos oferecem operações visuais; o terminal permite executar comandos, cuja sintaxe e efeitos devem ser compreendidos antes da execução. cp copia e mantém a origem; mv movimenta ou altera o nome; rm é remoção e não equivale necessariamente a mover para uma Lixeira gráfica. Em ambientes gráficos, a exclusão pode ter semântica diferente da de rm. Erro a evitar: Um erro perigoso é usar comandos destrutivos sem conferir o diretório atual e os arquivos envolvidos. Outro é acreditar que tudo removido no terminal pode ser restaurado da Lixeira do usuário."
    },
    {
      "subtopicId": "INF-06-005",
      "front": "Você precisa atuar em software livre, código aberto e licenciamento. Uma unidade recebeu um editor sem custo e quer modificá-lo e distribuir a versão modificada. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Verificar se a licença permite modificação e redistribuição e quais obrigações acompanham a distribuição. Justificativa: Software livre é definido por liberdades de usar, estudar, modificar e redistribuir programas nos termos da licença; software gratuito refere-se ao preço. Freeware pode ser gratuito sem permitir redistribuir código ou versões modificadas. Ter acesso ao código-fonte, isoladamente, não comprova que a licença concede liberdades suficientes para qualificá-lo como software de código aberto. Erro a evitar: Não equipare licença livre a ausência de obrigações; não presuma que softwares pagos são necessariamente proprietários. A avaliação institucional inclui suporte, requisitos e segurança, não só o custo inicial."
    }
  ]
};
