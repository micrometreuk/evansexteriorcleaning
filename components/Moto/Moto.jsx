import * as React from "react";
import { motion } from "framer-motion";
import { images } from "../../data/images-data";

export function EvBrands({ id, i }) {
  return (
    <>
      <motion.div className="motodiv"
      
      >
        <motion.img
          src={`/images/${id}?auto=format&fit=crop&w=1500`}
          alt="evansexteriorcleaning"
        />
        <div className="centered"
        >
        Professional exterior cleaning services.
        </div>

      </motion.div>
      <style>
        {`

.frame {
overflow: hidden;
 }

.motodiv img {
 width: 100%;
 border: 7px solid teal;
 height: 100%;

}


.motodiv{
  position: relative;
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 60px;
  font-weight: bolder;
  line-height: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.centered {
  position: absolute;
  top: 55%;
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 600px) {
  .motodiv {
  font-size: 40px;
    width: 100%;
    flex-direction: column;
  }
}


        `}
      </style>
    </>
  );
}

export function EvBrandsImages() {
  return (
    <>
      <motion.div className="overlay"
      >
        {images.map((id, i) => (
          <EvBrands key={id} id={id} i={i} />
        ))}
      </motion.div>
      <style>
        {`
        .overlay{

        }
        `}
      </style>
    </>
  );
}


export default EvBrandsImages;