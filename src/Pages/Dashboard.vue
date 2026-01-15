<template>
  <section class="Dashboard">
    <h2>Welcome to the DashBoard!</h2>
    <p>Your Display chart is ready to view</p>

    <!-- Bar Chart -->
    <div class="chart">
      <apexchart 
        type="bar"
        height="350"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>

    <!-- Stats Cards -->
    <div class="grid">
      <div class="card">
        <h3>Users</h3>
        <p class="value">{{ stats.users }}</p>
        <span class="meta">users</span>
      </div>

      <div class="card">
        <h3>Tasks</h3>
        <p class="value">{{ stats.tasks }}</p>
        <span class="meta">Total Assigned Tasks</span>
      </div>

      <div class="card">
        <h3>Deadlines</h3>
        <p class="value danger">{{ stats.deadlines }}</p>
        <span class="meta">Due this week</span>
      </div>

      <div class="card">
        <h3>Reports</h3>
        <p class="value">{{ stats.reports }}</p>
        <span class="meta">Generated</span>
      </div>

      <div class="card">
        <h3>Activity</h3>
        <p class="value">{{ stats.activity }}%</p>
        <span class="meta">Engagement</span>
      </div>

      <div class="card">
        <h3>Settings</h3>
        <p class="value">⚙</p>
        <span class="meta">Configuration</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const chartSeries = [
  {
    name: 'Persons',
    data: [5, 7, 60, 90]
  },
  {
    name: 'Assigned Tasks',
    data: [20, 30, 50, 70]
  }
]

const chartOptions = {
  chart: {
    toolbar: { show: false }
  },
  title: {
    text: 'Monthly Progress'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  },
  colors: ['#38bdf8', '#22c55e']
}

// Card data (can be replaced by API later)
const stats = {
  users: 1245,
  tasks: 342,
  deadlines: 5,
  reports: 18,
  activity: 72
}
</script>


