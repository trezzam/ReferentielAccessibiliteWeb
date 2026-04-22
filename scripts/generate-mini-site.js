const fs = require("fs").promises;
const path = require("path");
const fm = require("front-matter");
const md = require("markdown-it")({ html: true, linkify: true });

const ROOT = path.resolve(__dirname, "..");
const OUT_ROOT = path.join(ROOT, "mini-site");

const LANG_CONFIG = {
    en: {
        label: "English",
        folder: "en",
        sourceFolder: "en",
        siteTitle: "RAWeb mini site",
        criteriaLabels: {
            pageTitle: "Criteria and tests",
            tests: "Tests",
            mapping: "Mapping",
            notes: "Notes and special cases",
            expandAll: "Expand all",
            collapseAll: "Collapse all",
            specialCasesTitle: "Special cases",
            technicalNoteTitle: "Technical note",
            testMethodology: "Test Methodology",
            noMethodology: "No methodology steps available.",
            noMapping: "No mapping data available.",
            noNotes: "No notes or special cases.",
            wcag: "WCAG 2.1",
            techniques: "Techniques",
            norm: "EN 301 549 V3.2.1",
        },
        nav: [
            { file: "index.html", source: "introduction.md", title: "Introduction" },
            { file: "criteres.html", title: "Criteria and tests" },
            { file: "glossaire.html", title: "Glossary" },
            { file: "methodo-test.html", source: "methodologie-de-test.md", title: "Test methodology" },
            { file: "environnement.html", source: "environnement-de-test.md", title: "Test environment" },
            { file: "references.html", source: "references.md", title: "References" },
            { file: "notes-revision.html", source: "notes-de-revision.md", title: "Review notes" },
        ],
    },
    fr: {
        label: "Français",
        folder: "fr",
        sourceFolder: "fr",
        siteTitle: "RAWeb mini site",
        criteriaLabels: {
            pageTitle: "Critères et tests",
            tests: "Tests",
            mapping: "Mapping",
            notes: "Notes and special cases",
            expandAll: "Tout déplier",
            collapseAll: "Tout replier",
            specialCasesTitle: "Cas particuliers",
            technicalNoteTitle: "Note technique",
            testMethodology: "Test Methodology",
            noMethodology: "No methodology steps available.",
            noMapping: "No mapping data available.",
            noNotes: "No notes or special cases.",
            wcag: "WCAG 2.1",
            techniques: "Techniques",
            norm: "EN 301 549 V3.2.1",
        },
        nav: [
            { file: "index.html", source: "introduction.md", title: "Introduction" },
            { file: "criteres.html", title: "Critères et tests" },
            { file: "glossaire.html", title: "Glossaire" },
            { file: "methodo-test.html", source: "methodologie-de-test.md", title: "Méthodologie de test" },
            { file: "environnement.html", source: "environnement-de-test.md", title: "Environnement de test" },
            { file: "references.html", source: "references.md", title: "Références" },
            { file: "notes-revision.html", source: "notes-de-revision.md", title: "Notes de révision" },
        ],
    },
    es: {
        label: "Español",
        folder: "es",
        sourceFolder: "en",
        siteTitle: "RAWeb mini site",
        criteriaLabels: {
            pageTitle: "Criterios y tests",
            tests: "Tests",
            mapping: "Mapping",
            notes: "Notes and special cases",
            expandAll: "Desplegar todo",
            collapseAll: "Replegar todo",
            specialCasesTitle: "Casos particulares",
            technicalNoteTitle: "Nota técnica",
            testMethodology: "Metodología del test",
            noMethodology: "No hay pasos de metodología disponibles.",
            noMapping: "No hay datos de mapping disponibles.",
            noNotes: "No hay notas ni casos particulares.",
            wcag: "WCAG 2.1",
            techniques: "Techniques",
            norm: "EN 301 549 V3.2.1",
        },
        nav: [
            { file: "index.html", source: "introduction.md", title: "Introducción" },
            { file: "criteres.html", title: "Criterios y tests" },
            { file: "glossaire.html", title: "Glosario" },
            { file: "methodo-test.html", source: "methodologie-de-test.md", title: "Metodología de test" },
            { file: "environnement.html", source: "environnement-de-test.md", title: "Entorno de test" },
            { file: "references.html", source: "references.md", title: "Referencias" },
            { file: "notes-revision.html", source: "notes-de-revision.md", title: "Notas de revisión" },
        ],
    },
};

