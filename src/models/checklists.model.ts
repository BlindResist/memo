import { IRecordsListItem } from '@/models/main.model'

export interface IChecklistsContentItem {
  id: number,
  name: string,
  positive: boolean,
  negative: boolean,
  memo: string
}

export interface IChecklists {
  selectedChecklist: number | null,
  records: IRecordsListItem[],
  content: IChecklistsContentItem[],
}
