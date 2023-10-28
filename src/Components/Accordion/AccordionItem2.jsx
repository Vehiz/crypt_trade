// import React from 'react'
import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import PropTypes from 'prop-types';

const AccordionItem2 = ({ open, toggle, title, desc }) => {
    return (
        <div className='pt-[10px]'>
                <div className='bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer' onClick={toggle}>
                        <h2 className='text-[#1E1E1E] text-[20px] font-semibold'>{title}</h2>
                        <div className='text-[#1E1E1E] text-[20px] font-semibold'>{open ? <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
                </div>
                <Collapse isOpened={open}>
                        <div className='bg-white py-[20px] px-[50px]'>{desc}</div>
                </Collapse>
        </div>
    )
}

AccordionItem2.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};



export default AccordionItem2

