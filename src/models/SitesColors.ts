// Enum with the colors used for each site's logo
const SitesColors : any = {
  "mangadex": "badge-primary",
  "nyaa": "badge-secondary",
  "inmanga": "badge-accent",
  "tumanganet": "badge-success",
}

export function GetColor(site: string): string {
  const siteL = site.toLowerCase();
  
  return siteL in SitesColors ? SitesColors[siteL] : "info";
}
