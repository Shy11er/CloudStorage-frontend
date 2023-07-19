const extColors = {
  pdf: "purple",
  xls: "green",
  doc: "blue",
  txt: "blue",
  png: "orange",
  jpg: "orange",
  jpeg: "orange",
  zip: "red",
} as const;

export type Extension = keyof typeof extColors;
export type Color = (typeof extColors)[Extension];

export const getColorByExtension = (ext: string): Color => {
  return extColors[ext];
};
