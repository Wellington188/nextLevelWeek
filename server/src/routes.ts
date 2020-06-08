import express, { request, response } from 'express';
import PointsControler from './controllers/PointsController'
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsControler();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

routes.get('/points/:id');

routes.get('/points/:id', pointsController.index);

routes.get('/points/:id', pointsController.show);


export default routes;