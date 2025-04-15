import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // MachineBasicSpecのサンプルデータ
  const machineBasic = await prisma.machineBasicSpec.create({
    data: {
      machineManufacturerId: "AP1040",
      machineManufacturerName: "旭マシナリー",
      machineName: "カートンマスター",
      machineType: "1040",

      kuwaeSpec: {
        create: {
          die_kuwae: "基本15",
          kuwae_cutting_thickness: "無し",
          kuwae_cutting_width: "無し",
          kuwae_angle: "無し",
          back_kuwae_angle: "無し",
        },
      },

      detailSpec: {
        create: {
          mounting_hole: "有り",
          nail_nut: "φ4爪付",
          one_touch_bar: "基本有り",
          stripper: "有り",
          blanking: "都度",
          under_pin: "都度",
          cad_plate: "都度",
          cad_plate_remark: "",
        },
      },

      filmSpec: {
        create: {
          film: "有り",
          film_thickness: 0.15,
        },
      },

      ruleSpec: {
        create: {
          balance_rule: "有り",
          inside_sheet_rule: "有り",
        },
      },

      sheetBaseSpec: {
        create: {
          base_thickness: 18,
          base_thickness_remark: "基本全て18mm",
          max_sheet_x: 1040,
          max_sheet_y: 720,
          min_sheet_x: 400,
          min_sheet_y: 270,
          max_base_x: 1030,
          max_base_y: 700,
          min_base_x: 900,
          min_base_y: 550,
        },
      },

      sutebaSpec: {
        create: {
          suteba_pitch: 80,
        },
      },

      spongeCorkSpec: {
        create: {
          sponge: "有り",
          cork: "有り",
          cork_crushing: "有り",
          crushing_remark: "ワンタッチ底潰し",
        },
      },

      centerMetalSpec: {
        create: {
          center_metal: "有り",
          center_metal_kind: "38mm",
          center_metal_center: "無し",
          center_metal_right: "無し",
          center_metal_left: "280",
        },
      },

      nickSpec: {
        create: {
          nick: "有り",
          nick_remark_1: "",
          nick_remark_2: "",
          nick_remark_3: "",
        },
      },

      ruleThicknessSpec: {
        create: {
          ef_rule: "0.9",
          bf_rule: "0.9～1.4",
          af_rule: "1.4～2.0",
          wf_rule: "1.4～2.0",
          gf_rule: "0.7～",
          ff_rule: "0.9～",
          cf_rule: "1.4～",
          paper_350_rule: "0.5",
        },
      },

      remarkSpec: {
        create: {
          remark_1: "",
          remark_2: "",
          remark_3: "",
          stripper_first_suteba: "60",
          air_hammer_first_suteba: "",
          ueda_first_suteba: "",
        },
      },
    },
  });

  console.log("シードデータが正常に作成されました");
  console.log({ machineBasic });
}

main()
  .catch((e) => {
    console.error("シードデータ作成中にエラーが発生しました:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // データベース接続を閉じる
    await prisma.$disconnect();
  });
