import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  const cardData = [
    {
      name: 'Alexandre Labbé',
      major: 'Informatics',
      graduationYear: '2025',
      linkedin: 'https://www.linkedin.com/in/alexandrelabbe/',
      github: 'https://github.com/alexandrelabbe',
      imgSrc: 'assets/AL.jpg'
    },
    {
      name: 'Shawn Leonard',
      major: 'Geography: Data Science',
      graduationYear: '2024',
      linkedin: 'https://www.linkedin.com/in/shawn-leonard-004592217/',
      github: 'https://github.com/lenny400',
      imgSrc: 'assets/SL.jpg'
    },
    {
      name: 'Jaiden York',
      major: 'Informatics',
      graduationYear: '2024',
      linkedin: 'https://www.linkedin.com/in/jaiden-york-a01169234/',
      github: 'https://github.com/jaidenyork',
      imgSrc: 'assets/JY.jpg'
    },
    {
      name: 'Carson Klein',
      major: 'Geography: Data Science + Informatics Minor',
      graduationYear: '2024',
      linkedin: 'https://www.linkedin.com/in/carson-klein-325b1a13b/',
      github: 'https://github.com/carsonfk',
      imgSrc: 'assets/CK.jpg'
    }
  ];

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