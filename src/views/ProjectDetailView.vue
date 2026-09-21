<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '../data'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.slug) ?? projects[0])
</script>

<template>
  <main class="detail-page page-section" :class="project.color">
    <RouterLink class="back-link" to="/#projekt">← Tillbaka till projekt</RouterLink>
    <section class="detail-hero">
      <div><p class="eyebrow">{{ project.number }} / {{ project.type }}</p><h1>{{ project.title }}</h1><p class="detail-lead">{{ project.summary }}</p></div>
      <div class="detail-stamp"><span>CASE<br />STUDY</span></div>
    </section>

    <section class="detail-layout">
      <div class="detail-main">
        <h2>Om projektet</h2>
        <p class="large-copy">{{ project.description }}</p>
        <h2>Resultat</h2>
        <div class="result-preview"><div class="preview-bar"><i></i><i></i><i></i><span>{{ project.title.toLowerCase() }}.local</span></div><div class="preview-content"><span class="preview-label">LIVE RESULTAT</span><strong>{{ project.title }}</strong><div class="preview-lines"><i></i><i></i><i></i></div><ul><li v-for="item in project.result" :key="item">{{ item }}</li></ul></div></div>
      </div>
      <aside class="detail-aside"><div class="fact-panel"><p class="eyebrow">TEKNIK</p><ul class="tag-list"><li v-for="technology in project.stack" :key="technology">{{ technology }}</li></ul></div><div class="fact-panel"><p class="eyebrow">KODEEXEMPEL</p><pre><code>{{ project.code }}</code></pre></div></aside>
    </section>
  </main>
</template>
