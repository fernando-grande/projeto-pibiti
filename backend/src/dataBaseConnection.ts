import { connect } from "mongoose";

export const dataBaseConnection = async () => {
    try {
        await connect(process.env.DATABASE_URL!)
        console.log("DataBase connected !!")
    } catch(error) {
        console.error("Cant connect to database!", error)
    }
}