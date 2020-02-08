import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
//import Vue from 'vue'
// 原生方法
// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     let Constructor = Vue.extend(HelloWorld)
//     let vm = new Constructor({
//       propsData: {msg: 'hello'}
//     }).$mount()
//     console.log(vm.$el.querySelector('h1').innerHtml)
//     //expect(vm.$el.querySelector('h1').innerHtml).to.be.contain('hello')
//   })
// })

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
