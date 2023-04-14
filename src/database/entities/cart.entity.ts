import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartItem } from './cart-item.entity';
import { Order } from './order.entity';
import { User } from './user.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.carts)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ type: 'date', nullable: false })
  createdAt: string;

  @Column({ type: 'date', nullable: false })
  updatedAt: string;

  @Column({ type: 'text', nullable: false })
  status: string; // enum ?

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
  items: CartItem[];

  @OneToMany(() => Order, (order) => order.cart)
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id' })
  order: Order;
}
