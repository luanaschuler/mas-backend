import { Router } from 'express';
import { UserController } from './controller/UserController';
import { CourseUnitController } from './controller/UnitCourseController';
import { ActivityController } from './controller/ActivityController';
import { AuthenticateController } from './controller/AuthenticateController';

const userController = new UserController()
const courseUnitController = new CourseUnitController();
const activityController = new ActivityController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', authenticateController.create);
routes.post('/activity', activityController.create);
routes.post('/courseunit', courseUnitController.create);

export default routes;