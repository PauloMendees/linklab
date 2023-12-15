import { Router } from 'express';
import { urls } from '../urls';
import { CreateProductController } from '../../controllers/Products/Create';
import { ListProductsController } from '../../controllers/Products/List';

const productsRouter = Router();

productsRouter.post(urls.products, CreateProductController);
productsRouter.get(urls.products, ListProductsController);

export { productsRouter };
