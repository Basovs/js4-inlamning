import * as React from 'react'
import {mount} from 'enzyme'
import TestPage from '../pages/testPage'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<TestPage/>)
      expect(wrap.find('div').text()).toBe('Hello Next.js')
    })
  })  
})