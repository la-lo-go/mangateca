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
  "mangaoni": {
    color: "badge-success",
    CorsProtection: true,
  },
}


export function GetColor(site: string): string {
  const siteL = site.toLowerCase();
  
  return siteL in Sites ? Sites[siteL].color : "info";
}

export function GetCorsProtection(site: string): boolean {
  const siteL = site.toLowerCase();
  
  return siteL in Sites ? Sites[siteL].CorsProtection : true;
}