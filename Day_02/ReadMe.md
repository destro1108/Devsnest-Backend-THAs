# Day_02

## Postgres Commands

1. Create Database Devs;

   ```sql
   CREATE DATABASE devs;
   ```

2. Give Priveleges to User:

   ```sql
   GRANT ALL PRIVELEGES ON devs TO destro;
   ```

3. Connect Database:

   ```
   \c devs
   ```

4. Create Table company:

   ```sql
   CREATE TABLE company(
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR[50],
    SALARY REAL
   );
   ```

5. Create Table Department:

   ```sql
   CREATE TABLE department(
    ID INT PRIMARY KEY NOT NULL,
    DEPT CHAR(50) NOT NULL,
    EMP_ID INT NOT NULL
   );
   ```

6. Create Schema mySchema:

   ```sql
   CREATE SCHEMA mySchema;
   ```

7. Create Table mySchema.company:

   ```sql
   CREATE TABLE mySchema.company(
     ID INT PRIMARY KEY NOT NULL,
     NAME VARCHAR(20) NOT NULL,
     AGE INT NOT NULL,
     ADDRESS CHAR(28),
     SALARY DECIMAL(18,2),
     JOIN_DATE DATE
   );
   ```

8. Insert data [
   (1, 'Joseph', 25, 'Barcelona', 28000.00,'2019-07-08'),
   (2,'Mario',24,'Milan',25055.01,'2019-10-11'),
   (3,'Victor',26, 'Madrid',21000.00,'2020-01-02'),
   (4, 'David',29, 'Manchester',31000.00,'2020-03-15')]
   into table company:

   ```sql
    INSERT INTO mySchema.company(
     ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE
    ) VALUES (
     1, 'Joseph', 25, 'Barcelona', 28000.00,'2019-07-08'
    );

    INSERT INTO mySchema.company(
     ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE
    ) VALUES (
     2,'Mario',24,'Milan',25055.01,'2019-10-11'
    );

    INSERT INTO mySchema.company(
     ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE
    ) VALUES (
     3,'Victor',26, 'Madrid',21000.00,'2020-01-02'
    );

    INSERT INTO mySchema.company(
     ID, NAME, AGE, ADDRESS, SALARY, JOIN_DATE
    ) VALUES (
     4, 'David',29, 'Manchester',31000.00,'2020-03-15'
    );
   ```

9. Display data from table mySchema.company:

   ```sql
    SELECT * FROM mySchema.company;
   ```

10. Display Data from myScheme.company where age >= 25 and salary > 25000

    ```sql
    SELECT * FROM mySchema.company WHERE AGE >= 25 AND SALARY > 25000;
    ```

11. Display data from mySchema.company where salary != null:

    ```sql
    SELECT * FROM mySchema.company WHERE SALARY IS NOT NULL;
    ```

12. Display data from myScheme.company where name starts from 'D';

    ```sql
    SELECT * FROM mySchema.company WHERE NAME LIKE 'D%';
    ```

13. Type Cast salary to text:

    ```sql
    SELECT * FROM mySchema.company WHERE SALARY::TEXT LIKE '2%';
    ```

14. Display data from myScheme.company where 25 <= AGE <= 28:

    ```sql
    SELECT * FROM mySchema.company WHERE AGE BETWEEN 25 AND 28;

    SELECT * FROM mySchema.company WHERE AGE IN (25,28);
    ```

15. Display data from myScheme.company where age not between 25 & 28:

    ```sql
    SELECT * FROM mySchema.company WHERE AGE NOT BETWEEN 25 AND 28;
    ```

16. Arithmetic Operations in Select:

    ```sql
    SELECT (15+2) AS "ADDITION";
    ```

17. Update table company set salary as 35000 where id is 3:

    ```sql
    UPDATE mySchema.company SET SALARY = 35000.00 WHERE ID=2;
    ```

18. Delete row having ID 2:

    ```sql
    DELETE FROM mySchema.company WHERE ID=2;
    ```

19. Create table mySchema.department:

    ```sql
    CREATE TABLE mySchema.department(
     ID INT NOT NULL,
     DEPT CHAR(50) NOT NULL,
     EMP_ID INT NOT NULL
    );
    ```

20. Create table mySchema.department and mySchema.contacts with foreign key:

    ```sql
    CREATE TABLE mySchema.customers(
     CUSTOMER_ID INT NOT NULL,
     CUST_NAME CHAR(50) NOT NULL,
     PRIMARY KEY(CUSTOMER_ID)
    );

    CREATE TABLE mySchema.contacts(
     CONTACT_ID INT PRIMARY KEY,
     CUSTOMER_ID INT,
     CONTACT_NAME VARCHAR(200) NOT NULL,
     PHONE VARCHAR(50),
     CONSTRAINT FKEY_CUST
     FOREIGN KEY(CUSTOMER_ID)
     REFERENCES mySchema.customer(CUSTOMER_ID)
    );
    ```
