import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";


function App() {
  const [orderpopup,setOrderpopup]=useState(false);
  const handleOrderPopup=()=>{
    setOrderpopup(!orderpopup)
  };
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-shine",
      delay:100,

    });
    AOS.refresh();
  },[]);

  return (
    <>
     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200"></div>
    </>
  )
}

export default App
