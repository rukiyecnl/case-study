import sampleProductImg from '~/assets/images/sampleProductImg.webp'
export const useBasket = () => {
  const basket = useState<any[]>('basket', () => [
    {
      id: 1,
      title: 'Sample Product',
      price: 10.33,
      quantity: 1,
      thumbnail: sampleProductImg
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
