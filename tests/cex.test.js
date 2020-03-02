import cex from '../src/index'


test('cex',()=>{

  let str =cex([
    'hello',
    {'invalid':_ => false}
  ])

  console.log(`"${str}"`)

  str =cex([
    'hello',
    {'valid':_ => true}
  ])

  console.log(`"${str}"`)

  str =cex([
    'hello',
    {'valid':_ => true},
    _=> 'coucou'
  ])

  console.log(`"${str}"`)

  str =cex([
    'hello',
    {'valid':_ => true},
    _=> ''
  ])

  console.log(`"${str}"`)
})
