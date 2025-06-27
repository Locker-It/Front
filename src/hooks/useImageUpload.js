import { useState, useCallback } from 'react';

export const useImageUpload = (setValue) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length > 0) {
        const file = acceptedFiles[0];
        setValue('image', [file]);
        setPreview(URL.createObjectURL(file));
      }
    },
    [setValue]
  );

  return { preview, onDrop };
};
