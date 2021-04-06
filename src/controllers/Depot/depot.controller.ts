import { Depot } from '../../entity/Depot';
import { Request, Response } from "express";
import { getRepository } from "typeorm";

// 
export const createDepot = async (
    req: Request,
    res: Response
): Promise<Response> => {
  const newDepot = await getRepository(Depot).create(req.body);
    const results = await getRepository(Depot).save(newDepot);
    return res.json(results);
  };
  
  export const getDepots = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const depot = await getRepository(Depot).find();
    return res.json(depot);
  };

  export const getDepot = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(Depot).findOne(req.params.id);
    return res.json(results);
  };
  

  export const updateDepot = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const depot = await getRepository(Depot).findOne(req.params.id);
    if (depot) {
      getRepository(Depot).merge(depot, req.body);
      const results = await getRepository(Depot).save(depot);
      return res.json(results);
    }
  
    return res.json({msg: 'Not user found'});
  };
  
  export const deleteDepot = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Depot).delete(req.params.id);
    return res.json(results);
  };
  