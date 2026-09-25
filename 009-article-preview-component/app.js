const shareButton = document.getElementById("share_button");
const toastShare = document.getElementById("toast_share");


shareButton.addEventListener("click" , function(){
    shareButton.classList.toggle("button-active");
    toastShare.classList.toggle("toast-active");
    
    
    const isOpen = shareButton.getAttribute("aria-expanded") === "true";

    shareButton.setAttribute("aria-expanded", !isOpen);
    toastShare.hidden = isOpen;
});