// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'

const LocalStorageKey = 'great-draw-and-guess'

Vue.use(iView)

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$storage', {
  value: {
    load: (key = undefined) => {
      let root = JSON.parse(localStorage.getItem(LocalStorageKey) || '{}')
      return key ? root[key] : root
    },
    store: (data = {}, key = undefined) => {
      let root = data
      if (key) {
        root = JSON.parse(localStorage.getItem(LocalStorageKey) || '{}')
        root[key] = data
      }
      localStorage.setItem(LocalStorageKey, JSON.stringify(root))
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
