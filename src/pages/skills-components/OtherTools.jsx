const OtherTools = (props) => {

    const otherTools = props.otherTools;
    const header = props.header;

    return (
        <><div className='border-b border-1 border-b-black dark:border-b-white inline-block m-5'>
            <h1 className='font-bold text-xl px-2'>{header}</h1>
        </div>

            {/* Stacks */}
            <div className='flex flex-col gap-y-5'>

                {/* mapping */}
                <div className="grid grid-cols-12 py-5 dark:text-white gap-5">

                    {otherTools.map((otherTool) => (
                        <div key={otherTool.id} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hover:-translate-y-3 duration-300 drop-shadow-lg">
                            <a href={otherTool.link} target="_blank">
                                <div className="flex flex-row items-centerrounded-xl w-full bg-gray-300 dark:bg-[#272829] py-2">
                                    <div className='flex justify-center w-2/4'>
                                        <img src={otherTool.img} alt="programing-language" className='h-16 p-1 rounded-full' />
                                    </div>
                                    <div className='flex justify-start w-2/4'>
                                        <p className="text-base font-semibold">{otherTool.name}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default OtherTools;