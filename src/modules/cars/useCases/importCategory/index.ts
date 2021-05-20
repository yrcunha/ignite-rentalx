import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryServices } from './ImportCategoryServices';

const importCategoryServices = new ImportCategoryServices();
const importCategoryController = new ImportCategoryController(importCategoryServices);

export { importCategoryController };
