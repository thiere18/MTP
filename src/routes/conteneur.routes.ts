import { Router } from "express";
const router = Router();

import {
  getConteneur,
  getConteneurs,
  createConteneur,
  updateConteneur,
  deleteConteneur
} from "../controllers/Conteneur/conteneur.controller";


/**
 * @swagger
 * components:
 *   schemas:
 *     Conteneur:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         uuid:
 *           type: string
 *           description: The auto-generated uuid of the conteneur
 *         name:
 *           type: string
 *           description: The conteneur name
 *       example:
 *         uuid: 4
 *         name: papier
 */


/**
  * @swagger
  * tags:
  *   name: Conteneur 
  *   description:  Conteneur managing API
  */

/**
 * @swagger
 * /conteneur:
 *   get:
 *     summary: Returns the list of all Conteneur
 *     tags: [Conteneur]
 *     responses:
 *       200:
 *         description: The list of all conteneur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Conteneur'
 */

router.get("/conteneur", getConteneurs);

/**
 * @swagger
 * /conteneur/{uuid}:
 *   get:
 *     summary: Get the conteneur by uuid
 *     tags: [Conteneur]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The conteneur uuid
 *     responses:
 *       200:
 *         description: The conteneur description by uuid
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conteneur'
 *       404:
 *         description: The conteneur was not found
 */
router.get("/conteneur/:uuid", getConteneur); //
/**
 * @swagger
 * /conteneur:
 *   post:
 *     summary: Create a new conteneur
 *     tags: [Conteneur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conteneur'
 *     responses:
 *       200:
 *         description: The Conteneur was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conteneur'
 *       500:
 *         description: Some server error
 */
router.post("/conteneur", createConteneur);
/**
 * @swagger
 * /categry/{uuid}:
 *  put:
 *    summary: Update the categry by the uuid
 *    tags: [Conteneur]
 *    parameters:
 *      - in: path
 *        name: uuid
 *        schema: 
 *          type: string
 *        required: true
 *        description: The categry uuid
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categry'
 *    responses:
 *      200:
 *        description: The categry was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Categry'
 *      404:
 *        description: The categry was not found
 *      500:
 *        description: Some error happened
 */
router.put("/conteneur/:uuid", updateConteneur);

/**
 * @swagger
 * /conteneur/{uuid}:
 *   delete:
 *     summary: Remove the conteneur by uuid
 *     tags: [Conteneur]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: The conteneur uuid
 * 
 *     responses:
 *       200:
 *         description: The conteneur was deleted
 *       404:
 *         description: The conteneur was not found
 */
router.put("/conteneur/:uuid", deleteConteneur);

export default router;
