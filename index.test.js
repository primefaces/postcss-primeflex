const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined });
  console.log(result.css);
  /*expect(result.css).toEqual(output)*/
  expect(result.warnings()).toHaveLength(0)
}

test('does something', async () => {
  await run('@primeflex', '', { });
})