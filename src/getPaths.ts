import fs from 'fs';

export const webPaths = fs.readdirSync("src/pages").map(page=>page.replace(".astro","")).filter(n=>n!=="index")
