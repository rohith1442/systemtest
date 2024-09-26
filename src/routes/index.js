import { Router } from 'express';
import authRoutes from './auth.routes.js';
import httpStatus from 'http-status';

const router = Router();

// Corrected: Use authRoutes for both /auth/v1 and /auth paths
router.use('/auth/v1', authRoutes);
router.use('/auth', authRoutes);

// Root path route
router.get('/', (req, res) => {
  res.status(httpStatus.OK).json({
    payload: {
      error: '',
      message: '',
      code: httpStatus.OK,
    },
  });
});

export default router;
