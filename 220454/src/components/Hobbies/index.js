import React from 'react'
import Sports from '../../Pictures/Sports.jpeg'
import Music from '../../Pictures/Music.jpg'
import Anime from '../../Pictures/Anime.jpg'
import Programming from '../../Pictures/Comp.jpg'

function Hobbies() {
  return (
    <section id='hobbies'>
    <div className='pt-12 bg-fixed' style={{backgroundImage: 'url("https://free4kwallpapers.com/uploads/originals/2021/04/25/white-sands-national-park-new-mexico-wallpaper.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className='grid justify-items-center underline mb-24'>
            <h1 className='text-7xl font-medium'>Hobbies</h1>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div class="grid grid-cols-2 justify-items-center">
            <div class="justify-self-center max-w-[700px] rounded-lg shadow border border-gray-400 bg-gradient-to-r from-gray-200 to-gray-400">
                <img src={Sports} class="card-img-top w-full" alt="Sports related pic"/>
                <h5 class="mb-8 text-7xl font-medium tracking-tight text-center pt-2">Sports</h5>
                <p class="font-normal text-3xl pb-8 px-2" align="center">Not really into sports, but i play football sometimes. Was into athletics when I was young but not anymore, I've become lazy now.</p>
            </div>
            <div class="justify-self-center max-w-[700px] rounded-lg shadow border border-gray-400 bg-gradient-to-r from-gray-200 to-gray-400">
                <img src={Music} class="card-img-top w-full" alt="Music related pic"/>
                <h5 class="mb-8 text-7xl font-medium tracking-tight text-center pt-2">Music</h5>
                <p class="font-normal text-3xl pb-8 px-2" align="center">I am huge music enthusiast and I also play the guitar. I started playing the guitar when I was in class 8th. Some of my favourite guitarists are Tim Henson, Ichika Nito etc.</p>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div class="grid grid-cols-2 justify-items-center">
            <div class="justify-self-center max-w-[700px] rounded-lg shadow border border-gray-400 bg-gradient-to-r from-gray-200 to-gray-400">
                <img src={Anime} class="card-img-top w-full" alt="Cute Anime Girl"/>
                <h5 class="mb-8 text-7xl font-medium tracking-tight text-center pt-2">Anime</h5>
                <p class="font-normal text-3xl pb-8 px-2" align="center">I also watch a lot of Anime, but just to be clear, I'm not a weeb. The most recent Anime series that I binged was Grand Blue.</p>
            </div>
            <div class="justify-self-center max-w-[700px] rounded-lg shadow border border-gray-400 bg-gradient-to-r from-gray-200 to-gray-400">
                <img src={Programming} class="card-img-top w-full" alt="Cool pic"/>
                <h5 class="mb-8 text-7xl font-medium tracking-tight text-center pt-2">Programming</h5>
                <p class="font-normal text-3xl pb-8 px-2" align="center">Currently, I am trying to learn Computer Networking. Sometimes, I also solve CP problems. Would like to learn a bit more of DevOps.</p>
            </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
    </div>
    </section>
  )
}

export default Hobbies