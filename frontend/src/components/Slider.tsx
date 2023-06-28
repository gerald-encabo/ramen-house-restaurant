import { useQuery, gql } from "@apollo/client";
import Carousel from "react-slick";
import Button from "./Button";
import Spinner from "@/components/Spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slider.scss";

// Fetch data using Graphql
const CarouselList = gql`
  query GetCarouselLists {
    carouselLists {
      data {
        attributes {
          name,
          desc,
          title,
          price,
          altImg,
          img {
            data {
              attributes {
                  formats 
              }
            }
          }
        }
      }
    }
  }
`

const Slider = () => {

  const { loading, error, data } = useQuery(CarouselList);

  if (loading) return <Spinner />
  if (error) return <Spinner />

  // Slick Carousel settings options
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    inifinite: true,
    speed: 5000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    adaptiveHeight: true,
    fade: true,
    pauseOnHover: true
  } 

  return (
    <section className="special">
        <Carousel {...settings}>
            {
                data.carouselLists.data.map((product: any, index: number) => (
                    <div className="special-wrapper" key={index}>
                        <div className="special-img" 
                             style={{ 
                              backgroundImage: `url(${import.meta.env.VITE_RAMEN_HOUSE_APP_URL + product?.attributes?.img?.data?.attributes?.formats.large?.url})`,
                              backgroundPosition: 'center',
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              backgroundColor: 'red'
                             }}
                          >
                          <h1>{product.attributes.title}</h1>
                          <h3>{product.attributes.name}</h3>
                          <p>{product.attributes.desc.substring(0,80)}</p>
                          <Button button="Order Now" />
                        </div>
                    </div>
                    
                ))
            }
        </Carousel>
    </section>
  )
}
export default Slider