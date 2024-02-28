import { LIMIT } from "../config/const";
import { Request, Response } from "express";
import { AccommodationService } from "../services/accommodationService";
import { IAccommodationRepository } from "../repositories/contracts/IAccommodationRepository";

export class AccommodationController {
  private accommodationService: AccommodationService;

  constructor(repository: IAccommodationRepository) {
    this.accommodationService = new AccommodationService(repository);
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
