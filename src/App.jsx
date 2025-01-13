import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import fetchImages from './services/api';
import './App.css';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  
  useEffect(()=>{
    if (!query)
      return;

    const fetchData = async () =>{
      try{
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
        setError(null);
      } catch (err) {
        setError ("Failed to fetch images. Try again!");
      } finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) =>{
    if (query === newQuery) 
      return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  const openModal = (image) =>{
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  const loadMore = () => setPage((prev) => prev + 1); 

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal isModalOpen={isModalOpen} selectedImage={selectedImage} closeModal={closeModal} />
    </div>
  )
}

export default App
