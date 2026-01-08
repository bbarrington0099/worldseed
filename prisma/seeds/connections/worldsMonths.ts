import * as db from "@lib/db-seed";
import { Worlds, Months } from "../index";

interface WorldsMonthsParams {
    worlds: Worlds;
    months: Months;
}
export async function setWorldsMonths(params: WorldsMonthsParams) {
    const { worlds, months } = params;
    try {
        for (const month of Object.values(months)) {
            await db.createWorldConnection({
                id: `world-month-alabastria-connection-${month.id}`,
                worldId: worlds.alabastria.id,
                monthId: month.id,
            });
        }
    } catch (error) {
        console.error(`Error creating world-month connections:`, error);
        process.exit(1);
    }
}