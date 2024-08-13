import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import videoData from '../../data/News.json'; // Verifique o caminho do arquivo JSON
import styles from '../../styles/News/News.module.scss'; // Atualize o caminho se necessário

const News = () => {
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setVideos(videoData);
  }, []);

  const handleFilterChange = (type) => {
    setFilter(type);
    setCurrentPage(1); // Resetar a página para 1 ao aplicar um novo filtro
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatVideoDate = (dateString) => {
    const date = new Date(dateString);
    const month = capitalizeFirstLetter(date.toLocaleString('default', { month: 'short' }));
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month.slice(0, 3)} ${day}, ${year}`;
  };

  const filteredVideos = filter === 'All' ? videos : videos.filter(video => video.type === filter);
  const sortedVideos = filteredVideos.sort((a, b) => new Date(b.date) - new Date(a.date));

  const indexOfLastVideo = currentPage * itemsPerPage;
  const indexOfFirstVideo = indexOfLastVideo - itemsPerPage;
  const currentVideos = sortedVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.News}>
      <h1 className={styles.Title}>Fique por dentro</h1>
      <div className={styles.Filter}>
        <button
          className={`${styles.Btn} ${filter === 'All' ? styles.Active : ''}`}
          onClick={() => handleFilterChange('All')}
        >
          Todas
        </button>
        <button
          className={`${styles.Btn} ${filter === 'Documentary' ? styles.Active : ''}`}
          onClick={() => handleFilterChange('Documentary')}
        >
          Documentários
        </button>
        <button
          className={`${styles.Btn} ${filter === 'Tutorial' ? styles.Active : ''}`}
          onClick={() => handleFilterChange('Tutorial')}
        >
          Tutoriais
        </button>
        <button
          className={`${styles.Btn} ${filter === 'Music' ? styles.Active : ''}`}
          onClick={() => handleFilterChange('Music')}
        >
          Músicas
        </button>
      </div>
      <ul className={styles.VideoList}>
        {currentVideos.map(video => (
          <li key={video.id} className={styles.VideoItem}>
            <Link to={`/news/${video.id}`}>
              <img src={video.image} alt={video.title} className={styles.VideoImage} />
              <p className={styles.VideoDate}>{formatVideoDate(video.date)}</p>
              <h2 className={styles.VideoTitle}>{video.title}</h2>
              <p className={styles.VideoDescription}>{video.description}</p>
            </Link>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className={styles.Pagination}>
          <button
            className={`${styles.PaginationBtn} ${currentPage === 1 ? styles.Disabled : ''}`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${styles.PaginationBtn} ${currentPage === index + 1 ? styles.ActivePage : ''}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`${styles.PaginationBtn} ${currentPage === totalPages ? styles.Disabled : ''}`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </div>
      )}
    </section>
  );
};

export default News;
