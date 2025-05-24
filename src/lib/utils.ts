import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function brightness(color: string, factor: number) {
  const hex = color.startsWith("#") ? color.slice(1) : color;
  if (![3, 6].includes(hex.length)) throw new Error("Invalid Color");

  const fullHex =
    hex.length === 3
      ? hex
          .split("")
          .map(c => c + c)
          .join("")
      : hex;

  const r = Math.min(255, Math.max(0, Number.parseInt(fullHex.slice(0, 2), 16) * factor));
  const g = Math.min(255, Math.max(0, Number.parseInt(fullHex.slice(2, 4), 16) * factor));
  const b = Math.min(255, Math.max(0, Number.parseInt(fullHex.slice(4, 6), 16) * factor));

  return `rgb(${r},${g},${b})`;
}
