'use client'
import { HTMLAttributes, useState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string
}

export const Radio = ({ label, className, ...props }: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <div className={className} {...props}>
            <div
                onClick={() => setIsChecked(!isChecked)}
                role='radio'
                aria-checked={isChecked}
                tabIndex={0}
                className='flex items-center gap-2 space-x-2 cursor-pointer'
            >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center  ${isChecked ? 'bg-orange' : 'bg-blue'} ${isChecked ? 'checked' : ''}`}>
                    {isChecked ? <div className='w-3 h-3 bg-white rounded-full'></div> : null}
                </div>
                <label className='text-base font-normal'>{label}</label>
            </div>
        </div>
    )
}
