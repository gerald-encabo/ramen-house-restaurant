import Button from "@/components/Button";
import Title from "@/components/Title";
import "@/styles/banner.scss";

const Banner = () => {

  return (
    <section className="banner" >
        <div className="banner-wrapper">
          <Title heading="Best Ramen in GTA" />
          <p>Find the nearest Ramen House to You!</p>
          <Button button="Start your Order" />
        </div>
    </section>
  )
}

export default Banner