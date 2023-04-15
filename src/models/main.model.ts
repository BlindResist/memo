export interface INavigation {
  id: string,
  link: string,
  name: string
}

export interface ISocial {
  name: string,
  link: string
}

export interface IRecordsListItem {
  name: string,
  id: number
}

export interface IElementClassObject {
  [key: string]: string
}

export interface IPageStructure<T> {
  records: IRecordsListItem[],
  content: T[],
}
