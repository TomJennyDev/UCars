import FMultiCheckbox from "form/FMultiCheckbox";

const VEHICLE_TYPE = [
  "Bus",
  "Classis Car",
  "Coupe",
  "Convertible",
  "Hatchback",
  "Lorry",
  "MPV",
  "Pickup",
  "Sedan",
  "Sport Car",
  "SUV",
  "Truck",
  "Van (Pasenger)",
  "Van (Goods)",
  "Wagon",
];

function VehicleType() {
  return (
    <>
      <FMultiCheckbox name="type" options={VEHICLE_TYPE} />
    </>
  );
}

export default VehicleType;
