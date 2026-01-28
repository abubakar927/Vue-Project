<template>
  <div class="projects-page">
       <!-- Page header -->
        <div class="projects-header">
          <h2>All Projects</h2>
           <button class="new-project-btn">New Project</button>
        </div>

      <!-- Projects Grid -->
        <div class="projects-grid">
            <div
            class="project-card-wrapper"
            v-for="project in projects"
            :key="project.id"
            >
               <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'Moodboards',
    description: 'Create a consistent look and feel both on web and mobile.',
    tag: 'UI Design',
    comments: 2,
    attachments: 2,
    likes: 10,
    date: 'Nov 23',
    users: ['#9b8cff', '#ffd6a5', '#caffbf']
  },
  {
    id: 2,
    title: 'Copywriting of the app',
    description: 'Composing words to provide people with decision-making clarity.',
    tag: 'UX Writing',
    comments: 8,
    date: 'Nov 30',
    users: ['#ffd6a5', '#caffbf']
  },
  {
    id: 3,
    title: 'Design System',
    description: 'Create a consistent look and feel both on web and mobile.',
    tag: 'UI Design',
    comments: 10,
    likes: 10,
    date: 'Nov 30',
    users: ['#9b8cff', '#ffd6a5', '#caffbf']
  },
  {
    id: 4,
    title: 'Brainstorming',
    description: '',
    tag: 'Research',
    status: 'Done',
    comments: 21,
    users: ['#9b8cff', '#ffd6a5', '#caffbf']
  }
]
</script>

<style>
.projects-page {
  padding: 24px;
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  color: black;
}

.projects-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: black;
  
}

.project-card-wrapper {
  transition: transform 0.2s ease;
  color: rgb(0, 0, 0);
}

.project-card-wrapper:hover {
  transform: translateY(-4px);
}

.new-project-btn {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  color: black;
}

.dark .projects-grid{
    color: black;
    
}

.dark .projects-header,
.dark .projects-header h2
{
    color: #fff;
}

.dark .new-project-btn {
  background: #2563eb;
  border-color: rgb(132, 187, 235);
}

.dark .card {
    background-color: #2563eb;
}


</style>
