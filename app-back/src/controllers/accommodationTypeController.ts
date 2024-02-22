import accommodationTypeService from "../services/accommodationTypeService";
import { Request, Response } from "express";

const accommodationTypeController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const filter = req.query.filter as string;
      const limit = req.query.limit ? Number(req.query.limit) : 10;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await accommodationTypeService.getAll(filter, page, limit);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },

  getById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await accommodationTypeService.getById(id);
    res.json(result);
  },

  create: async (req: Request, res: Response) => {
    const data = req.body;
    const result = await accommodationTypeService.create(data);
    res.json(result);
  },

  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await accommodationTypeService.update(id, data);
    res.json(result);
  },

  delete: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await accommodationTypeService.delete(id);
    res.json(result);
  },
};

export default accommodationTypeController;
