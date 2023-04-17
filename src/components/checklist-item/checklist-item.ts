import {
  computed,
  ComputedRef,
  defineComponent,
  Ref,
  ref
} from 'vue'
import { IElementClassObject } from '@/models/main.model'

export default defineComponent({
  name: 'checklist-item',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    isEditDisabled: {
      type: Boolean,
      default: true
    }
  },
  emits: ['item:edit'],
  setup (props, { emit }) {
    const isItemEditDisabled: Ref<boolean> = ref(props.isEditDisabled)
    const disabledProp: ComputedRef<string | null> = computed(
      () => isItemEditDisabled.value ? 'disabled' : null
    )
    const itemClassObject: ComputedRef<IElementClassObject> = computed(() => ({
      'is-editing': !isItemEditDisabled.value
    }))

    const editItem = (): void => {
      emit('item:edit', isItemEditDisabled.value)
      isItemEditDisabled.value = !isItemEditDisabled.value
    }

    const setItemStatus = (status: string): void => {
      console.log(status)
    }

    return {
      disabledProp,
      itemClassObject,

      editItem,
      setItemStatus
    }
  }
})
