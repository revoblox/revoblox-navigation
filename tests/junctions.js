import test from 'ava'
import { createJunction, Route } from 'junctions'
import { Router } from 'react-junctions'

test('create Junction with params', t => {
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

test('basic junction', t => {
  const junction = createJunction({
    a: {
      path: '/b'
    }
  })
  t.deepEqual(junction.a.pattern.parts, ['b'] )
  t.deepEqual(junction.createRoute('a').key, 'a')
})

test('subroutes', t => {
  const subj = createJunction({
    m: {
      path: '/m'
    }
  })
  const junction = createJunction({
    a: {
      path: '/b'
    },
    c: {
      path: '/d'
    },
    n: {
      path: '/m',
      next: subj
    }
  })
  t.deepEqual(junction.createRoute('a').key, 'a')
  t.deepEqual(junction.createRoute('a').branch.pattern.path, '/b')
  t.deepEqual(junction.createRoute('c').branch.pattern.path, '/d')
  t.deepEqual(junction.createRoute('n').branch.pattern.path, '/m')
  t.deepEqual(junction.n.next.main.createRoute('m').key, 'm')
  t.deepEqual(junction.n.next.main.createRoute('m').branch.pattern.path, '/m')
  // t.deepEqual(Router.propTypes, {})
  //t.is(junction.createRoute('n').locate('m'), '')
})