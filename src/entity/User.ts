import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;
}

