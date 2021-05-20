import { Router, Request, Response } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory/index';
import { listCategoryController } from '../modules/cars/useCases/listCategory/index';
import { importCategoryController } from '../modules/cars/useCases/importCategory/index';

const categoriesRoutes = Router();
const upload = multer({
	dest: './tmp',
});

categoriesRoutes.get('/categories', (request: Request, response: Response) => {
	return listCategoryController.handle(request, response);
});

categoriesRoutes.post('/categories', (request: Request, response: Response) => {
	return createCategoryController.handle(request, response);
});

categoriesRoutes.post(
	'/categories/import',
	upload.single('file'),
	(request: Request, response: Response) => {
		return importCategoryController.handle(request, response);
	}
);

export { categoriesRoutes };
