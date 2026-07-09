/* =========================================================
   SYED ABDUS SABUR — PORTFOLIO SCRIPT
   All content below is sourced directly from the uploaded resume.
   Placeholders are used only where the resume had no link/value.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertifications();
  initTypingAnimation();
  initConsoleTyping();
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initFadeInObserver();
  initScrollTopButton();
});

/* ---------------------------------------------------------
   1. HERO TYPING ANIMATION
   --------------------------------------------------------- */
function initTypingAnimation() {
  const target = document.getElementById("typedText");
  if (!target) return;

  const phrases = [
    "Aspiring Cloud Engineer",
    "AIML Undergraduate",
    "AWS Learner"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      target.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      target.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 80);
  }

  tick();
}

/* ---------------------------------------------------------
   2. CONSOLE SIGNATURE TYPING
   --------------------------------------------------------- */
function initConsoleTyping() {
  const el = document.getElementById("consoleTyping");
  if (!el) return;

  const line = "learn --track aws-cloud-practitioner";
  let i = 0;

  function type() {
    if (i <= line.length) {
      el.textContent = line.slice(0, i);
      i++;
      setTimeout(type, 55);
    }
  }

  setTimeout(type, 1200);
}

/* ---------------------------------------------------------
   3. NAVBAR
   --------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const toggleScrolled = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };

  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

/* ---------------------------------------------------------
   4. MOBILE MENU
   --------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("mobile-open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("mobile-open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   5. SCROLL SPY
   --------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------------------------------------------------------
   6. FADE-IN ON SCROLL
   --------------------------------------------------------- */
