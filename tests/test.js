import test from 'ava'
import Route from 'react-junctions'
import { transformObjects, extractLabelValues } from '../src/utils'

test('not much', t => {
  // console.log(Route)
  // t.deepEqual(Route, {})
  t.pass()
})

test('extraLabelValues', t => {
  t.deepEqual(
    extractLabelValues({ a: 'b'}),
    [
      { label: 'a', value: 'b' }
    ]
  )
  t.deepEqual(
    extractLabelValues({ a: 'b', c: 'd'}),
    [
      { label: 'a', value: 'b' },
      { label: 'c', value: 'd' },
    ]
  )
  t.deepEqual(
    extractLabelValues({ a: 'b', c: { d: 'e' }}),
    [
      { label: 'a', value: 'b' },
      { label: 'c', children: [{ label: 'd', value: 'e'}]}
    ]
  )
  t.deepEqual(
    extractLabelValues({ a: { b: 'f'}, c: { d: 'e' }}),
    [
      { label: 'a', children: [
        { label: 'b', value: 'f' }
        ]
      },
      { label: 'c', children: [
        { label: 'd', value: 'e'}
      ]}
    ]
  )
})