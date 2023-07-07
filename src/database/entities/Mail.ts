import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";

import { Account, User } from ".";

@Entity()
export class Mail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mail: string;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => User, (user) => user.mails)
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Account, (account) => account.mail)
  accounts: Account[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
