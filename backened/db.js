import mysql from "mysql2"

export const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Siddh@rth2440",
        database:"blog"
})