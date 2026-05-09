<template>
  <div class="container">
    <!-- Admin Button -->
    <div class="admin-btn" v-if="!isAdmin">
      <button @click="showLoginModal = true" class="admin-trigger">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Admin
      </button>
    </div>

    <!-- Login Modal -->
    <div v-if="showLoginModal" class="modal-overlay" @click="showLoginModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Admin Access</h3>
          <button class="modal-close" @click="showLoginModal = false">×</button>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Username</label>
            <input
                type="text"
                v-model="loginForm.username"
                placeholder="Enter username"
                required
            >
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
                type="password"
                v-model="loginForm.password"
                placeholder="Enter password"
                required
            >
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-primary">Login</button>
            <button type="button" class="btn-secondary" @click="showLoginModal = false">Cancel</button>
          </div>
        </form>
        <div v-if="loginError" class="error-message">{{ loginError }}</div>
      </div>
    </div>

    <!-- Admin Panel -->
    <div v-if="isAdmin" class="admin-panel">
      <div class="admin-header">
        <div class="admin-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
          <h3>Content Manager</h3>
        </div>
        <button @click="logout" class="logout-btn">Logout</button>
      </div>

      <div class="admin-actions">
        <div class="tab-selector">
          <button
              v-for="tab in ['portfolio', 'vue', 'javascript']"
              :key="tab"
              :class="{ active: selectedTabForEdit === tab }"
              @click="selectedTabForEdit = tab"
          >
            {{ getTabTitle(tab) }}
          </button>
        </div>
        <button @click="showAddModal = true" class="btn-add">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add Project
        </button>
        <button @click="saveChanges" class="btn-save">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          Save Changes
        </button>
      </div>

      <!-- Edit Projects -->
      <div class="edit-projects">
        <div v-for="(project, index) in projectsData[selectedTabForEdit]" :key="index" class="project-card-edit">
          <div class="project-fields">
            <input v-model="project.linkText" placeholder="Project title" class="edit-title">
            <input v-model="project.link" placeholder="Project link" class="edit-link">
            <input v-model="project.description" placeholder="Description" class="edit-desc">
            <input v-model="project.source" placeholder="Source code link" class="edit-source">
          </div>
          <button @click="removeProject(selectedTabForEdit, index)" class="remove-btn">Remove</button>
        </div>
      </div>
    </div>

    <!-- Add Project Modal -->
    <div v-if="showAddModal" class="modal-overlay" @click="showAddModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Add New Project</h3>
          <button class="modal-close" @click="showAddModal = false">×</button>
        </div>
        <form @submit.prevent="addNewProject">
          <div class="form-group">
            <label>Project Title</label>
            <input v-model="newProject.linkText" placeholder="e.g., E-Commerce Platform" required>
          </div>
          <div class="form-group">
            <label>Project Link</label>
            <input v-model="newProject.link" placeholder="https://example.com" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input v-model="newProject.description" placeholder="Technologies used, features...">
          </div>
          <div class="form-group">
            <label>Source Code (optional)</label>
            <input v-model="newProject.source" placeholder="https://github.com/...">
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-primary">Add Project</button>
            <button type="button" class="btn-secondary" @click="showAddModal = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Main Content -->
    <div class="card">
      <!-- Navigation Tabs -->
      <div class="nav-tabs">
        <button
            v-for="(item, index) in tabs"
            :key="index"
            @click="changeTabs(index)"
            :class="{ active: item.visibility }"
            class="tab-btn"
        >
          {{ item.title }}
        </button>
      </div>

      <!-- Content Area -->
      <div class="content-area">
        <template v-for="tab in tabs">
          <!-- Portfolio Content -->
          <div v-if="tab.visibility && tab.title !== 'About me :)'" :key="tab.title" class="projects-grid">
            <div class="section-header">
              <h2>{{ tab.title }}</h2>
              <div class="section-line"></div>
            </div>

            <div class="projects-container">
              <div v-for="(item, idx) in tab.data" :key="idx" class="project-card">
                <div class="project-card-inner">
                  <div class="project-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div class="project-info">
                    <a target="_blank" :href="item.link" class="project-title">
                      {{ item.linkText }}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <p class="project-desc" v-if="item.description.length > 0">{{ item.description }}</p>
                    <a v-if="item.source.length > 0" target="_blank" :href="item.source" class="project-source">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About Me Section -->
          <div v-if="tab.visibility && tab.title === 'About me :)'" :key="tab.title">
            <AboutMe />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: 'App',
  components: {
    AboutMe
  },
  data() {
    return {
      isAdmin: false,
      showLoginModal: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginError: '',
      selectedTabForEdit: 'portfolio',
      showAddModal: false,
      newProject: {
        link: '',
        linkText: '',
        source: '',
        description: ''
      },
      projectsData: {
        portfolio: [],
        vue: [],
        javascript: []
      },
      tabs: [
        { title: 'About me :)', visibility: true, id: 'about', data: [] },
        { title: 'Portfolio links', visibility: false, id: 'portfolio', data: [] },
        { title: 'Vue.js', visibility: false, id: 'vue', data: [] },
        { title: 'JavaScript', visibility: false, id: 'javascript', data: [] }
      ]
    }
  },
  methods: {
    async loadProjectsData() {
      try {
        let response = await fetch('/projects-data.json');
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          this.projectsData = data;
          this.updateTabData();
          console.log('Data loaded successfully:', data);
        } catch (e) {
          console.error('Response is not valid JSON:', text.substring(0, 100));
          throw new Error('Invalid JSON response');
        }
      } catch (error) {
        console.error('Error loading projects data:', error);
        const paths = ['./projects-data.json', '../projects-data.json', 'projects-data.json'];
        let loaded = false;
        for (const path of paths) {
          try {
            const response = await fetch(path);
            if (response.ok) {
              const data = await response.json();
              this.projectsData = data;
              this.updateTabData();
              loaded = true;
              console.log(`Data loaded from ${path}`);
              break;
            }
          } catch (e) {
            console.log(`Failed to load from ${path}`);
          }
        }
        if (!loaded) {
          console.warn('Using fallback data');
          this.projectsData = {
            portfolio: [{ link: "https://example.com", linkText: "Example Project", source: "https://github.com", description: "Please replace projects-data.json file" }],
            vue: [],
            javascript: []
          };
          this.updateTabData();
        }
      }
    },
    saveChanges() {
      localStorage.setItem('projectsData', JSON.stringify(this.projectsData));
      this.downloadJSON();
    },
    handleLogin() {
      if (this.loginForm.username === 'komaroffAnatoliy' && this.loginForm.password === 'dncornholio12345') {
        this.isAdmin = true;
        this.showLoginModal = false;
        this.loginError = '';
        localStorage.setItem('adminAuth', 'true');
        this.removeAdminFromUrl();
      } else {
        this.loginError = 'Invalid username or password';
      }
    },
    logout() {
      this.isAdmin = false;
      localStorage.removeItem('adminAuth');
    },
    checkUrlForAdmin() {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === 'login') {
        this.showLoginModal = true;
      }
    },
    removeAdminFromUrl() {
      const url = new URL(window.location.href);
      url.searchParams.delete('admin');
      window.history.replaceState({}, '', url);
    },
    getTabTitle(tabId) {
      const titles = { portfolio: 'Portfolio Links', vue: 'Vue.js', javascript: 'JavaScript' };
      return titles[tabId] || tabId;
    },
    addNewProject() {
      if (this.newProject.linkText && this.newProject.link) {
        this.projectsData[this.selectedTabForEdit].push({...this.newProject});
        this.updateTabData();
        this.newProject = { link: '', linkText: '', source: '', description: '' };
        this.showAddModal = false;
      }
    },
    removeProject(tabId, index) {
      this.projectsData[tabId].splice(index, 1);
      this.updateTabData();
    },
    updateTabData() {
      this.tabs[1].data = this.projectsData.portfolio;
      this.tabs[2].data = this.projectsData.vue;
      this.tabs[3].data = this.projectsData.javascript;
    },
    downloadJSON() {
      const jsonData = JSON.stringify(this.projectsData, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'projects-data.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      alert('JSON file downloaded! Replace projects-data.json on your server.');
    },
    changeTabs(idx) {
      this.tabs.forEach((val) => { val.visibility = false });
      this.tabs[idx].visibility = true;
      this.updateUrl(this.tabs[idx].id);
    },
    updateUrl(tabId) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tabId);
      window.history.pushState({}, '', url);
    },
    getTabFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('tab');
    },
    activateTabById(tabId) {
      const tabIndex = this.tabs.findIndex(tab => tab.id === tabId);
      if (tabIndex !== -1) {
        this.changeTabs(tabIndex);
      }
    }
  },
  async mounted() {
    console.log('App mounted - checking URL parameters');
    this.checkUrlForAdmin();
    const tabFromUrl = this.getTabFromUrl();
    console.log('Tab from URL:', tabFromUrl);
    if (tabFromUrl) {
      this.activateTabById(tabFromUrl);
    }
    await this.loadProjectsData();
    if (localStorage.getItem('adminAuth') === 'true') {
      this.isAdmin = true;
      console.log('Admin auth found in localStorage');
    }
  }
}
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  font-family: 'Inter', sans-serif;
  padding: 2rem;
}

