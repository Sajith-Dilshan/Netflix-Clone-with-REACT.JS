import React from 'react';
import "./Banner.css";

function Banner() {


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;

    }




  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
    }}>

        <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
            
             

             <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>

            <h1 className='banner__discription'>
                {truncate(`Contrary to popular belief, Lorem Ipsum is not simply random text.
                 It has roots in a piece of classical Latin literature from 45 BC, making it over 
                 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College 
                 in Virginia, looked up one of the more obscure Latin words, consectetur, from a 
                 Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                 discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
                 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
                 in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.`,150)}
            </h1>

        </div>


<div className='banner__fadeBotton' />


      
    </header>
  )
}

export default Banner
