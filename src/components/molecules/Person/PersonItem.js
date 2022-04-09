import { useState } from "react"
import Card from '../../atoms/Card'
import Avatar from '../../atoms/Avatar'

const PersonItem = ({name, email, country, region, numberrange, phone, postalZip, address, id, handleDelete}) => {

    const [isFrontShown, setIsFrontShown] = useState(false)

    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    const onFlip = () => setIsFrontShown(prev => !prev)
    
    return (
        <div>
            <Card onClick={onFlip}>
                <Card.Front isHidden={isFrontShown}>
                    <img src='https://www.w3schools.com/w3images/team2.jpg' 
                        width='100%' alt='Placeholder' className='rounded-lg' />
                    <p className='text-2xl text-center mt-2'>{name}</p>
                    <p className='text-center text-lg mt-4'>Address: {address} </p>
                </Card.Front>
                <Card.Back isHidden={isFrontShown} className='p-4'>
                    <div className='flex items-center justify-between mx-4 '>
                        <Avatar firstName={firstName} lastName={lastName} className='mr-2' />   
                        <button 
                        className='px-2 font-bold text-white bg-red-400 rounded-lg right-6'
                        onClick={() => handleDelete(id)}
                        >
                            Remove User
                        </button>
                    </div>
                        <p className='mt-4 text-white'>
                            <span className='mr-2 text-sm text-white opacity-60'>Full Name:</span>
                            <span>{name}</span>
                        </p> 
                        <p className='mt-4 text-white'>
                            <span className='mr-2 text-sm text-white opacity-60'>Address:</span>
                            <span>{address}</span>
                        </p> 
                        <p className='mt-4 text-white'>
                            <span className='mr-2 text-sm text-white opacity-60'>Country:</span>
                            <span>{country}</span>
                        </p> 
                        <p className='mt-4 text-white'>
                            <span className='mr-2 text-sm text-white opacity-60'>Region:</span>
                            <span>{region}</span>
                        </p> 
                        <p className='mt-4 text-white'>
                            <span className='mr-2 text-sm text-white opacity-60'>Phone Number:</span>
                            <span>{phone}</span>
                        </p> 
                </Card.Back>
            </Card>
        </div>
    )
}

export default PersonItem