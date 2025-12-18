import personalCare from '~/assets/images/personalCare.jpg'
export const useBasket = () => {
  const basket = useState<any[]>('basket', () => [
    {
      id: 1,
      title: 'Sample Product',
      price: 100,
      quantity: 1,
      thumbnail: personalCare
    }
  ])

  const addBasket = (product: any) => {
    basket.value.push(product)
  }

  return {
    basket,
    addBasket
  }
}
