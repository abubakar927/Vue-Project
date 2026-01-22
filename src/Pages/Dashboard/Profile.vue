<template>
  <div class="profile-page">
    <h2>My Profile</h2>

    <!-- Avatar Section -->
    <div class="avatar-section">
      <img
        :src="userStore.profileImage || defaultAvatar"
        alt="Profile"
        class="profile-avatar"
      />

      <div class="avatar-actions">
        <label class="upload-btn">
          Change Photo
          <input type="file" accept="image/*" @change="uploadImage" hidden />
        </label>

        <button
          v-if="userStore.profileImage"
          class="remove-btn"
          @click="removeAvatar"
        >
          Remove Photo
        </button>
      </div>
    </div>

    <!-- Profile Info -->
    <div class="form-section">
      <BaseInput v-model="userStore.name" placeholder="Full Name" />
      <BaseInput v-model="userStore.email" placeholder="Email Address" />
      <BaseButton text="Save Changes" @click="saveProfile" />
    </div>
  </div>
</template>

<script setup>
import BaseInput from "@/components/auth/BaseInput.vue";
import BaseButton from "@/components/auth/BaseButton.vue";
import defaultAvatar from "@/assets/profileicon.png";
import { useUserStore } from "@/Stores/UserStore";

const userStore = useUserStore();

function uploadImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please upload an image file");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    userStore.setAvatar(reader.result); // 🔥 instant update
  };
  reader.readAsDataURL(file);
}

function removeAvatar() {
  userStore.removeAvatar(); // 🔥 instant update
}

function saveProfile() {
  userStore.saveProfile();
  alert("Profile updated successfully!");
}
</script>

<style scoped>
.profile-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  color: black;
}

h2 {
  margin-bottom: 20px;
}

/* Avatar */
.avatar-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.profile-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

/* Avatar buttons */
.avatar-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.upload-btn {
  background: #0b6efd;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
}

.remove-btn {
  background: #dc2626;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.remove-btn:hover {
  background: #b91c1c;
}

/* Form */
.form-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Mobile */
@media (max-width: 480px) {
  .avatar-section {
    flex-direction: column;
    align-items: center;
  }

  .avatar-actions {
    width: 100%;
    align-items: center;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
  }
}
</style>
