import React, {useState} from 'react'
import ImgOne from "../images/img-1.jpg"
import ImgTwo from "../images/img-2.jpg"
import ImgThree from "../images/img-3.jpg"

const SliderData = [
    {
    image: ImgOne
    },
    {
    image: ImgTwo
    },
    {
    image: ImgThree
    },
]



 const Slider = (props) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    return(
        <section >
            
            {SliderData.map((slide, index) => {
                return(
                    <img src={slide.image} alt="" />
                )
            })}
        </section>
    )
}

export default Slider;