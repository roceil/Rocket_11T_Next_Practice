import { IOrderLabelProps } from "@/types/interface";

export function OrderLabel({
  labelName, labelType, labelTab, placeholder, register, errors
}: IOrderLabelProps) {
  return (
    <label className='w-full max-w-[350px]'>
      <p className='mb-[6px]'>{labelName}</p>
      <div className='relative'>
        <input
          {...register(labelTab, {
            required: { value: true, message: '必填 !' }
          })}
          type={labelType}
          className='border w-full rounded py-2 px-3 placeholder:font-normal'
          placeholder={placeholder} />
        <span className='absolute text-red-400 -mr-2 right-0 top-1/2 translate-y-[-50%] translate-x-[100%]'>
          {errors?.[labelTab]?.message}
        </span>
      </div>
    </label>
  );
}
