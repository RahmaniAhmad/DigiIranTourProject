import provinceService from "../services/provinceService";
import { Request, Response } from "express";

const provinceController = {
  getProvinces: async (req: Request, res: Response) => {
    try {
      const filter = req.query.filter as string;
      const limit = req.query.filter ? Number(req.query.filter) : 10;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await provinceService.getProvinces(filter, page, limit);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  },

  getProvinceById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await provinceService.getProvinceById(id);
    res.json(result);
  },

  createProvince: async (req: Request, res: Response) => {
    const data = req.body;
    const result = await provinceService.createProvince(data);
    res.json(result);
  },

  updateProvince: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await provinceService.updateProvince(id, data);
    res.json(result);
  },

  deleteProvince: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await provinceService.deleteProvince(id);
    res.json(result);
  },
};

export default provinceController;
