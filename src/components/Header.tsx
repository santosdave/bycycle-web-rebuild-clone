import React from 'react'
import {
   ShoppingBagIcon,
   SearchCircleIcon,
   UserCircleIcon,
} from "@heroicons/react/solid";


type Props = {}

export default function Header({ }: Props) {
    return (
        <>
            <header>
                <a href="#" className="logo">
                    <h1
                        style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "2px" }}
                    >
                        Dave's Bikes
                    </h1>
                </a>
                <div className='main-menu-wrapper'>
                    <ul className="main-menu">
                        <li>
                            <a href="#" className="active">
                                home
                            </a>
                        </li>
                        <li>
                            <a href="#">shop</a>
                        </li>
                        <li>
                            <a href="#">dealer</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                    </ul>
                </div>
                <ul className="user-menu">
                    <li>
                        <a href="#">
                           <ShoppingBagIcon className='w-9 h-9 text-gray-200'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <UserCircleIcon className='w-9 h-9 text-gray-200'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           <SearchCircleIcon className='w-9 h-9 text-gray-200'  />
                        </a>
                    </li>
                </ul>
            </header>
        </>
    )
}