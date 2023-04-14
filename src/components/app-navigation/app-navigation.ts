import { useStore } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-navigation',
  setup () {
    const { state } = useStore()
    const data = state.navigation

    return {
      data
    }
  }
})
