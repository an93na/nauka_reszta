import React from "react";
import klasa from './MetricCSS.module.css'


export const Metric = () => {
    return <article>
        <h3>Metric</h3>
        <div style={klasa.spod}>
            <div>
                <p><span>Work</span>...</p>
                <p>32hrs</p>
                <p>Last Week - 36hrs</p>
            </div>
        </div>
    </article>
}