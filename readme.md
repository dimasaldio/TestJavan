ini adalah api services untuk testJavan menggunakan SEQUELIZE
<br>
<br>

untuk menjalankan : <br>
- npm install <br>
- buat file .env <br>
- isi .env sesuai env_example<br>
- npm run dev<br>


end point yang digunakan : <br>
- router.post('/family/add') untuk menambah anggota keluarga<br>
- router.put('/family/:familyName') untuk mengedit anggota keluara<br>
- router.delete('/family/delete/:familyName') untuk menghapus anggota keluarga<br>
<br> <br>
- router.post('/aset/add/:familyName') untuk menambah aset <br>
- router.put('/aset/:familyName/:asetID') untuk mengedit aset <br>
- router.delete('/aset/delete/:familyName/:asetID') untuk menghapus aset <br>
<br><br>

tabel yang digunakan : <br>
- user : 
    - name <br>
    - gender <br>
    - status (tertua/anak/cucu) <br>
    - asetValue (jumlah aset yang dimiliki oleh user)<br>
- aset :
    - aset <br>
    - owner <br>
    - price <br>

<br> <br>

SCRIPT SQL tanpa sequelize : <br>

CREATE DATABASE TestJavan; <br>

CREATE TABLE users (
	id UUID PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	gender VARCHAR ( 50 ) NOT NULL,
	status VARCHAR ( 255 ) NOT NULL,
    assetValue INTEGER NULL
);

CREATE TABLE asets (
	id UUID PRIMARY KEY,
    owner VARCHAR( 50 ) NOT NULL,
    aset VARCHAR( 50 ) NOT NULL,
    price INTEGER NOT NULL,
    FOREIGN KEY (userId)
      REFERENCES roles (userId),
);


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO users (id,name,gender,status) VALUES (gen_random_uuid(),'Bani','Laki-Laki','Tertua'), (gen_random_uuid(),'Budi','Laki-Laki','Anak'), (gen_random_uuid(),'Hari','Laki-Laki','Cucu'), (gen_random_uuid(),'Siti','Perempuan','Cucu'), (gen_random_uuid(),'Nida','Perempuan','Anak'), (gen_random_uuid(),'Bila','Perempuan','Cucu'), (gen_random_uuid(),'Lesti','Perempuan','Cucu'), (gen_random_uuid(),'Andi','Laki-Laki','Anak'), (gen_random_uuid(),'Diki','Laki-Laki','Cucu'), (gen_random_uuid(),'Sigit','Laki-Laki','Anak'), (gen_random_uuid(),'Doni','Laki-Laki','Cucu'), (gen_random_uuid(),'Toni','Laki-Laki','Cucu');

INSERT INTO users (id,owner,aset,price) VALUES (gen_random_uuid(),'Bani',NULL,NULL), (gen_random_uuid(),'Budi','Samsung Universe 9',NULL), (gen_random_uuid(),'Budi','Samsung Galaxy Book',NULL) (gen_random_uuid(),'Hari','iPhone 9', NULL), (gen_random_uuid(),'Siti','iPhone X',NULL), (gen_random_uuid(),'Nida','Huawei P30',NULL), (gen_random_uuid(),'Bila','Samsung Universe 9',NULL), (gen_random_uuid(),'Lesti','Huawei P30',NULL), (gen_random_uuid(),'Lesti','iPhone X',NULL), (gen_random_uuid(),'Andi','Samsung Universe 9',NULL), (gen_random_uuid(),'Diki','Samsung Galaxy Book',NULL), (gen_random_uuid(),'Sigit','Huawei P30',NULL), (gen_random_uuid(),'Doni',' iPhone X',NULL), (gen_random_uuid(),'Toni',NULL,NULL);

