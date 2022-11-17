import React from "react"
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "crypto currency",
    github: "http://github.com",
    demo: "http://dribbble.com"
  },
  {
    id: 2,
    image: IMG2,
    title: "chart templates",
    github: "http://github.com",
    demo: "http://dribbble.com"
  },
  {
    id: 3,
    image: IMG3,
    title: "figma dashboard ui kit",
    github: "http://github.com",
    demo: "http://dribbble.com"
  },
  {
    id: 4,
    image: IMG4,
    title: "maintaing tasks and tracking progress",
    github: "http://github.com",
    demo: "http://dribbble.com"
  },
  {
    id: 5,
    image: IMG5,
    title: "chart templates",
    github: "http://github.com",
    demo: "http://dribbble.com"
  },
  {
    id: 6,
    image: IMG6,
    title: "maintaing tasks and tracking progress",
    github: "http://github.com",
    demo: "http://dribbble.com"
  }
]
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>porfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target='_blank'>github </a>
                <a
                  href={demo}
                  target="blank"
                  className="btn btn__primary"
                > live demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default portfolio;
