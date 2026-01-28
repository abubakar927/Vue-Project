<template>
  <div class="Sprint">

    <!-- Header -->
    <div class="sprint-top">
      <div class="sprint-title-row">
          <h1 class="sprint-title">Sprint Name</h1>
          <span class="status-badge">Active</span>
      </div>

      <BaseButton text="+ New Sprint" />
    </div>

    <!-- Top Stats -->
    <div class="stats-row">
      <StatCard title="Duration" value="2 Weeks" meta="Jan 15 - Jan 29" />
      <StatCard title="Team Capacity" value="04" meta="Members" />
      <StatCard title="Committed Story Points" value="24" meta="Total" />
    </div>

    <!-- Middle Section -->
    <div class="middle-grid">

      <!-- Sprint Goals -->
      <div class="card goals">
        <h3>Sprint Goals</h3>
        <p>Create initial product structure and user authentication flow</p>
      </div>

      <!-- Resources Engage -->
      <div class="resource-card">
        <h3 class="card-title">Resources Engage</h3>

        <div class="resource-list">
          <div class="resource-item" v-for="(user, i) in resources" :key="i">
            <div class="resource-header">
              <div class="resource-user">
               <img :src="user.avatar" />
               <span>{{ user.name }}</span>
               </div>
              <span class="resource-percent">{{ user.percent }}%</span>
            </div>
            <div class="progress-track">
                <div
                 class="progress-fill"
                  :style="{ width: user.percent + '%' }"
                ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Board -->
    <div class="board">

      <div class="column">
        <h4>TO DO</h4>
        <div class="task" v-for="n in 3" :key="n">
          <h5>Task Name</h5>
          <p>Neque porro quisquam est qui dolorem ipsum</p>
        </div>
      </div>

      <div class="column">
        <h4>IN PROGRESS</h4>
        <div class="task" v-for="n in 2" :key="n">
          <h5>Task Name</h5>
          <p>Neque porro quisquam est qui dolorem ipsum</p>
        </div>
      </div>

      <div class="column">
        <h4>DONE</h4>
        <div class="task" v-for="n in 2" :key="n">
          <h5>Task Name</h5>
          <p>Neque porro quisquam est qui dolorem ipsum</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import StatCard from "@/components/StatCard.vue";
import BaseButton from "@/components/auth/BaseButton.vue";

const resources = [
  { name: "Daniel", percent: 48, avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Joseph", percent: 82, avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "John", percent: 30, avatar: "https://i.pravatar.cc/40?img=4" },
];

</script>

<style scoped>
.Sprint {
  padding: 24px;
}

/* Header */ 

.sprint-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.sprint-title {
  font-size: 28px;
  font-weight: 700;
}

.sprint-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-badge {
  background: #22c55e;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 999px;
  line-height: 1;
}

/* Stats */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

/* Middle */
.middle-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Cards */
.card {
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  background: rgb(151, 175, 196);
}

/* Resources */
.resource-card {
  background: rgb(151, 175, 196);
  border: 1px solid #0f172a;
  border-radius: 12px;
  padding: 16px;
  height: 75%;
  width: auto;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  
}

.resource-list {
  display: flex;
  flex-direction:  column;
  gap: 10px;
}

.resource-item {
  display: flex;
  flex-direction: row;
  gap: 6px;
}
.resource-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.resource-user {
  display: flex;
  align-items: center;
  gap: 8px;
}
.resource-user img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}
.resource-user span {
  font-size: 13px;
  font-weight: 500;
}
.resource-percent {
  font-size: 13px;
  font-weight: 500;
}
.progress-track {
  width: 100px;
  height: 6px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #22c55e; /* green bar */
  border-radius: 4px;
}

.bar {
  height: auto;
  background: #22c55e;
}

/* Board */
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.column {
  background: #2d4169;;
  padding: 12px;
  border-radius: 12px;
}

.task {
  background: rgb(151, 175, 196);
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.task:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

.dark .Sprint {
  background-color: #111827;
  color: #f3f4f6;
}

.dark .sprint-title,
.dark .sprint-top
{
     color: rgb(255, 253, 253);
}

.dark .card,
.dark .resource-card {
  background: rgb(151, 175, 196);
  color: black;
}

.dark .column {
  background: #2d4169;
 
}

.dark .task{
  color: #0f172a;
}
</style>
