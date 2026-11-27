export const STATE_SCHEMA_VERSION = 3;
export const APP_ID = 'inf-estudo';

export function createInitialState() {
  return {
    schemaVersion: STATE_SCHEMA_VERSION,
    appId: APP_ID,
    appVersion: "2.0.0",
    navigation: {
      currentRoute: "dashboard",
      selectedModuleId: null,
      selectedSubtopicId: null
    },
    progress: {
      modules: {}, lessons: {}, diagnostics: {}, exercises: {},
      questionHistory: {}, flashcards: {}, reviewQueue: [], errors: []
    },
    preferences: { theme: "light" },
    metadata: { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
  };
}

export function normalizeState(candidate) {
  const initial = createInitialState();
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return initial;
  // Falha fechada: não migra estados de Português ou Administração.
  if (candidate.schemaVersion !== STATE_SCHEMA_VERSION || candidate.appId !== APP_ID) return initial;
  return {
    ...initial, ...candidate,
    navigation: { ...initial.navigation, ...(candidate.navigation || {}) },
    progress: { ...initial.progress, ...(candidate.progress || {}) },
    preferences: { ...initial.preferences, ...(candidate.preferences || {}) },
    metadata: { ...initial.metadata, ...(candidate.metadata || {}) }
  };
}
