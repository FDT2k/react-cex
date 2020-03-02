import {map,compose,curry,_either,is_type_string,identity,keys,joinList,prop} from '@geekagency/composite-js'

/*
Easy class concat
*/

const assemble = joinList(' ')

const resolveString = identity

const resolveObjectProp =  curry((object,prop) =>object[prop]() ? prop:'');

const resolveObject = x=> compose(assemble, map(resolveObjectProp(x)),keys)(x)

// defaultResolver :: String Object => string
const defaultResolver = _either(
  is_type_string,
  resolveObject,
  resolveString,
)

// MakeCex :: FN -> List -> String
const MakeCex = curry((resolve, classes ) => compose(assemble,map(resolve))(classes))

export default MakeCex(defaultResolver)
