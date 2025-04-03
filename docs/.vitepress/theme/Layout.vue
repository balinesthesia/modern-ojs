<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import CustomNav from './CustomNav.vue'

const { Layout } = DefaultTheme
const { site, theme } = useData()
</script>

<template>
  <Layout>
    <template #nav-bar>
      <CustomNav />
    </template>
    
    <!-- Override nav-bar-title-before to hide VitePress logo -->
    <template #nav-bar-title-before>
      <span class="site-title">{{ theme.siteTitle }}</span>
    </template>
    
    <!-- Override nav-bar-title to hide VitePress logo -->
    <template #nav-bar-title>
      <!-- intentionally empty -->
    </template>
    
    <!-- Override nav-bar-content-after to hide appearance switch -->
    <template #nav-bar-content-after>
      <!-- intentionally empty -->
    </template>
  </Layout>
</template>

<style>
.site-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

/* Hide any remaining VitePress branding */
.VPNavBarTitle .VPImage,
.VPNavBarTitle .text,
.VPNavBarAppearance,
.VPSwitch,
.VPSwitchAppearance {
  display: none !important;
}
</style> 