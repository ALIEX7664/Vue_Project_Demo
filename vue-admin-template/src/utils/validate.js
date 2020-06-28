/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 登录校验函数
 * @param {string} str
 * @returns {Boolean}
 */

export function validUsername(str) {
  // const valid_map = ['admin', 'editor'] // 字符串数组
  // return valid_map.indexOf(str.trim()) >= 0 // indexOf返回字符串位置，admin：0，editor：1,trim()去除输入时的空格
  return str.length >= 4
}
