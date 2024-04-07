/* eslint-disable react/prop-types */
import Feature from "./Feature";

const PriceOption = ({option}) => {
    const {name,features,price}=option;
   
      
    return (
        <div className="bg-blue-500 rounded-md p-4">
            <h2>
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-xl">/month</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
          <div className="mt-5">
          {
                features.map((feature,index )=> <Feature key={index} feature={feature}></Feature>)
            }
          </div>
        </div>
    );
};

export default PriceOption;