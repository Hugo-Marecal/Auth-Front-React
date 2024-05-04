import Footer from "../components/Footer";
import Header from "../components/Header";
import FormLogin from "../components/Auth/FormLogin";

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
