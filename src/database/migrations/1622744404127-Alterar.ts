import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class Alterar1622744404127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('exames', 'nome');

        await queryRunner.addColumn(
            'exames', 
            new TableColumn({
                name: 'nome_id',
                type:'uuid',
                isNullable:true,
            }),
        );

        await queryRunner.createForeignKey('exames', new TableForeignKey({
            name: 'ExamesNome',
            columnNames:['nome_id'],
            referencedColumnNames:['id'],
            referencedTableName:'cadastros',
            onDelete:'SET NULL',
            onUpdate:'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('exames', 'ExamesNome');

        await queryRunner.dropColumn('exames', 'nome_id');

        await queryRunner.addColumn('exames', new TableColumn({
            name: 'nome',
            type: 'varchar',
            isNullable: false,
        }))
    }

}
