import mysql from "mysql2/promise"
import dotenv from "dotenv";
dotenv.config();

export const db =await mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});
console.log("DB Connection successfully");

// await db.execute(`create database mysql_db`); 

// await db.execute(`
//         CREATE TABLE student(
//         id INT AUTO_INCREMENT PRIMARY KEY ,
//         name VARCHAR(50),
//         marks INT
//         );
//     `);
// await db.execute(`
//         CREATE TABLE class(
//         id INT AUTO_INCREMENT PRIMARY KEY ,
//         name VARCHAR(50)
//         );
//     `);