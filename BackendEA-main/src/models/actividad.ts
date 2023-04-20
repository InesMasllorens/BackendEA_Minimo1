import {  Schema, Types, model, Model } from "mongoose";
import { Actividad } from "../interfaces/actividad.interface";

const ActividadSchema = new Schema<Actividad>(
    {
        name:{
            type: String,
            required:true,
        },
        nameActividad:{
            type: String,
            required:true,
        },
        idTicketActividad:{
            type: String,
            required:true,
        },
        pagado:{
            type: String,
            required:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const ActividadModel = model('actividades', ActividadSchema);

export default ActividadModel;