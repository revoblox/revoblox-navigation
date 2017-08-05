import test from 'ava'
import { createJunction, Route } from 'junctions'

test('create Junction', t => {
  const junction = createJunction({
    details: {
      path: '/:id',
      paramTypes: {
        id: { required: true },
      }
    },
  })

  const route = junction.createRoute('details', { id: 'rendering '})
  t.deepEqual(route.branch.pattern.path, '/:id')
})
