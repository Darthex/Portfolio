import React from "react";
import img2 from "../images/news-app.png";
import img4 from "../images/compact.png"
import img3 from "../images/yt-downloder.png"
import notes from "../images/image2.png"
import tenzies from "../images/image3.png"
import zeev from "../images/image4.png"

export default function Work() {
    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div className="portfolio">
                <a href="https://darthex-dl-yt.netlify.app" className="portfolio__item" target="_blank">
                    <img src={img3} alt="" className="portfolio__img"/>
                </a>

                <a href="https://compact-web.netlify.app" className="portfolio__item" target="_blank">
                    <img src={img4}  alt="" className="portfolio__img"/>
                </a>

                <a href="https://news-app-teleport.netlify.app" className="portfolio__item" target="_blank">
                    <img src={img2}  alt="" className="portfolio__img"/>
                </a>

                <a href="https://splendorous-frangollo-1554e6.netlify.app" className="portfolio__item" target="_blank">
                    <img src={notes}  alt="" className="portfolio__img"/>
                </a>

                <a href="https://thriving-cuchufli-fd075a.netlify.app" className="portfolio__item" target="_blank">
                    <img src={tenzies}  alt="" className="portfolio__img"/>
                </a>

                <a href="https://roaring-sunshine-48f49c.netlify.app" className="portfolio__item" target="_blank">
                    <img src={zeev}  alt="" className="portfolio__img"/>
                </a>
            </div>
        </section>
    )
}