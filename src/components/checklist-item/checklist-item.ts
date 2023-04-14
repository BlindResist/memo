import { defineComponent } from 'vue'

export default defineComponent({
  name: 'checklist-item',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
})
