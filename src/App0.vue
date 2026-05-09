<template>
  <div class="container">
    <!-- Кнопка админа -->
    <div class="admin-btn" v-if="!isAdmin">
      <button @click="showLoginModal = true">Admin</button>
    </div>

    <!-- Модалка авторизации -->
    <div v-if="showLoginModal" class="modal-overlay" @click="showLoginModal = false">
      <div class="modal-content" @click.stop>
        <h3>Admin Authorization</h3>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Login:</label>
            <input
                type="text"
                v-model="loginForm.username"
                placeholder="Enter username"
                required
            >
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
                type="password"
                v-model="loginForm.password"
                placeholder="Enter password"
                required
            >
          </div>
          <div class="form-actions">
            <button type="submit">Login</button>
            <button type="button" @click="showLoginModal = false">Cancel</button>
          </div>
        </form>
        <div v-if="loginError" class="error-message">{{ loginError }}</div>
      </div>
    </div>

    <!-- Админ-панель -->
    <div v-if="isAdmin" class="admin-panel">
      <div class="admin-header">
        <h3>Admin Panel</h3>
        <button @click="logout" class="logout-btn">Logout</button>
      </div>

      <div class="admin-actions">
        <select v-model="selectedTabForEdit">
          <option value="portfolio">Portfolio Links</option>
          <option value="vue">Vue.js</option>
          <option value="javascript">JavaScript</option>
        </select>
        <button @click="showAddModal = true">Add New Project</button>
        <button @click="saveChanges">Save Changes</button>
      </div>

      <!-- Редактирование проектов -->
      <div class="edit-projects">
        <h4>Edit Projects in {{ getTabTitle(selectedTabForEdit) }}</h4>
        <div v-for="(project, index) in projectsData[selectedTabForEdit]" :key="index" class="project-item">
          <div class="project-fields">
            <input v-model="project.link" placeholder="Project link">
            <input v-model="project.linkText" placeholder="Project title">
            <input v-model="project.source" placeholder="Source code link">
            <input v-model="project.description" placeholder="Description">
          </div>
          <button @click="removeProject(selectedTabForEdit, index)" class="remove-btn">Remove</button>
        </div>
      </div>
    </div>

    <!-- Модалка добавления проекта -->
    <div v-if="showAddModal" class="modal-overlay" @click="showAddModal = false">
      <div class="modal-content" @click.stop>
        <h3>Add New Project to {{ getTabTitle(selectedTabForEdit) }}</h3>
        <form @submit.prevent="addNewProject">
          <div class="form-group">
            <label>Project Title:</label>
            <input v-model="newProject.linkText" placeholder="Project title" required>
          </div>
          <div class="form-group">
            <label>Project Link:</label>
            <input v-model="newProject.link" placeholder="https://..." required>
          </div>
          <div class="form-group">
            <label>Description:</label>
            <input v-model="newProject.description" placeholder="Project description">
          </div>
          <div class="form-group">
            <label>Source Code:</label>
            <input v-model="newProject.source" placeholder="GitHub link">
          </div>
          <div class="form-actions">
            <button type="submit">Add Project</button>
            <button type="button" @click="showAddModal = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Основной контент -->
    <div class="card">
      <div class="flex">
        <div class="grid-4">
          <template v-for="(item,index) in tabs">
            <button @click="changeTabs(index)" :class="{active: item.visibility }">{{ item.title }}</button>
          </template>
        </div>
      </div>
      <hr>
      <div class="scroll">
        <template v-for="tab in tabs">
          <div v-if="tab.visibility && tab.title !== 'About me :)'">
            <h2>{{ tab.title }}</h2>
            <ol>
              <li v-for="item in tab.data">
                <a target="_blank" :href="item.link">{{ item.linkText }}</a> <span
                  v-if="item.description.length>0">- {{ item.description }}</span>
                <span v-if="item.source.length>0 "> → <a class="source-code" target="_blank" :href="item.source">  source code </a></span>
              </li>
            </ol>
          </div>
          <div v-if="tab.visibility && tab.title === 'About me :)'">
            <AboutMe />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import './styles/style.css';
