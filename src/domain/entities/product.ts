import { Entity } from "../../core/domain/Entity";

type ProductProps = {
	name: string,
	description: string,
	value: number,
	picture?: string,
	createdAt?: Date,
	updatedAt?: Date,
}

export class Product extends Entity<ProductProps> {
	private constructor(props: ProductProps, id?: string) {
		super(props, id);
	}

	static async create(props: ProductProps, id?: string): Promise<Product> {
		const product = await new Product({
			...props,
			picture: props.picture ?? '',
			createdAt: props.createdAt ?? new Date(),
			updatedAt: props.updatedAt ?? new Date(),
		}, id);

		return product;
	}
}