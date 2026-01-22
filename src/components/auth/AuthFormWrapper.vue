<template>
  <div class="form-wrapper">
    <AuthLogo />
    <h3>{{ title }}</h3>
    <p>{{ subtitle }}</p>
    <slot />
  </div>
</template>

<script>
import AuthLogo from "./AuthLogo.vue";

export default {
  components: { AuthLogo },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.form-wrapper {
  width: 320px;
  justify-content: center;
  justify-items: center;
  
}
h3 {
  margin-top: 10px;
  color: black;
  margin-left:28px;
  
}
p {
  margin-bottom: 20px;
  color: rgb(0, 0, 0);
  margin-left:28px;
}
</style>
