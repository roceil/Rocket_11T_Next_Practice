import axios from 'axios'

export const addToCart = async (productId: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`, {
      data: {
        productId: productId,
        quantity: 1
      }
    })
    const result = await res.data.carts
    alert('加入成功')
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteAll = async () => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`)
    const { message } = await res.data
    const { status } = await res
    return { message, status }
  } catch (error: any) {
    const { message } = error.response.data
    alert(message)
  }
}

export const deleteItem = async (id: string) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/carts/${id}`
    )
    const { carts } = await res.data
    alert('刪除成功')
    return carts
  } catch (error) {
    console.log(error)
  }
}

export const sendOrder = async (
  name: string,
  phone: string,
  email: string,
  address: string,
  payWays: string
) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/orders`, {
      data: {
        user: {
          name: name,
          tel: phone,
          email: email,
          address: address,
          payment: payWays
        }
      }
    })
    const { status } = await res
    return status
  } catch (error: any) {
    console.log('error', error?.response?.data)
  }
}
