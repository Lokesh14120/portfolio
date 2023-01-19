import Dot from '../../img/new-moon.webp'

const Experience = () => {

    // Change the Image into shape

    return (
        <>
            <div className='w-10/12 mx-auto  my-5 '>
                <p className="text-base font-bold text-2xl border-b-solid border-b border-b-black inline">Education</p>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex flex-col justify-center w-10/12 relative top-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Bachelor of Technology in Computer Science</h1>
                        <h3 className='font-medium'>Rajiv Gandhi Institute of Petroleum Technology <span className='font-extralight'>(December-2020 | Present)</span></h3>
                        <p className='font-light'>Grade - 8.65</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                
                </div>
                <div className='flex flex-col justify-center w-10/12 relative top-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Intermediate</h1>
                        <h3 className='font-medium'>R.P.S. Sr. Sec. School,Mahendergarh<span className='font-extralight'>(2020)</span></h3>
                        <p className='font-light'> Percentage-90.8</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                
                </div>
                <div className='flex flex-col justify-center w-10/12 relative top-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Matriculation</h1>
                        <h3 className='font-medium'>Shiva Sr. Sec. School,Rewari<span className='font-extralight'>(2018)</span></h3>
                        <p className='font-light'> Percentage-95.8</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                
                </div>

                

            </div>

        </>
    );
}

export default Experience;