import { Category } from '../../entity/Category';
import { Request, Response } from "express";
import { getRepository } from "typeorm";

// 
export const createCategory = async (
    req: Request,
    res: Response
): Promise<Response> => {
  const newCategory = await getRepository(Category).create(req.body);
    const results = await getRepository(Category).save(newCategory);
    return res.json(results);
  };
  
  export const getCategories = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const category = await getRepository(Category).find();
    return res.json(category);
  };

  export const getCategory = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const results = await getRepository(Category).findOne(req.params.id);
    return res.json(results);
  };
  

  export const updateCategory = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const category = await getRepository(Category).findOne(req.params.id);
    if (category) {
      getRepository(Category).merge(category, req.body);
      const results = await getRepository(Category).save(category);
      return res.json(results);
    }
  
    return res.json({msg: 'Not category found'});
  };
  
  export const deleteCategory = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Category).delete(req.params.id);
    return res.json(results);
  };