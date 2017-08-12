// modules/topics/index.js
import { createJunction } from 'junctions'
import Component from './Topics'

const junction = {
  topics: {
    topic1: {
      bla: {}
    },
    topic2: {}
  }
}

export {
  Component,
  junction
}
