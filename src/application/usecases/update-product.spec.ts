import { inMemoryProductsRepository } from "../../../tests/repositories/in-memory-products-repository";
import { Product } from "../../domain/entities/product";

describe('Update product use case', () => {
  it('should be able to update a new product', async () => {
    const productsRepository = new inMemoryProductsRepository();

    const newProduct = await Product.create({
      name: 'Isca de Tilapia',
      description: 'prato com isca de tilapia',
      value: 100,
    });

    const resultProduct = await productsRepository.save(newProduct);
    const product = await productsRepository.findById(resultProduct.id);

    if (!product) {
      return expect(null).toBeTruthy();
    }
    const updProduct = {
      _id: '',
      props: {
        name: 'product.props.name',
        description: 'prato',
        value: 50,
      }
    }
    const resultUpdateRepository = await productsRepository.update(product.id, updProduct);

    console.log(resultUpdateRepository);

    expect(product).toBeTruthy();
  });
});