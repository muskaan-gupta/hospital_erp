interface Service {
    name: string;
    cost: string;
  }
  
  interface DynamicServiceFieldsProps {
    services: Service[];
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    formData: any;
  }
  
  export default function DynamicServiceFields({ services, setFormData, formData }: DynamicServiceFieldsProps) {
    // Handle the change in service fields
    const handleServiceChange = (index: number, field: string, value: string) => {
      const updatedServices = [...services];
      updatedServices[index][field] = value;
      setFormData({ ...formData, services: updatedServices });
    };
  
    // Add a new service field
    const addService = () => {
      setFormData({
        ...formData,
        services: [...services, { name: '', cost: '' }],
      });
    };
  
    // Remove a service field
    const removeService = (index: number) => {
      const updatedServices = services.filter((_, i) => i !== index);
      setFormData({ ...formData, services: updatedServices });
    };
  
    return (
      <div>
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm">Service Name</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm">Cost of Treatment</label>
              <input
                className="w-full p-2 border rounded"
                type="number"
                value={service.cost}
                onChange={(e) => handleServiceChange(index, 'cost', e.target.value)}
                required
              />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="mt-4 bg-red-500 text-white p-2 rounded"
                onClick={() => removeService(index)}
              >
                Remove Service
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="mt-4 bg-green-500 text-white p-2 rounded"
          onClick={addService}
        >
          + Add Service
        </button>
      </div>
    );
  }
  