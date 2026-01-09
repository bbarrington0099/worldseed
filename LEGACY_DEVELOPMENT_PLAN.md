# Alabastria - Development Plan

## Overview

This document outlines the plan for migrating the legacy
`AlabastriaCharacterAssistant` (a vanilla HTML/JS app with JSON data files) to a
modern full-stack application called `alabastria`. The new app will use Docker,
Next.js (App Router), Prisma with PostgreSQL, and implement user authentication
with role-based access control.

---

## Technology Stack

### Core Technologies

-   **Framework**: Next.js 16+ with App Router
-   **Language**: TypeScript (strict mode)
-   **Database**: PostgreSQL 18+
-   **ORM**: Prisma 7+
-   **Styling**: SCSS Modules with CSS Variables
-   **Containerization**: Docker & Docker Compose

### Key Next.js Features to Leverage

-   **Server Actions** (preferred over API routes)
-   **Partial Prerendering (PPR)**
-   **React Server Components**
-   **`"use cache"` directive** for data caching
-   **`cacheTag` and `cacheLife`** for granular cache control
-   **React Compiler** for automatic optimizations

### UI/UX Patterns

-   **Suspense with Skeleton fallbacks** - All Suspense boundaries use themed
    Skeleton components for professional loading states
-   **Portal-based Modals** - Modals render via React Portals above normal
    content
-   **Custom themed not-found page** - Branded 404 page matching the fantasy
    aesthetic

### Authentication

-   **Auth.js (NextAuth v5)** with:
    -   Credentials provider for username/password login
    -   Database adapter for Prisma/PostgreSQL sessions
    -   First-login password reset flow
    -   Role-based access control (admin, dm, guild_member)

### File Uploads

-   **UploadThing** for file uploads via API Route
-   Docker-friendly storage in `/uploads` volume
-   Supports images for: continents, flags, rulers, members, staff, guilds,
    characters

---

## Data Model Architecture

### User & Authentication (Auth.js Compatible)

```prisma
enum UserRole {
  ADMIN
  DM
  GUILD_MEMBER
}

// Auth.js required models
model User {
  id                String    @id @default(cuid())
  name              String?
  email             String    @unique
  emailVerified     DateTime?
  image             String?
  passwordHash      String
  role              UserRole  @default(GUILD_MEMBER)
  mustChangePassword Boolean  @default(true)
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt

  // Auth.js relations
  accounts          Account[]
  sessions          Session[]

  // App relations
  characters        Character[]
  questReportsAuthored QuestReport[] @relation("AuthoredBy")
  guildMemberships  GuildMembership[]
  dmGuilds          GuildDM[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

### World & Geography

```prisma
model World {
  id              String   @id @default(uuid())
  name            String   @unique // "Alabastria"
  description     String   @db.Text
  circumferenceMi Int
  diameterMi      Int
  ageCycles       Int
  surfaceAreaSqMi BigInt
  seeded        Boolean  @default(true)

  continents      Continent[]
}

model Continent {
  id              String   @id @default(uuid())
  name            String   @unique
  description     String   @db.Text
  lengthMi        Int?
  widthMi         Int?
  heightMi        Int?
  surfaceAreaSqMi Int
  seeded        Boolean  @default(true)

  // Flag/Colors
  primaryColor    String
  secondaryColor  String
  flagSymbol      String
  flagDescription String?  @db.Text
  mapImagePath    String?
  flagImagePath   String?

  // Relations
  worldId         String
  world           World    @relation(fields: [worldId], references: [id])
  kingdomId       String?
  kingdom         Kingdom? @relation(fields: [kingdomId], references: [id])
  capital         Capital?
  towns           Town[]
  languages       ContinentLanguage[]
  politics        ContinentPolitics?
  voyages         Voyage[] @relation("FromContinent")
  voyagesTo       Voyage[] @relation("ToContinent")
  warsConflicts   WarConflict[]
  treaties        Treaty[]
  tradeRoutes     TradeRoute[]
  creatureTypes   ContinentCreatureType[]
  raceLocations   RaceContinent[]
  guilds          Guild[]
  legendaryCreatures LegendaryCreature[]
  deityRecommendations DeityRecommendation[]
  historicalEvents HistoricalEvent[]
  professionRestrictions ProfessionContinentRestriction[]
  factionPresence FactionContinentPresence[]
}

model Kingdom {
  id               String   @id @default(uuid())
  name             String   @unique
  description      String?  @db.Text
  surfaceAreaSqMi  Int
  primaryColor     String
  secondaryColor   String
  symbol           String
  seeded         Boolean  @default(true)

  continents       Continent[]
}

model Capital {
  id          String   @id @default(uuid())
  name        String
  location    String
  description String   @db.Text

  continentId String   @unique
  continent   Continent @relation(fields: [continentId], references: [id])
  ruler       Ruler?
}

model Ruler {
  id              String   @id @default(uuid())
  name            String
  race            String
  title           String
  personality     String   @db.Text
  rulingStyle     String   @db.Text
  background      String   @db.Text
  appearance      String   @db.Text
  imagePath       String?

  capitalId       String   @unique
  capital         Capital  @relation(fields: [capitalId], references: [id])
  deityId         String?
  deity           Deity?   @relation(fields: [deityId], references: [id])
  deityReasoning  String?  @db.Text
}

model Voyage {
  id              String    @id @default(uuid())
  distanceMi      Int
  travelDays      Int
  travelHours     Int
  travelMinutes   Int

  fromContinentId String
  fromContinent   Continent @relation("FromContinent", fields: [fromContinentId], references: [id])
  toContinentId   String
  toContinent     Continent @relation("ToContinent", fields: [toContinentId], references: [id])

  @@unique([fromContinentId, toContinentId])
}

model Town {
  id          String   @id @default(uuid())
  name        String
  description String   @db.Text
  location    String?  // Location description within continent
  population  Int?
  seeded    Boolean  @default(true)

  continentId String
  continent   Continent @relation(fields: [continentId], references: [id])

  leader      TownLeader?
  npcs        TownNPC[]
  professionRestrictions ProfessionTownRestriction[]
  factionBases FactionBase[]

  @@unique([continentId, name])
}

model TownLeader {
  id          String   @id @default(uuid())
  name        String
  title       String?
  race        String?
  description String?  @db.Text
  imagePath   String?

  townId      String   @unique
  town        Town     @relation(fields: [townId], references: [id])
}

model TownNPC {
  id                  String   @id @default(uuid())
  name                String
  gender              String?
  age                 Int?
  race                String?
  subrace             String?

  // Class or Profession
  classOrProfession   String?  // "Fighter", "Blacksmith", etc.
  subclass            String?  // Only if using a class
  level               Int?     // Only if using a class
  professionId        String?
  profession          NPCProfession? @relation(fields: [professionId], references: [id])

  // Optional Stats
  strength            Int?
  dexterity           Int?
  constitution        Int?
  intelligence        Int?
  wisdom              Int?
  charisma            Int?
  hitPoints           Int?
  armorClass          Int?
  speed               Int?

  // Descriptions
  physicalDescription String?  @db.Text
  personality         String?  @db.Text
  gearLoadout         String?  @db.Text
  backstory           String?  @db.Text

  imagePath           String?
  seeded            Boolean  @default(true)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  townId              String
  town                Town     @relation(fields: [townId], references: [id])

  // Relationships to other NPCs and Characters
  relationshipsFrom   NPCRelationship[] @relation("NPCFrom")
  relationshipsTo     NPCRelationship[] @relation("NPCTo")
  characterRelationships CharacterNPCRelationship[]

  // Faction memberships
  factionMemberships  FactionNPCMembership[]
}

enum ProfessionRestrictionType {
  UNRESTRICTED    // Available everywhere
  CONTINENT       // Only available in specified continents
  TOWN            // Only available in specified towns
}

model NPCProfession {
  id              String   @id @default(uuid())
  name            String   @unique
  description     String?  @db.Text
  category        String?  // "Trade", "Service", "Noble", "Criminal", etc.
  seeded        Boolean  @default(true)

  // Location restriction (mutually exclusive - cannot mix continent and town restrictions)
  restrictionType ProfessionRestrictionType @default(UNRESTRICTED)

  // Only populated if restrictionType = CONTINENT
  restrictedToContinents ProfessionContinentRestriction[]

  // Only populated if restrictionType = TOWN
  restrictedToTowns ProfessionTownRestriction[]

  npcs            TownNPC[]
}

model ProfessionContinentRestriction {
  id           String   @id @default(uuid())

  professionId String
  profession   NPCProfession @relation(fields: [professionId], references: [id], onDelete: Cascade)
  continentId  String
  continent    Continent @relation(fields: [continentId], references: [id], onDelete: Cascade)

  @@unique([professionId, continentId])
}

model ProfessionTownRestriction {
  id           String   @id @default(uuid())

  professionId String
  profession   NPCProfession @relation(fields: [professionId], references: [id], onDelete: Cascade)
  townId       String
  town         Town     @relation(fields: [townId], references: [id], onDelete: Cascade)

  @@unique([professionId, townId])
}

model NPCRelationshipType {
  id          String   @id @default(uuid())
  name        String   @unique  // "Friend", "Enemy", "Family", "Rival", "Mentor", etc.
  description String?
  seeded    Boolean  @default(true)

  npcRelationships NPCRelationship[]
  characterRelationships CharacterNPCRelationship[]
}

model NPCRelationship {
  id              String   @id @default(uuid())
  description     String?  @db.Text  // Additional context

  fromNPCId       String
  fromNPC         TownNPC  @relation("NPCFrom", fields: [fromNPCId], references: [id])
  toNPCId         String
  toNPC           TownNPC  @relation("NPCTo", fields: [toNPCId], references: [id])

  relationshipTypeId String
  relationshipType   NPCRelationshipType @relation(fields: [relationshipTypeId], references: [id])

  @@unique([fromNPCId, toNPCId, relationshipTypeId])
}

model CharacterNPCRelationship {
  id              String   @id @default(uuid())
  description     String?  @db.Text

  characterId     String
  character       Character @relation(fields: [characterId], references: [id])
  npcId           String
  npc             TownNPC   @relation(fields: [npcId], references: [id])

  relationshipTypeId String
  relationshipType   NPCRelationshipType @relation(fields: [relationshipTypeId], references: [id])

  @@unique([characterId, npcId, relationshipTypeId])
}
```

### Factions

```prisma
model Faction {
  id              String   @id @default(uuid())
  name            String   @unique
  description     String   @db.Text
  mainPurpose     String   @db.Text  // "What their main thing is"
  emblemPath      String?
  foundedCycle    Int?     // When they were founded
  seeded        Boolean  @default(true)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  // Presence on continents with influence level
  continentPresence FactionContinentPresence[]

  // Faction bases in towns
  bases           FactionBase[]

  // Members (NPCs and Guild Members)
  npcMembers      FactionNPCMembership[]
  guildMembers    FactionGuildMemberMembership[]

  // Relationships with other factions
  relationshipsFrom FactionRelationship[] @relation("FactionFrom")
  relationshipsTo   FactionRelationship[] @relation("FactionTo")
}

