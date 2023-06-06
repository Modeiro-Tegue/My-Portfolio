import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bachground.jpg'
import IMG2 from '../../assets/HCIA-Datacom.jpg'
import IMG4 from '../../assets/download.png'
import IMG5 from '../../assets/texture.jpg'
import IMG6 from '../../assets/im2.jpg'
import IMG3 from '../../assets/img6.png'

const data = [
    {id: 1,
     image: IMG1,
     title: 'Built my Portfolio',
     github: 'https://github.com',
     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'  
    },
    {id: 2,
        image: IMG2,
        title: 'HCIA Huawei DataCom Basis',
        github: 'https://github.com',
        demo: 'https://e.huawei.com'  
       },
       {id: 3,
        image: IMG3,
        title: 'Software Development Projects',
        github: 'https://github.com',
        demo: 'https://azuredevops.com'  
       },
       {id: 4,
        image: IMG4,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'  
       },
       {id: 5,
        image: IMG5,
        title: 'Computer Security basis, Ciphers Algo and C implementation',
        github: 'https://github.com',
        demo: 'https://cryptosystem.com'  
       },
       {id: 6,
        image: IMG6,
        title: 'On Going Real_Estate_System',
        github: 'https://github.com',
        demo: 'https://realestate.com'  
       }]

const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className='portfolio__item' >
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div>
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
                

            </div>
        </section>
    )
}

export default Portfolio