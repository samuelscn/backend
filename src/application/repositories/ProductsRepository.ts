import { Product } from "../../domain/entities/product";

export interface ProductsRepository {
  save(productData: Product): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  update(id: string, productData: Product): Promise<Product | null>;
}