import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { rules, schema } from '@ioc:Adonis/Core/Validator';

export default class AuthController {
    public async login({ request, response }: HttpContextContract) {
        const loginSchema = schema.create({
            email: schema.string({ trim: true }, [rules.email()]),
        });

        const body = await request.validate({ schema: loginSchema });
        return response.json({ body });
    }
}
