import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateCadastros1622658632697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'cadastros',
                columns: [
                    { 
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'Laboratorio',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'endereco',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name:'updated_at',
                        type: 'timestamp',
                        default:'now()'
                    }
                    
                ],

            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cadastros');
    }

}
