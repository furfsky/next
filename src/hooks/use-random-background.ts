import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "app", "public", "backgrounds");
const images = fs.readdirSync(IMAGES_DIR);

export const useRandomBackground = () => `/backgrounds/${images[Math.floor(Math.random() * images.length)]}`;
