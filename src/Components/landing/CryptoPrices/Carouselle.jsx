/* eslint-disable react/no-unescaped-entities */
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";
import Slideshow from "../../ReusableCompo/Slideshow";
import { MdVerified } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
function Carouselle() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <article
      className={`Top-post ${darkmode ? " bg-[#1a1a1a]" : " bg-[#fefefe]"}`}
    >
      <Slideshow interval={3600}>
        <section className={`top-Accounts `}>
          <h1 className="cont-tittle">Top Community Account</h1>
          <ul className="content">
            {" "}
            <li>
              {" "}
              <h3 className="user">
                <span
                  className={`Logo bg-green-500 ${
                    darkmode ? "text-black" : "text-white"
                  }`}
                >
                  A
                </span>
                Achraf Codes <MdVerified className="text-blue-600" />{" "}
                <span className="userName ">@achrafcodes</span>
              </h3>{" "}
              <button className={darkmode ? "ligth-button" : "dark-button"}>
                <GrAdd /> <span className="md:block hidden">Follow</span>{" "}
              </button>
            </li>
            <li>
              {" "}
              <h3 className="user">
                <span
                  className={`Logo bg-purple-500  ${
                    darkmode ? "text-black" : "text-white"
                  }`}
                >
                  W
                </span>
                WebT <MdVerified className="text-blue-600" />{" "}
                <span className="userName">@webt</span>
              </h3>{" "}
              <button className={darkmode ? "ligth-button" : "dark-button"}>
                <GrAdd /> <span className="md:block hidden">Follow</span>{" "}
              </button>
            </li>
            <li>
              {" "}
              <h3 className="user">
                <span
                  className={`Logo bg-blue-900 ${
                    darkmode ? "text-black" : "text-white"
                  }`}
                >
                  T
                </span>
                Tinny / Smash <MdVerified className="text-blue-600" />{" "}
                <span className="userName">@tinnysmash</span>
              </h3>{" "}
              <button className={darkmode ? "ligth-button" : "dark-button"}>
                <GrAdd /> <span className="md:block hidden">Follow</span>{" "}
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
                  darkmode ? "text-black" : "text-white"
                }`}
              >
                A
              </span>
              Achraf Codes <MdVerified className="text-blue-600" />
              <span className="userName">@achrafcodes</span>
            </h3>{" "}
            <p className="text-xl font-medium w-[90%]  lg:w-[70%] break-words">
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
                  darkmode ? "text-black" : "text-white"
                }`}
              >
                W
              </span>
              WebT
              <MdVerified className="text-blue-600" />{" "}
              <span className="userName">@webt</span>
            </h3>{" "}
            <p className="text-xl font-medium w-[90%] lg:w-[70%] break-words">
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