enum FactionInfluenceLevel {
  MINOR       // Small presence, few members
  MODERATE    // Established but not dominant
  MAJOR       // Significant influence
  DOMINANT    // Controls or heavily influences the region
  HIDDEN      // Secret presence
}

model FactionContinentPresence {
  id              String   @id @default(uuid())
  influenceLevel  FactionInfluenceLevel
  description     String?  @db.Text  // Additional context about their presence

  factionId       String
  faction         Faction   @relation(fields: [factionId], references: [id], onDelete: Cascade)
  continentId     String
  continent       Continent @relation(fields: [continentId], references: [id])

  @@unique([factionId, continentId])
}

model FactionBase {
  id                    String   @id @default(uuid())
  name                  String
  description           String   @db.Text
  townRelationship      String   @db.Text  // Description of relationship with the town
  isHeadquarters        Boolean  @default(false)
  isSecret              Boolean  @default(false)
  seeded              Boolean  @default(true)

  factionId             String
  faction               Faction  @relation(fields: [factionId], references: [id], onDelete: Cascade)
  townId                String
  town                  Town     @relation(fields: [townId], references: [id])

  // Members assigned to this base
  npcMembers            FactionNPCMembership[]
  guildMembers          FactionGuildMemberMembership[]

  @@unique([factionId, townId, name])
}

model FactionRole {
  id          String   @id @default(uuid())
  name        String   @unique  // "Leader", "Lieutenant", "Spy", "Enforcer", "Recruit", etc.
  description String?  @db.Text
  rankOrder   Int      @default(0)  // For sorting (lower = higher rank)
  seeded    Boolean  @default(true)

  npcMemberships    FactionNPCMembership[]
  guildMemberships  FactionGuildMemberMembership[]
}

model FactionNPCMembership {
  id          String   @id @default(uuid())
  joinedCycle Int?     // When they joined
  notes       String?  @db.Text  // Additional context
  isSecret    Boolean  @default(false)  // Secret membership

  factionId   String
  faction     Faction  @relation(fields: [factionId], references: [id], onDelete: Cascade)
  npcId       String
  npc         TownNPC  @relation(fields: [npcId], references: [id], onDelete: Cascade)
  roleId      String
  role        FactionRole @relation(fields: [roleId], references: [id])

  // Optionally assigned to a specific base
  baseId      String?
  base        FactionBase? @relation(fields: [baseId], references: [id])

  @@unique([factionId, npcId])  // NPC can only have one role per faction
}

model FactionGuildMemberMembership {
  id          String   @id @default(uuid())
  joinedCycle Int?
  notes       String?  @db.Text
  isSecret    Boolean  @default(false)

  factionId   String
  faction     Faction  @relation(fields: [factionId], references: [id], onDelete: Cascade)
  guildMemberId String
  guildMember GuildMember @relation(fields: [guildMemberId], references: [id], onDelete: Cascade)
  roleId      String
  role        FactionRole @relation(fields: [roleId], references: [id])

  // Optionally assigned to a specific base
  baseId      String?
  base        FactionBase? @relation(fields: [baseId], references: [id])

  @@unique([factionId, guildMemberId])
}

model FactionRelationshipType {
  id          String   @id @default(uuid())
  name        String   @unique  // "Allied", "At War", "Neutral", "Trade Partners", "Rivals", "Vassal", etc.
  description String?  @db.Text
  seeded    Boolean  @default(true)

  relationships FactionRelationship[]
}

model FactionRelationship {
  id              String   @id @default(uuid())
  description     String?  @db.Text  // Context about the relationship
  since           Int?     // Cycle when relationship started

  fromFactionId   String
  fromFaction     Faction  @relation("FactionFrom", fields: [fromFactionId], references: [id], onDelete: Cascade)
  toFactionId     String
  toFaction       Faction  @relation("FactionTo", fields: [toFactionId], references: [id], onDelete: Cascade)

  relationshipTypeId String
  relationshipType   FactionRelationshipType @relation(fields: [relationshipTypeId], references: [id])

  @@unique([fromFactionId, toFactionId])  // One relationship type per faction pair
}
```

### World History & Timeline

````prisma
model HistoricalPeriod {
  id              String   @id @default(uuid())
  name            String   @unique
  startCycle      Int
  endCycle        Int?     // null for ongoing periods
  description     String   @db.Text
  significance    String?  @db.Text
  sortOrder       Int      @default(0)
  seeded        Boolean  @default(true)

  events          HistoricalEvent[]
}

model HistoricalEvent {
  id          String   @id @default(uuid())
  name        String
  cycle       Int      // When it happened (e.g., 755)
  description String   @db.Text
  impact      String?  @db.Text
  sortOrder   Int      @default(0)
  seeded    Boolean  @default(true)

  periodId    String?
  period      HistoricalPeriod? @relation(fields: [periodId], references: [id])

  // Optional links to related entities
  continentId String?
  continent   Continent? @relation(fields: [continentId], references: [id])
}

### Races & Classes

```prisma
model Race {
  id                String   @id @default(uuid())
  name              String   @unique
  description       String   @db.Text
  size              String
  speed             String
  age               String   @db.Text
  alignment         String   @db.Text
  heightRange       String?
  weightRange       String?
  alabastriaLore    String   @db.Text
  playstyle         String   @db.Text
  seeded          Boolean  @default(true)

  abilityScoreIncreases RaceAbilityScore[]
  languages         RaceLanguage[]
  traits            RaceTrait[]
  subraces          Subrace[]
  recommendedClasses RaceClassRecommendation[]
  continentLocations RaceContinent[]
  deityRecommendations DeityRecommendation[] @relation("RaceDeityRecs")
  characters        Character[]
  names             RaceName[]
  guildStaff        GuildStaff[]
  guildMembers      GuildMember[]
}

model Subrace {
  id                String   @id @default(uuid())
  name              String
  description       String   @db.Text
  heightRange       String?
  weightRange       String?
  alabastriaContext String?  @db.Text
  playstyle         String?  @db.Text
  seeded          Boolean  @default(true)

  raceId            String
  race              Race     @relation(fields: [raceId], references: [id])
  abilityScoreIncreases SubraceAbilityScore[]
  traits            SubraceTrait[]
  deityRecommendations DeityRecommendation[] @relation("SubraceDeityRecs")
  characters        Character[]

  @@unique([raceId, name])
}

model Class {
  id                String   @id @default(uuid())
  name              String   @unique
  description       String   @db.Text
  role              String
  primaryAbility    String
  hitDie            String
  armorProficiency  String
  weaponProficiency String
  toolProficiency   String?
  alabastriaLore    String   @db.Text
  playstyle         String   @db.Text
  seeded          Boolean  @default(true)

  savingThrows      ClassSavingThrow[]
  keyFeatures       ClassFeature[]
  subclasses        Subclass[]
  recommendedRaces  RaceClassRecommendation[]
  playstyleCategories PlaystyleClassRecommendation[]
  deityRecommendations DeityRecommendation[] @relation("ClassDeityRecs")
  characters        Character[]
  guildStaff        GuildStaff[]
  guildMembers      GuildMember[]
}

model Subclass {
  id                String   @id @default(uuid())
  name              String
  description       String   @db.Text
  alabastriaContext String?  @db.Text
  playstyle         String?  @db.Text
  seeded          Boolean  @default(true)

  classId           String
  class             Class    @relation(fields: [classId], references: [id])
  keyFeatures       SubclassFeature[]
  deityRecommendations DeityRecommendation[] @relation("SubclassDeityRecs")
  characters        Character[]
  guildMembers      GuildMember[]

  @@unique([classId, name])
}
````

### Pantheon & Deities

```prisma
model Pantheon {
  id          String   @id @default(uuid())
  name        String   @unique
  description String   @db.Text
  symbol      String   // FontAwesome class
  seeded    Boolean  @default(true)

  deities     Deity[]
}

model Deity {
  id                String   @id @default(uuid())
  name              String   @unique
  title             String
  alignment         String
  symbol            String   // FontAwesome class
  description       String   @db.Text
  alabastriaContext String   @db.Text
  temples           String
  seeded          Boolean  @default(true)

  pantheonId        String
  pantheon          Pantheon @relation(fields: [pantheonId], references: [id])

  domains           DeityDomain[]
  followers         DeityFollower[]
  holyDays          DeityHolyDay[]
  symbols           DeitySymbol[]
  colors            DeityColor[]
  history           DeityHistory[]

  allies            DeityRelationship[] @relation("DeityAllies")
  alliedBy          DeityRelationship[] @relation("AlliedDeity")
  conflicts         DeityRelationship[] @relation("DeityConflicts")
  conflictedBy      DeityRelationship[] @relation("ConflictDeity")

  recommendations   DeityRecommendation[]
  rulers            Ruler[]
  guildStaff        GuildStaff[]
  guildMembers      GuildMember[]
  characters        Character[]
}

model DeityRelationship {
  id              String   @id @default(uuid())
  type            String   // "ALLY" or "CONFLICT"
  reasoning       String?  @db.Text

  deityId         String
  deity           Deity    @relation("DeityAllies", fields: [deityId], references: [id])
  relatedDeityId  String
  relatedDeity    Deity    @relation("AlliedDeity", fields: [relatedDeityId], references: [id])

  // Alternate relations for conflicts
  conflictDeityId String?
  conflictDeity   Deity?   @relation("DeityConflicts", fields: [conflictDeityId], references: [id])
  conflictedById  String?
  conflictedBy    Deity?   @relation("ConflictDeity", fields: [conflictedById], references: [id])

  @@unique([deityId, relatedDeityId, type])
}

model DeityRecommendation {
  id          String   @id @default(uuid())
  isPrimary   Boolean  @default(true)
  reasoning   String?  @db.Text

  deityId     String
  deity       Deity    @relation(fields: [deityId], references: [id])

  // Can be for race, subrace, class, subclass, or continent
  raceId      String?
  race        Race?    @relation("RaceDeityRecs", fields: [raceId], references: [id])
  subraceId   String?
  subrace     Subrace? @relation("SubraceDeityRecs", fields: [subraceId], references: [id])
  classId     String?
  class       Class?   @relation("ClassDeityRecs", fields: [classId], references: [id])
  subclassId  String?
  subclass    Subclass? @relation("SubclassDeityRecs", fields: [subclassId], references: [id])
  continentId String?
  continent   Continent? @relation(fields: [continentId], references: [id])
}
```

