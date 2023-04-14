<template>
  <div class="page">
    <records-list :data="recordsList"/>
    <div class="content">
      <checklist-item
        v-for="item in checklistData"
        :key="item.id"
        :data="item"
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

export default defineComponent({
  name: 'checklists-page',
  components: {
    RecordsList,
    ChecklistItem
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
