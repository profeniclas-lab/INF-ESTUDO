# Fase D — Lote 2: relatório pedagógico

## Abrangência
| Módulo | Conteúdo | Subtópicos/aulas/cartões | Questões | Sessão de aprendizagem |
|---|---|---:|---:|---:|
| INF-06 | Linux e software livre: noções para concursos | 5 | 20 | 16 (todas as médias + 6 difíceis) |
| INF-07 | Editor de textos: Word e Writer — fundamentos | 6 | 24 | 18 (todas as médias + 6 difíceis) |
| INF-08 | Editor de textos: recursos avançados | 7 | 28 | 20 (todas as médias + 6 difíceis) |
| INF-09 | Planilhas: Excel e Calc — fundamentos | 7 | 28 | 20 (todas as médias + 6 difíceis) |
| INF-10 | Planilhas: fórmulas e funções | 8 | 32 | 22 (todas as médias + 6 difíceis) |

**Total novo:** 5 módulos, 33 subtópicos, 33 aulas, 33 cartões diagnósticos e 132 questões autorais (66 médias, 66 difíceis).
**Acumulado:** 10 módulos publicados, 64 aulas/cartões e 256 questões; 17 módulos em preparação.

## Contrato pedagógico
- Um diagnóstico por subtópico, frente situacional e verso fundamentado; autoavaliação pela interface já existente.
- Uma aula por subtópico, com introdução, conceito, desenvolvimento, diferenças, exemplo, aplicação em concursos, erros comuns, resumo e recuperação ativa; os botões de conclusão/autoavaliação são do motor existente.
- Cada subtópico contém 1 C/E médio, 1 questão média variada e 2 difíceis variando formatos.
- Cada questão possui `optionComments`, `explanation`, `concept`, `trap`, `examTip`, `newExample` e `challenge`.
- Somente a área INF é utilizada; nenhuma questão REAL é inventada.
- Lote gerado com base no contrato em vigor no commit `ebb66d962c7bfb87bfcdca4f0678b57101980838` da branch `nova-arquitetura`.

## Formatos
Contagem dos 132 itens: `afirmacoes`: 21, `associacao`: 11, `ce`: 33, `classica`: 28, `exceto`: 17, `lacunas`: 11, `vf`: 11.
Os tipos `vf`, `afirmacoes`, `associacao`, `lacunas`, `classica`, `exceto` e `ce` são utilizados. Estudos de caso foram incorporados a formatos suportados.

## Conteúdo e progressão
**INF-06:** kernel, distribuições e interfaces; diretórios; permissões; operações do terminal; licenças.
**INF-07:** interface e exibição; edição; caracteres/parágrafos; listas/tabulações; papel; DOCX, ODT, PDF.
**INF-08:** cabeçalhos; tabelas/objetos; estilos/sumário; alterações e comentários; referências; mala direta; permissões.
**INF-09:** estrutura da planilha; cópia/preenchimento; tipos de dados; formatação; precedência; referências; arquivos CSV/XLSX/ODS.
**INF-10:** agregação; contagem; SE/E/OU; somas/médias condicionais; buscas; texto/data/arredondamento; erros; sintaxe localizada.

## Limites e cautelas
- Os exemplos operacionais de Excel pressupõem interface em português brasileiro e separador de argumento `;`, salvo indicação em contrário. Configurações podem variar.
- `PROCX` é abordada com ressalva: Microsoft 365/versões recentes e LibreOffice Calc a partir de 24.8; não generalizar para Excel antigo.
- Em Linux, distribuição e configuração podem alterar recursos e telas. Comandos de manipulação de arquivos exigem verificação do destino.
- Os comentários foram construídos a partir de regras técnicas anotadas para cada subtópico. Os testes confirmam consistência entre explicação textual, resposta e indexação, **não uma revisão semântica externa independente**.
- As aulas têm seções longas, mas a suficiência pedagógica para cada estudante depende do uso e da revisão após testes com usuários.
- Não foram executados testes em navegador real nem autorização com Google Drive. Não se gravou estado do usuário.

## Fontes oficiais consultadas — referências por tema
- Microsoft Support — [Controlar Alterações no Word](https://support.microsoft.com/pt-br/word/training/track-changes-in-word).
- Microsoft Support — [Inserir sumário](https://support.microsoft.com/pt-br/word/training/insert-a-table-of-contents).
- Microsoft Support — [Visão geral de fórmulas no Excel](https://support.microsoft.com/pt-br/excel/get-started/overview-of-formulas-in-excel).
- Microsoft Support — [Função PROCX](https://support.microsoft.com/pt-br/excel/functions/xlookup-function).
- LibreOffice Help — [Função PROCX a partir de 24.8](https://help.libreoffice.org/latest/pt-BR/text/scalc/01/func_xlookup.html).
- Microsoft Support — [Função CONT.NÚM](https://support.microsoft.com/pt-br/excel/functions/count-function?appver=zxl190&helpid=xlmain11.chm60048&ns=excel&syslcid=1046&uilcid=1046&version=19).
- Microsoft Support — [SOMASE](https://support.microsoft.com/pt-br/excel/functions/sumif-function), [MÉDIASE](https://support.microsoft.com/pt-br/excel/functions/averageif-function), [SE/E/OU](https://support.microsoft.com/pt-br/excel/using-if-with-and-or-and-not-functions-in-excel).
- LibreOffice Help — [Separadores e fórmulas](https://help.libreoffice.org/latest/pt-BR/text/shared/optionen/01060900.html).

## Registro de gabaritos
`docs/FASE_D_LOTE_2_GABARITOS_132.json` contém todos os IDs, subtópicos, formatos, dificuldades, texto da resposta, índice do gabarito, índice inferido por conferência textual, fundamento e pendência de validação semântica externa.

### Dificuldades editoriais e decisões
Foram adotadas perguntas com distinções específicas para versões do Microsoft Office e do LibreOffice; fórmulas numéricas tiveram seus resultados confrontados com operações reproduzíveis. A identificação correta de respostas depende de argumentos técnicos, não da letra predefinida. Os gabaritos C/E permanecem na ordem fixa CERTO/ERRADO.
