import { Extension } from "./getColorByExtension";

export const getExtensionFromFileName = (mimetype: string) => {
  return mimetype.split("/").pop() as Extension;
};
