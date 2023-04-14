import { IRecordsListItem } from '@/models/main.model'
import { IChecklistsContentItem } from '@/models/checklists.model'

export const checklistsRecordsListData: IRecordsListItem[] = [
  {
    name: 'Тестовый чеклист',
    id: 1
  }
]

export const checklistsRecordsContentData: IChecklistsContentItem[] = [
  {
    id: 1,
    items: [
      {
        name: 'Пункт 1',
        positive: false,
        negative: false,
        memo: ''
      }
    ]
  }
]

export const checklistsData = {
  records: checklistsRecordsListData,
  content: checklistsRecordsContentData
}
