/* =========================================================
   SYED ABDUS SABUR — PORTFOLIO SCRIPT (V2)
   Content sourced from resume + the redesign brief's given copy.
   Placeholders are used only where no real value/link was given.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 700,
    once: true,
    offset: 60,
    easing: "ease-out-cubic",
  });

  renderAbout();
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertifications();
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initContactForm();
});

/* ---------------------------------------------------------
   NAVBAR — background on scroll
   --------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const toggleScrolled = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

/* ---------------------------------------------------------
   MOBILE MENU
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
   SCROLL SPY — highlight active nav link
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
   ABOUT — bullet highlights from the brief
   --------------------------------------------------------- */
function renderAbout() {
  const items = [
    { text: "Final Year AIML Student", icon: "fa-solid fa-graduation-cap" },
    { text: "Learning AWS Cloud", icon: "fa-brands fa-aws" },
    { text: "Interested in Cloud Infrastructure", icon: "fa-solid fa-cloud" },
    { text: "Strong Python Fundamentals", icon: "fa-brands fa-python" },
    { text: "Problem Solving", icon: "fa-solid fa-puzzle-piece" },
    { text: "Responsive Web Development", icon: "fa-solid fa-mobile-screen" },
  ];

  const grid = document.getElementById("aboutGrid");
  if (!grid) return;

  grid.innerHTML = items
    .map(
      (item, i) => `
    <div class="about-card glass" data-aos="fade-up" data-aos-delay="${i * 60}">
      <div class="about-card__icon"><i class="${item.icon}"></i></div>
      <p>${item.text}</p>
    </div>
  `
    )
    .join("");
}

/* ---------------------------------------------------------
   SKILLS
   --------------------------------------------------------- */
function renderSkills() {
  const programming = [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
  ];

  const cloud = [
    { name: "AWS S3", icon: "fa-solid fa-box-archive" },
    { name: "IAM", icon: "fa-solid fa-user-shield" },
    { name: "CloudFront", icon: "fa-solid fa-globe" },
    { name: "EC2", icon: "fa-solid fa-server" },
    { name: "VPC", icon: "fa-solid fa-network-wired" },
    { name: "CloudWatch", icon: "fa-solid fa-chart-line" },
  ];

  const tools = [
    { name: "Git & GitHub", icon: "fa-brands fa-git-alt" },
    { name: "VS Code", icon: "fa-solid fa-code" },
    { name: "Linux Basics", icon: "fa-brands fa-linux" },
    { name: "Networking Basics", icon: "fa-solid fa-ethernet" },
    { name: "Responsive Design", icon: "fa-solid fa-mobile-screen-button" },
  ];

  setSkillGrid("programmingSkills", programming);
  setSkillGrid("cloudSkills", cloud);
  setSkillGrid("toolsSkills", tools);
}

function setSkillGrid(id, skills) {
  const grid = document.getElementById(id);
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (s, i) => `
    <div class="skill-card glass" data-aos="fade-up" data-aos-delay="${(i % 6) * 50}">
      <i class="${s.icon}"></i>
      <span>${s.name}</span>
    </div>
  `
    )
    .join("");
}

/* ---------------------------------------------------------
   PROJECTS
   --------------------------------------------------------- */
function renderProjects() {
  const projects = [
    {
      title: "AWS S3 Portfolio Website",
      icon: "fa-solid fa-globe",
      desc: "Designed and deployed a responsive personal portfolio website using Amazon S3 Static Website Hosting.",
      stack: ["HTML", "CSS", "JavaScript", "AWS S3", "GitHub"],
      links: [
        { label: "Live Demo", icon: "fa-solid fa-arrow-up-right-from-square", href: "#", placeholder: true },
        { label: "GitHub", icon: "fa-brands fa-github", href: "#", placeholder: true },
      ],
    },
    {
      title: "Arduino Radar System",
      icon: "fa-solid fa-satellite-dish",
      desc: "Built an obstacle detection radar system using Arduino UNO, an ultrasonic sensor, a servo motor, and Processing IDE.",
      stack: ["Arduino UNO", "Ultrasonic Sensor", "Servo Motor", "Processing IDE"],
      links: [
        { label: "GitHub", icon: "fa-brands fa-github", href: "#", placeholder: true },
        { label: "Project Details", icon: "fa-solid fa-file-lines", href: "#", placeholder: true },
      ],
    },
  ];

  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p, i) => `
    <article class="project-card glass" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="project-card__top"><i class="${p.icon}"></i></div>
      <div class="project-card__body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
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
   EDUCATION
   --------------------------------------------------------- */
function renderEducation() {
  const education = [
    {
      degree: "Bachelor of Engineering — Artificial Intelligence & Machine Learning",
      school: "Poojya Doddappa Appa College",
      meta: ["2023 – 2027", "CGPA: 7.20"],
    },
  ];

  const el = document.getElementById("educationTimeline");
  if (!el) return;

  el.innerHTML = education
    .map(
      (e, i) => `
    <div class="timeline-item glass" data-aos="fade-up" data-aos-delay="${i * 80}">
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
   CERTIFICATIONS
   --------------------------------------------------------- */
function renderCertifications() {
  const certs = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", status: "In Progress", icon: "fa-brands fa-aws" },
    { name: "AWS Educate", issuer: "Amazon Web Services", status: "Completed", icon: "fa-solid fa-user-graduate" },
    { name: "AWS Academy", issuer: "Amazon Web Services", status: "Completed", icon: "fa-solid fa-screwdriver-wrench" },
    { name: "Future Certificates", issuer: "More on the way", status: "Planned", icon: "fa-solid fa-plus" },
  ];

  const grid = document.getElementById("certGrid");
  if (!grid) return;

  grid.innerHTML = certs
    .map((c, i) => {
      const statusClass =
        c.status === "In Progress" ? "cert-status--progress" : c.status === "Planned" ? "cert-status--future" : "cert-status--done";
      const statusIcon = c.status === "In Progress" ? "fa-hourglass-half" : c.status === "Planned" ? "fa-plus" : "fa-circle-check";

      return `
      <div class="cert-card glass" data-aos="fade-up" data-aos-delay="${i * 70}">
        <div class="cert-card__top">
          <div class="cert-card__icon"><i class="${c.icon}"></i></div>
          <span class="cert-status ${statusClass}"><i class="fa-solid ${statusIcon}"></i> ${c.status}</span>
        </div>
        <h3>${c.name}</h3>
        <p>${c.issuer}</p>
      </div>
    `;
    })
    .join("");
}

/* ---------------------------------------------------------
   CONTACT FORM
   Static hosting (S3) has no backend, so submitting opens the
   visitor's email client with the message pre-filled via mailto.
   --------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:arifuddin1854@gmail.com?subject=${subject}&body=${body}`;
  });
}