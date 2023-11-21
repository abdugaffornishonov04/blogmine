import { Link } from "react-router-dom";
import { POSTSDATA } from "../data/PostsData";

const HomePage = () => {
  let lastElement = POSTSDATA[POSTSDATA.length - 1];
  let firstElement = POSTSDATA[1]

  return (
    <section className="home-page">
      <div className="hp-latest">
        <div className="hp-latest-wrapper container">
          <h2 className="hp-latest-title">Latest blog</h2>

          <div className="hp-latest-box">
            <h4>{lastElement.title}</h4>
            <Link className="hp-latest-to-category">
              {lastElement.category}
            </Link>
            <div className="hp-latest-box-image">
              <p>{lastElement.content.slice(0, 1300)}...</p>
              <div>
                <img src={lastElement.image} alt={lastElement.image} />
              </div>
            </div>
            <Link
              to={`fullblog/${lastElement.id}`}
              className="hp-latest-see-full-blog"
            >
              Read full post...
            </Link>
          </div>
        </div>
      </div>

      <div className="hp-popular">
        <h2 className="hp-popular-title">Popular blogs</h2>
        <div className="hp-popular-wrapper">
          <div className="hp-popular-card1">
            <img src={lastElement.image} alt="" />
            <div className="hp-popular-card1-content">
              <div className="wrapper-hppc1c">
                <Link className="hp-popular-card1-link">See full blog</Link>
                <h5 className="hp-popular-card1-title">{lastElement.title}</h5>
                <p className="hp-popular-card1-text">
                  {lastElement.content.slice(0, 500)}
                  ...
                </p>
              </div>
            </div>
          </div>
          <div className="hp-popular-card2">
            <img src={firstElement.image} alt="" />
            <div className="hp-popular-card1-content">
              <div className="wrapper-hppc1c">
                <Link className="hp-popular-card1-link">See full blog</Link>
                <h5 className="hp-popular-card1-title">{firstElement.title}</h5>
                <p className="hp-popular-card1-text">
                  {firstElement.content.slice(0, 200)}
                  ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
