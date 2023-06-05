export interface Chapter {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: any
  name: string
  site: string
  number: number
  pagesNumber: number
  linkOriginal: string
  webID: string
  pages: Page[]
  mangaID: number
}
  
export interface Page {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: any
  number: number
  link: string
  chapterID: number
}