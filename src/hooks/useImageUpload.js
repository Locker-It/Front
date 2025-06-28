import { useState, useCallback, useEffect } from 'react';

export const useImageUpload = (setValue) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length > 0) {
        const file = acceptedFiles[0];
        setValue('image', [file]);

        if (preview) {
          URL.revokeObjectURL(preview);
        }

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
      }
    },
    [setValue, preview]
  );

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return { preview, onDrop };
};
