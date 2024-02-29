import React from 'react'

interface Props {
    color: 'red-blue' | 'blue-orange-yellow' | 'cyan-purple-pink';
    children: React.ReactNode;
}

export const SectionTitle = ({ color, children }: Props) => {

    const colors = {
        'red-blue': 'from-red-400 via-green-400 to-blue-400',
        'blue-orange-yellow': 'from-blue-400 via-yellow-400 to-orange-400',
        'cyan-purple-pink': 'from-cyan-400 via-purple-500 to-pink-500'
        // 'red-blue': 'from-primary via-accent to-secondary',
        // 'blue-orange-yellow': 'from-secondary via-accent to-primary',
        // 'cyan-purple-pink': 'from-accent via-primary to-secondary'
    }

    return (
        <h1 className='text-4xl sm:text-5xl font-bold pb-2'>
            <span className={'bg-clip-text text-transparent bg-gradient-to-r ' + colors[color]}>
                {children}
            </span>
        </h1>
    )
}
