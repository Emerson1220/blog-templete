export const validationConfig = {
  forms: {
    contact: {
      name: {
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]*$/,
      },
      email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        maxLength: 100,
      },
      message: {
        minLength: 10,
        maxLength: 1000,
      },
      phone: {
        pattern: /^\+?[\d\s-]{8,}$/,
        maxLength: 20,
      },
    },
    auth: {
      password: {
        minLength: 8,
        maxLength: 100,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
      },
      username: {
        minLength: 3,
        maxLength: 50,
        pattern: /^[a-zA-Z0-9_-]*$/,
      },
    },
  },
  upload: {
    image: {
      maxSize: 5 * 1024 * 1024, // 5MB
      allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
      dimensions: {
        minWidth: 200,
        minHeight: 200,
        maxWidth: 4096,
        maxHeight: 4096,
      },
    },
    document: {
      maxSize: 10 * 1024 * 1024, // 10MB
      allowedTypes: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ],
    },
  },
  errorMessages: {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    minLength: (min: number) => `Must be at least ${min} characters`,
    maxLength: (max: number) => `Must not exceed ${max} characters`,
    pattern: 'Please enter a valid value',
    fileSize: 'File size exceeds the limit',
    fileType: 'File type not supported',
  },
};
