import {cEx, uEx} from '../src/index'


test('cEx',()=>{

  let str =cEx([
    'hello',
    {'invalid':_ => false}
  ])

  console.log(`"${str}"`)

  expect(str).toEqual('hello')

  str =cEx([
    'hello',
    {'valid':_ => true}
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid')

  str =cEx([
    'hello',
    {'valid':_ => true},
    _=> 'coucou'
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid coucou')

  str =cEx([
    'hello',
    {'valid':_ => true},
    _=> ''
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid')
  str =cEx([
    'hello',
    {'valid':_ => true},
    _=> false
  ])

  console.log(`"${str}"`)
  expect(str).toEqual('hello valid')

})

test('uex',()=>{

  let str =uEx([
    'http://google.com',
  ])

  expect(str).toEqual('http://google.com')


  str =uEx([
    'http://google.com',
    'hello'
  ])

  console.log(str)
  expect(str).toEqual('http://google.com/hello')
  str =uEx([
    'http://google.com',
    {'hello': _=> false},
    {'hello2': _=> false},
  ])

  console.log(str)
  expect(str).toEqual('http://google.com')

  str =uEx([
    'http://google.com',
    {'hello': _=> false},
    {'hello2': _=> true},
  ])

  console.log(str)
  expect(str).toEqual('http://google.com/hello2')


    str =uEx([
      'http://google.com',
      {'hello': _=> false},
      {'hello2': _=> true},
      _=> false,
    ])

    console.log(str)
    expect(str).toEqual('http://google.com/hello2')


        str =uEx([
          'http://google.com',
          {'hello': _=> false},
          {'hello2': _=> true},
          _=> 'blabla',
        ])

        console.log(str)
        expect(str).toEqual('http://google.com/hello2/blabla')


})
