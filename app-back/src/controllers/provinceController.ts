import { LIMIT } from "../config/const";
import { IProvinceRepository } from "../repositories/contracts/IProvinceRepository";
import { ProvinceService } from "../services/provinceService";
import { Request, Response } from "express";

export class ProvinceController {
  private provinceService: ProvinceService;

  constructor(repository: IProvinceRepository) {
    this.provinceService = new ProvinceService(repository);
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const filter = req.query.filter as string;
      const limit = req.query.limit ? Number(req.query.limit) : LIMIT;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await this.provinceService.getAll(filter, page, limit);
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.provinceService.getById(id);
    res.json(result);
  };

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await this.provinceService.create(data);
    res.json(result);
  };

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await this.provinceService.update(id, data);
    res.json(result);
  };

  public delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.provinceService.delete(id);
    res.json(result);
  };
}
