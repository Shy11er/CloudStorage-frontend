import { FileItem } from "@/api/dto/file.dto";
import React from "react";
import styles from "./FileList.module.scss";
import { FileCard } from "../FileCard";
import { GetServerSidePropsContext } from "next";
import { checkAuth } from "@/utils/checkAuth";
import Selecto from "react-selecto";

export type FileSelectType = "select" | "unselect";

interface Props {
  items: FileItem[];
  onFileSelect: (id: number, type: FileSelectType) => void;
}

const FileList: React.FC<Props> = ({ items, onFileSelect }) => {
  return (
    <div className={styles.root}>
      {items.map((obj) => (
        <div data-id={obj.id} className="file" key={obj.id}>
          <FileCard
            originalName={obj.originalName}
            filename={obj.filename}
            mimetype={obj.mimetype}
          />
        </div>
      ))}

      <Selecto
        container=".files"
        selectableTargets={[".file"]}
        selectByClick
        hitRate={10}
        selectFromInside
        toggleContinueSelect={["shift"]}
        continueSelect={false}
        onSelect={(ev) => {
          ev.added.forEach((el) => {
            el.classList.add("active");
            onFileSelect(Number(el.dataset["id"]), "select");
          });
          ev.removed.forEach((el) => {
            el.classList.remove("active");
            onFileSelect(Number(el.dataset["id"]), "unselect");
          });
        }}
      />
    </div>
  );
};

export default FileList;
