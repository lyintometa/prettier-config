/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config
 * & import("@trivago/prettier-plugin-sort-imports").PluginConfig
 * & import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
  printWidth: 120,
  experimentalTernaries: true,
  experimentalOperatorPosition: 'start',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  quoteProps: 'preserve',
  plugins: [import.meta.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['react', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSideEffects: false,
}

if (doesModuleExist('tailwindcss')) {
  config.plugins.push(import.meta.resolve('prettier-plugin-tailwindcss'))
  config.tailwindFunctions = ['classNames']
  config.tailwindAttributes = ['pt']
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
