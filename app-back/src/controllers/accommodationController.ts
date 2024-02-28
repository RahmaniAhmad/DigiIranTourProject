import { LIMIT } from "../config/const";
import { IAaccommodationRepository } from "../repositories/contracts/IAaccommodationRepository";
import { AaccommodationService } from "../services/accommodationService";

import { Request, Response } from "express";

export class accommodationController {
  private accommodationService: AaccommodationService;

  constructor(repository: IAaccommodationRepository) {
    this.accommodationService = new AaccommodationService(repository);
  }
  public getAll = async (req: Request, res: Response) => {
    try {
      const filter = req.query.filter as string;
      const limit = req.query.limit ? Number(req.query.limit) : LIMIT;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await this.accommodationService.getAll(
        filter,
        page,
        limit
      );
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.accommodationService.getById(id);
    res.json(result);
  };

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await this.accommodationService.create(data);
    res.json(result);
  };

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await this.accommodationService.update(id, data);
    res.json(result);
  };

  public delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.accommodationService.delete(id);
    res.json(result);
  };
}
