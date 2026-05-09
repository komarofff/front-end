<script setup>
// No additional logic needed - this is a pure presentational component
</script>

<template>
  <div class="about-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Available for opportunities
      </div>
      <div class="hero-content">
        <div class="avatar-wrapper">
          <div class="avatar-ring">
            <div class="avatar-initials">AK</div>
          </div>
        </div>
        <div class="hero-text">
          <h1 class="hero-name">Anatoliy Komarov</h1>
          <p class="hero-title">Full-stack Developer</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">9+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">140+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">140+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Text -->
    <div class="about-text">
      <div class="section-tag">About Me</div>
      <p class="lead-text">
        I'm a passionate and detail-oriented full-stack developer with a keen eye for creating
        efficient, scalable, and user-friendly web applications.
      </p>
      <div class="text-grid">
        <p>
          What started as a hobby has evolved into a fulfilling profession. I thrive on solving complex
          problems and transforming ideas into robust digital solutions. My approach combines technical
          excellence with creative problem-solving, ensuring every project I touch is built to last.
        </p>
        <p>
          I stay at the forefront of web development, constantly exploring new technologies and best practices.
          Whether it's crafting responsive front-end interfaces or building powerful back-end systems,
          I bring dedication, attention to detail, and a commitment to quality to every line of code I write.
        </p>
      </div>
      <div class="quote-card">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M10 11h-4v-4h4v4zM18 11h-4v-4h4v4z"/>
          <path d="M6 11v4c0 2 1.5 4 4 4"/>
          <path d="M14 11v4c0 2 1.5 4 4 4"/>
        </svg>
        <p>I'm open to new opportunities and ready to make a meaningful impact. Let's build something great together.</p>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="skills-section">
      <div class="section-tag">Technical Expertise</div>
      <div class="skills-grid">
        <div class="skill-category">
          <div class="category-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <h4>Frontend</h4>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">Tailwind CSS</span>
            <span class="skill-tag">SCSS</span>
            <span class="skill-tag">Bootstrap</span>
            <span class="skill-tag">TypeScript</span>
          </div>
        </div>
        <div class="skill-category">
          <div class="category-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h10"/>
              <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
            </svg>
            <h4>Backend</h4>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">Laravel</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">WordPress</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">REST APIs</span>
          </div>
        </div>
        <div class="skill-category">
          <div class="category-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
              <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"></path>
              <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"></path>
            </svg>
            <h4>Database & Tools</h4>
          </div>
          <div class="skill-tags">
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">Webpack</span>
            <span class="skill-tag">Gulp</span>
            <span class="skill-tag">Figma</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="experience-section">
      <div class="section-tag">Work Experience</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h4>Front-end Developer</h4>
              <span class="timeline-date">2022 - Present</span>
            </div>
            <p class="timeline-company">PO SYSTEMS GROUP LTD. (dev-web.by)</p>
            <p class="timeline-desc">
              Developing and maintaining high-performance websites using modern technologies.
              Specializing in responsive design, optimizing user experience, and implementing
              complex front-end architectures.
            </p>
            <div class="timeline-tech">
              <span>HTML5</span><span>JavaScript</span><span>SCSS</span>
              <span>Vue.js</span><span>Laravel</span><span>WordPress</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h4>Full-stack Developer</h4>
              <span class="timeline-date">2021 - 2022</span>
            </div>
            <p class="timeline-company">VASTERRA</p>
            <p class="timeline-desc">
              Built end-to-end web applications from concept to deployment. Collaborated with
              cross-functional teams to deliver scalable solutions that met client requirements
              and business objectives.
            </p>
            <div class="timeline-tech">
              <span>Vue.js</span><span>Laravel</span><span>MySQL</span>
              <span>jQuery</span><span>Webpack</span><span>Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="education-section">
      <div class="section-tag">Education & Certifications</div>
      <div class="education-grid">
        <div class="education-card">
          <div class="education-icon">🎓</div>
          <div class="education-info">
            <h4>RS School</h4>
            <p>JS/Front-end Developer Certificate</p>
            <a href="https://app.rs.school/certificate/07pj38mk" target="_blank" class="education-link">
              View Certificate →
            </a>
          </div>
        </div>
        <div class="education-card">
          <div class="education-icon">📘</div>
          <div class="education-info">
            <h4>Belhard Academy</h4>
            <p>Modern Front-end with Vue.js</p>
            <a href="https://komaroff.biz/RESUME/certificate/Front-end-belhard.jpg" target="_blank" class="education-link">
              View Certificate →
            </a>
          </div>
        </div>
        <div class="education-card">
          <div class="education-icon">💻</div>
          <div class="education-info">
            <h4>MyFreedom</h4>
            <p>Full-stack Developer (PHP, MySQL, Laravel)</p>
            <a href="https://komaroff.biz/RESUME/certificate/Anatoliy-php.jpg" target="_blank" class="education-link">
              View Certificate →
            </a>
          </div>
        </div>
        <div class="education-card">
          <div class="education-icon">🎨</div>
          <div class="education-info">
            <h4>MyFreedom</h4>
            <p>Front-end Developer (HTML, CSS, JS, SASS, Gulp)</p>
            <a href="https://komaroff.biz/RESUME/certificate/Anatoliy-web.jpg" target="_blank" class="education-link">
              View Certificate →
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact & Languages -->
    <div class="footer-section">
      <div class="contact-card">
        <div class="section-tag">Get in Touch</div>
        <div class="contact-grid">
          <a href="mailto:admin@komaroff.biz" class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>admin@komaroff.biz</span>
          </a>
          <a href="https://komaroff.biz" target="_blank" class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>komaroff.biz</span>
          </a>
          <a href="tel:#" class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+48 *** *** ***</span>
          </a>
          <a href="#" target="_blank" class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21.5 4.5L2 12.5l6.5 2.5 8-7-5 6.5 7 4 3-13z"/>
            </svg>
            <span>@***_****</span>
          </a>
          <a href="https://www.linkedin.com/in/anatoliy-komarov/" target="_blank" class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span>LinkedIn Profile</span>
          </a>
        </div>
        <div class="languages-row">
          <div class="language-item">
            <span class="lang-flag">🇬🇧</span>
            <div class="lang-info">
              <strong>English</strong>
              <div class="lang-level">
                <div class="level-bar" style="width: 65%"></div>
              </div>
              <span class="lang-text">B1 (Intermediate)</span>
            </div>
          </div>
          <div class="language-item">
            <span class="lang-flag">🇵🇱</span>
            <div class="lang-info">
              <strong>Polish</strong>
              <div class="lang-level">
                <div class="level-bar" style="width: 85%"></div>
              </div>
              <span class="lang-text">C1 (Advanced)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 100%;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section Tag */
