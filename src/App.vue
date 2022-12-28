<template>
  <div class="container">

    <div class="card">
      <div class="flex">
        <div class="grid-4">
          <template v-for="(item,index) in tabs">
            <button @click="changeTabs(index)" :class="{active: item.visibility }">{{ item.title }}</button>
          </template>
        </div>
        <!--        <p>Anatoliy Komarov </p>-->
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
            <div class="flex-row items-center flex-between">
              <h1 class="mb-0 mt-0">Anatoliy Komarov</h1>
              <h2 class="mb-0 mt-0">Full-stack developer</h2>
            </div>
            <!--            <h3 class="mb-0">About me</h3>-->
            <hr>
            <p>I'm an enthusiastic and detail-oriented developer seeking a position in a
              company to use my skills in coding, troubleshooting complex problems, and assisting in the timely
              completion of projects.</p>
            <p>My hobby become my work :)</p>
            <hr>
            <h3 class="mb-0">SKILLS</h3>
            <ul class="flex-row">
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>TailWind</li>
              <li>SCSS</li>
              <li>WEBPACK</li>
              <li>GULP</li>
              <li>PHP</li>
              <li>MYSQL</li>
              <li>Laravel</li>
              <li>Wordpress</li>
              <li>Vue.js</li>
              <li>NodeJS</li>
              <li>Git</li>
              <li>Figma</li>
              <li>Photoshop</li>
            </ul>
            <hr>

            <h3 class="mb-0">CONTACTS</h3>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:admin@komaroff.biz">admin@komaroff.biz</a></li>
              <li><strong>Tel.Viber:</strong> <a href="tel:+375(29) 709-60-78"> +375(29) 709-60-78</a></li>
              <li><strong>Telegram:</strong> <a target="_blank"
                                                href="https://t.me/komarov_anatoliy">@komarov_anatoliy</a></li>
              <li><strong>Linkedin:</strong><a target="_blank" href="https://www.linkedin.com/in/anatoliy-komarov/">
                https://www.linkedin.com/in/anatoliy-komarov/</a></li>
            </ul>
            <hr>

            <h3 class="mb-0">EXPERIENCE</h3>
            <ul>
              <li>
                <p>
                  <strong>FRONT-END DEVELOPER • PO SYSTEMS GROUP LTD. (1c-web.com) • JUNE 2022</strong>
                </p>
                <p>
                  Web site development. HTML5, JavaScript, SCSS, CSS3 , Bootstrap5, TailWind, PHP, Laravel, Wordpress
                </p>
              </li>
              <li>
                <p>
                  <strong>FULL-STACK DEVELOPER • VASTERRA (VASTERRA. COM) • 2021 – JUNE 2022</strong></p>
                <p>
                  Web site development. HTML5, JavaScript, SCSS, Gulp, CSS3 , Bootstrap5, TailWind, PHP, Wordpress,
                  Laravel , Vue.js, Webpack, MYSQL, jQuery
                </p>
              </li>

            </ul>

            <hr>

            <h3 class="mb-0">EDUCATION</h3>
            <ul>
              <li>
                <p>
                  <strong>COURSES • 2022 • RS.SCHOOL</strong>
                </p>
                <p>
                  JS/Front-end developer
                </p>
              </li>
              <li>
                <p>
                  <strong>COURSES • 2021 • BELHARD ACADEMY</strong>
                </p>
                <p>
                  Modern front-end with Vue.js
                </p>
              </li>
              <li>
                <p>
                  <strong>COURSES • 2017 • MYFREEDOM</strong>
                </p>
                <p>
                  Full-stack developer. PHP, MYSQL, Laravel
                </p>
              </li>
              <li>
                <p>
                  <strong>COURSES • 2017 • MYFREEDOM</strong>
                </p>
                <p>
                  Front-end developer. HTML, CSS, JavaScript, SASS,GULP
                </p>
              </li>

            </ul>

            <hr>
            <h3 class="mb-0"> LANGUAGES</h3>
            <ul>
              <li>
                <p>
                  <strong>ENGLISH</strong> – B1
                </p>
              </li>
              <li>
                <p>
                  <strong>POLISH</strong> - C1
                </p>
              </li>
            </ul>


          </div>
        </template>


      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      tabs: [
        {
          title: 'About me :)', visibility: true, data: [
            {
              link: 'About me',
              linkText: '',
              source: '',
              description: '',

            },

          ]
        },
        {
          title: 'Portfolio links', visibility: false, data: [
            {
              link: 'https://komarofff-ksenchik-online-store.netlify.app/',
              linkText: 'Online store.',
              source: '#will be later',
              description: 'Vue.js, vue router, vuex. SPA. Online store with filter and cart'
            },
            {
              link: 'https://komarofff.github.io/rs-school/online-zoo/',
              linkText: 'Landing page. Task from rs.school',
              source: 'https://github.com/komarofff/rs-school/tree/main/online-zoo',
              description: 'SCSS, JavaScript, HTML5'
            },
            {
              link: 'https://komarofff.github.io/bootstrap-admin-panel/',
              linkText: 'Admin panel ',
              source: '',
              description: 'Bootstrap, JavaScript'
            },{
              link: 'https://komaroff.biz/front-end/anstel/',
              linkText: 'Internet shop ',
              source: '',
              description: 'HTML5, TailWind CSS, JavaScript, LightGallery, Swiper,GULP'
            }, {
              link: 'https://komaroff.biz/front-end/test-poland/dist/',
              linkText: 'Landing page with gallery',
              source: '',
              description: 'HTML5, SCSS, JavaScript,GULP'
            },
            {
              link: 'https://megapolisre.by/',
              linkText: 'Woocommerce web site   ',
              source: '',
              description: 'Wordpress + Woocommerce + Bootstrap '
            },
            {
              link: 'https://goodwheels.by/',
              linkText: 'Wordpress landing page.',
              source: '',
              description: 'Wordpress +  Bootstrap + JavaScript'
            },
            {
              link: 'https://komaroff.biz/front-end/hp67-webarray/dist/',
              linkText: 'Landing page  ',
              source: '',
              description: 'Bootstrap + JavaScript + HTML + SCSS'
            },
            {
              link: 'https://komaroff.biz/front-end/0-webarray/dist/',
              linkText: 'Admin panel   ',
              source: '',
              description: 'Bootstrap + JavaScript + Fetch + HTML + SCSS + Drag&Drop + LightGallery'
            },
            {
              link: 'https://komarofff.github.io/admin-panel/',
              linkText: 'Admin panel   ',
              source: 'https://github.com/komarofff/admin-panel',
              description: 'Bootstrap + JavaScript + HTML + SCSS'
            },
            {
              link: 'https://vasterra.com/marangoni',
              linkText: 'Landing page   ',
              source: '',
              description: 'Laravel + JavaScript + SlickSlider + Vue.js'
            },
            {
              link: 'https://vasterra.com/car-industry',
              linkText: 'Landing page. Car industry ',
              source: '',
              description: 'Laravel + JavaScript + SlickSlider + Vue.js'
            },
            {
              link: 'https://www.blackshiprealty.com/',
              linkText: 'Landing for a real estate company  ',
              source: 'https://github.com/komarofff/blackship',
              description: 'Wordpress, Elementor, HTML, Bootstrap, JavaScript, Google map API'
            },
            {
              link: 'https://komarofff.github.io/Yasuhary/',
              linkText: 'Web site for a real estate company  ',
              source: 'https://github.com/komarofff/Yasuhary',
              description: 'HTML, TailWind CSS, JavaScript, Google map API'
            },
            {
              link: 'https://paragonrea.com',
              linkText: 'Wordpress site for a real estate company  ',
              source: 'https://github.com/komarofff/paragon-wordpress5',
              description: 'Wordpress (new types of pages, new meta data), Elementor, Bootstrap, PHP, Ajax, Google map API'
            }, {
              link: 'https://komarofff.github.io/Calendar/Calendar_week-new.html',
              linkText: 'Admin panel (calendar). ',
              source: 'https://github.com/komarofff/Calendar',
              description: ' TailWind + JavaScript + drag&&drop popup (desktop version)'
            },
            {
              link: 'https://komarofff.github.io/upwork/index.html',
              linkText: 'Admin panel ',
              source: 'https://github.com/komarofff/upwork',
              description: 'TailWind + JavaScript (desktop version)'
            },
            {
              link: 'https://komarofff.github.io/page5/index.html',
              linkText: 'Landing page.',
              source: 'https://github.com/komarofff/page5',
              description: ' TailWind + JavaScript + SlickSlider'
            },
            {
              link: 'https://komarofff.github.io/page4/index.html',
              linkText: 'Multi pages  ',
              source: 'https://github.com/komarofff/a1',
              description: 'Laravel + Vue.js + GRID + FLEX + JavaScript + SlickSlider'
            },
            {
              link: 'https://1c-web.com',
              linkText: 'https://1c-web.com',
              source: 'https://github.com/komarofff/1c-web',
              description: 'Multi pages (Laravel + Vue.js + GRID + FLEX + JavaScript + SlickSlider)'
            },
            {
              link: 'https://komarofff.github.io/page2/index.html',
              linkText: 'Internet shop ',
              source: 'https://github.com/komarofff/page2',
              description: ' HTML5, CSS3, JavaScript + slider'
            },
            {
              link: 'https://komarofff.github.io/page1/index.html',
              linkText: 'Landing page (trip to Japan)',
              source: 'https://github.com/komarofff/page1',
              description: 'HTML5, CSS3, JavaScript'
            },
            {
              link: 'https://vasterra.com/blog',
              linkText: 'vasterra.com/blog',
              source: '',
              description: 'Blog.Wordpress'
            },
            {
              link: 'https://vasterra.com/',
              linkText: 'vasterra.com',
              source: '',
              description: 'index page. Laravel + JavaScript + SlickSlider +get data from Wordpress'
            },
            {
              link: 'https://vasterra.com/mobile_experiences',
              linkText: 'vasterra.com/mobile_experiences',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/software_for_startups',
              linkText: 'vasterra.com/software_for_startups',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/prema',
              linkText: 'vasterra.com/prema',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/yablochkov',
              linkText: 'vasterra.com/yablochkov',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/edu',
              linkText: 'vasterra.com/edu',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/docNow',
              linkText: 'vasterra.com/docNow',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/finGo',
              linkText: 'vasterra.com/finGo',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/lms_development',
              linkText: 'vasterra.com/lms_development',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/dfc',
              linkText: 'vasterra.com/dfc',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {
              link: 'https://vasterra.com/graam',
              linkText: 'vasterra.com/graam',
              source: '',
              description: 'Landing. Laravel + JavaScript + SlickSlider +Vue.js'
            },
            {link: 'https://otdyh-v-italyi.ru/', linkText: 'otdyh-v-italyi.ru', source: '', description: 'Wordpress'},
            {
              link: 'https://1c-group.by',
              linkText: '1c-group.by',
              source: '',
              description: 'Modx, PHP, HTML, JavaScript, jQuery'
            },
            {
              link: 'https://1c-po.by',
              linkText: '1c-po.by',
              source: '',
              description: 'Modx, PHP, HTML, JavaScript, jQuery'
            },
            {
              link: 'https://1c-buh.by',
              linkText: '1c-buh.by',
              source: '',
              description: 'Modx, PHP, HTML, JavaScript, jQuery'
            },
            {
              link: 'https://svetelektro.by',
              linkText: 'svetelektro.by',
              source: '',
              description: 'Internet shop. PHP, HTML5, JavaScript, jQuery+Admin panel'
            },
            {
              link: 'https://tdm-electric.by',
              linkText: 'tdm-electric.by',
              source: '',
              description: 'Internet shop. PHP, HTML5, JavaScript, jQuery + Admin panel + integration with the accounting program  '
            },

          ]
        },
        {
          title: 'Vue.js', visibility: false, data: [
            {
              link: 'https://komarofff-ksenchik-online-store.netlify.app/',
              linkText: 'Online store.',
              source: '#will be later',
              description: 'Vue.js, vue router, vuex. SPA. Online store with filter and cart'
            },

            {
              link: 'https://komarofff.github.io/Mars-lightgallery/',
              linkText: 'Get photos from Mars (NASA) ',
              source: 'https://github.com/komarofff/Mars-lightgallery/',
              description: 'Vue.js, axios, NASA api '
            }, {
              link: 'https://komaroff.biz/vue/babka/',
              linkText: 'Jam to jars ',
              source: 'https://github.com/komarofff/Vue.js/tree/main/babka',
              description: 'Vue.js, vuex, vue-router'
            },
            {
              link: 'https://komarofff.github.io/test3/',
              linkText: 'Workers list (filter) ',
              source: 'https://github.com/komarofff/test3',
              description: 'Vue.js'
            },
            {
              link: 'https://komarofff.github.io/currency-test/',
              linkText: 'Getting currency rate + filter  (Api NBRB )',
              source: 'https://github.com/komarofff/currency-test',
              description: 'Vue.js'
            },
            {
              link: '#',
              linkText: 'Tabs',
              source: 'https://github.com/komarofff/front-end',
              description: 'These tabs were made on Vue.js :)'
            },
            {
              link: 'https://komarofff.github.io/todoList/index.html',
              linkText: 'TODO list',
              source: 'https://github.com/komarofff/todoList',
              description: ''
            },
            {
              link: 'https://komarofff.github.io/dealList/',
              linkText: 'Deal list',
              source: 'https://github.com/komarofff/dealList',
              description: ''
            },

          ]
        },
        {
          title: 'JavaScript', visibility: false, data: [
            {
              link: 'https://komarofff.github.io/rs-school/song-bird/dist/index.html',
              linkText: 'Quiz SongBirds. Task from rs.school ',
              source: 'https://github.com/komarofff/rs-school/tree/main/song-bird',
              description: 'JavaScript, TailWind, Webpack'
            }, {
              link: 'https://komarofff.github.io/rs-school/RSS-Gem-Puzzle/',
              linkText: 'The game Gem Puzzle. Task from rs.school ',
              source: 'https://github.com/komarofff/rs-school/tree/main/RSS-Gem-Puzzle',
              description: 'JavaScript'
            },
            {
              link: 'https://komaroff.biz/front-end/0-webarray/dist/',
              linkText: 'Admin panel   ',
              source: '',
              description: 'Bootstrap + JavaScript + Fetch + HTML + SCSS + Drag&Drop + LightGallery'
            },
            // {
            //   link: 'https://komarofff.github.io/JavaScript/ElementPosition.html',
            //   linkText: 'ElementPosition + scroll direction + hash . JavaScript',
            //   source: 'https://github.com/komarofff/JavaScript/blob/main/ElementPosition.html',
            //   description: '1) Determining the position of the element in the browser window. Beginning of actions on the element when displayed in the visibility zone. 2) Checking the address bar for a hash and after the transition an additional scroll (up or down). 3) Determining the direction of scrolling'
            // },
            {
              link: 'https://komarofff.github.io/JavaScript/game-1/',
              linkText: 'Game. Try to catch more squares :)',
              source: 'https://github.com/komarofff/JavaScript/tree/main/game-1',
              description: 'JavaScript game'
            },
            // {
            //   link: 'https://komarofff.github.io/karusel/karusel-levo-pravo.html',
            //   linkText: 'Carousel1 ',
            //   source: 'https://github.com/komarofff/page1',
            //   description: 'JS left-right + drag&drop'
            // },
            // {
            //   link: 'https://komarofff.github.io/karusel/karusel-po-krugu.html',
            //   linkText: 'Carousel2 ',
            //   source: 'https://github.com/komarofff/karusel/blob/main/karusel-po-krugu.html',
            //   description: 'JS left-right + drag&drop in a circle'
            // },
            // {
            //   link: 'https://komarofff.github.io/karusel/slider-without-stop.html',
            //   linkText: 'Slider',
            //   source: 'https://github.com/komarofff/karusel/blob/main/slider-without-stop.html',
            //   description: 'slider-without-stop( left-to-right)'
            // },
            {
              link: 'https://komarofff.github.io/karusel/svg-animation.html',
              linkText: 'SVG animation',
              source: 'https://github.com/komarofff/karusel/blob/main/svg-animation.html',
              description: 'svg-animation ( fill circle)'
            },
            {
              link: 'https://komarofff.github.io/marafon-JS/slider-cars/index.html',
              linkText: 'Slider-flex',
              source: 'https://github.com/komarofff/marafon-JS/tree/main/slider-cars',
              description: 'Slider based on flex grow and flex shrink +JS'
            },
            {
              link: 'https://komarofff.github.io/marafon-JS/slider-up-down/',
              linkText: 'Slider up-to-down',
              source: 'https://github.com/komarofff/marafon-JS/tree/main/slider-up-down',
              description: 'Slider up-down . 1 page, screen size'
            },
            {
              link: 'https://komarofff.github.io/marafon-JS/drag-and-drop/index.html',
              linkText: 'drag&drop',
              source: 'https://github.com/komarofff/marafon-JS/tree/main/drag-and-drop',
              description: 'drag&drop'
            },

          ]
        }
      ]
    }
  },
  methods: {
    changeTabs(idx) {
      this.tabs.forEach((val) => {
        val.visibility = false
      })
      this.tabs[idx].visibility = true

    }
  }

}
</script>

