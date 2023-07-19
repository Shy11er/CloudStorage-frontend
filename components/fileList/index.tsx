import { FileItem } from "@/api/dto/file.dto";
import React from "react";
import styles from "./FileList.module.scss";
import { FileCard } from "../fileCard";
import { GetServerSidePropsContext } from "next";
import { checkAuth } from "@/utils/checkAuth";

type Props = {
  items: FileItem[];
};

const FileList: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((obj) => (
        <div className="file" key={obj.id}>
          <FileCard originalName={obj.originalName} filename={obj.filename} />
        </div>
      ))}
    </div>
  );
};

export default FileList;
