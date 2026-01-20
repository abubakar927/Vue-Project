<template>
  <section class="about-page">

    <!-- About Intro -->
    <div class="about-hero">
      <h1>About Us</h1>
      <p>
        We help creators grow, monetize their content, and access premium tools
        at affordable prices.
      </p>
    </div>

    <!-- About Content -->
    <div class="about-content">
      <div class="about-text">
        <h2>Who We Are</h2>
        <p>
          We are a digital services platform focused on YouTube monetization,
          creator growth, and premium subscriptions like Canva Pro, YouTube Premium,
          Turnitin, and more.
        </p>

        <p>
          Our mission is to empower creators with tools, insights, and services
          that help them scale faster and smarter.
        </p>
      </div>

      <div class="about-image">
        <img src="@/assets/about.jpg" alt="About Us" />
      </div>
    </div>

    <!-- Stats Section -->
    <div class="about-stats">
      <div class="stat">
        <h3>5K+</h3>
        <p>Creators Helped</p>
      </div>
      <div class="stat">
        <h3>50+</h3>
        <p>Premium Tools</p>
      </div>
      <div class="stat">
        <h3>99%</h3>
        <p>Customer Satisfaction</p>
      </div>
    </div>

    <!-- Blog Section -->
    <div class="blog-section">
      <h2>Latest Blogs</h2>

      <div class="blog-grid">
        <div
          class="blog-card"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <img :src="blog.image" alt="Blog Image" />
          <div class="blog-content">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.excerpt }}</p>
            <a href="#" class="read-more">Read More →</a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import blog1 from '@/assets/blog1.jpg'
import blog2 from '@/assets/blog2.jpg'
import blog3 from '@/assets/blog3.jpg'

const blogs = [
  {
    id: 1,
    title: 'How to Get YouTube Monetization Faster',
    excerpt: 'Learn proven strategies to get monetized quickly and grow your channel.',
    image: blog1
  },
  {
    id: 2,
    title: 'Best Tools for YouTube Creators in 2026',
    excerpt: 'Discover premium tools that help creators grow efficiently.',
    image: blog2
  },
  {
    id: 3,
    title: 'Why Canva Pro is a Must for Creators',
    excerpt: 'Design thumbnails and visuals like a professional designer.',
    image: blog3
  }
]
</script>

<style scoped>
.about-page {
  background-color: #f3f3f3;
  color: #000000;
  padding: 40px;
}

/* Hero */
.about-hero {
  text-align: center;
  margin-bottom: 60px;
}

.about-hero h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.about-hero p {
  font-size: 18px;
  color: #000000;
}

/* About Content */
.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
  color: #000000;
}

.about-text {
  flex: 1;
  color: #000000;
}

.about-text h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 15px;
  color: #000000;
}

.about-image {
  flex: 1;
  text-align: center;
}

.about-image img {
  max-width: 100%;
  border-radius: 14px;
}

/* Stats */
.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.stat {
  background: #2948d1;
  padding: 30px;
  border-radius: 14px;
  text-align: center;
}

.stat h3 {
  font-size: 32px;
  color: #f8f8f8;
}

.stat p {
  color: #f0f1f3;
}

/* Blogs */
.blog-section h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.blog-card {
  background: #2948d1;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}

.blog-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.blog-content {
  padding: 20px;
}

.blog-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.blog-content p {
  font-size: 14px;
  color: #cbd5e1;
  margin-bottom: 15px;
}

.read-more {
  color: #000000;
  text-decoration: none;
  font-size: 14px;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
