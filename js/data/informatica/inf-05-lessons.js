/** INF-ESTUDO — Fase D/Lote 1-R: material pedagógico autoral revisto. */
export const INF_05_LESSONS = {
  "INF-05-001": {
    "id": "INF-05-001",
    "objective": "Explicar explorador de arquivos, painéis, caminhos e navegação.",
    "concept": "O Explorador de Arquivos permite navegar por pastas, unidades, bibliotecas e caminhos do Windows.",
    "explanation": "No Windows 11, a barra de endereços indica o local e pode permitir acessar caminhos; o painel de navegação apresenta locais e fixações. O Acesso rápido ou áreas equivalentes oferecem atalhos para pastas frequentes, sem necessariamente duplicar arquivos. O Explorador permite alternar visualizações, selecionar itens e abrir propriedades. Locais OneDrive podem aparecer integrados conforme instalação e conta configurada; a disponibilidade de um arquivo pode depender de sincronização. Para um setor administrativo, confirmar o caminho completo previne alterar a versão errada de um documento. A aparência do início do Explorador depende da versão do Windows 11 e de preferências pessoais.",
    "example": "Para localizar o relatório de um processo, a funcionária abre Windows+E, navega por Este Computador e acessa a pasta do setor. Aplicação administrativa: A pasta “Projetos” foi fixada para acesso rápido, mas precisa continuar no mesmo local físico. Justificativa: Manter o atalho fixado, pois isso facilita a navegação sem mover a pasta.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Cada item do painel de navegação é necessariamente um arquivo executável.",
    "summary": "O Explorador de Arquivos permite navegar por pastas, unidades, bibliotecas e caminhos do Windows. Windows+E abre o Explorador de Arquivos.",
    "reviewQuestion": "Qual diferença há entre um local de acesso rápido e a pasta que ele referencia?",
    "reviewAnswer": "Acesso rápido contém referência de navegação; a pasta real permanece no caminho original, sem ser copiada automaticamente.",
    "introduction": "O Explorador de Arquivos organiza a navegação em arquivos locais, locais sincronizados e recursos acessíveis, mas um atalho de navegação não significa uma nova cópia de conteúdo.",
    "differences": "Pasta fixada é referência de navegação; pasta copiada contém novos dados. Barra de endereços exibe caminho; painel apresenta estrutura e destinos disponíveis.",
    "commonMistakes": "Erro comum: achar que fixar uma pasta duplica todos os arquivos ou que todo item listado é necessariamente armazenado no disco local.",
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
  "INF-05-002": {
    "id": "INF-05-002",
    "objective": "Explicar criar, renomear, selecionar, mover e copiar itens.",
    "concept": "Copiar cria outra instância do item; mover altera sua localização; renomear altera o nome, não necessariamente o conteúdo.",
    "explanation": "Copiar cria uma segunda instância do conteúdo no destino, preservando a origem. Mover altera a localização do item e, em geral, deixa de mantê-lo no local anterior. Renomear muda o nome exibido, sem necessariamente mudar conteúdo; criar uma pasta estabelece novo contêiner para organização. No Explorador do Windows 11, Ctrl+C e Ctrl+V fazem cópia; Ctrl+X e Ctrl+V fazem movimento. Ao mover entre unidades, a implementação pode envolver cópia e remoção na origem após a transferência. Em pastas compartilhadas, permissões, conflitos de nome e arquivos abertos podem impedir operações. Confirme destino e resultado antes de reorganizar documentos institucionais.",
    "example": "O setor precisa enviar cópia de uma minuta para pasta de revisão mantendo o original em sua pasta de trabalho. Aplicação administrativa: A equipe quer colocar uma cópia de “ata.docx” na pasta “Revisão”, mas manter “ata.docx” na pasta original. Justificativa: Usar Copiar e Colar, conferindo a presença do arquivo nos dois locais.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Copiar um arquivo necessariamente apaga sua versão original.",
    "summary": "Copiar cria outra instância do item; mover altera sua localização; renomear altera o nome, não necessariamente o conteúdo. Copiar um arquivo pode manter o original no local de origem.",
    "reviewQuestion": "Qual operação atende à necessidade de duplicar sem retirar o original?",
    "reviewAnswer": "Copiar e colar cria outra instância no destino e preserva o item original; mover muda a localização.",
    "introduction": "Copiar uma pasta para outra equipe e mover um documento dentro do arquivo setorial são operações com consequências diferentes sobre a origem.",
    "differences": "Copiar ≠ mover ≠ renomear. Uma cópia pode se tornar desatualizada; um movimento pode quebrar caminhos ou atalhos que apontavam para o local antigo.",
    "commonMistakes": "Erro comum: interpretar Ctrl+C como corte ou assumir que mover arquivos nunca depende da unidade e das permissões.",
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
  "INF-05-003": {
    "id": "INF-05-003",
    "objective": "Explicar excluir, restaurar e esvaziar a lixeira.",
    "concept": "A Lixeira pode guardar itens excluídos de unidades locais para recuperação; esvaziá-la normalmente remove essa possibilidade simples.",
    "explanation": "A Lixeira do Windows 11 pode reter arquivos excluídos de determinadas unidades locais, possibilitando restaurar o item ao local anterior quando disponível. Excluir usando Delete normalmente envia itens elegíveis à Lixeira; Shift+Delete costuma ignorá-la, tornando a restauração por essa interface indisponível. Arquivos removidos de compartilhamentos de rede ou outras origens podem não passar pela Lixeira local; configurações, tipo de unidade e políticas também interferem. Esvaziar a Lixeira remove seus itens e impede a recuperação simples por esse recurso, mas não constitui operação de backup. Se não encontrar o arquivo, evite gravações desnecessárias e consulte cópias de segurança ou responsáveis pelos sistemas, sem presumir recuperação garantida.",
    "example": "Uma planilha apagada por engano de uma pasta local aparece na Lixeira; o servidor a restaura para a localização original. Aplicação administrativa: Um usuário apagou um documento local e deseja recuperá-lo antes de esvaziar a Lixeira. Justificativa: Abrir a Lixeira, localizar o item e selecionar Restaurar.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Shift+Delete é um comando para copiar arquivos sem alteração.",
    "summary": "A Lixeira pode guardar itens excluídos de unidades locais para recuperação; esvaziá-la normalmente remove essa possibilidade simples. Restaurar item da Lixeira costuma devolvê-lo ao local anterior quando possível.",
    "reviewQuestion": "Por que arquivos apagados de locais diferentes podem não passar pela Lixeira?",
    "reviewAnswer": "A Lixeira normalmente recebe exclusões de itens locais elegíveis. Em rede, com Shift+Delete ou conforme políticas e tipos de unidade, a exclusão pode não passar por ela.",
    "introduction": "Um documento excluído pode ter destino diferente conforme origem, método de exclusão e políticas da unidade. Antes de tentar recuperar, verifique como ele foi apagado.",
    "differences": "Restaurar recupera item ainda presente na Lixeira; desfazer pode reverter ação recente dependendo do contexto; backup é cópia independente. Excluir permanentemente não equivale a apagar toda possibilidade técnica de recuperação.",
    "commonMistakes": "Erro comum: pensar que todo arquivo excluído aparece na Lixeira, inclusive em rede, ou afirmar que esvaziá-la cria uma cópia de segurança.",
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
  "INF-05-004": {
    "id": "INF-05-004",
    "objective": "Explicar pesquisa, propriedades, visualizações e ordenação.",
    "concept": "Pesquisa localiza itens; Propriedades mostra metadados; visualização e ordenação mudam a apresentação dos resultados.",
    "explanation": "No Explorador do Windows 11, a pesquisa considera o local selecionado, as regras de indexação e as permissões. O usuário pode alterar a visualização para detalhes, ícones e outros modos, além de ordenar os itens por nome, data ou tamanho. Essas operações reorganizam a apresentação e não modificam o conteúdo interno dos documentos. Propriedades podem mostrar informações como nome, tipo, tamanho, datas e localização, conforme o arquivo. A pesquisa não alcança necessariamente todas as unidades de uma organização; locais desconectados ou sem permissão podem não ser incluídos. Para conferir versões, compare caminho e datas e não confie apenas na ordem visual.",
    "example": "Uma servidora ordena arquivos por data de modificação para identificar o relatório atualizado mais recentemente, sem modificar a planilha. Aplicação administrativa: Uma equipe precisa localizar os PDFs de uma pasta e exibi-los do mais recente para o mais antigo. Justificativa: Filtrar pelo tipo/extensão e ordenar por data de modificação, verificando o escopo da pasta.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Alterar a visualização para ícones grandes aumenta automaticamente o conteúdo do arquivo.",
    "summary": "Pesquisa localiza itens; Propriedades mostra metadados; visualização e ordenação mudam a apresentação dos resultados. Ordenar por data de modificação altera a sequência visual, não as datas por si só.",
    "reviewQuestion": "Qual a diferença entre ordenar resultados e alterar efetivamente arquivos?",
    "reviewAnswer": "Ordenar altera a ordem visual da listagem. Só operações como editar, salvar, renomear ou mover modificam conteúdo ou metadados dos itens.",
    "introduction": "Um arquivo difícil de localizar pode estar em outra pasta ou ter nome semelhante; propriedades e critérios de busca ajudam a encontrá-lo com precisão.",
    "differences": "Pesquisar procura itens segundo critérios; ordenar altera apresentação; propriedades descrevem atributos. Um arquivo recente pode não ser a versão aprovada.",
    "commonMistakes": "Erro comum: acreditar que ordenar regrava documentos ou que a busca é global e ignora todas as permissões.",
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
  "INF-05-005": {
    "id": "INF-05-005",
    "objective": "Explicar atalhos de teclado para operações com arquivos.",
    "concept": "Atalhos frequentes: Ctrl+C copia; Ctrl+X recorta; Ctrl+V cola; F2 renomeia; Ctrl+A seleciona tudo.",
    "explanation": "No Windows 11, F2 costuma renomear item selecionado; Ctrl+A seleciona todos os itens do contexto ativo; Ctrl+C copia e Ctrl+V cola; Ctrl+X recorta para mover; Delete encaminha itens elegíveis à Lixeira. Windows+E abre o Explorador e Alt+Enter mostra propriedades do item selecionado, em contextos compatíveis. Shift+Delete geralmente realiza exclusão sem enviar o item à Lixeira. Esses comandos devem ser usados observando foco da janela e possíveis avisos. Em provas, o significado de cada atalho precisa ser relacionado a uma ação prática; F2 não é comando de exclusão permanente. O usuário deve confirmar a seleção antes de executar operações em massa.",
    "example": "Uma assistente seleciona três documentos, usa Ctrl+C, abre a pasta de destino e usa Ctrl+V para copiá-los. Aplicação administrativa: Um servidor selecionou arquivo errado e pretende renomeá-lo sem alterar a extensão por acidente. Justificativa: Selecionar corretamente o arquivo, pressionar F2 e conferir o nome final.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: F2 exclui permanentemente o item selecionado.",
    "summary": "Atalhos frequentes: Ctrl+C copia; Ctrl+X recorta; Ctrl+V cola; F2 renomeia; Ctrl+A seleciona tudo. F2 é atalho comum para renomear item selecionado no Explorador.",
    "reviewQuestion": "Por que é importante conferir a seleção antes de usar atalhos de edição?",
    "reviewAnswer": "Atalhos agem sobre o contexto em foco e a seleção atual: uma seleção indevida pode levar a copiar, mover, renomear ou excluir o item errado.",
    "introduction": "Atalhos úteis do Explorador reduzem cliques, mas dependem do item selecionado e não devem ser confundidos com comandos de exclusão.",
    "differences": "Copiar preserva origem; recortar prepara movimento; F2 renomeia; Delete e Shift+Delete têm consequências diferentes em itens elegíveis à Lixeira.",
    "commonMistakes": "Erro comum: pressionar Ctrl+A na janela errada ou acreditar que Ctrl+C apaga o arquivo. Confirme o contexto e o retorno visual.",
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
  "INF-05-006": {
    "id": "INF-05-006",
    "objective": "Explicar armazenamento local, pastas compartilhadas e permissões.",
    "concept": "Armazenamento local guarda dados no dispositivo; pasta compartilhada permite acesso conforme rede e permissões configuradas.",
    "explanation": "Armazenamento local refere-se a unidades disponíveis no dispositivo, enquanto armazenamento compartilhado pode ser disponibilizado por outro computador, servidor ou serviço. No Windows 11, abrir uma pasta de rede pode exigir conexão e credenciais, além de permissões de compartilhamento e do sistema de arquivos. Leitura e gravação são operações diferentes; nem todo usuário deve ter ambas. Copiar um documento da rede para o computador cria versão local, que pode ficar desatualizada quando outra pessoa altera o original. Compartilhamento não substitui backup: um erro ou exclusão pode propagar-se aos usuários que acessam a mesma origem. Para preservar integridade, combine regras de acesso, versionamento e procedimentos organizacionais de cópia de segurança.",
    "example": "Um servidor pode ler uma pasta departamental compartilhada, mas não excluir arquivos porque recebeu apenas permissão de leitura. Aplicação administrativa: Um usuário precisa consultar documentos de uma pasta departamental sem poder alterar o conteúdo. Justificativa: Conceder ou solicitar permissão de leitura apropriada à atividade.",
    "examTip": "Ao resolver um item, identifique a função pedida, a versão ou o contexto e compare as alternativas com os conceitos estudados. Não aceite a generalização: Copiar um arquivo para o computador local mantém, obrigatoriamente, sincronização permanente com o original.",
    "summary": "Armazenamento local guarda dados no dispositivo; pasta compartilhada permite acesso conforme rede e permissões configuradas. Permissões podem limitar quem lê, altera ou exclui arquivos compartilhados.",
    "reviewQuestion": "Por que compartilhar o caminho de uma pasta não é o mesmo que conceder acesso?",
    "reviewAnswer": "Conhecer um endereço de rede não prova ter credenciais, permissão de compartilhamento e direito de acesso ao arquivo.",
    "introduction": "Pastas compartilhadas permitem colaboração entre setores, mas um caminho de rede visível não garante que o usuário possa editar todos os arquivos.",
    "differences": "Rede permite acesso, não concede privilégio. Cópia local ≠ arquivo compartilhado atualizado; sincronização ≠ backup independente.",
    "commonMistakes": "Erro comum: divulgar credenciais para contornar permissões ou supor que uma pasta compartilhada dispensa backups. Solicite acesso pelos canais oficiais.",
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
