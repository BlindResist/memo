<template>
  <div class="page">
    <records-list :data="recordsList"/>
    <div class="content">
      <template v-if="!!checklistData.length">
        <checklist-item
          v-for="item in checklistData"
          :key="item.id"
          :data="item"
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
  defineComponent
} from 'vue'
import { IRecordsListItem } from '@/models/main.model'
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
    const recordsList: IRecordsListItem[] = state.checklists.records
    const checklistData: ComputedRef<IChecklistsContentItem[]> = computed(() => getters.CHECKLIST_GET)

    return {
      recordsList,
      checklistData
    }
  }
})
</script>
