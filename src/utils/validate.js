/**
 * 验证path
 * @param {路径} path
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
