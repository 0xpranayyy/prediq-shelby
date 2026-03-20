"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// API handler exports for serverless deployment
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sqlite_1 = require("./db/sqlite");
const markets_1 = __importDefault(require("./routes/markets"));
const portfolio_1 = __importDefault(require("./routes/portfolio"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.get('/api/health', async (req, res) => {
    try {
        const result = await (0, sqlite_1.healthCheck)();
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: 'Health check failed' });
    }
});
app.use('/api/markets', markets_1.default);
app.use('/api/portfolio', portfolio_1.default);
app.use('/api/users', users_1.default);
exports.default = app;
//# sourceMappingURL=api.js.map