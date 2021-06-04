import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from 'typeorm';

import Exame from './Exame'

@Entity('cadastros')
class Cadastro{
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    
    @Column()
    endereco:String
    
    @Column()
    Laboratorio: String;

    @OneToMany(() => Exame, exame => exame.nome_id)
    @JoinColumn({name: 'nome_id'})
    Lab: Exame;
    
    @Column()
    status: string;
    
    @Column('timestamp with time zone')
    date: Date;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date
}

export default Cadastro;