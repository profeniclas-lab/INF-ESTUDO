/** INF-ESTUDO — Fase D/Lote 1-R: material pedagógico autoral revisto. */
export const INF_04_LESSONS = {
  "INF-04-001": {
    "id": "INF-04-001",
    "objective": "Explicar área de trabalho, menu iniciar e barra de tarefas.",
    "concept": "Área de trabalho é espaço visual de acesso; menu Iniciar reúne aplicativos e pesquisa; barra de tarefas indica aplicativos e janelas.",
    "explanation": "O menu Iniciar é ponto de acesso a aplicativos, pesquisa e comandos de sessão; a barra de tarefas apresenta e permite alternar aplicações e fixações. A área de trabalho pode conter atalhos, pastas e arquivos, mas não é inventário de todos os programas instalados. Fixar um aplicativo cria um acesso mais conveniente e não o instala novamente; desafixá-lo não remove seus arquivos. A área de notificação mostra indicadores de status conforme configuração e recursos ativos, como rede e som. A aparência de certos elementos varia com atualizações e personalização, então provas podem depender da versão indicada. Ao orientar um colega, prefira descrever a função e, quando necessário, apresentar mais de um caminho de acesso.",
    "example": "Um funcionário fixa na barra de tarefas o navegador e o gerenciador de arquivos, mantendo documentos no disco independentemente desses ícones. Aplicação administrativa: Após desafixar um aplicativo, a secretaria acha que seus documentos foram apagados. Justificativa: Esclarecer que desafixar remove o acesso rápido, não o aplicativo nem os documentos.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Desafixar o navegador da barra de tarefas desinstala o programa.",
    "summary": "Área de trabalho é espaço visual de acesso; menu Iniciar reúne aplicativos e pesquisa; barra de tarefas indica aplicativos e janelas. Fixar aplicativo na barra de tarefas facilita o acesso, sem mover necessariamente seu executável.",
    "reviewQuestion": "Qual a diferença entre fixar um aplicativo e instalá-lo?",
    "reviewAnswer": "Fixar cria acesso rápido ao programa; instalar adiciona arquivos e configurações necessárias para execução. Desafixar não desinstala.",
    "introduction": "No Windows 11, um aplicativo pode aparecer no menu Iniciar, na barra de tarefas ou como atalho na área de trabalho, sem estar armazenado fisicamente nesses três lugares.",
    "differences": "Fixar e instalar são ações diferentes; desafixar e desinstalar também. A barra de tarefas não é sinônimo de área de trabalho, embora ambos possam exibir acessos.",
    "commonMistakes": "Erro comum: concluir que o programa foi apagado ao retirar um ícone fixado. Verifique sua presença na lista de aplicativos instalados.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  },
  "INF-04-002": {
    "id": "INF-04-002",
    "objective": "Explicar janelas, menus, pesquisa e configurações.",
    "concept": "Janelas agrupam programas e documentos; pesquisa localiza itens; Configurações reúne preferências e parâmetros do sistema.",
    "explanation": "Janelas oferecem botões e áreas de trabalho para aplicativos, podendo ser minimizadas, restauradas ou fechadas. Alt+Tab alterna entre aplicativos ou janelas disponíveis; Windows+I abre Configurações e permite acessar opções do sistema. A pesquisa do Windows pode localizar aplicativos, arquivos e recursos, de acordo com indexação, permissões e configuração. Nem todo resultado de pesquisa equivale a um arquivo local: também podem surgir sugestões e fontes externas, conforme política e versão. Menu contextual oferece operações sobre o elemento selecionado e não necessariamente as mesmas opções em todas as aplicações. Para uma tarefa administrativa, escolha o caminho de ação com base no objetivo, evitando executar comandos em janela errada.",
    "example": "Durante atendimento, a servidora alterna entre navegador e planilha com Alt+Tab e abre Configurações com Windows+I. Aplicação administrativa: Uma funcionária precisa alternar repetidamente entre duas janelas durante cadastro sem fechar nenhuma. Justificativa: Usar Alt+Tab para alternar entre as janelas abertas.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Windows+I abre diretamente o Gerenciador de Tarefas.",
    "summary": "Janelas agrupam programas e documentos; pesquisa localiza itens; Configurações reúne preferências e parâmetros do sistema. Alt+Tab é atalho de alternância entre janelas ou aplicativos.",
    "reviewQuestion": "Por que alternar entre janelas não equivale a fechar um programa?",
    "reviewAnswer": "Alt+Tab muda o foco entre janelas abertas. Fechar encerra uma janela e pode encerrar a aplicação, com efeitos sobre trabalho não salvo.",
    "introduction": "Alternar entre janelas abertas, localizar um aplicativo e abrir as Configurações são ações distintas que usam comandos próprios no Windows 11.",
    "differences": "Alt+Tab alterna contexto; Windows+I abre Configurações; Ctrl+Shift+Esc abre Gerenciador de Tarefas. Pesquisa depende de escopo e indexação, não garante alcançar qualquer dispositivo.",
    "commonMistakes": "Erro comum: confundir “fechar janela” com “alternar aplicativo” ou imaginar que Windows+I serve para gerenciar processos.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  },
  "INF-04-003": {
    "id": "INF-04-003",
    "objective": "Explicar contas de usuário, sessão, bloqueio e encerramento.",
    "concept": "Contas identificam usuários; bloquear mantém a sessão protegida; sair encerra a sessão do usuário; desligar encerra o funcionamento do computador.",
    "explanation": "No Windows 11, Windows+L bloqueia a sessão atual, exigindo autenticação para retomar, mas normalmente mantém aplicativos abertos. Sair da conta encerra a sessão do usuário e pode fechar aplicativos, exigindo que alterações sejam salvas antes. Alternar usuário permite que outra conta inicie sua própria sessão, mantendo a sessão anterior em segundo plano conforme condições e políticas. Conta padrão não obtém automaticamente privilégios administrativos: permissões dependem da configuração e da política institucional. Ao encerrar o trabalho, use saída adequada e confira documentos pendentes; numa pausa breve, bloquear é geralmente mais conveniente e seguro do que deixar a tela exposta.",
    "example": "Um atendente se afasta por dez minutos e bloqueia a sessão para que terceiros não vejam documentos em aberto. Aplicação administrativa: O servidor vai fazer pausa breve e quer evitar acesso indevido sem encerrar todos os programas. Justificativa: Bloquear a sessão com Windows+L.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Conta padrão recebe automaticamente todos os privilégios administrativos.",
    "summary": "Contas identificam usuários; bloquear mantém a sessão protegida; sair encerra a sessão do usuário; desligar encerra o funcionamento do computador. Windows+L bloqueia a sessão atual.",
    "reviewQuestion": "Em que bloquear difere de sair da sessão?",
    "reviewAnswer": "Bloquear com Windows+L conserva a sessão, exigindo autenticação para retomada; sair encerra a sessão e pode fechar programas.",
    "introduction": "Antes de se afastar de um computador que exibe dados institucionais, é preciso decidir entre bloquear a sessão e encerrá-la.",
    "differences": "Bloquear não é desligar; sair não é necessariamente o mesmo que alternar usuário; conta padrão não é administrador. A escolha depende da duração da pausa e do tratamento dos dados.",
    "commonMistakes": "Erro comum: supor que o bloqueio salva automaticamente todos os documentos ou que alternar usuário encerra instantaneamente a sessão anterior.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  },
  "INF-04-004": {
    "id": "INF-04-004",
    "objective": "Explicar aplicativos, instalação e desinstalação.",
    "concept": "Instalar adiciona software ao sistema; desinstalar remove componentes registrados; atualizar corrige ou modifica versões.",
    "explanation": "O Windows 11 oferece mecanismos de instalação e gerenciamento de aplicativos, mas o procedimento pode variar entre programas tradicionais, aplicativos da Store e políticas do equipamento. Algumas instalações ou mudanças no sistema exigem autorização de administrador. Desinstalar pelos recursos próprios remove o aplicativo conforme o instalador, mas não garante a eliminação de todos os dados e preferências pessoais. Atualizações podem corrigir vulnerabilidades ou adicionar funções, merecendo planejamento e compatibilidade. Abrir um instalador desconhecido não é recomendado; avalie procedência e regras de TI. Ao remover uma ferramenta usada por setor, confirme que seus documentos continuarão acessíveis por programa adequado.",
    "example": "A equipe instala um aplicativo aprovado para acessar um portal institucional; meses depois, o remove pelas opções de Aplicativos nas Configurações. Aplicação administrativa: O setor não utiliza mais um aplicativo autorizado e deseja removê-lo corretamente. Justificativa: Usar as opções oficiais de desinstalação do sistema, respeitando políticas da instituição.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Excluir o ícone da barra de tarefas sempre desinstala o software.",
    "summary": "Instalar adiciona software ao sistema; desinstalar remove componentes registrados; atualizar corrige ou modifica versões. Desinstalar pelo gerenciamento de aplicativos é diferente de apagar atalho da área de trabalho.",
    "reviewQuestion": "Por que a exclusão de um ícone não é desinstalação de software?",
    "reviewAnswer": "Apagar um ícone remove referência visual. A desinstalação exige o procedimento próprio do Windows ou do instalador para remover componentes.",
    "introduction": "Instalar software em um computador de trabalho requer verificar origem, autorização, permissões e impacto sobre documentos já existentes.",
    "differences": "Instalar é adicionar programa; atualizar é mudar a versão; desinstalar é remover a instalação. Excluir atalho não executa desinstalação e pode deixar o aplicativo intacto.",
    "commonMistakes": "Erro comum: presumir que programa gratuito pode ser instalado sem autorização. Também é inadequado interpretar a remoção do atalho como limpeza completa do sistema.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  },
  "INF-04-005": {
    "id": "INF-04-005",
    "objective": "Explicar painel de configurações, dispositivos e impressoras.",
    "concept": "O aplicativo Configurações centraliza opções de dispositivos, impressoras, sistema, contas, rede e personalização.",
    "explanation": "No Windows 11, Configurações concentra ajustes de dispositivos, conectividade e impressoras, embora organização e rótulos possam variar por atualização. Uma impressora precisa estar conectada ou disponível em rede, com suporte de software e permissões adequadas. Definir padrão seleciona o dispositivo usado por omissão em várias situações, sem instalar novos drivers nem impedir escolha manual de outro equipamento. Mudanças de nome não criam compatibilidade de driver. Em ambientes compartilhados, fila de impressão, disponibilidade da rede e credenciais também influenciam o resultado. Para solucionar falha, verifique se o dispositivo aparece na lista, se está acessível e se o aplicativo envia para a fila correta.",
    "example": "Uma unidade administrativa seleciona uma impressora de rede como padrão e faz uma impressão de teste antes de emitir documentos oficiais. Aplicação administrativa: O setor instalou duas impressoras e deseja que a mais próxima seja selecionada automaticamente na maioria dos trabalhos. Justificativa: Ajustar a impressora padrão nas configurações disponíveis.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Basta renomear a impressora para instalar qualquer driver necessário.",
    "summary": "O aplicativo Configurações centraliza opções de dispositivos, impressoras, sistema, contas, rede e personalização. Configurações permite gerenciar vários dispositivos e opções do Windows.",
    "reviewQuestion": "Por que uma impressora padrão não garante conexão ou tinta disponíveis?",
    "reviewAnswer": "Padrão indica dispositivo sugerido nas impressões. Conexão, disponibilidade, suprimentos, fila, driver e permissão continuam sendo requisitos.",
    "introduction": "Um computador pode ter duas impressoras disponíveis, mas a definição da impressora padrão altera apenas a escolha sugerida para impressões comuns.",
    "differences": "Impressora padrão é uma preferência; driver possibilita comunicação; fila registra trabalhos; acesso à rede não implica permissão de imprimir.",
    "commonMistakes": "Erro comum: achar que alterar o nome da impressora instala driver ou que definir padrão impede usar outras impressoras.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  },
  "INF-04-006": {
    "id": "INF-04-006",
    "objective": "Explicar gerenciador de tarefas e aplicativos em execução.",
    "concept": "Gerenciador de Tarefas exibe processos, aplicativos, consumo de recursos e opções de gerenciamento.",
    "explanation": "O Gerenciador de Tarefas do Windows 11 exibe aplicativos, processos e indicadores como CPU, memória, disco e rede. Ctrl+Shift+Esc é atalho tradicional para abri-lo. Um processo com alto consumo não é automaticamente malicioso; pode estar executando tarefa legítima. Encerrar tarefa interrompe o processo e pode perder alterações não salvas. Antes disso, tente salvar, verificar se a aplicação está temporariamente ocupada e consultar orientações de TI. O gerenciador não formata unidades por atalho e não substitui programas específicos de backup ou segurança. Ao avaliar desempenho, observe a evolução do consumo e considere o contexto.",
    "example": "Uma planilha parou de responder; o funcionário verifica seu estado no Gerenciador de Tarefas antes de cogitar encerrar o processo. Aplicação administrativa: Um editor travou com alterações não salvas e aparece como “Não está respondendo”. Justificativa: Tentar recursos de recuperação e reconhecer o risco de perda antes de finalizar a tarefa.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Finalizar tarefa salva automaticamente todos os arquivos do aplicativo.",
    "summary": "Gerenciador de Tarefas exibe processos, aplicativos, consumo de recursos e opções de gerenciamento. Ctrl+Shift+Esc é atalho para abrir o Gerenciador de Tarefas.",
    "reviewQuestion": "Qual risco existe ao usar a função Finalizar tarefa?",
    "reviewAnswer": "Finalizar tarefa interrompe o processo e pode descartar alterações ainda não salvas. É preferível tentar salvar ou recuperar antes.",
    "introduction": "Quando um editor fica sem responder, o Gerenciador de Tarefas pode ajudar a identificar consumo de recursos, mas encerrar o processo traz risco de perda de trabalho.",
    "differences": "Observar consumo não é alterar hardware. Encerrar processo é diferente de desinstalar programa; reiniciar aplicação também não garante recuperar dados não salvos.",
    "commonMistakes": "Erro comum: finalizar processo só porque usa muita memória ou acreditar que Ctrl+Shift+Esc apaga arquivos. Prefira diagnóstico antes da intervenção.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  },
  "INF-04-007": {
    "id": "INF-04-007",
    "objective": "Explicar atalhos de teclado e recursos de acessibilidade.",
    "concept": "Atalhos combinam teclas para executar comandos; acessibilidade adapta a interação às necessidades dos usuários.",
    "explanation": "No Windows 11, Windows+E abre o Explorador de Arquivos, Windows+D mostra ou oculta a área de trabalho, Windows+I abre Configurações e Windows+L bloqueia a sessão. Ctrl+Shift+Esc abre o Gerenciador de Tarefas. O resultado de alguns atalhos depende da janela ativa e do contexto, como Ctrl+C para copiar seleção. Recursos de acessibilidade podem incluir Narrador, Lupa, legendas e opções de teclado; não são exclusivos de administradores. Ao documentar um procedimento, informe o programa e a versão para que o atalho faça sentido. Em questões de concurso, memorize funções por uso prático e não por associação arbitrária entre letras.",
    "example": "Uma servidora com dificuldade de enxergar amplia a tela com recursos de acessibilidade e usa Windows+E para abrir o Explorador. Aplicação administrativa: A equipe quer abrir rapidamente uma pasta no Explorador sem procurar o ícone no menu. Justificativa: Pressionar Windows+E.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Ctrl+V exclui permanentemente um arquivo selecionado.",
    "summary": "Atalhos combinam teclas para executar comandos; acessibilidade adapta a interação às necessidades dos usuários. Windows+E abre o Explorador de Arquivos.",
    "reviewQuestion": "Quais comandos Windows+E e Windows+D executam?",
    "reviewAnswer": "Windows+E abre o Explorador de Arquivos; Windows+D mostra ou oculta a área de trabalho, mantendo em geral os aplicativos abertos.",
    "introduction": "Atalhos de teclado podem acelerar tarefas e recursos de acessibilidade ajudam pessoas com necessidades e preferências distintas de interação.",
    "differences": "Atalho de sistema opera no ambiente Windows; atalho de aplicativo pode depender do foco. A Lupa amplia; o Narrador faz leitura de elementos compatíveis; recursos não substituem autorização de acesso.",
    "commonMistakes": "Erro comum: afirmar que Windows+E formata unidade, ou que apenas administrador pode ativar opções comuns de acessibilidade.",
    "references": [
      {
        "title": "Microsoft — Explorador de Arquivos no Windows",
        "url": "https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows"
      },
      {
        "title": "Microsoft — Atalhos de teclado no Windows",
        "url": "https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows"
      }
    ]
  }
};
