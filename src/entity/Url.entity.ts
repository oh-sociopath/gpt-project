import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './User.entity';

@Entity({ name: 'url_entity' })
export class UrlEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar'})
    originalUrl: string;

    @Column({type: 'varchar'})
    shortUrl: string;

    @Column({type: 'date'})
    createdAt: Date;

    @ManyToOne(() => UserEntity, user => user.urls)
    userId: UserEntity
}
