import React from "react";
import styles from "./FileActions.module.scss";
import { Button, Popconfirm } from "antd";

interface FileActionsProps {
  onClickRemove?: VoidFunction;
  onClickShare?: VoidFunction;
  isActive?: boolean;
}

export const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Share
      </Button>

      <Popconfirm
        title="Remove file(s)?"
        description="All files will be placed in the trash"
        okText="Yes"
        cancelText="No"
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button
          // onClick={onClickRemove}
          disabled={!isActive}
          danger
          type="primary"
        >
          Remove
        </Button>
      </Popconfirm>
    </div>
  );
};
