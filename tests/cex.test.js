import cex from '../src/index'


test('cex',()=>{

  let str =cex([
    'hello',
    {'invalid':_ => false}
  ])

  console.log(`"${str}"`)

  expect(str).toEqual('hello')

  str =cex([
    'hello',
    {'valid':_ => true}
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid')

  str =cex([
    'hello',
    {'valid':_ => true},
    _=> 'coucou'
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid coucou')

  str =cex([
    'hello',
    {'valid':_ => true},
    _=> ''
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid')
  str =cex([
    'hello',
    {'valid':_ => true},
    _=> false
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid')

})
