import FormResetPassword from "../components/Auth/FormResetPassword";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ResetPassword = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <FormResetPassword />
      <Footer />
    </div>
  );
};

export default ResetPassword;
