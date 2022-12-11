export const defaultImage = '/assets/default-product-image.png';

export interface Product {
  id?: number;
  imageUrl?: string;
  name?: string;
  price?: number;
}

export class ProductsStateModel {
  products: Product[] = [];
}