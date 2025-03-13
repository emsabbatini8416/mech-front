import { useEffect, useState } from "react";
import { getVehicleById, updateVehicle, addProblem } from "../api/vehicle";
import { useParams, useNavigate } from "react-router-dom";
import VehicleForm from "../components/vehicle-form";

interface Problem {
  description: string;
  solutions: { level: string; solution: string }[];
}

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<{ brand: string; model: string; year: number } | null>(null);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [newProblem, setNewProblem] = useState("");

  useEffect(() => {
    if (id) {
      getVehicleById(id).then((data) => {
        setVehicle({ brand: data.brand, model: data.model, year: data.year });
        setProblems(data.problems || []);
      });
    }
  }, [id]);

  const handleUpdate = async (updatedVehicle: { brand: string; model: string; year: number }) => {
    await updateVehicle(id!, updatedVehicle);
    navigate("/");
  };

  const handleAddProblem = async () => {
    if (!newProblem) return;
    const updatedVehicle = await addProblem(id!, { description: newProblem });
    setProblems(updatedVehicle.problems);
    setNewProblem("");
  };

  return (
    <div>
      <h2>Edit Vehicle</h2>
      {vehicle && <VehicleForm onSubmit={handleUpdate} initialData={vehicle} />}

      <h3 className="mt-4">Problems</h3>
      {problems.map((p, i) => (
        <div key={i}>
          <strong>{p.description}</strong>
          <ul>{p.solutions.map((s, j) => <li key={j}>{s.solution}</li>)}</ul>
        </div>
      ))}
      <input type="text" value={newProblem} onChange={(e) => setNewProblem(e.target.value)} className="form-control mt-2" />
      <button onClick={handleAddProblem} className="btn btn-info mt-2">Add Problem</button>
    </div>
  );
};

export default EditVehicle;
