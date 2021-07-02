import React from 'react'
import "./Animatepage.css"    
import Botcn from '../svg/Botcn';
export default function Animatepage() {
    return (
        <div className="bg-animate">
            <div className="container">
                <Botcn/> 
                <div className="bg-blog">
                    <div className="shape">
                        <div className="bd"></div>
                    </div>
                    <div className="shape2">
                        <div className="bd2"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
