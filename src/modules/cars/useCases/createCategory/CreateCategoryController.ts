import { Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
	constructor(private createCategory: CreateCategoryService) {}

	handle(request: Request, response: Response): Response {
		const { name, description } = request.body;

		this.createCategory.execute({ name, description });

		return response.status(201).send();
	}
}

export { CreateCategoryController };