### Guilds & Members

```prisma
enum GuildRank {
  COAL
  COPPER
  IRON
  SILVER
  GOLD
  PLATINUM
  MITHRAL
}

enum MemberStatus {
  ACTIVE
  INACTIVE
  DECEASED
  RETIRED
}

model Guild {
  id          String   @id @default(uuid())
  name        String   @unique
  description String   @db.Text
  emblemPath  String?
  foundedCycle Int?
  seeded    Boolean  @default(true)

  continentId String?
  continent   Continent? @relation(fields: [continentId], references: [id])

  staff       GuildStaff[]
  members     GuildMember[]
  quests      QuestReport[]
  dms         GuildDM[]
  memberships GuildMembership[]
}

model GuildDM {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id])
  guildId String
  guild   Guild  @relation(fields: [guildId], references: [id])

  @@unique([userId, guildId])
}

model GuildMembership {
  id      String @id @default(uuid())
  userId  String
  user    User   @relation(fields: [userId], references: [id])
  guildId String
  guild   Guild  @relation(fields: [guildId], references: [id])

  @@unique([userId, guildId])
}

model GuildStaff {
  id            String   @id @default(uuid())
  name          String
  guildRole     String
  rank          GuildRank
  appearance    String   @db.Text
  personality   String   @db.Text
  faith         String?  @db.Text
  background    String   @db.Text
  imagePath     String?
  seeded      Boolean  @default(true)

  raceId        String?
  race          Race?    @relation(fields: [raceId], references: [id])
  classId       String?
  class         Class?   @relation(fields: [classId], references: [id])
  guildId       String
  guild         Guild    @relation(fields: [guildId], references: [id])
  deityId       String?
  deity         Deity?   @relation(fields: [deityId], references: [id])
}

model GuildMember {
  id                  String      @id @default(uuid())
  name                String
  rank                GuildRank
  level               Int
  status              MemberStatus @default(ACTIVE)
  specialization      String?
  backgroundSummary   String?     @db.Text
  imagePath           String?
  managedBy           String?     // Discord handle
  seeded            Boolean     @default(true)

  raceId              String?
  race                Race?       @relation(fields: [raceId], references: [id])
  classId             String?
  class               Class?      @relation(fields: [classId], references: [id])
  subclassId          String?
  subclass            Subclass?   @relation(fields: [subclassId], references: [id])
  guildId             String
  guild               Guild       @relation(fields: [guildId], references: [id])
  deityId             String?
  deity               Deity?      @relation(fields: [deityId], references: [id])
  deityReasoning      String?     @db.Text

  tags                GuildMemberTag[]
  achievements        GuildMemberAchievement[]
  questParticipations QuestParticipant[]

  // Faction memberships
  factionMemberships  FactionGuildMemberMembership[]

  // Link to user-created character
  characterId         String?     @unique
  character           Character?  @relation(fields: [characterId], references: [id])
}

model Character {
  id                  String      @id @default(uuid())
  name                String
  level               Int         @default(1)
  backgroundSummary   String?     @db.Text
  imagePath           String?
  createdAt           DateTime    @default(now())
  updatedAt           DateTime    @updatedAt

  userId              String
  user                User        @relation(fields: [userId], references: [id])
  raceId              String?
  race                Race?       @relation(fields: [raceId], references: [id])
  subraceId           String?
  subrace             Subrace?    @relation(fields: [subraceId], references: [id])
  classId             String?
  class               Class?      @relation(fields: [classId], references: [id])
  subclassId          String?
  subclass            Subclass?   @relation(fields: [subclassId], references: [id])
  deityId             String?
  deity               Deity?      @relation(fields: [deityId], references: [id])

  guildMember         GuildMember?
  questReports        QuestMemberReport[]
  npcRelationships    CharacterNPCRelationship[]
}
```

### Quest Reports

```prisma
model QuestReport {
  id                String   @id @default(uuid())
  name              String
  summary           String   @db.Text
  rank              GuildRank
  commissionedBy    String
  date              String   // "800 Cycles After The Bringing"
  location          String
  duration          String
  outcome           String
  extraNotes        String?  @db.Text
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  seeded          Boolean  @default(true)

  guildId           String
  guild             Guild    @relation(fields: [guildId], references: [id])
  authorId          String?
  author            User?    @relation("AuthoredBy", fields: [authorId], references: [id])

  participants      QuestParticipant[]
  enemies           QuestEnemy[]
  awards            QuestAward[]
  loot              QuestLoot[]
  memberReports     QuestMemberReport[]
  fallenMembers     QuestFallenMember[]
}

model QuestParticipant {
  id            String      @id @default(uuid())
  rankAtTime    GuildRank
  role          String

  questId       String
  quest         QuestReport @relation(fields: [questId], references: [id])
  memberId      String
  member        GuildMember @relation(fields: [memberId], references: [id])

  @@unique([questId, memberId])
}

model QuestMemberReport {
  id          String      @id @default(uuid())
  report      String      @db.Text

  questId     String
  quest       QuestReport @relation(fields: [questId], references: [id])
  characterId String?
  character   Character?  @relation(fields: [characterId], references: [id])
  memberName  String?     // For seeded/legacy reports
}
```

### Playstyle Guide

```prisma
model PlaystyleCategory {
  id          String   @id @default(uuid())
  name        String   @unique
  description String   @db.Text
  seeded    Boolean  @default(true)

  recommendations PlaystyleClassRecommendation[]
}

model AbilityScorePriority {
  id          String   @id @default(uuid())
  ability     String   @unique
  description String   @db.Text
  seeded    Boolean  @default(true)

  bestClasses AbilityScoreClass[]
  importantFor AbilityScoreImportance[]
}

model RoleDescription {
  id          String   @id @default(uuid())
  name        String   @unique
  description String   @db.Text
  seeded    Boolean  @default(true)

  keyAbilities RoleKeyAbility[]
  bestClasses  RoleBestClass[]
}

model ComplexityLevel {
  id          String   @id @default(uuid())
  level       String   @unique // "Simple", "Moderate", "Complex"
  description String   @db.Text
  seeded    Boolean  @default(true)

  classes     ComplexityClass[]
}
```

### Monster Slayers Guide

```prisma
model CreatureType {
  id          String   @id @default(uuid())
  name        String   @unique
  description String   @db.Text
  habits      String   @db.Text
  tactics     String   @db.Text
  weaknesses  String   @db.Text
  seeded    Boolean  @default(true)

  continentReasons CreatureTypeContinentReason[]
  legendaryCreatures LegendaryCreature[]
}

model LegendaryCreature {
  id              String   @id @default(uuid())
  name            String
  description     String   @db.Text
  threatLevel     String?
  questPotential  String?  @db.Text
  isPast          Boolean  @default(false) // past vs present
  defeatedBy      String?
  defeatedByTitle String?
  defeatStory     String?  @db.Text
  legacy          String?  @db.Text
  seeded        Boolean  @default(true)

  creatureTypeId  String
  creatureType    CreatureType @relation(fields: [creatureTypeId], references: [id])
  continentId     String?
  continent       Continent?   @relation(fields: [continentId], references: [id])
}
```

---

## Project Structure

