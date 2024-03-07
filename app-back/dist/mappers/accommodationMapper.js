"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accommodationTableViewModel_1 = require("../viewModels/accommodation/accommodationTableViewModel");
const accommodationViewModel_1 = require("../viewModels/accommodation/accommodationViewModel");
class AccommodationMapper {
    mapToViewModel(model) {
        return new accommodationViewModel_1.AccommodationViewModel(model.id, model.title, model.accommodationType);
    }
    mapToTableViewModel(model) {
        return new accommodationTableViewModel_1.AccommodationTableViewModel(model.id, model.title, model.accommodationType.title);
    }
}
const accommodationMapper = new AccommodationMapper();
exports.default = accommodationMapper;
//# sourceMappingURL=accommodationMapper.js.map