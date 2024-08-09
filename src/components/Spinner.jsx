import spinner from '../assets/svg/spinner.svg';

function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-50">
      <div>
        <img src={spinner} alt="Loading...." className="h-24" />
      </div>
    </div>
  );
}

export default Spinner;
