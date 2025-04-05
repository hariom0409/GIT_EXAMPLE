function uploadFile() {
        let fileInput = document.getElementById('fileInput');
        let file = fileInput.files[0];
    
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let mediaElement;
                if (file.type.startsWith("image")) {
                    mediaElement = document.createElement("img");
                    mediaElement.src = e.target.result;
                    mediaElement.style.width = "200px";
                } else if (file.type.startsWith("video")) {
                    mediaElement = document.createElement("video");
                    mediaElement.src = e.target.result;
                    mediaElement.controls = true;
                    mediaElement.style.width = "300px";
                }
                document.getElementById("gallery").appendChild(mediaElement);
            };
            reader.readAsDataURL(file);
        } else {
            alert("कृपया एक फ़ाइल चुनें!");
        }
    }
    