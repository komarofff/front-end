<template>
  <div class="container">

    <div class="card">
      <div class="flex">
        <div>
          <template v-for="(item,index) in tabs">
            <button @click="changeTabs(index)">{{ item.title }}</button>
          </template>
        </div>
        <p>Anatoliy Komarov - frontend developer (admin@komaroff.biz)</p>
      </div>
      <hr>
      <div class="scroll">
        <template v-for="tab in tabs">
          <div v-if="tab.visibility">
            <h2>{{ tab.title }}</h2>
            <ol>
              <li v-for="item in tab.data">
                <a target="_blank" :href="item.link">{{ item.linkText }}</a> <span
                  v-if="item.description.length>0">- {{ item.description }}</span>
                <span v-if="item.source.length>0 "> → <a class="source-code" target="_blank" :href="item.source">  source code </a></span>
              </li>
            </ol>
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
          title: 'Frontend links', visibility: true, data: [
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
              link: 'https://komarofff.github.io/Mars-lightgallery/',
              linkText: 'Get photos from Mars (NASA) ',
              source: 'https://github.com/komarofff/Mars-lightgallery/',
              description: 'Vue.js, axios, NASA api '
            },{
              link: 'https://komaroff.biz/vue/babka/',
              linkText: 'Jam to jars ',
              source: 'https://github.com/komarofff/Vue.js/tree/main/babka',
              description: 'Vue.js, vuex, vue-router'
            },
            // {
            //   link: 'https://komarofff.github.io/test3/',
            //   linkText: 'Workers list (filter) ',
            //   source: 'https://github.com/komarofff/test3',
            //   description: 'Vue.js'
            // },
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
              link: 'https://komarofff.github.io/JavaScript/ElementPosition.html',
              linkText: 'ElementPosition + scroll direction + hash . JavaScript',
              source: 'https://github.com/komarofff/JavaScript/blob/main/ElementPosition.html',
              description: '1) Determining the position of the element in the browser window. Beginning of actions on the element when displayed in the visibility zone. 2) Checking the address bar for a hash and after the transition an additional scroll (up or down). 3) Determining the direction of scrolling'
            },
            {
              link: 'https://komarofff.github.io/JavaScript/game-1/',
              linkText: 'Game. Try to catch more squares :)',
              source: 'https://github.com/komarofff/JavaScript/tree/main/game-1',
              description: 'JavaScript game'
            },
            {
              link: 'https://komarofff.github.io/karusel/karusel-levo-pravo.html',
              linkText: 'Carousel1 ',
              source: 'https://github.com/komarofff/page1',
              description: 'JS left-right + drag&drop'
            },
            {
              link: 'https://komarofff.github.io/karusel/karusel-po-krugu.html',
              linkText: 'Carousel2 ',
              source: 'https://github.com/komarofff/karusel/blob/main/karusel-po-krugu.html',
              description: 'JS left-right + drag&drop in a circle'
            },
            {
              link: 'https://komarofff.github.io/karusel/slider-without-stop.html',
              linkText: 'Slider',
              source: 'https://github.com/komarofff/karusel/blob/main/slider-without-stop.html',
              description: 'slider-without-stop( left-to-right)'
            },
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
  height: 70vh;
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

@media (max-width: 400px) {
  button {
    font-size: 13px;
  }

  .card {
    padding: 10px;
  }
}
</style>
