const team = [
  {
    name: "م. أحمد رمضان نصير",
    role: "المدير التنفيذي – شركة Click",
    image: "assets/team/ahmed-ramadan.jpg",
    bio: "خبرة أكثر من 15 عامًا في مجال الكمبيوتر، الإنترنت، وحلول الأعمال، متخصص في إدارة السيرفرات والبنية التحتية التقنية، مع خبرة قوية في التسويق الرقمي وعلم الإدارة، وقيادة المشروعات التقنية وبناء حلول عملية تدعم النمو والتحول الرقمي.",
    tags: ["إدارة", "استراتيجية", "جودة", "تطوير أعمال"]
  },
  {
    name: "م/حبيبة نايل",
    role: "مهندسة تقنية وعلاقات عامة",
    image: "assets/team/habiba-nail.jpg",
    bio: "مهندسة تقنية متخصصة في العلاقات العامة لحل المشكلات وفهم احتياجات العميل وتحويل التحديات إلى حلول فعالة. تمتلك خبرة واسعة في التواصل التقني وتطوير الحلول المبتكرة التي تلبي متطلبات العملاء.",
    tags: ["تقنية", "PR", "تواصل", "Brand"]
  },
  {
    name: "نور علي",
    role: "مديرة أكاديمية التدريب البرمجي",
    image: "assets/team/nour-ali.jpg",
    bio: "متخصصة في إدارة وتطوير البرامج التدريبية التقنية، وبناء مسارات تعليمية عملية في مجال البرمجة وتكنولوجيا المعلومات، مع التركيز على إعداد متدربين مؤهلين لسوق العمل. تتمتع بخبرة في تنظيم الفرق التدريبية، متابعة جودة المحتوى، وتطوير أساليب تعليم حديثة تجمع بين الجانب العملي والتطبيقي.",
    tags: ["تدريب", "مناهج", "Mentorship", "تعليم"]
  },
  {
    name: "محمد عامر",
    role: "المدير العام بفرع الشركة في السعودية",
    image: "assets/team/mohamed-amer.jpg",
    bio: "المدير العام بفرع الشركة في السعودية، ويتمتع بخبرة قوية في قيادة فرق العمل التقنية وإدارة المشروعات الرقمية، مع تركيز على تطوير الأعمال وضمان جودة التنفيذ وتحقيق أهداف الشركة في الأسواق المختلفة.",
    tags: ["عمليات", "KSA", "إدارة", "شراكات"]
  },
  {
    name: "م/تسنيم همام الشرقاوي",
    role: "المسئولة الإعلامية والميديا",
    image: "assets/team/tasneem-elsharkawy.jpg",
    bio: "المسئولة الإعلامية والميديا في شركة حلول كليك، متخصصة في إدارة المحتوى الرقمي، وصناعة الهوية الإعلامية، والإشراف على منصات التواصل الاجتماعي.",
    tags: ["ميديا", "محتوى", "حملات", "Social"]
  },
  {
    name: "م. ياسمين إبراهيم",
    role: "مديرة قسم المبيعات بشركة Click",
    image: "assets/team/yasmin-ibrahim.jpg",
    bio: "مديرة قسم المبيعات بشركة Click، خبرة أكثر من 3 سنوات في إدارة المبيعات وقيادة فرق العمل، وتُعد عنصرًا أساسيًا يُعتمد عليه في تحقيق الأهداف وتنظيم الفريق بكفاءة.",
    tags: ["مبيعات", "CRM", "Targets", "خدمة عملاء"]
  },
  {
    name: "م. عاطف عيسى",
    role: "مدير التسويق بفرع Click في المملكة العربية السعودية",
    image: "assets/team/atef-issa.jpg",
    bio: "مدير التسويق بفرع Click في المملكة العربية السعودية، يمتلك خبرة أكثر من 5 سنوات في التسويق وإدارة الحملات وبناء العلامة التجارية.",
    tags: ["تسويق", "KSA", "Ads", "Growth"]
  },
  {
    name: "م. أحمد أبو عوف",
    role: "مهندس IT في شركة كليك",
    image: "assets/team/ahmed-ouf.jpg",
    bio: "مهندس IT في شركة كليك، خريج نظم ومعلومات، يمتلك خبرة أكثر من 5 سنوات في مجال السوفت وير، ويتميز بالكفاءة العالية والاعتماد عليه في إدارة وحلول الأنظمة التقنية.",
    tags: ["IT", "شبكات", "Support", "Security"]
  },
  {
    name: "المدير العام لشركة كليك",
    role: "المدير العام والواجهة الدعائية للشركة",
    image: "assets/team/general-manager.jpg",
    bio: "المدير العام لشركة كليك والواجهة الدعائية لها، مؤسس مشارك، ومسؤول IT والشبكات سابقًا، بخبرة أكثر من 8 سنوات.",
    tags: ["إدارة عامة", "Brand Face", "قيادة", "Operations"]
  },
  {
    name: "م. عبدالله رضا محمد",
    role: "مطور ويب فول ستاك",
    image: "assets/team/abdullah-reda.jpg",
    bio: "مطور ويب فول ستاك، يمتلك خبرة قوية في تطوير تطبيقات الويب باستخدام إطار عمل Laravel وPHP Native، مع فهم عميق لبناء الأنظمة من البداية وحتى النشر. خريج كلية حاسبات ومعلومات بالجامعة المصرية للتعلم الإلكتروني، وخريج أكاديمية كورسيز زون لتعليم البرمجة، ويهتم بتقديم حلول تقنية عملية تعتمد على كود نظيف وأداء عالي وتطبيق أفضل الممارسات في تطوير البرمجيات.",
    tags: ["Full‑Stack", "Web", "APIs", "Performance"]
  },
  {
    name: "مهندس أحمد عبدالكريم السيد",
    role: "مطور Laravel و Full‑Stack",
    image: "assets/team/ahmed-abdelkarim.jpg",
    bio: "مطور Laravel و Full‑Stack يركز على بناء تطبيقات ويب ولوحات تحكم وأنظمة إدارة، مع اهتمام بالأداء والأمان وقابلية التوسع وتطبيق أفضل الممارسات.",
    tags: ["Laravel", "Back‑End", "Full‑Stack", "Clean Code"]
  }
];


