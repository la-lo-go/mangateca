// Enum with the Sites properties and methods
interface Sites {
  [key: string]: {
    color: string;
    CorsProtection: boolean;
  };
}

const Sites : Sites = {
  "mangadex": {
    color: "badge-primary",
    CorsProtection: false,
  },
  "nyaa": {
    color: "badge-secondary",
    CorsProtection: true,
  },
  "inmanga": {
    color: "badge-accent",
    CorsProtection: false,
  },
  "mangafox": {
    color: "badge-success",
    CorsProtection: false,
  },
}


export function GetColor(site: string): string {
  const siteL = site.toLowerCase();
  
  return siteL in Sites ? Sites[siteL].color : "info";
}
