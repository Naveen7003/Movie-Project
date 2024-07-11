import React from 'react'
import about from "/contact.gif"
import { Link, useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center min-screen bg-black text-white">
          <div className="bg-black h-full p-2 px-5 rounded-lg shadow-lg w-full max-w-2xl">
          <Link
          onClick={() => navigate(-1)}
          className="hover:bg-[#6556cd] text-white mr-3 text-3xl ri-arrow-left-line"
        ></Link>
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-lg mb-4">
              Welcome to our movie website! We are passionate about bringing you the latest and greatest in the world of movies and TV shows. Our mission is to provide you with an enjoyable and seamless experience where you can explore movie posters, watch trailers, and find out where your favorite movies and TV shows are available to stream.
            </p>
            <p className="text-lg mb-4">
              Our platform includes a wide range of movies and TV shows, from the latest blockbusters to classic favorites. We strive to keep our content up-to-date and relevant, ensuring that you always have access to the most popular and trending titles.
            </p>
            <p className="text-lg mb-4">
              Thank you for visiting our website. We hope you enjoy exploring our content as much as we enjoy bringing it to you. If you have any questions or feedback, please don't hesitate to reach out to us through our contact page.
            </p>
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">Our Team</h2>
              <ul className="list-disc pl-5">
                <li className="text-lg mb-2">Naveen Prajapati - Founder & CEO</li>
                <li className="text-lg mb-2">Naveen Prajapati - Chief Content Officer</li>
                <li className="text-lg mb-2">Naveen Prajapati - Lead Developer</li>
                <li className="text-lg mb-2">Naveen Prajapati - Marketing Director</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={about} alt="" />
          </div>
        </div>
      );
}

export default About