const images = import.meta.glob("../assets/images/**/*", {
  eager: true,
  import: "default",
});

export function getImage(path) {

    const key = `../assets/${path}`;
    // console.log("Looking for:", key);
    //console.log("Available:", Object.keys(images));

  return images[key];
  //return images[`../assets${path}`];
}
