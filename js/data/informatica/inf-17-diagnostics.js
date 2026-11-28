/** INF-ESTUDO — Fase D/Lote 4: Redes de computadores e conectividade. Material autoral. */
export const INF_17_DIAGNOSTICS = {
  "INF-17": [
    {
      "subtopicId": "INF-17-001",
      "front": "Durante a interrupção do provedor externo, os computadores da mesma secretaria ainda conseguem consultar um servidor de arquivos local. Como distinguir LAN, WAN e Internet para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: LAN — Rede de alcance local, como a rede de um edifício ou campus. WAN — Rede que interliga pontos geograficamente distantes por enlaces de comunicação. Internet — Sistema global de redes interconectadas que empregam protocolos interoperáveis. Neste caso, Diagnosticar separadamente a LAN e o enlace com a internet, mantendo serviços locais autorizados. porque O fato de haver conectividade local demonstra que a falha externa não extinguiu a rede interna. Limitação: Alcance, topologia e administração não definem sozinhos se há conexão à internet; uma LAN pode fazer parte de uma WAN maior."
    },
    {
      "subtopicId": "INF-17-002",
      "front": "Um andar da universidade precisa ampliar portas Ethernet para equipamentos da mesma rede e criar cobertura Wi-Fi em uma sala distante. Como distinguir Switch, Roteador e Ponto de acesso para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Switch — Encaminha quadros em uma rede local conforme informações de enlace. Roteador — Interliga redes IP e decide o encaminhamento de pacotes entre elas. Ponto de acesso — Oferece conexão sem fio dos clientes a uma infraestrutura de rede. Neste caso, Usar comutação adequada para portas locais e ponto de acesso administrado para cobertura sem fio. porque Cada equipamento atende à função específica, sem presumir que o roteador seja dispensável. Limitação: Um equipamento doméstico pode combinar modem, roteador, switch e ponto de acesso no mesmo gabinete; a questão deve avaliar funções."
    },
    {
      "subtopicId": "INF-17-003",
      "front": "Uma servidora precisa imprimir por um equipamento na LAN e usar um teclado sem fio no notebook. Como distinguir Ethernet, Wi-Fi e Bluetooth para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Ethernet — Tecnologia de enlace comum em redes locais cabeadas. Wi-Fi — Tecnologia de rede local sem fio, geralmente da família IEEE 802.11. Bluetooth — Comunicação sem fio de curto alcance para periféricos e dispositivos próximos. Neste caso, Usar a rede institucional via Wi-Fi ou Ethernet e conectar o teclado por Bluetooth, quando suportado. porque As funções atendem necessidades diferentes: acesso à LAN e conexão de periférico. Limitação: Em alguns contextos há compartilhamento de internet via Bluetooth ou rede móvel; isso não torna as tecnologias intercambiáveis."
    },
    {
      "subtopicId": "INF-17-004",
      "front": "Um computador abre um serviço interno pelo endereço IP, mas não pelo nome curto do servidor; outros serviços da rede funcionam. Como distinguir IP, DNS e DHCP para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: IP — Endereço lógico usado no encaminhamento de dados entre dispositivos em redes IP. DNS — Serviço que resolve nomes de domínio para registros, como endereços IP. DHCP — Serviço que pode fornecer automaticamente parâmetros de rede a clientes. Neste caso, Investigar configuração de DNS e resolução de nomes, preservando as demais hipóteses de diagnóstico. porque O acesso por IP sugere que o caminho IP existe, mas a tradução do nome pode falhar. Limitação: DNS também resolve outros tipos de registros; DHCP é um dos modos, não o único, de configurar endereços IP."
    },
    {
      "subtopicId": "INF-17-005",
      "front": "Um sistema de atendimento demora a reagir a comandos pequenos, apesar de um teste de download indicar grande taxa de transferência. Como distinguir Largura de banda, Taxa efetiva e Latência para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Largura de banda — Capacidade nominal de transmissão de dados de um enlace, normalmente medida em bits por segundo. Taxa efetiva — Quantidade realmente transmitida em uma condição de uso. Latência — Atraso temporal entre uma comunicação enviada e a resposta ou entrega avaliada. Neste caso, Medir latência e perdas além da taxa de transferência antes de concluir o diagnóstico. porque A demora interativa pode depender do atraso e do processamento, não só da banda. Limitação: Transferência costuma usar bits/s e capacidade de arquivos usa bytes; 1 byte equivale a 8 bits, sem confundir o prefixo."
    },
    {
      "subtopicId": "INF-17-006",
      "front": "Uma equipe deve consultar relatórios de patrimônio em pasta de rede, mas apenas responsáveis pelo inventário podem alterá-los. Como distinguir Compartilhamento, Autenticação e Autorização para justificar uma decisão segura sem depender apenas da aparência do comando?",
      "back": "Os conceitos são diferentes: Compartilhamento — Disponibilização controlada de recursos, como impressoras e arquivos, a outros usuários. Autenticação — Verificação da identidade alegada por um usuário ou dispositivo. Autorização — Determinação das operações permitidas após a verificação de identidade. Neste caso, Configurar leitura para a equipe e edição apenas para responsáveis, com contas identificadas. porque Permissões diferenciadas implementam menor privilégio e responsabilidade pelo dado. Limitação: Acesso pode ser condicionado por identidade, grupos, compartilhamento e permissões do sistema de arquivos; deve-se conferir a combinação aplicável."
    }
  ]
};
