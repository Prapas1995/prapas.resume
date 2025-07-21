import Vue from 'vue'
import Vuex from 'vuex'
import VueMeta from 'vue-meta'
// import router from '@/router.js'
// import firebase from '@/firebase.js'

Vue.use(Vuex)
Vue.use(VueMeta)

export default new Vuex.Store({
  state: {
    htmlScrollTop: 0,
    isFullLoading: true,
    // 
    authUser: null,
    browseMenuOpened: true,
    dayList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(e => ({ name: e, short: e.substr(3), shortest: e.substr(1) })),
    locale: 'en',
    monthList: [
      { id: 1, name: 'January', short: 'Jan', count: 31 },
      { id: 2, name: 'February', short: 'Feb', count: 29 },
      { id: 3, name: 'March', short: 'Mar', count: 31 },
      { id: 4, name: 'April', short: 'Apr', count: 30 },
      { id: 5, name: 'May', short: 'May', count: 31 },
      { id: 6, name: 'June', short: 'Jun', count: 30 },
      { id: 7, name: 'July', short: 'Jul', count: 31 },
      { id: 8, name: 'August', short: 'Aug', count: 31 },
      { id: 9, name: 'September', short: 'Sep', count: 30 },
      { id: 10, name: 'October', short: 'Oct', count: 31 },
      { id: 11, name: 'November', short: 'Nov', count: 30 },
      { id: 12, name: 'December', short: 'Dec', count: 31 }
    ],
    swiper: null,
    version: '05012021',
    windowHeight: 600,
    windowWidth: 0
  },

  mutations: {
    SET_STATE (state, { name, key, key2, val }) {
      if (key2) state[name][key][key2] = val
      else if (key) state[name][key] = val
      else state[name] = val
    }
  },

  actions: {
    // async checkAuthen ({ state, commit, dispatch }) {
    //   return new Promise(async (resolve, reject) => {
    //     firebase.auth().onAuthStateChanged(user => {
    //       if (user?.email?.includes('@conicle.com')) {
    //         commit('SET_STATE', { name: 'authUser', val: user })
    //         // console.log('authUser', state.authUser)
    //         resolve(user)
    //       } else dispatch('logout')
    //     })
    //   })
    // },
    // async signInWithPopup ({ state, commit, dispatch }, { provider }) {
    //   try {
    //     firebase.auth().languageCode = 'en'
    //     const { credential, user } = await firebase.auth().signInWithPopup(provider)
    //     // console.log('credential', credential)
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     // console.log('token', credential.accessToken)
    //     // The signed-in user info.
    //     // console.log('user', user)
    //     return { credential, user }
    //   } catch (e) {
    //     console.log(`error code: ${e.code}, message: ${e.message}`)
    //     // The email of the user's account used.
    //     console.log('error email', e.email)
    //     // The firebase.auth.AuthCredential type that was used.
    //     console.log('error AuthCredential', e.credential)
    //     throw e
    //   }
    // },
    // async logout ({ state, commit, dispatch }) {
    //   if (state.authUser) firebase.auth().signOut()
    //   if (router.app._route.path !== '/account/login') router.push({ path: '/account/login', query: { next: router.app._route.path } })
    //   commit('SET_STATE', { name: 'authUser', val: null })
    // }
  }
})
