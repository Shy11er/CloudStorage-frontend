import React from "react";
import styles from "./FileCard.module.scss";
import { getExtensionFromFileName } from "@/utils/getExtensionFromFileName";
import { isImage } from "@/utils/isImage";
import { getColorByExtension } from "@/utils/getColorByExtension";
import { FileTextOutlined } from "@ant-design/icons";

type Props = {
  filename: string;
  mimetype?: string;
  originalName: string;
};

export const FileCard: React.FC<Props> = ({
  originalName,
  filename,
  mimetype = "file/undefined",
}) => {
  const ext = getExtensionFromFileName(mimetype);
  const imageUrl = ext && isImage(ext) ? filename : "";
  const color = getColorByExtension(ext);
  const classColor = styles[color];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={styles.image} src={imageUrl} alt="file" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};
