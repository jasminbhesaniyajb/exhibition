import SweetAlert from "sweetalert2"

export const newConfirmAlert = (
  title = "",
  message,
  actionButtonText,
  cancelButtonText = "Dismiss",
  icon
) => {
  return new Promise((resolve, reject) => {
    SweetAlert.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: true,
      confirmButtonText: actionButtonText,
      cancelButtonText: cancelButtonText,
      // customClass: {
      //   confirmButton: `${"ff_alert_btn"} ${"ff_confirm_button"} mb-1 w-50`,
      //   cancelButton: `${"ff_cancel_btn_new"} w-50`,
      //   icon: `${"ff_icon_warning"}`,
      //   popup: `${"ff_popup_bg"}`,
      //   title: `${"ff_popup_title"}`,
      //   actions: `${"ff_action"}`,
      // },
      confirmButtonColor: `#360738`,
    }).then((result) => {
      if (result.value) {
        resolve("action button press")
      } else {
        if (result?.dismiss === "backdrop") {
          reject("Background press")
          return
        }
        reject("cancel Press")
      }
    })
  })
}
