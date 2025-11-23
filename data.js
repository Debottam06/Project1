import {db} from './db.js';

export async function insert(table,data) {
    const columns = Object.keys(data);
    console.log(columns);
    
    const values = Object.values(data).map(v=>{
        if(typeof v === 'string'){
            return `"${v}"`;
        }
        return v;
    }).join(',');
    console.log(values);
    const sql = `INSERT INTO ${table} (${columns.join(",")}) 
    VALUES (${values})` 
    await db.execute(sql);
}
export async function get(table) {
    const db_sql = `SELECT * FROM ${table}`;
    const [rows] = await db.execute(db_sql);
    return rows;
}
export async function deleteRow(table,data){
    const col = Object.keys(data);
    const row = Object.values(data);
    const db_sql2 = `DELETE FROM ${table} WHERE ${col} = ${row}`;
    await db.execute(db_sql2);
}