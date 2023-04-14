import {
  Mutations,
  MutationTypes,
  State
} from '@/store/types'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHECKLIST_SELECT] (state: State, payload: number) {
    state.checklists.selectedChecklist = payload
  }
}
