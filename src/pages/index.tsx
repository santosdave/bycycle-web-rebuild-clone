import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import CategorySection from '@/components/CategorySection'
import NewArrivalsSection from '@/components/NewArrivalsSection'
import SpecialBike from '@/components/SpecialBike'
import PopularSection from '@/components/PopularSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'



export default function Home() {
  let [slideIndex, SetSlideIndex] = useState(0);
  let [slidePlay, SetSlidePlay] = useState(true);

  useEffect(() => {
    let hero_slide = document.querySelector('#hero-slide');
    let hero_slide_items = hero_slide?.querySelectorAll(".slide");

    let hero_slide_control_items = hero_slide?.querySelectorAll(".slide-control-item");
    let slide_next = hero_slide?.querySelector(".slide-next");
    let slide_prev = hero_slide?.querySelector(".slide-prev");

    let header = document.querySelector("header");


    const showSlide = (index: any) => {
      hero_slide?.querySelector(".slide.active")?.classList.remove("active");
      hero_slide?.querySelector(".slide-control-item.active")?.classList.remove("active");
      if (hero_slide_control_items) {
        hero_slide_control_items[index].classList.add("active");
        // add event to slide select
        hero_slide_control_items.forEach((item, index) => {
          item.addEventListener("click", () => showSlide(index));
        });
      }
      if (hero_slide_items) {
        hero_slide_items[index].classList.add("active");
      }
    }

    const nextSlide = () => {
      slideIndex = slideIndex + 1 === hero_slide_items?.length ? 0 : slideIndex + 1;
      showSlide(slideIndex);
    }

    const prevSlide = () => {
      slideIndex = slideIndex - 1 < 0 ? hero_slide_items?.length || 0 - 1 : slideIndex - 1;
      showSlide(slideIndex);
    }


    // add event to slide select
    if (hero_slide_control_items) {
      hero_slide_control_items.forEach((item, index) => {
        item.addEventListener("click", () => showSlide(index));
      });
    }


    // pause slide when mouse come in slider
    hero_slide?.addEventListener("mouseover", () => (slidePlay = false));

    // resume slide when mouse leave out slider
    hero_slide?.addEventListener("mouseleave", () => (slidePlay = true));

    if (slide_next) {
      slide_next.addEventListener("click", () => nextSlide());
    }

    if (slide_prev) {
      slide_prev.addEventListener("click", () => prevSlide());
    }


    if (hero_slide_items != undefined) {
      setTimeout(() => hero_slide_items[0].classList.add("active"), 200);
    }

    // change header style when scroll
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header?.classList.add("shrink");
      } else {
        header?.classList.remove("shrink");
      }
    });


    // element show on scroll

    let scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    let el_to_show = document.querySelectorAll(".show-on-scroll");

    const isElInViewPort = (el: Element) => {
      let rect = el.getBoundingClientRect();

      let distance = 200;

      return (
        rect.top <=
        (window.innerHeight - distance ||
          document.documentElement.clientHeight - distance)
      );
    };

    const loop = () => {
      el_to_show.forEach((el) => {
        if (isElInViewPort(el)) el.classList.add("show");
      });

      scroll(loop);
    };

    loop();
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className=""
    >
      <Head>
        <title>Daves Bikes - KE</title>
        <meta
          name="description"
          content="Bikes E-commerce store landing page"
        />
        <link rel="icon" href="/bike.png" />
      </Head>
      <Header />
      <Hero />
      <CategorySection/>
      <NewArrivalsSection/>
      <SpecialBike/>
      <PopularSection/>
      <BlogSection/>
      <Footer/>
    </motion.div>
  )
}
