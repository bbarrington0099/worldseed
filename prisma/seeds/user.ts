import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';
import { UserRoles } from './index';

type UserPayload = Prisma.UserGetPayload<{}>;
export interface Users {
    defaultAdmin: UserPayload;
}

interface SeedUsersParams {
    userRoles: UserRoles;
}
export async function seedUsers(params: SeedUsersParams): Promise<Users> {
    const { userRoles } = params;
    const ADMIN_EMAIL = process.env.DEFAULT_ADMIN_EMAIL;
    if (!ADMIN_EMAIL) {
        throw new Error("DEFAULT_ADMIN_EMAIL environment variable is not set.");
    }
    const ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD;
    if (!ADMIN_PASSWORD) {
        throw new Error("DEFAULT_ADMIN_PASSWORD environment variable is not set.");
    }
    return {
        defaultAdmin: await db.createUser({
            email: ADMIN_EMAIL,
            name: process.env.DEFAULT_ADMIN_NAME,
            passwordHash: '',
            plainPassword: ADMIN_PASSWORD,
            role: { connect: { id: userRoles.admin.id } },
            mustChangePassword: true,
        }),
    }
}