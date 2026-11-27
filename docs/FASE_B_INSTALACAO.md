# Fase B — Isolamento de INF-ESTUDO

Base: `profeniclas-lab/INF-ESTUDO`, branch `nova-arquitetura`, commit `3d674282347cdc450bfbf0bc61c9acddf34a2ddd`.

## Instalação

1. Confira se a branch escolhida é `nova-arquitetura` e se os arquivos permanecem no mesmo estado da auditoria. Se houve outros commits, verifique conflitos antes de aplicar.
2. Extraia o ZIP. Envie **somente** os arquivos nele contidos, conservando seus caminhos, para `INF-ESTUDO` na branch `nova-arquitetura`. Substitua cada arquivo correspondente. Não apague diretórios nem transfira arquivos para PT-ESTUDO ou Dir-Adm.
3. `tests/inf-isolamento.test.mjs` é novo; `docs/FASE_B_INSTALACAO.md` também.
4. Para testes locais, execute a partir da raiz do repositório: `node --test tests/inf-isolamento.test.mjs`. Se Node tratar os `.js` como CommonJS, use Node moderno com `--experimental-default-type=module`.
5. Teste na URL publicada do INF-ESTUDO, em especial a separação de chaves e backups, com DevTools/Application/Local Storage, sem apagar as chaves antigas.
6. No Google Cloud, confira se `https://profeniclas-lab.github.io` está nas origens JavaScript autorizadas do Client ID configurado. Nunca publique client secret.

## Identidades exclusivas

- `appId`: `inf-estudo`
- estado local: `infEstudo.v1.state`
- tema local: `infEstudo.ui.theme`
- recuperação: `infEstudo.v1.state.preRestoreRecovery` (derivada da chave principal)
- formato de backup: `inf-estudo-progress-backup`
- pasta Drive: `INF-ESTUDO`
- arquivo Drive: `INF-ESTUDO-progresso.json`

## Limitação de transição

A Fase B não substitui os dados `POR` e `RED` existentes. O isolamento é **fail-closed**: o motor pode mostrar conteúdos de Português que já estão versionados, mas não deve gravar identificadores antigos como se fossem Informática. Operações de progresso associadas a módulos antigos poderão ser bloqueadas até a Fase C. Não interprete esse bloqueio como perda de dados. Não limpe localStorage para contorná-lo.

## Pendências de homologação

- Executar o aplicativo completo no navegador publicado.
- Confirmar o funcionamento real do OAuth / Drive com uma conta de teste e pasta exclusiva.
- Auditar rótulos remanescentes de Português nas telas legadas, inclusive em `js/core/google-drive-backup.js`, `js/app.js` e módulos de apresentação. O destino Drive foi isolado pela configuração, mas os textos antigos ainda não foram substituídos nesta entrega.
- Testar todas as páginas e revisões depois da migração pedagógica da Fase C.
