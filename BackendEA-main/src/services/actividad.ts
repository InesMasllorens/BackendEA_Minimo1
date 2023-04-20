//In charge to connect with the dB
import { Actividad } from "../interfaces/actividad.interface";
import ActividadModel from "../models/actividad";
import GrupoModel from "../models/grupo";
import TicketModel from "../models/ticket";
import { Types } from "mongoose";

const insertActividad1 = async(item: Actividad) => {
    const responseInsert = await ActividadModel.create(item);
    return responseInsert;
};

const getActividades1 = async() => {
    const responseItem = await ActividadModel.find({});
    return responseItem;
};

const getActividad1 = async(id: string) => {
    const responseItem = await ActividadModel.findOne({_id: id});
    return responseItem;
};

const updateActividad1 = async(id: string, data: Actividad) => {
    const responseItem = await ActividadModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteActividad1 = async(id: string) => {
    const responseItem = await ActividadModel.findOneAndRemove({_id: id});
    return responseItem;
}

const getTicketsOfUser = async(id: string) => {
    const responseItem = await GrupoModel.find({"users": new Types.ObjectId(id)}).populate('tickets');
    const tickets=responseItem.map(grupo=>grupo.tickets);
    return tickets;
};



export {insertActividad1, getActividad1, getActividades1, updateActividad1, deleteActividad1, getTicketsOfUser};