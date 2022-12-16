import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex bg-dark-grey items-center justify-between">
            <div className="flex flex-col lg:ml-40">
                <p className="text-footer"
                >Myth World</p>
                <div className="flex justify-between">
                    <button>
                        <FontAwesomeIcon icon={faFacebookSquare} className="lg:text-4xl text-white" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faYoutube} size="2x" className="lg:text-4xl text-white" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="lg:text-4xl text-white" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start justify-around lg:my-10">
                <Link className="text-footer
                hover:underline underline-offset-4 decoration-2">
                    About us
                </Link>
                <Link className="text-footer
                hover:underline underline-offset-4 decoration-2">
                    Help
                </Link>
                <Link className="text-footer
                hover:underline underline-offset-4 decoration-2">
                    Term and Privacy
                </Link>
            </div>
            <p className="text-footer lg:mt-36 lg:mr-20">
                Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 All rights reserved
            </p>
        </div>
    )
}

export default Footer
