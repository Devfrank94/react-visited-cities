import CardFocus from "../components/CardFocus";
import Navbar from "../components/Navbar";

function CardSinglePage() {

  return (
    <div className="min-h-screen max-h-full bg-gradient-to-t from-gray-400 to-gray-800">
      <Navbar/>
      <div className="py-10 flex justify-center">
      <CardFocus/>
      </div>
    </div>
  );
}

export default CardSinglePage;