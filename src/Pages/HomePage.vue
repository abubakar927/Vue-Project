<template>
  <div class="home-page">
    <!-- <Header /> -->

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Grow Your YouTube Channel & Access Premium Tools</h1>
        <p>We provide YouTube monetization services and subscriptions to CanvaPro, YouTubePro, and more.</p>
        <a href="#services" class="btn-primary">Get Started</a>
      </div>
      <div class="hero-image">
        <img src="../assets/youtubePro.png" alt="">
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <h2>Our Services</h2>
      <div class="service-grid">
        <Card 
          title="YouTube Monetization" 
          value="🚀" 
          meta="Grow & Monetize Your Channel" 
          :image="monetizationImg"
        />
        <Card 
          title="CanvaPro Subscription" 
          value="🎨" 
          meta="Design Like a Pro" 
          :image="canvaProImg"
        />
        <Card 
          title="YouTubePro Subscription" 
          value="📈" 
          meta="Analytics & Growth" 
          :image="youtubeProImg" 
        />
        <Card 
          title="Other Tools" 
          value="⚡" 
          meta="All Premium Tools" 
          :image="turnitinImg" 
        />
      </div>
    </section>

    <!-- Call To Action -->
    <section class="cta">
      <h2>Ready to Upgrade Your Channel?</h2>
      <p>Start today and get instant access to all the tools and services.</p>
      <a href="/signup" class="btn-primary">Sign Up Now</a>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
import Card from '@/components/StatCard.vue'
import monetizationImg from '@/assets/monetization.jpg'
import canvaProImg from '@/assets/canvapro.jpg'
import youtubeProImg from '@/assets/youtubepro.png'
import turnitinImg from '@/assets/turnitin.jpg'

</script>

<style scoped>
/* General Homepage Styles */
.home-page {
  font-family: Arial, sans-serif;
  background-color: #0f172a;
  color: #fff;
}

/* Hero Section */
.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #38bdf8, #020617);
  border-radius: 10px;
}

.hero-content {
  flex: 1 1 400px;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.btn-primary {
  background-color: #ef4444;
  color: #fff;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #dc2626;
}

.hero-image {
  flex: 1 1 400px;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  border-radius: 12px;
}

/* Services Section */
.services {
  padding: 60px 40px;
  text-align: center;
}

.services h2 {
  font-size: 32px;
  margin-bottom: 40px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  cursor: pointer;
}

/* CTA Section */
.cta {
  padding: 60px 40px;
  background-color: #1e293b;
  text-align: center;
}

.cta h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.cta p {
  margin-bottom: 30px;
}
</style>
