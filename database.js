import mysql2 from 'mysql2';

/*
export const pool = mysql2.createPool({
    host: "216.250.248.152",
    user: "lapaycha_app",
    password: "fawf3taswe1s",
    database: "lapaycha_bd_app_delivery",
    port: 3306,
});
*/


export const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "140502",
    database: "bd_ejercicio_1",
    port: 3306,
});


/*
export const pool = mysql2.createPool({
    host: "containers-us-west-179.railway.app",
    user: "root",
    password: "hkrsQpZMy3wIPEovZsJT",
    database: "railway",
    port: 5938,
});
*/