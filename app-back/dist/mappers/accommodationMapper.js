"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accommodationTableViewModel_1 = require("../viewModels/accommodation/accommodationTableViewModel");
const accommodationViewModel_1 = require("../viewModels/accommodation/accommodationViewModel");
class AccommodationMapper {
    mapToViewModel(model) {
        return new accommodationViewModel_1.AccommodationViewModel(model.id, model.title, model.accommodationType, model.city, model.address, model.bedroomsCount, model.bedsCount, model.capacity, model.imageName);
    }
    mapToTableViewModel(model) {
        return new accommodationTableViewModel_1.AccommodationTableViewModel(model.id, model.title, model.accommodationType.title, model.city.province.name, model.city.name, model.address, model.bedroomsCount, model.bedsCount, model.capacity, model.imageName);
    }
}
const accommodationMapper = new AccommodationMapper();
exports.default = accommodationMapper;
//# sourceMappingURL=accommodationMapper.js.map