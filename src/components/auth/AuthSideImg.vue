<template>
  <div class="side-img">
    <img :src="image" alt="Auth Side Image" />
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, required: true },
  },
};
</script>

<style scoped>
.side-img {
  display: none; /* hide on mobile */
}

/* Large screens: show side image */
@media (min-width: 768px) {
  .side-img {
    display: block;
    width: 50%;
  }

  .side-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
