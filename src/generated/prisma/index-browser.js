
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  auth_id: 'auth_id',
  email: 'email',
  name: 'name'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  title: 'title',
  content: 'content',
  published: 'published',
  authorId: 'authorId'
};

exports.Prisma.MachineBasicSpecScalarFieldEnum = {
  id: 'id',
  machineManufacturerId: 'machineManufacturerId',
  machineManufacturerName: 'machineManufacturerName',
  machineName: 'machineName',
  machineType: 'machineType',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  kuwaeSpecId: 'kuwaeSpecId',
  detailSpecId: 'detailSpecId',
  filmSpecId: 'filmSpecId',
  ruleSpecId: 'ruleSpecId',
  sheetBaseSpecId: 'sheetBaseSpecId',
  sutebaSpecId: 'sutebaSpecId',
  spongeCorkSpecId: 'spongeCorkSpecId',
  centerMetalSpecId: 'centerMetalSpecId',
  nickSpecId: 'nickSpecId',
  ruleThicknessSpecId: 'ruleThicknessSpecId',
  remarkSpecId: 'remarkSpecId'
};

exports.Prisma.KuwaeSpecScalarFieldEnum = {
  id: 'id',
  die_kuwae: 'die_kuwae',
  kuwae_cutting_thickness: 'kuwae_cutting_thickness',
  kuwae_cutting_width: 'kuwae_cutting_width',
  kuwae_angle: 'kuwae_angle',
  back_kuwae_angle: 'back_kuwae_angle'
};

exports.Prisma.DetailSpecScalarFieldEnum = {
  id: 'id',
  mounting_hole: 'mounting_hole',
  nail_nut: 'nail_nut',
  one_touch_bar: 'one_touch_bar',
  stripper: 'stripper',
  blanking: 'blanking',
  under_pin: 'under_pin',
  cad_plate: 'cad_plate',
  cad_plate_remark: 'cad_plate_remark'
};

exports.Prisma.FilmSpecScalarFieldEnum = {
  id: 'id',
  film: 'film',
  film_thickness: 'film_thickness'
};

exports.Prisma.RuleSpecScalarFieldEnum = {
  id: 'id',
  balance_rule: 'balance_rule',
  inside_sheet_rule: 'inside_sheet_rule'
};

exports.Prisma.SheetBaseSpecScalarFieldEnum = {
  id: 'id',
  base_thickness: 'base_thickness',
  base_thickness_remark: 'base_thickness_remark',
  max_sheet_x: 'max_sheet_x',
  max_sheet_y: 'max_sheet_y',
  min_sheet_x: 'min_sheet_x',
  min_sheet_y: 'min_sheet_y',
  max_base_x: 'max_base_x',
  max_base_y: 'max_base_y',
  min_base_x: 'min_base_x',
  min_base_y: 'min_base_y'
};

exports.Prisma.SutebaSpecScalarFieldEnum = {
  id: 'id',
  suteba_pitch: 'suteba_pitch'
};

exports.Prisma.SpongeCorkSpecScalarFieldEnum = {
  id: 'id',
  sponge: 'sponge',
  cork: 'cork',
  cork_crushing: 'cork_crushing',
  crushing_remark: 'crushing_remark'
};

exports.Prisma.CenterMetalSpecScalarFieldEnum = {
  id: 'id',
  center_metal: 'center_metal',
  center_metal_kind: 'center_metal_kind',
  center_metal_center: 'center_metal_center',
  center_metal_right: 'center_metal_right',
  center_metal_left: 'center_metal_left'
};

exports.Prisma.NickSpecScalarFieldEnum = {
  id: 'id',
  nick: 'nick',
  nick_remark_1: 'nick_remark_1',
  nick_remark_2: 'nick_remark_2',
  nick_remark_3: 'nick_remark_3'
};

exports.Prisma.RuleThicknessSpecScalarFieldEnum = {
  id: 'id',
  ef_rule: 'ef_rule',
  bf_rule: 'bf_rule',
  af_rule: 'af_rule',
  wf_rule: 'wf_rule',
  gf_rule: 'gf_rule',
  ff_rule: 'ff_rule',
  cf_rule: 'cf_rule',
  paper_350_rule: 'paper_350_rule'
};

exports.Prisma.RemarkSpecScalarFieldEnum = {
  id: 'id',
  remark_1: 'remark_1',
  remark_2: 'remark_2',
  remark_3: 'remark_3',
  stripper_first_suteba: 'stripper_first_suteba',
  air_hammer_first_suteba: 'air_hammer_first_suteba',
  ueda_first_suteba: 'ueda_first_suteba'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Post: 'Post',
  MachineBasicSpec: 'MachineBasicSpec',
  KuwaeSpec: 'KuwaeSpec',
  DetailSpec: 'DetailSpec',
  FilmSpec: 'FilmSpec',
  RuleSpec: 'RuleSpec',
  SheetBaseSpec: 'SheetBaseSpec',
  SutebaSpec: 'SutebaSpec',
  SpongeCorkSpec: 'SpongeCorkSpec',
  CenterMetalSpec: 'CenterMetalSpec',
  NickSpec: 'NickSpec',
  RuleThicknessSpec: 'RuleThicknessSpec',
  RemarkSpec: 'RemarkSpec'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
