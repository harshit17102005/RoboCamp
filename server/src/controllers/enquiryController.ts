import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import Enquiry from '../models/Enquiry';

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters").max(15, "Phone number is too long"),
});

export const submitEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const validatedData = enquirySchema.parse(req.body);

    const newEnquiry = new Enquiry({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: (error as any).errors,
      });
      return;
    }
    next(error);
  }
};
