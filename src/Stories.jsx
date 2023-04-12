import React from "react";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";

const Stories = () => {
  let { hits, isLoading, removePost } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <div className="stories-div">
          <Loading />
        </div>
      ) : (
        <>
          <div className="stories-div">
            {hits.length ? (
              hits.map((currPost) => {
                const { title, author, num_comments, objectID, url } = currPost;
                return (
                  <>
                    {title ? (
                      <div className="card" key={objectID}>
                        <h2>{title}</h2>
                        <p>
                          By <span>{author}</span> | <span>{num_comments}</span> comments
                        </p>
                        <div className="card-button">
                          <a href={url} target="_blank" rel="noreferrer">
                            Read More
                          </a>
                          <a
                            href="#"
                            onClick={() => {
                              removePost(objectID);
                            }}
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </>
                );
              })
            ) : (
              <h1 style={{ marginTop: "15rem" }}>No Data Found</h1>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Stories;
