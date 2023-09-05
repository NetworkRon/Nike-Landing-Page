import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-contianer">
    <div className="flex-1">
      <img 
        src={offer} alt="offer"
        height={687} width={773}
        className="object-contain w-full"
      />
    </div>
    <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"><span className=" text-coral-red ">Special </span>
      Offer
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">Unlock unbeatable deals on Nike shoes today! Elevate your style and performance with our special offer. Whether you&apos;re an athlete or a fashion enthusiast, we&apos;ve got the perfect pair waiting for you. Don&apos;t miss out – shop now!</p>
      <p className="mt-6 lg:max-w-lg info-text">Experience savings and style with our exclusive Nike shoe special offer! From the gym to the streets, Nike has you covered. Take advantage of limited-time discounts on the hottest Nike kicks. Treat your feet today – shop now!</p>
      <div className="mt-11 flex flex-wrap gap-4"> <Button label="Shop Now" iconURL={arrowRight}/> 
      <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/></div>
    </div>
    </section>
  )
}

export default SpecialOffer