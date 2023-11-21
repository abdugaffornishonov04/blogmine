import { Link, useParams } from "react-router-dom";
import { POSTSDATA } from "../data/PostsData";

const FullBlogPage = () => {
  const { id } = useParams();
  let theFullBlog = POSTSDATA.find((post) => post.id == id);
  console.log(theFullBlog);
  return (
    <section className="fullblog-page">
      <div className="fullblog-page-wrapper">
        <div className="fullblog-page-full-blog">
          <div className="fp-full-blog-image">
            <img src={theFullBlog.image} alt={theFullBlog.image} />
          </div>
          <div className="fp-full-blog-writer">
            <h4 className="fp-full-blog-writer-name">{theFullBlog.writer}</h4>
            <p className="fp-full-blog-writer-time">{theFullBlog.time}</p>
          </div>
          <div className="fp-full-blog-blog container">
            <h3>{theFullBlog.title}</h3>
            <span className="fp-full-blog-blog-hashtags">
              {theFullBlog.hashtags}
            </span>
            <Link className="fp-full-blog-blog-category">
              {theFullBlog.category}
            </Link>
            <p className="fp-full-blog-blog-text">{theFullBlog.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullBlogPage;
