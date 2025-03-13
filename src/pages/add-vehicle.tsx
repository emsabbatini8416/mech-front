import { useNavigate } from "react-router-dom";
import VehicleForm from "../components/vehicle-form";
import { addVehicle } from "../api/vehicle";

const AddVehicle = () => {
  const navigate = useNavigate();

  const handleSubmit = async (vehicle: { brand: string; model: string; year: number }) => {
    await addVehicle(vehicle);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Vehicle</h2>
      <VehicleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddVehicle;
