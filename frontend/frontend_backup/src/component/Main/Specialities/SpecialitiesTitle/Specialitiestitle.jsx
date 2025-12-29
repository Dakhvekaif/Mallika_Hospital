import AnimatedText from './Specialitiestitlecompo';

function Specialitiestitle() {
  return (  
    // Add the overflow-hidden class here
    <div className="overflow-hidden flex justify-center items-center h-20">       
        <AnimatedText>
          <h1 className="text-4xl font-bold">Our Specialities</h1>
        </AnimatedText>
    </div>
  );
}

export default Specialitiestitle;