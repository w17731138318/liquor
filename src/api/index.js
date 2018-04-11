import * as common from './modules/common'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as log from './modules/log'
import * as config from './modules/config'
import * as oss from './modules/oss'
import * as schedule from './modules/schedule'
import * as theme from './modules/theme'
import * as terminal from './modules/terminal'
import * as content from './modules/content'
import * as goods from './modules/goods'
import * as bottle from './modules/bottle'

export default {
  common,     // 公共
  user,       // 管理员管理
  role,       // 角色管理
  menu,       // 菜单管理
  log,        // 系统日志
  config,     // 参数管理
  oss,        // 文件服务
  schedule,    // 定时任务
  theme, // 主题区域
  terminal, // 终端设备pc
  content, // 媒体内容
  goods,    // 商品
  bottle    // 单个商品
}
