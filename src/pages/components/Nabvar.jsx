import sun from '../../img/sun.webp';
import moon from '../../img/moon.webp';
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const userTheme = localStorage.removeItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let [icon, setIcon] = useState(moon);

    const handleTheme = () => {
        if (icon === sun) {
            document.documentElement.classList.add('dark')
            setIcon(icon = moon)
        } else {
            document.documentElement.classList.remove('dark')
            setIcon(icon = sun)
        }
    }

    const ActiveNav = ({ isActive }) => {
        return {
            borderBottom: isActive ? '1px solid gray' : 'none'
        }
    }

    useEffect(() => {
        if( userTheme === 'dark' || (!userTheme && systemTheme)){
            document.documentElement.classList.remove('dark')
            setIcon(icon = sun)
           
            
        } else {
            document.documentElement.classList.add('dark')
            setIcon(icon = moon)
            
        }
    },[])

    return (
        <>
            <div className='py-8 w-10/12 mx-auto'>
                <div className="flex flex-row bg-transparent justify-between items-center p-0 md:p-3">
                    {/*logo goes here*/}
                    <div>
                        <NavLink to="/"><img src={logo} alt="logo" className="h-12 md:h-10 rounded-full hover:scale-110 duration-300 dark:bg-white"/></NavLink>
                    </div>

                    {/* main navbar content goes here */}
                    <div className="flex flex-row gap-5 text-sm md:text-base font-medium hidden dark:text-white md:flex">
                        <NavLink to="/AboutPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>About</NavLink>
                        <NavLink to="/SkillsPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Skills</NavLink>
                        <NavLink to="/SkillsPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Achievements</NavLink>
                        <NavLink to="/ProjectPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Projects</NavLink>
                        <NavLink to="/ContactPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Contacts</NavLink>
                    </div>

                    {/* side navbar content goes here */}
                    <div className="flex flex-row gap-2 text-sm">
                        <button><img src={icon} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' onClick={handleTheme} /></button>
                    </div>
                </div>
                
                
            </div>
        </>
    );
}

export default Navbar;