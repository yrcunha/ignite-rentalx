import { ICreateCategoryDTO, ICategories } from '../../repositories/interface/ICategories';

class CreateCategoryService {
	constructor(private categoriesRepository: ICategories) {}

	execute({ name, description }: ICreateCategoryDTO): void {
		const categoryAlreadyExists = this.categoriesRepository.findByname(name);

		if (categoryAlreadyExists) {
			throw new Error('Categoria já existe');
		}

		this.categoriesRepository.create({ name, description });
	}
}

export { CreateCategoryService };
