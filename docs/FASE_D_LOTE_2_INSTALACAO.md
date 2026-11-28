# INSTALAÇÃO — INF-ESTUDO / Fase D / Lote 2

**Pré-requisito:** Lote 1-R instalado na branch `nova-arquitetura`. O commit verificado antes do trabalho foi `ebb66d962c7bfb87bfcdca4f0678b57101980838`.

Este ZIP é **incremental**. Não substitui o Lote 1-R e não contém o projeto completo. As pastas existentes devem ser preservadas. Não faça upload de `topics.py` ou `build.py` (não pertencem ao ZIP).

## Arquivos a SUBSTITUIR
- `js/data/modules.js`
- `js/data/diagnostics.js`
- `js/data/lessons.js`
- `js/data/questions.js`
- `tests/inf-curriculo-fase-c.test.mjs`
- `tests/inf-fase-d-lote01r-data.test.mjs`
- `tests/inf-fase-d-lote01r-conferencia.test.mjs`

## Arquivos a ADICIONAR
- `js/data/informatica/inf-06-lessons.js`, `inf-06-diagnostics.js`, `inf-06-questions.js`
- Os três equivalentes `inf-07-*`, `inf-08-*`, `inf-09-*` e `inf-10-*` (15 arquivos novos no total).
- `tests/inf-fase-d-lote02-data.test.mjs`
- `tests/inf-fase-d-lote02-conferencia.test.mjs`
- `tests/inf-fase-d-lote02-calculos.test.mjs`
- `tests/inf-fase-d-lote02-integration.test.mjs`
- `docs/FASE_D_LOTE_2_DADOS.json`
- `docs/FASE_D_LOTE_2_GABARITOS_132.json`
- `docs/FASE_D_LOTE_2_RELATORIO_PEDAGOGICO.md`
- `docs/FASE_D_LOTE_2_RESULTADO_TESTES.txt`
- `docs/FASE_D_LOTE_2_INSTALACAO.md`

## Testar no REPOSITÓRIO COMPLETO
Execute com Node 22 ou versão compatível com ESM:
```bash
node --test tests/inf-curriculo-fase-c.test.mjs tests/inf-fase-d-lote01r-data.test.mjs tests/inf-fase-d-lote01r-conferencia.test.mjs tests/inf-fase-d-lote01r-integration.test.mjs tests/inf-fase-d-lote02-data.test.mjs tests/inf-fase-d-lote02-conferencia.test.mjs tests/inf-fase-d-lote02-integration.test.mjs tests/inf-fase-d-lote02-calculos.test.mjs
```

## Homologação manual no GitHub Pages
1. Em Módulos, confirmar INF-01 a INF-10 disponíveis e INF-11 a INF-27 em preparação.
2. Abrir INF-06, concluir diagnóstico (5 cartões), percorrer 5 aulas e iniciar exercícios (16 perguntas: 10 médias + 6 difíceis).
3. Em INF-10, conferir diagnóstico com 8 cartões, oito páginas de aula e sessão de 22 questões (16 médias + 6 difíceis).
4. Testar o Banco: filtrar por área INF, módulo INF-10, subtópico INF-10-005, formato `exceto` ou `classica`, e situação Não respondidas.
5. Responder um item do Banco, verificar comentário/gabarito e repetir filtro de não respondidas.
6. Testar simulado com 20 questões e distribuição entre módulos, sem IDs duplicados, conferindo correção e histórico.
7. Gerar backup JSON do INF-ESTUDO, verificar identidade e restaurar apenas em perfil de testes, evitando tocar dados pessoais reais.
8. Verificar no console de navegador ausência de erro de sintaxe, importação ou gravação; validar modo claro/escuro e estatísticas.

**Atenção:** testes executados num ambiente local com dependências simuladas não equivalem à homologação do motor completo. Revise `docs/FASE_D_LOTE_2_RESULTADO_TESTES.txt`.

## Compatibilidade
Preserva os IDs e gabaritos do Lote 1-R, schema de progresso, chaves de armazenamento, autenticação Drive, interface e contratos de módulos. Nenhuma migração ou exclusão de dados é realizada.
