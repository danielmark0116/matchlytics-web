/** @format */

import styled from 'styled-components'
import tw from 'twin.macro'

const StyledForm = styled.section.attrs({
  className: 'flex flex-col justify-center items-center bg-gray-100',
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-white text-white font-bold py-2 px-4 border border-green-500 rounded mb-2 hover:border-green-500 hover:text-green-500`}
    }
    a {
      ${tw`active:border-transparent focus:border-transparent visited:border-transparent`}
    }
  }
`

export default StyledForm
