const certificateData = [
  {
    number: "01",
    category: "PROVINSI SUMATERA BARAT",
    title: "Juara II — Lomba Film Pendek / Seni Penciptaan FLS2N",
    image: "assets/sertifikat-provinsi-juara-2.jpg"
  },
  {
    number: "02",
    category: "KOTA PAYAKUMBUH",
    title: "Juara Harapan I — Kompetisi Film Pendek Payakumbuh Creative mARTket 2024",
    image: "assets/sertifikat-kabupaten-kota-juara-harapan-1.jpg"
  },
  {
    number: "03",
    category: "DIBIMBING",
    title: "Event Online - Business Analyst & Product Strategy",
    image: "assets/Sertifika_webinar_dibimbing_1.jpg"
  },
  {
    number: "04",
    category: "AVENSA",
    title: "Event Avensa Labs 03",
    image: "assets/sertifikat_avensa_Labs03.jpg"
  },
  {
    number: "05",
    category: "RUANGAI",
    title: "Dasar Dan Penggunaan AI Generatif",
    image: "assets/Sertifikat_webinar_codepolitan_.jpg"
  },
  {
    number: "06",
    category: "DIBIMBING",
    title: "Event Online - ESG & Sustainabilty Management",
    image: "assets/Sertifika_webinar_dibimbing_2.jpg"
  },
    {
    number: "07",
    category: "DIBIMBING",
    title: "Event Online - Finance & Accounting",
    image: "assets/Sertifikat_webinar_dibimbing_3.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll(".social").forEach(item => {
    item.addEventListener("click", () => {
      if (window.matchMedia("(hover: none)").matches) {
        item.classList.toggle("open");
      }
    });
  });

  const grid = document.getElementById("certificateGrid");
  if (!grid) return;

  grid.innerHTML = certificateData.map(cert => `
    <article class="certificate-card reveal" data-title="${escapeHtml(cert.title)}" data-img="${cert.image}">
      <div class="certificate-preview">
        <span>${cert.number}</span>
        <img class="certificate-thumb" src="${cert.image}" alt="${escapeHtml(cert.title)}" loading="lazy">
      </div>
      <div class="certificate-info">
        <div><p>${escapeHtml(cert.category)}</p><h3>${escapeHtml(cert.title)}</h3></div>
        <span class="arrow">↗</span>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const modal = document.getElementById("certModal");
  if (!modal) return;

  const modalImg = document.getElementById("modalImage");
  const fallback = document.getElementById("modalFallback");
  const title = document.getElementById("modalTitle");

  grid.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("click", () => {
      title.textContent = card.dataset.title;
      modalImg.classList.remove("loaded");
      fallback.style.display = "flex";

      modalImg.onload = () => {
        modalImg.classList.add("loaded");
        fallback.style.display = "none";
      };
      modalImg.onerror = () => {
        modalImg.classList.remove("loaded");
        fallback.style.display = "flex";
      };

      modalImg.src = card.dataset.img;
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelector(".modal-close")?.addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
});

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
