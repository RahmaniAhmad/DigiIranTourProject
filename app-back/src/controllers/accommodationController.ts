import { LIMIT } from "../config/const";
import { Request, Response } from "express";
import { AccommodationService } from "../services/accommodationService";
import { IAccommodationRepository } from "../repositories/contracts/IAccommodationRepository";
import accommodationMapper from "../mappers/accommodationMapper";
import multer from "multer";
import formidable from "formidable";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export class AccommodationController {
  private accommodationService: AccommodationService;

  constructor(repository: IAccommodationRepository) {
    this.accommodationService = new AccommodationService(repository);
  }
  mapToModel = (viewModel: any) => {
    return {
      id: viewModel.id,
      title: viewModel.title,
      accommodationTypeId: Number(viewModel.accommodationTypeId),
      cityId: Number(viewModel.cityId),
      address: viewModel.address,
      bedroomsCount: viewModel.bedroomsCount,
      bedsCount: viewModel.bedsCount,
      capacity: viewModel.capacity,
      accommodationImage: viewModel.accommodationImage,
      imageName: viewModel.imageName,
    };
  };

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
      res.json({
        data: result.data.map(accommodationMapper.mapToTableViewModel),
        rowsCount: result.rowsCount,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };

  public getByType = async (req: Request, res: Response) => {
    try {
      const type = req.params.type as string;

      const limit = req.query.limit ? Number(req.query.limit) : LIMIT;
      const page = req.query.page ? parseInt(req.query.page as string) : 1;

      const result = await this.accommodationService.getByType(
        type,
        page,
        limit
      );

      res.json({
        data: result.data.map(accommodationMapper.mapToTableViewModel),
        rowsCount: result.rowsCount,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await this.accommodationService.getById(id);
    res.json(accommodationMapper.mapToViewModel(result));
  };

  public create = async (req: Request, res: Response) => {
    upload.single("accommodationImage")(req, res, async (err: any) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
    });
    const form = formidable({ multiples: false });
    form.parse(req, (err, fields, files) => {
      const data: any = {};
      Object.keys(fields).forEach((key) => {
        data[key] = fields[key][0];
      });
      const model = this.mapToModel(data);
      const result = this.accommodationService.create(model);
      res.json(result);
    });
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
