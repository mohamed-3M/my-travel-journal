import React from 'react'

export default function Section(props){
    return(
        <section className='card'>
            <div className='card--photo'>
                <img src={props.imageUrl} /> 
            </div>
            <div className='card--content'>
                <span> <i class="fa-solid fa-location-dot"></i> {props.location}</span>
                <a href={props.googleMapsUrl}>View on google map</a>
                <h1>{props.title}</h1>
                <p className='start--end'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </section>

)}