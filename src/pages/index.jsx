import * as React from "react"
import Layout from "../components/Layout"
import Slider from "../components/Slider"
import { StaticImage } from "gatsby-plugin-image"



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


// markup
const IndexPage = () => {

  const styles = {
    height: 'calc(100vh - 96px - 2.25rem)'
  };

  return (
    <Layout>
      <div className="relative">
        <div className="opacity-60">
        <Slider interval={5000}>
          <StaticImage layout="fullWidth" src="../images/background_1.jpg" style={styles} alt="" />
          <StaticImage layout="fullWidth" src="../images/background_2.png" style={styles} alt="" />
          <StaticImage layout="fullWidth" src="../images/background_3.png" style={styles} alt="" />
        </Slider>
        </div>
        <div className="flex flex-col absolute top-0 left-0 items-center w-full h-full justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-3">Become A Slugger.</h2>
          <p className="text-gray-200 text-xl">Over 50+ members and counting.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