const CSS = `
:root {
  --bg: #ffffff;
  --surface: #f7f7f8;
  --text: #1f2328;
  --muted: #57606a;
  --link: #0969da;
  --border: #d0d7de;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif;
  color: var(--text);
  background: var(--bg);
  line-height: 1.55;
}
a { color: var(--link); text-decoration: none; }
a:hover { text-decoration: underline; }
.layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
}
.sidebar {
  border-right: 1px solid var(--border);
  background: var(--surface);
  padding: 20px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: auto;
}
.brand {
  margin: 0 0 14px;
  font-size: 1.2rem;
}
.nav-section { margin: 18px 0; }
.nav-title {
  margin: 0 0 10px;
  font-size: .78rem;
  text-transform: uppercase;
  letter-spacing: .04em;
  color: var(--muted);
}
.nav-list { list-style: none; margin: 0; padding: 0; }
.nav-list li { margin: 6px 0; }
.main {
  padding: 28px 36px;
  max-width: 1200px;
}
h1, h2, h3, h4 { line-height: 1.25; }
h1 { margin-top: 0; }
article img { max-width: 100%; }
article pre {
  overflow: auto;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #f6f8fa;
}
article code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace;
}
.details {
  border-top: 1px solid var(--border);
  margin-top: 24px;
  padding-top: 16px;
}
.criterion {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px;
  margin: 12px 0;
}
.tests { margin-top: 8px; }
.tests > li { margin-bottom: 10px; }
.muted { color: var(--muted); }
.collapse {
	border: 1px solid var(--border);
	border-radius: 8px;
	margin: 10px 0;
	background: #fff;
}
.collapse > summary {
	cursor: pointer;
	padding: 10px 12px;
	font-weight: 600;
}
.collapse-content {
	padding: 0 12px 12px;
}
.collapse.nested {
	border-color: #e5e7eb;
	margin: 8px 0;
}
.mapping-list {
	margin: 0;
	padding-left: 20px;
}
.mapping-list > li { margin: 8px 0; }
.page-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	margin-bottom: 16px;
}
.page-header h1 {
	margin: 0;
}
.page-actions {
	display: flex;
	gap: 8px;
	margin-left: auto;
}
.page-actions button {
	border: 1px solid var(--border);
	background: #fff;
	border-radius: 6px;
	padding: 8px 12px;
	cursor: pointer;
	font: inherit;
}
.page-actions button:hover {
	background: var(--surface);
}
@media (max-width: 980px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--border); }
  .main { padding: 20px; }
	.page-header {
		flex-direction: column;
		align-items: flex-start;
	}
	.page-actions {
		margin-left: 0;
	}
}
`;

