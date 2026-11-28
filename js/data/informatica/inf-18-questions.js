/** INF-ESTUDO — Fase D/Lote 4: Segurança da informação: fundamentos. Material autoral. */
export const INF_18_QUESTIONS = [
  {
    "id": "Q-INF-18-001-01",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-001",
    "topic": "Confidencialidade, integridade e disponibilidade",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar servidores sobre confidencialidade, integridade e disponibilidade, julgue CERTO ou ERRADO: Um arquivo íntegro pode estar indisponível durante falha de energia.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Marcar CERTO está adequado porque Integridade e disponibilidade são propriedades independentes.",
      "Marcar ERRADO é inadequado porque Integridade e disponibilidade são propriedades independentes. A proposição é compatível com o conteúdo."
    ],
    "explanation": "CERTO: Integridade e disponibilidade são propriedades independentes. O conceito central exige diferenciar Confidencialidade, Integridade e Disponibilidade conforme suas funções. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
    "concept": "Neste assunto, distinguem-se três elementos: Confidencialidade é Propriedade de impedir acesso ou divulgação a partes não autorizadas. Integridade é Propriedade de manter correção e impedir alteração ou destruição indevida. Disponibilidade é Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema. Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso. Confundir os três pilares impede selecionar a medida adequada à falha observada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta. Backup isolado não substitui controle de acesso ou validação de dados.",
    "newExample": "Numa orientação nova sobre confidencialidade, integridade e disponibilidade, uma equipe compara duas afirmações: “Criptografia pode apoiar confidencialidade de dados em repouso ou trânsito.” e “Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema.”. A primeira é fundamentada por Sem controles de chave e acesso, não resolve todos os riscos.",
    "challenge": "Reescreva a frase “Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema.” de forma tecnicamente defensável e identifique qual efeito incorreto ela teria em um processo do órgão.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-001-02",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-001",
    "topic": "Confidencialidade, integridade e disponibilidade",
    "type": "lacunas",
    "difficulty": "media",
    "stem": "Ao redigir o manual de formação da equipe, complete os três campos com o conceito correto: “Propriedade de impedir acesso ou divulgação a partes não autorizadas.” corresponde a ____; “Propriedade de manter correção e impedir alteração ou destruição indevida.” corresponde a ____; e “Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado.” corresponde a ____. Selecione o preenchimento na mesma ordem.",
    "options": [
      "Integridade / Confidencialidade / Disponibilidade",
      "Confidencialidade / Disponibilidade / Integridade",
      "Confidencialidade / Integridade / Disponibilidade",
      "Disponibilidade / Integridade / Confidencialidade"
    ],
    "answer": 2,
    "optionComments": [
      "A lacuna 1 pede “Confidencialidade”, porque Propriedade de impedir acesso ou divulgação a partes não autorizadas. A opção usa “Integridade”, que corresponde a outro conceito e altera o sentido do documento.",
      "A lacuna 2 pede “Integridade”, porque Propriedade de manter correção e impedir alteração ou destruição indevida. A opção usa “Disponibilidade”, que corresponde a outro conceito e altera o sentido do documento.",
      "Combinação coerente com as definições: Confidencialidade — Propriedade de impedir acesso ou divulgação a partes não autorizadas.; Integridade — Propriedade de manter correção e impedir alteração ou destruição indevida.; Disponibilidade — Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado.",
      "A lacuna 1 pede “Confidencialidade”, porque Propriedade de impedir acesso ou divulgação a partes não autorizadas. A opção usa “Disponibilidade”, que corresponde a outro conceito e altera o sentido do documento."
    ],
    "explanation": "Cada definição deve ser preenchida na ordem: Confidencialidade / Integridade / Disponibilidade. Confidencialidade: Propriedade de impedir acesso ou divulgação a partes não autorizadas.; Integridade: Propriedade de manter correção e impedir alteração ou destruição indevida.; Disponibilidade: Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
    "concept": "Neste assunto, distinguem-se três elementos: Confidencialidade é Propriedade de impedir acesso ou divulgação a partes não autorizadas. Integridade é Propriedade de manter correção e impedir alteração ou destruição indevida. Disponibilidade é Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema. Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso. Confundir os três pilares impede selecionar a medida adequada à falha observada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta. Backup isolado não substitui controle de acesso ou validação de dados.",
    "newExample": "No manual do setor, foram anotados os termos Integridade e Disponibilidade; o primeiro significa Propriedade de manter correção e impedir alteração ou destruição indevida.",
    "challenge": "Construa uma tabela com Confidencialidade, Integridade e Disponibilidade e explique uma tarefa que exige distinguir cada um.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-001-03",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-001",
    "topic": "Confidencialidade, integridade e disponibilidade",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema: Uma servidora acessa relatório sigiloso com permissão regular, mas percebe valores alterados sem autorização. A equipe deve manter a finalidade do serviço, evitar divulgações indevidas e justificar uma única providência. Qual das alternativas atende melhor ao problema descrito?",
    "options": [
      "Classificar a ocorrência apenas como falta de disponibilidade porque o documento foi aberto.",
      "Publicar o relatório para aumentar confidencialidade.",
      "Apagar as versões anteriores antes de comparar valores.",
      "Verificar trilha de alterações e comunicar incidente de integridade, preservando evidências."
    ],
    "answer": 3,
    "optionComments": [
      "Esta decisão não atende às condições da situação: O arquivo está acessível; o sinal é modificação incorreta. O cuidado necessário é Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
      "Esta decisão não atende às condições da situação: Divulgação aberta contradiz o controle de sigilo. O cuidado necessário é Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
      "Esta decisão não atende às condições da situação: Isso elimina evidências e dificulta recuperação de conteúdo íntegro. O cuidado necessário é Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
      "Esta medida responde ao caso específico: O problema central é a alteração indevida, embora o acesso esteja disponível. Antes de executar, deve-se confirmar: Identificar quem pode ler, quem pode alterar e como restaurar o acesso, testando controles associados a cada requisito."
    ],
    "explanation": "Conduta aplicável: Verificar trilha de alterações e comunicar incidente de integridade, preservando evidências. O problema central é a alteração indevida, embora o acesso esteja disponível. As outras condutas apresentam riscos específicos: O arquivo está acessível; o sinal é modificação incorreta.; Divulgação aberta contradiz o controle de sigilo.; Isso elimina evidências e dificulta recuperação de conteúdo íntegro.. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
    "concept": "Neste assunto, distinguem-se três elementos: Confidencialidade é Propriedade de impedir acesso ou divulgação a partes não autorizadas. Integridade é Propriedade de manter correção e impedir alteração ou destruição indevida. Disponibilidade é Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema. Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso. Confundir os três pilares impede selecionar a medida adequada à falha observada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta. Backup isolado não substitui controle de acesso ou validação de dados.",
    "newExample": "Outra unidade precisa resolver problema semelhante: Uma servidora acessa relatório sigiloso com permissão regular, mas percebe valores alterados sem autorização. Antes de agir, registra a justificativa: O problema central é a alteração indevida, embora o acesso esteja disponível.",
    "challenge": "Defina duas evidências que comprovem, sem acesso indevido, se a providência “Verificar trilha de alterações e comunicar incidente de integridade, preservando evidências.” resolveu o caso.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-001-04",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-001",
    "topic": "Confidencialidade, integridade e disponibilidade",
    "type": "afirmacoes",
    "difficulty": "dificil",
    "stem": "No exame conjunto das proposições sobre Confidencialidade e conceitos relacionados, identifique quais assertivas estão tecnicamente corretas.\nI. Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema.\nII. Um arquivo íntegro pode estar indisponível durante falha de energia.\nIII. Cópia de segurança pode apoiar disponibilidade e recuperação após incidentes.",
    "options": [
      "Apenas II e III",
      "Apenas III",
      "Apenas I e III",
      "Nenhuma das assertivas"
    ],
    "answer": 0,
    "optionComments": [
      "Combinação correta. I: Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso.; II: Integridade e disponibilidade são propriedades independentes.; III: Backup isolado não substitui controle de acesso ou validação de dados.",
      "A escolha classifica incorretamente a assertiva II. Integridade e disponibilidade são propriedades independentes. A combinação das três proposições deve ser Apenas II e III.",
      "A escolha classifica incorretamente a assertiva I. Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso. A combinação das três proposições deve ser Apenas II e III.",
      "A escolha classifica incorretamente a assertiva II. Integridade e disponibilidade são propriedades independentes. A combinação das três proposições deve ser Apenas II e III."
    ],
    "explanation": "As assertivas verdadeiras são identificadas individualmente, produzindo Apenas II e III. Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.",
    "concept": "Neste assunto, distinguem-se três elementos: Confidencialidade é Propriedade de impedir acesso ou divulgação a partes não autorizadas. Integridade é Propriedade de manter correção e impedir alteração ou destruição indevida. Disponibilidade é Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Disponibilidade significa manter os dados secretos e integridade significa acesso rápido ao sistema. Segredo corresponde à confidencialidade; integridade trata de alterações e disponibilidade de acesso. Confundir os três pilares impede selecionar a medida adequada à falha observada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta. Backup isolado não substitui controle de acesso ou validação de dados.",
    "newExample": "Em uma prova prática simulada sobre confidencialidade, integridade e disponibilidade, a equipe verifica que Cópia de segurança pode apoiar disponibilidade e recuperação após incidentes. porque Backup isolado não substitui controle de acesso ou validação de dados.",
    "challenge": "Explique em quais condições a observação “Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta.” modifica a interpretação do item e como indicá-las no enunciado.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-002-01",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-002",
    "topic": "Autenticidade, não repúdio e controle de acesso",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar servidores sobre autenticidade, não repúdio e controle de acesso, julgue CERTO ou ERRADO: O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Marcar CERTO é inadequado: Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. A afirmação não corresponde ao conceito.",
      "Marcar ERRADO está correto: Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. A afirmação contraria o fundamento técnico."
    ],
    "explanation": "ERRADO: Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. O conceito central exige diferenciar Autenticidade, Não repúdio e Controle de acesso conforme suas funções. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.",
    "concept": "Neste assunto, distinguem-se três elementos: Autenticidade é Confiança justificada de que uma identidade ou origem corresponde ao que é alegado. Não repúdio é Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato. Controle de acesso é Conjunto de regras que determina identidades e ações permitidas sobre recursos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior. Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. Sem trilhas protegidas e perfis definidos, decisões podem se tornar contestáveis e difíceis de auditar.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico. Logs precisam ser protegidos e contextualizados para serem confiáveis.",
    "newExample": "Numa orientação nova sobre autenticidade, não repúdio e controle de acesso, uma equipe compara duas afirmações: “Assinaturas digitais verificáveis podem apoiar autenticidade e não repúdio dentro de uma infraestrutura adequada.” e “O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior.”. A primeira é fundamentada por A evidência depende de chaves, certificados, registros e políticas.",
    "challenge": "Reescreva a frase “O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior.” de forma tecnicamente defensável e identifique qual efeito incorreto ela teria em um processo do órgão.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-002-02",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-002",
    "topic": "Autenticidade, não repúdio e controle de acesso",
    "type": "vf",
    "difficulty": "media",
    "stem": "Ao examinar três declarações feitas durante a orientação de servidores sobre o tema, julgue cada afirmação como verdadeira (V) ou falsa (F) e selecione a sequência correta.\nI. Um login válido não demonstra sozinho que uma ação específica foi autorizada.\nII. O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior.\nIII. Assinaturas digitais verificáveis podem apoiar autenticidade e não repúdio dentro de uma infraestrutura adequada.",
    "options": [
      "F – F – V",
      "V – F – V",
      "V – V – V",
      "V – F – F"
    ],
    "answer": 1,
    "optionComments": [
      "A proposição I foi classificada incorretamente nessa sequência. Autenticação de identidade e autorização de operação têm finalidades distintas. Por isso, seu valor deve ser V, e não F.",
      "Sequência fundamentada: I é V porque Autenticação de identidade e autorização de operação têm finalidades distintas.; II é F porque Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade.; III é V porque A evidência depende de chaves, certificados, registros e políticas..",
      "A proposição II foi classificada incorretamente nessa sequência. Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. Por isso, seu valor deve ser F, e não V.",
      "A proposição III foi classificada incorretamente nessa sequência. A evidência depende de chaves, certificados, registros e políticas. Por isso, seu valor deve ser V, e não F."
    ],
    "explanation": "A sequência é V – F – V: I=V; II=F; III=V. Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.",
    "concept": "Neste assunto, distinguem-se três elementos: Autenticidade é Confiança justificada de que uma identidade ou origem corresponde ao que é alegado. Não repúdio é Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato. Controle de acesso é Conjunto de regras que determina identidades e ações permitidas sobre recursos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior. Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. Sem trilhas protegidas e perfis definidos, decisões podem se tornar contestáveis e difíceis de auditar.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico. Logs precisam ser protegidos e contextualizados para serem confiáveis.",
    "newExample": "No manual do setor, foram anotados os termos Controle de acesso e Autenticidade; o primeiro significa Conjunto de regras que determina identidades e ações permitidas sobre recursos.",
    "challenge": "Construa uma tabela com Autenticidade, Não repúdio e Controle de acesso e explique uma tarefa que exige distinguir cada um.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-002-03",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-002",
    "topic": "Autenticidade, não repúdio e controle de acesso",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema: Um processo eletrônico registra autorização de despesa, e a chefia precisa verificar a origem do documento e as permissões de assinatura. A equipe deve manter a finalidade do serviço, evitar divulgações indevidas e justificar uma única providência. Qual das alternativas atende melhor ao problema descrito?",
    "options": [
      "Conferir assinatura verificável, identidade, atribuições e registros associados ao ato.",
      "Considerar o documento autêntico porque foi recebido por e-mail com nome conhecido.",
      "Permitir qualquer servidor assinar porque todos têm login no sistema.",
      "Apagar trilhas de auditoria após a confirmação visual da assinatura."
    ],
    "answer": 0,
    "optionComments": [
      "Esta medida responde ao caso específico: A análise une autenticidade, autorização e evidência sem confundir seus papéis. Antes de executar, deve-se confirmar: Verificar identidade, permissão e evidência da ação, separando cada uma das três perguntas.",
      "Esta decisão não atende às condições da situação: Nome exibido é indício insuficiente de origem. O cuidado necessário é Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.",
      "Esta decisão não atende às condições da situação: Login não concede atribuição para aprovar despesas. O cuidado necessário é Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.",
      "Esta decisão não atende às condições da situação: A supressão compromete evidência para futura apuração. O cuidado necessário é Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico."
    ],
    "explanation": "Conduta aplicável: Conferir assinatura verificável, identidade, atribuições e registros associados ao ato. A análise une autenticidade, autorização e evidência sem confundir seus papéis. As outras condutas apresentam riscos específicos: Nome exibido é indício insuficiente de origem.; Login não concede atribuição para aprovar despesas.; A supressão compromete evidência para futura apuração.. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.",
    "concept": "Neste assunto, distinguem-se três elementos: Autenticidade é Confiança justificada de que uma identidade ou origem corresponde ao que é alegado. Não repúdio é Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato. Controle de acesso é Conjunto de regras que determina identidades e ações permitidas sobre recursos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior. Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. Sem trilhas protegidas e perfis definidos, decisões podem se tornar contestáveis e difíceis de auditar.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico. Logs precisam ser protegidos e contextualizados para serem confiáveis.",
    "newExample": "Outra unidade precisa resolver problema semelhante: Um processo eletrônico registra autorização de despesa, e a chefia precisa verificar a origem do documento e as permissões de assinatura. Antes de agir, registra a justificativa: A análise une autenticidade, autorização e evidência sem confundir seus papéis.",
    "challenge": "Defina duas evidências que comprovem, sem acesso indevido, se a providência “Conferir assinatura verificável, identidade, atribuições e registros associados ao ato.” resolveu o caso.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-002-04",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-002",
    "topic": "Autenticidade, não repúdio e controle de acesso",
    "type": "associacao",
    "difficulty": "dificil",
    "stem": "Associe os itens da Coluna I às descrições da Coluna II, considerando a atividade administrativa.\nColuna I: 1. Autenticidade; 2. Não repúdio; 3. Controle de acesso\nColuna II: A. Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato.; B. Conjunto de regras que determina identidades e ações permitidas sobre recursos.; C. Confiança justificada de que uma identidade ou origem corresponde ao que é alegado.\nAssinale a sequência de correspondências correta.",
    "options": [
      "1-B, 2-A, 3-C",
      "1-C, 2-A, 3-B",
      "1-C, 2-B, 3-A",
      "1-A, 2-C, 3-B"
    ],
    "answer": 1,
    "optionComments": [
      "A associação do item 1 está incorreta: Autenticidade significa “Confiança justificada de que uma identidade ou origem corresponde ao que é alegado.”, e não “Conjunto de regras que determina identidades e ações permitidas sobre recursos.”. Por isso, o item 1 deve corresponder à letra C.",
      "A relação correta é 1-C, 2-A, 3-B: Autenticidade significa Confiança justificada de que uma identidade ou origem corresponde ao que é alegado.; Não repúdio significa Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato.; Controle de acesso significa Conjunto de regras que determina identidades e ações permitidas sobre recursos.",
      "A associação do item 2 está incorreta: Não repúdio significa “Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato.”, e não “Conjunto de regras que determina identidades e ações permitidas sobre recursos.”. Por isso, o item 2 deve corresponder à letra A.",
      "A associação do item 1 está incorreta: Autenticidade significa “Confiança justificada de que uma identidade ou origem corresponde ao que é alegado.”, e não “Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato.”. Por isso, o item 1 deve corresponder à letra C."
    ],
    "explanation": "Correspondências independentes de posição: 1-C, 2-A, 3-B. Autenticidade: Confiança justificada de que uma identidade ou origem corresponde ao que é alegado.; Não repúdio: Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato.; Controle de acesso: Conjunto de regras que determina identidades e ações permitidas sobre recursos. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.",
    "concept": "Neste assunto, distinguem-se três elementos: Autenticidade é Confiança justificada de que uma identidade ou origem corresponde ao que é alegado. Não repúdio é Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato. Controle de acesso é Conjunto de regras que determina identidades e ações permitidas sobre recursos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: O simples uso de senha em um formulário garante não repúdio absoluto de qualquer ato posterior. Senha pode ser compartilhada ou comprometida; exige evidências e gestão de identidade. Sem trilhas protegidas e perfis definidos, decisões podem se tornar contestáveis e difíceis de auditar.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico. Logs precisam ser protegidos e contextualizados para serem confiáveis.",
    "newExample": "Em uma prova prática simulada sobre autenticidade, não repúdio e controle de acesso, a equipe verifica que Registros de auditoria ajudam a investigar quem realizou determinada operação. porque Logs precisam ser protegidos e contextualizados para serem confiáveis.",
    "challenge": "Explique em quais condições a observação “Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico.” modifica a interpretação do item e como indicá-las no enunciado.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-003-01",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-003",
    "topic": "Políticas de segurança e classificação de informações",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar servidores sobre políticas de segurança e classificação de informações, julgue CERTO ou ERRADO: Uma informação pública e uma informação restrita podem exigir controles diferentes.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Marcar CERTO está adequado porque A finalidade e a classificação orientam armazenamento e circulação.",
      "Marcar ERRADO é inadequado porque A finalidade e a classificação orientam armazenamento e circulação. A proposição é compatível com o conteúdo."
    ],
    "explanation": "CERTO: A finalidade e a classificação orientam armazenamento e circulação. O conceito central exige diferenciar Política de segurança, Classificação e Retenção conforme suas funções. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.",
    "concept": "Neste assunto, distinguem-se três elementos: Política de segurança é Conjunto de diretrizes aprovadas que orientam proteção de ativos e responsabilidades. Classificação é Atribuição de categoria à informação conforme sensibilidade e necessidade de proteção. Retenção é Prazo e condições para conservar registros conforme normas aplicáveis. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço. Pode haver informações pessoais, sigilos legais ou restrições de acesso. A divulgação indevida de informações institucionais pode produzir danos e responsabilidades administrativas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística. Regras de retenção e proteção devem ser compatibilizadas.",
    "newExample": "Numa orientação nova sobre políticas de segurança e classificação de informações, uma equipe compara duas afirmações: “Diretrizes precisam ser traduzidas em procedimentos e responsáveis.” e “Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço.”. A primeira é fundamentada por Uma política sem execução consistente tem eficácia limitada.",
    "challenge": "Reescreva a frase “Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço.” de forma tecnicamente defensável e identifique qual efeito incorreto ela teria em um processo do órgão.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-003-02",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-003",
    "topic": "Políticas de segurança e classificação de informações",
    "type": "afirmacoes",
    "difficulty": "media",
    "stem": "No exame conjunto das proposições sobre Política de segurança e conceitos relacionados, identifique quais assertivas estão tecnicamente corretas.\nI. Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço.\nII. Uma informação pública e uma informação restrita podem exigir controles diferentes.\nIII. Classificação não autoriza apagar registros sujeitos a guarda obrigatória.",
    "options": [
      "Apenas II e III",
      "Apenas III",
      "Apenas I e III",
      "Nenhuma das assertivas"
    ],
    "answer": 0,
    "optionComments": [
      "Combinação correta. I: Pode haver informações pessoais, sigilos legais ou restrições de acesso.; II: A finalidade e a classificação orientam armazenamento e circulação.; III: Regras de retenção e proteção devem ser compatibilizadas.",
      "A escolha classifica incorretamente a assertiva II. A finalidade e a classificação orientam armazenamento e circulação. A combinação das três proposições deve ser Apenas II e III.",
      "A escolha classifica incorretamente a assertiva I. Pode haver informações pessoais, sigilos legais ou restrições de acesso. A combinação das três proposições deve ser Apenas II e III.",
      "A escolha classifica incorretamente a assertiva II. A finalidade e a classificação orientam armazenamento e circulação. A combinação das três proposições deve ser Apenas II e III."
    ],
    "explanation": "As assertivas verdadeiras são identificadas individualmente, produzindo Apenas II e III. Pode haver informações pessoais, sigilos legais ou restrições de acesso. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.",
    "concept": "Neste assunto, distinguem-se três elementos: Política de segurança é Conjunto de diretrizes aprovadas que orientam proteção de ativos e responsabilidades. Classificação é Atribuição de categoria à informação conforme sensibilidade e necessidade de proteção. Retenção é Prazo e condições para conservar registros conforme normas aplicáveis. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço. Pode haver informações pessoais, sigilos legais ou restrições de acesso. A divulgação indevida de informações institucionais pode produzir danos e responsabilidades administrativas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística. Regras de retenção e proteção devem ser compatibilizadas.",
    "newExample": "No manual do setor, foram anotados os termos Política de segurança e Classificação; o primeiro significa Conjunto de diretrizes aprovadas que orientam proteção de ativos e responsabilidades.",
    "challenge": "Construa uma tabela com Política de segurança, Classificação e Retenção e explique uma tarefa que exige distinguir cada um.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-003-03",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-003",
    "topic": "Políticas de segurança e classificação de informações",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema: Um arquivo contém dados de servidores e deve ser compartilhado para preparar uma folha de conferência interna. A equipe deve manter a finalidade do serviço, evitar divulgações indevidas e justificar uma única providência. Qual das alternativas atende melhor ao problema descrito?",
    "options": [
      "Disponibilizar o arquivo em link público porque pertence ao setor público.",
      "Consultar a classificação e enviar apenas a pessoas autorizadas pelo canal previsto.",
      "Remover os registros após um mês sem verificar tabela de temporalidade.",
      "Ignorar política de segurança porque o envio é entre colegas."
    ],
    "answer": 1,
    "optionComments": [
      "Esta decisão não atende às condições da situação: Origem pública da instituição não torna todo dado irrestrito. O cuidado necessário é Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.",
      "Esta medida responde ao caso específico: A circulação decorre de necessidade, finalidade e normas institucionais. Antes de executar, deve-se confirmar: Identificar tipo de dado, classificar conforme política, determinar pessoas autorizadas, canal e prazo de guarda.",
      "Esta decisão não atende às condições da situação: Retenção não é definida por preferência pessoal. O cuidado necessário é Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.",
      "Esta decisão não atende às condições da situação: Ambiente interno também tem requisitos de acesso e classificação. O cuidado necessário é Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística."
    ],
    "explanation": "Conduta aplicável: Consultar a classificação e enviar apenas a pessoas autorizadas pelo canal previsto. A circulação decorre de necessidade, finalidade e normas institucionais. As outras condutas apresentam riscos específicos: Origem pública da instituição não torna todo dado irrestrito.; Retenção não é definida por preferência pessoal.; Ambiente interno também tem requisitos de acesso e classificação.. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.",
    "concept": "Neste assunto, distinguem-se três elementos: Política de segurança é Conjunto de diretrizes aprovadas que orientam proteção de ativos e responsabilidades. Classificação é Atribuição de categoria à informação conforme sensibilidade e necessidade de proteção. Retenção é Prazo e condições para conservar registros conforme normas aplicáveis. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço. Pode haver informações pessoais, sigilos legais ou restrições de acesso. A divulgação indevida de informações institucionais pode produzir danos e responsabilidades administrativas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística. Regras de retenção e proteção devem ser compatibilizadas.",
    "newExample": "Outra unidade precisa resolver problema semelhante: Um arquivo contém dados de servidores e deve ser compartilhado para preparar uma folha de conferência interna. Antes de agir, registra a justificativa: A circulação decorre de necessidade, finalidade e normas institucionais.",
    "challenge": "Defina duas evidências que comprovem, sem acesso indevido, se a providência “Consultar a classificação e enviar apenas a pessoas autorizadas pelo canal previsto.” resolveu o caso.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-003-04",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-003",
    "topic": "Políticas de segurança e classificação de informações",
    "type": "exceto",
    "difficulty": "dificil",
    "stem": "Durante uma revisão de procedimentos relativos a Política de segurança e Classificação, quatro afirmações foram propostas. Assinale a alternativa que constitui a EXCEÇÃO (EXCETO): aquela que não é tecnicamente sustentada pelos conceitos estudados.",
    "options": [
      "Uma informação pública e uma informação restrita podem exigir controles diferentes.",
      "Diretrizes precisam ser traduzidas em procedimentos e responsáveis.",
      "Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço.",
      "Classificação não autoriza apagar registros sujeitos a guarda obrigatória."
    ],
    "answer": 2,
    "optionComments": [
      "A afirmação é tecnicamente sustentada e, portanto, NÃO atende ao comando EXCETO. A finalidade e a classificação orientam armazenamento e circulação.",
      "A afirmação é tecnicamente sustentada e, portanto, NÃO atende ao comando EXCETO. Uma política sem execução consistente tem eficácia limitada.",
      "Esta é a EXCEÇÃO solicitada: Pode haver informações pessoais, sigilos legais ou restrições de acesso. Assim, a proposição não pode ser tomada como regra correta.",
      "A afirmação é tecnicamente sustentada e, portanto, NÃO atende ao comando EXCETO. Regras de retenção e proteção devem ser compatibilizadas."
    ],
    "explanation": "O comando pede a única proposição não sustentada. Pode haver informações pessoais, sigilos legais ou restrições de acesso. As demais afirmações expressam regras tecnicamente válidas. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.",
    "concept": "Neste assunto, distinguem-se três elementos: Política de segurança é Conjunto de diretrizes aprovadas que orientam proteção de ativos e responsabilidades. Classificação é Atribuição de categoria à informação conforme sensibilidade e necessidade de proteção. Retenção é Prazo e condições para conservar registros conforme normas aplicáveis. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Todo documento produzido em instituição pública é automaticamente livre de restrições e pode ser enviado a qualquer endereço. Pode haver informações pessoais, sigilos legais ou restrições de acesso. A divulgação indevida de informações institucionais pode produzir danos e responsabilidades administrativas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística. Regras de retenção e proteção devem ser compatibilizadas.",
    "newExample": "Em uma prova prática simulada sobre políticas de segurança e classificação de informações, a equipe verifica que Classificação não autoriza apagar registros sujeitos a guarda obrigatória. porque Regras de retenção e proteção devem ser compatibilizadas.",
    "challenge": "Explique em quais condições a observação “Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística.” modifica a interpretação do item e como indicá-las no enunciado.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-004-01",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-004",
    "topic": "Princípio do menor privilégio e gestão de permissões",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar servidores sobre princípio do menor privilégio e gestão de permissões, julgue CERTO ou ERRADO: Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Marcar CERTO é inadequado: O princípio exige restringir privilégios ao mínimo adequado. A afirmação não corresponde ao conceito.",
      "Marcar ERRADO está correto: O princípio exige restringir privilégios ao mínimo adequado. A afirmação contraria o fundamento técnico."
    ],
    "explanation": "ERRADO: O princípio exige restringir privilégios ao mínimo adequado. O conceito central exige diferenciar Menor privilégio, Perfil de acesso e Segregação de funções conforme suas funções. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.",
    "concept": "Neste assunto, distinguem-se três elementos: Menor privilégio é Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. Perfil de acesso é Conjunto de permissões associado a um papel ou conjunto de usuários. Segregação de funções é Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização. O princípio exige restringir privilégios ao mínimo adequado. Privilégios excessivos aumentam danos potenciais de erro humano, uso indevido e contas comprometidas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário. A segregação é controle organizacional complementar.",
    "newExample": "Numa orientação nova sobre princípio do menor privilégio e gestão de permissões, uma equipe compara duas afirmações: “Revisão periódica de acessos remove privilégios que deixaram de ser necessários.” e “Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização.”. A primeira é fundamentada por Mudanças de cargo exigem atualização de perfis.",
    "challenge": "Reescreva a frase “Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização.” de forma tecnicamente defensável e identifique qual efeito incorreto ela teria em um processo do órgão.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-004-02",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-004",
    "topic": "Princípio do menor privilégio e gestão de permissões",
    "type": "associacao",
    "difficulty": "media",
    "stem": "Associe os itens da Coluna I às descrições da Coluna II, considerando a atividade administrativa.\nColuna I: 1. Menor privilégio; 2. Perfil de acesso; 3. Segregação de funções\nColuna II: A. Conjunto de permissões associado a um papel ou conjunto de usuários.; B. Separação de atividades críticas entre pessoas ou papéis para reduzir riscos.; C. Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.\nAssinale a sequência de correspondências correta.",
    "options": [
      "1-B, 2-A, 3-C",
      "1-C, 2-A, 3-B",
      "1-C, 2-B, 3-A",
      "1-A, 2-C, 3-B"
    ],
    "answer": 1,
    "optionComments": [
      "A associação do item 1 está incorreta: Menor privilégio significa “Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.”, e não “Separação de atividades críticas entre pessoas ou papéis para reduzir riscos.”. Por isso, o item 1 deve corresponder à letra C.",
      "A relação correta é 1-C, 2-A, 3-B: Menor privilégio significa Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.; Perfil de acesso significa Conjunto de permissões associado a um papel ou conjunto de usuários.; Segregação de funções significa Separação de atividades críticas entre pessoas ou papéis para reduzir riscos.",
      "A associação do item 2 está incorreta: Perfil de acesso significa “Conjunto de permissões associado a um papel ou conjunto de usuários.”, e não “Separação de atividades críticas entre pessoas ou papéis para reduzir riscos.”. Por isso, o item 2 deve corresponder à letra A.",
      "A associação do item 1 está incorreta: Menor privilégio significa “Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.”, e não “Conjunto de permissões associado a um papel ou conjunto de usuários.”. Por isso, o item 1 deve corresponder à letra C."
    ],
    "explanation": "Correspondências independentes de posição: 1-C, 2-A, 3-B. Menor privilégio: Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.; Perfil de acesso: Conjunto de permissões associado a um papel ou conjunto de usuários.; Segregação de funções: Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.",
    "concept": "Neste assunto, distinguem-se três elementos: Menor privilégio é Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. Perfil de acesso é Conjunto de permissões associado a um papel ou conjunto de usuários. Segregação de funções é Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização. O princípio exige restringir privilégios ao mínimo adequado. Privilégios excessivos aumentam danos potenciais de erro humano, uso indevido e contas comprometidas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário. A segregação é controle organizacional complementar.",
    "newExample": "No manual do setor, foram anotados os termos Perfil de acesso e Segregação de funções; o primeiro significa Conjunto de permissões associado a um papel ou conjunto de usuários.",
    "challenge": "Construa uma tabela com Menor privilégio, Perfil de acesso e Segregação de funções e explique uma tarefa que exige distinguir cada um.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-004-03",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-004",
    "topic": "Princípio do menor privilégio e gestão de permissões",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema: Uma estagiária precisará consultar notas fiscais digitalizadas, mas não poderá autorizar pagamentos nem excluir documentos. A equipe deve manter a finalidade do serviço, evitar divulgações indevidas e justificar uma única providência. Qual das alternativas atende melhor ao problema descrito?",
    "options": [
      "Atribuir administrador porque o uso é temporário.",
      "Compartilhar a senha da chefia para evitar criação de usuário.",
      "Atribuir perfil somente de consulta e revisar a permissão ao fim da atividade.",
      "Desabilitar logs para não expor os acessos da estagiária."
    ],
    "answer": 2,
    "optionComments": [
      "Esta decisão não atende às condições da situação: Privilégio amplo aumenta risco mesmo por pouco tempo. O cuidado necessário é Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.",
      "Esta decisão não atende às condições da situação: Remove rastreabilidade e dá acesso além da função. O cuidado necessário é Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.",
      "Esta medida responde ao caso específico: O perfil corresponde à necessidade e evita operações sensíveis. Antes de executar, deve-se confirmar: Listar tarefas, mapear operações indispensáveis, conceder permissões e criar revisão ao mudar função ou terminar vínculo.",
      "Esta decisão não atende às condições da situação: Perde-se controle de auditoria justamente numa atividade sensível. O cuidado necessário é Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário."
    ],
    "explanation": "Conduta aplicável: Atribuir perfil somente de consulta e revisar a permissão ao fim da atividade. O perfil corresponde à necessidade e evita operações sensíveis. As outras condutas apresentam riscos específicos: Privilégio amplo aumenta risco mesmo por pouco tempo.; Remove rastreabilidade e dá acesso além da função.; Perde-se controle de auditoria justamente numa atividade sensível.. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.",
    "concept": "Neste assunto, distinguem-se três elementos: Menor privilégio é Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. Perfil de acesso é Conjunto de permissões associado a um papel ou conjunto de usuários. Segregação de funções é Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização. O princípio exige restringir privilégios ao mínimo adequado. Privilégios excessivos aumentam danos potenciais de erro humano, uso indevido e contas comprometidas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário. A segregação é controle organizacional complementar.",
    "newExample": "Outra unidade precisa resolver problema semelhante: Uma estagiária precisará consultar notas fiscais digitalizadas, mas não poderá autorizar pagamentos nem excluir documentos. Antes de agir, registra a justificativa: O perfil corresponde à necessidade e evita operações sensíveis.",
    "challenge": "Defina duas evidências que comprovem, sem acesso indevido, se a providência “Atribuir perfil somente de consulta e revisar a permissão ao fim da atividade.” resolveu o caso.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-004-04",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-004",
    "topic": "Princípio do menor privilégio e gestão de permissões",
    "type": "lacunas",
    "difficulty": "dificil",
    "stem": "Ao redigir o manual de formação da equipe, complete os três campos com o conceito correto: “Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.” corresponde a ____; “Conjunto de permissões associado a um papel ou conjunto de usuários.” corresponde a ____; e “Separação de atividades críticas entre pessoas ou papéis para reduzir riscos.” corresponde a ____. Selecione o preenchimento na mesma ordem.",
    "options": [
      "Perfil de acesso / Menor privilégio / Segregação de funções",
      "Menor privilégio / Perfil de acesso / Segregação de funções",
      "Menor privilégio / Segregação de funções / Perfil de acesso",
      "Segregação de funções / Perfil de acesso / Menor privilégio"
    ],
    "answer": 1,
    "optionComments": [
      "A lacuna 1 pede “Menor privilégio”, porque Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. A opção usa “Perfil de acesso”, que corresponde a outro conceito e altera o sentido do documento.",
      "Combinação coerente com as definições: Menor privilégio — Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.; Perfil de acesso — Conjunto de permissões associado a um papel ou conjunto de usuários.; Segregação de funções — Separação de atividades críticas entre pessoas ou papéis para reduzir riscos.",
      "A lacuna 2 pede “Perfil de acesso”, porque Conjunto de permissões associado a um papel ou conjunto de usuários. A opção usa “Segregação de funções”, que corresponde a outro conceito e altera o sentido do documento.",
      "A lacuna 1 pede “Menor privilégio”, porque Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. A opção usa “Segregação de funções”, que corresponde a outro conceito e altera o sentido do documento."
    ],
    "explanation": "Cada definição deve ser preenchida na ordem: Menor privilégio / Perfil de acesso / Segregação de funções. Menor privilégio: Concessão apenas das permissões necessárias às funções e pelo tempo apropriado.; Perfil de acesso: Conjunto de permissões associado a um papel ou conjunto de usuários.; Segregação de funções: Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.",
    "concept": "Neste assunto, distinguem-se três elementos: Menor privilégio é Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. Perfil de acesso é Conjunto de permissões associado a um papel ou conjunto de usuários. Segregação de funções é Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Menor privilégio significa conceder acesso de administrador a todos para impedir pedidos de autorização. O princípio exige restringir privilégios ao mínimo adequado. Privilégios excessivos aumentam danos potenciais de erro humano, uso indevido e contas comprometidas.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário. A segregação é controle organizacional complementar.",
    "newExample": "Em uma prova prática simulada sobre princípio do menor privilégio e gestão de permissões, a equipe verifica que Separar elaboração e aprovação reduz concentração indevida de poder. porque A segregação é controle organizacional complementar.",
    "challenge": "Explique em quais condições a observação “Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário.” modifica a interpretação do item e como indicá-las no enunciado.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-005-01",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-005",
    "topic": "Atualizações, correções e ciclo de vida de software",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar servidores sobre atualizações, correções e ciclo de vida de software, julgue CERTO ou ERRADO: Software atualizado geralmente reduz exposição a vulnerabilidades já corrigidas.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 0,
    "optionComments": [
      "Marcar CERTO está adequado porque Atualizações não eliminam a necessidade de outras camadas de proteção.",
      "Marcar ERRADO é inadequado porque Atualizações não eliminam a necessidade de outras camadas de proteção. A proposição é compatível com o conteúdo."
    ],
    "explanation": "CERTO: Atualizações não eliminam a necessidade de outras camadas de proteção. O conceito central exige diferenciar Atualização, Correção de segurança e Fim de suporte conforme suas funções. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
    "concept": "Neste assunto, distinguem-se três elementos: Atualização é Mudança distribuída ao software para melhorias, compatibilidade e correções. Correção de segurança é Atualização destinada a reduzir uma vulnerabilidade identificada. Fim de suporte é Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Ativar antivírus torna desnecessárias as atualizações do sistema operacional. As proteções são complementares e resolvem classes de risco diferentes. Atrasar correções aumenta a janela de exposição mesmo em sistemas pouco usados.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade. Sem atualizações, vulnerabilidades conhecidas podem permanecer.",
    "newExample": "Numa orientação nova sobre atualizações, correções e ciclo de vida de software, uma equipe compara duas afirmações: “Uma atualização pode exigir testes de compatibilidade em sistemas críticos.” e “Ativar antivírus torna desnecessárias as atualizações do sistema operacional.”. A primeira é fundamentada por Implantação coordenada evita interrupção operacional.",
    "challenge": "Reescreva a frase “Ativar antivírus torna desnecessárias as atualizações do sistema operacional.” de forma tecnicamente defensável e identifique qual efeito incorreto ela teria em um processo do órgão.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-005-02",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-005",
    "topic": "Atualizações, correções e ciclo de vida de software",
    "type": "classica",
    "difficulty": "media",
    "stem": "Um servidor precisa revisar um glossário técnico antes de operar sistemas institucionais. Em relação a Atualização, Correção de segurança e Fim de suporte, qual alternativa associa corretamente o recurso ao seu significado? Avalie a correspondência conceitual, não apenas a familiaridade das palavras.",
    "options": [
      "Atualização — Atualização destinada a reduzir uma vulnerabilidade identificada.",
      "Correção de segurança — Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes.",
      "Atualização — Mudança distribuída ao software para melhorias, compatibilidade e correções.",
      "Fim de suporte — Mudança distribuída ao software para melhorias, compatibilidade e correções."
    ],
    "answer": 2,
    "optionComments": [
      "Incorreta: a descrição atribuída a Atualização pertence a Correção de segurança. A definição adequada de Atualização é: Mudança distribuída ao software para melhorias, compatibilidade e correções.",
      "Incorreta: a descrição atribuída a Correção de segurança pertence a Fim de suporte. A definição adequada de Correção de segurança é: Atualização destinada a reduzir uma vulnerabilidade identificada.",
      "Relação correta: Atualização significa Mudança distribuída ao software para melhorias, compatibilidade e correções. Esta é a definição específica do conceito apresentado.",
      "Incorreta: a descrição atribuída a Fim de suporte pertence a Atualização. A definição adequada de Fim de suporte é: Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes."
    ],
    "explanation": "O termo Atualização é definido como Mudança distribuída ao software para melhorias, compatibilidade e correções., diferentemente dos outros dois conceitos listados. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
    "concept": "Neste assunto, distinguem-se três elementos: Atualização é Mudança distribuída ao software para melhorias, compatibilidade e correções. Correção de segurança é Atualização destinada a reduzir uma vulnerabilidade identificada. Fim de suporte é Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Ativar antivírus torna desnecessárias as atualizações do sistema operacional. As proteções são complementares e resolvem classes de risco diferentes. Atrasar correções aumenta a janela de exposição mesmo em sistemas pouco usados.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade. Sem atualizações, vulnerabilidades conhecidas podem permanecer.",
    "newExample": "No manual do setor, foram anotados os termos Fim de suporte e Atualização; o primeiro significa Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes.",
    "challenge": "Construa uma tabela com Atualização, Correção de segurança e Fim de suporte e explique uma tarefa que exige distinguir cada um.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-005-03",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-005",
    "topic": "Atualizações, correções e ciclo de vida de software",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema: Uma estação usada para protocolo trabalha com versão antiga de aplicativo que não recebe mais correções do fornecedor. A equipe deve manter a finalidade do serviço, evitar divulgações indevidas e justificar uma única providência. Qual das alternativas atende melhor ao problema descrito?",
    "options": [
      "Manter indefinidamente a versão antiga porque abre normalmente.",
      "Desligar todas as atualizações de todas as máquinas para eliminar reinicializações.",
      "Instalar software obtido em mensagem informal para substituir a versão.",
      "Planejar atualização ou substituição compatível, com backup, teste e janela de implantação."
    ],
    "answer": 3,
    "optionComments": [
      "Esta decisão não atende às condições da situação: Funcionamento aparente não demonstra ausência de vulnerabilidade. O cuidado necessário é Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
      "Esta decisão não atende às condições da situação: Aumenta exposição e bloqueia correções necessárias. O cuidado necessário é Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
      "Esta decisão não atende às condições da situação: Fonte não validada pode introduzir programas indesejados. O cuidado necessário é Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
      "Esta medida responde ao caso específico: O risco decorre da ausência de suporte e deve ser tratado sem interromper operação sem planejamento. Antes de executar, deve-se confirmar: Inventariar versões, verificar ciclo de suporte, testar compatibilidade e agendar implantação com plano de retorno."
    ],
    "explanation": "Conduta aplicável: Planejar atualização ou substituição compatível, com backup, teste e janela de implantação. O risco decorre da ausência de suporte e deve ser tratado sem interromper operação sem planejamento. As outras condutas apresentam riscos específicos: Funcionamento aparente não demonstra ausência de vulnerabilidade.; Aumenta exposição e bloqueia correções necessárias.; Fonte não validada pode introduzir programas indesejados.. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
    "concept": "Neste assunto, distinguem-se três elementos: Atualização é Mudança distribuída ao software para melhorias, compatibilidade e correções. Correção de segurança é Atualização destinada a reduzir uma vulnerabilidade identificada. Fim de suporte é Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Ativar antivírus torna desnecessárias as atualizações do sistema operacional. As proteções são complementares e resolvem classes de risco diferentes. Atrasar correções aumenta a janela de exposição mesmo em sistemas pouco usados.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade. Sem atualizações, vulnerabilidades conhecidas podem permanecer.",
    "newExample": "Outra unidade precisa resolver problema semelhante: Uma estação usada para protocolo trabalha com versão antiga de aplicativo que não recebe mais correções do fornecedor. Antes de agir, registra a justificativa: O risco decorre da ausência de suporte e deve ser tratado sem interromper operação sem planejamento.",
    "challenge": "Defina duas evidências que comprovem, sem acesso indevido, se a providência “Planejar atualização ou substituição compatível, com backup, teste e janela de implantação.” resolveu o caso.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-005-04",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-005",
    "topic": "Atualizações, correções e ciclo de vida de software",
    "type": "vf",
    "difficulty": "dificil",
    "stem": "Ao examinar três declarações feitas durante a orientação de servidores sobre o tema, julgue cada afirmação como verdadeira (V) ou falsa (F) e selecione a sequência correta.\nI. Ativar antivírus torna desnecessárias as atualizações do sistema operacional.\nII. Software atualizado geralmente reduz exposição a vulnerabilidades já corrigidas.\nIII. Uma atualização pode exigir testes de compatibilidade em sistemas críticos.",
    "options": [
      "F – V – V",
      "V – V – V",
      "F – F – V",
      "F – V – F"
    ],
    "answer": 0,
    "optionComments": [
      "Sequência fundamentada: I é F porque As proteções são complementares e resolvem classes de risco diferentes.; II é V porque Atualizações não eliminam a necessidade de outras camadas de proteção.; III é V porque Implantação coordenada evita interrupção operacional..",
      "A proposição I foi classificada incorretamente nessa sequência. As proteções são complementares e resolvem classes de risco diferentes. Por isso, seu valor deve ser F, e não V.",
      "A proposição II foi classificada incorretamente nessa sequência. Atualizações não eliminam a necessidade de outras camadas de proteção. Por isso, seu valor deve ser V, e não F.",
      "A proposição III foi classificada incorretamente nessa sequência. Implantação coordenada evita interrupção operacional. Por isso, seu valor deve ser V, e não F."
    ],
    "explanation": "A sequência é F – V – V: I=F; II=V; III=V. As proteções são complementares e resolvem classes de risco diferentes. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.",
    "concept": "Neste assunto, distinguem-se três elementos: Atualização é Mudança distribuída ao software para melhorias, compatibilidade e correções. Correção de segurança é Atualização destinada a reduzir uma vulnerabilidade identificada. Fim de suporte é Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Ativar antivírus torna desnecessárias as atualizações do sistema operacional. As proteções são complementares e resolvem classes de risco diferentes. Atrasar correções aumenta a janela de exposição mesmo em sistemas pouco usados.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade. Sem atualizações, vulnerabilidades conhecidas podem permanecer.",
    "newExample": "Em uma prova prática simulada sobre atualizações, correções e ciclo de vida de software, a equipe verifica que Software fora de suporte demanda plano específico de substituição ou mitigação. porque Sem atualizações, vulnerabilidades conhecidas podem permanecer.",
    "challenge": "Explique em quais condições a observação “Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade.” modifica a interpretação do item e como indicá-las no enunciado.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-006-01",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-006",
    "topic": "Boas práticas de proteção em ambientes institucionais",
    "type": "ce",
    "difficulty": "media",
    "stem": "Ao orientar servidores sobre boas práticas de proteção em ambientes institucionais, julgue CERTO ou ERRADO: Se há firewall institucional, é dispensável revisar permissões e treinar usuários.",
    "options": [
      "CERTO",
      "ERRADO"
    ],
    "answer": 1,
    "optionComments": [
      "Marcar CERTO é inadequado: Firewall não resolve todos os riscos nem erros humanos. A afirmação não corresponde ao conceito.",
      "Marcar ERRADO está correto: Firewall não resolve todos os riscos nem erros humanos. A afirmação contraria o fundamento técnico."
    ],
    "explanation": "ERRADO: Firewall não resolve todos os riscos nem erros humanos. O conceito central exige diferenciar Defesa em profundidade, Backup testado e Resposta a incidentes conforme suas funções. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.",
    "concept": "Neste assunto, distinguem-se três elementos: Defesa em profundidade é Uso combinado de controles que reduzem dependência de uma única barreira. Backup testado é Cópia cuja recuperação foi verificada em condições controladas. Resposta a incidentes é Processo organizado de identificação, contenção, registro e recuperação de ocorrências. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Se há firewall institucional, é dispensável revisar permissões e treinar usuários. Firewall não resolve todos os riscos nem erros humanos. Ausência de planos e testes pode transformar falhas pequenas em paralisação prolongada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta. Comportamento e governança complementam ferramentas técnicas.",
    "newExample": "Numa orientação nova sobre boas práticas de proteção em ambientes institucionais, uma equipe compara duas afirmações: “Um backup não testado pode falhar quando realmente necessário.” e “Se há firewall institucional, é dispensável revisar permissões e treinar usuários.”. A primeira é fundamentada por A existência do arquivo não comprova recuperabilidade.",
    "challenge": "Reescreva a frase “Se há firewall institucional, é dispensável revisar permissões e treinar usuários.” de forma tecnicamente defensável e identifique qual efeito incorreto ela teria em um processo do órgão.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-006-02",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-006",
    "topic": "Boas práticas de proteção em ambientes institucionais",
    "type": "exceto",
    "difficulty": "media",
    "stem": "Durante uma revisão de procedimentos relativos a Defesa em profundidade e Backup testado, quatro afirmações foram propostas. Assinale a alternativa que constitui a EXCEÇÃO (EXCETO): aquela que não é tecnicamente sustentada pelos conceitos estudados.",
    "options": [
      "Senhas fortes e MFA protegem identidades, mas não substituem backup e atualizações.",
      "Se há firewall institucional, é dispensável revisar permissões e treinar usuários.",
      "Um backup não testado pode falhar quando realmente necessário.",
      "Treinamento e canais de reporte são controles importantes na administração."
    ],
    "answer": 1,
    "optionComments": [
      "A afirmação é tecnicamente sustentada e, portanto, NÃO atende ao comando EXCETO. Cada controle enfrenta riscos diferentes.",
      "Esta é a EXCEÇÃO solicitada: Firewall não resolve todos os riscos nem erros humanos. Assim, a proposição não pode ser tomada como regra correta.",
      "A afirmação é tecnicamente sustentada e, portanto, NÃO atende ao comando EXCETO. A existência do arquivo não comprova recuperabilidade.",
      "A afirmação é tecnicamente sustentada e, portanto, NÃO atende ao comando EXCETO. Comportamento e governança complementam ferramentas técnicas."
    ],
    "explanation": "O comando pede a única proposição não sustentada. Firewall não resolve todos os riscos nem erros humanos. As demais afirmações expressam regras tecnicamente válidas. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.",
    "concept": "Neste assunto, distinguem-se três elementos: Defesa em profundidade é Uso combinado de controles que reduzem dependência de uma única barreira. Backup testado é Cópia cuja recuperação foi verificada em condições controladas. Resposta a incidentes é Processo organizado de identificação, contenção, registro e recuperação de ocorrências. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Se há firewall institucional, é dispensável revisar permissões e treinar usuários. Firewall não resolve todos os riscos nem erros humanos. Ausência de planos e testes pode transformar falhas pequenas em paralisação prolongada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta. Comportamento e governança complementam ferramentas técnicas.",
    "newExample": "No manual do setor, foram anotados os termos Defesa em profundidade e Backup testado; o primeiro significa Uso combinado de controles que reduzem dependência de uma única barreira.",
    "challenge": "Construa uma tabela com Defesa em profundidade, Backup testado e Resposta a incidentes e explique uma tarefa que exige distinguir cada um.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-006-03",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-006",
    "topic": "Boas práticas de proteção em ambientes institucionais",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Situação-problema: Uma repartição precisa reduzir interrupções provocadas por arquivos maliciosos e falhas humanas durante o atendimento diário. A equipe deve manter a finalidade do serviço, evitar divulgações indevidas e justificar uma única providência. Qual das alternativas atende melhor ao problema descrito?",
    "options": [
      "Combinar atualizações, permissões mínimas, MFA, backups testados e orientação para reporte.",
      "Confiar exclusivamente no antivírus para prevenir qualquer incidente.",
      "Deixar toda estação com privilégios administrativos para agilizar o serviço.",
      "Manter backups na mesma pasta acessível a todos sem teste de restauração."
    ],
    "answer": 0,
    "optionComments": [
      "Esta medida responde ao caso específico: Camadas de proteção diminuem dependência de um único mecanismo. Antes de executar, deve-se confirmar: Definir responsáveis, revisar acessos, confirmar backups restauráveis e praticar comunicação de incidentes.",
      "Esta decisão não atende às condições da situação: Uma ferramenta isolada não cobre todas as ameaças e erros. O cuidado necessário é Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.",
      "Esta decisão não atende às condições da situação: Amplia a extensão possível de falhas e uso indevido. O cuidado necessário é Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.",
      "Esta decisão não atende às condições da situação: Os dados podem ser afetados pelo mesmo incidente e a cópia pode não restaurar. O cuidado necessário é Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta."
    ],
    "explanation": "Conduta aplicável: Combinar atualizações, permissões mínimas, MFA, backups testados e orientação para reporte. Camadas de proteção diminuem dependência de um único mecanismo. As outras condutas apresentam riscos específicos: Uma ferramenta isolada não cobre todas as ameaças e erros.; Amplia a extensão possível de falhas e uso indevido.; Os dados podem ser afetados pelo mesmo incidente e a cópia pode não restaurar.. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.",
    "concept": "Neste assunto, distinguem-se três elementos: Defesa em profundidade é Uso combinado de controles que reduzem dependência de uma única barreira. Backup testado é Cópia cuja recuperação foi verificada em condições controladas. Resposta a incidentes é Processo organizado de identificação, contenção, registro e recuperação de ocorrências. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Se há firewall institucional, é dispensável revisar permissões e treinar usuários. Firewall não resolve todos os riscos nem erros humanos. Ausência de planos e testes pode transformar falhas pequenas em paralisação prolongada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta. Comportamento e governança complementam ferramentas técnicas.",
    "newExample": "Outra unidade precisa resolver problema semelhante: Uma repartição precisa reduzir interrupções provocadas por arquivos maliciosos e falhas humanas durante o atendimento diário. Antes de agir, registra a justificativa: Camadas de proteção diminuem dependência de um único mecanismo.",
    "challenge": "Defina duas evidências que comprovem, sem acesso indevido, se a providência “Combinar atualizações, permissões mínimas, MFA, backups testados e orientação para reporte.” resolveu o caso.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  },
  {
    "id": "Q-INF-18-006-04",
    "moduleId": "INF-18",
    "subtopicId": "INF-18-006",
    "topic": "Boas práticas de proteção em ambientes institucionais",
    "type": "classica",
    "difficulty": "dificil",
    "stem": "Um servidor precisa revisar um glossário técnico antes de operar sistemas institucionais. Em relação a Defesa em profundidade, Backup testado e Resposta a incidentes, qual alternativa associa corretamente o recurso ao seu significado? Avalie a correspondência conceitual, não apenas a familiaridade das palavras.",
    "options": [
      "Defesa em profundidade — Cópia cuja recuperação foi verificada em condições controladas.",
      "Backup testado — Processo organizado de identificação, contenção, registro e recuperação de ocorrências.",
      "Resposta a incidentes — Uso combinado de controles que reduzem dependência de uma única barreira.",
      "Defesa em profundidade — Uso combinado de controles que reduzem dependência de uma única barreira."
    ],
    "answer": 3,
    "optionComments": [
      "Incorreta: a descrição atribuída a Defesa em profundidade pertence a Backup testado. A definição adequada de Defesa em profundidade é: Uso combinado de controles que reduzem dependência de uma única barreira.",
      "Incorreta: a descrição atribuída a Backup testado pertence a Resposta a incidentes. A definição adequada de Backup testado é: Cópia cuja recuperação foi verificada em condições controladas.",
      "Incorreta: a descrição atribuída a Resposta a incidentes pertence a Defesa em profundidade. A definição adequada de Resposta a incidentes é: Processo organizado de identificação, contenção, registro e recuperação de ocorrências.",
      "Relação correta: Defesa em profundidade significa Uso combinado de controles que reduzem dependência de uma única barreira. Esta é a definição específica do conceito apresentado."
    ],
    "explanation": "O termo Defesa em profundidade é definido como Uso combinado de controles que reduzem dependência de uma única barreira., diferentemente dos outros dois conceitos listados. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.",
    "concept": "Neste assunto, distinguem-se três elementos: Defesa em profundidade é Uso combinado de controles que reduzem dependência de uma única barreira. Backup testado é Cópia cuja recuperação foi verificada em condições controladas. Resposta a incidentes é Processo organizado de identificação, contenção, registro e recuperação de ocorrências. Reconhecer a função de cada elemento é necessário antes de decidir como agir num sistema, dispositivo ou procedimento.",
    "trap": "Cuidado com a afirmação enganosa: Se há firewall institucional, é dispensável revisar permissões e treinar usuários. Firewall não resolve todos os riscos nem erros humanos. Ausência de planos e testes pode transformar falhas pequenas em paralisação prolongada.",
    "examTip": "Examine primeiro o contexto, a finalidade e a condição técnica. Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta. Comportamento e governança complementam ferramentas técnicas.",
    "newExample": "Em uma prova prática simulada sobre boas práticas de proteção em ambientes institucionais, a equipe verifica que Treinamento e canais de reporte são controles importantes na administração. porque Comportamento e governança complementam ferramentas técnicas.",
    "challenge": "Explique em quais condições a observação “Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta.” modifica a interpretação do item e como indicá-las no enunciado.",
    "tipo": "AUTORAL",
    "origem": "AUTORAL_INEDITA"
  }
];
