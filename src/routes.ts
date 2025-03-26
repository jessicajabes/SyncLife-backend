import {Router} from "express";

import { CreateUserController} from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { isAuthenticated} from "./middlewares/isAuthenticated";
import { CreateExerciseController } from "./controllers/exercise/CreateExerciseController";
import { ListExerciseController } from "./controllers/exercise/ListExerciseController";
import { DeleteExerciseController } from "./controllers/exercise/DeleteExerciseController";
import { UpdateExerciseController } from "./controllers/exercise/UpdateExerciseController";
import { CreateTrainingController} from "./controllers/training/CreateTrainingController";
import { ListTrainingController } from "./controllers/training/ListTrainingController";
import { CreateExercisesController } from "./controllers/training/CreateExercisesController";
import { DeleteExercisesController } from "./controllers/training/DeleteExercisesController";
import { UpdateExercisesController } from "./controllers/training/UpdateExercisesController";
import { ListExercisesByTrainingController } from "./controllers/training/ListExercisesByTrainingController";

const router =Router();

router.post('/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/exercise', isAuthenticated, new CreateExerciseController().handle);
router.get('/exercise', isAuthenticated, new ListExerciseController().handle);
router.put('/exercise', isAuthenticated, new UpdateExerciseController().handle);
router.delete('/exercise', isAuthenticated, new DeleteExerciseController().handle);

router.post('/training', isAuthenticated, new CreateTrainingController().handle);
router.get('/training', isAuthenticated, new ListTrainingController().handle);

router.post('/exercisesoftraining', isAuthenticated, new CreateExercisesController().handle);
router.get('/exercisesoftraining', isAuthenticated, new ListExercisesByTrainingController().handle);
router.delete('/exercisesoftraining', isAuthenticated, new DeleteExercisesController().handle);
router.put('/exercisesoftraining', isAuthenticated, new UpdateExercisesController().handle);

export {router};