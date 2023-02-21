import { IOrderSelectionProps } from '@/types/interface'

export function OrderSelection({ register }: IOrderSelectionProps) {
  return (
    <label className='w-full max-w-[350px]'>
      <p className='mb-[6px]'>交易方式</p>
      <select
        className='border w-full py-2 px-3 rounded'
        {...register('payWays')}
      >
        <option defaultValue='ATM'>ATM</option>
        <option value='信用卡'>信用卡</option>
        <option value='取貨付款'>取貨付款</option>
      </select>
    </label>
  )
}
