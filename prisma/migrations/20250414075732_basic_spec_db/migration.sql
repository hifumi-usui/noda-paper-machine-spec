-- CreateTable
CREATE TABLE "MachineBasicSpec" (
    "id" SERIAL NOT NULL,
    "machine_manufacturer_id" TEXT,
    "machine_manufacturer_name" TEXT,
    "machine_name" TEXT,
    "machine_type" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "kuwaeSpecId" INTEGER,
    "detailSpecId" INTEGER,
    "filmSpecId" INTEGER,
    "ruleSpecId" INTEGER,
    "sheetBaseSpecId" INTEGER,
    "sutebaSpecId" INTEGER,
    "spongeCorkSpecId" INTEGER,
    "centerMetalSpecId" INTEGER,
    "nickSpecId" INTEGER,
    "ruleThicknessSpecId" INTEGER,
    "remarkSpecId" INTEGER,

    CONSTRAINT "MachineBasicSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KuwaeSpec" (
    "id" SERIAL NOT NULL,
    "die_kuwae" TEXT,
    "kuwae_cutting_thickness" TEXT,
    "kuwae_cutting_width" TEXT,
    "kuwae_angle" TEXT,
    "back_kuwae_angle" TEXT,

    CONSTRAINT "KuwaeSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailSpec" (
    "id" SERIAL NOT NULL,
    "mounting_hole" TEXT,
    "nail_nut" TEXT,
    "one_touch_bar" TEXT,
    "stripper" TEXT,
    "blanking" TEXT,
    "under_pin" TEXT,
    "cad_plate" TEXT,
    "cad_plate_remark" TEXT,

    CONSTRAINT "DetailSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilmSpec" (
    "id" SERIAL NOT NULL,
    "film" TEXT,
    "film_thickness" DOUBLE PRECISION,

    CONSTRAINT "FilmSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuleSpec" (
    "id" SERIAL NOT NULL,
    "balance_rule" TEXT,
    "inside_sheet_rule" TEXT,

    CONSTRAINT "RuleSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SheetBaseSpec" (
    "id" SERIAL NOT NULL,
    "base_thickness" DOUBLE PRECISION,
    "base_thickness_remark" TEXT,
    "max_sheet_x" DOUBLE PRECISION,
    "max_sheet_y" DOUBLE PRECISION,
    "min_sheet_x" DOUBLE PRECISION,
    "min_sheet_y" DOUBLE PRECISION,
    "max_base_x" DOUBLE PRECISION,
    "max_base_y" DOUBLE PRECISION,
    "min_base_x" DOUBLE PRECISION,
    "min_base_y" DOUBLE PRECISION,

    CONSTRAINT "SheetBaseSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SutebaSpec" (
    "id" SERIAL NOT NULL,
    "suteba_pitch" DOUBLE PRECISION,

    CONSTRAINT "SutebaSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpongeCorkSpec" (
    "id" SERIAL NOT NULL,
    "sponge" TEXT,
    "cork" TEXT,
    "cork_crushing" TEXT,
    "crushing_remark" TEXT,

    CONSTRAINT "SpongeCorkSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CenterMetalSpec" (
    "id" SERIAL NOT NULL,
    "center_metal" TEXT,
    "center_metal_kind" TEXT,
    "center_metal_center" TEXT,
    "center_metal_right" TEXT,
    "center_metal_left" TEXT,

    CONSTRAINT "CenterMetalSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NickSpec" (
    "id" SERIAL NOT NULL,
    "nick" TEXT,
    "nick_remark_1" TEXT,
    "nick_remark_2" TEXT,
    "nick_remark_3" TEXT,

    CONSTRAINT "NickSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuleThicknessSpec" (
    "id" SERIAL NOT NULL,
    "ef_rule" TEXT,
    "bf_rule" TEXT,
    "af_rule" TEXT,
    "wf_rule" TEXT,
    "gf_rule" TEXT,
    "ff_rule" TEXT,
    "cf_rule" TEXT,
    "paper_350_rule" TEXT,

    CONSTRAINT "RuleThicknessSpec_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RemarkSpec" (
    "id" SERIAL NOT NULL,
    "remark_1" TEXT,
    "remark_2" TEXT,
    "remark_3" TEXT,
    "stripper_first_suteba" TEXT,
    "air_hammer_first_suteba" TEXT,
    "ueda_first_suteba" TEXT,

    CONSTRAINT "RemarkSpec_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_kuwaeSpecId_key" ON "MachineBasicSpec"("kuwaeSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_detailSpecId_key" ON "MachineBasicSpec"("detailSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_filmSpecId_key" ON "MachineBasicSpec"("filmSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_ruleSpecId_key" ON "MachineBasicSpec"("ruleSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_sheetBaseSpecId_key" ON "MachineBasicSpec"("sheetBaseSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_sutebaSpecId_key" ON "MachineBasicSpec"("sutebaSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_spongeCorkSpecId_key" ON "MachineBasicSpec"("spongeCorkSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_centerMetalSpecId_key" ON "MachineBasicSpec"("centerMetalSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_nickSpecId_key" ON "MachineBasicSpec"("nickSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_ruleThicknessSpecId_key" ON "MachineBasicSpec"("ruleThicknessSpecId");

-- CreateIndex
CREATE UNIQUE INDEX "MachineBasicSpec_remarkSpecId_key" ON "MachineBasicSpec"("remarkSpecId");

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_kuwaeSpecId_fkey" FOREIGN KEY ("kuwaeSpecId") REFERENCES "KuwaeSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_detailSpecId_fkey" FOREIGN KEY ("detailSpecId") REFERENCES "DetailSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_filmSpecId_fkey" FOREIGN KEY ("filmSpecId") REFERENCES "FilmSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_ruleSpecId_fkey" FOREIGN KEY ("ruleSpecId") REFERENCES "RuleSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_sheetBaseSpecId_fkey" FOREIGN KEY ("sheetBaseSpecId") REFERENCES "SheetBaseSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_sutebaSpecId_fkey" FOREIGN KEY ("sutebaSpecId") REFERENCES "SutebaSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_spongeCorkSpecId_fkey" FOREIGN KEY ("spongeCorkSpecId") REFERENCES "SpongeCorkSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_centerMetalSpecId_fkey" FOREIGN KEY ("centerMetalSpecId") REFERENCES "CenterMetalSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_nickSpecId_fkey" FOREIGN KEY ("nickSpecId") REFERENCES "NickSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_ruleThicknessSpecId_fkey" FOREIGN KEY ("ruleThicknessSpecId") REFERENCES "RuleThicknessSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineBasicSpec" ADD CONSTRAINT "MachineBasicSpec_remarkSpecId_fkey" FOREIGN KEY ("remarkSpecId") REFERENCES "RemarkSpec"("id") ON DELETE SET NULL ON UPDATE CASCADE;
