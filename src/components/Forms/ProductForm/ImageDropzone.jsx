import React from 'react';

import PropTypes from 'prop-types';

import SharedTypography from '../../shared/Text/SharedTypography.jsx';
import { DropzoneContainer, PreviewImage } from '../Form.styled.js';
import { IMAGE_DROPZONE_TEXT } from '../forms.constants.js';

const ImageDropzone = (props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    preview,
  } = props;

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

ImageDropzone.propTypes = {
  getRootProps: PropTypes.func.isRequired,
  getInputProps: PropTypes.func.isRequired,
  isDragActive: PropTypes.bool.isRequired,
  preview: PropTypes.string,
};

export default ImageDropzone;
