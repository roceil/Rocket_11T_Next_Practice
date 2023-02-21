import Image from 'next/image'
import { deleteAll, deleteItem } from '../lib/APIs'



export function CartList({ customLoader, carts, setShopCart }) {
  let finalPrice = 0
  const handleDeleteAll = async () => {
    const result = await deleteAll()
    if (result?.status === 200) {
      setShopCart([])
      alert(result.message)
    }
  }


  // JSX
  return (
    <section className='py-12 bg-[#F8F8F8]'>
      <h3 className='text-[28px] font-bold text-center mb-8'>我的購物車</h3>
      <table className='container max-w-[920px]' cellPadding={'10'}>
        <thead className='text-left '>
          <tr>
            <th className=''>品項</th>
            <th className='hidden lg:table-cell'>單價</th>
            <th className='w-[15%]'>數量</th>
            <th>金額</th>
            <th className='hidden lg:table-cell'></th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cartsData) => {
            const { quantity } = cartsData
            const { images, title, origin_price, price } = cartsData.product
            const totalPrice = price * quantity

            finalPrice += totalPrice
            return (
              <tr
                key={cartsData.id}
                className='border-b text-center md:text-left'
              >
                {/* 品項 */}
                <td className='flex space-x-[15px] items-center'>
                  <img
                    src={images}
                    alt={title}
                  />
                  <p className='text-[12px] md:text-base'>{title}</p>
                </td>

                {/* 單價 */}
                <td className='hidden lg:table-cell'>{`NT$${origin_price.toLocaleString()}`}</td>

                {/* 數量 */}
                <td className='text-[12px] md:text-base'>{quantity}</td>

                {/* 金額 */}
                <td className='text-[12px] md:text-base'>{`NT$ ${totalPrice.toLocaleString()}`}</td>

                {/* 刪除鈕 */}
                <td>
                  <button
                    type='button'
                    className='material-icons opacity-40 hover:opacity-100'
                    onClick={async () => {
                      const result = await deleteItem(cartsData.id)
                      setShopCart(result)
                    }}
                  >
                    clear
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <button className='deleteAll' onClick={handleDeleteAll}>
                刪除所有品項
              </button>
            </td>
            <td className='hidden lg:table-cell'></td>
            <td className='p-0 lg:p-[10px]'>
              <p className='text-xs  font-normal lg:text-lg'>總金額</p>
            </td>
            <td> NT${finalPrice.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}
