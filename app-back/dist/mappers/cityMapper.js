"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = require("../viewModels/city");
class CityMapper {
    mapToViewModel(model) {
        return new city_1.CityViewModel(model.id, model.name, model.province);
    }
    mapToTableViewModel(model) {
        return new city_1.CityTableViewModel(model.id, model.name, model.province.name);
    }
}
const cityMapper = new CityMapper();
exports.default = cityMapper;
//# sourceMappingURL=cityMapper.js.map