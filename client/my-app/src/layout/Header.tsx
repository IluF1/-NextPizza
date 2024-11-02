'use client'
import { CartIcon, PizzaIcon, UserIcon } from '@/src/assets/images'
import { Title } from '@/src/components'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input } from '../components'
import { Container } from './Container'

export const Header = () => {
    return (
        <header className='border-blue border-y-2'>
            <Container>
                <Link href='/'>
                    <div className='flex gap-4'>
                        <Image src={PizzaIcon} alt='Pizza Icon' width={35} height={35} />
                        <div>
                            <Title className='font-black uppercase'>Next Pizza</Title>
                            <Title intent='h4' className='-mt-1 text-gray'>
                                Next Pizza by miraclecancode
                            </Title>
                        </div>
                    </div>
                </Link>
                <div className='-mt-12 m-auto w-2/3 block'>
                    <Input placeholder='Поиск пиццы...' intent='search' className='flex justify-center' />
                </div>
                <div className='-mt-12 float-right flex gap-4'>
                    <div className='w-24'>
                        <Button firstIcon={UserIcon}>Войти</Button>
                    </div>
                    <div className='w-11'>
                        <Button>
                            <Image src={CartIcon} alt='cart' className='ml-3' />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
