# Fase D — Lote 1-R: relatório pedagógico e de qualidade

**Natureza do pacote:** substitutivo integral do Lote 1 da Fase D, que **não foi instalado**. Requer Fases B e C já presentes na branch `nova-arquitetura` do `profeniclas-lab/INF-ESTUDO`. Não inclui nem altera o motor de Administração ou Português; não escreve no GitHub nem migra progresso.

## Resultado curricular

| Módulo | Subtópicos | Diagnósticos | Aulas | Médias | Difíceis | Total de questões | Questões por sessão |
|---|---:|---:|---:|---:|---:|---:|---:|
| INF-01 — Fundamentos de informática e sistemas digitais | 6 | 6 | 6 | 12 | 12 | 24 | 18 |
| INF-02 — Hardware, dispositivos e periféricos | 6 | 6 | 6 | 12 | 12 | 24 | 18 |
| INF-03 — Armazenamento, unidades e formatos de arquivo | 6 | 6 | 6 | 12 | 12 | 24 | 18 |
| INF-04 — Windows 11: ambiente e recursos básicos | 7 | 7 | 7 | 14 | 14 | 28 | 20 |
| INF-05 — Windows 11: arquivos, pastas e Explorador | 6 | 6 | 6 | 12 | 12 | 24 | 18 |
| **TOTAL** | **31** | **31** | **31** | **62** | **62** | **124** | — |

Cada subtópico tem uma aula com objetivo, conhecimento inicial, conceito, desenvolvimento progressivo, diferenças, exemplo administrativo, aplicação em concursos, erros comuns, resumo, recuperação ativa e autoavaliação. As aulas ficam em páginas por subtópico, com botões de anterior/próxima. Extensão textual aproximada após a reescrita: de 302 a 395 palavras por aula, incluindo todos os campos renderizados.

Cada diagnóstico usa um cartão por subtópico: pergunta de compreensão, resposta explicativa, resposta mental e autoavaliação `sei`/`duvida`/`nao`. Questões independentes usam identificação estável, quatro por subtópico: uma C/E média, uma média variada e duas difíceis.

## Tópicos efetivamente trabalhados

### INF-01 — Fundamentos de informática e sistemas digitais

- `INF-01-001` — Dado, informação, processamento e armazenamento
- `INF-01-002` — Hardware, software e firmware: diferenças e exemplos
- `INF-01-003` — Software básico, aplicativo, utilitário e licenças
- `INF-01-004` — Sistemas operacionais, aplicativos e usuários
- `INF-01-005` — Interface gráfica, janelas, ícones e menus
- `INF-01-006` — Conceitos de arquivo, pasta e extensão

### INF-02 — Hardware, dispositivos e periféricos

- `INF-02-001` — CPU, memória RAM e dispositivos de entrada e saída
- `INF-02-002` — Placa-mãe, barramentos, portas e conectores
- `INF-02-003` — Teclado, mouse, monitor, webcam e microfone
- `INF-02-004` — Impressoras, scanners, multifuncionais e resolução
- `INF-02-005` — Memória RAM, ROM, cache e armazenamento permanente
- `INF-02-006` — Dispositivos externos, USB, Bluetooth e compatibilidade

### INF-03 — Armazenamento, unidades e formatos de arquivo

- `INF-03-001` — Bits, bytes e múltiplos de armazenamento
- `INF-03-002` — HD, SSD, pendrive, cartões e mídias ópticas
- `INF-03-003` — Arquivos, pastas, caminhos e extensões
- `INF-03-004` — Sistemas de arquivos e permissões básicas
- `INF-03-005` — Compressão, extração e formatos ZIP e similares
- `INF-03-006` — PDF, documentos, planilhas, imagens e arquivos executáveis

### INF-04 — Windows 11: ambiente e recursos básicos

- `INF-04-001` — Área de trabalho, menu Iniciar e barra de tarefas
- `INF-04-002` — Janelas, menus, pesquisa e configurações
- `INF-04-003` — Contas de usuário, sessão, bloqueio e encerramento
- `INF-04-004` — Aplicativos, instalação e desinstalação
- `INF-04-005` — Painel de Configurações, dispositivos e impressoras
- `INF-04-006` — Gerenciador de Tarefas e aplicativos em execução
- `INF-04-007` — Atalhos de teclado e recursos de acessibilidade

### INF-05 — Windows 11: arquivos, pastas e Explorador

- `INF-05-001` — Explorador de Arquivos, painéis, caminhos e navegação
- `INF-05-002` — Criar, renomear, selecionar, mover e copiar itens
- `INF-05-003` — Excluir, restaurar e esvaziar a Lixeira
- `INF-05-004` — Pesquisa, propriedades, visualizações e ordenação
- `INF-05-005` — Atalhos de teclado para operações com arquivos
- `INF-05-006` — Armazenamento local, pastas compartilhadas e permissões

