<script setup>
import { useRoute } from 'vue-router'
import { projects } from '../data'

const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)

if (!project) {
  console.warn('Projekt hittades inte:', route.params.slug)
}
</script>

<template>
  <main v-if="project" class="detail-page page-section" :class="project.color">
    <RouterLink class="back-link" to="/">← Tillbaka till projekt</RouterLink>

    <section class="detail-hero">
      <div>
        <p class="eyebrow">{{ project.number }} / {{ project.type }}</p>
        <h1>{{ project.title }}</h1>
        <p class="detail-lead">{{ project.summary }}</p>
      </div>
      <div class="detail-stamp"><span>CASE<br />STUDY</span></div>
    </section>

    <section class="detail-layout">
      <div class="detail-main">
        <h2>Om projektet</h2>
        <p class="large-copy">{{ project.description }}</p>

        <h2>Vad jag lärde mig</h2>
        <ul class="learn-list">
          <li v-for="item in project.learnings" :key="item">{{ item }}</li>
        </ul>

        <h2>Resultat</h2>
        <div class="result-preview">
          <div class="preview-bar">
            <i></i><i></i><i></i>
            <span>{{ project.title.toLowerCase() }}.local</span>
          </div>
          <div class="preview-content">
            <span class="preview-label">Funktioner</span>
            <ul>
              <li v-for="item in project.highlights" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <h2>Kodexempel</h2>
        <pre class="code-block"><code>{{ project.codeExample }}</code></pre>
      </div>

      <aside class="detail-aside">
        <div class="fact-panel">
          <p class="eyebrow">TEKNIK</p>
          <ul class="tag-list">
            <li v-for="technology in project.stack" :key="technology">{{ technology }}</li>
          </ul>
        </div>
      </aside>
    </section>
  </main>

  <main v-else class="page-section">
    <p>Projektet hittades inte. <RouterLink to="/">Gå tillbaka hem</RouterLink></p>
  </main>
</template>
