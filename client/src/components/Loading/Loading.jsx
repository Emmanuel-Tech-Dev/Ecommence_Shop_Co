
import ReactDOM  from 'react-dom';

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="absolute w-full h-[100vh] bg-black/50 top-0">
      <div className="flex items-center justify-center h-full">
        <span className="loader"></span>
      </div>
    </div>,
    document.getElementById('loader')
  );
};

export default Loading;
