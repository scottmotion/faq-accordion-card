
$( document ).ready(function() {
    const detailElements = document.getElementsByTagName("details");
    for (const element of detailElements) {
        element.addEventListener("click", closeDetails);
    };
});


function closeDetails() {
    console.log("clicked")
};