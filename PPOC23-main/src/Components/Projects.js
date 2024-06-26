import React from 'react';
import './blog.css';
import data from '../database/projectdata.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ blogs }) => {

  return (
    <div>
      <div className="blog-container">
        {/* Content including slider */}

          {data.projects.map((blog) => (
            <div className="blog-box" key={blog.id}>
                <div className="blog-img">
                    <a href={blog['Read more']} target="_blank" rel="noopener noreferrer">
                        <img src={blog.image} alt="New Image Name" />
                    </a>
                </div>
                <div className="blog-text">
                    <a href={blog['Read more']} target="_blank" rel="noopener noreferrer" className='blogtitle'>
                        {blog.name}
                    </a>
                    <p>{blog.content}</p>
                    <a href={blog['Read more']} target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};

function App() {
    return (
      <><br></br>
        <div className="card bg-light mb-3 mx-auto rounded-4 w-180" style={{ maxWidth: "80%" }}>
          <div className="card-body">
            <h3 className="card-title"><b>Our Projects.</b></h3>
            <p className="card-text">
            Here are some of our Projects Information that you can acess here.
            </p>
          </div>
        </div>
  <br></br>
        <ProjectCard items={data} /><br></br><br></br><br></br>

      </>
        );
  }
  
  export default App;