/* Admin Button */
.admin-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
}

.admin-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a2e;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.admin-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background: white;
}

/* Card */
.card {
  max-width: 1400px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem 2rem 0 2rem;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.tab-btn {
  padding: 0.875rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  background: transparent;
  border: none;
  color: #6b6b8a;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px 12px 0 0;
  position: relative;
}

.tab-btn:hover {
  color: #1a1a2e;
  background: rgba(0, 0, 0, 0.03);
}

.tab-btn.active {
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.08);
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  border-radius: 2px;
}

/* Content Area */
.content-area {
  padding: 2rem;
  background: #f8fafc;
  min-height: 70vh;
}

/* Section Header */
.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.section-line {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  border-radius: 2px;
}

/* Projects Grid */
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: white;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.15);
  border-color: rgba(79, 70, 229, 0.2);
}

.project-card-inner {
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
}

.project-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.project-info {
  flex: 1;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
  margin-bottom: 0.5rem;
}

.project-title:hover {
  color: #4f46e5;
}

.project-title svg {
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s ease;
}

.project-title:hover svg {
  opacity: 1;
  transform: translateX(0);
}

.project-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0.5rem 0;
}

.project-source {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.project-source:hover {
  border-bottom-color: #4f46e5;
}

/* Admin Panel */
.admin-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  max-height: 85vh;
  background: white;
  border-radius: 28px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  z-index: 200;
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, -48%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, #1e1b4b, #2e1a6b);
  color: white;
}

