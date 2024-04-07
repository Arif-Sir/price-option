import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "IronWorks Fitness",
          "features": [
            "Strength training equipment",
            "Cardio machines",
            "Group fitness classes",
            "Indoor track",
            "Steam room"
          ],
          "price": 60.00
        },
        {
          "id": 2,
          "name": "FlexFit Gym",
          "features": [
            "CrossFit area",
            "Yoga studio",
            "Spin classes",
            "Boxing ring",
            "Pool"
          ],
          "price": 70.00
        },
        {
          "id": 3,
          "name": "Pulse Performance Center",
          "features": [
            "High-intensity interval training (HIIT)",
            "Pilates studio",
            "Nutrition counseling",
            "Massage therapy",
            "Childcare services"
          ],
          "price": 55.00
        },
        {
          "id": 4,
          "name": "Core Strength Gym",
          "features": [
            "Functional training area",
            "Barre classes",
            "Physical therapy",
            "Climbing wall",
            "Smoothie bar"
          ],
          "price": 65.00
        },
        {
          "id": 5,
          "name": "Elevate Fitness Club",
          "features": [
            "TRX suspension training",
            "Zumba classes",
            "Tennis courts",
            "Jacuzzi",
            "Nutrition bar"
          ],
          "price": 75.00
        }
      ];

    return (
        <div >
            <h1 className="text-9xl font-bold ">Best Price</h1>
            <div className="grid md:grid-cols-3 gap-4  text-center">
            {
              priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
