import React from "react";
import classes from '../AppEx2.module.css'
import { Metric } from "./Metric";

export const Statistics = () => {
    return <div className={classes.niebieski}>
        Statistic.js 
        <div style={{display: 'flex', gap: 10}}>
            <Metric/>
            <Metric/>
            <Metric/>
        </div>
    </div>
}