```
alabastria/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── change-password/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (main)/
│   │   ├── layout.tsx                    # Main app layout with nav
│   │   ├── page.tsx                      # Home/Welcome page
│   │   ├── world/
│   │   │   ├── page.tsx                  # World overview
│   │   │   └── [continent]/
│   │   │       ├── page.tsx              # Continent details
│   │   │       └── towns/
│   │   │           └── [town]/
│   │   │               └── page.tsx      # Town details
│   │   ├── races/
│   │   │   ├── page.tsx                  # Race list with filters
│   │   │   └── [race]/
│   │   │       └── page.tsx              # Race details
│   │   ├── classes/
│   │   │   ├── page.tsx                  # Class list with filters
│   │   │   └── [class]/
│   │   │       └── page.tsx              # Class details
│   │   ├── pantheon/
│   │   │   ├── page.tsx                  # Pantheon overview with filters
│   │   │   └── [deity]/
│   │   │       └── page.tsx              # Deity details
│   │   ├── guilds/
│   │   │   ├── page.tsx                  # Guild list
│   │   │   └── [guild]/
│   │   │       ├── page.tsx              # Guild overview
│   │   │       ├── staff/
│   │   │       │   └── page.tsx          # Staff with filters
│   │   │       ├── members/
│   │   │       │   └── page.tsx          # Members with filters
│   │   │       └── quests/
│   │   │           ├── page.tsx          # Quests with filters
│   │   │           └── [quest]/
│   │   │               └── page.tsx
│   │   ├── bestiary/
│   │   │   └── page.tsx                  # Monster Slayers Guide with filters
│   │   ├── playstyle/
│   │   │   └── page.tsx                  # Playstyle Guide
│   │   ├── history/
│   │   │   └── page.tsx                  # World History Timeline
│   │   ├── npc-generator/
│   │   │   └── page.tsx                  # Random NPC Generator (all users)
│   │   └── factions/
│   │       ├── page.tsx                  # Faction list
│   │       └── [faction]/
│   │           ├── page.tsx              # Faction details
│   │           └── bases/
│   │               └── [base]/
│   │                   └── page.tsx      # Base details
│   ├── (admin)/
│   │   ├── layout.tsx                    # Admin-only layout
│   │   ├── dashboard/
│   │   │   └── page.tsx                  # Admin dashboard
│   │   ├── users/
│   │   │   ├── page.tsx                  # User management
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit user
│   │   ├── world/
│   │   │   ├── page.tsx                  # Edit world info
│   │   │   ├── continents/
│   │   │   │   ├── page.tsx              # Manage continents
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx          # Edit continent
│   │   │   ├── towns/
│   │   │   │   ├── page.tsx              # Manage towns
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx          # Edit town
│   │   │   │   └── import-npc/
│   │   │   │       └── page.tsx          # Import NPC from JSON
│   │   │   └── history/
│   │   │       ├── page.tsx              # Manage timeline
│   │   │       ├── periods/
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx      # Edit period
│   │   │       └── events/
│   │   │           └── [id]/
│   │   │               └── page.tsx      # Edit event
│   │   ├── races/
│   │   │   ├── page.tsx                  # Manage races
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit race
│   │   ├── classes/
│   │   │   ├── page.tsx                  # Manage classes
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit class
│   │   ├── pantheon/
│   │   │   ├── page.tsx                  # Manage deities
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit deity
│   │   ├── guilds/
│   │   │   ├── page.tsx                  # Manage guilds
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit guild
│   │   ├── bestiary/
│   │   │   ├── page.tsx                  # Manage creature types
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit creature type
│   │   ├── professions/
│   │   │   ├── page.tsx                  # Manage NPC professions
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit profession
│   │   ├── relationship-types/
│   │   │   ├── page.tsx                  # Manage relationship types
│   │   │   └── [id]/
│   │   │       └── page.tsx              # Edit relationship type
│   │   └── factions/
│   │       ├── page.tsx                  # Manage factions
│   │       ├── [id]/
│   │       │   ├── page.tsx              # Edit faction
│   │       │   ├── members/
│   │       │   │   └── page.tsx          # Manage faction members
│   │       │   ├── bases/
│   │       │   │   ├── page.tsx          # Manage faction bases
│   │       │   │   └── [baseId]/
│   │       │   │       └── page.tsx      # Edit base
│   │       │   └── relationships/
│   │       │       └── page.tsx          # Manage faction relationships
│   │       ├── roles/
│   │       │   ├── page.tsx              # Manage faction roles
│   │       │   └── [id]/
│   │       │       └── page.tsx          # Edit role
│   │       └── relationship-types/
│   │           ├── page.tsx              # Manage faction relationship types
│   │           └── [id]/
│   │               └── page.tsx          # Edit type
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── my-characters/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── my-reports/
│   │       ├── page.tsx
│   │       └── new/
│   │           └── page.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts              # Auth.js route handler
│   │   └── uploadthing/
│   │       └── route.ts                  # UploadThing file uploads
│   ├── _actions/
│   │   ├── auth.ts                       # Password change, user prefs
│   │   ├── world.ts                      # World/continent/town CRUD
│   │   ├── history.ts                    # Timeline period/event CRUD
│   │   ├── races.ts                      # Race CRUD
│   │   ├── classes.ts                    # Class CRUD
│   │   ├── pantheon.ts                   # Deity CRUD
│   │   ├── guilds.ts                     # Guild CRUD
│   │   ├── characters.ts                 # Character CRUD
│   │   ├── quests.ts                     # Quest CRUD
│   │   ├── npc-generator.ts              # NPC generation & admin save
│   │   ├── professions.ts                # NPC profession CRUD
│   │   ├── relationships.ts              # NPC/Character relationship CRUD
│   │   ├── factions.ts                   # Faction CRUD, bases, members
│   │   └── admin.ts                      # Admin-only actions
│   ├── _components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Modal/                    # Portal-based modal
│   │   │   ├── ModalPortal/              # Portal wrapper for modals
│   │   │   ├── Skeleton/                 # Skeleton loading components
│   │   │   │   ├── SkeletonCard.tsx
│   │   │   │   ├── SkeletonTable.tsx
│   │   │   │   ├── SkeletonText.tsx
│   │   │   │   ├── SkeletonImage.tsx
│   │   │   │   └── SkeletonForm.tsx
│   │   │   ├── SectionFilter/            # Per-section filtering component
│   │   │   ├── SearchBar/
│   │   │   ├── Table/
│   │   │   ├── Form/
│   │   │   └── ImageUpload/              # UploadThing integration
│   │   ├── layout/
│   │   │   ├── Navigation/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   └── MobileMenu/
│   │   ├── world/
│   │   │   ├── ContinentCard/
│   │   │   ├── TownCard/
│   │   │   ├── WorldMap/
│   │   │   └── VoyageTable/
│   │   ├── races/
│   │   │   ├── RaceCard/
│   │   │   └── RaceFilters/
│   │   ├── classes/
│   │   │   ├── ClassCard/
│   │   │   └── ClassFilters/
│   │   ├── pantheon/
│   │   │   ├── DeityCard/
│   │   │   ├── DeityFilters/
│   │   │   └── RelationshipGraph/
│   │   ├── guilds/
│   │   │   ├── GuildCard/
│   │   │   ├── MemberCard/
│   │   │   ├── MemberFilters/
│   │   │   ├── StaffCard/
│   │   │   ├── QuestCard/
│   │   │   └── QuestFilters/
│   │   ├── history/
│   │   │   ├── Timeline/
│   │   │   └── PeriodCard/
│   │   ├── npc-generator/
│   │   │   ├── NPCGeneratorForm/         # Generation options form
│   │   │   ├── NPCResultCard/            # Display generated NPC
│   │   │   ├── NPCEditForm/              # Edit NPC before saving
│   │   │   ├── NPCCardExport/            # Client-side card image generator
│   │   │   ├── NPCJsonExport/            # Export NPC as JSON
│   │   │   ├── NPCJsonImport/            # Import NPC from JSON (admin)
│   │   │   └── TownSelectDropdown/       # Town selector for saving
│   │   ├── factions/
│   │   │   ├── FactionCard/              # Faction preview card
│   │   │   ├── FactionDetails/           # Full faction view
│   │   │   ├── FactionBaseCard/          # Base preview card
│   │   │   ├── FactionMemberList/        # Members with roles
│   │   │   ├── FactionRelationshipGraph/ # Visual faction relationships
│   │   │   ├── FactionInfluenceMap/      # Continent presence visualization
│   │   │   └── FactionFilters/           # Filter by continent, influence
│   │   ├── admin/
│   │   │   ├── EntityForm/               # Generic CRUD form
│   │   │   ├── DataTable/                # Admin data tables
│   │   │   └── ImageManager/
│   │   └── auth/
│   │       ├── LoginForm/
│   │       └── PasswordChangeForm/
│   ├── _variables.scss                   # Generated SCSS variables
│   ├── globals.scss
│   ├── layout.tsx                        # Root layout
│   └── not-found.tsx
├── lib/
│   ├── prisma.ts                         # Prisma client
│   ├── db.ts                             # Database helpers with cache tags
│   ├── db-seed.ts                        # Seed helpers (seeded data)
│   ├── auth.ts                           # Auth.js configuration
│   ├── uploadthing.ts                    # UploadThing configuration
│   ├── utils.ts                          # General utilities
│   └── constants.ts                      # App constants
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts                           # Main seed script
├── uploads/                              # Docker volume for user uploads
│   └── .gitkeep
├── public/
│   ├── images/
│   │   ├── continents/                   # Seeded from legacy
│   │   ├── flags/                        # Seeded from legacy
│   │   ├── rulers/                       # Seeded from legacy
│   │   ├── members/                      # Seeded from legacy
│   │   ├── staff/                        # Seeded from legacy
│   │   ├── ranks/                        # Seeded from legacy
│   │   └── guilds/                       # Seeded from legacy
│   └── fonts/
├── scripts/
│   ├── generate-scss-styleExports.js
│   └── migrate-legacy-data.ts            # Script to migrate JSON data
├── generated/
│   └── prisma/
├── certificates/                         # Dev HTTPS certs
├── styleExports.js
├── docker-compose.dev.yml
├── Dockerfile.dev
├── next.config.ts
├── prisma.config.ts
├── tsconfig.json
├── tsconfig.paths.json
├── package.json
├── .env.example
├── .env.docker.development
└── README.md
```

---

## Implementation Phases

### Phase 1: Project Setup & Infrastructure

**Duration: 1-2 days**

1. **Initialize Next.js project**

    ```bash
    npx create-next-app@latest alabastria --typescript --eslint --app --src-dir=false
    ```

2. **Configure Docker environment**

    - Copy/adapt `Dockerfile.dev` from arcane-smithing
    - Copy/adapt `docker-compose.dev.yml` with:
        - PostgreSQL service
        - `/uploads` volume for user-uploaded files
    - Create `.env.docker.development` with PostgreSQL credentials
    - Add UploadThing environment variables

    ```yaml
    # docker-compose.dev.yml additions
    services:
        app:
            volumes:
                - .:/alabastria
                - /alabastria/node_modules
                - uploads_data:/alabastria/uploads # Persistent uploads

    volumes:
        postgres_data_dev:
        uploads_data: # Docker volume for uploaded files
    ```

3. **Configure TypeScript & Path Aliases**

    - Set up `tsconfig.paths.json` with aliases:
        - `@components/*` → `./app/_components/*`
        - `@actions/*` → `./app/_actions/*`
        - `@lib/*` → `./lib/*`
        - `@prismagen/*` → `./generated/prisma/*`

4. **Set up SCSS**

    - Configure `styleExports.js` with Alabastria color scheme
    - Create `scripts/generate-scss-styleExports.js`
    - Set up `globals.scss` with CSS variables

5. **Configure Next.js**
    - Enable React Compiler
    - Enable experimental features (PPR, cacheLife)
    - Configure image optimization

### Phase 2: Database Schema & Prisma

**Duration: 2-3 days**

1. **Create Prisma schema** (`prisma/schema.prisma`)

    - Implement all models from Data Model Architecture section
    - Add proper indexes and unique constraints
    - Configure PostgreSQL-specific features

2. **Set up Prisma client**

    - Create `lib/prisma.ts` with PostgreSQL adapter
    - Configure `prisma.config.ts`
    - Set up `generated/prisma` output directory

3. **Create database helpers** (`lib/db.ts`)

    - Define cache tags for each entity type
    - Create typed CRUD functions
    - Implement caching strategies

4. **Create seed helpers** (`lib/db-seed.ts`)
    - Helper functions for creating seeded data
    - Automatic `seeded: true` flag

### Phase 3: Data Migration & Seeding

**Duration: 2-3 days**

1. **Create migration script** (`scripts/migrate-legacy-data.ts`)

    - Parse all JSON files from AlabastriaCharacterAssistant
    - Transform data to match new schema
    - Handle relationships and foreign keys

