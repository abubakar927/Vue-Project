<template>
  <div class="project-card">
    <span class="tag" :class="project.tag.toLowerCase().replace(' ', '-')">
      {{ project.tag }}
    </span>

    <h3>{{ project.title }}</h3>
    <p v-if="project.description">{{ project.description }}</p>

    <div class="card-footer">
      <div class="stats">
        <span v-if="project.comments">💬 {{ project.comments }}</span>
        <span v-if="project.attachments">📎 {{ project.attachments }}</span>
        <span v-if="project.likes">❤️ {{ project.likes }}</span>
      </div>

      <span v-if="project.status" class="status done">
        ✔ {{ project.status }}
      </span>
    </div>

    <div class="card-bottom">
      <div class="avatars">
        <span
          v-for="(color, i) in project.users"
          :key="i"
          class="avatar"
          :style="{ backgroundColor: color }"
        />
      </div>

      <span v-if="project.date" class="date">{{ project.date }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>

<style>
.project-card {
  background: #e6e1e1;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.project-card h3 {
  font-size: 16px;
  margin: 10px 0 6px;
}

.project-card p {
  font-size: 13px;
  color: #121213;
}

.tag {
  display: inline-block;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.ui-design {
  background: #ccd5f3;
  color: #4338ca;
}

.ux-writing {
  background: #f7d0d0;
  color: #991b1b;
}

.research {
  background: #cdc5ec;
  color: #6d28d9;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 13px;
  color: #242b3d;
}

.status.done {
  color: #16a34a;
  font-weight: 500;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
}

.avatars {
  display: flex;
}

.avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin-right: -6px;
  border: 2px solid #fff;
}

.date {
  font-size: 12px;
  color: #858e9c;
}
</style>
