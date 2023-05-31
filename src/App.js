import { Main_Content } from './components/content';
import content from './components/publications'; 
import './App.css';
import AddNewPublication from './pages/AddNewPublication';
import { useSelector } from 'react-redux';

function App() {
  const publication = useSelector(state => state.publicationReduser.publication)
  console.log(publication);
  return (
      <div className='App'>
        <AddNewPublication/>
        {publication?.map(el => {
          return (
            <div className="main-content">
          <div className="main-card">
              <div className="info-up">
                  <p className="name">{el.species}</p>
                  <p className="species">{el.select}</p>
              </div>
              <p className="info-text">{el.content}</p>
              <div className="main-info">
                  <img src={el.image} alt="photo" className="main-image"></img>
              </div>
          </div>
      </div>
          )
        })
        }

          {content.map(content => (
              <Main_Content
                  key={content.id}
                  photo={content.photo}
                  name={content.name}
                  species={content.species}
                  content={content.content}
              />
          ))}
      </div>
  );
}

export default App;
