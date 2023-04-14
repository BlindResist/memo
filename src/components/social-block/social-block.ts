import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'social-block',
  setup () {
    const { state } = useStore()
    const data = state.social

    return {
      data
    }
  }
})
