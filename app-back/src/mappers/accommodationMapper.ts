import { IAccommodation } from "../interfaces/IAccommodation";
import { ICity } from "../interfaces/ICity";
import { AccommodationTableViewModel } from "../viewModels/accommodation/accommodationTableViewModel";
import { AccommodationViewModel } from "../viewModels/accommodation/accommodationViewModel";

class AccommodationMapper {
  mapToViewModel(model: IAccommodation): AccommodationViewModel {
    return new AccommodationViewModel(
      model.id,
      model.title,
      model.accommodationType,
      model.city,
      model.address
    );
  }
  mapToTableViewModel(model: IAccommodation): AccommodationTableViewModel {
    return new AccommodationTableViewModel(
      model.id,
      model.title,
      model.accommodationType.title,
      model.city.name,
      model.address
    );
  }
}
const accommodationMapper = new AccommodationMapper();

export default accommodationMapper;
