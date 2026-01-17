/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config & import("@trivago/prettier-plugin-sort-imports").PluginConfig}
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

export default config
