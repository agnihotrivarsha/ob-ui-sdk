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
                                Account Information 
                            </Link>
                            <Link
                                className="journeyBtn"
                                //onClick={() => To Do}
                            >
                                Payment Information
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default Dashboard
  
