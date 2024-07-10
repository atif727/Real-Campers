import "./banner.css";
import Milki from "./milki";

const Banner = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <div className="md:text-5xl font-bold font-sans animated-gradient-text">
          <h2>A CHECKPOINT FOR CAMPERS CAMPING WORLDWIDE</h2>
          <h2 className="mt-2">IN WILDWIDE ACCROSS THE WORLD</h2>
        </div>
        <p className="md:px-64 mt-10 text-xl">
          Embark on your next adventure with confidence using our premium
          camping gear, designed for explorers who venture into forests,
          jungles, and mountains. Our collection includes rugged tents,
          insulated sleeping bags, advanced navigation tools, and comprehensive
          survival kits, ensuring you’re fully equipped for any challenge nature
          throws your way. Whether you're a seasoned trekker or a first-time
          camper, our high-quality products guarantee comfort, safety, and
          reliability. Gear up and experience the thrill of the wild like never
          before!
        </p>
        <Milki />
      </div>
    </section>
  );
};

export default Banner;
