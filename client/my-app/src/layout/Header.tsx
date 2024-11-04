'use client'
import { CartIcon, PhoneIcon, PizzaIcon, UserIcon } from '@/src/assets/images'
import { Title } from '@/src/components/Ui'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button, Input, Modal } from '../components/Ui'
import { SearchComponent } from '../components/Ui/SearchComponent'
import { Container } from './Container'

export const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <header className='border-blue border-y-2'>
            <Container>
                <Link href='/'>
                    <div className='flex gap-4'>
                        <Image
                            src={PizzaIcon}
                            alt='Pizza Icon'
                            width={35}
                            height={35}
                        />
                        <div>
                            <Title className='font-black uppercase'>
                                Next Pizza
                            </Title>
                            <Title intent='h4' className='-mt-1 text-gray'>
                                Next Pizza by miraclecancode
                            </Title>
                        </div>
                    </div>
                </Link>

                <div className=' flex justify-center -mt-12'>
                    <SearchComponent />
                </div>

                <div className='-mt-12 float-right flex gap-4'>
                    <div className='w-24' onClick={() => setIsActive(true)}>
                        <Button firstIcon={UserIcon}>Войти</Button>
                    </div>
                    <div className='w-11'>
                        <Button>
                            <Image src={CartIcon} alt='cart' className='ml-3' />
                        </Button>
                    </div>
                </div>
            </Container>

            <Modal
                isActive={isActive}
                setIsActive={setIsActive}
                className='w-96'
            >
                <div className='flex'>
                    <div>
                        <Title intent='h2'>Вход в аккаунт</Title>
                        <Title intent='h6'>
                            Введите логин и пароль, чтобы <br /> войти в аккаунт
                        </Title>
                    </div>
                    <Image src={PhoneIcon} alt='phone' className='ml-8' />
                </div>
                <Input
                    className='mt-4 h-10 text-black placeholder:text-black'
                    placeholder='Введите ваш логин...'
                />
                <Input
                    className='mt-4 h-10 text-black placeholder:text-black'
                    placeholder='Введите ваш пароль...'
                    type='password'
                />
                <Button intent='full' className='mt-5'>
                    Войти
                </Button>
            </Modal>
        </header>
    )
}
