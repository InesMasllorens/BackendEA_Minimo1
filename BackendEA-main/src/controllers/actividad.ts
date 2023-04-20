import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertActividad1, getTicketsOfUser, getActividad1, getActividades1,updateActividad1, deleteActividad1 } from "../services/actividad";

const getActividad=async({params}:Request,res:Response)=>{
    try{
        const {idActividad}=params;
        const response=await getActividad1(idActividad);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ACTIVIDAD");
    }
};

const getActividades=async(req:Request,res:Response)=>{
    try{
        const response=await getActividades1();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_ACTIVIDADES");
    }
};


const updateActividad=async ({params,body}:Request,res:Response)=>{
    try{
        const {idActividad}=params;
        const response=await updateActividad1(idActividad,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_ACTIVIDAD");
    }
};

const postActividad=async ({body}:Request,res:Response)=>{
    try{
        const responseActividad=await insertActividad1(body);
        res.send(responseActividad);
    }catch(e){
        handleHttp(res,"ERROR_POST_ACTIVIDAD");
    }
};

const deleteActividad=async ({params}:Request,res:Response)=>{
    try{
        const {idActividad}=params;
        const response=await deleteActividad1(idActividad);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_ACTIVIDAD");
    }
};


const ticketsOfUser=async({params}:Request,res:Response)=>{
    try{
        const {idUser}=params;
        const response=await getTicketsOfUser(idUser);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_TICKETS_OF_USER");
    }
};

export{getActividad,getActividades,postActividad, updateActividad,deleteActividad, ticketsOfUser};