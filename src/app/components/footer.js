import React from 'react'

export const Footer = ({ children }) => (

    <div className="Footer">
        <footer>
            <div className="row">
                <div className="col">
                    {children}
                    <p className="txt-footer">
                        <strong>Red Barber</strong> copyright 2019
                    </p>
                </div>

            </div>
        </footer>
    </div>

)