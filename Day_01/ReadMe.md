# Day_01

## Redis Commands

### Primitive Values

---

Adding Key-Value Pair:

`SET key value`

Get Value from Key:

`GET key`

Check if Key Exists:

`EXISTS key`

Display All Keys:

`KEYS *`

Delete Key:

`DEL KEY`

Expire key after certain time(in secs):

`EXPIRE KEY TIME`

Add Key-Value Pair with Expiry:

`SETEX KEY TIME VALUE`

---

### Arrays

Add element to start of Array:

`LPUSH KEY ELEMENT`

Add element to the end of Array:

`RPUSH KEY ELEMENT`

Display Array:

`LRANGE KEY START_INDEX END_INDEX`

Remove element from start of Array:

`LPOP KEY`

Remove element from the end of Array:

`RPOP KEY`

---

### Objects

Add field to Object

`HSET KEY FIELD VALUE`

Get field Value from Key:

`HGET key field`

Check if field Exists in key:

`HEXISTS key field`

Display All fields in key:

`HKEYS KEY`

Delete field in key:

`HDEL KEY FIELD`

## Postgres Commands

### Basic Commands

---

Start Postgres:

`psql -U postgres`

Create a User:

`CREATE USER username WITH PASSWORD password;`

Create Database:

`CREATE DATABASE database_name;`

Drop Database:

`DROP DATABASE database_name;`

Grant Privileges:

`GRANT [PRIVILEGES] ON database_name TO username;`

Connect to a Database:

`\c database_name;`

List all Databases:

`\l;`

Create a table:

```sql
CREATE TABLE table_name(
    COLUMN1 DATATYPE CONSTRAINTS,
    COLUMN2 DATATYPE CONSTRAINTS,...
    COLUMNN DATATYPE CONSTRAINTS,
);
```

List all Tables in current Database:

`\d;`

Display Structure of table:

`\d table_name;`

Drop a Table:

`DROP TABLE table_name;`
