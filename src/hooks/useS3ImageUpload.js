import { useState, useCallback } from 'react';

import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import { HTTP_HEADERS } from '../constants/httpHeaders.js';
import { HTTP_METHODS } from '../constants/httpMethods.js';
import { useGetPresignedUrlMutation } from '../services/imageUploadApi.js';

export function useS3ImageUpload() {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [getPresignedUrl] = useGetPresignedUrlMutation();

  const createPreview = useCallback((file) => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  }, [preview]);

  const handleFileSelect = useCallback((file) => {
    createPreview(file);
    setSelectedFile(file);
  }, [createPreview]);

  const uploadFileToS3 = useCallback(async () => {
    if (!selectedFile) return null;
    try {
      const { uploadUrl, publicUrl } = await getPresignedUrl({
        filename: selectedFile.name,
        mimetype: selectedFile.type,
      }).unwrap();

      const res = await fetch(uploadUrl, {
        method: HTTP_METHODS.PUT,
        body: selectedFile,
        headers: { [HTTP_HEADERS.CONTENT_TYPE]: selectedFile.type },
      });

      if (!res.ok) throw new Error(ERROR_MESSAGES.S3_UPLOAD_FAILED);
      return publicUrl;
    } catch (error) {
      console.error(ERROR_MESSAGES.UPLOAD_FAILED, error);
      throw error;
    }
  }, [selectedFile, getPresignedUrl]);

  return {
    preview,
    selectedFile,
    handleFileSelect,
    uploadFileToS3,
  };
}
