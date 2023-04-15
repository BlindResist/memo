import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-placeholder',
  props: {
    title: {
      type: String,
      default: 'Упс! Пусто!'
    },
    text: {
      type: String,
      default: 'Что-то пошло не так. Обновите страницу!'
    }
  }
})
