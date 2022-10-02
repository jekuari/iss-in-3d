import React, { useEffect, useState } from 'react'
import './GalleryByYear.scss'
export default function GalleryByYear() {

   const [year, setYear] = useState(2021)

   const [images, setImages] = useState([])

   useEffect(() => {
      setImages([]);
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const requestOptions = {
         method: 'GET',
         headers: headers,
         redirect: 'follow',
         mode: 'cors'
      }

      const searchQuery = `q=iss&year_start=${year}&year_end=${year}`

      fetch(`https://images-api.nasa.gov/search?` + searchQuery, requestOptions)
         .then(response => response.json())
         .then(result => {
            if (result.collection.items) {
               setImages(result.collection.items)
            }
         })
         .catch(error => { console.log(error) });
   }, [year])

   const [elements, setElements] = useState([])

   useEffect(() => {
      setElements([]);
      if (images && images.length > 0) {
         for (let i = 0; i < images.length; i++) {
            const image = images[i]
            if (image.links && image.links[0].href) {
               const element = <img src={image.links[0].href} onClick={switchExpanded} data-image={image.links[0].href} data-index={i} data-text={image.data[0].description}/>
               setElements(elements => [...elements, element])
            }
         }
      }
   }, [images])

   const [expandedOpen, setExpandedOpen] = useState(false);

   const [expandedImage, setExpandedImage] = useState('');
   const [expandedDescription, setExpandedDescription] = useState('');

   const [expandedIndex, setExpandedIndex] = useState(0);

   const switchExpanded = (Event) => {
      Event.preventDefault();
      Event.target.getAttribute('data-image') ? setExpandedImage(Event.target.getAttribute('data-image')) : setExpandedImage(null);
      Event.target.getAttribute('data-index') ? setExpandedIndex(Event.target.getAttribute('data-index')) : setExpandedIndex(null);
      Event.target.getAttribute('data-text') ? setExpandedDescription(Event.target.getAttribute('data-text')) : setExpandedDescription(null);
      setExpandedOpen((prev) => !prev);
   }

   const moveLeft = (Event) => {
      Event.preventDefault();
      if (parseInt(expandedIndex) > 0) {
         setExpandedIndex(parseInt(expandedIndex) - 1);
         setExpandedImage(images[parseInt(expandedIndex) - 1].links[0].href);
         setExpandedDescription(images[parseInt(expandedIndex) - 1].data[0].description);
      }
   }

   const moveRight = (Event) => {
      Event.preventDefault();
      if (parseInt(expandedIndex) < images.length - 1) {
         setExpandedIndex(parseInt(expandedIndex) + 1);
         setExpandedImage(images[parseInt(expandedIndex) + 1].links[0].href);
         setExpandedDescription(images[parseInt(expandedIndex) + 1].data[0].description);
      }
   }

   const moveYearLeft = (Event) => {
      Event.preventDefault();
      if (year > 1997) {
         setYear(year - 1);
      }
   }

   const moveYearRight = (Event) => {
      Event.preventDefault();
      const date = new Date();
      const currentYear = date.getFullYear();
      if (year <= currentYear) {
         setYear(year + 1);
      }
   }

   return (
      <div className='--gallery-by-year'>
         {elements}
         <div className='expanded-image' data-is-active={expandedOpen}>
            <img src={expandedImage} alt="" />
            <p>{expandedDescription}</p>
            <div className='chevrons left' onClick={moveLeft}>
               <span className="material-symbols-outlined" onClick={moveLeft}>
                  chevron_left
               </span>
            </div>
            <div className='chevrons right' onClick={moveRight}>
               <span className="material-symbols-outlined" onClick={moveRight}>
                  chevron_right
               </span>
            </div>
            <div className='close' onClick={() => { setExpandedOpen(false) }}>
               <span className="material-symbols-outlined">
                  close
               </span>
            </div>
         </div>
         <div className='dropdown-bottom-to-top'>
            <div className='button' onClick={moveYearLeft}>
               <p>-</p>
            </div>
            <div>
               <p>{year}</p>
            </div>
            <div className='button' onClick={moveYearRight}>
               <p>+</p>
            </div>
         </div>
      </div>
   )
}
