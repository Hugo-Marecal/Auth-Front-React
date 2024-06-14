import FormForgotPassword from "../components/Auth/FormForgotPassword";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <FormForgotPassword />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
