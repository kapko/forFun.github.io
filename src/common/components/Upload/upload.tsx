import React, { useState } from 'react';
import {Form, Typography, Upload,Image} from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import './upload.styles.scss'
import { PlusOutlined } from '@ant-design/icons';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });


const { Text } = Typography
type UploadComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  errors?:string;
}

const UploadComponent = <T extends FieldValues>(rest: UploadComponentProps<T>)=> {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { errors, label} = rest;

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (

  <Controller
    {...rest}
    render={({ field }) => (
      <Form.Item
        label={label ? label : null}
        name={field.name as string}
      >
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          multiple={true}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />)}
        {errors && <Text type="danger">{errors}</Text>}
      </Form.Item>
    )}
  />
  );
};

export default UploadComponent;
