/** INF-ESTUDO — Fase C: planejamento curricular.
 * Módulos NÃO publicados até receberem diagnósticos, aulas e questões auditadas.
 * Os IDs são estáveis: INF-XX e INF-XX-YYY. Não carrega nenhum conteúdo PT/ADM.
 */
export const AREAS = Object.freeze({ INF: 'Informática' });
export const ALL_PLANNED_MODULES = Object.freeze([
  {
    "id": "INF-01",
    "area": "INF",
    "title": "Fundamentos de informática e sistemas digitais",
    "priority": "alta",
    "objective": "Distinguir conceitos de dado, informação, hardware, software e serviços digitais, aplicando-os a rotinas administrativas",
    "prerequisites": [],
    "subtopics": [
      {
        "id": "INF-01-001",
        "title": "Dado, informação, processamento e armazenamento",
        "priority": "alta"
      },
      {
        "id": "INF-01-002",
        "title": "Hardware, software e firmware: diferenças e exemplos",
        "priority": "alta"
      },
      {
        "id": "INF-01-003",
        "title": "Software básico, aplicativo, utilitário e licenças",
        "priority": "alta"
      },
      {
        "id": "INF-01-004",
        "title": "Sistemas operacionais, aplicativos e usuários",
        "priority": "alta"
      },
      {
        "id": "INF-01-005",
        "title": "Interface gráfica, janelas, ícones e menus",
        "priority": "alta"
      },
      {
        "id": "INF-01-006",
        "title": "Conceitos de arquivo, pasta e extensão",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-02",
    "area": "INF",
    "title": "Hardware, dispositivos e periféricos",
    "priority": "media",
    "objective": "Reconhecer componentes e periféricos, suas funções e características em questões de informática",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-02-001",
        "title": "CPU, memória RAM e dispositivos de entrada e saída",
        "priority": "media"
      },
      {
        "id": "INF-02-002",
        "title": "Placa-mãe, barramentos, portas e conectores",
        "priority": "media"
      },
      {
        "id": "INF-02-003",
        "title": "Teclado, mouse, monitor, webcam e microfone",
        "priority": "media"
      },
      {
        "id": "INF-02-004",
        "title": "Impressoras, scanners, multifuncionais e resolução",
        "priority": "media"
      },
      {
        "id": "INF-02-005",
        "title": "Memória RAM, ROM, cache e armazenamento permanente",
        "priority": "media"
      },
      {
        "id": "INF-02-006",
        "title": "Dispositivos externos, USB, Bluetooth e compatibilidade",
        "priority": "media"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-03",
    "area": "INF",
    "title": "Armazenamento, unidades e formatos de arquivo",
    "priority": "alta",
    "objective": "Comparar mídias, unidades, organização e características de arquivos digitais",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-03-001",
        "title": "Bits, bytes e múltiplos de armazenamento",
        "priority": "alta"
      },
      {
        "id": "INF-03-002",
        "title": "HD, SSD, pendrive, cartões e mídias ópticas",
        "priority": "alta"
      },
      {
        "id": "INF-03-003",
        "title": "Arquivos, pastas, caminhos e extensões",
        "priority": "alta"
      },
      {
        "id": "INF-03-004",
        "title": "Sistemas de arquivos e permissões básicas",
        "priority": "alta"
      },
      {
        "id": "INF-03-005",
        "title": "Compressão, extração e formatos ZIP e similares",
        "priority": "alta"
      },
      {
        "id": "INF-03-006",
        "title": "PDF, documentos, planilhas, imagens e arquivos executáveis",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-04",
    "area": "INF",
    "title": "Windows 11: ambiente e recursos básicos",
    "priority": "alta",
    "objective": "Utilizar recursos essenciais do Windows 11 e distinguir elementos de sua interface",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-04-001",
        "title": "Área de trabalho, menu Iniciar e barra de tarefas",
        "priority": "alta"
      },
      {
        "id": "INF-04-002",
        "title": "Janelas, menus, pesquisa e configurações",
        "priority": "alta"
      },
      {
        "id": "INF-04-003",
        "title": "Contas de usuário, sessão, bloqueio e encerramento",
        "priority": "alta"
      },
      {
        "id": "INF-04-004",
        "title": "Aplicativos, instalação e desinstalação",
        "priority": "alta"
      },
      {
        "id": "INF-04-005",
        "title": "Painel de Configurações, dispositivos e impressoras",
        "priority": "alta"
      },
      {
        "id": "INF-04-006",
        "title": "Gerenciador de Tarefas e aplicativos em execução",
        "priority": "alta"
      },
      {
        "id": "INF-04-007",
        "title": "Atalhos de teclado e recursos de acessibilidade",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-05",
    "area": "INF",
    "title": "Windows 11: arquivos, pastas e Explorador",
    "priority": "alta",
    "objective": "Realizar operações com arquivos e pastas e interpretar seus efeitos no Windows 11",
    "prerequisites": [
      "INF-03",
      "INF-04"
    ],
    "subtopics": [
      {
        "id": "INF-05-001",
        "title": "Explorador de Arquivos, painéis, caminhos e navegação",
        "priority": "alta"
      },
      {
        "id": "INF-05-002",
        "title": "Criar, renomear, selecionar, mover e copiar itens",
        "priority": "alta"
      },
      {
        "id": "INF-05-003",
        "title": "Excluir, restaurar e esvaziar a Lixeira",
        "priority": "alta"
      },
      {
        "id": "INF-05-004",
        "title": "Pesquisa, propriedades, visualizações e ordenação",
        "priority": "alta"
      },
      {
        "id": "INF-05-005",
        "title": "Atalhos de teclado para operações com arquivos",
        "priority": "alta"
      },
      {
        "id": "INF-05-006",
        "title": "Armazenamento local, pastas compartilhadas e permissões",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-06",
    "area": "INF",
    "title": "Linux e software livre: noções para concursos",
    "priority": "media",
    "objective": "Reconhecer a organização básica do Linux, seus conceitos e diferenças em relação ao Windows",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-06-001",
        "title": "Distribuições Linux, kernel e ambiente gráfico",
        "priority": "media"
      },
      {
        "id": "INF-06-002",
        "title": "Estrutura de diretórios e caminhos no Linux",
        "priority": "media"
      },
      {
        "id": "INF-06-003",
        "title": "Arquivos, usuários e permissões básicas",
        "priority": "media"
      },
      {
        "id": "INF-06-004",
        "title": "Gerenciadores de arquivos, terminais e comandos elementares",
        "priority": "media"
      },
      {
        "id": "INF-06-005",
        "title": "Software livre, código aberto e licenciamento",
        "priority": "media"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-07",
    "area": "INF",
    "title": "Editor de textos: Word e Writer — fundamentos",
    "priority": "alta",
    "objective": "Criar e formatar documentos com foco em tarefas administrativas comuns",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-07-001",
        "title": "Interface, documento, página e modos de exibição",
        "priority": "alta"
      },
      {
        "id": "INF-07-002",
        "title": "Inserção, seleção, edição e localização de texto",
        "priority": "alta"
      },
      {
        "id": "INF-07-003",
        "title": "Fontes, parágrafos, alinhamento, recuos e espaçamento",
        "priority": "alta"
      },
      {
        "id": "INF-07-004",
        "title": "Listas, tabulações, bordas e sombreamento",
        "priority": "alta"
      },
      {
        "id": "INF-07-005",
        "title": "Configuração de página, margens e orientação",
        "priority": "alta"
      },
      {
        "id": "INF-07-006",
        "title": "Salvar, exportar, imprimir e formatos DOCX, ODT e PDF",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-08",
    "area": "INF",
    "title": "Editor de textos: recursos avançados",
    "priority": "alta",
    "objective": "Aplicar recursos de revisão, estruturação e automação de documentos de texto",
    "prerequisites": [
      "INF-07"
    ],
    "subtopics": [
      {
        "id": "INF-08-001",
        "title": "Cabeçalho, rodapé e numeração de páginas",
        "priority": "alta"
      },
      {
        "id": "INF-08-002",
        "title": "Tabelas, colunas, imagens e objetos",
        "priority": "alta"
      },
      {
        "id": "INF-08-003",
        "title": "Estilos, temas, sumário automático e seções",
        "priority": "alta"
      },
      {
        "id": "INF-08-004",
        "title": "Revisão ortográfica, comentários e controle de alterações",
        "priority": "alta"
      },
      {
        "id": "INF-08-005",
        "title": "Localizar e substituir, navegação e referências",
        "priority": "alta"
      },
      {
        "id": "INF-08-006",
        "title": "Mala direta, etiquetas e correspondências",
        "priority": "alta"
      },
      {
        "id": "INF-08-007",
        "title": "Compartilhamento, proteção e restrições de edição",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-09",
    "area": "INF",
    "title": "Planilhas: Excel e Calc — fundamentos",
    "priority": "alta",
    "objective": "Compreender a estrutura e operações essenciais de planilhas eletrônicas",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-09-001",
        "title": "Pasta de trabalho, planilha, células, linhas e colunas",
        "priority": "alta"
      },
      {
        "id": "INF-09-002",
        "title": "Seleção, edição, cópia, preenchimento e séries",
        "priority": "alta"
      },
      {
        "id": "INF-09-003",
        "title": "Tipos de dados, números, datas e textos",
        "priority": "alta"
      },
      {
        "id": "INF-09-004",
        "title": "Formatação de células e formatos numéricos",
        "priority": "alta"
      },
      {
        "id": "INF-09-005",
        "title": "Operadores aritméticos e precedência de fórmulas",
        "priority": "alta"
      },
      {
        "id": "INF-09-006",
        "title": "Referências relativas, absolutas e mistas",
        "priority": "alta"
      },
      {
        "id": "INF-09-007",
        "title": "Salvar, abrir, importar e exportar planilhas",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-10",
    "area": "INF",
    "title": "Planilhas: fórmulas e funções",
    "priority": "alta",
    "objective": "Resolver situações de planilha envolvendo fórmulas, referências e funções usuais",
    "prerequisites": [
      "INF-09"
    ],
    "subtopics": [
      {
        "id": "INF-10-001",
        "title": "Funções SOMA, MÉDIA, MÍNIMO e MÁXIMO",
        "priority": "alta"
      },
      {
        "id": "INF-10-002",
        "title": "CONT.NÚM, CONT.VALORES e CONT.SE",
        "priority": "alta"
      },
      {
        "id": "INF-10-003",
        "title": "SE, E, OU e condições lógicas",
        "priority": "alta"
      },
      {
        "id": "INF-10-004",
        "title": "SOMASE, MÉDIASE e critérios simples",
        "priority": "alta"
      },
      {
        "id": "INF-10-005",
        "title": "PROCV, PROCX e pesquisa de informações (quando disponíveis)",
        "priority": "alta"
      },
      {
        "id": "INF-10-006",
        "title": "Funções de texto, data e arredondamento",
        "priority": "alta"
      },
      {
        "id": "INF-10-007",
        "title": "Erros de fórmulas, referências e precedência",
        "priority": "alta"
      },
      {
        "id": "INF-10-008",
        "title": "Diferenças de sintaxe e separadores entre versões e suítes",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-11",
    "area": "INF",
    "title": "Planilhas: organização, análise e gráficos",
    "priority": "alta",
    "objective": "Organizar e analisar dados administrativos em planilhas",
    "prerequisites": [
      "INF-09",
      "INF-10"
    ],
    "subtopics": [
      {
        "id": "INF-11-001",
        "title": "Classificar, filtrar e localizar dados",
        "priority": "alta"
      },
      {
        "id": "INF-11-002",
        "title": "Formatação condicional e validação de dados",
        "priority": "alta"
      },
      {
        "id": "INF-11-003",
        "title": "Tabelas, intervalos e referências estruturadas",
        "priority": "alta"
      },
      {
        "id": "INF-11-004",
        "title": "Gráficos: escolha, criação e interpretação",
        "priority": "alta"
      },
      {
        "id": "INF-11-005",
        "title": "Tabelas dinâmicas: finalidade e uso básico",
        "priority": "alta"
      },
      {
        "id": "INF-11-006",
        "title": "Impressão, área de impressão e layout de página",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-12",
    "area": "INF",
    "title": "Apresentações: PowerPoint e Impress",
    "priority": "media",
    "objective": "Criar e compreender apresentações com recursos básicos e intermediários",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-12-001",
        "title": "Slides, layouts, temas e modelos",
        "priority": "media"
      },
      {
        "id": "INF-12-002",
        "title": "Caixas de texto, imagens, formas e tabelas",
        "priority": "media"
      },
      {
        "id": "INF-12-003",
        "title": "Mestre de slides e padronização visual",
        "priority": "media"
      },
      {
        "id": "INF-12-004",
        "title": "Transições, animações e ordem de apresentação",
        "priority": "media"
      },
      {
        "id": "INF-12-005",
        "title": "Anotações, apresentação de slides e modos de exibição",
        "priority": "media"
      },
      {
        "id": "INF-12-006",
        "title": "Exportação, impressão e formatos PPTX, ODP e PDF",
        "priority": "media"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-13",
    "area": "INF",
    "title": "LibreOffice, Microsoft 365 e formatos compatíveis",
    "priority": "alta",
    "objective": "Reconhecer diferenças de suíte e compatibilidade de arquivos em contextos de concurso",
    "prerequisites": [
      "INF-07",
      "INF-09"
    ],
    "subtopics": [
      {
        "id": "INF-13-001",
        "title": "Word, Excel, PowerPoint e correspondentes no LibreOffice",
        "priority": "alta"
      },
      {
        "id": "INF-13-002",
        "title": "Formatos DOCX, XLSX, PPTX, ODT, ODS e ODP",
        "priority": "alta"
      },
      {
        "id": "INF-13-003",
        "title": "Salvar como, exportar e importar documentos",
        "priority": "alta"
      },
      {
        "id": "INF-13-004",
        "title": "Recursos compartilhados e diferenças de interface",
        "priority": "alta"
      },
      {
        "id": "INF-13-005",
        "title": "Compatibilidade, conversões e limitações entre suítes",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-14",
    "area": "INF",
    "title": "Internet, Web e pesquisa de informações",
    "priority": "alta",
    "objective": "Distinguir conceitos de internet e utilizar mecanismos de pesquisa com segurança",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-14-001",
        "title": "Internet, intranet, extranet e World Wide Web",
        "priority": "alta"
      },
      {
        "id": "INF-14-002",
        "title": "Endereços URL, domínio, DNS e hiperlinks",
        "priority": "alta"
      },
      {
        "id": "INF-14-003",
        "title": "HTTP, HTTPS, transferência e serviços da internet",
        "priority": "alta"
      },
      {
        "id": "INF-14-004",
        "title": "Motores de busca e operadores de pesquisa avançada",
        "priority": "alta"
      },
      {
        "id": "INF-14-005",
        "title": "Resultados, fontes confiáveis e avaliação de credibilidade",
        "priority": "alta"
      },
      {
        "id": "INF-14-006",
        "title": "Downloads, uploads, links e arquivos online",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-15",
    "area": "INF",
    "title": "Navegadores: Edge, Chrome e Firefox",
    "priority": "alta",
    "objective": "Operar recursos comuns dos navegadores e reconhecer suas configurações",
    "prerequisites": [
      "INF-14"
    ],
    "subtopics": [
      {
        "id": "INF-15-001",
        "title": "Guias, janelas, navegação e atalhos",
        "priority": "alta"
      },
      {
        "id": "INF-15-002",
        "title": "Favoritos, histórico e downloads",
        "priority": "alta"
      },
      {
        "id": "INF-15-003",
        "title": "Cookies, cache e dados de navegação",
        "priority": "alta"
      },
      {
        "id": "INF-15-004",
        "title": "Pesquisa na página, zoom e impressão",
        "priority": "alta"
      },
      {
        "id": "INF-15-005",
        "title": "Modo privativo, perfis, extensões e sincronização",
        "priority": "alta"
      },
      {
        "id": "INF-15-006",
        "title": "Permissões de site, certificados HTTPS e alertas",
        "priority": "alta"
      }
    ],
    "status": "disponivel"
  },
  {
    "id": "INF-16",
    "area": "INF",
    "title": "Correio eletrônico e comunicação digital",
    "priority": "alta",
    "objective": "Utilizar corretamente e-mail e ferramentas de comunicação profissional",
    "prerequisites": [
      "INF-14"
    ],
    "subtopics": [
      {
        "id": "INF-16-001",
        "title": "Campos Para, Cc, Cco, assunto e destinatários",
        "priority": "alta"
      },
      {
        "id": "INF-16-002",
        "title": "Responder, responder a todos e encaminhar",
        "priority": "alta"
      },
      {
        "id": "INF-16-003",
        "title": "Anexos, tamanho de arquivos e links compartilhados",
        "priority": "alta"
      },
      {
        "id": "INF-16-004",
        "title": "Pastas, etiquetas, filtros, pesquisa e organização",
        "priority": "alta"
      },
      {
        "id": "INF-16-005",
        "title": "Spam, phishing e sinais de mensagens suspeitas",
        "priority": "alta"
      },
      {
        "id": "INF-16-006",
        "title": "Netiqueta, comunicação institucional e cuidados com dados",
        "priority": "alta"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-17",
    "area": "INF",
    "title": "Redes de computadores e conectividade",
    "priority": "media",
    "objective": "Compreender componentes, conexões e conceitos básicos de redes",
    "prerequisites": [
      "INF-01",
      "INF-14"
    ],
    "subtopics": [
      {
        "id": "INF-17-001",
        "title": "LAN, WAN, redes locais e internet",
        "priority": "media"
      },
      {
        "id": "INF-17-002",
        "title": "Roteador, switch, modem e ponto de acesso",
        "priority": "media"
      },
      {
        "id": "INF-17-003",
        "title": "Wi-Fi, Ethernet, Bluetooth e conexão móvel",
        "priority": "media"
      },
      {
        "id": "INF-17-004",
        "title": "Endereço IP, DNS, MAC e conceitos básicos de DHCP",
        "priority": "media"
      },
      {
        "id": "INF-17-005",
        "title": "Taxa de transferência, latência e disponibilidade",
        "priority": "media"
      },
      {
        "id": "INF-17-006",
        "title": "Compartilhamento de recursos e conexão segura",
        "priority": "media"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-18",
    "area": "INF",
    "title": "Segurança da informação: fundamentos",
    "priority": "alta",
    "objective": "Identificar princípios e controles essenciais de segurança",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-18-001",
        "title": "Confidencialidade, integridade e disponibilidade",
        "priority": "alta"
      },
      {
        "id": "INF-18-002",
        "title": "Autenticidade, não repúdio e controle de acesso",
        "priority": "alta"
      },
      {
        "id": "INF-18-003",
        "title": "Políticas de segurança e classificação de informações",
        "priority": "alta"
      },
      {
        "id": "INF-18-004",
        "title": "Princípio do menor privilégio e gestão de permissões",
        "priority": "alta"
      },
      {
        "id": "INF-18-005",
        "title": "Atualizações, correções e ciclo de vida de software",
        "priority": "alta"
      },
      {
        "id": "INF-18-006",
        "title": "Boas práticas de proteção em ambientes institucionais",
        "priority": "alta"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-19",
    "area": "INF",
    "title": "Ameaças digitais e engenharia social",
    "priority": "alta",
    "objective": "Reconhecer riscos e adotar medidas preventivas na rotina digital",
    "prerequisites": [
      "INF-18"
    ],
    "subtopics": [
      {
        "id": "INF-19-001",
        "title": "Vírus, worms, trojans e spyware: conceitos",
        "priority": "alta"
      },
      {
        "id": "INF-19-002",
        "title": "Ransomware e consequências para dados e serviços",
        "priority": "alta"
      },
      {
        "id": "INF-19-003",
        "title": "Phishing, smishing, vishing e engenharia social",
        "priority": "alta"
      },
      {
        "id": "INF-19-004",
        "title": "Anexos, links falsos e páginas fraudulentas",
        "priority": "alta"
      },
      {
        "id": "INF-19-005",
        "title": "Boatos, desinformação e golpes comuns",
        "priority": "alta"
      },
      {
        "id": "INF-19-006",
        "title": "Procedimentos preventivos e comunicação de incidentes",
        "priority": "alta"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-20",
    "area": "INF",
    "title": "Autenticação, privacidade e proteção de dispositivos",
    "priority": "alta",
    "objective": "Aplicar conceitos de proteção de contas e dados",
    "prerequisites": [
      "INF-18",
      "INF-19"
    ],
    "subtopics": [
      {
        "id": "INF-20-001",
        "title": "Senhas, frases secretas e gerenciadores de senhas",
        "priority": "alta"
      },
      {
        "id": "INF-20-002",
        "title": "Autenticação multifator e verificação de identidade",
        "priority": "alta"
      },
      {
        "id": "INF-20-003",
        "title": "Bloqueio de tela, contas e perfis de acesso",
        "priority": "alta"
      },
      {
        "id": "INF-20-004",
        "title": "Antivírus, firewall e atualizações automáticas",
        "priority": "alta"
      },
      {
        "id": "INF-20-005",
        "title": "Privacidade, permissões de aplicativos e compartilhamentos",
        "priority": "alta"
      },
      {
        "id": "INF-20-006",
        "title": "Cuidados com redes públicas e dispositivos compartilhados",
        "priority": "alta"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-21",
    "area": "INF",
    "title": "Backup, recuperação e armazenamento em nuvem",
    "priority": "alta",
    "objective": "Diferenciar cópias de segurança, sincronização e compartilhamento",
    "prerequisites": [
      "INF-03",
      "INF-18"
    ],
    "subtopics": [
      {
        "id": "INF-21-001",
        "title": "Backup completo, incremental e diferencial",
        "priority": "alta"
      },
      {
        "id": "INF-21-002",
        "title": "Cópia local, externa e em nuvem",
        "priority": "alta"
      },
      {
        "id": "INF-21-003",
        "title": "Sincronização não equivale a backup",
        "priority": "alta"
      },
      {
        "id": "INF-21-004",
        "title": "Versionamento, restauração e testes de recuperação",
        "priority": "alta"
      },
      {
        "id": "INF-21-005",
        "title": "Serviços de nuvem, armazenamento e compartilhamento",
        "priority": "alta"
      },
      {
        "id": "INF-21-006",
        "title": "Permissões, acesso e riscos em documentos compartilhados",
        "priority": "alta"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-22",
    "area": "INF",
    "title": "Colaboração digital: Workspace e Microsoft 365",
    "priority": "media",
    "objective": "Utilizar noções de colaboração e produtividade em nuvem",
    "prerequisites": [
      "INF-14",
      "INF-21"
    ],
    "subtopics": [
      {
        "id": "INF-22-001",
        "title": "Google Drive, Docs, Sheets e Slides: noções",
        "priority": "media"
      },
      {
        "id": "INF-22-002",
        "title": "OneDrive, Word, Excel e PowerPoint na Web",
        "priority": "media"
      },
      {
        "id": "INF-22-003",
        "title": "Compartilhamento, permissões e acesso por link",
        "priority": "media"
      },
      {
        "id": "INF-22-004",
        "title": "Coautoria, comentários e histórico de versões",
        "priority": "media"
      },
      {
        "id": "INF-22-005",
        "title": "Calendários, reuniões e organização de atividades",
        "priority": "media"
      },
      {
        "id": "INF-22-006",
        "title": "Sincronização, edição offline e conflitos de versões",
        "priority": "media"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-23",
    "area": "INF",
    "title": "PDF, digitalização e documentos eletrônicos",
    "priority": "media",
    "objective": "Compreender fluxos básicos de documentos digitais e sua acessibilidade",
    "prerequisites": [
      "INF-07"
    ],
    "subtopics": [
      {
        "id": "INF-23-001",
        "title": "PDF: finalidade, leitura, exportação e impressão",
        "priority": "media"
      },
      {
        "id": "INF-23-002",
        "title": "Digitalização, OCR e características de imagem",
        "priority": "media"
      },
      {
        "id": "INF-23-003",
        "title": "Assinaturas eletrônicas e conceitos de verificação",
        "priority": "media"
      },
      {
        "id": "INF-23-004",
        "title": "Metadados, propriedades e organização documental",
        "priority": "media"
      },
      {
        "id": "INF-23-005",
        "title": "Acessibilidade digital: texto alternativo e estrutura",
        "priority": "media"
      },
      {
        "id": "INF-23-006",
        "title": "Proteção, compartilhamento e cuidados com informações",
        "priority": "media"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-24",
    "area": "INF",
    "title": "Proteção de dados e cidadania digital no serviço público",
    "priority": "alta",
    "objective": "Reconhecer boas práticas de tratamento de dados e uso responsável de serviços digitais",
    "prerequisites": [
      "INF-18"
    ],
    "subtopics": [
      {
        "id": "INF-24-001",
        "title": "Dados pessoais, dados sensíveis e finalidade do tratamento",
        "priority": "alta"
      },
      {
        "id": "INF-24-002",
        "title": "Princípios básicos da LGPD em rotinas administrativas",
        "priority": "alta"
      },
      {
        "id": "INF-24-003",
        "title": "Compartilhamento seguro e minimização de dados",
        "priority": "alta"
      },
      {
        "id": "INF-24-004",
        "title": "Transparência, sigilo, acesso e registro de operações",
        "priority": "alta"
      },
      {
        "id": "INF-24-005",
        "title": "Serviços públicos digitais, gov.br e autenticação",
        "priority": "alta"
      },
      {
        "id": "INF-24-006",
        "title": "Cuidados com dados em e-mails, planilhas e arquivos",
        "priority": "alta"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-25",
    "area": "INF",
    "title": "Produtividade e resolução de problemas cotidianos",
    "priority": "media",
    "objective": "Resolver situações administrativas comuns relacionadas a informática",
    "prerequisites": [
      "INF-04",
      "INF-05"
    ],
    "subtopics": [
      {
        "id": "INF-25-001",
        "title": "Atalhos de produtividade e gerenciamento de janelas",
        "priority": "media"
      },
      {
        "id": "INF-25-002",
        "title": "Compatibilidade de formatos, impressoras e drivers",
        "priority": "media"
      },
      {
        "id": "INF-25-003",
        "title": "Falhas comuns de acesso, rede e impressão",
        "priority": "media"
      },
      {
        "id": "INF-25-004",
        "title": "Organização de pastas, versões e nomes de arquivos",
        "priority": "media"
      },
      {
        "id": "INF-25-005",
        "title": "Diagnóstico básico de erros sem alterar dados importantes",
        "priority": "media"
      },
      {
        "id": "INF-25-006",
        "title": "Boas práticas de ergonomia, acessibilidade e organização",
        "priority": "media"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-26",
    "area": "INF",
    "title": "Sistemas de informação e dados: conceitos básicos",
    "priority": "complementar",
    "objective": "Distinguir conceitos elementares de sistemas, dados estruturados e integração",
    "prerequisites": [
      "INF-01"
    ],
    "subtopics": [
      {
        "id": "INF-26-001",
        "title": "Sistemas de informação e seus componentes",
        "priority": "complementar"
      },
      {
        "id": "INF-26-002",
        "title": "Banco de dados: registros, campos e tabelas",
        "priority": "complementar"
      },
      {
        "id": "INF-26-003",
        "title": "Arquivos CSV e estruturas tabulares",
        "priority": "complementar"
      },
      {
        "id": "INF-26-004",
        "title": "Integração, interoperabilidade e formatos abertos",
        "priority": "complementar"
      },
      {
        "id": "INF-26-005",
        "title": "Noções de qualidade, consistência e ciclo de vida dos dados",
        "priority": "complementar"
      }
    ],
    "status": "em_preparacao"
  },
  {
    "id": "INF-27",
    "area": "INF",
    "title": "Tecnologias emergentes e uso responsável de IA",
    "priority": "complementar",
    "objective": "Reconhecer conceitos atuais de ferramentas digitais com avaliação crítica",
    "prerequisites": [
      "INF-14",
      "INF-18"
    ],
    "subtopics": [
      {
        "id": "INF-27-001",
        "title": "Conceito geral de inteligência artificial e IA generativa",
        "priority": "complementar"
      },
      {
        "id": "INF-27-002",
        "title": "Limitações, imprecisões e necessidade de conferência",
        "priority": "complementar"
      },
      {
        "id": "INF-27-003",
        "title": "Privacidade e proteção de dados no uso de ferramentas",
        "priority": "complementar"
      },
      {
        "id": "INF-27-004",
        "title": "Automação de tarefas simples e supervisão humana",
        "priority": "complementar"
      },
      {
        "id": "INF-27-005",
        "title": "Critérios de confiabilidade, autoria e segurança digital",
        "priority": "complementar"
      }
    ],
    "status": "em_preparacao"
  }
]);
export const MODULES = Object.freeze(ALL_PLANNED_MODULES.filter(m => m.status === 'disponivel'));
export const PENDING_MODULES = Object.freeze(ALL_PLANNED_MODULES.filter(m => m.status !== 'disponivel'));
export function getModuleById(id) { return MODULES.find(m => m.id === id) || null; }
export function getSubtopicById(id) {
  for (const module of MODULES) {
    const subtopic = module.subtopics.find(t => t.id === id);
    if (subtopic) return {module, subtopic};
  }
  return null;
}
export function validateCatalog() {
  const errors = [], ids = new Set(), moduleIds = new Set(ALL_PLANNED_MODULES.map(m => m.id));
  const rank = {alta: 0, media: 1, baixa: 2, complementar: 3};
  const byId = new Map(ALL_PLANNED_MODULES.map(m => [m.id, m]));
  for (const m of ALL_PLANNED_MODULES) {
    if (!/^INF-\d{2}$/.test(m.id)) errors.push(`ID de módulo inválido: ${m.id}`);
    if (ids.has(m.id)) errors.push(`ID duplicado: ${m.id}`);
    ids.add(m.id);
    if (!AREAS[m.area]) errors.push(`Área inválida: ${m.id}`);
    if (!Object.hasOwn(rank, m.priority)) errors.push(`Prioridade inválida: ${m.id}`);
    if (!['em_preparacao','disponivel'].includes(m.status)) errors.push(`Status inválido: ${m.id}`);
    if (!Array.isArray(m.subtopics) || !m.subtopics.length) errors.push(`Sem subtópicos: ${m.id}`);
    const local = new Set();
    for (const t of m.subtopics || []) {
      if (!/^INF-\d{2}-\d{3}$/.test(t.id) || !t.id.startsWith(m.id + '-')) errors.push(`Vínculo inválido: ${t.id}`);
      if (ids.has(t.id) || local.has(t.id)) errors.push(`ID duplicado: ${t.id}`);
      ids.add(t.id); local.add(t.id);
      if (!t.title?.trim()) errors.push(`Subtópico sem título: ${t.id}`);
    }
    for (const previous of m.prerequisites || []) {
      if (!moduleIds.has(previous)) errors.push(`Pré-requisito ausente: ${m.id} → ${previous}`);
      if (previous === m.id) errors.push(`Autodependência: ${m.id}`);
    }
  }
  const visiting = new Set(), visited = new Set();
  function visit(id) {
    if (visiting.has(id)) { errors.push(`Ciclo de pré-requisitos envolvendo ${id}`); return; }
    if (visited.has(id)) return;
    visiting.add(id);
    for (const prev of byId.get(id)?.prerequisites || []) if (byId.has(prev)) visit(prev);
    visiting.delete(id); visited.add(id);
  }
  for (const id of moduleIds) visit(id);
  return errors;
}
