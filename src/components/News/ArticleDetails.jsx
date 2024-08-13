import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import videoData from '../../data/News.json';
import HeroArticle from './HeroArticle';
import styles from '../../styles/News/Articles.module.scss'

const ArticleDetails = () => {
  const { id } = useParams();
  const article = videoData.find(item => item.id === parseInt(id));
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <>
        <HeroArticle title="Artigo não encontrado" />
        <Link to="/news">Voltar para notícias</Link>
      </>
    );
  }

  return (
    <>
        <HeroArticle title={article.title} />
      <section className={styles.Article}>
        <div className={styles.ArticleInfo}>
          <p className={styles.ArticleDate}>{article.date}</p>
          <img src={article.image} alt={article.title} />
          <p className={styles.ArticleDesc}>{article.text}</p>
          <img src={article.image2} alt={article.title} />
          <p className={styles.ArticleDesc}>{article.text2}</p>
          <Link onClick={() => navigate(-1)} className={styles.Btn} to="#"> Voltar</Link>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
