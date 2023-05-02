import React,{useState} from "react";
import Step1 from './step1/Step1'
import Step2 from './step2/Step2'
import Step3 from './step3/Step3'
import Step4 from './step4/Step4'
import Step5 from './step5/Step5'
import Footer from '../../footer/Footer'

const Signup1 = () => {
  const[step,setStep]=useState(1)
  function onhandleNext(){
    setStep(step+1)
  }
  return (
   <>
   {
    step===1? <Step1 onClick={onhandleNext}/>:""
   }
   {
    step===2? <Step2 onClick={onhandleNext}/>:""
   }
   {
    step===3? <Step3 onClick={onhandleNext}/>:""
   }
   {
    step===4? <Step4 onClick={onhandleNext}/>:""
   }
   {
    step===5? <Step5 />:""
   }
   <Footer/>
   </>
  );
};

export default Signup1;
