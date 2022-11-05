import { Copyright, Facebook, Instagram, YouTube } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="flex bg-secondary items-center justify-between">
            <div className="flex flex-col ml-40">
                <p className="text-footer"
                >Myth World</p>
                <div className="flex justify-between">
                    <button>
                        <Facebook
                            className="text-textBtn" fontSize="large"
                        />
                    </button>
                    <button>
                        <YouTube
                            className="text-textBtn" fontSize="large"

                        />
                    </button>
                    <button>
                        <Instagram
                            className="text-textBtn" fontSize="large"
                        />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start justify-around my-10">
                <Link className="text-footer">
                    About us
                </Link>
                <Link className="text-footer">
                    Help
                </Link>
                <Link className="text-footer">
                    Term and Privacy
                </Link>
            </div>
            <p className="text-footer mt-36 mr-20">
                Copyright <Copyright /> 2022 All rights reserved
            </p>
        </div>
    )
}

export default Footer