2. **Create main seed script** (`prisma/seed.ts`)

    - Seed world and continents from `continent_data.json`
    - Seed races from `race_information.json`
    - Seed classes from `class_information.json`
    - Seed pantheons from `pantheon_data*.json`
    - Seed deity relationships from `deity_relationships.json`
    - Seed guild data from `guild_staff.json` and `guild_members.json`
    - Seed quest reports from `quest_reports.json`
    - Seed playstyle guide from `playstyle_guide.json`
    - Seed monster guide from `monster_slayers_guide.json`
    - Seed deity recommendations from `relation_data.json`
    - **Seed NPC Professions** (standard set):
        - Trade: Blacksmith, Carpenter, Weaver, Potter, Jeweler, Leatherworker,
          Brewer
        - Service: Innkeeper, Bartender, Cook, Stablehand, Servant, Guide,
          Courier
        - Merchant: Shopkeeper, Trader, Pawnbroker, Fence
        - Scholarly: Scholar, Scribe, Librarian, Tutor, Alchemist
        - Religious: Priest, Acolyte, Monk, Undertaker
        - Noble: Noble, Courtier, Diplomat, Steward
        - Criminal: Thief, Smuggler, Assassin, Spy, Pickpocket
        - Entertainment: Entertainer, Bard, Dancer, Acrobat, Gladiator
        - Military: Guard, Soldier, Knight, Mercenary, Watchman
        - Labor: Farmer, Fisher, Miner, Lumberjack, Hunter, Sailor
    - **Seed Relationship Types** (NPC/Character):
        - Positive: Friend, Ally, Mentor, Student, Lover, Spouse, Family,
          Patron, Protector
        - Negative: Enemy, Rival, Nemesis, Betrayer
        - Neutral: Acquaintance, Business Partner, Employer, Employee, Neighbor
    - **Seed Faction Roles**:
        - Leader, Lieutenant, Captain, Agent, Spy, Enforcer, Member, Recruit,
          Informant, Treasurer
    - **Seed Faction Relationship Types**:
        - Allied, At War, Neutral, Trade Partners, Rivals, Vassal, Puppet State,
          Cold War, Non-Aggression Pact, Truce

3. **Copy and organize images**
    - Move images to `public/images/` with proper structure
    - Update image paths in seed data

### Phase 4: Authentication System (Auth.js)

**Duration: 2-3 days**

1. **Configure Auth.js** (`lib/auth.ts`)

    ```typescript
    import NextAuth from 'next-auth';
    import Credentials from 'next-auth/providers/credentials';
    import { PrismaAdapter } from '@auth/prisma-adapter';
    import bcrypt from 'bcrypt';

    export const { handlers, auth, signIn, signOut } = NextAuth({
    	adapter: PrismaAdapter(prisma),
    	providers: [
    		Credentials({
    			credentials: {
    				email: { label: 'Email', type: 'email' },
    				password: { label: 'Password', type: 'password' },
    			},
    			authorize: async (credentials) => {
    				// Validate and return user
    			},
    		}),
    	],
    	callbacks: {
    		session: ({ session, user }) => ({
    			...session,
    			user: {
    				...session.user,
    				role: user.role,
    				mustChangePassword: user.mustChangePassword,
    			},
    		}),
    	},
    });
    ```

2. **Create API route handler** (`app/api/auth/[...nextauth]/route.ts`)

    ```typescript
    import { handlers } from '@/lib/auth';
    export const { GET, POST } = handlers;
    ```

3. **Set up UploadThing** (`lib/uploadthing.ts` +
   `app/api/uploadthing/route.ts`)

    - Configure file router for images
    - Store files in `/uploads` volume (Docker-friendly)
    - Define upload endpoints for: continents, flags, rulers, members, staff,
      guilds, characters

4. **Create auth server actions** (`app/_actions/auth.ts`)

    - `changePassword()` - First-login password change
    - `getUserSession()` - Get current auth state

5. **Build auth UI components**

    - `LoginForm` component with email/password
    - `PasswordChangeForm` component
    - Auth layout with redirect to `/change-password` if `mustChangePassword`

6. **Create admin user management** (`app/_actions/admin.ts`)
    - `createUser()` - Admin creates new users with temp password
    - `updateUserRole()` - Change user roles
    - `deleteUser()` - Remove users
    - `assignGuildDM()` - Give DM access to guilds
    - `revokeGuildDM()` - Remove DM access
    - `assignGuildMembership()` - Add users to guilds

### Phase 5: Core UI Components

**Duration: 3-4 days**

1. **Layout components**

    - Navigation with mobile hamburger menu
    - Header with user menu and theme toggle
    - Footer
    - Sidebar for admin/dashboard views

2. **Common components**

    - Button (variants: primary, secondary, danger)
    - Card (for displaying entities)
    - **Modal with Portal** - Renders above all content via React Portal
    - SearchFilter (searchable/filterable lists)
    - Table (sortable data tables)
    - Form components (Input, Select, Textarea, etc.)

3. **Skeleton Loading Components**

    - `SkeletonCard` - Card placeholder with shimmer effect
    - `SkeletonTable` - Table rows placeholder
    - `SkeletonText` - Text line placeholders (various widths)
    - `SkeletonImage` - Image placeholder with aspect ratio
    - `SkeletonForm` - Form fields placeholder
    - All Skeletons themed to match app aesthetic (parchment/fantasy colors)

4. **Custom Not-Found Page**

    - Fantasy-themed 404 design
    - Animated illustration (lost adventurer, misty path, etc.)
    - Helpful navigation links back to main sections
    - Matches overall app aesthetic

5. **Design system**
    - Color scheme inspired by D&D/fantasy aesthetic
    - Typography with distinctive fonts
    - Responsive breakpoints
    - Animation/transition utilities
    - Shimmer animation for Skeletons

### Phase 6: Public Pages (Read-Only with Per-Section Filtering)

**Duration: 4-5 days**

1. **Home/Welcome Page**

    - World map display
    - Quick navigation to main sections
    - Animated entry points

2. **World Section**

    - Continent list with cards
    - Continent detail pages with:
        - Map and flag display
        - Capital and ruler info
        - **Towns list** with links to town pages
        - Politics, languages, treaties
        - Creature types and trade routes
    - Town detail pages with:
        - Town description and location
        - Leader information
        - Notable NPCs

3. **Races Section**

    - **Per-section filtering:**
        - Search by name
        - Filter by size (Small, Medium, Large)
        - Filter by speed
        - Filter by continent locations
    - Race detail pages with:
        - Traits and subraces
        - Alabastria lore
        - Recommended classes
        - Deity recommendations

4. **Classes Section**

    - **Per-section filtering:**
        - Search by name
        - Filter by role (Tank, Healer, DPS, Support, Utility)
        - Filter by primary ability
        - Filter by hit die
    - Class detail pages with:
        - Features and subclasses
        - Alabastria context
        - Playstyle recommendations

5. **Pantheon Section**

    - **Per-section filtering:**
        - Search by deity name
        - Filter by pantheon
        - Filter by alignment
        - Filter by domain
    - Deity detail pages with:
        - Domains, symbols, history
        - Relationships (allies/conflicts)
        - Continent/race/class recommendations

6. **Guild Section**

    - Guild overview pages
    - **Staff directory** with filtering:
        - Search by name
        - Filter by role
    - **Member roster** with filtering:
        - Search by name
        - Filter by rank (Coal → Mithral)
        - Filter by class
        - Filter by status (Active, Inactive, Deceased, Retired)
    - **Quest report archive** with filtering:
        - Search by quest name
        - Filter by rank
        - Filter by outcome
        - Filter by date range
    - Quest reports are **immediately visible** upon creation (no approval
      workflow)

7. **Bestiary (Monster Slayers Guide)**

    - **Per-section filtering:**
        - Search by creature type name
        - Filter by continent
        - Filter by threat level (for legendaries)
    - Creature type encyclopedia
    - Legendary creatures (past/present)
    - Continent-specific threats

8. **Playstyle Guide**

    - Category-based recommendations
    - Ability score priorities
    - Role descriptions
    - Complexity levels

9. **World History Timeline**

    - Interactive timeline of major events
    - Period details with modals
    - **Fully editable by admin** (see Phase 8)

10. **NPC Generator** (`/npc-generator`)

    - Available to all authenticated users
    - Optional generation parameters:
        - Continent (weights race selection)
        - Race / Subrace
        - Gender
        - Class or Profession
        - Subclass
    - Generates: name, age, stats, descriptions
    - All fields editable before export
    - **Non-admin features:**
        - Upload image (client-side only)
        - Download NPC card as PNG image
        - Export NPC as JSON file
    - **Admin features:**
        - Save NPC to town (dropdown: "Town Name (Continent)")
        - Import NPC from JSON file
        - Re-upload image for imported NPCs

11. **Factions** (`/factions`)
    - **Per-section filtering:**
        - Search by faction name
        - Filter by continent presence
        - Filter by influence level
    - Faction list with emblem cards
    - Faction detail pages with:
        - Description and main purpose
        - Emblem display
        - Continent presence map (visual)
        - Notable members (NPCs and Guild Members)
        - Bases list with links
        - Relationships with other factions (graph/list)
    - Faction base detail pages with:
        - Description
        - Town relationship
        - Assigned members with roles

### Phase 7: User Dashboard

**Duration: 2-3 days**

1. **Character Management**

    - My Characters list
    - Create new character form
    - Edit character details
    - Link character to guild membership

2. **Quest Reports**
    - My Reports list (authored)
    - Write new quest report
    - View reports I participated in

### Phase 8: Admin Panel (Full Data Management)

**Duration: 4-5 days**

1. **Admin Dashboard**

    - Overview cards for all entities
    - Quick stats (users, guilds, characters, etc.)
    - Recent activity log

2. **User Management**

    - User list with search/filter
    - Create new user with temporary password
    - Edit user roles and permissions
    - Assign/revoke DM guild permissions
    - Delete users

3. **World Data Management**

    - Edit world description and stats
    - **Continents**: Full CRUD with image uploads
        - Edit name, description, colors, flags
        - Manage voyages, politics, languages
        - Manage creature types and trade routes
    - **Towns (NEW)**: Full CRUD
        - Create towns on continents
        - Edit description, population, location
        - Manage town leader (name, title, race, description, image)
        - Add/edit/remove notable NPCs

4. **World History Timeline Management**

    - **Historical Periods**: Full CRUD
        - Name, date range, description, significance
        - Reorder periods
    - **Historical Events**: Full CRUD
        - Name, cycle, description, impact
        - Link to periods and continents
        - Reorder events within periods

5. **Race & Class Management**

    - **Races**: Full CRUD
        - Basic info, traits, subraces
        - Alabastria lore, recommended classes
        - Deity recommendations
    - **Classes**: Full CRUD
        - Basic info, features, subclasses
        - Alabastria context, playstyle
        - Deity recommendations

6. **Pantheon Management**

    - **Pantheons**: Create/edit/delete pantheons
    - **Deities**: Full CRUD
        - Name, title, alignment, domains
        - Symbol, colors, description
        - Temples, history, followers
    - **Deity Relationships**: Manage allies/conflicts

7. **Guild Management**

    - **Guilds**: Full CRUD
        - Name, description, emblem
        - Link to continent
    - **Guild Staff**: Full CRUD with image uploads
    - **Guild Members**: Full CRUD
        - Link to user characters

