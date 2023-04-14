import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Cart } from './cart.entity';

@Entity()
export class CartItem {
  @ManyToOne(
    () => Cart,
    (cart) => cart.items,
    {
      nullable: false,
      primary: true
    }
  )
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart: Cart;

  // @OneToOne(() => Product, (product) => product.id)
  // product: Product;
  @Column({ type: 'uuid', nullable: false })
  productId: string;

  @Column({ type: 'integer' })
  count: string;
}
