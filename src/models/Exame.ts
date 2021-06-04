import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('exames')
class Exames{
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    
    @Column()
    nome_id:String

    @Column()
    Name:string

    @Column()
    tipo: String;
    
    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date
}

export default Exames;