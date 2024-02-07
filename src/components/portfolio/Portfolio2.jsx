import React, { useState } from 'react'
import "./portfolio2.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Project from './Project';

const items = [
    {
        id: 1,
        title: "Foodie's Fortress",
        img: "Foodies.png",
        desc: "A user-friendly food delivery React app, streamlining order placement, enhancing cart functionality, and optimizing food selection through intuitive filtering. Employed modern, minimalist UI principles to ensure easy navigation, featuring dedicated pages for meal details, order management, and user registration App for clothing store where users can surf various products and can also buy products via card or ethereum payment",
        github:"https://github.com/Hk0509/Foodies-Fortress",
        live:"https://foodies-fortress.vercel.app/",
      },
      {
        id: 2,
        title: "VIT Bhopal AR Tour",
        img: "tour.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github:"https://play.google.com/store/apps/details?id=com.VIT.VITARTour",
        live:"https://play.google.com/store/apps/details?id=com.VIT.VITARTour",
      },
      {
        id: 3,
        title: "Z-Shopper",
        img: "Shopper.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github:"https://github.com/Hk0509/Z-Shopper",
        live:"https://z-shopper.vercel.app/",
      },
      {
        id: 4,
        title: "Kanban Board",
        img: "Kanban.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github:"https://github.com/Hk0509/Kanban-Board",
        live:"https://kanban-board-hk0509.vercel.app/",
      },
      {
        id: 5,
        title: "Coin Dash",
        img: "Coin-Dash.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        github:"https://github.com/Hk0509/Coin-Dash",
        live:"https://youtu.be/qJkltgxBOOg",
      },
];


const Portfolio2 = () => {
    const directionX = "left"
    const directionY = "right"

    return (
        <>
            <div className='project-section'>
                <h1>Projects</h1>
                <div className='project-row'>
                    <Project direction={directionX} item={items[0]} />
                    <Project direction={directionY} item={items[1]} />
                </div>
                <div className='project-row'>
                    <Project direction={directionX} item={items[2]} />
                    <Project direction={directionY} item={items[3]} />
                </div>
                <div className='project-row'>
                    <Project direction={directionX} item={items[4]} />
                    {/* <Project direction={directionY} item={items[3]} /> */}
                </div>
            </div>
        </>
    )
}

export default Portfolio2