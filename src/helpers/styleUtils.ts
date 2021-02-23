import { FONTSIZE_DEFAULT } from "./constants";

export function pixelToRem(size: number) {
  return (size / FONTSIZE_DEFAULT).toFixed(3);
}

export function calcExperience(actualExperience: number, maxExperience: number) {
  return (actualExperience * 100) / maxExperience;
}