import type { Chapter } from './Chapter'

export interface Manga {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: any
  name: string
  nameJoined: string
  site: string
  link: string
  chaptersNumber: number
  cover: string
  webID: string
  Searches: any
  chapters: Chapter[]
}