## Formatos de questões e rastreabilidade

| Tipo (contrato técnico) | Quantidade |
|---|---:|
| `ce` | 31 |
| `vf` | 25 |
| `exceto` | 11 |
| `associacao` | 6 |
| `afirmacoes` | 26 |
| `lacunas` | 8 |
| `classica` | 17 |

- Tipos suportados: `ce`, `vf`, `afirmacoes`, `associacao`, `lacunas`, `classica` e `exceto`. Não há `caso` como tipo independente: situações administrativas aparecem no enunciado de formatos suportados.
- Todas as 124 questões são `AUTORAL`/`AUTORAL_INEDITA`; não foram atribuídas bancas, provas ou anos inexistentes.
- `docs/FASE_D_LOTE_1R_GABARITOS_124.json` apresenta, para cada questão, ID, subtópico, formato, dificuldade, resposta textual calculada/revisada durante a edição, gabarito gravado, comparação, fundamento e ressalvas.
- O teste `inf-fase-d-lote01r-conferencia.test.mjs` faz uma checagem cruzada **sem consultar diretamente o índice `answer`**: reconstrói respostas de afirmações C/E, sequências V/F, combinações I/II/III, EXCETO, alternativas literais e associações, e compara com o índice gravado. Isso verifica coerência entre explicações e gabaritos, mas **não é prova de que todas as premissas são tecnicamente verdadeiras**; uma revisão editorial independente humana e a resolução de cada item em separado continuam recomendadas antes de certificá-los como definitivamente auditados.
- Os 124 campos `newExample` e os 124 campos `challenge` são distintos entre si e diferentes dos exemplos/perguntas da respectiva aula. A correção apresenta comentários por alternativa, conceito, armadilha, dica, exemplo e desafio.
- As alternativas C/E ficam em ordem fixa. As demais são embaralhadas por tentativa e salvas como índices originais, mantendo o comentário associado ao índice original.

## Ajustes técnicos limitados ao necessário

1. `js/features/exercises.js`: seleciona todas as duas questões médias por subtópico e mais 6 difíceis sem IDs repetidos; mantém mecanismo original de resposta, motivo do acerto/erro e agenda de revisão.
2. `js/features/lessons.js`: renderiza os campos aprofundados dentro do componente de aula existente; mantém paginação e registro de conclusão e autoavaliação.
3. `js/features/banco-questoes.js`: mantém exportações e fluxo original do Banco, acrescentando filtros por `subtopicId` e `type` e cartões de Aproveitamento da prática e Cobertura do Banco; mantém Não respondidas.
4. `js/features/module-detail.js`: aproveitamento total no topo, depois Diagnóstico, Aulas, Exercícios, e Informações ao final com demais indicadores. Cobertura do Banco conta somente respostas de fato registradas no Banco.
5. `js/data/modules.js`: torna INF-01 a INF-05 disponíveis e mantém INF-06 a INF-27 em preparação. Os adaptadores importam apenas dados da pasta `informatica`.

## Testes e limites

No ambiente de montagem, foram executados **37 testes** em quatro suítes: 7 de currículo, 8 de contratos de dados, 7 de conferência cruzada de gabaritos e 15 testes de integração do seletor/UI de funções. Todos passaram. Para os testes de integração, foram usados **adaptadores de teste temporários em memória** para dependências do motor não presentes nos ZIPs da Fase B/C; esses adaptadores **não estão no pacote** e não provam compatibilidade integral com todos os arquivos reais da aplicação. Testes de sintaxe JavaScript e integridade do ZIP também foram executados. O aplicativo ainda requer:

- Teste real de inicialização/navegação em GitHub Pages, incluindo ausência de erros no console.
- Teste de completar diagnóstico, todas as aulas e sessões por módulo, banco, flashcards, revisão, erros, simulados, estatísticas e importação/exportação com dados fictícios.
- Conferência independente por especialista de proposições técnicas sensíveis a Windows 11, hardwares e recursos de versões diversas.
- Revisão final dos textos e correções no contexto da prova/edital específico; não usar os resultados de testes sintáticos para certificar precisão editorial.

## Referências de fabricante para os temas de Windows

- Microsoft Support — [Atalhos de teclado no Windows](https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows)
- Microsoft Support — [Explorador de Arquivos do Windows](https://support.microsoft.com/pt-br/windows/experience/fileexplorer/file-explorer-in-windows)
- Microsoft Support — [Ferramentas de configuração do sistema](https://support.microsoft.com/pt-br/windows/experience/system-configuration-tools-in-windows)

Essas referências são fontes temáticas e não caracterizam os enunciados autorais como questões reais. O conteúdo usa contexto de Windows 11 quando aplicável; opções e menus específicos podem variar com a compilação e com políticas institucionais.
