import { Router } from 'express';
import * as ProfileController from '../controllers/Profile.controller';

const router = new Router();

router.route('/sendMail').get(ProfileController.sendMail);

export default router;
