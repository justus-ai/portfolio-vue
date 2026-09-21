export const projects = [
  {
    slug: 'todo-lista',
    number: '01',
    title: 'Todo-lista',
    type: 'Fullstack',
    summary: 'En uppgiftsapp där data sparas via ett eget API och kan hanteras direkt från Vue.',
    description: 'Projektet knyter ihop frontend, backend och databas i ett komplett CRUD-flöde. Användaren kan skapa, redigera, ta bort och markera uppgifter som klara.',
    stack: ['Vue 3', 'ASP.NET Core', 'EF Core', 'SQLite'],
    route: '/todo-lista',
    color: 'mint',
    code: 'app.MapPut("/api/todos/{id}", async (int id, TodoItem updatedTodo, TodoDbContext db) => { ... });',
    result: ['Lista med uppgifter', 'Datum för varje uppgift', 'Klar / inte klar', 'Skapa, redigera och ta bort']
  },
  {
    slug: 'blogg',
    number: '02',
    title: 'Bloggplattform',
    type: 'Fullstack',
    summary: 'Ett REST API och en Vue-klient för att läsa och administrera blogginlägg.',
    description: 'Bloggprojektet blev en övning i REST, formulärhantering och tydliga gränser mellan klient och server. SQLite ger beständig lagring.',
    stack: ['Vue 3', 'C#', 'REST API', 'SQLite'],
    route: '/blogg',
    color: 'coral',
    code: 'const response = await fetch(`${API_URL}/${id}`, { method: \'DELETE\' })',
    result: ['Lista med inlägg', 'Detaljvy', 'Redigera innehåll', 'Ta bort inlägg']
  },
  {
    slug: 'webbutik',
    number: '03',
    title: 'Luma Shop',
    type: 'Frontend',
    summary: 'En produktupplevelse med katalog, detaljsida och ett enkelt checkout-flöde.',
    description: 'Här låg fokus på komponenttänk, användarflöden och en genomarbetad visuell riktning. Produkter kan öppnas, granskas och köpas.',
    stack: ['Vue 3', 'Vite', 'Responsive CSS'],
    route: '/webbutik',
    color: 'yellow',
    code: 'const selectedProduct = computed(() => products.find(product => product.id === selectedProductId.value))',
    result: ['Produktkatalog', 'Produktdetalj', 'Kundformulär', 'Responsiv layout']
  },
  {
    slug: 'lilla-torget',
    number: '04',
    title: 'Lilla Torget',
    type: 'Frontend',
    summary: 'En varm restaurangwebb med separata sidor för start, lunchmeny och kontakt.',
    description: 'Ett projekt där innehåll, navigation och visuell identitet fick ta plats. Vue Router används för att skapa tydliga undersidor.',
    stack: ['Vue 3', 'Vue Router', 'CSS'],
    route: '/lilla-torget',
    color: 'blue',
    code: "{ path: '/lunchmeny', name: 'menu', component: MenuView }",
    result: ['Startsida', 'Lunchmeny', 'Kontaktuppgifter', 'Mobilanpassning']
  }
]