function initFadeInObserver() {
  const items = document.querySelectorAll(".fade-in");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------------------------------------------------------
   7. SCROLL TO TOP
   --------------------------------------------------------- */
function initScrollTopButton() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => btn.classList.toggle("visible", window.scrollY > 500),
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------------------------------------------------
   8. SKILLS — sourced from resume "Technical Skills" section
   --------------------------------------------------------- */
function renderSkills() {
  const cloud = [
    { name: "AWS Cloud Practitioner", icon: "fa-brands fa-aws", tag: "Pursuing" },
    { name: "EC2", icon: "fa-solid fa-server", tag: "Beginner" },
    { name: "S3", icon: "fa-solid fa-box-archive", tag: "Beginner" },
    { name: "IAM", icon: "fa-solid fa-user-shield", tag: "Beginner" },
  ];

  const programming = [
    { name: "Python", icon: "fa-brands fa-python", tag: "Basic" },
    { name: "C++", icon: "fa-solid fa-code", tag: null },
    { name: "SQL", icon: "fa-solid fa-database", tag: "Basic" },
  ];

  const tools = [
    { name: "Git", icon: "fa-brands fa-git-alt", tag: null },
    { name: "GitHub", icon: "fa-brands fa-github", tag: null },
    { name: "VS Code", icon: "fa-solid fa-code", tag: null },
    { name: "Jupyter Notebook", icon: "fa-solid fa-book", tag: null },
    { name: "Arduino UNO", icon: "fa-solid fa-microchip", tag: null },
  ];

  const core = [
    { name: "Linux Basics", icon: "fa-brands fa-linux", tag: null },
    { name: "Networking Fundamentals", icon: "fa-solid fa-network-wired", tag: null },
    { name: "Embedded Systems", icon: "fa-solid fa-microchip", tag: null },
  ];

  setSkillGrid("cloudSkills", cloud);
  setSkillGrid("programmingSkills", programming);
  setSkillGrid("toolsSkills", tools);
  setSkillGrid("coreSkills", core);
}

function setSkillGrid(id, skills) {
  const grid = document.getElementById(id);
  if (!grid) return;
  grid.innerHTML = skills.map(skillCardHTML).join("");
}

function skillCardHTML(skill) {
  return `
    <div class="skill-card glass fade-in">
      <i class="skill-card__icon ${skill.icon}"></i>
      <span class="skill-card__name">${skill.name}</span>
      ${skill.tag ? `<span class="skill-card__tag">${skill.tag}</span>` : ""}
    </div>
  `;
}

/* ---------------------------------------------------------
   9. PROJECTS — sourced from resume "Projects" section
   --------------------------------------------------------- */
function renderProjects() {
  const projects = [
    {
      title: "Arduino-Based Radar Detection System",
      tag: "Embedded Systems",
      icon: "fa-solid fa-satellite-dish",
      points: [
        "Developed a radar detection system using Arduino UNO and an ultrasonic sensor to detect objects in real time.",
        "Implemented distance measurement and angle-based scanning using servo motor rotation.",
        "Displayed object detection data through a Serial Monitor / Processing interface.",
        "Designed and tested hardware connections for accurate object tracking and system stability.",
      ],
      stack: ["Arduino UNO", "HC-SR04 Ultrasonic Sensor", "Servo Motor", "C++", "Embedded Systems"],
      links: [
        { label: "Research Paper", icon: "fa-solid fa-file-lines", href: "#", placeholder: true },
        { label: "GitHub Repo", icon: "fa-brands fa-github", href: "#", placeholder: true },
      ],
    },
  ];

  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
    <article class="project-card glass fade-in">
      <div class="project-card__image">
        <span class="project-card__tag">${p.tag}</span>
        <i class="${p.icon}"></i>
      </div>
      <div class="project-card__body">
        <h3>${p.title}</h3>
        <ul style="padding-left:1.1rem; margin-bottom:1.1rem; color:var(--text-muted); font-size:0.88rem; display:flex; flex-direction:column; gap:0.4rem;">
          ${p.points.map((pt) => `<li>${pt}</li>`).join("")}
        </ul>
        <div class="project-card__stack">
          ${p.stack.map((s) => `<span>${s}</span>`).join("")}
        </div>
        <div class="project-card__links">
          ${p.links
            .map(
              (l) =>
                `<a href="${l.href}" target="_blank" rel="noopener" ${l.placeholder ? `title="Add your ${l.label} link"` : ""}><i class="${l.icon}"></i> ${l.label}</a>`
            )
            .join("")}
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

/* ---------------------------------------------------------
   10. EDUCATION — sourced from resume "Education" section
   --------------------------------------------------------- */
function renderEducation() {
  const education = [
    {
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      school: "Poojya Doddappa Appa College of Engineering",
      meta: ["2023 – 2027", "CGPA: 7.02 (5th Semester)"],
    },
    {
      degree: "Pre-University (12th Grade)",
      school: "Gurukul PU College of Science, Kalaburagi",
      meta: ["2021 – 2023"],
    },
    {
      degree: "SSLC (10th Grade)",
      school: "New Noble Boys High School, Kalaburagi",
      meta: ["2010 – 2021"],
    },
  ];

  const el = document.getElementById("educationTimeline");
  if (!el) return;

  el.innerHTML = education
    .map(
      (e) => `
    <div class="timeline-item glass fade-in">
      <h3>${e.degree}</h3>
      <p class="timeline-item__school">${e.school}</p>
      <div class="timeline-item__meta">
        ${e.meta.map((m) => `<span><i class="fa-regular fa-calendar"></i> ${m}</span>`).join("")}
      </div>
    </div>
  `
    )
    .join("");
}

/* ---------------------------------------------------------
   11. CERTIFICATIONS — sourced from resume "Certifications" section
   --------------------------------------------------------- */
function renderCertifications() {
  const certs = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "In Progress",
      icon: "fa-brands fa-aws",
    },
    {
      name: "HTML & CSS Certification",
      issuer: "Certifying Body Not Specified",
      status: "Completed",
      icon: "fa-brands fa-html5",
    },
    {
      name: "Python Foundation Certification",
      issuer: "Infosys",
      status: "Completed",
      icon: "fa-brands fa-python",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      icon: "fa-solid fa-shield-halved",
    },
  ];

  const grid = document.getElementById("certGrid");
  if (!grid) return;

  grid.innerHTML = certs
    .map((c) => {
      const isProgress = c.status === "In Progress";
      return `
      <div class="cert-card glass fade-in">
        <div class="cert-card__top">
          <div class="cert-card__icon"><i class="${c.icon}"></i></div>
          <span class="cert-status ${isProgress ? "cert-status--progress" : "cert-status--done"}">
            <i class="fa-solid ${isProgress ? "fa-hourglass-half" : "fa-circle-check"}"></i> ${c.status}
          </span>
        </div>
        <h3>${c.name}</h3>
        <p>${c.issuer}</p>
      </div>
    `;
    })
    .join("");
}
