import Footer from "../components/Footer";
import Header from "../components/Header";
import FormRegister from "../components/Auth/FormRegister";

const Register = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <FormRegister />
      <Footer />
    </div>
  );
};

export default Register;
