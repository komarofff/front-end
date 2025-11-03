const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(express.static('dist'));

// Путь к JSON файлу
const DATA_FILE = path.join(__dirname, 'projects-data.json');

// API маршруты
app.get('/api/projects', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ error: 'Failed to read data' });
    }
});

app.post('/api/projects', async (req, res) => {
    try {
        const newData = req.body;
        await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 2));
        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// Все остальные запросы отправляем на Vue приложение
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});