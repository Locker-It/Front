export function getProductCardProps(product, onSelect) {
  return {
    id: product.id,
    images: product.images,
    name: product.name,
    price: product.price,
    onSelect,
  };
}
