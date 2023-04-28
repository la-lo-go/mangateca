export interface MangaInfo {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: any
    name: string
    site: string
    cover: string
    chaptersNumber: number
    chaptersListed: ChaptersListed[]
  }
  
export interface ChaptersListed {
ID: number
CreatedAt: string
UpdatedAt: string
DeletedAt: any
name: string
number: number
linkOriginal: string
}