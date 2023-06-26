import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UrlEntity } from './Url.entity';

@Entity({name: 'user_entity'})
export  class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar'})
    username: string;

    @Column({type: 'varchar'})
    email: string;

    @Column({type: 'varchar'})
    password: string;

    @OneToMany(() => UrlEntity, url => url.userId)
    urls: UrlEntity[]
}
