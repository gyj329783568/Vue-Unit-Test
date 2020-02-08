import { parser, stringfy} from '@/code/parser'
import { expect } from 'chai'

describe('专门测试parser', () => {
  it('测试parser', () => {
    // deep.equal 为 ==， equal 为 ===
    expect(parser('name=123')).to.be.deep.equal({ name: '123' })
  })
})

describe('专门测试stringfy', () => {
  it('测试stringfy', () => {
    expect(stringfy({ name: '123' })).to.be.deep.equal('name=123')
  })
})

describe('常见测试方法', () => {
  it('相等关系', () => {
    expect(1 + 1).to.be.equal(2)
    expect([1, 2, 3]).to.be.lengthOf(3)
    expect(true).to.be.true
  })
  it('包含', () => {
    expect('abcd').to.be.contain('ab') //ac就报错
    expect('abcd').to.be.match(/ab/)
  })
  it('大于&小于', () => {
    expect(5).to.be.greaterThan(3) //大于
    expect(5).to.be.lessThan(8) //小于
    expect(5).to.be.not.greaterThan(8) //不大于
  })
})

