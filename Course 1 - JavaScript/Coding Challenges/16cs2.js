// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own 😉

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
const imgContainter = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    // 2. When the image is done loading, append it to the DOM element with the
    // 'images' class, and resolve the promise. The fulfilled value should be the
    // image element itself. In case there is an error loading the image (listen for
    // the'error' event), reject the promise
    // 3. If this part is too tricky for you, just watch the first part of the solution

    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainter.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// PART 2
// 4. Consume the promise using .then and also add an error handler
let currentImg;

createImage(
  "https://fastly.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ"
)
  .then((img) => {
    currentImg = img;
    console.log("Image 1 Loaded");
    return wait(2);
  })

  .then(() => {
    currentImg.style.display = "none";
    return createImage(
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    );
  })
  
  // 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
  // function we created earlier
  
  // 6. After the 2 seconds have passed, hide the current image (set display CSS
  // property to 'none'), and load a second image (Hint: Use the image element
  // returned by the 'createImage' promise to hide the current image. You will
  // need a global variable for that 😉)
  
  // 7. After the second image has loaded, pause execution for 2 seconds again
  .then((img) => {
    currentImg = img;
    console.log("Image 2 Loaded");
    return wait(2);
  })
  // 8. After the 2 seconds have passed, hide the current image
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));


// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// GOOD LUCK 😀
// export default createImages;