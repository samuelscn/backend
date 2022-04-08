import { ProductsRepository } from '../../src/application/repositories/ProductsRepository';
import { Product } from '../../src/domain/entities/product';

export class inMemoryProductsRepository implements ProductsRepository {
  public productsList: Product[] = [];

  async save(productData: Product): Promise<Product> {
    this.productsList.push(productData);

    return productData;
  }

  async findById(id: string): Promise<Product | null> {
    const product =  this.productsList.find((product) => product.id === id);

    if (!product) {
      return null;
    }

    return product;
  }

  async update(id: string, { props: productData }: Product): Promise<Product | null> {
    const resultFindProduct = await this.findById(id);

    if (!resultFindProduct) {
      return null;
    }

    const productIndex = this.productsList.findIndex((product) => product.id === resultFindProduct.id);
    this.productsList[productIndex].props = productData;
    return this.productsList[productIndex];
  }
}