import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCartEntity } from '../shoppingCart';
@Entity('products')
export class ProductsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    charset: 'utf8mb4',
    collation: 'utf8mb4_general_ci',
  })
  public productName: string;

  @Column({
    type: 'float',
  })
  public productCost: number;

  @Column({})
  public productAvailability: boolean;
  @ManyToOne(() => ShoppingCartEntity, (shopingCart) => shopingCart.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'shoppingCartId',
  })
  public shoppingCart: ShoppingCartEntity;
}
