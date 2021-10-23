import {MigrationInterface, QueryRunner} from "typeorm";

export class FakePatients1634917264004 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Loree', 'Tonbye', 'H300', 53, 102, '1/8/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Cortie', 'Fransson', 'S82891K', 45, 101, '3/2/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Mercy', 'Spalls', 'H35141', 52, 100, '9/3/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Meggi', 'Sudworth', 'Z4901', 61, 108, '3/12/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Meredith', 'Edmund', 'S93303A', 5, 104, '11/22/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Susannah', 'Bolstridge', 'O368122', 42, 104, '4/23/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Shellysheldon', 'Cristofori', 'V685XXS', 83, 100, '1/5/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Carlo', 'Lydford', 'H26062', 52, 105, '8/22/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Adara', 'Holson', 'Y655', 61, 105, '10/18/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Therine', 'Cammidge', 'S01441D', 52, 102, '4/26/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Reid', 'Wallen', 'T84117D', 53, 104, '2/20/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Ardisj', 'Petru', 'Y37111', 85, 108, '10/26/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Miranda', 'Emnoney', 'S52254N', 31, 103, '5/22/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Sapphire', 'Gilchrist', 'H20042', 91, 109, '8/12/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Felicity', 'Dubois', 'S31621A', 18, 107, '11/17/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Cayla', 'Shear', 'X810XXA', 73, 102, '4/14/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Clementia', 'Featherstone', 'S52202Q', 65, 106, '9/20/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Nessie', 'Mosdall', 'T22212D', 60, 101, '6/28/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Jesus', 'Fredson', 'S52551P', 71, 101, '12/10/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Jesse', 'Edel', 'S82152J', 35, 101, '7/4/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Phylis', 'Helliker', 'S90423D', 11, 103, '3/15/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Georgette', 'Vidgen', 'S42354G', 96, 101, '8/26/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Wilmer', 'Swaffer', 'S52323N', 54, 108, '7/6/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Delphinia', 'Wybron', 'M913', 42, 107, '3/4/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Meade', 'Scardafield', 'H01011', 51, 102, '4/16/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Minna', 'O''Sharry', 'C8120', 45, 108, '4/21/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Chan', 'Moulder', 'S49099G', 18, 109, '4/6/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Gracia', 'Plumb', 'H1713', 85, 109, '3/26/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Salvador', 'Yglesias', 'S27818A', 67, 108, '10/7/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Ida', 'Antonchik', 'T7421XS', 75, 100, '11/6/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Jeddy', 'Bartali', 'S31111', 100, 106, '8/20/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Errol', 'Calvie', 'S68610A', 30, 106, '3/29/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Carmine', 'Leckie', 'T23429', 84, 107, '12/11/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Mariya', 'Gaylord', 'S0211D', 45, 108, '7/25/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Lora', 'De Ambrosis', 'S82892B', 20, 101, '5/17/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Evelina', 'Abley', 'M80862S', 72, 103, '10/14/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Lorenza', 'Shorbrook', 'T81529D', 14, 100, '4/25/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Hector', 'Barwack', 'T85113A', 75, 109, '12/11/2020');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Lammond', 'Lemonby', 'S92042S', 82, 108, '1/8/2021');
  insert into Patient (firstname, lastname, diagnosis, age, room, "createdAt") values ('Dag', 'Cona', 'Z9113', 64, 100, '11/24/2020');
  `);
    }
  
    public async down(_: QueryRunner): Promise<void> {}
  }