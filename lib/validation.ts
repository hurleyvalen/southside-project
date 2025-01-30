import z from "zod";

export const formSchema = z.object({
    title: z
    .string()
    .regex(/^[a-zA-Z0-9\s.,'-]+$/, { message: "Title contains invalid characters." }) // Allows alphanumeric, spaces, and basic punctuation
    .min(3, { message: " Title must be at least 3 characters." })
    .max(100, { message: " Title must be at most 100 characters." }),
  description: z
    .string()
    .regex(/^[a-zA-Z0-9\s.,'-]*$/, { message: "Description contains invalid characters." }) // Same as title but allows empty input
    .max(500, { message: " Description must be at most 500 characters." }),
  name: z
    .string()
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters." }) // Allows only letters, spaces, apostrophes, and hyphens
    .min(2, { message: " Must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-]{11,11}$/, { message: "Invalid phone number format." })
    .min(11, { message: " Phone number must be valid." })
    .max(11, { message: " Phone number must be valid."}),
});

export const contactFormSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters." }) // Allows letters, spaces, apostrophes, and hyphens
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." }),

  email: z
    .string()
    .email({ message: "Invalid email address." })
    .max(100, { message: "Email must be at most 100 characters." }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be at most 1000 characters." })
});
