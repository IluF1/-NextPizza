export const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    })
}
