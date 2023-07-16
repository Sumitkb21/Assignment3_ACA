import React from 'react'
import logo1 from '../../Pictures/DBS.jpg'
import logo2 from '../../Pictures/Nirmaan.png';
import logo3 from '../../Pictures/IITK.png';

function Education() {
  return (
    <section id='education'>
    <div className='pt-12 bg-fixed' style={{backgroundImage: 'url("https://free4kwallpapers.com/uploads/originals/2021/07/12/white-sands-national-park-wallpaper.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

        <div className='grid justify-items-center underline mb-24'>
            <h1 className='text-7xl font-medium'>Education</h1>
        </div>

        <div className="grid grid-cols-2 justify-items-center">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 bg-gradient-to-r from-slate-200 to-slate-400">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={logo1} alt="School logo"/>
                <div className="flex flex-col justify-between p-4 pt-0 mt-0 leading-normal">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight">Don Bosco School, Siliguri</h5>
                    <p className="mb-2 font-normal text-xl font-medium"> I studied in this school from class I-X. It was an ICSE certified School. Completed my 10th board exams in 2020.</p>
                </div>
            </div>

            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 bg-gradient-to-r from-slate-200 to-slate-400">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={logo2} alt=""/>
                <div className="flex flex-col justify-between p-4 pt-0 mt-0 leading-normal">
                    <h5 className="mb-5 text-2xl font-bold tracking-tight">Nirmaan Vidya Jyoti School, Siliguri</h5>
                    <p className="mb-6 font-normal text-xl font-medium">I studied in this school from class XI-XII. It was a CBSE certified School. Completed my 12th board exams in 2022.</p>
                </div>
            </div>

        </div>

        <div className="grid grid-cols-1 justify-items-center mt-12">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 bg-gradient-to-r from-slate-200 to-slate-400">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={logo3} alt=""/>
                    <div className="flex flex-col justify-between p-4 pt-0 mt-0 leading-normal">
                        <h5 className="mb-3 text-2xl font-bold tracking-tight">Indian Institute of Technology, Kanpur</h5>
                        <p className="mb-2 font-normal text-xl font-medium">I am currently pursuing my B.Tech in Computer Science and Engineering here. Joined in 2022.</p>
                    </div>
                </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="grid items-center"><hr style={{width:"70%", margin:"auto", color: "dark"}}></hr></div>
        <br></br>
        <br></br>
    </div>
    </section>
  )
}

export default Education