import { IRecordsListItem } from '@/models/main.model'
import {
  IChecklistsContentItem
} from '@/models/checklists.model'

export const checklistsRecordsListData: IRecordsListItem[] = [
  {
    name: 'Тестовый чеклист 1',
    id: 1
  },
  {
    name: 'Тестовый чеклист 2',
    id: 2
  }
]

export const checklistsRecordsContentData: IChecklistsContentItem[] = [
  {
    id: 1,
    name: 'Пункт 1',
    positive: false,
    negative: false,
    memo: ''
  },
  {
    id: 1,
    name: 'Пункт 2',
    positive: false,
    negative: false,
    memo: ''
  },
  {
    id: 2,
    name: 'Пункт 1',
    positive: false,
    negative: false,
    memo: ''
  }
]

export const checklistsData = {
  selectedChecklist: null,
  records: checklistsRecordsListData,
  content: checklistsRecordsContentData
}
