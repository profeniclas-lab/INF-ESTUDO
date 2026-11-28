# Fase D — Lote 3: instalação incremental

**Projeto:** https://github.com/profeniclas-lab/INF-ESTUDO  
**Branch:** `nova-arquitetura`  
**Base conferida:** `29dcf62bf3f95f7c758f3825795a26f1da19e208` em 28/11/2026  
**Dependência:** Lote 1-R e Lote 2 já instalados. Este ZIP NÃO inclui nem substitui os módulos INF-01 a INF-10.

## Como instalar

1. Preserve um ZIP ou cópia do estado atual do repositório e exporte o progresso de teste quando for relevante.
2. Abra a branch `nova-arquitetura` e envie os arquivos extraídos mantendo os caminhos relativos (`js/`, `tests/`, `docs/`).
3. **Substitua exatamente quatro arquivos existentes:** `js/data/modules.js`, `js/data/diagnostics.js`, `js/data/lessons.js` e `js/data/questions.js`.
4. **Adicione os quinze arquivos novos** em `js/data/informatica/`: para cada módulo INF-11 até INF-15, um `-diagnostics.js`, um `-lessons.js` e um `-questions.js`.
5. **Atualize os três testes de publicação gradual**: `tests/inf-curriculo-fase-c.test.mjs`, `tests/inf-fase-d-lote01r-data.test.mjs` e `tests/inf-fase-d-lote02-data.test.mjs`. Esses testes mantêm os requisitos antigos, atualizando apenas as expectativas de módulos e itens totais para 15/12, 93 e 372.
6. Adicione três novos testes `tests/inf-fase-d-lote03-{data,gabaritos,integracao}.test.mjs` e os cinco arquivos `docs/FASE_D_LOTE_3_*.{md,json,txt}` do ZIP.

## Testes automatizados

Em terminal com Node.js 22 e dentro do repositório completo:

```bash
node --test tests/inf-curriculo-fase-c.test.mjs tests/inf-fase-d-lote01r-data.test.mjs tests/inf-fase-d-lote01r-conferencia.test.mjs tests/inf-fase-d-lote02-data.test.mjs tests/inf-fase-d-lote02-conferencia.test.mjs tests/inf-fase-d-lote02-calculos.test.mjs tests/inf-fase-d-lote03-data.test.mjs tests/inf-fase-d-lote03-gabaritos.test.mjs tests/inf-fase-d-lote03-integracao.test.mjs
```

O relatório `FASE_D_LOTE_3_RESULTADO_TESTES.txt` documenta os testes executados numa montagem local; dependências de revisão espaçada e status de questões foram **simuladas apenas nesse ambiente de teste**, e não estão no ZIP.

## Homologação manual no GitHub Pages

- Conferir Módulos: 15 disponíveis e 12 pendentes; INF-11 a INF-15 abrem corretamente.
- Abrir a primeira e a última aula de cada módulo; navegar entre páginas, marcar conclusão e autoavaliação em **perfil de teste**.
- Realizar um flashcard de cada módulo e conferir se a resposta está vinculada ao subtópico correto.
- Iniciar uma sessão por módulo: 18, 18, 16, 18 e 18 questões, com todas as médias e seis difíceis distintas.
- Conferir que a correção aponta para o texto da alternativa correta mesmo após embaralhar; conferir C/E em ordem fixa.
- Banco global: filtrar área INF, módulo, subtópico, formato e “Não respondidas”, registrar uma questão e retornar ao filtro.
- Rodar um simulado pequeno ou de 20 questões quando houver itens suficientes; conferir histórico, erros e fila de revisão sem duplicação.
- Verificar que backup, restauração e Google Drive mantêm **apenas** a identidade INF-ESTUDO; nunca restaurar no progresso principal como teste.

## Importante

Não instale este ZIP sobre a Fase C isolada nem sobre o antigo Lote 1 não revisado. Se a branch tiver recebido alterações adicionais nos quatro adaptadores após o commit-base, revise o diff antes de substituir para evitar sobrescrita. Nenhum arquivo do repositório PT-ESTUDO foi usado como destino da instalação.
