<script setup>
import { projects } from '../data'
</script>

<template>
  <main>
    <section class="hero page-section">
      <div class="hero-copy">
        <p class="eyebrow">WEBBUTVECKLARE / PORTFOLIO 2026</p>
        <h1>Jag bygger saker som känns <em>enkla att använda.</em></h1>
        <p class="hero-lead">Jag heter Justus och har under kursen utforskat hela vägen från idé och gränssnitt till API, databas och färdig applikation.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#projekt">Se mina projekt <span>↓</span></a>
          <a class="text-link" href="mailto:justus@example.com">Säg hej →</a>
        </div>
      </div>
      <div class="hero-card" aria-label="Profilkort">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="hero-initial">J<span>.</span></div>
        <p>Frontend<br />Backend<br />Databaser</p>
      </div>
    </section>

    <section class="statement-band page-section">
      <p class="eyebrow">MIN RIKTNING</p>
      <p class="statement">Det roligaste är när struktur och form möts: att lösa ett riktigt problem, göra flödet begripligt och sedan bygga en stabil teknisk grund bakom.</p>
    </section>

    <section id="projekt" class="projects-section page-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">URVAL AV KURSARBETEN</p>
          <h2>Projekt jag tar med mig</h2>
        </div>
        <p>Varje projekt har en egen sida med beskrivning, teknik, kodexempel och resultat.</p>
      </div>

      <div class="project-grid">
        <RouterLink v-for="project in projects" :key="project.slug" :to="project.route" class="project-card" :class="project.color">
          <div class="project-card-top"><span>{{ project.number }}</span><span>{{ project.type }}</span></div>
          <div class="project-visual"><div class="visual-window"><i></i><i></i><i></i><strong>{{ project.title }}</strong></div></div>
          <div class="project-card-copy"><h3>{{ project.title }}</h3><p>{{ project.summary }}</p><span class="card-link">Läs projektet ↗</span></div>
        </RouterLink>
      </div>
    </section>

    <section class="skills-band page-section">
      <div><p class="eyebrow">VERKTYGSLÅDA</p><h2>Från första skiss till fungerande produkt.</h2></div>
      <div class="skill-list"><span>Vue JS</span><span>JavaScript</span><span>C# / .NET</span><span>REST API</span><span>Entity Framework</span><span>SQLite</span><span>Responsive CSS</span><span>Git & GitHub</span></div>
    </section>
  </main>
</template>
