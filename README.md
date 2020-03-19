# react-gen-classes



      import gen from '@geekagency/gen-classes'


      export default props=>{
        const classnames = gen(
          [

            'always-here-class', // pass a string, it will always be present

            {'conditional_class': _=> props.active ? true: false}, // if you pass an object, it's value will be called as a function and given the result will apply the key as a class

            props=> props.test=='world' ? 'hello-world': ''  // if you pass a function, It'll just append the output if not empty

          ]
        )

        return (<h1 className={classnames}>test</h1>)
      }
