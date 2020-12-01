import { Router } from 'express';
import multer from 'multer';

import upladConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(upladConfig);

routes.get('/orphanages',OrphanagesController.index);
routes.get('/orphanages/:id',OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
// routes.delete('/orphanages/:id',OrphanagesController.show);


export default routes;
