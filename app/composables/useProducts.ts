export const useProducts = async () => {
  const { data, pending, error } = await useAsyncData('products', () =>
    $fetch('https://dummyjson.com/products?limit=4')
  )
  if(data){
    return { data, pending, error }
  }

}
