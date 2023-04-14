import { defineComponent } from 'vue'
import SocialBlock from '@/components/social-block/social-block.vue'

export default defineComponent({
  name: 'app-footer',
  components: {
    SocialBlock
  },
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
})