.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1.25rem;
}

/* Hero Section */
.hero-section {
  margin-bottom: 2.5rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f1f5f9;
  padding: 0.375rem 1rem;
  border-radius: 40px;
  font-size: 0.75rem;
  color: #475569;
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.9); }
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar-ring {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.avatar-initials {
  width: 88px;
  height: 88px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-name {
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.02em;
}

.hero-title {
  font-size: 1rem;
  color: #4f46e5;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
}

.stat-label {
  font-size: 0.7rem;
  color: #64748b;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: #e2e8f0;
}

/* About Text */
.about-text {
  margin-bottom: 2.5rem;
}

.lead-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: #1e293b;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  padding-left: 1rem;
  border-left: 3px solid #4f46e5;
}

.text-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.text-grid p {
  color: #475569;
  line-height: 1.6;
  font-size: 0.9rem;
}

.quote-card {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid #e2e8f0;
}

.quote-card svg {
  flex-shrink: 0;
  color: #4f46e5;
}

.quote-card p {
  color: #334155;
  font-style: italic;
  margin: 0;
}

/* Skills Section */
.skills-section {
  margin-bottom: 2.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: #c7d2fe;
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.08);
  transform: translateY(-2px);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.category-header svg {
  color: #4f46e5;
}

.category-header h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #f1f5f9;
  color: #334155;
  padding: 0.375rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: #4f46e5;
  color: white;
  transform: scale(1.05);
}

/* Experience Section */
.experience-section {
  margin-bottom: 2.5rem;
}

.timeline {
  position: relative;
  padding-left: 1.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #4f46e5, #c7d2fe);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -1.5rem;
  top: 0.25rem;
  width: 12px;
  height: 12px;
  background: #4f46e5;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #e2e8f0;
}

.timeline-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.25rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-color: #c7d2fe;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.timeline-header h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.timeline-date {
  font-size: 0.7rem;
  color: #4f46e5;
  font-weight: 600;
}

.timeline-company {
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 0.75rem;
}

.timeline-desc {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-tech span {
  background: #f1f5f9;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 500;
  color: #4f46e5;
}

/* Education Section */
.education-section {
  margin-bottom: 2rem;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.education-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: all 0.3s ease;
}

.education-card:hover {
  border-color: #c7d2fe;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.education-icon {
  font-size: 2rem;
}

.education-info h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.2rem 0;
}

.education-info p {
  font-size: 0.7rem;
  color: #64748b;
  margin: 0 0 0.3rem 0;
}

.education-link {
  font-size: 0.7rem;
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
}

.education-link:hover {
  text-decoration: underline;
}

/* Footer Contact Section */
.footer-section {
  margin-top: 1rem;
}

.contact-card {
  background: linear-gradient(135deg, #1e1b4b, #2e1a6b);
  border-radius: 24px;
  padding: 1.75rem;
  color: white;
}

.contact-card .section-tag {
  background: rgba(255, 255, 255, 0.15);
  color: #c7d2fe;
  margin-bottom: 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #e2e8f0;
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.5rem;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.contact-item svg {
  flex-shrink: 0;
}

.languages-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.language-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-flag {
  font-size: 1.5rem;
}

.lang-info {
  flex: 1;
}

.lang-info strong {
  font-size: 0.85rem;
  display: block;
  margin-bottom: 0.25rem;
}

.lang-level {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin: 0.25rem 0;
  width: 120px;
}

.level-bar {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  border-radius: 2px;
}

.lang-text {
  font-size: 0.7rem;
  color: #a5b4fc;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-stats {
    flex-wrap: wrap;
  }

  .text-grid {
    grid-template-columns: 1fr;
  }

  .timeline-header {
    flex-direction: column;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .skill-category {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 1.5rem;
  }

  .lead-text {
    font-size: 1rem;
  }

  .quote-card {
    flex-direction: column;
  }
}
</style>