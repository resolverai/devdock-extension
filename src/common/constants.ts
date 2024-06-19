import { defaultTemplates } from '../extension/templates'

export const EXTENSION_NAME = '@ext:rjmacarthy.devdock'
export const ASSISTANT = 'assistant'
export const USER = 'user'
export const DEVDOCK = '🤖 devdock'
export const SYSTEM = 'system'
export const YOU = '👤 You'
export const EMPTY_MESAGE = 'Sorry, I don’t understand. Please try again.'
export const MODEL_ERROR = 'Sorry, something went wrong...'
export const OPENING_BRACKETS = ['[', '{', '(']
export const CLOSING_BRACKETS = [']', '}', ')']
export const OPENING_TAGS = ['<']
export const CLOSING_TAGS = ['</']
export const QUOTES = ['"', '\'', '`']
export const ALL_BRACKETS = [...OPENING_BRACKETS, ...CLOSING_BRACKETS] as const
export const BRACKET_REGEX = /^[()[\]{}]+$/
export const NORMALIZE_REGEX = /\s*\r?\n|\r/g
export const LINE_BREAK_REGEX = /\r?\n|\r|\n/g
export const QUOTES_REGEX = /["'`]/g
export const MAX_CONTEXT_LINE_COUNT = 200
export const SKIP_DECLARATION_SYMBOLS = ['=']
export const IMPORT_SEPARATOR = [',', '{']
export const SKIP_IMPORT_KEYWORDS_AFTER = ['from', 'as', 'import']
export const MIN_COMPLETION_CHUNKS = 2
export const MAX_EMPTY_COMPLETION_CHARS = 250

export const EVENT_NAME = {
  twinngAddMessage: 'devdock-add-message',
  devdockAcceptSolution: 'devdock-accept-solution',
  devdockChat: 'devdock-chat',
  devdockChatMessage: 'devdock-chat-message',
  devdockClickSuggestion: 'devdock-click-suggestion',
  devdockEnableModelDownload: 'devdock-enable-model-download',
  devdockFetchOllamaModels: 'devdock-fetch-ollama-models',
  devdockGetConfigValue: 'devdock-get-config-value',
  devdockGetGitChanges: 'devdock-get-git-changes',
  devdockGlobalContext: 'devdock-global-context',
  devdockHideBackButton: 'devdock-hide-back-button',
  devdockListTemplates: 'devdock-list-templates',
  devdockManageTemplates: 'devdock-manage-templates',
  devdockNewDocument: 'devdock-new-document',
  devdockNotification: 'devdock-notification',
  devdockOnCompletion: 'devdock-on-completion',
  devdockOnEnd: 'devdock-on-end',
  devdockOnLoading: 'devdock-on-loading',
  devdockOpenDiff: 'devdock-open-diff',
  devdockOpenSettings: 'devdock-open-settings',
  devdockSendLanguage: 'devdock-send-language',
  devdockSendSystemMessage: 'devdock-send-system-message',
  devdockSendTheme: 'devdock-send-theme',
  devdockSetConfigValue: 'devdock-set-config-value',
  devdockSetGlobalContext: 'devdock-set-global-context',
  devdockSetOllamaModel: 'devdock-set-ollama-model',
  devdockSetTab: 'devdock-set-tab',
  devdockSetWorkspaceContext: 'devdock-set-workspace-context',
  devdockStopGeneration: 'devdock-stop-generation',
  devdockTextSelection: 'devdock-text-selection',
  devdockWorkspaceContext: 'devdock-workspace-context'
}

export const DEVDOCK_COMMAND_NAME = {
  addTests: 'devdock.addTests',
  addTypes: 'devdock.addTypes',
  conversationHistory: 'devdock.conversationHistory',
  disable: 'devdock.disable',
  enable: 'devdock.enable',
  explain: 'devdock.explain',
  focusSidebar: 'devdock.sidebar.focus',
  generateDocs: 'devdock.generateDocs',
  getGitCommitMessage: 'devdock.getGitCommitMessage',
  hideBackButton: 'devdock.hideBackButton',
  manageProviders: 'devdock.manageProviders',
  manageTemplates: 'devdock.manageTemplates',
  newChat: 'devdock.newChat',
  openChat: 'devdock.openChat',
  refactor: 'devdock.refactor',
  sendTerminalText: 'devdock.sendTerminalText',
  settings: 'devdock.settings',
  stopGeneration: 'devdock.stopGeneration',
  templateCompletion: 'devdock.templateCompletion',
  templates: 'devdock.templates'
}

export const CONVERSATION_EVENT_NAME = {
  getActiveConversation: 'devdock.get-active-conversation',
  getConversations: 'devdock.get-conversations',
  removeConversation: 'devdock.remove-conversation',
  saveConversation: 'devdock.save-conversation',
  saveLastConversation: 'devdock.save-last-conversation',
  setActiveConversation: 'devdock.set-active-conversation',
  clearAllConversations: 'devdock.clear-all-conversations'
}

export const PROVIDER_EVENT_NAME = {
  addProvider: 'devdock.add-provider',
  copyProvider: 'devdock.copy-provider',
  focusProviderTab: 'devdock.focus-provider-tab',
  getActiveChatProvider: 'devdock.get-active-provider',
  getActiveFimProvider: 'devdock.get-active-fim-provider',
  getAllProviders: 'devdock.get-providers',
  removeProvider: 'devdock.remove-provider',
  resetProvidersToDefaults: 'devdock.reset-providers-to-defaults',
  setActiveChatProvider: 'devdock.set-active-chat-provider',
  setActiveFimProvider: 'devdock.set-active-fim-provider',
  updateProvider: 'devdock.update-provider'
}

export const ACTIVE_CHAT_PROVIDER_STORAGE_KEY = 'devdock.active-chat-provider'
export const ACTIVE_CONVERSATION_STORAGE_KEY = 'devdock.active-conversation'
export const ACTIVE_FIM_PROVIDER_STORAGE_KEY = 'devdock.active-fim-provider'
export const CONVERSATION_STORAGE_KEY = 'devdock.conversations'
export const INFERENCE_PROVIDERS_STORAGE_KEY = 'devdock.inference-providers'

export const WORKSPACE_STORAGE_KEY = {
  autoScroll: 'autoScroll',
  chatMessage: 'chatMessage',
  downloadCancelled: 'downloadCancelled',
  selectedTemplates: 'selectedTemplates',
  selection: 'selection',
  showProviders: 'showProviders'
}

export const EXTENSION_SETTING_KEY = {
  apiProvider: 'apiProvider',
  apiProviderFim: 'apiProviderFim',
  chatModelName: 'chatModelName',
  fimModelName: 'fimModelName'
}

export const EXTENSION_CONTEXT_NAME = {
  devdockConversationHistory: 'devdockConversationHistory',
  devdockGeneratingText: 'devdockGeneratingText',
  devdockManageProviders: 'devdockManageProviders',
  devdockManageTemplates: 'devdockManageTemplates'
}

export const WEBUI_TABS = {
  chat: 'chat',
  history: 'history',
  providers: 'providers',
  templates: 'templates'
}

export const FIM_TEMPLATE_FORMAT = {
  automatic: 'automatic',
  codegemma: 'codegemma',
  codellama: 'codellama',
  codeqwen: 'codeqwen',
  custom: 'custom-template',
  deepseek: 'deepseek',
  llama: 'llama',
  stableCode: 'stable-code',
  starcoder: 'starcoder',
}

export const STOP_LLAMA = ['<EOT>']

export const STOP_DEEPSEEK = [
  '<｜fim▁begin｜>',
  '<｜fim▁hole｜>',
  '<｜fim▁end｜>',
  '<END>',
  '<｜end▁of▁sentence｜>'
]

export const STOP_STARCODER = ['<|endoftext|>']

export const STOP_CODEGEMMA = ['<|file_separator|>', '<|end_of_turn|>', '<eos>']

export const DEFAULT_TEMPLATE_NAMES = defaultTemplates.map(({ name }) => name)

export const DEFAULT_ACTION_TEMPLATES = [
  'refactor',
  'add-tests',
  'add-types',
  'explain'
]

export const DEFAULT_PROVIDER_FORM_VALUES = {
  apiHostname: '0.0.0.0',
  apiKey: '',
  apiPath: '',
  apiPort: 11434,
  apiProtocol: 'http',
  id: '',
  label: '',
  modelName: '',
  name: '',
  provider: 'ollama',
  type: 'chat'
}

export const TITLE_GENERATION_PROMPT_MESAGE = `
  Generate a title for this conversation in under 10 words.
  It should not contain any special characters or quotes.
`

export const WASM_LANGAUAGES: { [key: string]: string } = {
  cpp: 'cpp',
  hpp: 'cpp',
  cc: 'cpp',
  cxx: 'cpp',
  hxx: 'cpp',
  cs: 'c_sharp',
  c: 'c',
  h: 'c',
  css: 'css',
  php: 'php',
  phtml: 'php',
  php3: 'php',
  php4: 'php',
  php5: 'php',
  php7: 'php',
  phps: 'php',
  'php-s': 'php',
  bash: 'bash',
  sh: 'bash',
  json: 'json',
  ts: 'typescript',
  mts: 'typescript',
  cts: 'typescript',
  tsx: 'tsx',
  vue: 'vue',
  yaml: 'yaml',
  yml: 'yaml',
  elm: 'elm',
  js: 'javascript',
  jsx: 'javascript',
  mjs: 'javascript',
  cjs: 'javascript',
  py: 'python',
  pyw: 'python',
  pyi: 'python',
  el: 'elisp',
  emacs: 'elisp',
  ex: 'elixir',
  exs: 'elixir',
  go: 'go',
  eex: 'embedded_template',
  heex: 'embedded_template',
  leex: 'embedded_template',
  html: 'html',
  htm: 'html',
  java: 'java',
  lua: 'lua',
  ocaml: 'ocaml',
  ml: 'ocaml',
  mli: 'ocaml',
  ql: 'ql',
  res: 'rescript',
  resi: 'rescript',
  rb: 'ruby',
  erb: 'ruby',
  rs: 'rust',
  rdl: 'systemrdl',
  toml: 'toml'
}

export const MULTILINE_OUTSIDE = [
  'class_body',
  'interface_body',
  'interface',
  'class',
  'program',
  'identifier',
  'export'
]

export const MULTILINE_INSIDE = [
  'body',
  'export_statement',
  'formal_parameters',
  'function_definition',
  'named_imports',
  'object_pattern',
  'object_type',
  'object',
  'parenthesized_expression',
  'statement_block'
]

export const MULTILINE_TYPES = [...MULTILINE_OUTSIDE, ...MULTILINE_INSIDE]

export const MULTI_LINE_DELIMITERS = ['\n\n', '\r\n\r\n']

export const MULTI_LINE_REACT = [
  'jsx_closing_element',
  'jsx_element',
  'jsx_element',
  'jsx_opening_element',
  'jsx_self_closing_element'
]
