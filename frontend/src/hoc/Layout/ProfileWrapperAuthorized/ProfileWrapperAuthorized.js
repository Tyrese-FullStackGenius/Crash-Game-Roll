import React, { useState, useEffect } from 'react';

import classes from './Profile.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import SettingsButton from '../../../components/UI/SettingsButton/SettingsButton';
import Deposit from './Deposit'

const ENDPOINT = "http://127.0.0.1:5000";

const ProfileWrapperAuthorized = ( props ) => {
    

    useEffect(() => {
       props.updateBalance()
    },[])

    return (
        <Aux>
            {}
            <div
             
             className={classes.DepositButton}>
                 <Deposit />
                <span>
                    Deposit
                    <i className="fa fa-money" aria-hidden="true"></i>
                </span>
            </div>
            <div style={{ marginLeft: "15px" }}>
                <p className={classes.Name}>
                    <a href="/">{JSON.parse(localStorage.getItem('userData')).username}</a>
                </p>
                <p className={classes.Balance}>
                    {props.balance ? '$'+props.balance : null}
                </p>    
            </div>
            <SettingsButton
                showSettings={props.showSettings}
                settingsHandler={props.settingsHandler}
                closeSettings={props.closeSettings}
                changeAnimation={props.changeAnimation}
                animation={props.animation} />
            <div
                className={classes.LogOut}
                onClick={props.clicked}>
                <i className="fa fa-sign-out" aria-hidden="true" ></i>
            </div>
        </Aux>
    );
};

export default ProfileWrapperAuthorized;