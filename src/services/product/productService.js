export const uploadProductWithImage = async (formData, addProduct) => {
  const imageFile = formData.image?.[0];
  let imageUrl;

  // TODO: When the image upload microservice is ready,
  // TODO: replace this block to get `imageUrl` from that service.
  if (imageFile) {
    // TODO: imageUrl = await uploadImageToMicroservice(imageFile);
    console.warn('🛑 Image upload service not implemented yet.');
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

  console.log('📦 Product payload to backend:', productToSubmit);

  return addProduct(productToSubmit).unwrap();
};