8. **Bestiary Management**

    - **Creature Types**: Full CRUD
        - Description, habits, tactics, weaknesses
    - **Legendary Creatures**: Full CRUD
        - Link to creature types and continents

9. **NPC System Management**

    - **Professions**: Full CRUD
        - Name, description, category
        - **Location Restrictions** (mutually exclusive):
            - `UNRESTRICTED` - Available everywhere (default)
            - `CONTINENT` - Restricted to specific continents only
            - `TOWN` - Restricted to specific towns only
            - Cannot mix continent and town restrictions (enforced by UI and
              validation)
        - Seeded with standard set (mostly unrestricted)
    - **Relationship Types**: Full CRUD
        - Name, description
        - Used for NPC↔NPC and NPC↔Character relationships

10. **Faction Management** (Admin only)

    - **Factions**: Full CRUD
        - Name, description, main purpose, emblem image
        - Founded cycle
    - **Continent Presence**:
        - Add/remove continents with influence level
        - Levels: Minor, Moderate, Major, Dominant, Hidden
        - Optional description per continent
    - **Faction Bases**: Full CRUD
        - Name, description, town location
        - Town relationship description
        - Mark as headquarters or secret
        - Assign members to bases
    - **Faction Roles**: Admin-manageable
        - Name, description, rank order
        - Seeded: Leader, Lieutenant, Captain, Agent, Spy, Enforcer, Member,
          Recruit
    - **Faction Membership**: (NPCs and Guild Members)
        - Assign role, optional base assignment
        - Secret membership flag
        - Join date (cycle)
        - Notes
    - **Faction Relationships**:
        - Link factions with relationship types
        - Description and "since" cycle
    - **Faction Relationship Types**: Admin-manageable
        - Seeded: Allied, At War, Neutral, Trade Partners, Rivals, Vassal,
          Puppet State, Cold War, Non-Aggression Pact

11. **Image Management**
    - UploadThing integration for all image uploads
    - Image preview and crop
    - Replace existing images
    - Storage in `/uploads` Docker volume

### Phase 9: NPC Generator Tool

**Duration: 3-4 days**

1. **NPC Generation Engine**

    - Weighted random selection algorithm
    - Continent-aware race/subrace selection
    - Class-aware subclass selection
    - Name generation based on race (from existing race name data)
    - Age generation based on race lifespan
    - Stat generation with optional manual override

2. **NPC Generator UI** (`/npc-generator`)

    - Optional input fields:
        - Continent (affects race weighting)
        - Race/Subrace
        - Gender
        - Class or Profession
        - Subclass (if class selected)
    - "Generate" button triggers server action
    - Display generated NPC with all fields editable
    - Image upload (client-side only for non-admins)

3. **NPC Export Features**

    - **Card Image Export**: Canvas-based NPC card generation
        - Themed card design matching app aesthetic
        - Includes uploaded image (if any)
        - All stats and descriptions laid out professionally
        - Download as PNG
    - **JSON Export**: Full NPC data as downloadable JSON file

4. **Admin NPC Save Features**

    - Town dropdown: "Town Name (Continent Name)"
    - Save generated NPC to selected town
    - **JSON Import**: Upload JSON file to import NPC
        - Validates JSON structure
        - Prompts for image re-upload
        - Saves to selected town

5. **NPC Relationships** (Admin only)

    - Link NPCs to other NPCs with relationship types
    - Link NPCs to player Characters
    - Relationship management UI in town/NPC edit pages

6. **Profession Management** (Admin)
    - CRUD for NPC professions
    - Categories: Trade, Service, Noble, Criminal, Religious, etc.
    - **Location Restrictions** (mutually exclusive - pick one):
        - `UNRESTRICTED` - Available everywhere (default)
        - `CONTINENT` - e.g., "Dockworker" only in coastal continents
        - `TOWN` - e.g., "Royal Guard" only in capital towns
    - UI shows radio buttons for restriction type, then multi-select for
      locations
    - NPC Generator filters available professions based on selected
      town/continent
    - Seeded with standard professions (mostly unrestricted)

### Phase 10: DM Features

**Duration: 2 days**

1. **Guild Management**

    - Edit guild details
    - Manage guild staff
    - Manage guild members
    - Create and edit quests

2. **Quest Management**
    - Create new quests
    - Add participants
    - Record outcomes

### Phase 11: Polish & Optimization

**Duration: 2-3 days**

1. **Performance**

    - Implement proper caching with `"use cache"`
    - Optimize images
    - Add loading states
    - Implement Suspense boundaries

2. **Accessibility**

    - ARIA labels
    - Keyboard navigation
    - Screen reader support

3. **Mobile Optimization**

    - Test all breakpoints
    - Touch-friendly interactions
    - Swipe gestures for navigation

4. **Error Handling**
    - Error boundaries
    - User-friendly error messages
    - Logging

---

## Skeleton Components Pattern

All Suspense boundaries use themed Skeleton components for professional loading
states:

```tsx
// app/_components/common/Skeleton/SkeletonCard.tsx
import styles from './Skeleton.module.scss';

interface SkeletonCardProps {
	hasImage?: boolean;
	lines?: number;
}

export function SkeletonCard({
	hasImage = true,
	lines = 3,
}: SkeletonCardProps) {
	return (
		<div className={styles.skeletonCard}>
			{hasImage && <div className={styles.skeletonImage} />}
			<div className={styles.skeletonContent}>
				<div className={styles.skeletonTitle} />
				{Array.from({ length: lines }).map((_, i) => (
					<div
						key={i}
						className={styles.skeletonText}
						style={{ width: `${80 - i * 15}%` }}
					/>
				))}
			</div>
		</div>
	);
}
```

```scss
// Skeleton.module.scss
.skeletonCard {
	background: var(--color-parchment-light);
	border-radius: 8px;
	padding: 1rem;

	.skeletonImage,
	.skeletonTitle,
	.skeletonText {
		background: linear-gradient(
			90deg,
			var(--color-parchment-dark) 25%,
			var(--color-parchment-light) 50%,
			var(--color-parchment-dark) 75%
		);
		background-size: 200% 100%;
		animation: shimmer 1.5s infinite;
		border-radius: 4px;
	}
}

@keyframes shimmer {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
```

### Usage in Pages

```tsx
// app/(main)/races/page.tsx
import { Suspense } from 'react';
import { SkeletonCard } from '@components/common/Skeleton';

export default function RacesPage() {
	return (
		<div className='races-grid'>
			<Suspense fallback={<RaceListSkeleton />}>
				<RaceList />
			</Suspense>
		</div>
	);
}

function RaceListSkeleton() {
	return (
		<div className='grid'>
			{Array.from({ length: 12 }).map((_, i) => (
				<SkeletonCard key={i} hasImage={true} lines={4} />
			))}
		</div>
	);
}
```

---

## Portal-Based Modals

All modals render via React Portals to appear above all content:

```tsx
// app/_components/common/ModalPortal/ModalPortal.tsx
'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

interface ModalPortalProps {
	children: React.ReactNode;
	containerId?: string;
}

export function ModalPortal({
	children,
	containerId = 'modal-root',
}: ModalPortalProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		// Create portal container if it doesn't exist
		let container = document.getElementById(containerId);
		if (!container) {
			container = document.createElement('div');
			container.id = containerId;
			document.body.appendChild(container);
		}

		return () => setMounted(false);
	}, [containerId]);

	if (!mounted) return null;

	const container = document.getElementById(containerId);
	return container ? createPortal(children, container) : null;
}
```

```tsx
// app/_components/common/Modal/Modal.tsx
'use client';

import { useEffect, useCallback } from 'react';
import { ModalPortal } from '../ModalPortal';
import styles from './Modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Modal({
	isOpen,
	onClose,
	title,
	children,
	size = 'md',
}: ModalProps) {
	// Close on Escape key
	const handleEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		},
		[onClose]
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = '';
		};
	}, [isOpen, handleEscape]);

	if (!isOpen) return null;

	return (
		<ModalPortal>
			<div className={styles.modalOverlay} onClick={onClose}>
				<div
					className={`${styles.modalContent} ${styles[size]}`}
					onClick={(e) => e.stopPropagation()}
				>
					{title && (
						<div className={styles.modalHeader}>
							<h2>{title}</h2>
							<button
								className={styles.closeButton}
								onClick={onClose}
							>
								×
							</button>
						</div>
					)}
					<div className={styles.modalBody}>{children}</div>
				</div>
			</div>
		</ModalPortal>
	);
}
```

### Root Layout Portal Container

```tsx
// app/layout.tsx
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				{children}
				<div id='modal-root' /> {/* Portal target for modals */}
			</body>
		</html>
	);
}
```

---

## Custom Not-Found Page

Fantasy-themed 404 page matching the app aesthetic:

```tsx
// app/not-found.tsx
import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
	return (
		<div className={styles.notFoundContainer}>
			<div className={styles.mistOverlay} />

			<div className={styles.content}>
				<h1 className={styles.errorCode}>404</h1>
				<h2 className={styles.title}>Lost in the Mists</h2>
				<p className={styles.description}>
					The path you seek has faded into the fog. Perhaps a wrong
					turn at the crossroads, or ancient magic obscuring your way.
				</p>

				<div className={styles.compass}>
					{/* Animated compass or lantern illustration */}
					<div className={styles.compassNeedle} />
				</div>

				<nav className={styles.navigation}>
					<p>Let us guide you back:</p>
					<div className={styles.navLinks}>
						<Link href='/' className={styles.navLink}>
							<span className={styles.icon}>🏠</span>
							Return Home
						</Link>
						<Link href='/world' className={styles.navLink}>
							<span className={styles.icon}>🗺️</span>
							Explore the World
						</Link>
						<Link href='/guilds' className={styles.navLink}>
							<span className={styles.icon}>⚔️</span>
							Visit the Guilds
						</Link>
						<Link href='/npc-generator' className={styles.navLink}>
							<span className={styles.icon}>🎲</span>
							Generate an NPC
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}
```

