import { FileItem } from "@/api/dto/file.dto";
import { FileActions } from "@/components/FileActions";
import FileList, { FileSelectType } from "@/components/FileList";
import { Empty } from "antd";
import React from "react";
import * as Api from "@/api";

type Props = {
  items: FileItem[];
  withActions?: boolean;
};

export const Files: React.FC<Props> = ({ items, withActions }) => {
  const [files, setFiles] = React.useState(items || []);
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.file.remove(selectedIds);
  };

  const onClickShare = () => {};
  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
              isActive={selectedIds.length > 0}
            />
          )}
          <FileList items={files} onFileSelect={onFileSelect} />
        </>
      ) : (
        <Empty className="empty-block" description="Files are empty" />
      )}
    </div>
  );
};
