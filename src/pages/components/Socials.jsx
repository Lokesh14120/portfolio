import linkedin from '../../img/linkedin-logo.webp';
import instagram from '../../img/instagram-logo.webp';
import facebook from '../../img/facebook-logo.webp';
import tiktok from '../../img/tiktok-logo.webp';
import github from '../../img/githubb.webp'

const Socials = () => {
    return (
        <>
            <div className='flex flex-row gap-x-3'>
                <a href="https://www.linkedin.com/in/lokesh-yadav-049735210/" target='_blank'><img src={linkedin} alt="linkedin-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="https://github.com/Lokesh14120" target='_blank'><img src={github} alt="github-logo" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full bg-white' /></a>
                <a href="https://codeforces.com/profile/132Lokesh" target='_blank'><img src={tiktok} alt="codeforces" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="https://www.codechef.com/users/enjoy_1403" target='_blank'><img src={facebook} alt="codechef" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
                <a href="https://leetcode.com/enjoy_1912/" target='_blank'><img src={facebook} alt="leetcode" className='h-5 md:h-7 hover:scale-110 duration-200 border border-white rounded-full' /></a>
            </div>
        </>
    );
}

export default Socials;