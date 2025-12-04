import React from 'react';
import {ImpactAtaGlanceStyle} from './impact-at-a-glance-style'
const ImpactAtaGlanceComponent=()=>{
    return(
        <ImpactAtaGlanceStyle>
            <div className="title"><h1 className="heading">Impact at a <span>Glance</span></h1></div>
            <div className="parent">
                <div className="line1">
                 <div className="child1">
                    <span className="subheading">Colleges</span><br></br>
                    <span className="number">100+</span>
                 </div>
                 <div className="child2">
                    <span className="subheading">Students</span><br></br>
                    <span className="number">1,00,000</span>
                 </div>
                 </div>
                 <br></br>
                 <div className="line2">
                 <div className="child3">
                    <span className="subheading">Study Materials</span><br></br>
                    <span className="number">1000+</span>
                 </div>
                 <div className="child4">
                    <span className="subheading">Professional Trainers</span><br></br>
                    <span className="number">150</span>
                 </div>
                 </div>
            </div>
        </ImpactAtaGlanceStyle>
    )
}
export default ImpactAtaGlanceComponent;