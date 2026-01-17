/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config
 * & import("@trivago/prettier-plugin-sort-imports").PluginConfig
 * & import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
  experimentalTernaries: true,
  experimentalOperatorPosition: 'start',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  plugins: [import.meta.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['react', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
}

if (doesModuleExist('tailwindcss')) {
  config.plugins.push(import.meta.resolve('prettier-plugin-tailwindcss'))
  config.tailwindFunctions = ['classNames']
  config.tailwindStylesheet = './src/index.css'
}

function doesModuleExist(name) {
  try {
    import.meta.resolve(name)
    return true
  } catch {
    return false
  }
}

export default config
