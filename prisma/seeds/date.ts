/* import { Prisma } from "@prismagen/client";
import * as db from "@lib/db-seed";
import { Months } from "./index";

export type DatePayload = Prisma.DateGetPayload<{}>;
export interface Dates {
    alabastriaCurrentDate: DatePayload;
    unknownDate: DatePayload;
    kamalatmanFoundedDate: DatePayload;
    magical_research_accord_signed_date: DatePayload;
    northern_defense_pact_signed_date: DatePayload;
    kamalatman_internal_trade_agreement_signed_date: DatePayload;
    southern_trade_pact_signed_date: DatePayload;
    volcanic_forge_accord_signed_date: DatePayload;
    northern_mining_accord_signed_date: DatePayload;
    raw_trade_pact_signed_date: DatePayload;
    kantra_non_aggression_pact_signed_date: DatePayload;
}

interface DateParams {
    months: Months;
}
export async function seedDate(params: DateParams): Promise<Dates> {
    const { months } = params;
    return {
        alabastriaCurrentDate: await db.createDate({
            cycle: 800,
            monthId: months.highsun.id,
            day: 15,
        }),
        unknownDate: await db.createDate({
        }),
        kamalatmanFoundedDate: await db.createDate({
            cycle: 183,
            monthId: months.warcall.id,
            day: 3,
        }),
        magical_research_accord_signed_date: await db.createDate({
            cycle: 615,
        }),
        northern_defense_pact_signed_date: await db.createDate({
            cycle: 580,
        }),
        kamalatman_internal_trade_agreement_signed_date: await db.createDate({
            cycle: 700,
        }),
        southern_trade_pact_signed_date: await db.createDate({
            cycle: 750,
        }),
        volcanic_forge_accord_signed_date: await db.createDate({
            cycle: 620,
        }),
        northern_mining_accord_signed_date: await db.createDate({
            cycle: 590,
        }),
        raw_trade_pact_signed_date: await db.createDate({
            cycle: 730,
        }),
        kantra_non_aggression_pact_signed_date: await db.createDate({
            cycle: 780,
        }),
    }
} */