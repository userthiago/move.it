import { DEFAULT_FONTSIZE } from "./constants";

export function pixelToRem(size: number) {
  return (size / DEFAULT_FONTSIZE).toFixed(3);
}