import type { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog Item 1 */}
            <div className="blog-item padd-15">
              <div className="blog-item-inner shadow-dark">
                <div className="blog-img">
                  <img src="/imgs/blog/wsl.webp" alt="Responsive Web Design" />
                  <div className="blog-date">Dec 9, 2023</div>
                </div>
                <div className="blog-info">
                  <h4 className="blog-title">
                    WSL 2 Installation on Different Drive without import/export or link-shortcut
                  </h4>
                  <p className="blog-description">
                    In this article, I’m going to explain the BEST way to set up WSL 2 distro
                    We will not move or export/import anything, we will simply extract and run distro.exe file provided by Microsoft.Appx that will simply install everything to one palace.
                  </p>
                  <p className="blog-tags">
                    Tags: <a href="#">WSL</a>, <a href="#">linux</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Item 1 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
