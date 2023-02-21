import { type ImageLoader } from 'next/image'
import { type Dispatch, type SetStateAction } from 'react'
import { type UseFormRegister, type FieldValues,type FieldErrors } from 'react-hook-form'

export type ProductData = {
  title: string
  id: string
  origin_price: number
  description: string
  category: string
  images: string
  price: number
}
export type CartsData = { id: string; quantity: number; product: ProductData }

export type DeleteAllMessage = { message: string; status: number } | undefined

export interface IBannerProps {
  customLoader: ImageLoader | undefined
}

export interface IHomeProps {
  products: Array<ProductData>
  carts: Array<CartsData>
}

export interface IProductListProps {
  customLoader: ImageLoader | undefined
  originProduct: Array<ProductData>
  allProducts: Array<ProductData>
  setShopCart: Dispatch<SetStateAction<CartsData[]>>
  setAllProduct: Dispatch<SetStateAction<ProductData[]>>
}

export interface ICartListProps {
  customLoader: ImageLoader | undefined
  carts: Array<CartsData>
  setShopCart: Dispatch<SetStateAction<CartsData[]>>
}

export interface IOrderLabelProps {
  labelName: string
  labelType: string
  labelTab: string
  placeholder: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues> | any
}

export interface IOrderSelectionProps {
  register: UseFormRegister<FieldValues>
}

export interface IOrderFormProps {
  setShopCart: Dispatch<SetStateAction<CartsData[]>>
}
