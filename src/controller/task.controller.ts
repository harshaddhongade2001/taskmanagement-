import { tasks } from "../config/db.config"
import { Request, Response,NextFunction } from "express";
import { Task } from "../model/task.model";


export const gettask = (req:Request,res:Response):void =>{
   res.status(200).json(tasks)
}

export const specifictask =(req:Request,res:Response) =>{
    const task =tasks.find(t => t.id === parseInt(req.params.id));
    if(!task){
        return res.status(404).send("task is not found");
    }
    res.status(200).json(task)
}

export const createNewtask = (req:Request,res:Response) =>{
    const {title,description} = req.body;
    if(!title || !description){
        return res.status(400).send('title and discription is require')
    }

    const task :Task ={
        id:tasks.length+1,
        title,
        description
    };

    tasks.push(task);
    res.status(201).json(task)
}

export const updatetask = (req:Request,res:Response) =>{
   
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    const { title, description } = req.body;
    if (!task) {
      return res.status(404).send('Task not found');
    }
  
    if (!title || !description) {
      return res.status(400).send('Title and description are required');
    }
  
    task.title = title;
    task.description = description;
    res.status(200).json(task);


}

export const deletetask =(req:Request,res:Response) =>{
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).send('Task not found');
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
}




