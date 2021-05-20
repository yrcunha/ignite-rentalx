import { Request, Response } from 'express';
import { ImportCategoryServices } from './ImportCategoryServices';

class ImportCategoryController {
	constructor(private importCategoryServices: ImportCategoryServices) {}

	handle(request: Request, response: Response): Response {
		const { file } = request;

		this.importCategoryServices.execute(file);

		return response.send();
	}
}

export { ImportCategoryController };
