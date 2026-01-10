import { prisma } from "@lib/prisma";
import { Worlds, Months } from "../index";

interface WorldsMonthsParams {
    worlds: Worlds;
    months: Months;
}
export async function setWorldsMonths(params: WorldsMonthsParams) {
    const { worlds, months } = params;
    try {
        for (const month of Object.values(months)) {
            await prisma.month.update({
                where: { id: month.id },
                data: {
                    worlds: {
                        connect: [
                            {
                                id: worlds.alabastria.id,
                            },
                        ],
                    },
                },
            });
        }
    } catch (error) {
        console.error(`Error creating world-month connections:`, error);
        process.exit(1);
    }
}