export default {
  name: 'App',
  components: {
    AboutMe
  },
  data() {
    return {
      // Авторизация
      isAdmin: false,
      showLoginModal: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginError: '',

      // Админ-панель
      selectedTabForEdit: 'portfolio',
      showAddModal: false,
      newProject: {
        link: '',
        linkText: '',
        source: '',
        description: ''
      },

      // Данные проектов (загружаются из JSON)
      projectsData: {
        portfolio: [],
        vue: [],
        javascript: []
      },

      // Вкладки
      tabs: [
        {
          title: 'About me :)',
          visibility: true,
          id: 'about',
          data: [
            {
              link: 'About me',
              linkText: '',
              source: '',
              description: '',
            },
          ]
        },
        {
          title: 'Portfolio links',
          visibility: false,
          id: 'portfolio',
          data: [] // Заполняется из projectsData
        },
        {
          title: 'Vue.js',
          visibility: false,
          id: 'vue',
          data: [] // Заполняется из projectsData
        },
        {
          title: 'JavaScript',
          visibility: false,
          id: 'javascript',
          data: [] // Заполняется из projectsData
        }
      ]
    }
  },
  methods: {

    //
    // Загрузка данных из JSON
    // в данном случае работа через node запуск только с сервером js
    // async loadProjectsData() {
    //   try {
    //     // Пробуем загрузить с сервера
    //     const response = await fetch('/api/projects');
    //
    //     if (response.ok) {
    //       const data = await response.json();
    //       this.projectsData = data;
    //     } else {
    //       // Fallback: загружаем из локального файла
    //       const localResponse = await fetch('projects-data.json');
    //       const localData = await localResponse.json();
    //       this.projectsData = localData;
    //     }
    //
    //     this.updateTabData();
    //   } catch (error) {
    //     console.error('Error loading projects data:', error);
    //     const savedData = localStorage.getItem('projectsData');
    //     if (savedData) {
    //       this.projectsData = JSON.parse(savedData);
    //       this.updateTabData();
    //     }
    //   }
    // },
    // async saveChanges() {
    //   try {
    //     // Отправляем данные на сервер
    //     const response = await fetch('/api/projects', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(this.projectsData)
    //     });
    //
    //     if (response.ok) {
    //       const result = await response.json();
    //       alert('Данные успешно сохранены на сервере!');
    //     } else {
    //       throw new Error('Server error');
    //     }
    //   } catch (error) {
    //     console.error('Error saving to server:', error);
    //     this.downloadJSON();
    //   }
    // },

// в данном случае это для сервера стороннего. Данные читает из файла и при сохранении предлагает скачать файл и заменить на сервере

    async loadProjectsData() {
      try {
        // Для файла в корне проекта используем относительный путь
        // Если index.html в корне, то файл будет доступен по пути '/projects-data.json'
        // Но так как вы разрабатываете через webpack-dev-server, файл нужно поместить в папку public

        let response = await fetch('/projects-data.json');

        // Проверяем, получили ли мы JSON
        const text = await response.text();

        // Пробуем распарсить как JSON
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

        // Альтернативный способ: попробуем загрузить из разных мест
        const paths = [
          './projects-data.json',
          '../projects-data.json',
          'projects-data.json'
        ];

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
          // Используем fallback данные
          console.warn('Using fallback data');
          this.projectsData = {
            portfolio: [
              {
                link: "https://example.com",
                linkText: "Example Project",
                source: "https://github.com",
                description: "Please replace projects-data.json file"
              }
            ],
            vue: [],
            javascript: []
          };
          this.updateTabData();
        }
      }
    },
    saveChanges() {
      // Сохраняем в localStorage для текущей сессии
      localStorage.setItem('projectsData', JSON.stringify(this.projectsData));
      // Скачиваем JSON файл
      this.downloadJSON();
    },


    // Авторизация
    handleLogin() {
      if (this.loginForm.username === 'komaroffAnatoliy' && this.loginForm.password === 'dncornholio12345') {
        this.isAdmin = true;
        this.showLoginModal = false;
        this.loginError = '';
        localStorage.setItem('adminAuth', 'true');

        // Убираем параметр admin из URL
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

    // Админские функции
    getTabTitle(tabId) {
      const titles = {
        portfolio: 'Portfolio Links',
        vue: 'Vue.js',
        javascript: 'JavaScript'
      };
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

      alert('JSON файл скачан! Замените projects-data.json на сервере.');
    },


    // Ваши существующие методы
    changeTabs(idx) {
      this.tabs.forEach((val) => {
        val.visibility = false
      })
      this.tabs[idx].visibility = true
      this.updateUrl(this.tabs[idx].id)
    },

    updateUrl(tabId) {
      const url = new URL(window.location.href)
      url.searchParams.set('tab', tabId)
      window.history.pushState({}, '', url)
    },

    getTabFromUrl() {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.get('tab')
    },

    activateTabById(tabId) {
      const tabIndex = this.tabs.findIndex(tab => tab.id === tabId)
      if (tabIndex !== -1) {
        this.changeTabs(tabIndex)
      }
    }
  },
  async mounted() {
    console.log('App mounted - checking URL parameters');

    // Сначала проверяем URL параметры
    this.checkUrlForAdmin();

    const tabFromUrl = this.getTabFromUrl()
    console.log('Tab from URL:', tabFromUrl);

    if (tabFromUrl) {
      this.activateTabById(tabFromUrl)
    }

    // Загружаем данные
    await this.loadProjectsData();

    // Проверяем авторизацию в localStorage
    if (localStorage.getItem('adminAuth') === 'true') {
      this.isAdmin = true;
      console.log('Admin auth found in localStorage');
    }
  }
}
</script>

