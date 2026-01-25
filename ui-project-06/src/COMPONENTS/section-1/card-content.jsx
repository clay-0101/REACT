import 'remixicon/fonts/remixicon.css'

const cardContent = (props) => {
    return (
        <div className='absolute left-0 top-0 h-full w-full flex flex-col justify-between px-5 py-10'>
            <button className='h-10 w-10 bg-white rounded-full'>{props.id+1}</button>
            <div className='flex flex-col gap-15'>
                <p className='text-white text-xl leading-none'>{props.about}</p>
                <div className='flex justify-between'>
                    <button className='px-5 py-2 rounded-full bg-blue-600 text-white '>{props.situ}</button>
                    <button className='px-3 py-2 rounded-full bg-blue-600 text-white '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default cardContent 