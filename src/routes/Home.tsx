import Navbar from "../components/Navbar";
import CardImmobile from "../components/Card";
import MyCombobox from "@/components/Filter";
import Title from "../components/Title";

const Home = () => {
  return (
    <>
      <Navbar />
      <MyCombobox />
      <Title />
      <CardImmobile />
    </>
  );
};

export default Home;
