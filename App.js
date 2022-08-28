import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Section  from './components/Section'
import data from './data'

export default function App(){
    let items = data.map(item => {
        return( 
        <Section {... item} />
    )})
    return(
        <div>
            <Navbar />
        <div className='container'>
        {items}
        </div>

        </div>
    )}
