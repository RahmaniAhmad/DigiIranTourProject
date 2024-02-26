import { IAccommodationTypeRepository } from "../repositories/contracts/IAccommodationTypeRepository";
import { AccommodationTypeService } from "../services/accommodationTypeService";

import { Request, Response } from "express";

export class AccommodationTypeController {
  private accommodationTypeService: AccommodationTypeService;

  constructor(repository: IAccommodationTypeRepository) {
    this.accommodationTypeService = new AccommodationTypeService(repository);
  }
  public getAll = async (req: Request, res: Response) => {
    try {
      const filter = req.query.filter as string;
      const limit = req.query.limit ? Number(req.query.limit) : 10;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await this.accommodationTypeService.getAll(
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
    const result = await this.accommodationTypeService.getById(id);
    res.json(result);
  };

  public create = async (req: Request, res: Response) => {
    const data = req.body;
    const result = await this.accommodationTypeService.create(data);
    res.json(result);
  };

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await this.accommodationTypeService.update(id, data);
    res.json(result);
  };

  public delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.accommodationTypeService.delete(id);
    res.json(result);
  };
}
