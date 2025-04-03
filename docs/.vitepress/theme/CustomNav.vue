<script setup>
import { useData } from 'vitepress'
const { theme, isDark } = useData()

const logoUrl = isDark.value && theme.logo.dark 
  ? theme.logo.dark 
  : theme.logo.light || theme.logo
</script>

<template>
  <header class="mojs-nav">
    <div class="mojs-nav-title">
      <a href="/" class="mojs-logo-container">
        <img v-if="logoUrl" :src="logoUrl" :alt="theme.logo.alt || 'Logo'" class="mojs-logo">
        <span class="mojs-title">{{ theme.siteTitle }}</span>
      </a>
    </div>
    <nav class="mojs-nav-links">
      <div v-for="item in theme.nav" :key="item.text">
        <a :href="item.link" class="mojs-nav-link">{{ item.text }}</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.mojs-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-nav-bg-color);
  height: var(--vp-nav-height);
}

.mojs-nav-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.mojs-logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.5rem;
}

.mojs-logo {
  height: 32px;
  width: auto;
}

.mojs-nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.mojs-nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s;
}

.mojs-nav-link:hover {
  color: var(--vp-c-brand);
}
</style> 