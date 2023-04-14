import { defineComponent } from 'vue'

export default defineComponent({
  name: 'records-list',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
})
