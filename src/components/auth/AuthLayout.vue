<template>
  <div class="auth-layout">
    <AuthSideImg :image="sideImage" />
    <div class="auth-form">
      <slot />
    </div>
  </div>
</template>

<script>
import AuthSideImg from "./AuthSideImg.vue";
import sideImage from "@/assets/left.png";

export default {
  components: { AuthSideImg },
  data() {
    return { sideImage };
  },
};
</script>

<style scoped>
.auth-layout {
  display: flex;
  height: 100vh;
}
.auth-form {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
