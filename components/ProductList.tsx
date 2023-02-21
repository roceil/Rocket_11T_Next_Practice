import Image from 'next/image'

export function ProductList({
  customLoader,
  originProduct,
  allProducts,
  setShopCart,
  setAllProduct
}) {
  const handleSelect = (e: { target: { value: string } }) => {
    let keyword = e.target.value
    if (keyword === '全部') {
      setAllProduct(originProduct)
      return
    }
    const result = originProduct.filter((productsData) => {
      return keyword === productsData.category
    })
    setAllProduct(result)
  }

  // JSX
  return (
    <section className='wrap productDisplay'>
      <select name='' className='productSelect' onChange={handleSelect}>
        <option defaultValue='全部'>全部</option>
        <option value='床架'>床架</option>
        <option value='收納'>收納</option>
        <option value='窗簾'>窗簾</option>
      </select>
      <ul className='productWrap'>
        {allProducts.map((productsData) => {
          return (
            <li key={productsData.id} className='productCard'>
              <h4 className='productType'>新品</h4>
              <img
                src={productsData.images}
                alt={productsData.title}
              />
              <button
                type='button'
                className='addToCart'
                onClick={async () => {
                  const result = await addToCart(productsData.id)
                  setShopCart(result)
                }}
              >
                加入購物車
              </button>
              <h3 className='!text-lg text-center mb-2'>
                {productsData.title}
              </h3>
              <del className='originPrice'>{`NT$${productsData.origin_price.toLocaleString()}`}</del>
              <p className='nowPrice'>{`NT$${productsData.price.toLocaleString()}`}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
