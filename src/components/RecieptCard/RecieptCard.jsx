const RecieptCard = ({bg, count, id, title, Image }) => {
  return (
    <div style={{backgroundColor: bg}} className='w-[230px] hover:h-full transition-all duration-300 rounded-[8px] flex-col h-[175px] flex items-center justify-center'>
      <Image/>
      <h1 className='mb-[4px] mt-[23px] leading-[22px] font-medium text-[16px]'>{title}</h1>
      <p className='leading-[16px] text-[14px] font-normal'>{count} items</p>
    </div>
  )
}

export default RecieptCard