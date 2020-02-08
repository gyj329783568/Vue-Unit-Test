import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'
describe('Counter', () => {
  const wrapper = mount(Counter)

  it('点击按钮', () => {
    const button = wrapper.find('button');
    expect(button.text()).to.be.equal('Increment');
    button.trigger('click');
    expect(wrapper.find('.count').text()).to.be.equal('1')
  })
})
// describe('Counter', () => {
//   it('点击按钮能否加1', (done) => {
//     let wrapper = mount(Counter)
//     console.log(wrapper.find('#count').text())
//     expect(wrapper.find('#count').text()).to.be.equal('10')
//     wrapper.find('button').trigger('click')
//     // setTimeout(() => {
//     //   expect(wrapper.find('#count').text()).to.be.equal('11')
//     //   done()
//     // }, 1000);
//     expect(wrapper.find('#count').text()).to.be.equal('11')
//     //console.log(wrapper.find('#count').text())

//     //expect(wrapper.find('#count').text()).to.be.equal('11')
//   })
// })