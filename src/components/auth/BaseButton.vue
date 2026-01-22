<template>
  <button class="base-btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
.base-btn {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background: #0b6efd;
  color: white;
  cursor: pointer;
  justify-content: center;
  justify-items: center;
  margin-left: 28px;
}
.base-btn:hover{
  background: #62a4ee;
}
</style>
