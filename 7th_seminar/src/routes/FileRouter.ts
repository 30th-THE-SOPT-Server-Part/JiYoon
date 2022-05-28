import upload from '../config/multer';
import FileController from '../controllers/FileController';
import { Router } from 'express';
const router: Router = Router();

router.post('/upload', upload.single('file'), FileController.uploadFileToS3);
router.post('/uploads', upload.array('file'), FileController.uploadFilesToS3);
export default router;
