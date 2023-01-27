
import isomorphicUnfetch from "isomorphic-unfetch";

type Data = {
  results: {
    name: {
      first: string,
      last: string
    },
    picture: {
      medium: string
    }
  }[]
}

function UserStatus (props: any) {
  return (
    <>
      <div className="userstatus">
        <div className="userstatus__wrapper">
          <picture className="userstatus__picture">
            <img
              className="userstatus__photo"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
    </>
  )
}

export { UserStatus };
