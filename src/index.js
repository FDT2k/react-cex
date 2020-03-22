import {map,compose,curry,reduce,_either,is_type_string,is_type_object,is_type_function,identity,keys,joinList} from '@geekagency/composite-js'

/*
Easy class concat
*/

const trim = string => string.trim();

const notEmptyReducer = (accumulator,item)=> {
  if(item!==''){
    accumulator.push(item)
  }

  return accumulator;
}

const remove_empty_items = list => reduce([],notEmptyReducer,list)

// List -> String -> String
const assemble = sep => joinList(sep)

const resolveString = identity

const resolveObjectProp =  curry((object,prop) =>object[prop]() ? prop:'');

const resolveObject = curry((separator,x)=> compose(trim,assemble(separator),remove_empty_items,map(resolveObjectProp(x)),keys)(x))

const resolveFunction = x => _either(is_type_string, x=>'', identity)(x());

// defaultResolver :: String Object => string
const conditionalResolver = separator=> compose(
  _either(
    is_type_function,
    identity,
    resolveFunction
  ),
  _either(
    is_type_object,
    identity,
    resolveObject(separator)
  ),
  _either(
    is_type_string,
    identity,
    resolveString,
  )
)

// List -> String
const listResolver = curry((separator,resolver) => compose(
  trim,
  assemble(separator),
  remove_empty_items,
  map(resolver)
))

// MakeCex :: String -> Resolver -> List -> String
const MakeCex = curry((separator, resolve ) => listResolver(separator,resolve))

export const uEx = MakeCex('/',conditionalResolver('/'))
export const cEx = MakeCex(' ',conditionalResolver(' '))
