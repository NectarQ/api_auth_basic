import { Router } from 'express';
import UserService from '../services/UserService.js';
import NumberMiddleware from '../middlewares/number.middleware.js';
import UserMiddleware from '../middlewares/user.middleware.js';
import AuthMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

// Nuevo endpoint: GET api/v1/users/getAllUsers
router.get('/getAllUsers',AuthMiddleware.validateToken ,async (req, res) => {
    const response = await UserService.getAllActiveUsers(req);
    res.status(response.code).json(response.message);
});

// Nuevo endpoint: POST api/v1/users/bulkCreate
router.post('/bulkCreate',AuthMiddleware.validateToken ,async (req, res) => {
    const response = await UserService.bulkCreateUsers(req.body.users);
    res.status(response.code).json(response.message);
});


//VIUTOTI
router.get('/findUsers', [UserMiddleware.reqIsValid, AuthMiddleware.validateToken], async (req, res) => {
    const response = await UserService.find(req.query);
    res.status(response.code).json(response.message);
  });

router.post('/create', async (req, res) => {
    const response = await UserService.createUser(req);
    res.status(response.code).json(response.message);
});

router.get(
    '/:id',
    [
        NumberMiddleware.isNumber,
        UserMiddleware.isValidUserById,
        AuthMiddleware.validateToken,
        UserMiddleware.hasPermissions
    ],
    async (req, res) => {
        const response = await UserService.getUserById(req.params.id);
        res.status(response.code).json(response.message);
    });

router.put('/:id', [
        NumberMiddleware.isNumber,
        UserMiddleware.isValidUserById,
        AuthMiddleware.validateToken,
        UserMiddleware.hasPermissions,
    ],
    async(req, res) => {
        const response = await UserService.updateUser(req);
        res.status(response.code).json(response.message);
    });

router.delete('/:id',
    [
        NumberMiddleware.isNumber,
        UserMiddleware.isValidUserById,
        AuthMiddleware.validateToken,
        UserMiddleware.hasPermissions,
    ],
    async (req, res) => {
       const response = await UserService.deleteUser(req.params.id);
       res.status(response.code).json(response.message);
    });

export default router;