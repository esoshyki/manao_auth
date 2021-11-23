import LoadingIcon from './loading.png';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-icon" style={{backgroundImage: `url(${LoadingIcon})`}}/>
    </div>
  )
};

export default Loading;