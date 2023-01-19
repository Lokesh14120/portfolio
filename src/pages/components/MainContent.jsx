import profile from '../../img/profilepic.jpeg';
import { Link } from 'react-router-dom';

const MainContent = () => {
    return (
        <>
            {/* size */}
            <div className="w-10/12 mx-auto flex pt-5 md:pt-16 pb-24 lg:mb-20">

                {/* content */}
                <div className="grid grid-cols-5 grid-rows-2 justify-items-center items-center md:grid-rows-1 w-11/12 mx-auto">

                    {/* text */}
                    <div className="col-span-5 row-span-1 order-2 space-y-2 md:space-y-10 md:col-span-3 md:order-1 dark:text-white">
                        
                        {/* Socials Icon */}
                        
                        
                        <div>
                            <h1 className='text-base md:text-4xl font-bold '>I am Lokesh Yadav</h1>
                            <h2 className='text-base md:text-4xl font-bold '>Competetivr Programmer</h2>
                            <h3 className='text-base md:text-4xl font-bold '>MERN stack developer</h3>
                        </div>
                        {/* <p className='text-xs md:text-xl font-light '>Welcome to my portfolio! I am a highly motivated and dedicated individual with a passion for both competitive programming and web development. I have experience in the MERN stack (MongoDB, Express, React, Node.js). I thrive in fast-paced and challenging environments, constantly seeking to improve my skills and knowledge. My ultimate goal is to use my skills to help build innovative and user-friendly web applications that make a real impact.</p> */}
                        
                        <div className='flex flex-row gap-3'>
                            <Link to="/ContactPage">
                                <button className='bg-black text-white p-2 rounded-md hover:bg-gray-800 dark:bg-white dark:text-black md:text-lg'>Reach me out</button>
                            </Link>

                            <Link to="/ProjectPage">
                            <button className='bg-black text-white p-2 rounded-md hover:bg-gray-800 dark:bg-white dark:text-black md:text-lg'>My achievements</button>
                            </Link>  
                        </div>
                    </div>

                    {/* img */}
                    <div className="profilepic col-span-5 row-span-1 order-1 justify-self-center md:col-span-2 md:order-2 md:justify-self-end">
                        <div data-aos="fade-left" data-aos-duration="1000" className='profile h-52 md:h-96 bg-black dark:bg-white'>
                            <img src={profile} alt="Profile" className='profile h-52 md:h-96 relative top-5 right-5' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MainContent;