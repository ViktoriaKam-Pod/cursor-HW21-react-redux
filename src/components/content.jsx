


export function Main_Content (props){
  return(
      <div className="main-content">
          <div key={props.id} className="main-card">
              <div className="info-up">
                  <p className="name">{props.name}</p>
                  <p className="species">{props.species}</p>
              </div>
              <p className="info-text">{props.content}</p>
              <div className="main-info">
                  <img src={props.photo} alt="photo" className="main-image"></img>
              </div>
          </div>
      </div>
  )
}