import { Extension } from "./getColorByExtension";

export const getExtensionFromFileName = (fileName: string) => {
  return fileName.split(".").pop() as Extension;
};
