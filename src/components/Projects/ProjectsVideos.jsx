import React, { useState, useRef } from 'react';
import videos from '../../data/Projects.json';
import styles from '../../styles/Projects/Projects.module.scss';

const ITEMS_PER_PAGE = 4;

const ProjectVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const videoListRef = useRef(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    document.body.classList.add(styles.noScroll);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.classList.remove(styles.noScroll);
  };

  const loadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const resetVideos = () => {
    setVisibleItems(ITEMS_PER_PAGE);
    setSelectedVideo(null);
    document.body.classList.remove(styles.noScroll);

    if (videoListRef.current) {
      videoListRef.current.scrollIntoView();
    }
  };

  const currentVideos = videos.slice(0, visibleItems);
  const allVideosLoaded = visibleItems >= videos.length;

  return (
    <section className={styles.Projects}>
      <ul ref={videoListRef} className={styles.videoList}>
        {currentVideos.map(video => (
          <li key={video.id} className={styles.videoItem}>
            <div className={styles.videoWrapper}>
              <iframe
                src={video.embed_url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
              <div className={styles.overlay} onClick={() => openModal(video)}></div>
            </div>
            <h2 className={styles.videoTitle}>{video.title}</h2>
            <p className={styles.videoDesc}>{video.description}</p>
          </li>
        ))}
      </ul>

      {selectedVideo && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <iframe
              src={selectedVideo.embed_url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedVideo.title}
              className={styles.modalIFrame}
            ></iframe>
          </div>
        </div>
      )}

      {allVideosLoaded ? (
        <button
          className={styles.resetButton}
          onClick={resetVideos}
        >
          Fechar
        </button>
      ) : (
        <button
          className={styles.loadMoreButton}
          onClick={loadMore}
        >
          Carregar Mais
        </button>
      )}
    </section>
  );
};

export default ProjectVideos;
