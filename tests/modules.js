import test from 'ava'
import { createJunction } from 'junctions'
import { subjunction } from '../src/modules/topics'

test('export junction', t => {
  const paramOptions = { id: 'test' }
  t.deepEqual(
    subjunction.createRoute('details', paramOptions).params,
    paramOptions)
})
