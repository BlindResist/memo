import { State } from '@/store/types'
import { socialData } from '@/data/social.data'
import { navigationData } from '@/data/navigation.data'
import { checklistsData } from '@/data/checklists.data'

export const initialState = (): State => {
  return {
    social: socialData,
    navigation: navigationData,
    checklists: checklistsData
  }
}
