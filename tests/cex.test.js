import cex from '../src/index'


test('cex',()=>{

  let str =cex([
    'hello',
    {'invalid':_ => false}
  ])

  console.log(str)

  str =cex([
    'hello',
    {'valid':_ => true}
  ])

  console.log(str)
})