.admin-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.admin-title h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.logout-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.admin-actions {
  padding: 1.25rem 1.5rem;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tab-selector {
  display: flex;
  gap: 0.5rem;
  background: white;
  padding: 0.25rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.tab-selector button {
  padding: 0.5rem 1.25rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
  transition: all 0.2s ease;
}

.tab-selector button.active {
  background: #4f46e5;
  color: white;
}

.btn-add, .btn-save {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-add {
  background: white;
  color: #4f46e5;
  border: 1px solid #c7d2fe;
}

.btn-add:hover {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.btn-save {
  background: #10b981;
  color: white;
}

.btn-save:hover {
  background: #059669;
  transform: translateY(-1px);
}

/* Edit Projects */
.edit-projects {
  padding: 1.5rem;
  max-height: 55vh;
  overflow-y: auto;
}

.project-card-edit {
  background: #f8fafc;
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
}

.project-card-edit:hover {
  border-color: #c7d2fe;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.project-fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.edit-title, .edit-link, .edit-desc, .edit-source {
  padding: 0.625rem 0.875rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
}

.edit-title:focus, .edit-link:focus, .edit-desc:focus, .edit-source:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.remove-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background: #dc2626;
  transform: scale(0.98);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: white;
  border-radius: 28px;
  width: 90%;
  max-width: 450px;
  animation: scaleIn 0.2s ease;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  color: #94a3b8;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: #475569;
}

.modal-content form {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.btn-primary {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #4338ca;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f1f5f9;
  color: #475569;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 10px;
  font-size: 0.875rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .nav-tabs {
    padding: 1rem 1rem 0 1rem;
    overflow-x: auto;
  }

  .tab-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  .content-area {
    padding: 1.25rem;
  }

  .projects-container {
    grid-template-columns: 1fr;
  }

  .admin-panel {
    width: 95%;
    max-height: 90vh;
  }

  .admin-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .tab-selector {
    justify-content: center;
  }

  .project-card-edit {
    flex-direction: column;
  }

  .remove-btn {
    align-self: flex-end;
  }
}
</style>