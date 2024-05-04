import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col justify-center items-center flex-grow bg-gradient p-4 gap-20">
        <h1 className="text-center text-white font-bold text-3xl">
          Suivez le rythme. Optimisez vos rendements.
        </h1>
        <p className="text-white text-center">
          GestInvest vous offre une plateforme complète pour suivre vos actifs
          et analyser leur performance. GestInvest vous donne les moyens de
          réaliser vos ambitions financières. Explorez de nouvelles opportunités
          dès aujourd&apos;hui avec GestInvest.
        </p>
        <p className="text-white text-center">
          GestInvest vous offre une plateforme complète pour suivre vos actifs
          et analyser leur performance. GestInvest vous donne les moyens de
          réaliser vos ambitions financières. Explorez de nouvelles opportunités
          dès aujourd&apos;hui avec GestInvest.
        </p>
        <p className="text-white text-center">
          GestInvest vous offre une plateforme complète pour suivre vos actifs
          et analyser leur performance. GestInvest vous donne les moyens de
          réaliser vos ambitions financières. Explorez de nouvelles opportunités
          dès aujourd&apos;hui avec GestInvest.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
