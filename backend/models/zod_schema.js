const z = require('zod');

const LoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
        .refine((e) => e === "[email protected]", "This email is not in our database"),
    password: z.string().min(10, { message: "This field has to be filled." }).max(10)
});

const SignupSchema = z.object({
    username: z.string(),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
        .refine((e) => e === "[email protected]", "This email is not in our database"),
    password: z.string().min(10, { message: "This field has to be filled." }).max(10)
})

module.exports = {
    LoginSchema, SignupSchema
}