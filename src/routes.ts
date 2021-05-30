import { Router } from 'express';
import { UserController } from './controller/UserController';
import { CourseUnitController } from './controller/UnitCourseController';
import { ActivityController } from './controller/ActivityController';

interface UserResquest {
    name: string;
    email: string;
    password: string;
}
const userController = new UserController()
const courseUnitController = new CourseUnitController();
const activityController = new ActivityController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activity', activityController.create);
routes.post('/courseunit', courseUnitController.create);

export default routes;