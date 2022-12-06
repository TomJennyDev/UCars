import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastAlertMsg = () => {
  return (
    <ToastContainer
      position="top-right"
      hideProgressBar={false}
      newestOnTop={false}
      pauseOnHover
    />
  );
};

export default ToastAlertMsg;
