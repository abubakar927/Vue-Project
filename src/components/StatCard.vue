<template>
  <div class="card">
    <image v-if="image" :src="imageSrc" alt="Icon" />
    <h3>{{ title }}</h3>
    <p :class="['value', { danger: isDanger }]">{{ value }}</p>
    <span class="meta">{{ meta }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  meta: String,
  isDanger: { type: Boolean, default: false },
  image: { type: String, default: '' }
})
</script>
