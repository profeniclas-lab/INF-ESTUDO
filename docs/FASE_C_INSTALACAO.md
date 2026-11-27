# INF-ESTUDO — Fase C | Estrutura curricular de Informática

## Escopo

Este ZIP é **incremental**: contém somente os arquivos completos que devem ser adicionados ou substituídos na branch `nova-arquitetura` do repositório `profeniclas-lab/INF-ESTUDO`.

Snapshot consultado antes da conversão: **2620426c2989516721eca7dd0e688e3dc397eb0e**, em 27/11/2026. O ZIP não inclui alterações remotas, commits ou ações sobre outro repositório.

## Instalação

1. Selecione a branch `nova-arquitetura` do INF-ESTUDO.
2. Extraia o ZIP no seu computador.
3. Substitua os arquivos `js/data/{modules,diagnostics,lessons,questions}.js` e `js/features/modules.js` por estes arquivos completos.
4. Adicione os arquivos `docs/INF_CURRICULO_FASE_C.json`, `docs/FASE_C_INSTALACAO.md` e `tests/inf-curriculo-fase-c.test.mjs`.
5. Preserve os demais arquivos do repositório; não sobrescreva `js/core` ou o motor pedagógico com versões antigas.
6. Abra o app pelo GitHub Pages (não diretamente por `file://`). No menu **Módulos**, devem aparecer **27 módulos em preparação** e **0 disponíveis**.

## Critérios pedagógicos

- **Área:** `INF` — Informática; IDs de módulos `INF-01` a `INF-27` e de subtópicos `INF-XX-YYY`.
- **Programa:** 27 módulos e 163 subtópicos, distribuídos por pré-requisitos, frequência qualitativa de cobrança e tarefas típicas de cargos administrativos de nível médio.
- **Fase C somente:** todos os módulos permanecem com `status: 'em_preparacao'` até a produção pedagógica real. Não há questões, aulas nem diagnósticos de Informática publicados neste lote.
- **Fase D:** um flashcard diagnóstico por subtópico; aulas paginadas e contextualizadas; exemplos inéditos; exercícios pós-aula com 1 questão média e 6 difíceis, respeitando variedade de formatos; questões comentadas com gabarito validado por resolução independente.
- **Banco de Questões:** planejar pelo menos quatro questões autorais por subtópico (uma C/E média e três difíceis com formatos alternados), além de provas reais somente com fonte e gabarito verificados. Não inventar prova/banca/fonte.
- **Formatos:** C/E, sequência V/F, assertivas I-II-III, associação, lacunas, múltipla escolha com variações e estudo de caso curto.
- **Publicação:** apenas depois que os arquivos de diagnóstico, aula e questões do módulo estiverem prontos e seus testes passarem; então alterar `status` para `disponivel`, atualizar os adaptadores `js/data/*.js` e adicionar arquivos por módulo sob `js/data/informatica/`.
- **Progresso:** não migrar POR/RED/ADM automaticamente; não acessar as chaves, backups e pastas do PT-ESTUDO ou ADM-ESTUDO.

## Conferência

Execute opcionalmente, com Node.js 22:

```bash
node --test tests/inf-curriculo-fase-c.test.mjs
```

Quando instalado em cópia integral do repositório, execute também os testes de isolamento das Fases B (se mantidos). Os testes legados de Português em `tests/pt-*.test.mjs` e `tests/c03-*.test.mjs` pertencem ao catálogo antigo, que permanece arquivado e **não é carregado**. Eles não devem ser considerados homologação de Informática e precisam ser reescritos na Fase D antes de executar a suíte inteira.

## Efeitos esperados na interface

O Dashboard, o Banco de Questões, os Simulados e as Estatísticas podem mostrar **zero atividade** enquanto não houver módulo publicado. Isso evita oferecer questões de Português como se fossem de Informática; não é uma perda de funcionalidades. A navegação continua disponível. A página **Módulos** exibe a estrutura inteira como planejamento, sem permitir responder conteúdo que ainda não existe.

## Fonte curricular orientadora

Programa da UFRN/COMPERVE 2025 para Assistente em Administração (Noções de Informática), como referência de temas como Windows 11, arquivos e pastas, backups, nuvem, navegadores e tarefas digitais. O currículo é abrangente e **não equivale** a um edital futuro; versões de programas e softwares devem ser ajustadas ao edital de cada concurso.

Link: https://comperve.ufrn.br/conteudo/concursos/ufrn_2025_22_23/documentos/programas_estudo/edital22-2025/PROGRAMA-V-B-C%C3%B3digo_101_%24%23_Assistente_em_Administra%C3%A7%C3%A3o.pdf

## O que não foi modificado

- Arquivos e progresso reais dos aplicativos de Administração e Português;
- `js/core/` (persistência, segurança, Drive, revisão);
- `index.html`, estilos e navegação principal;
- arquivos antigos em `js/data/portugues/` (ficam inativos, sem importação pelos adaptadores novos);
- outros arquivos antigos da pasta `content/` (não importados pelo ponto de entrada atual).

## Testes ainda necessários

- Testar a interface completa via GitHub Pages após o upload;
- Validar manualmente Google Drive com **dados de teste**, antes de uso real;
- Executar regressão completa à medida que os módulos forem liberados na Fase D.
