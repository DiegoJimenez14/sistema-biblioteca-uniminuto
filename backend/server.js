import express from 'express';
import cors from 'cors';
import pool from './database.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/api/prestamos', async (req, res) => {
    const { nombreUsuario, libro, fechaPrestamo } = req.body;

    if (!nombreUsuario || !libro || !fechaPrestamo) {
        return res.status(400).json({ error: 'Campos incompletos' });
    }

    try {
        const [result] = await pool.execute(
            'INSERT INTO prestamos (nombreUsuario, libro, fechaPrestamo) VALUES (?, ?, ?)',
            [nombreUsuario, libro, fechaPrestamo]
        );
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Fallo en la persistencia de datos' });
    }
});

app.listen(PORT, () => {});