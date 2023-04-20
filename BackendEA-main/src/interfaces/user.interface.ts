import { ObjectExpression, ObjectId } from "mongoose";

export interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    actividad?: ObjectId[];
}