import React, { Component } from 'react'
import Title from './Title'
import {FaLaptopCode, FaUserFriends,FaBrain, FaCoffee} from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaLaptopCode/>,
                title: "Experience audit of public sector apps",
                info: "As a citizen, I use various SG Gov apps in daily life. Sometimes I come across amazing features, while other times I think to myself - hey this could be done better. I want to detail all these experiences as a user."
            },

            {
                icon: <FaUserFriends/>,
                title: "Looking at what can be made better",
                info: "Perhaps a habit I've developed from my day job, each time I use an app, I look for ways to make it better - how to improve the user flow, place the buttons more comfortably, etc. I want to build a repository of these  practices and ideas."
            },

            {
                icon: <FaBrain/>,
                title: "Weighing in with behavioural science",
                info: "UX/UI shares synergy with behavioural science, a field I love! Inspired by Shlomo Benartzi's 'The Smarter Screen', I hope to spur my readers to consider how behavioural science can improve their app creation process."
            },

            {
                icon: <FaCoffee/>,
                title: "Opportunities for coffee",
                    info: "Lastly, this site also hopes to encourage conversation and meaningful friendships! If you happen to be on the project team for any of these apps, and want to reach out to bounce ideas, contact me for a cuppa :)"
            }
        ]
    }


    render() {
        return (
            <section className="services">
                <Title title="What This Site Does" />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}

                </div>
            </section>
        )
    }
}
