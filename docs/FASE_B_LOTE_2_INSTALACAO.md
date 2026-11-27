# INF-ESTUDO — Fase B, Lote 2: integração e isolamento

Data: 27/11/2026.
Repositório de destino: `profeniclas-lab/INF-ESTUDO`.
Branch: `nova-arquitetura`.
Commit-base conferido no início do lote: `c5399e4dc8ca828d2df40083784d432ee5e58485`.

## Pré-requisito obrigatório

Instale **antes** o ZIP `INF-ESTUDO_FASE_B_LOTE_1.zip`. Foi conferido que os arquivos do Lote 1 constam na branch `nova-arquitetura` do repositório no momento desta implementação. Os arquivos do Lote 2 **não** incluem novamente os arquivos do Lote 1.

## Instalação (sem commits pelo assistente)

1. Descompacte este ZIP em uma pasta local.
2. Abra `https://github.com/profeniclas-lab/INF-ESTUDO` e escolha a branch `nova-arquitetura`.
3. Faça upload dos **arquivos completos**, preservando os caminhos relativos exatamente como estão no ZIP. Não envie o ZIP como se fosse um arquivo executável da aplicação.
4. Substitua os arquivos existentes e adicione os novos (`tests/inf-fase-b-lote02.test.mjs` e este documento).
5. Se o GitHub mostrar arquivos não relacionados em uma comparação ou se o commit da branch tiver mudado, suspenda a substituição e compare antes de prosseguir.
6. Não altere o repositório `pt-estudo` nem a branch `main`.

## Arquivos incluídos

- `js/core/google-drive-backup.js` — substitui o Drive legado. Mantém os exports `buildDriveBackup`, `samePedagogicalProgress`, `renderDriveBackupPanel` e `installDriveBackupUI`. Acrescenta verificações explícitas de destino e arquivo remoto.
- `js/core/progress-restore.js` — restauração com nome exclusivo da cópia de recuperação.
- `js/core/recovery-manager.js` — exportação e mensagens de recuperação INF-ESTUDO.
- `js/core/backup-integrity-tests.js` — diagnóstico corrigido para Informática.
- `js/core/persistence-diagnostics.js` — testes simulados de progresso INF-ESTUDO.
- `js/core/storage-roundtrip-tests.js` — testes simulados de carregamento e salvamento e sentinela PT.
- `js/core/drive-backup-guide.js` — instruções de backup INF-ESTUDO.
- `js/features/settings.js` — rótulos e relatórios exclusivos de Informática, sem mudar a organização visual da tela.
- `js/features/about.js` — página Sobre convertida.
- `js/start-f25-lote04.js` — importa sincronização do título antes de iniciar o motor existente.
- `tests/inf-fase-b-lote02.test.mjs` — novos testes automatizados.
- `docs/FASE_B_LOTE_2_INSTALACAO.md` — este documento.

## Dados isolados

- appId: `inf-estudo`
- localStorage: `infEstudo.v1.state`
- cópia local de recuperação: `infEstudo.v1.state.preRestoreRecovery`
- tema: `infEstudo.ui.theme`
- envelope JSON de backup: `inf-estudo-progress-backup`
- Google Drive: pasta `INF-ESTUDO`, arquivo `INF-ESTUDO-progresso.json`

O código do Drive procura exclusivamente os destinos definidos acima; valida o envelope e o estado antes de sobrescrever/restaurar. O OAuth mantém o escopo `drive.file`, com token somente em memória. O Client ID público continua no arquivo do Lote 1. Em caso de destino ambíguo, arquivo incompatível ou erro de validação, a operação é interrompida.

## Testes automatizados

No diretório raiz do repositório, com Node.js 22 ou superior:

```sh
node --test tests/inf-isolamento.test.mjs tests/inf-fase-b-lote02.test.mjs
```

Resultado no ambiente local de montagem: **12 testes aprovados, zero falhas**. A montagem utilizou os arquivos completos dos Lotes 1 e 2 e reproduções locais de duas dependências originais (`progress-conflict-guard.js` e `progress-recovery-guard.js`), conferidas com seus conteúdos no GitHub. Não se trata de uma execução da suíte completa do repositório nem de teste com a API Google em produção.

## Checklist manual de homologação

1. Em janela de navegação separada, abrir o site INF-ESTUDO e confirmar que o cabeçalho e o título da aba indicam INF-ESTUDO.
2. Em Configurações, conferir pasta `INF-ESTUDO` e arquivo `INF-ESTUDO-progresso.json`.
3. Exportar um backup com estado **INF** de teste e conferir `appId` e `storageKey`.
4. Tentar verificar um JSON de PT-ESTUDO: deve ser recusado antes de restaurar.
5. Tentar verificar um JSON de ADM-ESTUDO: deve ser recusado antes de restaurar.
6. Confirmar que os dados de outros aplicativos permanecem idênticos (sem limpar `localStorage`).
7. Testar conexão OAuth e backup **apenas de dados de teste do INF**. Não executar com o seu progresso principal até a conversão pedagógica.
8. Em outra janela/perfil de testes, restaurar o backup INF e conferir o resultado.
9. Executar os testes de manutenção em Configurações e observar o relatório.

## Pendências conhecidas / escopo

**Ainda não é homologação funcional completa**: faltam teste real do OAuth, simulação com conta Google, regressão integral no navegador e substituição do conteúdo ativo `POR/RED` por `INF`. O motor e catálogo ainda carregam conteúdos de Português; o isolamento estrito impede registrar esses IDs como progresso do INF. Portanto, NÃO usar a app para estudar ou restaurar seu progresso importante até a fase de conversão curricular.

Alguns arquivos históricos ou fora desta entrega (por exemplo `config.js` da raiz, `content/` e relatórios internos não substituídos neste lote) ainda possuem rótulos legados. Não devem ser considerados migração pedagógica concluída. O `app.js` da raiz não é o ponto de entrada ativo.

**Nenhum commit foi realizado pelo assistente. O PT-ESTUDO original não foi alterado.**
