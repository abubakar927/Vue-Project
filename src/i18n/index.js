// src/i18n/index.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    settings: "Settings",
    profileInfo: "Profile Info",
    updateProfile: "Update Profile",
    darkMode: "Dark Mode",
    notifications: "Notifications",
    language: "Language",
    savePreferences: "Save Preferences",
  },

  es: {
    settings: "Configuración",
    profileInfo: "Información del perfil",
    updateProfile: "Actualizar perfil",
    darkMode: "Modo oscuro",
    notifications: "Notificaciones",
    language: "Idioma",
    savePreferences: "Guardar preferencias",
  },

  fr: {
    settings: "Paramètres",
    profileInfo: "Informations du profil",
    updateProfile: "Mettre à jour le profil",
    darkMode: "Mode sombre",
    notifications: "Notifications",
    language: "Langue",
    savePreferences: "Enregistrer les préférences",
  },

  de: {
    settings: "Einstellungen",
    profileInfo: "Profilinformationen",
    updateProfile: "Profil aktualisieren",
    darkMode: "Dunkelmodus",
    notifications: "Benachrichtigungen",
    language: "Sprache",
    savePreferences: "Einstellungen speichern",
  }
};

const savedLanguage = localStorage.getItem("language") || "en";

export const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: "en",
  messages,
});
