import { GetterTree } from 'vuex'
import {
  Getters,
  GetterTypes,
  State
} from '@/store/types'
import { IChecklistsContentItem } from '@/models/checklists.model'

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.CHECKLIST_GET]: (state: State) => state.checklists.content.filter(
    (item: IChecklistsContentItem) => item.id === state.checklists.selectedChecklist
  ) as IChecklistsContentItem[]
}
