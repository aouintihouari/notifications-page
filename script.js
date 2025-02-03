const markAsRead = document.querySelector(".mark-as-read");
const notifications = document.querySelectorAll(".notification.not-read");
const notificationCount = document.querySelector(".notification-count");

markAsRead.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("not-read");
    const readStatus = notification.querySelector(".read-status");
    if (readStatus) readStatus.style.display = "none";
  });
  notificationCount.textContent = "0";
});
