/* eslint-disable react/no-unescaped-entities */
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
function Carouselle() {
  return (
    <article className="Top-post">
      <section className="top-Accounts">
        <h1>Top Community Account</h1>
        <ul>
          {" "}
          <li>
            {" "}
            <h1>
              <span className="Logo">A</span>Achraf Codes{" "}
              <span>@achrafcodes</span>
            </h1>{" "}
            <button>+ Follow</button>
          </li>
          <li>
            {" "}
            <h1>
              <span className="Logo">W</span>WebT <span>@webt</span>
            </h1>{" "}
            <button>+ Follow</button>
          </li>
          <li>
            {" "}
            <h1>
              <span className="Logo">T</span>Tinny Smash{" "}
              <span>@tinnysmash</span>
            </h1>{" "}
            <button>+ Follow</button>
          </li>
        </ul>
      </section>
      <section className="topArticle">
        <h1>
          <span className="Logo">A</span>Achraf Codes <span>@achrafcodes</span>
        </h1>{" "}
        <p>
          It's officially here! Say hello to the CryptoFizz , with the Efinity
          Matrixchain! 🌟
        </p>
        <p>
          jun 8{" "}
          <span className="icon">
            {" "}
            47 <FaCommentDots />
          </span>
          <span className="like">
            1109 <AiFillHeart />
          </span>
        </p>
      </section>
      <section className="topArticle">
        <h1>
          <span className="Logo">W</span> WebT <span>@webt</span>
        </h1>{" "}
        <p>
          It's officially here! Say hello to the CryptoFizz , with the Efinity
          Matrixchain! 🌟
        </p>
        <p>
          jun 20{" "}
          <span className="icon">
            {" "}
            2.8k <AiFillEye />
          </span>
          <span className="like">
            1109 <AiFillHeart />
          </span>
        </p>
      </section>
    </article>
  );
}

export default Carouselle;
