import React from 'react'

type ItemProps = {
    lesson: string;
    room: string
}

const Block = ({ lesson, room }: ItemProps) => {
    return (
        <div className='rounded-md slightContrastBg p-1'>
            <p className='mainContrastText text-l'>{lesson}</p>
            <p className='lessSlightContrastText'>{room}</p>
        </div>
    )
}

export default Block
