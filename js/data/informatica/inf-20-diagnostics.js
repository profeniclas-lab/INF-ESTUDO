/** INF-ESTUDO — Fase D/Lote 4: Autenticação, privacidade e proteção de dispositivos. Material autoral. */
export const INF_20_DIAGNOSTICS = {
  "INF-20": [
    {
      "subtopicId": "INF-20-001",
      "front": "Uma servidora usa a mesma senha para e-mail institucional e para um serviço externo que anunciou vazamento de contas. Como distinguir Frase secreta, Gerenciador de senhas e Reutilização para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Frase secreta — Credencial de múltiplas palavras, geralmente mais fácil de memorizar quando longa e única. Gerenciador de senhas — Ferramenta que guarda e pode gerar credenciais protegidas para contas. Reutilização — Emprego da mesma senha em diferentes serviços, ampliando o impacto de comprometimento. Neste caso, Trocar a senha institucional por credencial única e robusta e habilitar MFA conforme política. porque Evita dependência da credencial já potencialmente exposta no serviço externo. Limitação: Frases secretas não dispensam MFA e gestão de recuperação; a proteção da conta principal do gerenciador requer atenção."
    },
    {
      "subtopicId": "INF-20-002",
      "front": "Uma servidora recebe uma notificação de aprovação de acesso à conta em horário no qual não tentou entrar. Como distinguir Primeiro fator, Segundo fator e MFA resistente a phishing para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Primeiro fator — Evidência de autenticação, como algo que o usuário sabe: senha ou PIN. Segundo fator — Evidência adicional de categoria independente, como dispositivo ou biometria. MFA resistente a phishing — Método que reduz a possibilidade de uso de fatores obtidos em páginas ou pedidos fraudulentos. Neste caso, Negar a solicitação, verificar a conta por canal oficial e comunicar o evento ao suporte. porque Pedido inesperado pode indicar tentativa de autenticação indevida. Limitação: Métodos com chave de segurança ou credenciais vinculadas à origem podem ser mais resistentes a phishing que códigos digitados."
    },
    {
      "subtopicId": "INF-20-003",
      "front": "Em um balcão compartilhado, a servidora precisa se afastar por cinco minutos enquanto um formulário com dados pessoais permanece aberto. Como distinguir Bloqueio de tela, Conta individual e Perfil de acesso para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Bloqueio de tela — Proteção da sessão ao exigir nova autenticação após inatividade ou ação manual. Conta individual — Identidade de usuário atribuída a pessoa determinada com permissões rastreáveis. Perfil de acesso — Conjunto de permissões e preferências associado a uma conta ou função. Neste caso, Salvar o trabalho conforme o sistema e bloquear a sessão antes de sair da estação. porque O bloqueio reduz acesso físico enquanto o registro permanece sob responsabilidade da conta. Limitação: Em Windows, o atalho Win+L normalmente bloqueia a sessão; não confunda bloqueio com desconexão de rede, suspensão ou saída completa."
    },
    {
      "subtopicId": "INF-20-004",
      "front": "O setor constata que as estações estão com proteção de endpoint ativa, mas as atualizações de segurança foram pausadas há meses. Como distinguir Antivírus, Firewall e Atualização automática para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Antivírus — Ferramenta que detecta e ajuda a impedir software malicioso por diferentes técnicas. Firewall — Mecanismo de filtragem de comunicações conforme regras de rede. Atualização automática — Recurso que obtém ou aplica correções conforme política e configuração do sistema. Neste caso, Restabelecer gestão de atualizações com testes e política institucional, mantendo antivírus e firewall ativos. porque Controles complementares precisam operar em conjunto. Limitação: Funções e nomes de produto variam conforme plataforma; as questões tratam de conceitos, não de promessas de detecção perfeita."
    },
    {
      "subtopicId": "INF-20-005",
      "front": "Uma ferramenta de leitura de documentos pede acesso ao microfone e aos contatos de toda a equipe, sem justificativa funcional. Como distinguir Permissão de aplicativo, Privacidade e Compartilhamento restrito para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Permissão de aplicativo — Autorização para acessar recurso do dispositivo, como câmera, microfone ou arquivos. Privacidade — Controle adequado sobre coleta, uso e divulgação de informações pessoais. Compartilhamento restrito — Disponibilização de dados apenas para destinatários e finalidades autorizados. Neste caso, Negar permissões incompatíveis com a finalidade e consultar política institucional antes de prosseguir. porque O acesso solicitado excede a necessidade aparente para leitura de arquivos. Limitação: Revogar permissão pode afetar funções legítimas; avalie o propósito de cada recurso em vez de negar tudo mecanicamente."
    },
    {
      "subtopicId": "INF-20-006",
      "front": "Uma servidora precisa consultar um sistema institucional fora da repartição, utilizando um computador compartilhado em local público. Como distinguir Rede Wi-Fi pública, Dispositivo compartilhado e Sessão autenticada para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Rede Wi-Fi pública — Rede sem fio destinada a acesso amplo ou de usuários não controlados pela instituição. Dispositivo compartilhado — Equipamento usado sucessivamente por várias pessoas ou contas. Sessão autenticada — Estado em que uma aplicação reconhece identidade após login válido. Neste caso, Preferir dispositivo institucional confiável e canal aprovado; se o acesso compartilhado for inevitável, seguir política e encerrar todas as sessões. porque Reduz exposição de credenciais e dados deixados para outros usuários. Limitação: VPN aprovada pode ser exigida por política e protege certos fluxos, mas não elimina riscos de dispositivo inseguro; não improvisar ferramentas."
    }
  ]
};