<style>
body {
  background: #454a56;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  word-wrap: break-word;


}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

ul {
  padding-left: 20px;
}

.flex-row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.flex-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.mb-0 {
  margin-bottom: 0;
}

.mt-0 {
  margin-top: 0;
}

ul.flex-row {
  /*padding-left: 10px;*/
  margin-top: 5px;
  margin-bottom: 5px;
}

.flex-row > li {
  margin-right: 40px;
  font-weight: bold;

}

ol {
  padding-left: 15px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.container {
  width: 96vw;
  margin: 0 auto;
  background: #454a56;
  overflow: hidden;
}

.card {
  position: fixed;
  width: 80vw;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  height: 90vh;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}

.scroll {
  padding: 12px;
  overflow-y: auto;
  /*//height: 70vh;*/
  height: 84%;
}

.scroll::-webkit-scrollbar {
  width: 3px;
}

.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #ccc;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #454a56;
}

li {
  margin: 10px 0;
}

a {
  color: #0d0dfa;
  text-decoration: none;
  padding-bottom: 2px;
}

a:hover {
  border-bottom: 2px solid #0d0dfa;
}

.source-code {
  text-decoration: none;
  color: #8c0505;
  font-weight: bold;
}

.source-code:hover {
  border-bottom: 2px solid #8c0505;
}

button {
  background: #454a56;
  color: #fff;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  border-right: 1px solid #fff;
  border-top: 1px solid #454a56;
  border-left: 1px solid #454a56;
  border-bottom: 1px solid #454a56;
  font-size: 20px;
}

button:hover {
  background: #f5f2f2;
  color: #454a56;
  border-right: 1px solid #454a56;
}

.active {
  background: #fff;
  color: #454a56;
  border-right: 1px solid #454a56;
}

@media (max-width: 850px) {
  .flex {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .card {
    max-width: 98vw;
  }
}

@media (max-width: 768px) {
  .grid-4 {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  button {
    font-size: 18px;
    border: 1px solid #454a56;
  }

  .card {
    width: 92vw;
    padding: 10px;
  }

  .scroll {
    padding: 5px;
  }
}

@media (max-width: 450px) {
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 10px 10px 30px 10px;
  }
}

</style>
