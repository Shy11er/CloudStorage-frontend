import { CloudUploadOutlined } from "@ant-design/icons";
import { Button, Upload, UploadFile, notification } from "antd";
import React from "react";
import styles from "@/styles/Home.module.scss";
import * as Api from "@/api";

type Props = {};

export const UploadButton = (props: Props) => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const files = await Api.file.uploadFile(options);

      setFileList([]);
    } catch (err) {
      //   return alert("Failed to upload files");
      notification.error({
        message: "Error",
        description: "Failed to upload file",
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}
    >
      <Button type="primary" icon={<CloudUploadOutlined />}>
        Upload file
      </Button>
    </Upload>
  );
};
