import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres").max(100),
  email: z.string().email("E-mail inválido").max(254),
  phone: z.string().min(10, "Telefone inválido").max(15),
  message: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres").max(2000),
})

export type ContactFormData = z.infer<typeof contactSchema>
