const LANG_KEY = "app_language";

export default {
  get() {
    return localStorage.getItem(LANG_KEY) || "en";
  },

  set(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }
};
