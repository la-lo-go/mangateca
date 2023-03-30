// Enum with the colors used for each site's logo
const SitesColors : any = {
  "mangadex": "primary",
  "manganyaa": "secondary",
  "inmanga": "accent",
  "tumanganet": "success",
}

export function GetColor(site: string): string {
  site = site.toLowerCase();
  
  return site in SitesColors ? SitesColors[site] : "info";
}
