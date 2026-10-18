import { z } from 'zod';

const requiredText = (label, minimumLength = 1) =>
  z.string().trim().min(
    minimumLength,
    minimumLength === 1
      ? `${label} is required`
      : `${label} must be at least ${minimumLength} characters`,
  );

const email = z.email('Enter a valid email address');

const phone = z
  .string()
  .trim()
  .min(7, 'Enter a valid phone number')
  .max(20, 'Phone number must be at most 20 characters')
  .regex(/^[+\d().\-\s]+$/, 'Enter a valid phone number');

const currency = (label) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid amount')
    .refine((value) => Number(value) > 0, 'Amount must be greater than 0');

const optionalUrl = z.union([
  z.literal(''),
  z.url('Enter a valid URL'),
]);

export const registrationSchema = z
  .object({
    fullName: requiredText('Full name', 2),
    email,
    phone,
    industry: requiredText('Industry'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: requiredText('Confirm password'),
    exampleCheck1: z.boolean(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const loginSchema = z.object({
  email,
  password: requiredText('Password'),
  exampleCheck1: z.boolean(),
});

export const contactUsSchema = z.object({
  fullName: requiredText('Full name', 2),
  email,
  phone,
  website: optionalUrl,
  services: requiredText('Service'),
  query: requiredText('Your query', 10),
  confirmContact: z.boolean().refine(Boolean, 'Please confirm before submitting'),
});

export const feedbackSchema = z.object({
  fullName: requiredText('Full name', 2),
  email,
  rating: requiredText('Please select a rating'),
  feedback: requiredText('Feedback', 10),
});

export const bookFreeCallSchema = z.object({
  fullName: requiredText('Full name', 2),
  email,
  phone,
  preferredDate: requiredText('Preferred date'),
  preferredTime: requiredText('Preferred time'),
  message: requiredText('Message', 10),
});

export const addServiceSchema = z.object({
  serviceName: requiredText('Service name', 2),
  category: requiredText('Category'),
  serviceDescription: requiredText('Service description', 10),
  price: currency('Starting price'),
  isActive: z.boolean(),
});

export const editServiceSchema = z.object({
  serviceSelect: requiredText('Service'),
  serviceName: requiredText('Service name', 2),
  serviceDescription: requiredText('Service description', 10),
  price: currency('Starting price'),
});

export const deleteServiceSchema = z.object({
  serviceSelect: requiredText('Service'),
  confirmDelete: z.boolean().refine(Boolean, 'Please confirm before deleting'),
});

export const contentApprovalSchema = z.object({
  contentTitle: requiredText('Content title'),
  contentType: requiredText('Content type'),
  contentLink: z.url('Enter a valid content URL'),
  notes: z.string(),
});

export const campaignCreationSchema = z.object({
  campaignName: requiredText('Campaign name', 2),
  platform: requiredText('Platform'),
  startDate: requiredText('Start date'),
  budget: currency('Budget'),
  goal: requiredText('Campaign goal', 10),
});

export const postSchedulerSchema = z.object({
  caption: requiredText('Post caption', 10),
  platform: requiredText('Platform'),
  postDate: requiredText('Date and time'),
  addToQueue: z.boolean(),
});

export const addTeamMemberSchema = z.object({
  memberName: requiredText('Full name', 2),
  memberEmail: email,
  role: requiredText('Role'),
});
