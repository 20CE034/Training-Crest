// Coding Challenge #3
// Your tasks:
// PART 1

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainter = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
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
// let currentImg;

// createImage(
//   "https://fastly.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ"
// )
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 Loaded");
//     return wait(2);
//   })

//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage(
//       "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//     );
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 Loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)

const loadNPause = async function () {
  try {
    let img = await createImage(
      "https://fastly.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ"
    );
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImage(
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    );
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    // 2. Compare the two versions, think about the big differences, and see which one
    // you like more .
    // With the async function created, no need of global variable and everything is wrapped into
    // that main function.. following the DRY principle!

    // 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G” in the dev tools Network tab
    console.error(err);
  }
};
// loadNPause();

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'
const loadAll = async function (imgArr) {
  try {
    // 2. Use .map to loop over the array, to load all the images with the 'createImage' function
    //  (call the resulting array 'imgs')
    const imgs = imgArr.map(async (img) => await createImage(img));
    
    // 3. Check out the 'imgs' array in the console! Is it like you expected?
    console.log(imgs);

    // 4. Use a promise combinator function to actually get the images from the array 😉
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    // 5. Add the 'parallel' class to all the images (it has some CSS styles)
    imgsEl.forEach((img) => img.classList.add("parellel"));
  } catch (err) {
    console.error(err);
  }
};

const urls = [
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://fastly.picsum.photos/id/440/200/300.jpg?hmac=3Nx5MHMCVguEcZQ1M3RnSrCpHNn9sabFI5y6aYzvceQ",
  "https://2.img-dpreview.com/files/p/TS250x250~sample_galleries/1330372094/0455063184.jpg",
];
loadAll(urls);

// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-
// 3.jpg']. To test, turn off the 'loadNPause' function

// GOOD LUCK 😀
