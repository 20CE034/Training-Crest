// Generics
const names: Array<string> = [];
// names[0].split("");

const promise: Promise<string | number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("done");
  }, 2000);
});
promise.then((data) => {
  if (typeof data == "string") {
    data.split(" ");
  } else {
    data.toString();
  }
});

// making generic
function merge<T extends {}, U>(objA: T, objB: U) {
  //   return { ...objA, ...objB };
  return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Dev" }, { age: 21 });
console.log(typeof mergeObj.age);
console.log(mergeObj);

// Partial - a util of Generics
type User = {
  firstName: string;
  lastName: string;
};

let firstUser: Partial<User> = {
  firstName: "John",
};

// live usecase:
// const StyledButton = styled("button")(({ isRed }) => isRed && "color: red;");

// const StyledButton = styled("button")(
//   <Partial<{ isRed: boolean }>>(({ isRed }) => isRed && "color: red;")
// );
