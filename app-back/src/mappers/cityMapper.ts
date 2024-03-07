import { ICity } from "../interfaces/ICity";
import { CityTableViewModel, CityViewModel } from "../viewModels/city";

class CityMapper {
  mapToViewModel(model: ICity): CityViewModel {
    return new CityViewModel(model.id, model.name, model.province);
  }
  mapToTableViewModel(model: ICity): CityTableViewModel {
    return new CityTableViewModel(model.id, model.name, model.province.name);
  }
}
const cityMapper = new CityMapper();

export default cityMapper;
