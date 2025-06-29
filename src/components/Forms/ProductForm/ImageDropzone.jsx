import React, { useCallback, useState, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';

import SharedTypography from '../../shared/Text/SharedTypography.jsx';
import { DropzoneContainer, PreviewImage } from '../Form.styled.js';
import { IMAGE_DROPZONE_TEXT } from '../forms.constants.js';

const ImageDropzone = ({ onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    onFileSelect(file);
  }, [onFileSelect]);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropText = isDragActive
    ? IMAGE_DROPZONE_TEXT.DROP_ACTIVE
    : IMAGE_DROPZONE_TEXT.DROP_DEFAULT;

  return (
    <DropzoneContainer {...getRootProps()} className={isDragActive ? 'active' : ''}>
      <input {...getInputProps()} />
      <SharedTypography>{dropText}</SharedTypography>
      {preview && <PreviewImage src={preview} alt="Preview" />}
    </DropzoneContainer>
  );
};

export default ImageDropzone;
