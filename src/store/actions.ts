import {
  Actions,
  ActionTypes,
  AugmentedActionContext,
  MutationTypes,
  State
} from '@/store/types'
import { ActionTree } from 'vuex'

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.CHECKLIST_SELECT] ({ commit }: AugmentedActionContext, id: number) {
    commit(MutationTypes.CHECKLIST_SELECT, id)
  }
}
