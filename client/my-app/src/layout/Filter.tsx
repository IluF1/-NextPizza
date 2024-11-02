import { Ingredients } from '../components/Helpers/ingredients'
import { Button, CheckBox, Input, Title } from '../components/Ui'
import { Radio } from '../components/Ui/Radio'

export const Filter = () => {
    return (
        <div className='w-full h-full'>
            <Title>Фильтрация</Title>
            <div className='border-blue mt-8 border-b-2'>
                <CheckBox label='Можно собирать' />
                <CheckBox label='Новинки' className='mt-2 mb-8' />
            </div>
            <div className='mt-4'>
                <Title intent='h2'>Цена от и до</Title>
                <div className='flex gap-6 mt-2'>
                    <Input placeholder='0' />
                    <Input placeholder='1950' />
                </div>
            </div>
            <div className='mt-4'>
                <Title intent='h2'>Ингредиенты:</Title>
                <div className='mt-2'>
                    {Ingredients.map((ingredient) => (
                        <CheckBox label={ingredient.name} key={ingredient.id} className='mb-3' />
                    ))}
                </div>
            </div>
            <div className='mt-8'>
                <Title intent='h2'>Тип теста:</Title>
                <div className='mt-4'>
                    <Radio label='Традиционное' />
                    <Radio label='Тонкое' className='mt-2' />
                </div>
            </div>
            <Button intent='full' className='mt-8'>
                Применить
            </Button>
        </div>
    )
}
