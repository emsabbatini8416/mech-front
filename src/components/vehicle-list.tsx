import { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicle";
import { Link } from "react-router-dom";

interface Vehicle {
  _id: string;
  brand: string;
  model: string;
  year: number;
}

const VehicleList = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    getVehicles().then(setVehicles).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Vehicles</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Vehicle</Link>
      <ul className="list-group">
        {vehicles.map((v) => (
          <li key={v._id} className="list-group-item d-flex justify-content-between align-items-center">
            {v.brand} {v.model} ({v.year})
            <Link to={`/edit/${v._id}`} className="btn btn-sm btn-warning">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
