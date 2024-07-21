import React from 'react';
import { Link } from 'react-router-dom'

const Dashboard = () => {   

    return (
        <div className="dashboard">
            <div className="container">                
                <div className="row">
                    <div className="col-sm">
                        <div className="journeyBtns">
                            <Link
                                className="journeyBtn"
                                to="/accounts"
                            >
                                Account Information Service Provider (AISP)
                            </Link>
                            <Link
                                className="journeyBtn"
                                //onClick={() => To Do}
                            >
                                Payment Initiation Service Provider (PISP)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default Dashboard
  