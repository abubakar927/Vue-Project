<template>
  <div class="settings-page">
    <h2>{{ $t("settings") }}</h2>

    <!-- Profile Info -->
    <section class="section">
      <StatCard
        :title="$t('profileInfo')"
        :value="user.name"
        :meta="user.email"
      />
      <BaseInput v-model="user.name" :placeholder="$t('fullName')" />
      <BaseInput v-model="user.email" :placeholder="$t('email')" />
      <BaseButton :text="$t('updateProfile')" @click="updateProfile" />
    </section>

    <!-- Security -->
    <section class="section">
      <StatCard
        :title="$t('accountSecurity')"
        value="********"
        :meta="$t('passwordProtected')"
      />
      <BaseInput type="password" v-model="password.current" :placeholder="$t('currentPassword')" />
      <BaseInput type="password" v-model="password.new" :placeholder="$t('newPassword')" />
      <BaseInput type="password" v-model="password.confirm" :placeholder="$t('confirmPassword')" />
      <BaseButton :text="$t('changePassword')" @click="changePassword" />
    </section>

    <!-- Preferences -->
    <section class="section preferences">
      <div class="pref-item">
        <StatCard
          :title="$t('notifications')"
          :value="preferences.notifications ? $t('enabled') : $t('disabled')"
        />
        <ToggleSwitch v-model="preferences.notifications" />
      </div>

      <div class="pref-item">
        <StatCard
          :title="$t('darkMode')"
          :value="theme.isDark ? $t('enabled') : $t('disabled')"
        />
        <ToggleSwitch v-model="theme.isDark" />
      </div>

      <div class="pref-item">
        <StatCard
          :title="$t('language')"
          :value="languageLabel"
          :meta="$t('selectLanguage')"
        />
        <select v-model="preferences.language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      <div class="pref-item">
        <StatCard
          :title="$t('privacy')"
          :value="preferences.profilePublic ? $t('public') : $t('private')"
        />
        <ToggleSwitch v-model="preferences.profilePublic" />
      </div>

      <div class="pref-item">
        <StatCard
          :title="$t('emailUpdates')"
          :value="preferences.emailUpdates ? $t('subscribed') : $t('unsubscribed')"
        />
        <ToggleSwitch v-model="preferences.emailUpdates" />
      </div>

      <BaseButton :text="$t('savePreferences')" @click="savePreferences" />
    </section>

    <!-- Danger Zone -->
    <section class="section danger-zone">
      <h3>{{ $t("dangerZone") }}</h3>
      <p>{{ $t("The account will be permanently deleted") }}</p>
      <BaseButton
        :text="$t('deleteAccount')"
        class="danger-btn"
        @click="deleteAccount"
      />
    </section>
  </div>
</template>


<script setup>
import { reactive, computed, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import StatCard from "@/components/StatCard.vue";
import BaseInput from "@/components/auth/BaseInput.vue";
import BaseButton from "@/components/auth/BaseButton.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import authService from "@/Services/auth.service";
import { theme } from "@/Stores/Theme.js";

const { locale } = useI18n();

const user = reactive({ name: "", email: "" });

const password = reactive({
  current: "",
  new: "",
  confirm: ""
});

const preferences = reactive({
  notifications: true,
  language: localStorage.getItem("language") || "en",
  profilePublic: true,
  emailUpdates: true
});

const languageLabel = computed(() => {
  return {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German"
  }[preferences.language];
});

watch(
  () => preferences.language,
  (lang) => {
    locale.value = lang;
    localStorage.setItem("language", lang);
  }
);

onMounted(() => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser) {
    user.name = savedUser.name;
    user.email = savedUser.email;
  }
});

async function updateProfile() {
  const updated = await authService.updateProfile({
    name: user.name,
    email: user.email
  });
  localStorage.setItem("user", JSON.stringify(updated));
  alert("Profile updated");
}

function changePassword() {
  if (password.new !== password.confirm) {
    alert("Passwords do not match");
    return;
  }
  alert("Password changed");
}

function savePreferences() {
  localStorage.setItem("preferences", JSON.stringify(preferences));
  alert("Preferences saved");
}

function deleteAccount() {
  if (confirm("This action is irreversible")) {
    alert("Account deleted");
  }
}
</script>


<style>
.settings-page {
  width: 500px;
  margin: auto;
  padding: 10px;
  background: #e0e0e0;
}

.section {
  background: #e0e0e0;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.preferences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

input,
select {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #242222;
  width: auto;
}

.danger-zone .danger-btn {
  background: #ef4444;
  color: white;
}

/* DARK MODE */
.dark .settings-page {
  background: #1f2937;
  color: #f3f4f6;
}

.dark .section {
  background: #374151;
}

.dark input,
.dark select {
  background: #4b5563;
  color: #f3f4f6;
}
</style>
