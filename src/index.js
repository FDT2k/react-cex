import {map,compose,curry,_either,is_type_string,is_type_object,is_type_function,identity,keys,joinList} from '@geekagency/composite-js'

/*
Easy class concat
*/

const trim = string => string.trim();

const assemble = joinList(' ')

const resolveString = identity

const resolveObjectProp =  curry((object,prop) =>object[prop]() ? prop:'');

const resolveObject = x=> compose(trim,assemble, map(resolveObjectProp(x)),keys)(x)

const resolveFunction = x => _either(is_type_string, x=>'', identity)(x());

// defaultResolver :: String Object => string
const defaultResolver = compose(
  _either(
    is_type_function,
    identity,
    resolveFunction
  ),
  _either(
    is_type_object,
    identity,
    resolveObject
  ),
  _either(
    is_type_string,
    identity,
    resolveString,
  )
)

// MakeCex :: FN -> List -> String
const MakeCex = curry((resolve, classes ) => compose(trim,assemble,map(resolve))(classes))

export default MakeCex(defaultResolver)
