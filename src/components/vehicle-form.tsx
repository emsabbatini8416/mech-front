import { useState, useEffect } from "react";

interface VehicleFormProps {
  onSubmit: (vehicle: { brand: string; model: string; year: number }) => void;
  initialData?: { brand: string; model: string; year: number };
}

const VehicleForm = ({ onSubmit, initialData }: VehicleFormProps) => {
  const [brand, setBrand] = useState(initialData?.brand || "");
  const [model, setModel] = useState(initialData?.model || "");
  const [year, setYear] = useState<number | "">(initialData?.year || "");

  useEffect(() => {
    if (initialData) {
      setBrand(initialData.brand);
      setModel(initialData.model);
      setYear(initialData.year);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ brand, model, year: Number(year) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Brand" className="form-control mb-2" value={brand} onChange={(e) => setBrand(e.target.value)} required />
      <input type="text" placeholder="Model" className="form-control mb-2" value={model} onChange={(e) => setModel(e.target.value)} required />
      <input type="number" placeholder="Year" className="form-control mb-2" value={year} onChange={(e) => setYear(e.target.value === "" ? "" : Number(e.target.value))} required />
      <button type="submit" className="btn btn-success">{initialData ? "Update" : "Add"} Vehicle</button>
    </form>
  );
};

export default VehicleForm;
