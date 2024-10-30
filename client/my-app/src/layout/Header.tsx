import { CartIcon, PizzaIcon, UserIcon } from '@/app/assets/images'
import { Title } from '@/src/components'
import Image from 'next/image'
import { Button, Input } from '../components'

export const Header = () => {
    return (
        <div className='border-blue border-y-2'>
            <div className='p-header'>
                <div className='flex gap-4'>
                    <Image src={PizzaIcon} alt='Pizza Icon' width={35} height={35} />
                    <div>
                        <Title className='font-black uppercase'>Next Pizza</Title>
                        <Title intent='h4' className='-mt-1 text-gray'>
                            Next Pizza by miraclecancode
                        </Title>
                    </div>
                </div>
                <div className='-mt-12 m-auto w-2/3 block'>
                    <Input
                        placeholder='Поиск пиццы...'
                        intent='search'
                        className='flex justify-center'
                    />
                </div>
                <div className='-mt-12 float-right flex gap-4'>
                    <Button className='w-24' firstIcon={UserIcon}>
                        Войти
                    </Button>
                    <Button className='w-12'>
                        <Image src={CartIcon} alt='cart' className='ml-3' />
                    </Button>
                </div>
            </div>
        </div>
    )
}
