'use client'
import { Pizza, SelectCategoryMenu, Title } from '@/src/components'
import { Categories } from '@/src/components/Helpers/categories'
import { Container, Filter } from '@/src/layout'
import { useGetPizzasStore } from '@/src/store/useGetPizzasStore'

const Home = () => {
    const { pizzas } = useGetPizzasStore()

    return (
        <Container>
            <Title className='text-4xl font-extrabold'>Все пиццы</Title>
            <div className='mt-6'>
                <div className='w-2/5'>
                    <SelectCategoryMenu categories={Categories} defaultCategoryId={Categories[0].id} />
                </div>
            </div>
            {pizzas.length ? (
                <div className='flex gap-12 mt-6'>
                    <div className='flex-shrink-0 w-64'>
                        <Filter />
                    </div>
                    <div className='w-1000 flex flex-wrap gap-16 mt-9'>
                        {pizzas.map((pizza) => (
                            <Pizza key={pizza.id} name={pizza.name} imageUrl={pizza.imgUrl} description={pizza.description} price={pizza.price} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className='mt-6 text-center'>Пицц нет</div>
            )}
        </Container>
    )
}

export default Home
