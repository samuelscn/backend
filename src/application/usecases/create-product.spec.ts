import { inMemoryProductsRepository } from "../../../tests/repositories/in-memory-products-repository";
import { Product } from "../../domain/entities/product";
import { CreateProduct } from "./create-product";

describe('Create product use case', () => {
  it('should be able to create a new product', async () => {
    const productsRepository = new inMemoryProductsRepository();
    const sut = new CreateProduct(productsRepository);

    const product = await Product.create({
      name: 'Isca de Tilapia',
      description: 'prato com isca de tilapia',
      value: 100,
    });

    const response = await sut.execute({
      name: product.props.name,
      description:  product.props.description,
      value: product.props.value,
    });

    expect(response).toBeTruthy()
  });
});