import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col justify-center items-center flex-grow bg-[#fbfbfb] p-4 gap-5">
        <h1 className="text-center  font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="border bg-white  rounded-xl p-4 mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          harum delectus provident reiciendis assumenda nisi soluta architecto,
          sequi natus ullam reprehenderit sapiente distinctio libero! Fuga,
          nihil delectus. Possimus, tempore ipsa?
        </p>
        <p className="border bg-white  rounded-xl p-4 mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          harum delectus provident reiciendis assumenda nisi soluta architecto,
          sequi natus ullam reprehenderit sapiente distinctio libero! Fuga,
          nihil delectus. Possimus, tempore ipsa?
        </p>
        <p className="border bg-white  rounded-xl p-4 mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          harum delectus provident reiciendis assumenda nisi soluta architecto,
          sequi natus ullam reprehenderit sapiente distinctio libero! Fuga,
          nihil delectus. Possimus, tempore ipsa?
        </p>
        <p className="border bg-white  rounded-xl p-4 mx-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          harum delectus provident reiciendis assumenda nisi soluta architecto,
          sequi natus ullam reprehenderit sapiente distinctio libero! Fuga,
          nihil delectus. Possimus, tempore ipsa?
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
