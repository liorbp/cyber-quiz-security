export interface Question {
  threat: st
  options: strin
  explanation: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const QUESTIONS: Question[] = [
   
    id: '1',
    threat: 'Living off the Land (LotL)',
    description: 'Advanced persistent threat technique using legitimate system tools',
    options: [
      'Using custom malware to establish persistence',
      'Exploiting legitimate system binaries and scripts for malicious purposes',
      'Installing backdoors through software vulnerabilities',
  {
    ],
    options: [
      'Phishing attack targeting supply chain vendors',
  },
   
  },
    id: '4',
    description: 'Machine learning model manipulation technique',
    options: [
      'Crafting inputs designed to fool AI classification
    ],
    explanation: 'Adversarial AI involves creating s
  {
    th
    options: [
      'Forging Kerberos TGTs using compromised KRBTGT account hash',
    
   
    id: '3',
    threat: 'Supply Chain Attack',
    description: 'Compromise targeting the software development lifecycle',
      'Malware
      'Direct attack on an organization\'s primary infrastructure',
      'Phishing attack targeting supply chain vendors',
      'Injection of malicious code into legitimate software during development',
      'Physical theft of hardware components from suppliers'
    ex
    correctAnswer: 2,
    explanation: 'Supply chain attacks compromise legitimate software during development or distribution, affecting all downstream users of that software.'
  },
   
    id: '4',
    threat: 'Adversarial AI',
    description: 'Machine learning model manipulation technique',
    explanatio
      'Hiding malicious processes using rootk
    ],
    explanation: 'Process hollowing creates a legitimate process in
  {
    ],
    options: [
      'Loading malicious DLLs through search order manipulation',
    
  {
  },
    id: '10',
    description: 'Exploitation of missing DLL dependencies',
    options: [
      'Using memory-only DLL loading techniques',
    ],
    explanation: 'Phantom DLL hijacking places
  {
    ],
    options: [
      'Modifying COM registry entries to load malicious code',
    
  {
  },
    id: '12',
    description: 'Persistence mechanism using Window
    options: [
      'Establishing permanent WMI event filter
    ],
    explanation: 'WMI event subscription creates persistent 
  {
    ],
    options: [
      'Modifying .NET configuration to load malicious AppDomainManager',
  },
  {
  },
    id: '14',
    description: 'Credential extraction from Windows authentic
    options: [
      'Reading credentials from Windows registry',
    ],
    explanation: 'LSASS memory dumpi
  {
    ],
    options: [
      'Mimicking domain controller to request credential data',
  },
  {
  },
    id: '16',
    description: 'Service account credential cracking techn
    options: [
      'Exploiting Kerberos protocol vulnerabilities',
    ],
      'Hiding malicious processes using rootkit techniques',
      'Terminating security processes to avoid detection'
    th
    correctAnswer: 1,
    explanation: 'Process hollowing creates a legitimate process in suspended state, then replaces its memory contents with malicious code before resuming execution.'
    
   
    id: '9',
    threat: 'DLL Sideloading',
    description: 'Library hijacking exploitation technique',
      'Forging
      'Replacing system DLLs with malicious versions',
      'Loading malicious DLLs through search order manipulation',
      'Injecting code into legitimate DLL files',
      'Using DLL reflection to avoid file system detection'
  },
    correctAnswer: 1,
    explanation: 'DLL sideloading exploits the Windows DLL search order to load malicious libraries instead of legitimate ones when applications start.'
  },
   
    id: '10',
    threat: 'Phantom DLL Hijacking',
    description: 'Exploitation of missing DLL dependencies',
    explanatio
      'Replacing existing DLLs with malicious versions',
      'Placing malicious DLLs in locations where missing dependencies are searched',
      'Using memory-only DLL loading techniques',
      'Modifying DLL import tables in legitimate executables'
    op
    correctAnswer: 1,
    explanation: 'Phantom DLL hijacking places malicious DLLs in locations where applications search for missing or non-existent dependencies.'
  },
   
    id: '11',
    threat: 'COM Hijacking',
    description: 'Component Object Model manipulation attack',
      'Authent
      'Hijacking network communication protocols',
      'Modifying COM registry entries to load malicious code',
      'Intercepting serial port communications',
      'Exploiting COM port buffer overflows'
  },
    correctAnswer: 1,
    explanation: 'COM hijacking modifies Windows registry entries for COM objects to redirect legitimate applications to load malicious code instead.'
    
   
    id: '12',
    threat: 'WMI Event Subscription',
    description: 'Persistence mechanism using Windows Management Instrumentation',
      'Creatin
      'Creating scheduled tasks through WMI',
      'Using WMI to monitor file system changes',
      'Establishing permanent WMI event filters and consumers for code execution',
      'Querying system information through WMI'
  },
    correctAnswer: 2,
    explanation: 'WMI event subscription creates persistent event filters and consumers that automatically execute malicious code when specific system events occur.'
    
   
    id: '13',
    threat: 'AppDomainManager Injection',
    description: '.NET Framework code injection technique',
      'Exploit
      'Injecting code into web application domains',
      'Modifying .NET configuration to load malicious AppDomainManager',
      'Exploiting application domain isolation boundaries',
      'Using reflection to modify running .NET applications'
  },
    correctAnswer: 1,
    explanation: 'AppDomainManager injection modifies .NET configuration files to specify a malicious AppDomainManager that executes during .NET application startup.'
    
   
    id: '14',
    threat: 'LSASS Memory Dumping',
    description: 'Credential extraction from Windows authentication process',
      'Modifyi
      'Dumping browser saved passwords',
      'Extracting credentials from LSASS process memory',
      'Reading credentials from Windows registry',
      'Intercepting network authentication traffic'
  },
    correctAnswer: 1,
    explanation: 'LSASS memory dumping extracts credentials stored in the Local Security Authority Subsystem Service process memory for credential theft.'
    
   
    id: '15',
    threat: 'DCSync Attack',
    description: 'Active Directory replication abuse technique',
      'Injecti
      'Synchronizing domain controller clocks',
      'Mimicking domain controller to request credential data',
    explanation: 'SID History injection adds privileged g
  {
    ],
    options: [
      'Extracting DPAPI-protected credentials using master keys',
    
  {
  },
    id: '32',
    description: 'Local Security Authority secrets theft',
    options: [
      'Using LSA for secure credential storage
    ],
    explanation: 'LSA Secrets extraction retrieves st
  {
    ],
    options: [
      'Using credential caching for performance optimization',
    
  {
  },
    id: '34',
    description: 'Authentication package persistence technique',
    options: [
      'Exploiting SSP implementation vulnerabilities',
    ],
    explanation: 'Security Support Provider persisten
  {
    ],
    options: [
      'Using Netlogon for secure domain authentication',
    
  {
  },
    id: '36',
    description: 'Print Spooler privilege escalation vulnera
    options: [
      'Implementing secure printing protocols',
    ],
    explanation: 'PrintNightmare exploits Windows Print Spo
  {
    ],
    options: [
      'Using registry for system configuration',
    
  {
  },
    id: '38',
    description: 'NTLM authentication coercion technique',
    options: [
      'Implementing certificate-based authentication',
    ],
    explanation: 'PetitPotam abuses MS-EFSRPC to coerce domain co
  {
    ],
    options: [
      'Using Exchange for secure email communication',
    
  {
  },
    id: '40',
    description: 'Print System Remote Protocol authentication coercio
    options: [
      'Monitoring print system activities',
    ],
    explanation: 'SpoolSample uses MS-RPRN to force domain
  {
    ],
    options: [
      'Implementing Active Directory monitoring',
    
  {
  },
    id: '42',
    description: 'PowerShell-based Active Directory reconnaissa
    options: [
      'Monitoring PowerShell execution',
    ],
    explanation: 'PowerView is a PowerShell tool used for compr
  {
    ],
    options: [
      'Implementing Kerberos security enhancements',
    
  {
  },
    id: '44',
    description: 'Windows credential extraction tool',
    options: [
      'Monitoring credential access activities',
    ],
    explanation: 'Mimikatz extracts plaintext passwor
  {
    ],
    options: [
      'Implementing network security monitoring',
    
  {
  },
    id: '46',
    description: 'PowerShell-based post-exploitation framework
    options: [
      'Monitoring PowerShell activities',
    ],
    explanation: 'Empire is a pure PowerShell post-ex
  {
    ],
    options: [
      'Implementing memory protection mechanisms',
    
  {
  },
    id: '48',
    description: '.NET command and control platform',
    options: [
      'Monitoring .NET application execution
    ],
    explanation: 'Covenant is a .NET command and con
  {
    ],
    options: [
      'Implementing PowerShell monitoring',
    
  {
  },
    id: '50',
    description: 'Modern multi-platform command and control',
    options: [
      'Configuring network security controls',
    ],
    explanation: 'Sliver is a modern, open-source C2 framew
  {
    ],
    options: [
      'Implementing macro security policies',
  },
  {
  },
    id: '52',
    description: 'Dynamic Data Exchange abuse in Office d
    options: [
      'Monitoring DDE activities',
    ],
    explanation: 'DDE exploitation uses Dynamic Data 
  {
    ],
    options: [
      'Implementing RTF parsing security',
  },
  {
  },
    id: '54',
    description: 'Equation Editor memory corruption v
    options: [
      'Monitoring Office vulnerabilities',
    ],
    explanation: 'CVE-2017-11882 is a memory corruption v
  {
    ],
    options: [
      'Implementing vulnerability management',
  },
  {
  },
    id: '56',
    description: 'Modular banking malware and botnet',
    options: [
      'Monitoring financial transactions',
    ],
    explanation: 'Emotet is a sophisticated banking
  {
    ],
    options: [
      'Implementing network segmentation',
  },
  {
  },
    id: '58',
    description: 'Banking trojan with information stealing capabilit
    options: [
      'Monitoring data access patterns',
    ],
    explanation: 'QakBot (Qbot) is a banking troja
  {
    ],
    options: [
      'Implementing transaction monitoring',
  },
  {
  },
    id: '60',
    description: 'Credential-stealing malware targeting fina
    options: [
      'Monitoring form submissions',
    ],
    explanation: 'Zeus is a banking trojan that uses keylo
  {
    th
    options: [
    explanation: 'SID History injection adds privileged group SIDs to user accounts, granting elevated permissions that persist across logons.'
  },
   
    id: '31',
    threat: 'DPAPI Abuse',
    description: 'Data Protection API credential extraction',
      'Using m
      'Using DPAPI to encrypt sensitive data',
    ],
      'Exploiting DPAPI cryptographic vulnerabilities',
      'Implementing DPAPI for secure storage'
    ],
    correctAnswer: 1,
    explanation: 'DPAPI abuse uses compromised master keys to decrypt DPAPI-protected data like saved passwords and certificates.'
  },
   
  },
    threat: 'LSA Secrets Extraction',
    description: 'Data theft and encryption ransomware',
    options: [
      'Extracting stored service account passwords from LSA secrets',
      'Exploiting LSA authentication vulnerabilities',
      'Using LSA for secure credential storage',
      'Implementing LSA security policies'
    th
    correctAnswer: 0,
    explanation: 'LSA Secrets extraction retrieves stored service account passwords and other sensitive data from the Local Security Authority database.'
  },
   
    id: '33',
    threat: 'Cached Credential Extraction',
    description: 'Domain credential cache exploitation',
      'Using h
      'Extracting cached domain credentials for offline authentication',
    ],
      'Implementing secure credential caching mechanisms',
      'Exploiting cache validation vulnerabilities'
    ],
    correctAnswer: 0,
    explanation: 'Cached credential extraction retrieves domain user password hashes stored locally for offline authentication capabilities.'
  },
   
  },
    threat: 'Security Support Provider',
    description: 'Ransomware with leak site and affiliate progra
    options: [
      'Installing malicious SSP to capture credentials',
      'Using SSP for secure authentication protocols',
    explanation: 'Hive ransomware operated with double
      'Implementing custom authentication providers'
    th
    correctAnswer: 0,
    explanation: 'Security Support Provider persistence installs malicious authentication packages to capture credentials during system authentication.'
  },
   
    id: '35',
    threat: 'Netlogon Privilege Escalation',
    description: 'Domain controller authentication bypass (Zerologon)',
      'Using p
      'Exploiting Netlogon cryptographic vulnerability to reset DC passwords',
    ],
      'Implementing Netlogon security enhancements',
      'Monitoring Netlogon authentication events'
    ],
    correctAnswer: 0,
    explanation: 'Netlogon privilege escalation (Zerologon) exploits a cryptographic flaw to reset domain controller machine account passwords.'
  },
   
  },
    threat: 'PrintNightmare',
    description: 'Print Spooler privilege escalation vulnerability',
    options: [
      'Exploiting Print Spooler to achieve SYSTEM privileges',
      'Using print spooler for document management',
    explanation: 'APT28 (Fancy Bear) is associa
      'Monitoring print spooler activities'
    th
    correctAnswer: 0,
    explanation: 'PrintNightmare exploits Windows Print Spooler vulnerabilities to achieve local privilege escalation or remote code execution.'
  },
   
    id: '37',
    threat: 'HiveNightmare',
    description: 'Windows registry hive access vulnerability (SeriousSAM)',
      'Conduct
      'Exploiting registry permissions to access SAM/SYSTEM hives',
    ],
      'Implementing registry security policies',
      'Monitoring registry access patterns'
    ],
    correctAnswer: 0,
    explanation: 'HiveNightmare (SeriousSAM) exploits excessive permissions on registry backup files to extract SAM and SYSTEM hives containing credentials.'
  },
   
  },
    threat: 'PetitPotam',
    description: 'Iranian government-sponsored cyber group
    options: [
      'Forcing domain controllers to authenticate to attacker-controlled systems',
      'Using EFS for secure file encryption',
    explanation: 'APT34 (OilRig) is an Iranian threat 
      'Monitoring file encryption activities'
    th
    correctAnswer: 0,
    explanation: 'PetitPotam abuses MS-EFSRPC to coerce domain controllers into authenticating to attacker-controlled systems for credential relay.'
  },
   
    id: '39',
    threat: 'PrivExchange',
    description: 'Exchange Server privilege escalation',
      'Stealin
      'Exploiting Exchange Server to escalate domain privileges',
    ],
      'Implementing Exchange security policies',
      'Monitoring Exchange server activities'
    ],
    correctAnswer: 0,
    explanation: 'PrivExchange exploits Exchange Server\'s authentication to domain controllers to escalate privileges and potentially compromise the domain.'
  },
   
  },
    threat: 'SpoolSample',
    description: 'Print System Remote Protocol authentication coercion',
    options: [
      'Using print spooler to force authentication for credential capture',
      'Implementing secure printing protocols',
    explanation: 'Wizard Spider is a Russia
      'Configuring print spooler security'
    th
    correctAnswer: 0,
    explanation: 'SpoolSample uses MS-RPRN to force domain controllers to authenticate to attacker systems for NTLM relay attacks.'
  },
   
    id: '41',
    threat: 'BloodHound Analysis',
    description: 'Active Directory attack path discovery tool',
      'Exploit
      'Using graph analysis to identify privilege escalation paths in AD',
    ],
      'Configuring AD security policies',
      'Auditing Active Directory permissions'
    ],
    correctAnswer: 0,
    explanation: 'BloodHound uses graph theory to analyze Active Directory relationships and identify attack paths for privilege escalation.'
  },
   
  },
    threat: 'PowerView Enumeration',
    description: 'PowerShell-based Active Directory reconnaissance',
    options: [
      'Using PowerShell to enumerate AD objects and relationships',
      'Implementing PowerShell security controls',
    explanation: 'Insecure deserializati
      'Configuring PowerShell execution policies'
    th
    correctAnswer: 0,
    explanation: 'PowerView is a PowerShell tool used for comprehensive Active Directory enumeration and relationship mapping.'
  },
   
    id: '43',
    threat: 'Rubeus Exploitation',
    description: 'Kerberos exploitation and abuse toolkit',
      'Exploit
      'Using .NET tool for comprehensive Kerberos attacks',
    ],
      'Monitoring Kerberos authentication',
      'Configuring Kerberos policies'
    ],
    correctAnswer: 0,
    explanation: 'Rubeus is a .NET toolset for performing various Kerberos-based attacks including ticket manipulation and credential extraction.'
  },
   
  },
    threat: 'Mimikatz Credential Extraction',
    description: 'WebSocket connection manipulation at
    options: [
      'Extracting passwords and hashes from Windows memory',
      'Implementing credential protection mechanisms',
    explanation: 'Cross-Site WebSocket Hijacking
      'Configuring credential guard'
    th
    correctAnswer: 0,
    explanation: 'Mimikatz extracts plaintext passwords, hashes, and Kerberos tickets from Windows system memory and security databases.'
  },
   
    id: '45',
    threat: 'Cobalt Strike Beacon',
    description: 'Commercial penetration testing payload',
      'Stealin
      'Using advanced post-exploitation framework for persistence',
    ],
      'Configuring endpoint detection',
      'Monitoring network communications'
    ],
    correctAnswer: 0,
    explanation: 'Cobalt Strike Beacon is a sophisticated payload providing command and control capabilities with advanced evasion techniques.'
  },
   
  },
    threat: 'Empire PowerShell Agent',
    description: 'PowerShell-based post-exploitation framework',
    options: [
      'Using PowerShell for persistent post-exploitation activities',
      'Implementing PowerShell logging',
    explanation: 'Kubernetes API abuse ex
      'Configuring script execution policies'
    th
    correctAnswer: 0,
    explanation: 'Empire is a pure PowerShell post-exploitation agent that provides extensive capabilities for maintaining persistence and lateral movement.'
  },
   
    id: '47',
    threat: 'Meterpreter Payload',
    description: 'Metasploit advanced payload system',
      'Injecti
      'Using in-memory payload for advanced post-exploitation',
    ],
      'Monitoring memory-based threats',
      'Configuring application whitelisting'
    ],
    correctAnswer: 0,
    explanation: 'Meterpreter is an advanced, dynamically extensible payload that operates entirely in memory and provides comprehensive post-exploitation capabilities.'
  },
   
  },
    threat: 'Covenant C2 Framework',
    description: 'Cloud identity and access managemen
    options: [
      'Using .NET-based C2 for Windows-focused operations',
      'Implementing .NET security policies',
      'Monitoring .NET application execution',
      'Configuring code access security'
    th
    correctAnswer: 0,
    explanation: 'Covenant is a .NET command and control framework designed for collaborative red team operations with advanced evasion capabilities.'
  },
   
    id: '49',
    threat: 'PoshC2 Implant',
    description: 'PowerShell and C# command and control toolkit',
      'Extract
      'Using PowerShell/C# hybrid C2 for persistent access',
    ],
      'Configuring application controls',
      'Monitoring network communications'
    ],
    correctAnswer: 0,
    explanation: 'PoshC2 is a proxy-aware C2 framework that uses PowerShell and C# implants for long-term persistent access and evasion.'
  },
   
  },
    threat: 'Sliver C2 Framework',
    description: 'Physical hardware modification attack',
    options: [
      'Using Go-based C2 with advanced operational security features',
      'Implementing cross-platform monitoring',
    explanation: 'Hardware implants involve ph
      'Monitoring encrypted communications'

    correctAnswer: 0,
    explanation: 'Sliver is a modern, open-source C2 framework written in Go with advanced OPSEC features and multi-platform support.'
  },

    id: '51',
    threat: 'Macro-based Malware',
    description: 'Office document macro exploitation',

      'Using VBA macros in documents for initial compromise',

      'Monitoring macro execution',
      'Configuring document protection'
    ],
    correctAnswer: 0,
    explanation: 'Macro-based malware embeds malicious VBA code in Office documents to execute payloads when users enable macros.'

  {

    threat: 'DDE Exploitation',
    description: 'Dynamic Data Exchange abuse in Office documents',
    options: [
      'Using DDE fields to execute commands without macros',
      'Implementing DDE security controls',

      'Configuring Office security settings'

    correctAnswer: 0,
    explanation: 'DDE exploitation uses Dynamic Data Exchange fields in Office documents to execute system commands without requiring macro execution.'
  },

    id: '53',
    threat: 'RTF Template Injection',
    description: 'Rich Text Format weaponization technique',

      'Embedding malicious templates in RTF documents',

      'Monitoring document processing',
      'Configuring file type associations'
    ],
    correctAnswer: 0,
    explanation: 'RTF template injection embeds malicious templates in RTF documents that execute when the document is opened or processed.'

  {

    threat: 'CVE-2017-11882 Exploitation',
    description: 'Equation Editor memory corruption vulnerability',
    options: [
      'Exploiting Office Equation Editor for code execution',
      'Implementing Office security updates',

      'Configuring Office protected view'

    correctAnswer: 0,
    explanation: 'CVE-2017-11882 is a memory corruption vulnerability in Microsoft Office Equation Editor that allows remote code execution.'
  },

    id: '55',
    threat: 'ThreadKit Exploitation',
    description: 'Exploit kit targeting multiple vulnerabilities',

      'Using automated exploit delivery platform',

      'Monitoring exploit kit activities',
      'Configuring browser security'
    ],
    correctAnswer: 0,
    explanation: 'ThreadKit is an exploit kit that automatically delivers exploits for multiple vulnerabilities through compromised or malicious websites.'

  {

    threat: 'Emotet Banking Trojan',

    options: [
      'Using modular malware for credential theft and malware distribution',
      'Implementing banking security controls',

      'Configuring email security'

    correctAnswer: 0,
    explanation: 'Emotet is a sophisticated banking trojan that steals credentials and serves as a delivery mechanism for other malware families.'
  },

    id: '57',
    threat: 'TrickBot Malware',
    description: 'Banking trojan with post-exploitation capabilities',

      'Using banking malware for credential theft and lateral movement',

      'Monitoring banking activities',
      'Configuring endpoint protection'
    ],
    correctAnswer: 0,
    explanation: 'TrickBot is a banking trojan that has evolved into a comprehensive post-exploitation toolkit for credential theft and network reconnaissance.'

  {

    threat: 'QakBot Banking Malware',
    description: 'Banking trojan with information stealing capabilities',
    options: [
      'Using persistent banking malware for data exfiltration',
      'Implementing data loss prevention',

      'Configuring network monitoring'

    correctAnswer: 0,
    explanation: 'QakBot (Qbot) is a banking trojan that steals credentials, monitors user activities, and provides remote access capabilities.'
  },

    id: '59',
    threat: 'Dridex Banking Trojan',
    description: 'Financial malware with credential harvesting',

      'Using web injection techniques for financial fraud',

      'Configuring web application security',
      'Monitoring HTTP/HTTPS traffic'
    ],
    correctAnswer: 0,
    explanation: 'Dridex is a banking trojan that uses web injection techniques to steal financial credentials and manipulate online banking sessions.'

  {

    threat: 'Zeus Banking Trojan',
    description: 'Credential-stealing malware targeting financial institutions',
    options: [
      'Using keylogging and form grabbing for credential theft',
      'Implementing keystroke protection',

      'Configuring browser security'

    correctAnswer: 0,
    explanation: 'Zeus is a banking trojan that uses keylogging, form grabbing, and screen capturing to steal financial credentials.'
  },

    id: '61',
    threat: 'WannaCry Ransomware',
    description: 'Self-propagating ransomware using EternalBlue',

      'Using SMB exploit for rapid network propagation',

      'Monitoring SMB traffic',
      'Configuring network segmentation'
    ],
    correctAnswer: 0,
    explanation: 'WannaCry ransomware exploited the EternalBlue SMB vulnerability to rapidly propagate across networks and encrypt files.'

  {

    threat: 'NotPetya Ransomware',
    description: 'Destructive ransomware with worm capabilities',
    options: [
      'Using multiple propagation methods for destructive file encryption',
      'Implementing backup strategies',

      'Configuring endpoint protection'

    correctAnswer: 0,
    explanation: 'NotPetya combined ransomware encryption with worm propagation capabilities, causing widespread destruction across networks.'
  },

    id: '63',
    threat: 'Ryuk Ransomware',
    description: 'Targeted ransomware for high-value victims',

      'Using manual deployment for targeted high-value attacks',

      'Monitoring lateral movement',
      'Configuring privileged access management'
    ],
    correctAnswer: 0,
    explanation: 'Ryuk ransomware is manually deployed by threat actors after gaining network access, targeting high-value victims for maximum impact.'

  {

    threat: 'Maze Ransomware',

    options: [
      'Combining data exfiltration with encryption for double extortion',
      'Implementing data classification',

      'Configuring data loss prevention'

    correctAnswer: 0,
    explanation: 'Maze ransomware pioneered double extortion by stealing data before encryption and threatening to publish it if ransom is not paid.'
  },

    id: '65',
    threat: 'Conti Ransomware',
    description: 'Ransomware-as-a-Service operation',

      'Using professional ransomware operation with affiliate model',

      'Monitoring ransomware indicators',
      'Configuring security orchestration'
    ],
    correctAnswer: 0,
    explanation: 'Conti operated as a professional Ransomware-as-a-Service with affiliates, sophisticated tools, and efficient victim communication.'

  {

    threat: 'LockBit Ransomware',
    description: 'Fast-encrypting ransomware with leak site',
    options: [
      'Using high-speed encryption with data leak pressure tactics',
      'Implementing rapid response procedures',

      'Configuring behavioral analysis'

    correctAnswer: 0,
    explanation: 'LockBit ransomware focuses on rapid encryption speed and operates leak sites to pressure victims into paying ransoms.'
  },

    id: '67',
    threat: 'BlackCat Ransomware',
    description: 'Rust-based cross-platform ransomware',

      'Using Rust programming language for cross-platform deployment',

      'Configuring multi-OS security',
      'Monitoring programming language exploits'
    ],
    correctAnswer: 0,
    explanation: 'BlackCat (ALPHV) ransomware is written in Rust, enabling efficient cross-platform deployment across Windows, Linux, and VMware ESXi.'

  {

    threat: 'Hive Ransomware',
    description: 'Ransomware with leak site and affiliate program',
    options: [
      'Using double extortion with professional victim communication',
      'Implementing crisis communication',

      'Configuring reputation monitoring'

    correctAnswer: 0,
    explanation: 'Hive ransomware operated with double extortion tactics, professional victim negotiation, and an active affiliate recruitment program.'
  },

    id: '69',
    threat: 'REvil Ransomware',
    description: 'Ransomware-as-a-Service with supply chain targeting',

      'Using RaaS model with high-profile supply chain attacks',

      'Monitoring vendor relationships',
      'Configuring third-party risk management'
    ],
    correctAnswer: 0,
    explanation: 'REvil (Sodinokibi) operated a sophisticated RaaS program and conducted high-profile supply chain attacks like Kaseya.'

  {

    threat: 'DarkSide Ransomware',
    description: 'Professional ransomware operation with ethics claims',
    options: [
      'Using professional operation while claiming to avoid critical infrastructure',
      'Implementing critical infrastructure protection',

      'Configuring operational technology security'

    correctAnswer: 0,
    explanation: 'DarkSide operated as a professional ransomware service claiming to avoid healthcare and critical infrastructure while targeting major organizations.'
  },

    id: '71',
    threat: 'APT1 (Comment Crew)',
    description: 'Chinese military unit cyber espionage group',

      'Conducting long-term espionage for intellectual property theft',

      'Monitoring nation-state indicators',
      'Configuring advanced persistent threat detection'
    ],
    correctAnswer: 0,
    explanation: 'APT1 (Comment Crew) is associated with Chinese PLA Unit 61398 and conducts extensive intellectual property theft and espionage operations.'

  {

    threat: 'APT28 (Fancy Bear)',

    options: [
      'Conducting cyber espionage and information warfare for Russian GRU',
      'Implementing nation-state defense',

      'Configuring intelligence-driven security'

    correctAnswer: 0,
    explanation: 'APT28 (Fancy Bear) is associated with Russian GRU Unit 26165 and conducts cyber espionage and information warfare operations.'
  },

    id: '73',
    threat: 'APT29 (Cozy Bear)',
    description: 'Russian foreign intelligence service group',

      'Conducting sophisticated espionage for Russian SVR',

      'Monitoring foreign intelligence activities',
      'Configuring diplomatic security'
    ],
    correctAnswer: 0,
    explanation: 'APT29 (Cozy Bear) is associated with Russian SVR and conducts sophisticated, long-term espionage operations against government targets.'

  {

    threat: 'Lazarus Group',

    options: [
      'Conducting financially motivated attacks and espionage for North Korea',
      'Implementing financial crime prevention',

      'Configuring sanctions compliance'

    correctAnswer: 0,
    explanation: 'Lazarus Group is a North Korean state-sponsored group conducting both financially motivated attacks and espionage operations.'
  },

    id: '75',
    threat: 'APT40 (Leviathan)',
    description: 'Chinese maritime-focused espionage group',

      'Targeting maritime industries for strategic intelligence collection',

      'Monitoring maritime infrastructure',
      'Configuring industrial control security'
    ],
    correctAnswer: 0,
    explanation: 'APT40 (Leviathan) is a Chinese threat group focusing on maritime industries, engineering companies, and research organizations.'

  {

    threat: 'APT34 (OilRig)',
    description: 'Iranian government-sponsored cyber group',
    options: [
      'Conducting espionage operations for Iranian intelligence services',
      'Implementing regional threat monitoring',

      'Monitoring energy sector threats'

    correctAnswer: 0,
    explanation: 'APT34 (OilRig) is an Iranian threat group conducting espionage operations primarily against Middle Eastern and international targets.'
  },

    id: '77',
    threat: 'FIN7 Group',
    description: 'Financially motivated threat group',

      'Conducting point-of-sale attacks and payment card theft',

      'Monitoring financial transactions',
      'Configuring PCI DSS compliance'
    ],
    correctAnswer: 0,
    explanation: 'FIN7 is a financially motivated threat group specializing in payment card theft through point-of-sale malware and social engineering.'

  {

    threat: 'Carbanak Group',
    description: 'Banking-focused cybercriminal organization',
    options: [
      'Stealing over $1 billion from financial institutions',
      'Implementing banking security frameworks',

      'Configuring SWIFT security'

    correctAnswer: 0,
    explanation: 'Carbanak is a cybercriminal group that has stolen over $1 billion from banks through sophisticated ATM and SWIFT network attacks.'
  },

    id: '79',
    threat: 'TA505 Group',
    description: 'Prolific malware distribution group',

      'Distributing various malware families through massive email campaigns',

      'Monitoring email-based threats',
      'Configuring anti-spam controls'
    ],
    correctAnswer: 0,
    explanation: 'TA505 is a threat group known for distributing various malware families including Dridex, TrickBot, and Clop through massive email campaigns.'

  {

    threat: 'Wizard Spider',

    options: [
      'Operating TrickBot banking trojan and Ryuk ransomware',
      'Implementing Russian cybercrime monitoring',

      'Monitoring Eastern European threats'

    correctAnswer: 0,
    explanation: 'Wizard Spider is a Russian cybercriminal group operating the TrickBot banking trojan and associated with Ryuk ransomware deployments.'
  },

    id: '81',
    threat: 'HTTP Parameter Pollution',
    description: 'Web application input manipulation technique',

      'Supplying multiple parameters with the same name to bypass filters',

      'Monitoring web application traffic',
      'Configuring web application firewalls'
    ],
    correctAnswer: 0,
    explanation: 'HTTP Parameter Pollution exploits how web applications handle duplicate parameter names to bypass security controls or access restrictions.'

  {

    threat: 'XML External Entity (XXE)',

    options: [
      'Exploiting XML parsers to access local files or internal networks',
      'Implementing secure XML parsing',

      'Configuring input sanitization'

    correctAnswer: 0,
    explanation: 'XXE attacks exploit vulnerable XML parsers to access local files, perform SSRF attacks, or cause denial of service.'
  },

    id: '83',
    threat: 'Server-Side Template Injection',
    description: 'Template engine exploitation technique',

      'Injecting malicious code into server-side templates',

      'Monitoring template processing',
      'Configuring template sandboxing'
    ],
    correctAnswer: 0,
    explanation: 'SSTI occurs when user input is embedded in server-side templates, allowing attackers to inject and execute arbitrary code.'

  {

    threat: 'Insecure Deserialization',
    description: 'Object deserialization vulnerability exploitation',
    options: [
      'Exploiting unsafe deserialization to achieve remote code execution',
      'Implementing secure serialization',

      'Configuring object validation'

    correctAnswer: 0,
    explanation: 'Insecure deserialization occurs when applications deserialize untrusted data, potentially leading to remote code execution or privilege escalation.'
  },

    id: '85',
    threat: 'LDAP Injection',
    description: 'LDAP query manipulation attack',

      'Manipulating LDAP queries to bypass authentication or access data',

      'Monitoring LDAP queries',
      'Configuring LDAP security controls'
    ],
    correctAnswer: 0,
    explanation: 'LDAP injection manipulates LDAP queries through malicious input to bypass authentication or extract unauthorized directory information.'

  {

    threat: 'NoSQL Injection',

    options: [
      'Exploiting NoSQL databases through malicious query manipulation',
      'Implementing NoSQL security controls',

      'Configuring NoSQL authentication'

    correctAnswer: 0,
    explanation: 'NoSQL injection exploits NoSQL databases by injecting malicious code into queries, potentially leading to data theft or authentication bypass.'
  },

    id: '87',
    threat: 'GraphQL Injection',
    description: 'GraphQL query manipulation attack',

      'Exploiting GraphQL APIs through malicious query construction',

      'Monitoring GraphQL queries',
      'Configuring GraphQL rate limiting'
    ],
    correctAnswer: 0,
    explanation: 'GraphQL injection exploits GraphQL APIs through malicious queries that can bypass security controls or extract unauthorized data.'

  {

    threat: 'Cross-Site WebSocket Hijacking',
    description: 'WebSocket connection manipulation attack',
    options: [
      'Hijacking WebSocket connections to perform unauthorized actions',
      'Implementing WebSocket security',

      'Configuring WebSocket authentication'

    correctAnswer: 0,
    explanation: 'Cross-Site WebSocket Hijacking exploits insufficient origin validation to hijack WebSocket connections and perform unauthorized actions.'
  },

    id: '89',
    threat: 'JWT Token Manipulation',
    description: 'JSON Web Token security bypass',

      'Manipulating JWT tokens to bypass authentication or authorization',

      'Monitoring JWT token usage',
      'Configuring JWT validation'
    ],
    correctAnswer: 0,
    explanation: 'JWT token manipulation exploits weak implementations to forge or modify tokens, potentially bypassing authentication and authorization controls.'

  {

    threat: 'OAuth Token Theft',

    options: [
      'Stealing OAuth tokens to impersonate legitimate users',
      'Implementing OAuth security controls',

      'Configuring OAuth token validation'

    correctAnswer: 0,
    explanation: 'OAuth token theft involves compromising OAuth access tokens to gain unauthorized access to protected resources and user accounts.'
  },

    id: '91',
    threat: 'Container Escape',
    description: 'Breaking out of containerized environments',

      'Exploiting container misconfigurations to access the host system',

      'Monitoring container activities',
      'Configuring container isolation'
    ],
    correctAnswer: 0,
    explanation: 'Container escape involves exploiting vulnerabilities or misconfigurations to break out of container isolation and access the host system.'

  {

    threat: 'Kubernetes API Abuse',

    options: [
      'Exploiting misconfigured Kubernetes APIs for cluster compromise',
      'Implementing Kubernetes security policies',

      'Configuring RBAC controls'

    correctAnswer: 0,
    explanation: 'Kubernetes API abuse exploits misconfigured or exposed APIs to gain unauthorized access to cluster resources and potentially compromise the entire cluster.'
  },

    id: '93',
    threat: 'Docker Socket Exposure',
    description: 'Docker daemon socket security risk',

      'Exploiting exposed Docker sockets to gain host system access',

      'Monitoring Docker activities',
      'Configuring Docker daemon security'
    ],
    correctAnswer: 0,
    explanation: 'Docker socket exposure allows attackers to interact with the Docker daemon, potentially leading to container creation and host system compromise.'

  {

    threat: 'Serverless Function Injection',
    description: 'Cloud function code injection attack',
    options: [
      'Injecting malicious code into serverless function execution',
      'Implementing serverless security controls',

      'Configuring function isolation'

    correctAnswer: 0,
    explanation: 'Serverless function injection exploits input validation weaknesses to inject and execute malicious code within cloud function environments.'
  },

    id: '95',
    threat: 'Cloud Storage Misconfiguration',
    description: 'Insecure cloud storage bucket exposure',

      'Accessing sensitive data through misconfigured cloud storage permissions',

      'Monitoring cloud storage access',
      'Configuring bucket access controls'
    ],
    correctAnswer: 0,
    explanation: 'Cloud storage misconfiguration exposes sensitive data through improperly configured access permissions on cloud storage buckets.'

  {

    threat: 'IAM Privilege Escalation',
    description: 'Cloud identity and access management exploitation',
    options: [
      'Exploiting IAM misconfigurations to escalate cloud privileges',
      'Implementing IAM best practices',

      'Configuring least privilege access'

    correctAnswer: 0,
    explanation: 'IAM privilege escalation exploits misconfigurations in cloud identity and access management to gain elevated permissions and access.'
  },

    id: '97',
    threat: 'Cloud Metadata Service Abuse',
    description: 'Instance metadata service exploitation',

      'Accessing cloud instance metadata to extract credentials and configuration',

      'Monitoring metadata access',
      'Configuring instance security'
    ],
    correctAnswer: 0,
    explanation: 'Cloud metadata service abuse exploits access to instance metadata services to extract sensitive credentials and configuration information.'

  {

    threat: 'Side-Channel Attacks',
    description: 'Information extraction through indirect observation',
    options: [
      'Extracting sensitive information through timing, power, or electromagnetic analysis',
      'Implementing side-channel protections',

      'Configuring hardware security modules'

    correctAnswer: 0,
    explanation: 'Side-channel attacks extract sensitive information by analyzing physical characteristics like timing, power consumption, or electromagnetic emissions.'
  },

    id: '99',
    threat: 'Speculative Execution Attacks',
    description: 'CPU speculation vulnerability exploitation',

      'Exploiting CPU speculative execution to access unauthorized memory',

      'Monitoring CPU vulnerabilities',
      'Configuring speculation controls'
    ],
    correctAnswer: 0,
    explanation: 'Speculative execution attacks like Spectre and Meltdown exploit CPU optimization features to access unauthorized memory contents.'

  {

    threat: 'Hardware Implant',

    options: [
      'Installing malicious hardware components for persistent access',
      'Implementing hardware security verification',

      'Configuring hardware attestation'

    correctAnswer: 0,
    explanation: 'Hardware implants involve physically modifying computer hardware to install backdoors or monitoring capabilities that persist across software changes.'
  }
