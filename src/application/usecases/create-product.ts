import { Product } from "../../domain/entities/product"
import { ProductsRepository } from "../repositories/ProductsRepository";

type CreateProductRequest = {
	name: string,
	description: string,
	value: number,
}

export class CreateProduct {
  constructor(
    private productsRepository: ProductsRepository
  ) {}

	async execute({ name, description, value }: CreateProductRequest): Promise<Product | null> {
		const product = await Product.create({
			name,
			description,
			value
		});
    const productResult = await this.productsRepository.save(product);
    return productResult;
	}
}