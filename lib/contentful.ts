import * as contentful from "contentful";

const client = contentful.createClient({
  space: "psm6dn3ir0fy",
  environment: "master", // defaults to 'master' if not set
  accessToken: "ov8I2n8WwJrv9RWhZ2T2Dts57PpoCimuWQzCJ04_bmE",
});

client
  .getEntry("1ZUACUpBXnBnoVITgx9N1D")
  .then((entry) => console.log(entry))
  .catch(console.error);

