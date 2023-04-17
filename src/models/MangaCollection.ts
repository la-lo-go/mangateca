import type { Manga } from "./Manga";

export class MangaCollection {
    mangas: Manga[];
  
    constructor(jsonString: string) {
      this.mangas = JSON.parse(jsonString);
    }
  }