```scss
// not-found.module.scss
.notFoundContainer {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: radial-gradient(
			ellipse at bottom,
			var(--color-mystic-dark) 0%,
			transparent 70%
		), linear-gradient(to bottom, var(--color-night-deep) 0%, var(
					--color-forest-dark
				) 100%);
	position: relative;
	overflow: hidden;
}

.mistOverlay {
	position: absolute;
	inset: 0;
	background: url('/images/mist-texture.png');
	opacity: 0.3;
	animation: drift 30s linear infinite;
}

@keyframes drift {
	from {
		transform: translateX(-10%);
	}
	to {
		transform: translateX(10%);
	}
}

.errorCode {
	font-family: var(--font-fantasy);
	font-size: clamp(6rem, 20vw, 12rem);
	color: var(--color-gold);
	text-shadow: 0 0 40px rgba(201, 162, 39, 0.5);
	margin: 0;
}

.compass {
	width: 120px;
	height: 120px;
	margin: 2rem auto;
	// Animated compass design
}

.navLinks {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 1rem;
	margin-top: 1.5rem;
}

.navLink {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem 1.5rem;
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid var(--color-gold-dim);
	border-radius: 8px;
	color: var(--color-cream);
	text-decoration: none;
	transition: all 0.3s ease;

	&:hover {
		background: rgba(201, 162, 39, 0.2);
		border-color: var(--color-gold);
		transform: translateY(-2px);
	}
}
```

---

## NPC Generator & Export System

### NPC Generation Algorithm

```typescript
// app/_actions/npc-generator.ts
'use server';

interface NPCGeneratorOptions {
	continentId?: string;
	raceId?: string;
	subraceId?: string;
	gender?: 'male' | 'female' | 'other';
	classId?: string;
	subclassId?: string;
	professionId?: string;
	isAdventurer?: boolean; // true = use class, false = use profession
}

export async function generateNPC(options: NPCGeneratorOptions) {
	// 1. If no race specified, use weighted random based on continent
	// 2. Generate name from race's name pool (respecting gender if specified)
	// 3. Generate age within race's lifespan range
	// 4. If adventurer with class but no subclass, pick fitting subclass
	// 5. If non-adventurer, pick profession if not specified
	//    - Filter professions by location restrictions:
	//      a. Unrestricted professions (always available)
	//      b. Continent-restricted (if continent matches)
	//      c. Town-restricted (if town matches, for admin saves)
	// 6. Generate ability scores (3d6 or point-buy-ish distribution)
	// 7. Calculate HP, AC based on class/profession
	// 8. Generate physical description, personality, gear loadout

	return generatedNPC; // Full NPC object (not saved to DB)
}

export async function saveNPCToTown(npc: GeneratedNPC, townId: string) {
	// Admin only - saves NPC to specified town
	await requireAdmin();
	return await db.createTownNPC({ ...npc, townId });
}

export async function importNPCFromJSON(
	json: string,
	townId: string,
	imagePath?: string
) {
	// Admin only - parses JSON and saves to town
	await requireAdmin();
	const npc = JSON.parse(json);
	// Validate structure
	return await db.createTownNPC({ ...npc, townId, imagePath });
}
```

### NPC Card Export (Client-Side Canvas)

```typescript
// app/_components/npc-generator/NPCCardExport/NPCCardExport.tsx
'use client';

import { useRef } from 'react';

export function NPCCardExport({ npc, uploadedImage }: Props) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const generateCard = async () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		// Card dimensions (standard trading card ratio)
		canvas.width = 750;
		canvas.height = 1050;

		// Draw parchment background
		drawParchmentBackground(ctx);

		// Draw NPC image (if provided)
		if (uploadedImage) {
			drawNPCPortrait(ctx, uploadedImage);
		}

		// Draw name banner
		drawNameBanner(ctx, npc.name, npc.race);

		// Draw stats block
		drawStatsBlock(ctx, npc);

		// Draw descriptions
		drawDescriptions(ctx, npc);

		// Trigger download
		const link = document.createElement('a');
		link.download = `${npc.name.replace(/\s+/g, '_')}_npc_card.png`;
		link.href = canvas.toDataURL('image/png');
		link.click();
	};

	return (
		<>
			<canvas ref={canvasRef} style={{ display: 'none' }} />
			<Button onClick={generateCard}>Download NPC Card</Button>
		</>
	);
}
```

### NPC JSON Export/Import Schema

```typescript
// NPC JSON Export Format
interface NPCExportSchema {
	version: '1.0';
	exportedAt: string; // ISO date
	npc: {
		name: string;
		gender?: string;
		age?: number;
		race: string;
		subrace?: string;
		classOrProfession: string;
		subclass?: string;
		level?: number;
		stats?: {
			strength?: number;
			dexterity?: number;
			constitution?: number;
			intelligence?: number;
			wisdom?: number;
			charisma?: number;
			hitPoints?: number;
			armorClass?: number;
			speed?: number;
		};
		descriptions?: {
			physical?: string;
			personality?: string;
			gearLoadout?: string;
			backstory?: string;
		};
	};
	// Note: Image not included - must be re-uploaded on import
}
```

---

## File Upload Configuration (UploadThing)

### UploadThing Setup

```typescript
// lib/uploadthing.ts
import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { auth } from './auth';

const f = createUploadthing();

export const ourFileRouter = {
	// Image uploads for various entities
	continentImage: f({ image: { maxFileSize: '4MB' } })
		.middleware(async () => {
			const session = await auth();
			if (!session || session.user.role !== 'ADMIN')
				throw new Error('Unauthorized');
			return { userId: session.user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// File stored in /uploads volume
			return { url: file.url };
		}),

	memberImage: f({ image: { maxFileSize: '2MB' } })
		.middleware(async () => {
			const session = await auth();
			if (!session) throw new Error('Unauthorized');
			return { userId: session.user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			return { url: file.url };
		}),

	// Additional routes for: flags, rulers, staff, guilds, characters
} satisfies FileRouter;
```

### Docker Volume Configuration

```yaml
# docker-compose.dev.yml
services:
    app:
        container_name: alabastria-dev-app
        build:
            context: .
            dockerfile: Dockerfile.dev
        ports:
            - '3000:3000'
            - '5555:5555'
        volumes:
            - .:/alabastria
            - /alabastria/node_modules
            - uploads_data:/alabastria/uploads # Persistent uploads
        env_file:
            - .env.docker.development
        environment:
            - NODE_ENV=development
            - UPLOADTHING_TOKEN=${UPLOADTHING_TOKEN}
        depends_on:
            - db

    db:
        container_name: alabastria-dev-postgres
        image: postgres:18.1
        restart: always
        env_file:
            - .env.docker.development
        volumes:
            - postgres_data_dev:/var/lib/postgresql
        ports:
            - '5432:5432'

volumes:
    postgres_data_dev:
    uploads_data: # Named volume for uploaded files
```

### Environment Variables

```env
# .env.docker.development
POSTGRES_USER=alabastria
POSTGRES_PASSWORD=your_password
POSTGRES_DB=alabastria_dev
DATABASE_URL=postgresql://alabastria:your_password@db:5432/alabastria_dev

# Auth.js
AUTH_SECRET=your_auth_secret_here
AUTH_TRUST_HOST=true

# UploadThing
UPLOADTHING_TOKEN=your_uploadthing_token
```

---

## Per-Section Filtering Pattern

Each section with lists will have a consistent filtering UX:

### SectionFilter Component

```tsx
// app/_components/common/SectionFilter/SectionFilter.tsx
interface SectionFilterProps<T> {
	items: T[];
	filters: FilterConfig[];
	searchField?: keyof T;
	onFilteredItems: (items: T[]) => void;
}

interface FilterConfig {
	id: string;
	label: string;
	type: 'select' | 'multiselect' | 'range' | 'toggle';
	options?: { value: string; label: string }[];
	field: string; // dot notation supported: "race.name"
}
```

### Filter Types by Section

| Section           | Search        | Filters                             |
| ----------------- | ------------- | ----------------------------------- |
| **Races**         | Name          | Size, Speed, Continent              |
| **Classes**       | Name          | Role, Primary Ability, Hit Die      |
| **Deities**       | Name          | Pantheon, Alignment, Domain         |
| **Guild Staff**   | Name          | Role                                |
| **Guild Members** | Name          | Rank, Class, Status                 |
| **Quest Reports** | Quest Name    | Rank, Outcome, Date Range           |
| **Bestiary**      | Creature Type | Continent, Threat Level             |
| **Factions**      | Name          | Continent Presence, Influence Level |

### URL-based Filter State

Filters sync to URL search params for shareable/bookmarkable filtered views:

```
/races?size=Medium&speed=30&continent=Alatman
/pantheon?alignment=Good&domain=Life
/guilds/huntbound-order/quests?rank=gold&outcome=success
```

---

## Design Guidelines

### Color Scheme (Fantasy/D&D Inspired)

```scss
// Primary palette - Deep forest/magic theme
$colors: (
	// Backgrounds
	primaryBackgroundLight: #f5f0e6,
	// Parchment light
	primaryBackgroundDark: #1a1a2e,

	// Deep night
	// Foregrounds
	primaryForegroundLight: #2d2d2d,
	// Dark charcoal
	primaryForegroundDark: #e8e4dc,

	// Warm cream
	// Accents
	accentGold: #c9a227,
	// Royal gold
	accentCrimson: #8b0000,
	// Blood red
	accentForest: #2d5a27,
	// Deep forest
	accentMystic: #4a3f6b,
	// Mystic purple
	accentOcean: #1e4d6b,

	// Ocean blue
	// Guild ranks
	rankCoal: #36454f,
	rankCopper: #b87333,
	rankIron: #a9a9a9,
	rankSilver: #c0c0c0,
	rankGold: #ffd700,
	rankPlatinum: #e5e4e2,
	rankMithral: #7ec8e3
);
```

### Typography

```scss
// Consider fonts like:
// - Headers: 'Cinzel' or 'Almendra' (fantasy headers)
// - Body: 'Lora' or 'EB Garamond' (readable serif)
// - UI: 'Source Sans Pro' (clean sans-serif for forms/UI)
```

### Responsive Breakpoints

```scss
$breakpoints: (
	sm: 640px,
	md: 768px,
	lg: 1024px,
	xl: 1280px,
	xxl: 1536px,
);
```

---

## Caching Strategy

### Cache Tags (in `lib/db.ts`)

```typescript
export enum CACHE_TAGS {
	// World data
	WORLD = 'world',
	CONTINENTS = 'continents',
	KINGDOMS = 'kingdoms',

	// Character building
	RACES = 'races',
	CLASSES = 'classes',

	// Religion
	PANTHEONS = 'pantheons',
	DEITIES = 'deities',
	DEITY_RELATIONSHIPS = 'deity-relationships',

	// Guilds
	GUILDS = 'guilds',
	GUILD_STAFF = 'guild-staff',
	GUILD_MEMBERS = 'guild-members',
	QUESTS = 'quests',

	// Guides
	PLAYSTYLE = 'playstyle',
	BESTIARY = 'bestiary',

	// User data
	USERS = 'users',
	CHARACTERS = 'characters',
}
```

