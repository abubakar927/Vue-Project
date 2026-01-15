<script setup>
import { useRoute, useRouter } from 'vue-router'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const router = useRouter()
const route = useRoute()

const items = [
  { id: 1, name: 'DashBoard', path: '/dashboard' },
  { id: 2, name: 'About Us', path: '/about' },
  { id: 3, name: 'Contact Us', path: '/contact' }
]

const navigate = (path) => {
  router.push(path)
  emit('close')
}
</script>

<template>
  <div class="Sidebar" :class="{ open: isOpen }">
    <button class="close-btn" @click="emit('close')">✖</button>

    <h2>Dashboard</h2>

    <ul class="ul-items">
      <li
        v-for="item in items"
        :key="item.id"
        class="li-items"
        :class="{ active: route.path === item.path }"
        @click="navigate(item.path)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

