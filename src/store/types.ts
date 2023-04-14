import {
  INavigation,
  ISocial
} from '@/models/main.model'
import { IChecklists } from '@/models/checklists.model'

export interface State {
  social: ISocial[],
  navigation: INavigation[],
  checklists: IChecklists
}
