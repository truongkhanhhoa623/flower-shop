import mysql from 'mysql'

const config = {
    host: '127.0.0.1',
    user: 'admin',
    password: '123456@ad',
    // port: '8889'
} 

const con = mysql.createConnection(config)

export default () =>{
    con.connect((err) =>{ 
        if(err){ 
            console.log(err)
            return 
        }
        console.log('Connected MySQL')
        con.query("CREATE DATABASE mydb", function (err, result) {
            console.log("Database created");
          });
    })

}
