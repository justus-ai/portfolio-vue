<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">J</span>
        <span>Justus / portfolio</span>
      </RouterLink>
      <nav aria-label="Huvudnavigation">
        <RouterLink to="/">Start</RouterLink>
        <a href="#projekt">Projekt</a>
        <a href="mailto:justus@example.com">Kontakt</a>
      </nav>
    </header>

    <RouterView />

    <footer class="site-footer">
      <span>Byggd med Vue 3 och nyfikenhet.</span>
      <span>© 2026 Justus</span>
    </footer>
  </div>
</template>
