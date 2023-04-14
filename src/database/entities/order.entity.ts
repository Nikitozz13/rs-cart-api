import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.carts)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Cart, (cart) => cart.order)
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart: Cart;

  @Column({ type: 'json' })
  payment: string;

  @Column({ type: 'json' })
  delivery: string;

  @Column({ type: 'text' })
  comments: string;

  @Column({ type: 'text' })
  status: string; // enum?

  @Column({ type: 'integer' })
  total: number;
}
