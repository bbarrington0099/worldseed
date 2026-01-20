import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';

type UserRolePayload = Prisma.UserRoleGetPayload<{}>;
export interface UserRoles {
    admin: UserRolePayload;
    architect: UserRolePayload;
    designer: UserRolePayload;
    drafter: UserRolePayload;
}

export async function seedUserRoles(): Promise<UserRoles> {
    return  {
        admin: await db.createUserRole({
            id: 'admin',
            name: 'Seed Administrator',
            worldOwnedLimit: -1,
            worldForgerLimit: -1,
            contentPillarsPerWorldLimit: -1,
            contentStructuresPerPillarLimit: -1,
            contentElementsPerStructureLimit: -1,
            contentItemsPerWorldLimit: -1,
            apiCallLimitPerDay: -1,
        }),
        architect: await db.createUserRole({
            id: 'architect',
            name: 'World Architect',
            worldOwnedLimit: 12,
            worldForgerLimit: 20,
            contentPillarsPerWorldLimit: 50,
            contentStructuresPerPillarLimit: 100,
            contentElementsPerStructureLimit: 500,
            contentItemsPerWorldLimit: 1000,
            apiCallLimitPerDay: 5000,
        }),
        designer: await db.createUserRole({
            id: 'designer',
            name: 'World Designer',
            worldOwnedLimit: 3,
            worldForgerLimit: 5,
            contentPillarsPerWorldLimit: 30,
            contentStructuresPerPillarLimit: 60,
            contentElementsPerStructureLimit: 200,
            contentItemsPerWorldLimit: 400,
            apiCallLimitPerDay: 1000,
        }),
        drafter: await db.createUserRole({
            id: 'drafter',
            name: 'World Drafter',
            worldOwnedLimit: 1,
            worldForgerLimit: 2,
            contentPillarsPerWorldLimit: 5,
            contentStructuresPerPillarLimit: 15,
            contentElementsPerStructureLimit: 20,
            contentItemsPerWorldLimit: 50,
            apiCallLimitPerDay: 0,
        }),
    };
}