import { React, useState } from 'react';
// import './App.css';
import { database } from '../config/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function Post() {
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [uploading, setUploading] = useState(false); 

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = async () => {
    setUploading(true); 
    setSubmit(true); 

    try {
        const myData=collection(database, 'myData')
      await addDoc(myData, {
        image: image,
        description: description,
      });

    } catch (error) {
      console.log('error'); 
    }

    setUploading(false);
  };

  return (
    <>
      {!submit && (
        <>
          <h1>Select a photo</h1>
          <input type="file" onChange={handleImageChange} /> 

          <h1>Add Description</h1>
          <input
            type="text"
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />

          <button onClick={handleSubmit} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Submit'}
          </button> 
        </>
      )}

      {submit && (
        <div className="post">
          {image && <img src={image} alt="myImage" />} 
          <h3>Caption:</h3>
          <p>{description}</p> 
        </div>
      )}
    </>
  );
}

export default Post;