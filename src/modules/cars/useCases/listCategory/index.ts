import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoryController } from './ListCategoryController';
import { ListeCategoryServices } from './ListeCategoryServices';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryService = new ListeCategoryServices(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };
