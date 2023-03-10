import loaderToggle from "./loader";

const request = async (resource) => {
  loaderToggle(true);

  const req = await fetch(resource);
  if (!req.ok) {
    loaderToggle(false);

    throw new Error("Kechirasiz ma'lumot olishda xatolik yuz berdi");
  }
  const data = await req.json();
  loaderToggle(false);

  return data;
};

export default request;
