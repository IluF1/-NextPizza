'use client'
import { Categories } from '@/src/components/Helpers/categories'
import { Pizza, SelectCategoryMenu, Spinner, Title } from '@/src/components/Ui'
import { Container, Filter } from '@/src/layout'
import { useGetPizzasStore } from '@/src/store/useGetPizzasStore'

const Home = () => {
    const { pizzas, loading } = useGetPizzasStore()

    return (
        <Container>
            <Title className='text-4xl font-extrabold'>Все пиццы</Title>
            <div className='mt-6'>
                <div className='w-2/5'>
                    <SelectCategoryMenu categories={Categories} defaultCategoryId={Categories[0].id} />
                </div>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <div className='flex gap-12 mt-6'>
                    <div className='flex-shrink-0 w-64'>
                        <Filter />
                    </div>
                    <div className='w-1000 flex flex-wrap gap-16 mt-9'>
                        {pizzas.map((pizza) => (
                            <Pizza key={pizza.id} name={pizza.name} imageUrl={pizza.imgUrl} ingredients={pizza.ingredients} price={pizza.price} />
                        ))}
                    </div>
                </div>
            )}
        </Container>
    )
}

export default Home
