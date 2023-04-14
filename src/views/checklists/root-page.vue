<template>
  <div class="page">
    <records-list :data="data"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent } from 'vue'
import { IRecordsListItem } from '@/models/main.model'
import RecordsList from '@/components/records-list/records-list.vue'

export default defineComponent({
  name: 'checklists-page',
  components: {
    RecordsList
  },
  setup () {
    const { state } = useStore()
    const data: IRecordsListItem[] = state.checklists.records

    return {
      data
    }
  }
})
</script>
