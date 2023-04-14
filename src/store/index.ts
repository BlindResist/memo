import { createStore } from 'vuex'
import { socialData } from '@/data/social.data'
import { navigationData } from '@/data/navigation.data'
import { checklistsData } from '@/data/checklists.data'

export default createStore({
  state: {
    social: socialData,
    navigation: navigationData,
    checklists: checklistsData
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
