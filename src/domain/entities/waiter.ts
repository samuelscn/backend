import { Entity } from "../../core/domain/Entity";

type WaiterProps = {
  email: string;
  password: string;
  name: string;
  createdAt?: Date,
	updatedAt?: Date,
}

export class Waiter extends Entity<WaiterProps> {
  private constructor(props: WaiterProps, id?: string) {
    super(props, id);
  }

  static async create(props: WaiterProps, id?: string): Promise<Waiter> {
    const waiter = new Waiter({
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    }, id);

    return waiter;
  }
}