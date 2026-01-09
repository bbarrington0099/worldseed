import { Prisma } from '@prismagen/client';
import * as db from '@lib/db-seed';

type WeekDayPayload = Prisma.WeekDayGetPayload<{}>;
export interface WeekDays {
    dawnturn: WeekDayPayload;
    yawnturn: WeekDayPayload;      
    workturn: WeekDayPayload;     
    emberturn: WeekDayPayload;     
    watchturn: WeekDayPayload;    
    warturn: WeekDayPayload;       
    setturn: WeekDayPayload;     
    veilturn: WeekDayPayload;     
}

export async function seedWeekDays(): Promise<WeekDays> {
    return {
        dawnturn: await db.createWeekDay({
            id: 'weekday-dawnturn',
            name: 'Dawnturn',
        }),
        yawnturn: await db.createWeekDay({
            id: 'weekday-yawnturn',
            name: 'Yawnturn',
        }),
        workturn: await db.createWeekDay({
            id: 'weekday-workturn',
            name: 'Workturn',
        }),
        emberturn: await db.createWeekDay({
            id: 'weekday-emberturn',
            name: 'Emberturn',
        }),
        watchturn: await db.createWeekDay({
            id: 'weekday-watchturn',
            name: 'Watchturn',
        }),
        warturn: await db.createWeekDay({
            id: 'weekday-warturn',
            name: 'Warturn',
        }),
        setturn: await db.createWeekDay({
            id: 'weekday-setturn',
            name: 'Setturn',
        }),
        veilturn: await db.createWeekDay({
            id: 'weekday-veilturn',
            name: 'Veilturn',
        }),
    };
}
