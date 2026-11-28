/** INF-ESTUDO — Fase D/Lote 2: diagnóstico do INF-08. */
export const INF_08_DIAGNOSTICS = {
  "INF-08": [
    {
      "subtopicId": "INF-08-001",
      "front": "Você precisa atuar em cabeçalho, rodapé e numeração de páginas. Um relatório institucional tem capa sem número visível e páginas seguintes com numeração crescente no rodapé. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar campos de numeração e configurar a primeira página diferentemente, verificando a paginação. Justificativa: Cabeçalhos e rodapés são regiões repetidas das páginas, nas quais podem ser inseridos campos como número de página, título e data. Digitar o número 1 no corpo do texto não cria numeração automática. Cabeçalho não é o mesmo que margem superior: o primeiro contém elementos, enquanto a margem é uma medida de espaçamento. Erro a evitar: Não copie manualmente o número da página em cada folha; ao inserir ou remover conteúdo, ele ficará incorreto. Verifique se documentos com capa precisam omitir o número visível na primeira página."
    },
    {
      "subtopicId": "INF-08-002",
      "front": "Você precisa atuar em tabelas, colunas, imagens e objetos. Um relatório possui quadro de inventário com quatro colunas e uma imagem do equipamento ao lado da descrição. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar tabela para os campos e configurar a disposição da imagem de forma estável, conferindo o layout após as edições. Justificativa: Tabelas organizam conteúdo em células; colunas de texto e imagens inseridas têm comportamentos próprios de posicionamento e fluxo. Tabela não é planilha: pode armazenar dados organizados, mas não possui necessariamente todo o motor de cálculo de uma planilha eletrônica. Colunas de página não são células de tabela. Texto ao redor de uma imagem depende do ajuste de disposição. Erro a evitar: Não alinhe tabelas com espaços. Alterar a posição de uma imagem sem entender a âncora pode deslocá-la quando o documento for editado."
    },
    {
      "subtopicId": "INF-08-003",
      "front": "Você precisa atuar em estilos, temas, sumário automático e seções. Uma coordenação criou relatório de 60 páginas e quer um sumário que acompanhe mudanças de títulos. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Aplicar estilos hierárquicos aos títulos, gerar sumário automático e atualizá-lo após revisões. Justificativa: Estilos aplicam conjuntos de formatações estruturadas; títulos com estilos adequados sustentam navegação e sumários automáticos. Apenas aumentar a fonte e aplicar negrito não atribui semanticamente o estilo Título 1. Sumário automático é diferente de uma lista de títulos digitada e alinhada com pontos manualmente. Erro a evitar: Se um capítulo muda de nome e o sumário não é atualizado, o índice pode permanecer desatualizado. Estilos devem refletir a hierarquia lógica, não só aparência."
    },
    {
      "subtopicId": "INF-08-004",
      "front": "Você precisa atuar em revisão ortográfica, comentários e controle de alterações. Uma minuta de edital passou por revisão de três pessoas e precisa de uma versão definitiva. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Examinar as alterações, aceitar ou rejeitar individualmente, resolver comentários e conferir o arquivo antes de distribuir. Justificativa: Revisão ortográfica sugere ajustes, comentários registram observações e o controle de alterações marca edições propostas para aceitação ou rejeição. Ocultar marcações não equivale a aceitar alterações. Correção ortográfica não garante precisão técnica: o editor pode deixar passar termos reais usados incorretamente no contexto. Erro a evitar: Antes de publicar um documento compartilhado, conferir comentários, dados pessoais e alterações pendentes. Enviar versão final com marcas de edição pode revelar informações que se pretendia remover."
    },
    {
      "subtopicId": "INF-08-005",
      "front": "Você precisa atuar em localizar e substituir, navegação e referências. Um relatório possui dez referências à “Tabela 3”, mas uma tabela foi incluída antes, mudando a numeração. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Usar legendas e referências cruzadas estruturadas e atualizar campos, em vez de escrever manualmente números fixos. Justificativa: Localizar, substituir e navegar por títulos ou páginas permitem revisar documentos extensos sem alterar indiscriminadamente seus conteúdos. Localizar não é substituir; referência cruzada não é mera digitação de um número fixo. A localização de títulos pelo painel depende da estrutura criada no documento. Erro a evitar: Em um documento jurídico ou administrativo, uma troca global descuidada pode alterar termos em citações, siglas ou nomes de arquivos. Faça revisão do resultado."
    },
    {
      "subtopicId": "INF-08-006",
      "front": "Você precisa atuar em mala direta, etiquetas e correspondências. Uma universidade precisa emitir 180 cartas semelhantes, cada uma com nome e matrícula de destinatário diferente. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Criar modelo único e vinculá-lo a uma lista validada com campos Nome e Matrícula, pré-visualizando antes de gerar. Justificativa: Mala direta combina um documento-modelo com uma fonte de dados estruturada para produzir comunicações personalizadas. Uma lista de nomes digitada no próprio documento não equivale a uma fonte de dados vinculada. O modelo define texto repetido; a tabela fornece valores específicos de cada destinatário. Erro a evitar: Campos vazios, nomes de colunas trocados e seleção incorreta de registros podem gerar mensagens erradas. Dados pessoais devem ser utilizados apenas com finalidade e acesso adequados."
    },
    {
      "subtopicId": "INF-08-007",
      "front": "Você precisa atuar em compartilhamento, proteção e restrições de edição. Um relatório de pessoal precisa ser revisado por dois servidores, mas não por todos os portadores do link. Que decisão tomaria, e como justificaria sua escolha?",
      "back": "Conceder acesso nominal aos revisores com a menor permissão suficiente e verificar as opções de compartilhamento. Justificativa: Compartilhamento e proteção controlam quem pode acessar ou editar documentos; restrição de edição não é sinônimo de criptografia forte. Permissão de link pode valer para qualquer pessoa com link, pessoas da organização ou indivíduos específicos. Criptografia protege confidencialidade; “somente leitura” organiza uma forma de interação, mas não elimina todas as formas de copiar conteúdo. Erro a evitar: Antes de compartilhar planilhas e documentos com dados pessoais, limitar destinatários e conferir permissões. Enviar um link público por engano pode expor o material mesmo que ninguém altere o conteúdo."
    }
  ]
};
