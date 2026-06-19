import express, { Application } from 'express';
import cors from 'cors';
import enquiryRoutes from './routes/enquiryRoutes';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enquiry', enquiryRoutes);

// Error Handler
app.use(errorHandler);

export default app;
