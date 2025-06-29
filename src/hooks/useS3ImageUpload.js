import { useCallback, useState, useEffect } from 'react';

import { useGetPresignedUrlMutation } from '../services/imageUploadApi';

export const useS3ImageUpload = (setValue) => {
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [getPresignedUrl] = useGetPresignedUrlMutation();

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles?.[0];
      if (!file) return;

      setIsUploading(true);
      setUploadError(null);

      try {
        const { uploadUrl, publicUrl } = await getPresignedUrl({
          filename: file.name,
          mimetype: file.type,
        }).unwrap();

        await fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: { 'Content-Type': file.type },
        });

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        setValue('image', publicUrl);
      } catch (err) {
        setUploadError('Failed to upload image. Please try again.');
        console.error('S3 Upload Error:', err);
      } finally {
        setIsUploading(false);
      }
    },
    [getPresignedUrl, setValue]
  );

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return { preview, onDrop, isUploading, error: uploadError };
};
