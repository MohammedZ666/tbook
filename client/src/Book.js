import "./index.css";
import manga0 from "./assets/jujutsu-kaisen.jpg";
const Book = () => {
  return (
    <div className="tile">
      <img
        src={manga0}
        alt="manga"
        style={{ width: "90px", height: "160px" }}
      />
      <p> Author: Gege Akutami</p>
    </div>
  );
};

export default Book;
