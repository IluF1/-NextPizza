'use client'
import Image from 'next/image'
import { HTMLAttributes, useState } from 'react'
import { CheckIcon } from '../../assets/images'

interface Props extends HTMLAttributes<HTMLDivElement> {
    label: string
    checked?: boolean
}

export const CheckBox = ({
    label,
    checked = false,
    className,
    ...props
}: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked)

    return (
        <div className={className} {...props}>
            <div
                onClick={() => setIsChecked(!isChecked)}
                role='checkbox'
                aria-checked={isChecked}
                tabIndex={0}
                className='flex items-center gap-2 space-x-2 cursor-pointer'
            >
                <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                        isChecked ? 'bg-orange' : 'bg-blue'
                    } ${isChecked ? 'checked' : ''}`}
                >
                    {isChecked ? <Image src={CheckIcon} alt='check' /> : null}
                </div>
                <label className='text-base font-normal'>{label}</label>
            </div>
        </div>
    )
}
