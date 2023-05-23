import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartEntity } from '../shoppingCart';
import { OrderEntity } from "../order";
@Entity('users')
export class ClientEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    unique: true,
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public email: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public password: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public firstName: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public lastName: string;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public role: string;

  @OneToOne(() => ShoppingCartEntity, (shoppingCart) => shoppingCart.client)
  @JoinColumn({
    name: 'shoppingCartId',
  })
  public shoppingCart: ShoppingCartEntity;

  @OneToMany(() => OrderEntity, (order) => order.client, { cascade: true })
  public order: OrderEntity;
}
