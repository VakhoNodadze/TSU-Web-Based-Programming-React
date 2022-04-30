import { useEffect } from 'react'
import GrandChild from './GrandChild'

const ChildOne = () => {
  useEffect(() => {
    console.log('Child One Mounted')
  }, [])

  console.log('Child one rendered')

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>

      <div>Child one</div>
      <GrandChild />
    </>
  )
}

export default ChildOne