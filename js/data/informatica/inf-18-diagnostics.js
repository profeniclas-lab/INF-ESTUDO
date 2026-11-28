/** INF-ESTUDO — Fase D/Lote 4: Segurança da informação: fundamentos. Material autoral. */
export const INF_18_DIAGNOSTICS = {
  "INF-18": [
    {
      "subtopicId": "INF-18-001",
      "front": "Uma servidora acessa relatório sigiloso com permissão regular, mas percebe valores alterados sem autorização. Como distinguir Confidencialidade, Integridade e Disponibilidade para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Confidencialidade — Propriedade de impedir acesso ou divulgação a partes não autorizadas. Integridade — Propriedade de manter correção e impedir alteração ou destruição indevida. Disponibilidade — Propriedade de permitir acesso ao recurso quando necessário ao serviço autorizado. Neste caso, Verificar trilha de alterações e comunicar incidente de integridade, preservando evidências. porque O problema central é a alteração indevida, embora o acesso esteja disponível. Limitação: Uma mesma ocorrência pode atingir mais de um pilar; a classificação deve examinar a consequência concreta."
    },
    {
      "subtopicId": "INF-18-002",
      "front": "Um processo eletrônico registra autorização de despesa, e a chefia precisa verificar a origem do documento e as permissões de assinatura. Como distinguir Autenticidade, Não repúdio e Controle de acesso para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Autenticidade — Confiança justificada de que uma identidade ou origem corresponde ao que é alegado. Não repúdio — Capacidade de sustentar evidências para evitar negar indevidamente a autoria de um ato. Controle de acesso — Conjunto de regras que determina identidades e ações permitidas sobre recursos. Neste caso, Conferir assinatura verificável, identidade, atribuições e registros associados ao ato. porque A análise une autenticidade, autorização e evidência sem confundir seus papéis. Limitação: Não repúdio não é uma garantia mágica de impossibilidade absoluta de contestação; depende de mecanismos e contexto jurídico."
    },
    {
      "subtopicId": "INF-18-003",
      "front": "Um arquivo contém dados de servidores e deve ser compartilhado para preparar uma folha de conferência interna. Como distinguir Política de segurança, Classificação e Retenção para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Política de segurança — Conjunto de diretrizes aprovadas que orientam proteção de ativos e responsabilidades. Classificação — Atribuição de categoria à informação conforme sensibilidade e necessidade de proteção. Retenção — Prazo e condições para conservar registros conforme normas aplicáveis. Neste caso, Consultar a classificação e enviar apenas a pessoas autorizadas pelo canal previsto. porque A circulação decorre de necessidade, finalidade e normas institucionais. Limitação: Termos e categorias variam entre instituições; não confunda classificação de segurança com classificação arquivística."
    },
    {
      "subtopicId": "INF-18-004",
      "front": "Uma estagiária precisará consultar notas fiscais digitalizadas, mas não poderá autorizar pagamentos nem excluir documentos. Como distinguir Menor privilégio, Perfil de acesso e Segregação de funções para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Menor privilégio — Concessão apenas das permissões necessárias às funções e pelo tempo apropriado. Perfil de acesso — Conjunto de permissões associado a um papel ou conjunto de usuários. Segregação de funções — Separação de atividades críticas entre pessoas ou papéis para reduzir riscos. Neste caso, Atribuir perfil somente de consulta e revisar a permissão ao fim da atividade. porque O perfil corresponde à necessidade e evita operações sensíveis. Limitação: Menor privilégio não é negar todo acesso: é assegurar o acesso suficiente e somente o necessário."
    },
    {
      "subtopicId": "INF-18-005",
      "front": "Uma estação usada para protocolo trabalha com versão antiga de aplicativo que não recebe mais correções do fornecedor. Como distinguir Atualização, Correção de segurança e Fim de suporte para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Atualização — Mudança distribuída ao software para melhorias, compatibilidade e correções. Correção de segurança — Atualização destinada a reduzir uma vulnerabilidade identificada. Fim de suporte — Período em que o fornecedor deixa de oferecer determinado atendimento ou atualizações relevantes. Neste caso, Planejar atualização ou substituição compatível, com backup, teste e janela de implantação. porque O risco decorre da ausência de suporte e deve ser tratado sem interromper operação sem planejamento. Limitação: Nem todo update altera funcionalidades; patches de segurança podem ser urgentes, mas sua implantação deve considerar criticidade."
    },
    {
      "subtopicId": "INF-18-006",
      "front": "Uma repartição precisa reduzir interrupções provocadas por arquivos maliciosos e falhas humanas durante o atendimento diário. Como distinguir Defesa em profundidade, Backup testado e Resposta a incidentes para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Defesa em profundidade — Uso combinado de controles que reduzem dependência de uma única barreira. Backup testado — Cópia cuja recuperação foi verificada em condições controladas. Resposta a incidentes — Processo organizado de identificação, contenção, registro e recuperação de ocorrências. Neste caso, Combinar atualizações, permissões mínimas, MFA, backups testados e orientação para reporte. porque Camadas de proteção diminuem dependência de um único mecanismo. Limitação: Nenhuma combinação torna risco zero; o objetivo é reduzir probabilidade e impacto, com capacidade de resposta."
    }
  ]
};
