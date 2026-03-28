const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let activeTag = "all";
let filtered = [];
let currentIdx = 0;

function parseDate(d) {
    const [y, m, day] = d.split("-");
    return { year: y, month: m, day: parseInt(day) };
}

function formatDate(d) {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function allTags() {
    const s = new Set();
    entries.forEach(e => (e.tags || []).forEach(t => s.add(t)));
    return [...s].sort();
}

function buildFilters() {
    const el = document.getElementById("tag-filters");
    el.innerHTML = ["all", ...allTags()].map(t =>
        `<button class="pill${t === "all" ? " on" : ""}" onclick="setTag('${t}',this)">${t}</button>`
    ).join("");
}

function setTag(tag, btn) {
    activeTag = tag;
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("on"));
    btn.classList.add("on");
    render();
}

function getFiltered() {
    return entries
        .filter(e => activeTag === "all" || (e.tags || []).includes(activeTag))
        .slice().sort((a, b) => b.date.localeCompare(a.date));
}

function render() {
    filtered = getFiltered();
    const content = document.getElementById("content");
    if (!filtered.length) {
        content.innerHTML = `<p style="color:#bbb;padding:4rem 0;text-align:center">no entries</p>`;
        return;
    }
    const groups = {};
    filtered.forEach((e, i) => {
        const { year, month } = parseDate(e.date);
        const key = year + "-" + month;
        if (!groups[key]) groups[key] = { year, month, items: [] };
        groups[key].items.push({ e, i });
    });
    content.innerHTML = Object.keys(groups).sort().reverse().map(key => {
        const g = groups[key];
        const cards = g.items.map(({ e, i }) => `
      <div class="card" onclick="openLb(${i})">
        <img src="${e.path}" alt="" loading="lazy">
        <div class="card-foot">
          <span class="card-day">${parseDate(e.date).day}</span>
          <div class="card-dots">${(e.tags || []).map(() => `<span class="dot"></span>`).join("")}</div>
        </div>
      </div>`).join("");
        return `<div class="month-block">
      <div class="month-title">${MONTHS[parseInt(g.month) - 1]} ${g.year}</div>
      <div class="grid">${cards}</div>
    </div>`;
    }).join("");
}

function openLb(i) {
    currentIdx = i;
    const e = filtered[i];
    document.getElementById("lb-img").src = e.path;
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
document.addEventListener("keydown", e => {
    if (!document.getElementById("lb").classList.contains("on")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") nav(1);
    if (e.key === "ArrowRight") nav(-1);
});

buildFilters();
render();