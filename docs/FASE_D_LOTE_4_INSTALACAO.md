# Fase D — Lote 4: instalação incremental

**Projeto:** https://github.com/profeniclas-lab/INF-ESTUDO  
**Branch:** `nova-arquitetura`  
**Base da consulta:** `29dcf62bf3f95f7c758f3825795a26f1da19e208`, 28/11/2026  
**Dependências:** Fase C, Fase D Lote 1-R, Lote 2 **e Lote 3**.

## ATENÇÃO: instalar o Lote 3 ANTES do Lote 4

Na conferência da branch, os módulos INF-11 a INF-15 **ainda não tinham sido publicados**: `js/data/{modules,diagnostics,lessons,questions}.js` referenciava apenas INF-01 a INF-10. Este Lote 4 foi construído sobre o **ZIP do Lote 3 já entregue anteriormente**, e seus adaptadores importam os módulos INF-01 a INF-20. Se instalá-lo diretamente sobre a branch observada, a aplicação tentará carregar arquivos de INF-11 a INF-15 que ainda não existem, interrompendo a inicialização.

**Ordem correta:** aplicar o ZIP do Lote 3 → verificar arquivos `js/data/informatica/inf-11-*` até `inf-15-*` → aplicar **este** ZIP do Lote 4. Não combinar substituições dos adaptadores em ordem inversa.

## Como instalar

1. Preserve uma cópia do repositório e, caso haja progresso de teste, exporte-o separadamente.
2. Se o Lote 3 ainda não estiver na branch, instale-o primeiro na pasta raiz do repositório preservando caminhos.
3. Faça upload dos arquivos extraídos deste Lote 4 na branch `nova-arquitetura`, substituindo apenas caminhos coincidentes; **não altere** o repositório de Português ou Administração.
4. **Substitua os quatro adaptadores completos**: `js/data/modules.js`, `js/data/diagnostics.js`, `js/data/lessons.js`, `js/data/questions.js`.
5. **Adicione quinze arquivos de conteúdo**: `js/data/informatica/inf-{16,17,18,19,20}-{diagnostics,lessons,questions}.js` (cinco módulos, três arquivos por módulo).
6. **Substitua quatro testes de contagens acumuladas**: `tests/inf-curriculo-fase-c.test.mjs`, `tests/inf-fase-d-lote01r-data.test.mjs`, `tests/inf-fase-d-lote02-data.test.mjs`, `tests/inf-fase-d-lote03-data.test.mjs`.
7. **Adicione três testes**: `tests/inf-fase-d-lote04-data.test.mjs`, `tests/inf-fase-d-lote04-gabaritos.test.mjs` e `tests/inf-fase-d-lote04-integracao.test.mjs`.
8. Adicione os documentos `docs/FASE_D_LOTE_4_*`.

Não apague arquivos de outros módulos: este é um ZIP **incremental**. Não há migração de armazenamento nem alteração de IDs anteriores.

## Testes via terminal no repositório completo

```bash
node --test tests/inf-curriculo-fase-c.test.mjs tests/inf-fase-d-lote01r-data.test.mjs tests/inf-fase-d-lote02-data.test.mjs tests/inf-fase-d-lote03-data.test.mjs tests/inf-fase-d-lote04-data.test.mjs tests/inf-fase-d-lote04-gabaritos.test.mjs tests/inf-fase-d-lote04-integracao.test.mjs
```

Os testes de integração usam as implementações reais disponíveis no repositório instalado. Na montagem local usada na preparação, três dependências auxiliares de histórico, estado de questões e revisão foram **substituídas por simulações exclusivamente para teste**; essas simulações **não fazem parte deste ZIP**.

## Homologação manual no GitHub Pages em perfil de testes

- Dashboard/Módulos: devem existir 20 módulos disponíveis e 7 em preparação; INF-16 a INF-20 devem abrir e mostrar 6 subtópicos cada.
- Diagnóstico: responder, virar e autoavaliar pelo menos um cartão de cada módulo; conferir pergunta e resposta.
- Aulas: abrir a primeira e a última aula; conferir seções, paginação, autoavaliação e gravação após recarga.
- Exercícios: sessão com **12 questões médias + 6 difíceis = 18** por módulo; não repetir IDs; comentários corretos após embaralhamento; C/E em ordem fixa.
- Banco global: filtrar INF-18 → INF-18-004 → formato C/E → Não respondidas. Responder em perfil de testes, verificar aproveitamento e cobertura distintos.
- Revisão/Erros: conferir que respostas de atividades diferentes não duplicam o mesmo ID na agenda; consultar histórico.
- Simulados: montar prova de 20 questões com seleção equilibrada; testar término e correção.
- Backup/Drive: não importar arquivo de outro aplicativo; testar restauração somente em perfil descartável.

## Critérios e ressalvas

- Quantidades após instalar Lote 3 e Lote 4: **27 módulos planejados, 20 publicados, 7 pendentes, 123 aulas, 123 diagnósticos e 492 questões**.
- A resolução editorial textual e a conferência cruzada dos 120 gabaritos estão no JSON do lote. Isso **não certifica uma revisão externa independente** nem substitui ensaios reais em todos os softwares e versões.
- O relatório de testes distingue verificações locais de homologação em navegador, que permanece pendente.