const grid = document.getElementById("teamGrid");
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const modalTags = document.getElementById("modalTags");
const modalAvatar = document.getElementById("modalAvatar");

function initials(arName){
  const parts = (arName || "").replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const letters = [];
  for (const p of parts){
    const clean = p.replace(/[\.\-–—]/g, "");
    if (!clean) continue;
    letters.push(clean[0]);
    if (letters.length === 2) break;
  }
  const out = letters.join(" ");
  return out || (arName || "").slice(0, 2);
}

function makeCard(member, idx){
  const card = document.createElement("article");
  card.className = "team-card";
  card.classList.add("reveal");
  card.style.setProperty("--delay", `${Math.min(idx * 60, 360)}ms`);
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `عضو الفريق: ${member.name}`);

  const media = document.createElement("div");
  media.className = "team-media";

  if (member.image){
    const img = document.createElement("img");
    img.src = member.image;
    img.alt = member.name;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => {
      media.innerHTML = "";
      const ph = document.createElement("div");
      ph.className = "team-placeholder";
      ph.textContent = initials(member.name);
      media.appendChild(ph);
    };
    media.appendChild(img);
  } else {
    const ph = document.createElement("div");
    ph.className = "team-placeholder";
    ph.textContent = initials(member.name);
    media.appendChild(ph);
  }

  const content = document.createElement("div");
  content.className = "team-content";

  const name = document.createElement("h3");
  name.className = "team-name";
  name.textContent = member.name;

  const role = document.createElement("p");
  role.className = "team-role";
  role.textContent = member.role;

  const badges = document.createElement("div");
  badges.className = "badges";
  const t1 = document.createElement("span");
  t1.className = "badge";
  t1.textContent = member.tags?.[0] || "Team";
  const t2 = document.createElement("span");
  t2.className = "badge";
  t2.textContent = member.tags?.[1] || "Click";
  badges.appendChild(t1);
  badges.appendChild(t2);

  content.appendChild(name);
  content.appendChild(role);
  content.appendChild(badges);


  const btn = document.createElement("button");
  btn.className = "details-btn";
  btn.type = "button";
  btn.textContent = "عرض التفاصيل";
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal(idx);
  });

  card.appendChild(media);
  card.appendChild(content);
  card.appendChild(btn);


  return card;
}

function openModal(idx){
  const m = team[idx];
  if (!m) return;

  modalName.textContent = m.name;
  modalRole.textContent = m.role;
  modalBio.textContent = m.bio;

  modalAvatar.innerHTML = "";
  if (m.image){
    modalAvatar.classList.add("has-image");
    const img = document.createElement("img");
    img.src = m.image;
    img.alt = m.name;
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => {
      modalAvatar.classList.remove("has-image");
      modalAvatar.innerHTML = "";
      modalAvatar.textContent = initials(m.name);
    };
    modalAvatar.appendChild(img);
  } else {
    modalAvatar.classList.remove("has-image");
    modalAvatar.textContent = initials(m.name);
  }

  modalTags.innerHTML = "";
  (m.tags || []).forEach(tag => {
    const li = document.createElement("li");
    li.textContent = tag;
    modalTags.appendChild(li);
  });

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = modal.querySelector("[data-close]");
  closeBtn?.focus?.();
}

function closeModal(){
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}


function setupReveal(){
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  if (!("IntersectionObserver" in window)){
    els.forEach(el => el.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const entry of entries){
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  els.forEach(el => io.observe(el));
}

function mount(){
  grid.innerHTML = "";
  team.forEach((m, i) => grid.appendChild(makeCard(m, i)));
  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".hero-copy, .hero-panel, .section-head, .about-card, .contact-card").forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--delay", `${Math.min(i * 70, 280)}ms`);
  });
  requestAnimationFrame(() => setupReveal());


  modal.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.dataset && t.dataset.close === "true") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
  });
}

mount();
