import { Category } from '../../model/Category';
import { ICategories } from '../../repositories/interface/ICategories';

class ListeCategoryServices {
	constructor(private categoriesRepository: ICategories) {}

	execute(): Category[] {
		const category = this.categoriesRepository.list();

		return category;
	}
}

export { ListeCategoryServices };