### Cache Lifetimes

```typescript
// Official/seed data - long cache
export const OFFICIAL_CACHE_LIFE = {
	stale: 86400, // 1 day
	revalidate: 604800, // 1 week
	expire: 2592000, // 30 days
};

// User-generated data - shorter cache
export const USER_CACHE_LIFE = {
	stale: 60, // 1 minute
	revalidate: 300, // 5 minutes
	expire: 3600, // 1 hour
};

// Development - minimal cache
export const DEV_CACHE_LIFE = {
	stale: 1,
	revalidate: 60,
	expire: 3600,
};
```

---

## Server Actions Pattern

### Example: Read Action (Cached)

```typescript
// app/_actions/races.ts
'use cache';

import { cacheTag, cacheLife } from 'next/cache';
import * as db from '@lib/db';

export const getRaces = async () => {
	cacheTag(db.CACHE_TAGS.RACES);
	cacheLife(db.OFFICIAL_CACHE_LIFE);
	return await db.getRaces();
};

export const getRaceBySlug = async (slug: string) => {
	cacheTag(db.CACHE_TAGS.RACES);
	cacheLife(db.OFFICIAL_CACHE_LIFE);
	return await db.getRaceBySlug(slug);
};
```

### Example: Write Action (with Revalidation)

```typescript
// app/_actions/characters.ts
'use server';

import { revalidateTag } from 'next/cache';
import { requireAuth } from '@lib/auth';
import * as db from '@lib/db';

export const createCharacter = async (data: CreateCharacterInput) => {
	const user = await requireAuth();

	const character = await db.createCharacter({
		...data,
		userId: user.id,
	});

	revalidateTag(db.CACHE_TAGS.CHARACTERS);

	return character;
};
```

---

## Security Considerations

### Authentication Flow (Auth.js)

1. **Admin creates user** with temporary password (via admin panel)
2. User logs in with temp password using Credentials provider
3. `mustChangePassword` flag in session triggers redirect to `/change-password`
4. User sets new password via server action
5. Flag is cleared, user can access app

### Authorization Checks

```typescript
// lib/auth.ts
import { auth } from './auth';
import { redirect } from 'next/navigation';

export const requireAuth = async () => {
	const session = await auth();
	if (!session?.user) {
		redirect('/login');
	}

	// Check if user must change password
	if (session.user.mustChangePassword) {
		redirect('/change-password');
	}

	return session.user;
};

export const requireRole = async (roles: UserRole[]) => {
	const user = await requireAuth();
	if (!roles.includes(user.role)) {
		redirect('/unauthorized');
	}
	return user;
};

export const requireAdmin = async () => {
	return requireRole(['ADMIN']);
};

export const requireGuildDM = async (guildId: string) => {
	const user = await requireAuth();
	if (user.role === 'ADMIN') return user;

	const isDM = await db.isUserGuildDM(user.id, guildId);
	if (!isDM) {
		redirect('/unauthorized');
	}
	return user;
};

// For server actions
export const requireAuthAction = async () => {
	const session = await auth();
	if (!session?.user) {
		throw new Error('Not authenticated');
	}
	return session.user;
};
```

### Route Protection

```typescript
// app/(admin)/layout.tsx
import { requireAdmin } from '@/lib/auth';

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	await requireAdmin(); // Redirects if not admin

	return (
		<div className='admin-layout'>
			<AdminSidebar />
			<main>{children}</main>
		</div>
	);
}
```

---

## NPM Scripts

```json
{
	"scripts": {
		"dev": "next dev --turbopack",
		"build": "next build",
		"start": "next start",
		"lint": "eslint",
		"prepare-env": "node scripts/generate-scss-styleExports.js && npm run prisma:update",
		"predev": "npm run prepare-env",
		"prebuild": "npm run prepare-env",
		"prisma:generate": "npx prisma generate",
		"prisma:migrate": "npx prisma migrate dev --name dev",
		"prisma:seed": "npx prisma db seed",
		"prisma:update": "npm run prisma:generate && npm run prisma:migrate && npm run prisma:seed",
		"prisma:studio": "npx prisma studio --port 5555 --browser none",
		"docker:dev:build": "docker compose -f docker-compose.dev.yml up --build -d",
		"docker:dev:build:logs": "docker compose -f docker-compose.dev.yml up --build",
		"docker:dev:up": "docker compose -f docker-compose.dev.yml up -d",
		"docker:dev:up:logs": "docker compose -f docker-compose.dev.yml up",
		"docker:dev:logs": "docker compose -f docker-compose.dev.yml logs -f",
		"docker:dev:exec:app": "docker exec -it alabastria-dev-app",
		"docker:dev:exec:db": "docker exec -it alabastria-dev-postgres",
		"docker:dev:down": "docker compose -f docker-compose.dev.yml down",
		"docker:dev:clear": "docker compose -f docker-compose.dev.yml down -v",
		"docker:dev:rebuild": "npm run docker:dev:down && npm run docker:dev:build",
		"docker:dev:rebuild:logs": "npm run docker:dev:down && npm run docker:dev:build:logs",
		"migrate-legacy": "npx tsx scripts/migrate-legacy-data.ts"
	}
}
```

---

## Dependencies

### Production

```json
{
	"@auth/prisma-adapter": "^2.x.x",
	"@prisma/adapter-pg": "^7.0.1",
	"@prisma/client": "^7.0.1",
	"@uploadthing/react": "^7.x.x",
	"bcrypt": "^5.1.1",
	"next": "^16.0.4",
	"next-auth": "^5.x.x",
	"pg": "^8.16.3",
	"prisma": "^7.0.1",
	"react": "^19.2.0",
	"react-dom": "^19.2.0",
	"uploadthing": "^7.x.x"
}
```

### Development

```json
{
	"@types/bcrypt": "^5.x.x",
	"@types/node": "^20",
	"@types/pg": "^8.15.6",
	"@types/react": "^19",
	"@types/react-dom": "^19",
	"babel-plugin-react-compiler": "^1.0.0",
	"dotenv": "^17.2.3",
	"dotenv-cli": "^11.0.0",
	"eslint": "^9",
	"eslint-config-next": "^16.0.4",
	"sass": "^1.94.2",
	"ts-node": "^10.9.2",
	"tsx": "^4.21.0",
	"typescript": "^5.9.3"
}
```

---

## Total Estimated Timeline

| Phase     | Description                                      | Duration       |
| --------- | ------------------------------------------------ | -------------- |
| 1         | Project Setup & Infrastructure                   | 1-2 days       |
| 2         | Database Schema & Prisma                         | 2-3 days       |
| 3         | Data Migration & Seeding                         | 2-3 days       |
| 4         | Authentication System (Auth.js + UploadThing)    | 2-3 days       |
| 5         | Core UI Components (Skeletons, Portals, Filters) | 3-4 days       |
| 6         | Public Pages with Per-Section Filtering          | 5-6 days       |
| 7         | User Dashboard                                   | 2-3 days       |
| 8         | Admin Panel (Full Data Management + Factions)    | 5-6 days       |
| 9         | NPC Generator Tool                               | 3-4 days       |
| 10        | DM Features                                      | 2 days         |
| 11        | Polish & Optimization                            | 2-3 days       |
| **Total** |                                                  | **29-40 days** |

---

## Design Decisions Summary

The following decisions have been made based on requirements:

| Decision          | Choice                                                     |
| ----------------- | ---------------------------------------------------------- |
| **App Name**      | Alabastria                                                 |
| **Default Theme** | Dark mode                                                  |
| **Initial Admin** | admin@alabastria.local / admin123 (forced password change) |
| **Ports**         | 3000 (app), 5432 (PostgreSQL), 5555 (Prisma Studio)        |

| Decision                  | Choice                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| **Authentication**        | Auth.js (NextAuth v5) with Credentials provider                                                   |
| **File Storage**          | UploadThing with Docker-friendly `/uploads` volume                                                |
| **Email**                 | Not required - no email notifications                                                             |
| **World History**         | Fully editable by admin via UI, stored in database (`HistoricalPeriod`, `HistoricalEvent` tables) |
| **Admin Capabilities**    | Full CRUD for all entities including world history, continents, races, classes, etc.              |
| **Towns Feature**         | Towns on continents with leader and notable NPCs                                                  |
| **Multi-Guild**           | Users can belong to multiple guilds                                                               |
| **Character Depth**       | Basic info matching existing JSON: name, race, class, background, level                           |
| **Quest Visibility**      | Immediate visibility (no approval workflow)                                                       |
| **Filtering**             | Per-section filtering with search and category filters                                            |
| **Loading States**        | Skeleton components with shimmer effect for all Suspense fallbacks                                |
| **Modals**                | Portal-based modals rendering above all content                                                   |
| **404 Page**              | Custom fantasy-themed not-found page                                                              |
| **NPC Generator**         | Random NPC tool available to all users                                                            |
| **NPC Stats**             | Optional fields: ability scores, HP, AC, speed                                                    |
| **NPC Professions**       | Stored in DB, admin-manageable, can be restricted to towns/continents or unrestricted             |
| **NPC Descriptions**      | Physical, personality, gear loadout, backstory (all optional)                                     |
| **NPC Export**            | Card image download (client-side canvas) + JSON export                                            |
| **NPC Import**            | Admin can import from JSON and save to town                                                       |
| **NPC Relationships**     | Link NPCs to each other and to player characters                                                  |
| **Relationship Types**    | Stored in DB, admin-manageable                                                                    |
| **Factions**              | Admin-created with description, purpose, emblem, continent presence with influence levels         |
| **Faction Bases**         | Located in towns with relationship descriptions, member assignments                               |
| **Faction Membership**    | NPCs and Guild Members can belong to multiple factions with roles, admin-only assignment          |
| **Faction Relationships** | Faction-specific relationship types (Allied, At War, etc.), admin-manageable                      |

---

## Next Steps

Ready to begin development! The plan includes:

1. **Phase 1** - Project infrastructure setup

    - Initialize Next.js 16+ with TypeScript
    - Configure Docker with PostgreSQL and `/uploads` volume
    - Set up SCSS styling system

2. **Phase 2** - Database schema

    - Full Prisma schema with all models
    - Auth.js compatible User/Account/Session tables
    - Towns and World History tables

3. **Phase 3** - Data migration

    - Migrate all JSON data from legacy app
    - Copy and organize images
    - Seed admin user

4. **Continue through remaining phases...**

Let me know when you're ready to start, or if you'd like any modifications to
this plan!
