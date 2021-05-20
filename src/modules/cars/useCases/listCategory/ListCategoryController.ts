import { Request, Response } from 'express';
import { ListeCategoryServices } from './ListeCategoryServices';

class ListCategoryController {
	constructor(private listCategory: ListeCategoryServices) {}

	handle(request: Request, response: Response): Response {
		const all = this.listCategory.execute();

		return response.json(all);
	}
}

export { ListCategoryController };
