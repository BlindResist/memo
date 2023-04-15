import {
  IPageStructure,
} from '@/models/main.model'

export interface IChecklistsContentItem {
  id: number,
  name: string,
  positive: boolean,
  negative: boolean,
  memo: string
}

export interface IChecklists extends IPageStructure<IChecklistsContentItem> {
  selectedChecklist: number | null,
}
