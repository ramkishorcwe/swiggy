import { useEffect, useState } from "react";
// import { useEffect } from "react";

const InputGen = () => {
  const [state, setState] = useState<string>("false");
  console.log("inside component");
  useEffect(() => {
    setState("true");
    console.log("Hello Use Effect");
  }, []);
  return <div>{state}inputGen</div>;
};

export default InputGen;
