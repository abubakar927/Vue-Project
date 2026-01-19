<script setup>
const items = [
  { id: 1, name: 'Dashboard', path: '/dashboard' },
  { id: 2, name: 'Resources', path: '/resources' },
  { id: 3, name: 'Sprints', path: '/sprints' }
]
</script>

<template>
  <aside class="Sidebar">
    <h2 class="title">Company Name</h2>

    <ul class="ul-items">
      <li class="li-items" v-for="item in items" :key="item.id">
        <router-link
          :to="item.path"
          class="li-items"
          active-class="active"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>
