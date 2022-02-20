import "react-toastify/dist/ReactToastify.css"

import { toast } from "react-toastify"

const toastStyles = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progressStyle: {
    background: "#360738",
  },
  style: { color: "#360738" },
}

const toaster = (message, timeOut) => {
  toast(message, { ...toastStyles, autoClose: timeOut || 1500 })
}

export default { toaster }

export const toasterMessage = (type, message) => {
  if (type === "success") toast.success(message)
  else if (type === "error") toast.error(message)
}
