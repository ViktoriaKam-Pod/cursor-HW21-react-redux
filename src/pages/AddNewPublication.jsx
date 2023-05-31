import React, { useState } from 'react';
import Button from '../components/Button';
import styles from './AddNewPublication.module.css'
import { useDispatch } from 'react-redux';
import { createPublicationAction } from '../store/actions/publication.actions';


const AddNewPublication = () => {
  const dispatch = useDispatch();

  const [select, setSelect] = useState();
  const [species, setSpecies] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  
  const resetData = () => {
    setSelect("")
    setSpecies("")
    setContent("")
    setImage("")
  }

  const onFormSubmit = () => {
    if (select?.trim() && species?.trim() && content?.trim() && image?.trim()) {
      dispatch(createPublicationAction({
        select,
        species,
        content,
        image,
      })
    );

    resetData();
    } else {
      alert ("you have required fields");
    }
  };


  return (
    <div className={styles.new_publication}>
      <form className={styles.form_publication}>
        <select value={select}
          className={styles.select_publication}
          onChange={({ target: { value } }) => { setSelect(value) } } >
        <option></option>
        <option>Wild</option>
        <option>Domestic</option>
        </select>
        <input value={species} 
          placeholder='species'
          onChange={({ target: { value } }) => { setSpecies(value) } } />
        <textarea value={content} 
          placeholder='content'
          onChange={({ target: { value } }) => { setContent(value) } } />
        <input type='file'
          
          onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]))
          }} />
          {image ? <img className={styles.image_publication} src={image} alt='animal'/> : null }
      </form>
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        Add publication</Button>
    </div>
  );
};

export default AddNewPublication;


