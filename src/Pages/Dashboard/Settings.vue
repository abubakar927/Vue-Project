<template>
  <div class="settings-page">
    <h2>Settings</h2>

    <!-- Profile Info Section -->
    <section class="section">
      <StatCard
        title="Profile Info"
        :value="user.name"
        :meta="user.email"
      />
      <BaseInput v-model="user.name" placeholder="Full Name" />
      <BaseInput v-model="user.email" placeholder="Email Address" />
      <BaseButton text="Update Profile" @click="updateProfile" />
    </section>

    <!-- Account Security Section -->
    <section class="section">
      <StatCard
        title="Account Security"
        value="********"
        meta="Password Protected"
      />
      <BaseInput type="password" v-model="password.current" placeholder="Current Password" />
      <BaseInput type="password" v-model="password.new" placeholder="New Password" />
      <BaseInput type="password" v-model="password.confirm" placeholder="Confirm Password" />
      <BaseButton text="Change Password" @click="changePassword" />
    </section>

    <!-- Preferences Section -->
    <section class="section preferences">
      <div class="pref-item">
        <StatCard
          title="Notifications"
          :value="preferences.notifications ? 'Enabled' : 'Disabled'"
          meta="Toggle Notifications"
        />
        <div class="toggle-wrapper">
          <ToggleSwitch v-model="preferences.notifications" />
        </div>
      </div>

      <div class="pref-item">
        <StatCard
          title="Dark Mode"
          :value="preferences.darkMode ? 'Enabled' : 'Disabled'"
          meta="Toggle Dark Mode"
        />
        <div class="toggle-wrapper">
          <ToggleSwitch v-model="preferences.darkMode" />
        </div>
      </div>

      <div class="pref-item">
        <StatCard
          title="Language"
          :value="preferences.language"
          meta="Select Preferred Language"
        />
        <select v-model="preferences.language">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>

      <div class="pref-item">
        <StatCard
          title="Privacy"
          :value="preferences.profilePublic ? 'Public' : 'Private'"
          meta="Profile Visibility"
        />
        <div class="toggle-wrapper">
          <ToggleSwitch v-model="preferences.profilePublic" />
        </div>
      </div>

      <div class="pref-item">
        <StatCard
          title="Email Updates"
          :value="preferences.emailUpdates ? 'Subscribed' : 'Unsubscribed'"
          meta="Receive Emails"
        />
        <div class="toggle-wrapper">
          <ToggleSwitch v-model="preferences.emailUpdates" />
        </div>
      </div>

      <BaseButton text="Save Preferences" @click="savePreferences" />
    </section>

    <!-- Danger Zone Section -->
    <section class="section danger-zone">
      <h3>Danger Zone</h3>
      <p>Deleting your account is permanent. All your data will be lost.</p>
      <BaseButton text="Delete Account" @click="deleteAccount" class="danger-btn"/>
    </section>

  </div>
</template>

<script setup>
import { reactive } from "vue";
import StatCard from "@/components/StatCard.vue";
import BaseInput from "@/components/auth/BaseInput.vue";
import BaseButton from "@/components/auth/BaseButton.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";

// Reactive state
const user = reactive({ name: "John Doe", email: "john@example.com" });
const password = reactive({ current: "", new: "", confirm: "" });
const preferences = reactive({
  notifications: true,
  darkMode: false,
  language: "English",
  profilePublic: true,
  emailUpdates: true
});

// Methods
function updateProfile() {
  console.log("Profile updated", user);
}

function changePassword() {
  if (password.new !== password.confirm) return alert("Passwords do not match");
  console.log("Password changed", password);
}

function savePreferences() {
  console.log("Preferences saved", preferences);
}

function deleteAccount() {
  if(confirm("Are you sure you want to delete your account? This action is irreversible.")) {
    console.log("Account deleted");
  }
}
</script>

<style scoped>
.settings-page {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: black;
}

.section {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: black;
}

.preferences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.pref-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toggle-wrapper {
  margin-top: 5px;
}

.danger-zone .danger-btn {
  background-color: #ef4444;
  color: #fff;
}

.danger-zone .danger-btn:hover {
  background-color: #dc2626;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .settings-page {
    padding: 10px;
  }
  h2 {
    font-size: 24px;
  }
  .section {
    padding: 15px;
  }
  .preferences {
    grid-template-columns: 1fr;
  }
  .pref-item {
    gap: 8px;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 20px;
  }
  .section {
    padding: 12px;
  }
  .toggle-wrapper {
    margin-top: 8px;
  }
  select {
    padding: 8px;
    font-size: 0.9rem;
  }
}
</style>
