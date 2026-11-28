# Fase D / Lote 1-R — Instalação do pacote **substitutivo**

**Antes de começar:** este ZIP já substitui integralmente o antigo `INF-ESTUDO_FASE_D_LOTE_1.zip`; **não envie o antigo Lote 1 nem misture seus arquivos com esta revisão**. A aplicação está em `https://github.com/profeniclas-lab/INF-ESTUDO`, branch `nova-arquitetura`. O pacote pressupõe Fases B e C aplicadas. O pacote contém arquivos inteiros, não fragmentos.

## Adicionar ou substituir

Substitua os 4 adaptadores de catálogo:

- `js/data/modules.js`
- `js/data/lessons.js`
- `js/data/diagnostics.js`
- `js/data/questions.js`

Adicione os 15 arquivos pedagógicos novos (para cada `inf-01` até `inf-05`):

- `js/data/informatica/inf-XX-lessons.js`
- `js/data/informatica/inf-XX-diagnostics.js`
- `js/data/informatica/inf-XX-questions.js`

Substitua os 4 arquivos de apresentação/seleção:

- `js/features/exercises.js`
- `js/features/lessons.js`
- `js/features/banco-questoes.js`
- `js/features/module-detail.js`

Adicione os quatro arquivos de testes **somente para execução local/CI, não carregados na interface**:

- `tests/inf-curriculo-fase-c.test.mjs`
- `tests/inf-fase-d-lote01r-data.test.mjs`
- `tests/inf-fase-d-lote01r-conferencia.test.mjs`
- `tests/inf-fase-d-lote01r-integration.test.mjs`

Adicione os relatórios na pasta `docs/`:

- `FASE_D_LOTE_1R_DADOS.json`
- `FASE_D_LOTE_1R_GABARITOS_124.json`
- `FASE_D_LOTE_1R_RELATORIO_PEDAGOGICO.md`
- `FASE_D_LOTE_1R_INSTALACAO.md`

## Passos

1. Confirme que o GitHub está na branch `nova-arquitetura` e que não houve alterações conflitantes desde o pacote curricular C.
2. Guarde uma cópia do progresso atual antes de qualquer mudança, caso já esteja utilizando o aplicativo.
3. Extraia este ZIP. Faça upload de seus arquivos preservando a estrutura `js/data/...`, `js/features/...`, `tests/...` e `docs/...`; substitua os caminhos correspondentes.
4. Não apague conteúdos históricos da pasta `js/data/portugues/`; eles não são mais importados pelo catálogo ativo.
5. Recarregue o GitHub Pages, confirme que INF-01 a INF-05 aparecem disponíveis, e que INF-06 a INF-27 continuam em preparação.
6. Confira que cada módulo tem um flashcard diagnóstico por subtópico, aula por subtópico, questões e sessão de 18 questões (INF-01/02/03/05) ou 20 (INF-04).
7. Verifique na interface os filtros por área, módulo, subtópico, formato, dificuldade, situação e quantidade; tente o filtro Não respondidas.
8. Teste com um **perfil de navegador separado e dados fictícios** a gravação, recarga, revisão, erros e backup. Nunca restaure backups de teste sobre seu histórico principal.

## Testes opcionais com Node.js

O aplicativo em produção continua sendo HTML/CSS/JavaScript estático e **não precisa de Node para funcionar**. Para testes locais, use Node.js 22 ou posterior, com resolução ESM como em um projeto com `package.json` contendo `{ "type": "module" }`. No repositório completo, execute:

```bash
node --test tests/inf-curriculo-fase-c.test.mjs tests/inf-fase-d-lote01r-data.test.mjs tests/inf-fase-d-lote01r-conferencia.test.mjs tests/inf-fase-d-lote01r-integration.test.mjs
```

Os testes de integração importam arquivos originais `js/core/*` e `js/features/*` que não vêm neste ZIP incremental porque pertencem ao aplicativo. Se faltarem arquivos no repositório ou o Node não reconhecer módulos ESM, corrija o ambiente de testes sem modificar o motor em produção. A presença de arquivos `package.json` de testes no ambiente local não é requisito do app no navegador.

**Não use** o arquivo antigo `tests/inf-fase-d-lote01.test.mjs`, pois ele testava a regra anterior 1 média + 6 difíceis. Ele não foi incluído no novo ZIP.
