import { useEffect } from 'react'

const GrandChild = () => {
  useEffect(() => {
    console.log('GrandChild  Mounted')
  }, [])

  console.log('GrandChild  rendered')

  return (
    <div>GrandChild</div>
  )
}

export default GrandChild