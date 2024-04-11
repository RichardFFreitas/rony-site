import Navbar from "../components/Navbar"
import CardImmobile from "../components/Card";
import MyCombobox from "@/components/Filter";
import  Title from "../components/Title"


const Home = () => {
  return (
    <>
    <Navbar />
    <MyCombobox />
    <Title/>
    <div className="flex justify-center flex-wrap">
     <CardImmobile  /> 
     <CardImmobile  />
     <CardImmobile  />
    </div>
    </>
  );
}

export default Home;