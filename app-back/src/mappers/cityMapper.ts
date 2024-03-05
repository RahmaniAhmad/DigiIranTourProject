import { CityModel } from "../models/cityModel";
import { CityTableViewModel, CityViewModel } from "../viewModels/city";

class CityMapper {
  mapToViewModel(model: CityModel): CityViewModel {
    return new CityViewModel(model.id, model.name, model.province);
  }
  mapToTableViewModel(model: CityModel): CityTableViewModel {
    return new CityTableViewModel(model.id, model.name, model.province.name);
  }
}
const cityMapper = new CityMapper();

export default cityMapper;
