import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsEntity } from '../product';
import { ClientEntity } from '../user';
@Entity('users')
export class ShoppingCartEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'float' })
  public total: number;

  @OneToMany(() => ProductsEntity, (products) => products.shoppingCart, {
    cascade: true,
  })
  public products: ProductsEntity[];

  @OneToOne(() => ClientEntity, (client) => client.shoppingCart)
  public client: ClientEntity;
}
