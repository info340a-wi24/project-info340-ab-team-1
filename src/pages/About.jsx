import React from "react";
import cardData from '../cards.json';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {

return (
    <div className="container">
        <div className="row">
            {cardData.map((card, index) => (
                <div key={index} className="col-md-6 col-xl-3 d-flex">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">     
                                <div className="col-sm-auto col-xl-12">
                                    <img className="pb-3 img-fluid" src={card.imgSrc} alt={`Photo of ${card.name}`} />
                                </div>
                                <div className="col-sm">
                                    <h2 className="card-title">{card.name}</h2>
                                    <p className="card-text">{card.major}, {card.graduationYear}</p>
                                    <a className="btn btn-dark" href={card.linkedin} target="_blank">LinkedIn</a>
                                    <a className="btn btn-dark" href={card.github} target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
            ))}
        </div>
    </div>

    )
}