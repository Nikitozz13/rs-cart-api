import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cart } from './cart.entity';
import { Order } from './order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  carts: Cart[];

  @OneToMany(() => Order, (order) => order.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  orders: Order[];
}
