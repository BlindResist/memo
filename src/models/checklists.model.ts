export interface IChecklistsContentItemItems {
  name: string,
  positive: boolean,
  negative: boolean,
  memo: string
}

export interface IChecklistsContentItem {
  id: number,
  items: IChecklistsContentItemItems[]
}
