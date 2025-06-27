import { getPresignedUrl } from '../utils/s3Uploader';

export const uploadProductWithImage = async (formData, addProduct) => {
  const imageFile = formData.image?.[0];
  let imageUrl;


  if (imageFile) {
    const { url, key } = await getPresignedUrl(imageFile.name, imageFile.type);

    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': imageFile.type },
      body: imageFile,
    });

    imageUrl = key;
  }

  const {
    image: _ignoredImage,
    category: _ignoredCategory,
    ...rest
  } = formData;

  const productToSubmit = {
    ...rest,
    ...(imageUrl ? { images: [imageUrl] } : {}),
  };

  console.log('📦 Final Payload:', productToSubmit);

  return addProduct(productToSubmit).unwrap();
};
