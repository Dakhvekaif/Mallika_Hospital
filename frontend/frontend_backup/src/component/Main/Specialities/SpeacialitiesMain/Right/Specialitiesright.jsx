import CardSwap, { Card } from './Specialitiesrightcompo';
import img1 from '../../../../../assets/Specialist/Nephrology.png';
import img2 from '../../../../../assets/Specialist/Medicines.png';

export default function Speacialitiesright ({ onActiveCardChange }) {
  return (
    <div 
      className="w-full max-w-md lg:max-w-lg relative overflow-hidden h-[570px] md-h-[500px]"
      // style={{ height: "570px" }}
    >
      <CardSwap
        onActiveCardChange={onActiveCardChange}
        cardDistance={40}
        verticalDistance={60}
        delay={5000}
        pauseOnHover={true}
      >
        <Card 
          style={{ backgroundImage: `url(${img1})` }}
          customClass="bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        >           
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-bold">Nephrology</h3>
            <p></p>
          </div>
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        </Card>

        <Card 
          style={{ backgroundImage: `url(${img2})` }}
          customClass="bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        >
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-bold">Medicines</h3>
            <p></p>
          </div>
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        </Card>

        {/* <Card 
          style={{ backgroundImage: `url(${img1})` }}
          customClass="bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        >
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-bold">Laparoscopy Surgery</h3>
            <p></p>
          </div>
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
        </Card> */}
      </CardSwap>
    </div>
  );
}