function slugify(value) {
    return (value || "")
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

function getSourceFolder(config) {
    return config.sourceFolder || config.folder;
}

function routeSlug(relativeFile) {
    return relativeFile === "index.html" ? "" : relativeFile.replace(/\.html$/, "");
}

function routePath(config, relativeFile) {
    const slug = routeSlug(relativeFile);
    return slug ? `/${config.folder}/${slug}` : `/${config.folder}`;
}

function toHtml(markdown) {
    return md.render(markdown || "");
}

function toInlineHtml(markdown) {
    return md.renderInline(markdown || "");
}

function buildTechniqueUrl(code) {
    const cleanCode = String(code || "").trim();
    if (!cleanCode) return null;

    const prefix = (cleanCode.match(/^[A-Za-z]+/) || [""])[0].toUpperCase();
    const bucketByPrefix = {
        F: "failures",
        G: "general",
        H: "html",
        ARIA: "aria",
        C: "css",
        SCR: "client-side-script",
        SM: "smil",
        SVR: "server-side-script",
    };

    const bucket = bucketByPrefix[prefix];
    if (!bucket) return null;

    return `https://www.w3.org/WAI/WCAG21/Techniques/${bucket}/${cleanCode}`;
}

function buildWcagScUrl(scLabel) {
    const text = String(scLabel || "").trim();
    if (!text) return null;

    const match = text.match(/^\d+(?:\.\d+)+\s+(.+?)(?:\s+\([A-Z]+\))?$/);
    if (!match) return null;

    const title = match[1]
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    if (!title) return null;

    return `https://www.w3.org/TR/WCAG21/#${title}`;
}

function renderMethodology(methodologyMarkdown, config) {
    if (!methodologyMarkdown || !String(methodologyMarkdown).trim()) {
        return "";
    }

    const html = toHtml(convertLocalLinks(String(methodologyMarkdown), config));
    return linkGlossaryAnchors(html, config);
}

function normalizeLabel(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function parseAnnexeSections(body) {
    const sections = [];
    const regex = /^####\s+(.+)$/gm;
    const matches = [...String(body || "").matchAll(regex)];

    for (let index = 0; index < matches.length; index += 1) {
        const current = matches[index];
        const next = matches[index + 1];
        const start = current.index + current[0].length;
        const end = next ? next.index : String(body || "").length;
        const content = String(body || "").slice(start, end).trim();
        if (!content) continue;
        sections.push({ title: current[1].trim(), content });
    }

    return sections;
}

async function readFirstExistingFile(paths) {
    for (const filePath of paths) {
        try {
            const raw = await fs.readFile(filePath, "utf-8");
            return raw;
        } catch {
        }
    }

    return "";
}

async function loadCriterionNotesByNumber(config, criteriaData) {
    const result = {};
    const sourceFolder = getSourceFolder(config);
    const localizedFolder = config.folder;

    for (const topic of criteriaData.topics || []) {
        for (const entry of topic.criteria || []) {
            const criterion = entry.criterium;
            const fullNumber = criterionNumber(topic.number, criterion.number);
            const annexeCandidates = [];
            if (localizedFolder) {
                annexeCandidates.push(path.join(ROOT, localizedFolder, "rgaa", "criteres", fullNumber, "annexe.md"));
            }
            if (sourceFolder && sourceFolder !== localizedFolder) {
                annexeCandidates.push(path.join(ROOT, sourceFolder, "rgaa", "criteres", fullNumber, "annexe.md"));
            }

            const annexeRaw = await readFirstExistingFile(annexeCandidates);
            const body = annexeRaw ? (fm(annexeRaw).body || "") : "";

            const sections = parseAnnexeSections(body);
            let technical = "";
            let special = "";

            for (const section of sections) {
                const label = normalizeLabel(section.title);
                if (label.includes("technical note") || label.includes("note technique") || label.includes("notes techniques")) {
                    technical = section.content;
                }
                if (label.includes("special case") || label.includes("cas particuliers")) {
                    special = section.content;
                }
            }

            if (technical || special) {
                result[fullNumber] = { technical, special };
            }
        }
    }

    return result;
}

function convertLocalLinks(input, config) {
    if (!input) return input;
    const indexRoute = routePath(config, "index.html");
    const obligationsRoute = routePath(config, "obligations.html");
    const methodoRoute = routePath(config, "methodo-test.html");
    const environmentRoute = routePath(config, "environnement.html");
    const referencesRoute = routePath(config, "references.html");
    const notesRoute = routePath(config, "notes-revision.html");
    const criteriaRoute = routePath(config, "criteres.html");
    const glossaryRoute = routePath(config, "glossaire.html");

    return input
        .replace(/\((?:\.\/)?introduction\.md\)/g, `(${indexRoute})`)
        .replace(/\((?:\.\/)?obligations\.md\)/g, `(${obligationsRoute})`)
        .replace(/\((?:\.\/)?methodologie-de-test\.md\)/g, `(${methodoRoute})`)
        .replace(/\((?:\.\/)?environnement-de-test\.md\)/g, `(${environmentRoute})`)
        .replace(/\((?:\.\/)?references\.md\)/g, `(${referencesRoute})`)
        .replace(/\((?:\.\/)?notes-de-revision\.md\)/g, `(${notesRoute})`)
        .replace(/\((?:\.\/)?rgaa\/criteres\/?\)/g, `(${criteriaRoute})`)
        .replace(/\/(?:en|fr|es)\/raweb1\.1\/criteres\.html/g, criteriaRoute)
        .replace(/\/(?:en|fr|es)\/raweb1\.1\/glossaire\.html/g, glossaryRoute);
}

function linkGlossaryAnchors(html, config) {
    return html.replace(/href="#([^"]+)"/g, `href="${routePath(config, "glossaire.html")}#$1"`);
}

function renderLayout({ config, currentFile, title, bodyHtml }) {
    const languageLinks = Object.entries(LANG_CONFIG)
        .map(([lang, cfg]) => `<li><a href="${routePath(cfg, currentFile)}">${cfg.label}</a></li>`)
        .join("\n");

    const navLinks = config.nav
        .map((item) => {
            const isCurrent = item.file === currentFile;
            const label = isCurrent ? `<strong>${item.title}</strong>` : item.title;
            return `<li>${isCurrent ? label : `<a href="${routePath(config, item.file)}">${label}</a>`}</li>`;
        })
        .join("\n");

    return `<!doctype html>
<html lang="${config.folder}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title} | ${config.siteTitle}</title>
    <style>${CSS}</style>
  </head>
  <body>
    <div class="layout">
      <aside class="sidebar">
        <h1 class="brand">${config.siteTitle}</h1>
        <div class="nav-section">
          <p class="nav-title">${config.label}</p>
          <ul class="nav-list">
            ${navLinks}
          </ul>
        </div>
        <div class="nav-section">
          <p class="nav-title">Languages</p>
          <ul class="nav-list">
            ${languageLinks}
          </ul>
        </div>
      </aside>
      <main class="main">
        <article>
          ${bodyHtml}
        </article>
      </main>
    </div>
		<script>
			document.addEventListener('click', (event) => {
				const action = event.target.closest('[data-details-action]');
				if (!action) return;
				const root = document.querySelector(action.getAttribute('data-details-target') || 'article');
				if (!root) return;
				const shouldOpen = action.getAttribute('data-details-action') === 'expand';
				root.querySelectorAll('details').forEach((node) => {
					node.open = shouldOpen;
				});
			});
		</script>
  </body>
</html>`;
}

async function writePage(config, relativeFile, title, bodyHtml) {
    const langOut = path.join(OUT_ROOT, config.folder);
    await fs.mkdir(langOut, { recursive: true });
    const fullHtml = renderLayout({ config, currentFile: relativeFile, title, bodyHtml });
    await fs.writeFile(path.join(langOut, relativeFile), fullHtml, "utf-8");

    const slug = routeSlug(relativeFile);
    if (slug) {
        const cleanDir = path.join(langOut, slug);
        await fs.mkdir(cleanDir, { recursive: true });
        await fs.writeFile(path.join(cleanDir, "index.html"), fullHtml, "utf-8");
    }
}

async function readTopPageSource(config, sourceFile) {
    const localizedPath = path.join(ROOT, config.folder, sourceFile);
    try {
        const raw = await fs.readFile(localizedPath, "utf-8");
        return { raw, fromLocalized: true };
    } catch {
    }

    const fallbackPath = path.join(ROOT, getSourceFolder(config), sourceFile);
    const raw = await fs.readFile(fallbackPath, "utf-8");
    return { raw, fromLocalized: false };
}

async function readGeneratedJson(config, jsonFileName) {
    const localizedPath = path.join(ROOT, config.folder, "json", jsonFileName);
    try {
        const raw = await fs.readFile(localizedPath, "utf-8");
        return { data: JSON.parse(raw), fromLocalized: true };
    } catch {
    }

    const fallbackPath = path.join(ROOT, getSourceFolder(config), "json", jsonFileName);
    const raw = await fs.readFile(fallbackPath, "utf-8");
    return { data: JSON.parse(raw), fromLocalized: false };
}

async function buildTopPages(config) {
    for (const item of config.nav) {
        if (!item.source) continue;
        const { raw, fromLocalized } = await readTopPageSource(config, item.source);
        const parsed = fm(raw);
        const sourceTitle = fromLocalized ? (parsed.attributes.title || item.title) : item.title;
        const markdown = convertLocalLinks(parsed.body || raw, config);
        const html = toHtml(markdown);
        await writePage(config, item.file, sourceTitle, html);
    }

    const { raw: obligationsRaw, fromLocalized: obligationsLocalized } = await readTopPageSource(config, "obligations.md");
    const obligations = fm(obligationsRaw);
    await writePage(
        config,
        "obligations.html",
        obligationsLocalized ? (obligations.attributes.title || "Obligations") : "Obligaciones",
        toHtml(convertLocalLinks(obligations.body || obligationsRaw, config))
    );
}

function criterionNumber(topicNumber, criterionNumber) {
    return `${topicNumber}.${criterionNumber}`;
}

function renderNotesItems(items, config) {
    if (!Array.isArray(items) || items.length === 0) return "";

    return items
        .map((item) => {
            if (typeof item === "string") {
                return linkGlossaryAnchors(toHtml(item), config);
            }

            if (item && Array.isArray(item.ul)) {
                return `<ul>${item.ul
                    .map((line) => `<li>${linkGlossaryAnchors(toInlineHtml(line.replace(/^-\s*/, "")), config)}</li>`)
                    .join("")}</ul>`;
            }

            return "";
        })
        .join("\n");
}

function renderMapping(referenceEntry, label) {
    if (!referenceEntry || !Array.isArray(referenceEntry) || referenceEntry.length === 0) {
        return `<p class="muted">${label.noMapping}</p>`;
    }

    const wcag = referenceEntry.find((entry) => Array.isArray(entry.wcag))?.wcag || [];
    const techniques = referenceEntry.find((entry) => Array.isArray(entry.techniques))?.techniques || [];
    const norm = referenceEntry.find((entry) => Array.isArray(entry.norm))?.norm || [];

    if (wcag.length === 0 && techniques.length === 0 && norm.length === 0) {
        return `<p class="muted">${label.noMapping}</p>`;
    }

    const groups = [
        { title: label.wcag, values: wcag },
        { title: label.techniques, values: techniques },
        { title: label.norm, values: norm },
    ]
        .filter((group) => group.values.length > 0)
        .map((group) => {
            const items = group.values
                .map((value) => {
                    if (group.title === label.techniques) {
                        const url = buildTechniqueUrl(value);
                        return url
                            ? `<li><a href="${url}" target="_blank" rel="noreferrer noopener">${toInlineHtml(value)}</a></li>`
                            : `<li>${toInlineHtml(value)}</li>`;
                    }

                    if (group.title === label.wcag) {
                        const url = buildWcagScUrl(value);
                        return url
                            ? `<li><a href="${url}" target="_blank" rel="noreferrer noopener">${toInlineHtml(value)}</a></li>`
                            : `<li>${toInlineHtml(value)}</li>`;
                    }

                    return `<li>${toInlineHtml(value)}</li>`;
                })
                .join("");

            return `<li><strong>${group.title}</strong><ul>${items}</ul></li>`;
        })
        .join("");

    return `<ul class="mapping-list">${groups}</ul>`;
}

function renderCriteriaPage(config, criteriaData, methodologiesData, notesByCriterion) {
    const label = config.criteriaLabels || LANG_CONFIG.en.criteriaLabels;

    const sections = criteriaData.topics
        .map((topic) => {
            const criteriaHtml = topic.criteria
                .map((entry) => {
                    const criterion = entry.criterium;
                    const fullNumber = criterionNumber(topic.number, criterion.number);
                    const criterionTitle = linkGlossaryAnchors(toInlineHtml(criterion.title), config);

                    const tests = Object.entries(criterion.tests || {})
                        .sort((a, b) => Number(a[0]) - Number(b[0]))
                        .map(([testNumber, lines]) => {
                            const testId = `test-${fullNumber.replaceAll(".", "-")}-${testNumber}`;
                            const [first, ...rest] = lines;
                            const firstHtml = linkGlossaryAnchors(toInlineHtml(first), config);
                            const methodologyKey = `${fullNumber}.${testNumber}`;
                            const methodologyFromJson = renderMethodology(
                                methodologiesData && methodologiesData[methodologyKey],
                                config
                            );
                            const methodologyHtml = methodologyFromJson
                                || (rest.length
                                    ? `<ul>${rest
                                        .map((line) => `<li>${linkGlossaryAnchors(toInlineHtml(line), config)}</li>`)
                                        .join("")}</ul>`
                                    : `<p class="muted">${label.noMethodology}</p>`);

                            return `
<details class="collapse nested" id="${testId}">
  <summary>${fullNumber}.${testNumber} — ${firstHtml}</summary>
  <div class="collapse-content">
    <details class="collapse nested">
      <summary>${label.testMethodology}</summary>
      <div class="collapse-content">
        ${methodologyHtml}
      </div>
    </details>
  </div>
</details>`;
                        })
                        .join("");

                    const annexeNotes = notesByCriterion && notesByCriterion[fullNumber];
                    const notesParts = [];

                    if (annexeNotes && annexeNotes.special) {
                        notesParts.push(`<h4>${label.specialCasesTitle}</h4>${renderMethodology(annexeNotes.special, config)}`);
                    }
                    if (annexeNotes && annexeNotes.technical) {
                        notesParts.push(`<h4>${label.technicalNoteTitle}</h4>${renderMethodology(annexeNotes.technical, config)}`);
                    }

                    if (notesParts.length === 0) {
                        const fallbackNotes = [renderNotesItems(criterion.particularCases, config), renderNotesItems(criterion.technicalNote, config)]
                            .filter(Boolean)
                            .join("\n");
                        if (fallbackNotes) {
                            notesParts.push(fallbackNotes);
                        }
                    }

                    const notesHtml = notesParts.join("\n");
                    const notesSection = notesHtml
                        ? `<details class="collapse nested">
      <summary>${label.notes}</summary>
      <div class="collapse-content">
        ${notesHtml}
      </div>
    </details>`
                        : "";

                    return `
<details class="collapse" id="crit-${fullNumber.replaceAll(".", "-")}">
  <summary>${fullNumber} — ${criterionTitle}</summary>
  <div class="collapse-content">
    <details class="collapse nested">
      <summary>${label.tests}</summary>
      <div class="collapse-content">
        ${tests || `<p class="muted">${label.noMethodology}</p>`}
      </div>
    </details>
    <details class="collapse nested">
      <summary>${label.mapping}</summary>
      <div class="collapse-content">
        ${renderMapping(criterion.references, label)}
      </div>
    </details>
		${notesSection}
  </div>
</details>`;
                })
                .join("\n");

            return `
<details class="collapse details" id="theme-${topic.number}">
  <summary>${topic.number}. ${topic.topic}</summary>
  <div class="collapse-content">
    ${criteriaHtml}
  </div>
</details>`;
        })
        .join("\n");

    return `
<div class="page-header">
	<h1>${label.pageTitle}</h1>
	<div class="page-actions">
		<button type="button" data-details-action="expand" data-details-target="article">${label.expandAll}</button>
		<button type="button" data-details-action="collapse" data-details-target="article">${label.collapseAll}</button>
	</div>
</div>
${sections}`;
}

function renderGlossaryPage(config, glossaryData) {
    const blocks = glossaryData.glossary
        .map((entry) => {
            const slug = slugify(entry.title);
            const body = convertLocalLinks(entry.body || "", config);
            return `
<section class="details" id="${slug}">
  <h2>${entry.title}</h2>
  ${body}
</section>`;
        })
        .join("\n");

    return `
<h1>Glossary</h1>
${blocks}`;
}

async function buildGeneratedPages(config) {
    const { data: criteriaData } = await readGeneratedJson(config, "criteres.json");
    const { data: methodologiesData } = await readGeneratedJson(config, "methodologies.json");
    const notesByCriterion = await loadCriterionNotesByNumber(config, criteriaData);
    const { data: glossaryData } = await readGeneratedJson(config, "glossaire.json");

    await writePage(
        config,
        "criteres.html",
        (config.criteriaLabels && config.criteriaLabels.pageTitle) || "Criteria and tests",
        renderCriteriaPage(config, criteriaData, methodologiesData, notesByCriterion)
    );
    await writePage(config, "glossaire.html", config.nav.find((item) => item.file === "glossaire.html")?.title || "Glossary", renderGlossaryPage(config, glossaryData));
}

async function buildLanguage(config) {
    await buildTopPages(config);
    await buildGeneratedPages(config);
}

async function main() {
    await fs.mkdir(OUT_ROOT, { recursive: true });
    await Promise.all(Object.values(LANG_CONFIG).map((config) => buildLanguage(config)));

    const homeHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>RAWeb mini site</title>
    <style>body{font-family:system-ui,sans-serif;padding:24px}a{display:block;margin:8px 0}</style>
  </head>
  <body>
    <h1>RAWeb mini site</h1>
		<a href="/en">Open English</a>
		<a href="/fr">Open Français</a>
		<a href="/es">Open Español</a>
  </body>
</html>`;

    await fs.writeFile(path.join(OUT_ROOT, "index.html"), homeHtml, "utf-8");
    console.log("✅ Mini site generated in ./mini-site");
}

main().catch((error) => {
    console.error("❌ Failed to generate mini site:", error);
    process.exit(1);
});
