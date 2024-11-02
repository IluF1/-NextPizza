import { Button, Input, Title } from '@/src/components'
import Link from 'next/link'

const Auth = () => {
    return (
        <div className='h-dvh flex justify-center items-center text-center'>
            <div className='w-96 h-96'>
                <Title intent='h1'>Войти в систему</Title>
                <form className='mt-9'>
                    <Input placeholder='Email' className='mt-4' />
                    <Input placeholder='Пароль' type='password' className='mt-4' />
                    <Button className='w-full mt-4'>Войти</Button>
                    <div className='mt-4 text-center'>
                        <Link href='/register'>
                            <h1>Регистрация</h1>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth
