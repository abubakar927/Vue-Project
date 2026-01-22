<script setup>
import StatCard from '@/components/StatCard.vue'
import ApexChart from 'vue3-apexcharts'
const chartSeries = [
  {
    name: 'Persons',
    data: [5, 7, 19, 30]
  },
  {
    name: 'Assigned Tasks',
    data: [20, 30, 50, 90]
  }
]

const chartOptions = {
  chart: {
    toolbar: { show: false }
  },
  title: { text: 'Monthly Progress' },
  xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
  colors: ['#38bdf8', '#22c55e']
}

const stats = {
  users: 1245,
  tasks: 342,
  deadlines: 5,
  reports: 18,
  activity: 72
}
</script>

<template>
  <!-- <Header /> -->
  <section class="Dashboard">
    <h2>Welcome to the DashBoard!</h2>
    <p>Your Display chart is ready to view</p>
    <div>
      <div class="chart">
        <ApexChart 
           type="bar"
           height="350"
           :options="chartOptions"
           :series="chartSeries"
        />
      </div>
    </div>

    <div class="grid">
      <StatCard title="Users" :value="stats.users" meta="users" />
      <StatCard title="Tasks" :value="stats.tasks" meta="Total Assigned Tasks" />
      <StatCard title="Deadlines" :value="stats.deadlines" meta="Due this week" :isDanger="true" />
      <StatCard title="Reports" :value="stats.reports" meta="Generated" />
      <StatCard title="Activity" :value="stats.activity + '%'" meta="Engagement" />
      <StatCard title="Settings" value="⚙" meta="Configuration" />
    </div>
  </section>
</template>
