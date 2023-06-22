import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "user_entity"})
export  class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar'})
    username: string

    @Column({type: 'varchar'})
    email: string

    @Column({type: 'varchar'})
    password: string
}
