import { useEffect, useState } from "react";
import Header from "../components/Header";
import { reqAccount } from "../Api/reqAxios";

const Account = () => {
  const [username, setUsername] = useState(null);

  const getRequest = async () => {
    const user = await reqAccount();
    setUsername(user);
  };

  useEffect(() => {
    getRequest();
  }, []);
  return (
    <>
      <Header />
      <p className="text-black">Hi {username}!</p>
    </>
  );
};

export default Account;
