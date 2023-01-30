import React from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../../components/loading";
import SearchComponent from "../../components/search";
import "./index.scss";

const HomePage = () => {
  const Data = useSelector((state) => state.getDataReducer);
  return (
    <div className="HomePage">
      <SearchComponent />
      {Data?.data === undefined ? (
        Data?.error?.code === "ERR_BAD_REQUEST" ? (
          <div className="error">
            <h1>No Such User Exists on GitHub !!!</h1>
          </div>
        ) : (
          <div className="first">
            <i className="fa-solid fa-arrow-up-z-a"></i>
            <h1>Enter the Github UserName</h1>
          </div>
        )
      ) : (
        <div className="gitCard">
          <div className="image">
            <img src={Data?.data?.avatar_url} alt="" />
          </div>
          <div className="about">
            <div className="name">
              <h1>UserName: {Data?.data?.login}</h1>
              <h1>Name: {Data?.data?.name}</h1>
            </div>

            <div className="location">
              <div className="id">
                <p>ID: {Data?.data?.id}</p>
                <p>Type: {Data?.data?.type}</p>
              </div>
              <div className="id">
                <p>Company: {Data?.data?.company}</p>
                <p>Location: {Data?.data?.location}</p>
              </div>
            </div>

            <div className="followers">
              <p>Followers: {Data?.data?.followers}</p>
              <p>Following: {Data?.data?.following}</p>
            </div>

            <p>Public Repos: {Data?.data?.public_repos}</p>
            <p>Created at: {Data?.data?.created_at}</p>
            <p>Updated at: {Data?.data?.updated_at}</p>
            <p>email: {Data?.data?.email}</p>
            <a href={Data?.data?.html_url} target="_blank">
              Visit Github Profile
            </a>
          </div>
        </div>
      )}

      {Data.loading && <LoadingComponent />}
    </div>
  );
};

export default HomePage;
