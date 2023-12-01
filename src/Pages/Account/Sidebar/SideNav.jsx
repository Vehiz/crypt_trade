import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io"
import Panda from "../../assets/panda.svg"

const SideNav = () => {
  return (
    <section>
        <div className=' flex justify-between'>
            <div>
                <a>CryptTrade</a>
            </div>
            <ul className='m-0 '>       
                <li>
                    <a>
                        <IoIosNotificationsOutline/>
                    </a>
                </li>
                <li>
                    <a>
                        <img src={Panda} alt=""></img>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default SideNav