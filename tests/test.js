import test from 'ava'
import { extractLabelValues, arrToArrObj } from '../src/utils'

test('not much', t => {
  // console.log(Route)
  // t.deepEqual(Route, {})
  t.pass()
})

test('arrToArrObj', t => {
  t.deepEqual(arrToArrObj(['a', 'b']),
    [
      { label: 'a' },
      { label: 'b' }
    ])
})

test('extraLabelValues', t => {
  t.deepEqual(
    extractLabelValues({ a: {} }),
    [
      { label: 'a' }
    ]
  )
  t.deepEqual(
    extractLabelValues({ a: {}, c: {}}),
    [
      { label: 'a' },
      { label: 'c' },
    ]
  )
  t.deepEqual(
    extractLabelValues({ a: {}, c: { d: {} }}),
    [
      { label: 'a' },
      { label: 'c', children: [{ label: 'd'}]}
    ]
  )
  t.deepEqual(
    extractLabelValues({ a: { b: {}}, c: { d: {} }}),
    [
      { label: 'a', children: [
        { label: 'b' }
        ]
      },
      { label: 'c', children: [
        { label: 'd' }
      ]}
    ]
  )
  t.deepEqual(
    extractLabelValues({ m: ['n', 'o'] }),
    [{
      label: 'm',
      children: [
        {
          label: 'n'
        },
        {
          label: 'o'
        }
      ]
    }] 
  )
})