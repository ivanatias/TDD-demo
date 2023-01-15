import { ReactElement } from 'react'

interface Props {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props): ReactElement => {
  return (
    <div className='flex flex-col max-w-xl gap-5 px-5 py-8 mx-auto'>{children}</div>
  )
}

export default Wrapper
