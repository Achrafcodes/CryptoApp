/* eslint-disable react/no-unescaped-entities */
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";
import Slideshow from "../../ReusableCompo/Slideshow";
import { MdVerified } from "react-icons/md";
function Carouselle() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <article className="Top-post">
      <Slideshow interval={6000}>
        <section
          className={`top-Accounts${
            darkmode ? " bg-[#1a1a1a]" : " bg-[#fefefe]"
          } `}
        >
          <h1 className="cont-tittle">Top Community Account</h1>
          <ul className="content">
            {" "}
            <li>
              {" "}
              <h3 className="user">
                <span
                  className={`"Logo bg-green-500" ${
                    darkmode ? "text-white" : "text-black"
                  }`}
                >
                  A
                </span>
                Achraf Codes <MdVerified className="text-blue-600" />{" "}
                <span>@achrafcodes</span>
              </h3>{" "}
              <button className={darkmode ? "ligth-button" : "dark-button"}>
                + Follow
              </button>
            </li>
            <li>
              {" "}
              <h3 className="user">
                <span
                  className={`Logo bg-purple-500  ${
                    darkmode ? "text-white" : "text-black"
                  }`}
                >
                  W
                </span>
                WebT <MdVerified className="text-blue-600" /> <span>@webt</span>
              </h3>{" "}
              <button className={darkmode ? "ligth-button" : "dark-button"}>
                + Follow
              </button>
            </li>
            <li>
              {" "}
              <h3 className="user">
                <span
                  className={`Logo bg-blue-900 ${
                    darkmode ? "text-white" : "text-black"
                  }`}
                >
                  T
                </span>
                Tinny / Smash <MdVerified className="text-blue-600" />{" "}
                <span>@tinnysmash</span>
              </h3>{" "}
              <button className={darkmode ? "ligth-button" : "dark-button"}>
                + Follow
              </button>
            </li>
          </ul>
        </section>
        <section className="topArticle">
          <h1 className="cont-tittle">Top Post</h1>
          <div className="content">
            <h3 className="user">
              <span
                className={`Logo bg-green-500 ${
                  darkmode ? "text-white" : "text-black"
                }`}
              >
                A
              </span>
              Achraf Codes <MdVerified className="text-blue-600" />
              <span>@achrafcodes</span>
            </h3>{" "}
            <p className="text-xl w-[70%] break-words">
              It's officially here! Say hello to the CryptoFizz , with the
              Efinity Matrixchain! 🌟
            </p>
            <p className="post-infos">
              jun 8{" "}
              <span className="icon">
                {" "}
                47 <FaCommentDots />
              </span>
              <span className="like">
                1109 <AiFillHeart />
              </span>
            </p>
          </div>
        </section>
        <section className="topArticle">
          <h1 className="cont-tittle"> Top Article</h1>
          <div className="content">
            <h3 className="user">
              <span
                className={`Logo bg-purple-500  ${
                  darkmode ? "text-white" : "text-black"
                }`}
              >
                W
              </span>
              WebT
              <MdVerified className="text-blue-600" /> <span>@webt</span>
            </h3>{" "}
            <p className="text-xl w-[70%] break-words">
              It's officially here! Say hello to the CryptoFizz , with the
              Efinity Matrixchain! 🌟
            </p>
            <p className="post-infos">
              jun 20{" "}
              <span className="icon">
                {" "}
                2.8k <AiFillEye />
              </span>
              <span className="like">
                1109 <AiFillHeart />
              </span>
            </p>
          </div>
        </section>
      </Slideshow>
    </article>
  );
}

export default Carouselle;
