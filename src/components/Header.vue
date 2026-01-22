<template>
  <header class="dashboard-header">
    <h1>Dashboard</h1>

    <div class="header-icons">
      <img src="../assets/notiicon.png" alt="Notifications" class="icon" />

      <!-- Profile Icon / Avatar -->
      <div class="profile-wrapper" @click="toggleDropdown">
        <img
          v-if="userStore.profileImage"
          :src="userStore.profileImage"
          alt="Profile"
          class="profile-avatar"
        />
        <img
          v-else
          src="../assets/profileicon.png"
          alt="Profile"
          class="profile-avatar"
        />

        <!-- Dropdown -->
        <div v-if="dropdownOpen" class="profile-dropdown">
          <ul>
            <li>
              <router-link
                to="/profile"
                class="dropdown-link"
                active-class="active"
                @click="closeDropdown"
              >
                My Profile
              </router-link>
            </li>

            <li>
              <router-link
                to="/settings"
                class="dropdown-link"
                active-class="active"
                @click="closeDropdown"
              >
                Settings
              </router-link>
            </li>

            <li>
              <router-link
                to="/login"
                class="dropdown-link logout"
                @click="closeDropdown"
              >
                Logout
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/Stores/UserStore";

const dropdownOpen = ref(false);
const userStore = useUserStore();

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function closeDropdown() {
  dropdownOpen.value = false;
}
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 30px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon {
  width: 32px;
  height: 32px;
}

/* Avatar */
.profile-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid #ddd;
}

.profile-wrapper {
  position: relative;
}

/* Dropdown */
.profile-dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 100;
}

.profile-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 10px 0;
}

.dropdown-link {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
  transition: background 0.2s, color 0.2s;
}

.dropdown-link:hover {
  background-color: #f0f0f0;
}

.dropdown-link.active {
  background-color: #e8f0ff;
  color: #0b6efd;
  font-weight: bold;
}

.logout {
  color: #dc2626;
}

/* Mobile */
@media (max-width: 480px) {
  .dashboard-header {
    padding: 6px 20px;
  }

  .profile-avatar {
    width: 36px;
    height: 36px;
  }

  .profile-dropdown {
    min-width: 120px;
  }
}
</style>
