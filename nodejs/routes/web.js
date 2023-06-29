import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getCRUD);
    router.post('/add', homeController.addCRUD);
    router.post('/update', homeController.updateCRUD);
    router.get('/edit/:id', homeController.editCRUD);
    router.get('/delete/:id', homeController.deleteCRUD);

    app.use('/', router)
}

export default initWebRoute;