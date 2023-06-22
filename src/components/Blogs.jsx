import React from 'react'
import SingleProject from './SingleProject'
import travely from "../Assets/travely.png"
import helpDesk from "../Assets/help desk.png"
import eduX from "../Assets/eduX.png"



const Blogs = () => {
  return (
    <div name = 'blogs' className=' w-full bg-[#0a192f] pt-3'>
        <h1 className='pt-20 text-[#00dbfe] text-3xl text-center  lg:pt-28 lg:text-4xl  font-bold yasiru lg:leading-[1.5em] mb-5'>Projects</h1>
        <div className='flex flex-col lg:flex-row  cursor-pointer p-4 lg:w-[1200px] gap-8 w-auto lg:mx-auto lg:justify-between'>
          <SingleProject
            topic = "Travely - MERN Project"
            desc = "Travely is an innovative startup that offers a comprehensive travel and tourism management system. The system simplifies the process of booking and managing travel by providing a one-stop shop website where travellers can easily organize their trips, and book hotels, rental cars, restaurants, events, tour packages, and customized tours."
            image = {travely}
            url = "https://github.com/SehanArandara/Travely-2Y2S-ITP-project"
          />
          <SingleProject
               topic = "Online Help Desk - Java / Java Serverlet"
               desc = "In the Jakarta Servlet project, my focus was on user management and UI design using UI Kit CSS. I implemented features such as user registration, login, password reset, profile viewing, updating, and account deletion. Additionally, I utilized UI Kit CSS to create an attractive and user-friendly interface. The project aimed to enhance my understanding of Java web development and gain practical experience in building functional and visually appealing web applications."
               image = {helpDesk}
               url = "https://github.com/SehanArandara/Online-Help-Desk---JAVA"
          />
          <SingleProject
               topic = "EduX - Kotlin/Android Studio / FireBase"
               desc = "As a result of current unstable situation of politics and economy, Sri Lanka's education sector is experiencing significant issues. Many colleges and institutions struggle to provide basic services and facilities to the students due to lack of funding. As a result, education has declined in quality, and many pupils are finding it difficult to keep up with their studies. So, to overcome this problem, our developing team has come up with the idea of an app called “EduX” to help the students in our country. "
               image = {eduX}
               url = "https://github.com/SehanArandara/EduX-APP-2Y2S-MAD-project"
          />
          
        </div>

    </div>
  )
}

export default Blogs
