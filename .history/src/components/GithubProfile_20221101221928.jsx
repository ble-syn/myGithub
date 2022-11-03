import React from "react";
import { ReactComponent as Link} from "../assets/link.svg";

function GithubProfile ({profile}){
  return (
    <>
      <div>
        <div className="img">
          <img className="profile-img" src={profile.avatar_url} alt="" />
        </div>
        <div className="profile-details flex">
          <h2>{profile.name}</h2>
          <p>{profile.login}</p>
          <p>{profile.bio}</p>
          <p>{profile.email}</p>
          <p>{profile.location}</p>
          <p>
            <Link />
            <a target="_blank" rel="noreferrer" href={profile.html_url}>
            {profile.html_url}
            </a>
          </p>
        
          <div className="flex">
            <p>Followers: {profile.followers}</p>
            <p>Following: {profile.following}</p>
          </div>
          <div className="flex">
            <p>Public Repos: {profile.public_repos}</p>
            <p>Public Gists: {profile.public_gists}</p>
          </div>
        </div>
      </div>
    </>
  )

}
export default GithubProfile;