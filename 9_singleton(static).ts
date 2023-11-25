

////////////////////////////////// Singleton Design Pattern /////////////////////////////////////////////

class DBConnection{
    private static instance: DBConnection;
    private constructor() {
        //do something
    }

    static getInstance(): DBConnection {
        if (DBConnection.instance == null) {
            console.log("Creating new instance in if block");
            DBConnection.instance = new DBConnection();
        }
        console.log("out of if block");
        return DBConnection.instance;
    }

    connect() {
        console.log("Connected to DB");
    }
}


const db = DBConnection.getInstance();
db.connect();