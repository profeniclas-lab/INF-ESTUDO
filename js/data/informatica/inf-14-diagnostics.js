/** INF-ESTUDO — Fase D/Lote 3: Internet, Web e pesquisa de informações. Material pedagógico autoral. */
export const INF_14_DIAGNOSTICS = {
  "INF-14": [
    {
      "subtopicId": "INF-14-001",
      "front": "Um órgão mantém notícias abertas no portal público, formulários exclusivos para servidores e acompanhamento controlado para empresas contratadas. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Usar portal público para notícias, intranet para servidores e acesso de extranet autorizado às contratadas. Fundamentação: Internet é uma rede mundial de redes; Web é um dos serviços executados sobre essa infraestrutura; intranet restringe acesso a usuários de uma organização. Uma opção inadequada seria 'Publicar os formulários internos sem autenticação no portal aberto', pois Expor recursos internos confunde público-alvo com acesso autorizado. Compare também: Internet é infraestrutura; Web é aplicação sobre a infraestrutura. Intranet é espaço de acesso restrito; extranet incorpora usuários externos autorizados. Portal público e portal interno podem usar HTTPS, mas essa tecnologia não determina quem tem permissão de acesso."
    },
    {
      "subtopicId": "INF-14-002",
      "front": "Um e-mail exibe o texto “Portal de serviços”, mas o link leva para https://servicos-gov.exemplo.com/login em vez de um domínio institucional conhecido. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Conferir o host real do link e acessar o serviço por endereço oficial previamente confirmado, sem inserir credenciais no link duvidoso. Fundamentação: URL identifica o endereço de um recurso; domínio nomeia um espaço de endereços; DNS traduz nomes para registros necessários à comunicação. Uma opção inadequada seria 'Confiar no texto do hiperlink porque ele mostra o nome do portal', pois O rótulo clicável pode ser diferente do destino efetivo. Compare também: URL completa inclui esquema e caminho; domínio é parte do nome de rede. DNS resolve nomes, mas não verifica se o conteúdo publicado é verdadeiro. Hiperlink mostra um rótulo e tem um destino efetivo que precisa ser conferido."
    },
    {
      "subtopicId": "INF-14-003",
      "front": "Uma servidora acessa um link com HTTPS, mas o endereço é diferente do portal conhecido e pede envio de documentos sigilosos. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Verificar domínio e legitimidade institucional por canal independente antes de enviar qualquer documento. Fundamentação: HTTP transporta solicitações e respostas Web; HTTPS acrescenta proteção criptográfica de transporte via TLS, sem garantir que o conteúdo seja confiável. Uma opção inadequada seria 'Enviar os dados imediatamente porque o navegador mostra conexão protegida', pois TLS protege o transporte, não garante a boa-fé do destinatário. Compare também: HTTP é protocolo de aplicação; HTTPS indica HTTP sobre canal TLS. Criptografia de transporte não é auditoria de conteúdo. Receber 404 pressupõe que alguma resposta do servidor chegou ao cliente; falha de DNS ocorre em outra etapa."
    },
    {
      "subtopicId": "INF-14-004",
      "front": "Uma pessoa quer encontrar no domínio de uma universidade a expressão exata “assistente em administração” em documentos públicos. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Pesquisar a expressão entre aspas, restringir pelo operador site: ao domínio oficial e conferir o documento aberto. Fundamentação: Mecanismos de busca indexam páginas; operadores como aspas, site: e sinal de exclusão refinam consultas, mas não garantem completude dos resultados. Uma opção inadequada seria 'Confiar que o primeiro resultado é obrigatoriamente o edital vigente', pois Relevância no buscador não demonstra atualização e autenticidade. Compare também: Aspas tentam localizar expressão; site: restringe o domínio alvo; exclusão retira ocorrências indesejadas da consulta. Resultado no topo não comprova oficialidade ou atualização. Indexação não é catálogo completo de todos os documentos publicados na Web."
    },
    {
      "subtopicId": "INF-14-005",
      "front": "Um grupo divulga imagem de suposto novo prazo de inscrição, sem indicar portaria, data nem endereço de publicação. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Localizar publicação no portal do órgão, confirmar data e retificações antes de informar o prazo aos interessados. Fundamentação: Credibilidade de informação depende da origem verificável, data, autoria, finalidade e confirmação em fontes independentes, não apenas da posição nos resultados. Uma opção inadequada seria 'Divulgar imediatamente porque muitas pessoas compartilharam a imagem', pois Popularidade não comprova conteúdo e vigência. Compare também: Fonte primária apresenta diretamente o documento ou dado original; secundária interpreta ou resume. A autoridade depende da questão concreta: a página de um órgão é relevante para seu próprio edital; a opinião viral não tem o mesmo valor. Consistência entre fontes independentes aumenta confiança, sem tornar qualquer informação infalível."
    },
    {
      "subtopicId": "INF-14-006",
      "front": "Um servidor precisa anexar documento PDF a um requerimento eletrônico e guardar comprovante do protocolo. Sem consultar a resposta, explique que decisão técnica tomaria e por que uma solução aparentemente mais rápida poderia falhar.",
      "back": "Fazer upload do PDF no portal correto e confirmar recebimento pelo número ou recibo gerado pelo serviço. Fundamentação: Download recebe dados de um serviço remoto; upload envia dados do dispositivo para um serviço, respeitando permissões e limites do destinatário. Uma opção inadequada seria 'Apenas baixar o formulário do portal e considerar o documento enviado', pois Download transfere dados para o usuário, não protocola o arquivo. Compare também: Upload e download têm sentidos opostos; abrir visualizador online não garante arquivo salvo localmente. Compartilhar um link não significa necessariamente conceder acesso aos dados — permissões podem bloquear o destinatário. Transferência concluída não comprova, por si só, que o arquivo foi validado e processado pelo órgão."
    }
  ]
};
