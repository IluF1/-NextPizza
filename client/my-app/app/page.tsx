import { SelectCategoryMenu, Title } from '@/src/components'
import { Categories } from '@/src/components/Helpers/categories'
import { Container } from '@/src/layout'

const Home = () => (
    <Container>
        <Title className='text-4xl font-extrabold'>Все пиццы</Title>
        <div className='mt-6'>
            <div className='w-2/5'>
                <SelectCategoryMenu categories={Categories} defaultCategoryId={Categories[0].id} />
            </div>
        </div>
    </Container>
)
export default Home
