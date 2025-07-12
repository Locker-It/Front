import React from 'react';

import { useDropzone } from 'react-dropzone';

import SharedTypography from '../../shared/Text/SharedTypography.jsx';
import { DropzoneContainer, PreviewImage } from '../Form.styles.js';
import { IMAGE_DROPZONE_TEXT } from '../forms.constants.js';

const ImageDropzone = ({ onFileSelect, preview: previewProp }) => {

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (!file) return;
    onFileSelect(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropText = isDragActive
    ? IMAGE_DROPZONE_TEXT.DROP_ACTIVE
    : IMAGE_DROPZONE_TEXT.DROP_DEFAULT;

  return (
    <DropzoneContainer
      {...getRootProps()}
      className={isDragActive ? 'active' : ''}
    >
      <input {...getInputProps()} />
      <SharedTypography>{dropText}</SharedTypography>
      {previewProp && <PreviewImage src={previewProp} alt="Preview" />}
    </DropzoneContainer>
  );
};

export default ImageDropzone;
