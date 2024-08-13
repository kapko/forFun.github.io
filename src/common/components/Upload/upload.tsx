import React, { useState } from 'react';
import {Form, Upload} from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type UploadComponentProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const UploadComponent = <T extends FieldValues>(rest: UploadComponentProps<T>)=> {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const {  label} = rest;

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (

  <Controller
    {...rest}
    render={({ field }) => (
      <Form.Item
        label={label ? label : null}
        name={field.name as string}
        rules={[{ required: false }]}
      >
        <ImgCrop rotationSlider>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && '+ Upload'}
          </Upload>
        </ImgCrop>
      </Form.Item>
    )}
  />
  );
};

export default UploadComponent;
