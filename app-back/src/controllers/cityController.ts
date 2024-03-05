import { LIMIT } from "../config/const";
import { ICityRepository } from "../repositories/contracts/ICityRepository";
import { CityService } from "../services/cityService";
import { Request, Response } from "express";
import cityMapper from "../mappers/cityMapper";

export class CityController {
  private cityService: CityService;

  constructor(repository: ICityRepository) {
    this.cityService = new CityService(repository);
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const filter = req.query.filter as string;
      const limit = req.query.limit ? Number(req.query.limit) : LIMIT;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await this.cityService.getAll(filter, page, limit);
      res.json({
        data: result.data.map(cityMapper.mapToTableViewModel),
        rowsCount: result.rowsCount,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.cityService.getById(id);
    res.json(cityMapper.mapToViewModel(result));
  };

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await this.cityService.create(data);
    res.json(result);
  };

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await this.cityService.update(id, data);
    res.json(result);
  };

  public delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.cityService.delete(id);
    res.json(result);
  };
}
