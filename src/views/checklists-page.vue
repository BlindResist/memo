<template>
  <div class="page">
    <records-list :data="recordsList"/>
    <div
      class="content"
      :class="contentClassObject"
    >
      <template v-if="!!checklistData.length">
        <checklist-item
          v-for="item in checklistData"
          :key="item.name"
          :data="item"
          @item:edit="toggleItemEditMode"
        />
      </template>
      <app-placeholder
        v-else
        text="Выберите чеклист из списка слева"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import {
  computed,
  ComputedRef,
  defineComponent,
  ref,
  Ref
} from 'vue'
import {
  IElementClassObject,
  IRecordsListItem
} from '@/models/main.model'
import { IChecklistsContentItem } from '@/models/checklists.model'
import RecordsList from '@/components/records-list/records-list.vue'
import ChecklistItem from '@/components/checklist-item/checklist-item.vue'
import AppPlaceholder from '@/components/app-placeholder/app-placeholder.vue'

export default defineComponent({
  name: 'checklists-page',
  components: {
    RecordsList,
    ChecklistItem,
    AppPlaceholder
  },
  setup () {
    const { state, getters } = useStore()
    const isChecklistItemEditing: Ref<boolean> = ref(false)
    const recordsList: IRecordsListItem[] = state.checklists.records
    const checklistData: ComputedRef<IChecklistsContentItem[]> = computed(() => getters.CHECKLIST_GET)
    const contentClassObject: ComputedRef<IElementClassObject> = computed(() => ({
      'is-blocked': isChecklistItemEditing.value
    }))

    const toggleItemEditMode = (isEditing: boolean): void => {
      isChecklistItemEditing.value = isEditing
    }

    return {
      recordsList,
      checklistData,
      contentClassObject,

      toggleItemEditMode
    }
  }
})
</script>
