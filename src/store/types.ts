import {
  INavigation,
  ISocial
} from '@/models/main.model'
import {
  IChecklists,
  IChecklistsContentItem
} from '@/models/checklists.model'
import { ActionContext } from 'vuex'

export interface State {
  social: ISocial[],
  navigation: INavigation[],
  checklists: IChecklists
}

export enum MutationTypes {
  CHECKLIST_SELECT = 'CHECKLIST_SELECT',
}

export interface Mutations<S = State> {
  [MutationTypes.CHECKLIST_SELECT]: (state: S, payload: number) => void
}

export type AugmentedActionContext = {
  commit: <K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]) => ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export enum ActionTypes {
  CHECKLIST_SELECT = 'CHECKLIST_SELECT',
}

export interface Actions {
  [ActionTypes.CHECKLIST_SELECT]: ({ commit }: AugmentedActionContext, id: number) => void
}

export enum GetterTypes {
  CHECKLIST_GET = 'CHECKLIST_GET'
}

export interface Getters {
  [GetterTypes.CHECKLIST_GET]: (state: State) => IChecklistsContentItem[]
}
