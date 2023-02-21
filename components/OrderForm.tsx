import { useForm } from 'react-hook-form'
import { OrderLabel } from './OrderLabel'
import { OrderSelection } from './OrderSelection'
import { sendOrder } from '@/lib/APIs'

const orderFormData = [
  {
    labelName: '姓名',
    labelType: 'text',
    labelTab: 'name',
    placeholder: '請輸入姓名'
  },
  {
    labelName: '電話',
    labelType: 'tel',
    labelTab: 'phone',
    placeholder: '請輸入電話'
  },
  {
    labelName: 'Email',
    labelType: 'email',
    labelTab: 'email',
    placeholder: '請輸入 Email'
  },
  {
    labelName: '寄送地址',
    labelType: 'text',
    labelTab: 'address',
    placeholder: '請輸入寄送地址'
  }
]

export function OrderForm({ setShopCart }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    mode: 'onTouched'
  })
  const onSubmit = async (data: any) => {
    const { name, phone, email, address, payWays } = data
    const result = await sendOrder(name, phone, email, address, payWays)
    if (result === 200) {
      alert('訂單送出')
      setShopCart([])
      orderFormData.map((item) => {
        setValue(item.labelTab, '')
      })
    }
  }

  // JSX
  return (
    <section className='orderInfo wrap' id='orderInfo'>
      <h3 className='section-title'>填寫預訂資料</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='container flex flex-col items-center space-y-5'
      >
        {orderFormData.map((item, index) => {
          return (
            <OrderLabel
              key={index}
              labelName={item.labelName}
              labelType={item.labelType}
              labelTab={item.labelTab}
              placeholder={item.placeholder}
              register={register}
              errors={errors}
            />
          )
        })}
        <OrderSelection register={register} />
        <button
          type='submit'
          className='bg-black text-white py-[10px] w-[255px] rounded mt-12'
        >
          送出預定資料
        </button>
      </form>
    </section>
  )
}
