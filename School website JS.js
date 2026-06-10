
    var myIndex = 0;
    carousel();

    function carousel() {
        var a;
        var b = document.getElementsByClassName("image");

        // Hide all images
        for (a = 0; a < b.length; a++) {
            b[a].style.display = "none";
        }

        // Move to next image
        myIndex++;

        if (myIndex > b.length) {
            myIndex = 1;
        }

        // Show current image
        b[myIndex - 1].style.display = "block";

        // Change image every 2 seconds
        setTimeout(carousel, 2000);
    }

