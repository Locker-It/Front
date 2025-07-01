import { useState, useEffect, useRef } from 'react';

import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import { HTTP_HEADERS } from '../constants/httpHeaders.js';
import { HTTP_METHODS } from '../constants/httpMethods.js';
import {
  MAX_IMAGE_FILE_SIZE,
  SUPPORTED_IMAGE_TYPES,
} from '../constants/upload.constants.js';
import { useGetPresignedUrlMutation } from '../services/imageUploadApi.js';

export function useImageUpload() {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [getPresignedUrl] = useGetPresignedUrlMutation();
  const previewRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  function createPreview(file) {
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current);
    }
    const objectUrl = URL.createObjectURL(file);
    previewRef.current = objectUrl;
    setPreview(objectUrl);
  }

  useEffect(() => {
    return () => {
      if (previewRef.current) {
        URL.revokeObjectURL(previewRef.current);
      }
    };
  }, []);

  function handleFileSelect(file) {
    if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
      throw new Error(ERROR_MESSAGES.UNSUPPORTED_FILE_TYPE);
    }

    if (file.size > MAX_IMAGE_FILE_SIZE) {
      throw new Error(ERROR_MESSAGES.FILE_TOO_LARGE);
    }

    createPreview(file);
    setSelectedFile(file);
  }

  function uploadFileToS3() {
    if (!selectedFile) return null;

    setIsUploading(true);
    setUploadError(null);

    return getPresignedUrl({
      filename: selectedFile.name,
      mimetype: selectedFile.type,
    })
      .unwrap()
      .then(({ uploadUrl, publicUrl }) =>
        fetch(uploadUrl, {
          method: HTTP_METHODS.PUT,
          body: selectedFile,
          headers: { [HTTP_HEADERS.CONTENT_TYPE]: selectedFile.type },
        }).then((res) => {
          if (!res.ok) throw new Error(ERROR_MESSAGES.S3_UPLOAD_FAILED);
          return publicUrl;
        }),
      )
      .catch((error) => {
        console.error(ERROR_MESSAGES.UPLOAD_FAILED, error);
        setUploadError(error);
        throw error;
      })
      .finally(() => {
        setIsUploading(false);
      });
  }

  function resetPreview() {
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current);
      previewRef.current = null;
    }
    setPreview(null);
    setSelectedFile(null);
  }

  return {
    preview,
    selectedFile,
    handleFileSelect,
    uploadFileToS3,
    resetPreview,
    isUploading,
    uploadError,
  };
}
