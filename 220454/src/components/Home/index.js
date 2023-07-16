import React from 'react';
import pic from '../../Pictures/cool-pic.jpg';

function Home() {
  return (
    <section id='home'>
    <div className='pt-32 bg-fixed' style={{backgroundImage: 'url("https://free4kwallpapers.com/uploads/originals/2020/07/22/minimal-landscape-black-and-white-wallpaper.png")', backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
        <div className="grid grid-cols-12">
            <div className="col-span-6 items-center"><img src={pic} alt="A cool pic of me" className='mx-auto h-[790px]'/></div>
            <div className="grid col-span-6 justify-items-center">
                <h1 className='text-7xl text-center font-medium'>Hello, World!</h1>
                <p className="mt-18 mx-24 text-4xl font-normal">I am Himanshu Shekhar, currently a sophomore at IIT Kanpur, pursuing my B.Tech in Computer Science and Engineering. The guy in the picture, yes that's me. I love playing the guitar and am really interested in music. My other interests include watching Anime, Gaming, Reading, Cubing, Competitive programming and DevOps (sometimes 🤷‍♀️).</p>

                
                <div class="justify-self-center w-[calc(100%-96px)] p-6 rounded-lg shadow border border-gray-400 bg-gradient-to-r from-gray-200 to-gray-400">
                    <h5 class="mb-8 text-3xl font-medium tracking-tight text-center">Not so important NOTE</h5>
                    <p class="font-normal text-2xl">I do not have a CV yet so I won't attach it here, because I'm too lazy to make one as of now. But you can check out my achievements section I guess. At this point I'm literally just writing anything to fill up space. 😂</p>
                </div>

            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="grid items-center"><hr style={{width:"70%", margin:"auto"}}></hr></div>
        <br></br>
        <br></br>
    </div>
    </section>
  )
}

export default Home