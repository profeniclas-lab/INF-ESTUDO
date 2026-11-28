# Fase D — Lote 3 · Relatório pedagógico

**INF-ESTUDO — lote incremental INF-11 a INF-15.** Conteúdo autoral para concursos de nível médio, com ênfase em rotinas administrativas. A matriz curricular original foi respeitada, sem alteração dos IDs existentes.

## Cobertura

| Módulo | Subtópicos/aulas | Flashcards | Questões | Médias/difíceis | Sessão pós-aula |
|---|---:|---:|---:|---:|---:|
| INF-11 — Organização e análise de planilhas | 6 | 6 | 24 | 12 / 12 | 18 |
| INF-12 — PowerPoint e Impress | 6 | 6 | 24 | 12 / 12 | 18 |
| INF-13 — Compatibilidade de suítes e formatos | 5 | 5 | 20 | 10 / 10 | 16 |
| INF-14 — Internet, Web e pesquisa | 6 | 6 | 24 | 12 / 12 | 18 |
| INF-15 — Edge, Chrome e Firefox | 6 | 6 | 24 | 12 / 12 | 18 |
| **Total novo** | **29** | **29** | **116** | **58 / 58** | — |

**Após instalar sobre o Lote 2:** 15 dos 27 módulos disponíveis; 12 pendentes. Total de 93 aulas, 93 cartões e 372 questões no banco. Não foi adicionada questão marcada como REAL.

## Programa desenvolvido

**INF-11:** ordenação e filtros sem perda de vínculo entre colunas; validação de dados versus formatação condicional; Tabelas Excel e referências estruturadas; escolha de gráficos; campos de tabelas dinâmicas; área de impressão, escala e visualização.

**INF-12:** slides, temas, layouts e modelos; objetos, imagens e acessibilidade; mestre de slides; transições e animações; modos e anotações do apresentador; exportação em PPTX/ODP/PDF.

**INF-13:** correspondência Word/Writer, Excel/Calc e PowerPoint/Impress; OOXML e ODF; salvar, importar e exportar; interface e disponibilidade por versão; limites de conversão e interoperabilidade.

**INF-14:** internet, intranet e extranet; URLs, DNS e hiperlinks; HTTP, HTTPS e TLS; operadores de busca; credibilidade de fontes; uploads e downloads.

**INF-15:** abas, janelas e atalhos no Windows; favoritos, histórico e downloads; cookies e cache; busca na página, zoom e impressão; modo privativo, perfis e extensões; permissões e certificados.

## Estrutura pedagógica

- Uma aula por subtópico, com objetivo, conhecimento inicial, explicação, diferenças, exemplo aplicado, armadilhas, aplicação em provas, resumo, recuperação ativa e autoavaliação na interface existente.
- **Extensão das aulas:** entre 841 e 1003 palavras por objeto de aula, mediana 891 (todos os campos somados; a teoria não é composta só de um resumo).
- Um cartão de diagnóstico por subtópico, com resposta explicativa; pontuação permanece a autoavaliação já implementada (100/50/0).
- Quatro questões por subtópico: média C/E, outra média de tipo variado, uma difícil de situação prática e outra difícil com análise de conceitos.
- Sete formatos presentes: ce: 29, vf: 13, afirmacoes: 12, associacao: 12, lacunas: 11, classica: 29, exceto: 10.
- Respostas corretas A–D nas questões não C/E (objeto salvo): A: 20, B: 23, C: 24, D: 20; o embaralhamento das alternativas continua sendo realizado pelo motor nas sessões.
- Os 116 exemplos e 116 desafios são distintos enquanto strings. Isso não substitui a avaliação qualitativa humana de originalidade.

## Validação, cuidado com fontes e ressalvas

A base editorial de 29 tópicos (`docs/FASE_D_LOTE_3_BASE_EDITORIAL.json`) registra princípios, exemplos, três proposições verdadeiras com fundamentos, duas falsas com fundamentos, relações conceituais e alternativas de caso com suas refutações. O relatório de gabaritos contém **116 linhas**, com a alternativa gravada, resolução editorial e comparação.

A suíte de gabaritos **reconstrói as respostas a partir das referências editoriais**, separadamente do índice `answer` do objeto JavaScript. Isso permite detectar troca de alternativas/comentários e inconsistências entre proposições e índices. **Não constitui uma segunda revisão semântica independente por outro especialista**. Ainda é necessário revisar possíveis ambiguidades, adequação da dificuldade e reprodutibilidade de comportamentos de programas em instalações reais.

Documentação oficial consultada está em `docs/FASE_D_LOTE_3_FONTES_OFICIAIS.md`. O texto especifica diferenças de plataforma quando relevantes. Para o catálogo INF-11/15, não foram modificadas funções de persistência, backup, Google Drive, pontuação, revisão adaptativa, simulados ou dashboard.

**Pendências de homologação:** abrir o aplicativo completo no GitHub Pages, testar a gravação e recuperação real de progresso de teste, executar os testes em repositório completo com os módulos reais de revisão e conferir visualmente as interfaces. Não usar progresso principal para testes de restauração.
