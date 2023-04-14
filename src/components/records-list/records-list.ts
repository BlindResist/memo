import {
  defineComponent
} from 'vue'
import { useStore } from 'vuex'
import { ActionTypes } from '@/store/types'

export default defineComponent({
  name: 'records-list',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  emits: ['item:click'],
  setup () {
    const { state, dispatch } = useStore()

    const activeRecordClass = (id: number) => ({
      'records-list__item--active': state.checklists.selectedChecklist === id
    })

    const itemClick = (id: number): void => {
      dispatch(ActionTypes.CHECKLIST_SELECT, id)
    }

    return {
      itemClick,
      activeRecordClass
    }
  }
})
