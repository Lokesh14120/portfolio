import HTML from '../../img/HTML.webp'
import CSS from '../../img/CSS.webp'
import JS from '../../img/JS.webp'
import PHP from '../../img/php.webp'
import JAVA from '../../img/Java.webp'
import Csharp from '../../img/Csharp.webp'

import BootsStrap from '../../img/Bootstrap.webp'
import ChakraUI from '../../img/ChakraUI.webp'
import Tailwind from '../../img/Tailwind.webp'

import ReactJS from '../../img/React.webp'  
import AlpineJS from '../../img/AlpineJS.webp'    
import Laravel from '../../img/Laravel.webp'  

import MySQL from '../../img/MySQL.webp'
import MsSQL from '../../img/MsSQL.webp'

import Github from '../../img/Github.webp'
import Notion from '../../img/Notion.webp'
import Figma from '../../img/Figma.webp'
import Postman from '../../img/postman.webp'

import { useState } from 'react'

import StackComponent from './StackComponent'
import LibrariesFrameworks from './LibrariesFrameworks'
import Database from "./Database";
import OtherTools from "./OtherTools";

const TechStacks = () => {

    const [stacks, setStacks] = useState(
        [
            {id: 1, name: 'HTML', img: HTML, link: 'https://www.w3schools.com/html/default.asp'},
            {id: 2, name: 'C++', img: HTML, link: 'https://www.w3schools.com/html/default.asp'},
            {id: 3, name: 'C', img: HTML, link: 'https://www.w3schools.com/html/default.asp'},
            {id: 4, name: 'CSS', img: CSS, link: 'https://web.dev/learn/css/' },
            {id: 5, name: 'JS', img: JS, link: 'https://www.w3schools.com/js/default.asp'},
            {id: 6, name: 'Python', img: JS, link: 'https://www.w3schools.com/js/default.asp'},
            {id: 7, name: 'NodeJS', img: JS, link: 'https://www.w3schools.com/js/default.asp'},
        ]
    );

    const [libraFrame, setLibraFrame] = useState(
        [
            {id: 1, name: 'React JS', img: ReactJS, link: 'https://reactjs.org/docs/getting-started.html' },
            {id: 2, name: 'Tailwind CSS', img: Tailwind, link: 'https://tailwindcss.com/docs/installation' },
            {id: 3, name: 'Redux', img: Tailwind, link: 'https://tailwindcss.com/docs/installation' },
        ]
    );

    const [dataBase, setDataBase] = useState(
        [
            {id: 1, name: 'Mongoose', img: MySQL, link: 'https://www.w3schools.com/sql/default.asp' },
            {id: 2, name: 'MsSQL', img: MsSQL, link: 'https://www.w3schools.com/sql/default.asp'  },
        ]
    );

    const [otherTools, setOtherTools] = useState(
        [
            {id: 1, name: 'Github', img: Github, link: 'https://github.com/Mychhh'},
            {id: 2, name: 'Notion', img: Notion, link: 'https://www.notion.so/' },
            {id: 3, name: 'Postman', img: Postman, link: 'https://www.postman.com/' },
            {id: 4, name: 'VsCode', img: Postman, link: 'https://www.postman.com/' },
        ]
    );

    return (
        <>
            {/* Create a local server for technology stack data that will map an object based on their property */}

            <div className="w-10/12 mx-auto py-5 dark:text-white">

                {/* props */}
                <StackComponent stacks={stacks} header="Technology Stacks"/>
                <LibrariesFrameworks libraFrame={libraFrame} header="Libraries & Frameworks"/>
                <Database dataBase={dataBase} header="Databases"/>
                <OtherTools otherTools={otherTools} header="Other tools"/>

            </div>

        </>
    );
}

export default TechStacks;