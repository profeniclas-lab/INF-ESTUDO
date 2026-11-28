/** INF-ESTUDO — Fase D/Lote 3: LibreOffice, Microsoft 365 e formatos compatíveis. Material pedagógico autoral. */
export const INF_13_DIAGNOSTICS = {
  "INF-13": [
    {
      "subtopicId": "INF-13-001",
      "front": "Uma unidade precisa redigir um ofício, controlar quantitativos de estoque e apresentar resultados em reunião usando o LibreOffice. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Usar Writer para o ofício, Calc para os quantitativos e Impress para os slides, verificando os formatos de entrega. Fundamentação: Word, Excel e PowerPoint correspondem principalmente a Writer, Calc e Impress, mas ferramentas parecidas não garantem comportamento idêntico. Uma opção inadequada seria 'Utilizar apenas Writer e digitar fórmulas de controle em parágrafos como se fossem células', pois Processador de texto não oferece a estrutura completa de planilha. Compare também: Editor de texto não substitui planilha para fórmulas estruturadas. Uma apresentação tem páginas de slide, não páginas de documento corrido. LibreOffice é suíte de programas; Microsoft 365 pode incluir assinatura, armazenamento e serviços além dos aplicativos."
    },
    {
      "subtopicId": "INF-13-002",
      "front": "Um servidor recebeu relatorio.odt, despesas.ods e reuniao.odp e precisa identificar o programa apropriado para editar cada um. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Abrir relatorio.odt no Writer, despesas.ods no Calc e reuniao.odp no Impress, conferindo a associação correta. Fundamentação: DOCX, XLSX e PPTX são formatos Office Open XML; ODT, ODS e ODP pertencem à família OpenDocument para texto, planilha e apresentação. Uma opção inadequada seria 'Abrir despesas.ods no Writer porque todos usam OpenDocument', pois ODS é planilha e demanda editor apropriado. Compare também: DOCX não é arquivo executável; XLSX não é apresentação. A família ODF adota formatos como ODT, ODS e ODP; PDF é distinto de ambos. Compatibilidade para abrir arquivo não significa fidelidade de todos os recursos, como macros, estilos e gráficos."
    },
    {
      "subtopicId": "INF-13-003",
      "front": "Uma secretaria tem um ofício em ODT e precisa manter versão editável interna e disponibilizar PDF assinado posteriormente ao público. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Preservar o ODT original e exportar uma cópia PDF conferida, sem substituir o arquivo de edição. Fundamentação: Salvar grava o trabalho no formato escolhido; Salvar como permite definir outro nome, local ou formato; Exportar costuma produzir uma representação destinada a outro uso. Uma opção inadequada seria 'Renomear manualmente a extensão para .pdf e enviar o mesmo conteúdo interno', pois O arquivo não é convertido só pela mudança de nome. Compare também: Salvar é persistência da versão atual; Salvar como pode criar nova versão; exportar PDF costuma gerar saída de leitura. Importar CSV envolve analisar separadores e codificação, não apenas selecionar o arquivo. Um arquivo duplicado por nome pode ainda conter alterações e fórmulas diferentes."
    },
    {
      "subtopicId": "INF-13-004",
      "front": "Uma equipe usa Excel Microsoft 365 no computador, enquanto outra abre o mesmo arquivo no Calc e pergunta por que alguns comandos estão em lugares diferentes. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Orientar cada equipe a procurar a função equivalente na própria interface, verificando limites de formato e versão. Fundamentação: Suítes de escritório compartilham conceitos como estilos, revisão e planilhas, mas seus menus, atalhos e disponibilidade de recursos variam por aplicação e versão. Uma opção inadequada seria 'Garantir que todos os menus são idênticos porque os dois programas editam planilhas', pois Suítes têm organização de comandos e recursos diferentes. Compare também: Equivalência funcional significa resultado semelhante, não comando idêntico. Um atalho depende do sistema operacional, configuração e contexto do foco. Recursos de coautoria e armazenamento online podem estar integrados ao Microsoft 365 e depender de solução adicional no LibreOffice."
    },
    {
      "subtopicId": "INF-13-005",
      "front": "Uma planilha XLSX com fórmulas de reembolso será editada no Calc antes de nova distribuição à equipe. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Manter o XLSX original, abrir no Calc e testar fórmulas, resultados e formato antes de salvar a versão distribuída. Fundamentação: Interoperabilidade significa trocar e utilizar arquivos entre softwares, mas conversões podem afetar fontes, macros, fórmulas, layouts e funcionalidades especiais. Uma opção inadequada seria 'Confiar apenas em que o arquivo abriu sem mensagem de erro', pois A abertura não comprova fidelidade de todas as funções. Compare também: Abrir não equivale a preservar toda função; converter não equivale a renomear. PDF é adequado quando a edição não é necessária, enquanto ODT/DOCX mantêm edição. Testar apenas a primeira página não é evidência de fidelidade de uma pasta de trabalho com várias abas."
    }
  ]
};
