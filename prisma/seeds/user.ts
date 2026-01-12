import { Prisma } from '@prismagen/client';
import { prisma } from '@lib/prisma';
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
    try {
        return {
            defaultAdmin: await db.createUser({
                email: ADMIN_EMAIL,
                name: process.env.DEFAULT_ADMIN_NAME,
                plainPassword: ADMIN_PASSWORD,
                role: { connect: { id: userRoles.admin.id } },
            }),
        }
    } catch (error) {
        const existingUser = await prisma.user.findUnique({
            where: { email: ADMIN_EMAIL },
        });
        if (existingUser) {
            return {
                defaultAdmin: existingUser!,
            };
        }
        throw error;
    }
}