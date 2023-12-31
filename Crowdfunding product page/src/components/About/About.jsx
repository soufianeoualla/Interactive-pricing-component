import BambooStand from "./BambooStand"
import BlackEditionStand from "./BlackEditionStand"
import MahoganySpecialEdition from "./MahoganySpecialEdition"

const About = ({setisSelected}) => {
  return (
    <section className="about">
        <div className="card-wrapper">
        <div className="text">
        <h3>About this project</h3>

        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
        to allow notepads, pens, and USB sticks to be stored under the stand.</p>
        </div>
        
        <BambooStand setisSelected={setisSelected} />
        <BlackEditionStand setisSelected={setisSelected} />
        <MahoganySpecialEdition/>
        </div>
        

    </section>
  )
}

export default About