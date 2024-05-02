// Create a new type that extends the existing type
type x = {
  title: string;
};
type ExtendedWindow = x & {
  ts: number;
};

// Now you can use the ExtendedWindow type
const src = 'const a = "Hello World"';
//   window.ts.transpileModule(src, {});
