const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let activeTag = "all";
let filtered = [];
let currentIdx = 0;
let currentMonthKey = null; // "YYYY-MM"

// Most important tags first — edit to set your priority
const tagOrder = ["Game Dev", "Art", "Life", "Journal", "Blender", "Godot"];

// ── date helpers ──────────────────────────────────────────
function parseDate(d) {
    const [y, m, day] = d.split("-");
    return { year: y, month: m, day: parseInt(day) };
}

function formatDate(d) {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

// ── tags ─────────────────────────────────────────────────
function allTags() {
    const s = new Set();
    entries.forEach(e => (e.tags || []).forEach(t => s.add(t)));
    return [...s].sort((a, b) => {
        const ai = tagOrder.indexOf(a), bi = tagOrder.indexOf(b);
        if (ai === -1 && bi === -1) return a.localeCompare(b);
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
    });
}

function filterBySearch(val) {
    const pill = document.getElementById("active-tag-pill");
    if (!val.trim()) {
        activeTag = "all";
        pill.textContent = "all";
    } else {
        const match = allTags().find(t => t.toLowerCase().startsWith(val.toLowerCase()));
        activeTag = match || "__none__";
        pill.textContent = match || val;
    }
    const months = getMonthKeys();
    currentMonthKey = months[0] || null;
    render();
}

// ── data helpers ─────────────────────────────────────────
function getAllFiltered() {
    return entries
        .filter(e => activeTag === "all" || (e.tags || []).includes(activeTag))
        .slice().sort((a, b) => b.date.localeCompare(a.date));
}

function getMonthKeys() {
    const seen = new Set();
    const keys = [];
    getAllFiltered().forEach(e => {
        const { year, month } = parseDate(e.date);
        const k = year + "-" + month;
        if (!seen.has(k)) { seen.add(k); keys.push(k); }
    });
    return keys; // newest first
}

function toggleMonthPanel() {
    const panel = document.getElementById("month-panel");
    if (panel.classList.contains("on")) {
        closeMonthPanel();
    } else {
        panel.classList.add("on");
        document.getElementById("month-panel-overlay").classList.add("on");
        document.getElementById("month-panel-btn").classList.add("open");
    }
}

function closeMonthPanel() {
    document.getElementById("month-panel").classList.remove("on");
    document.getElementById("month-panel-overlay").classList.remove("on");
    document.getElementById("month-panel-btn").classList.remove("open");
}

// ── sidebar ──────────────────────────────────────────────
function buildSidebar() {
    const nav = document.getElementById("month-nav");
    const all = getAllFiltered();

    const byYear = {};
    all.forEach(e => {
        const { year, month } = parseDate(e.date);
        if (!byYear[year]) byYear[year] = {};
        if (!byYear[year][month]) byYear[year][month] = 0;
        byYear[year][month]++;
    });

    const html = Object.keys(byYear).sort().reverse().map(year => {
        const months = Object.keys(byYear[year]).sort().reverse();
        return `<div class="nav-year">
            <div class="nav-year-label">${year}</div>
            ${months.map(m => {
            const k = year + "-" + m;
            const active = k === currentMonthKey ? " nav-active" : "";
            return `<div class="nav-month${active}" onclick="goToMonth('${k}')">
                    ${MONTHS[parseInt(m) - 1].slice(0, 3)}
                    <span class="nav-count">${byYear[year][m]}</span>
                </div>`;
        }).join("")}
        </div>`;
    }).join("");

    // desktop sidebar
    nav.innerHTML = html;

    // mobile panel — sync the same html if element exists
    const mobileNav = document.getElementById("month-nav-mobile");
    if (mobileNav) mobileNav.innerHTML = html;
}

function goToMonth(key) {
    currentMonthKey = key;
    window.scrollTo(0, 0);
    closeMonthPanel();
    render();
}

// ── render ───────────────────────────────────────────────
function render() {
    const months = getMonthKeys();

    if (!currentMonthKey || !months.includes(currentMonthKey)) {
        currentMonthKey = months[0] || null;
    }

    buildSidebar();

    const content = document.getElementById("content");

    if (!months.length || !currentMonthKey) {
        content.innerHTML = `<p style="color:#bbb;padding:4rem 0;text-align:center">no entries</p>`;
        document.getElementById("pager").innerHTML = "";
        return;
    }

    const [y, m] = currentMonthKey.split("-");
    const all = getAllFiltered();
    filtered = all.filter(e => {
        const p = parseDate(e.date);
        return p.year === y && p.month === m;
    });

    const cards = filtered.map((e, i) => `
        <div class="card" onclick="openLb(${i})">
            <img src="${e.path}" alt="" loading="lazy" onerror="this.src='img/NoImage.png'">
            <div class="card-foot">
                <span class="card-day">${parseDate(e.date).day}</span>
                <div class="card-dots">${(e.tags || []).map(() => `<span class="dot"></span>`).join("")}</div>
            </div>
        </div>`).join("");

    content.innerHTML = `<div class="month-block">
        <div class="month-title">${MONTHS[parseInt(m) - 1]}<br><span class="month-year-label">${y}</span></div>
        <div class="grid">${cards}</div>
    </div>`;

    // pager
    const idx = months.indexOf(currentMonthKey);
    const prevKey = idx < months.length - 1 ? months[idx + 1] : null;
    const nextKey = idx > 0 ? months[idx - 1] : null;

    function labelFor(key) {
        const [yr, mo] = key.split("-");
        return `${MONTHS[parseInt(mo) - 1]} ${yr}`;
    }

    document.getElementById("pager").innerHTML = `
        <div class="pager-inner">
            <button class="pager-btn" onclick="goToMonth('${nextKey}')" ${!nextKey ? "disabled" : ""}>
                ← ${nextKey ? labelFor(nextKey) : ""}
            </button>

            <span class="pager-info">${filtered.length} entr${filtered.length === 1 ? "y" : "ies"}</span>

            <button class="pager-btn" onclick="goToMonth('${prevKey}')" ${!prevKey ? "disabled" : ""}>
                ${prevKey ? labelFor(prevKey) : ""} →
            </button>            
        </div>`;
}

// ── lightbox ─────────────────────────────────────────────
function openLb(i) {
    currentIdx = i;
    const e = filtered[i];
    document.getElementById("lb-img").src = e.path;
    document.getElementById("lb-img").onerror = function () { this.src = 'img/NoImage.png'; };
    document.getElementById("lb-date").textContent = formatDate(e.date);
    document.getElementById("lb-file").textContent = e.path.split("/").pop();
    document.getElementById("lb-tags").innerHTML = (e.tags || []).map(t => `<span class="lb-tag">${t}</span>`).join("") || `<span style="color:#ccc">—</span>`;
    document.getElementById("lb-notes").textContent = e.notes || "";
    document.getElementById("lb-notes-wrap").style.display = e.notes ? "block" : "none";
    const links = e.links || [];
    document.getElementById("lb-links").innerHTML = links.map(l => `<a href="${l}" target="_blank">${l}</a>`).join("");
    document.getElementById("lb-links-wrap").style.display = links.length ? "block" : "none";
    document.getElementById("lb-prev").style.opacity = i > 0 ? "1" : "0.25";
    document.getElementById("lb-next").style.opacity = i < filtered.length - 1 ? "1" : "0.25";
    document.getElementById("lb").classList.add("on");
    document.body.style.overflow = "hidden";
}

function closeLb() {
    document.getElementById("lb").classList.remove("on");
    document.body.style.overflow = "";
}

function nav(dir) {
    const next = currentIdx - dir;
    if (next >= 0 && next < filtered.length) openLb(next);
}

document.getElementById("lb").addEventListener("click", e => {
    if (e.target === document.getElementById("lb")) closeLb();
});
// ── tag panel ─────────────────────────────────────────────
function buildTagPanel() {
    if (typeof tagGroups === "undefined") return;

    const body = document.getElementById("tag-panel-body");
    const allActive = activeTag === "all";

    let html = `<button id="tag-panel-all" class="${allActive ? "active" : ""}" onclick="selectPanelTag('all')">all entries</button>`;

    for (const [group, tags] of Object.entries(tagGroups)) {
        const isOpen = tags.includes(activeTag);
        html += `<div class="tg-group${isOpen ? " open" : ""}">
            <div class="tg-group-header" onclick="toggleGroup(this)">
                ${group} <span class="tg-arrow">›</span>
            </div>
            <div class="tg-items">
                ${tags.map(t => `<div class="tg-tag${t === activeTag ? " active" : ""}" onclick="selectPanelTag('${t}')">${t}</div>`).join("")}
            </div>
        </div>`;
    }

    body.innerHTML = html;
}

function toggleGroup(header) {
    header.parentElement.classList.toggle("open");
}

function selectPanelTag(tag) {
    activeTag = tag;
    const pill = document.getElementById("active-tag-pill");
    pill.textContent = tag;
    document.getElementById("tag-search").value = tag === "all" ? "" : tag;
    const months = getMonthKeys();
    currentMonthKey = months[0] || null;
    closeTagPanel();
    render();
}

function toggleTagPanel() {
    const panel = document.getElementById("tag-panel");
    if (panel.classList.contains("on")) {
        closeTagPanel();
    } else {
        buildTagPanel();
        panel.classList.add("on");
        document.getElementById("tag-panel-overlay").classList.add("on");
        document.getElementById("tag-panel-btn").classList.add("open");
    }
}

function closeTagPanel() {
    document.getElementById("tag-panel").classList.remove("on");
    document.getElementById("tag-panel-overlay").classList.remove("on");
    document.getElementById("tag-panel-btn").classList.remove("open");
}

document.addEventListener("keydown", e => {
    if (document.getElementById("lb").classList.contains("on")) {
        if (e.key === "Escape") closeLb();
        if (e.key === "ArrowLeft") nav(1);
        if (e.key === "ArrowRight") nav(-1);
        return;
    }
    if (e.key === "Escape") {
        closeTagPanel();
        closeMonthPanel();
    }
});

render();