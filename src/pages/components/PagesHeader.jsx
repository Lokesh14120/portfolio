import { useEffect, useState } from "react";

const PagesHeader = () => {

    let [header, setHeader] = useState(null);
    let [description, setDescription] = useState(null);
    let [button, setButton] = useState(null);
    let [github, setGithub] = useState(null);
    let [git, setGit] = useState(null);


    useEffect(() => {

        //returns the current url minus the domain name
        const currentPathName = window.location.pathname
        //console.log(currentPathName);

        switch (currentPathName) {
            case '/AboutPage':
                setHeader(header = 'About')
                setDescription(description = 'I am a pre-final year student at Rajiv Gandhi Institute of Petroleum Technology, studying Computer Science and Engineering. I am a competitive programmer with a strong interest in problem-solving. I have a good reputation in competitive coding platforms such as Codeforces and Codechef, where I am rated 3-star and 1737 respectively. I have a strong hold on both frontend and backend development and I am always looking for ways to improve my skills and take on new challenges. I am excited to use my skills and knowledge to create innovative and user-friendly applications that make a real impact')
                setButton(button = <a href="" target="_blank"><button className='text-xs bg-black px-4 py-1 text-white border border-1 border-black  hover:scale-110 duration-200 dark:bg-white dark:border-white dark:text-black md:text-lg md:px-8 md:py-2'>View Resume</button></a>)
                break;
            case '/SkillsPage':
                setHeader(header = 'Skills')
                setDescription(description = '')
                break;
            case '/ProjectPage':
                setHeader(header = 'Projects')
                setDescription(description = 'Here you will find a collection of projects that showcase my skills and experience in various areas of Programming. I am constantly striving to improve my skills and take on new challenges, and I am excited to share my work with you. Browse through my projects and feel free to contact me with any questions or comments. You can also check some of my console projects in Java and C# in my ')
                setGithub(github = 'https://github.com/Mychhh')
                setGit(git = 'Github repositories')
                
                break;
            case '/ContactPage':
                setHeader(header = 'Contacts')
                setDescription(description = 'This is my contacts and you can reach me out in many ways. Connect with me to discuss collaboration or job opportunities. You can also direct message or book a meeting so we can talk about your thoughts')
                break;
        }

    }, [])

    return (
        <>
            <div className="w-11/12 mx-auto rounded-xl bg-gray-300 dark:bg-[#272829]">

                <div className="w-11/12 mx-auto rounded-xl flex flex-col py-4 gap-5">
                    <h1 className="pages-header font-bold text-4xl md:text-8xl dark:text-white">{header}</h1>

                    <div className="inline">
                        <p className="dark:text-white text-sm md:text-lg inline">{description}</p>
                        <p className="dark:text-white text-sm md:text-lg border-b dark:border-white border-black inline"><a href={github} target="_blank" rel="noopener noreferrer">{git}</a></p>
                    </div>

                    <div>
                        {button}
                    </div>
                </div>

            </div>
        </>
    );
}

export default PagesHeader;