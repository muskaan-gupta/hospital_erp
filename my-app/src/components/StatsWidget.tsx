interface StatsWidgetProps {
    title: string;
    value: string;
    icon: string;
  }
  
  export default function StatsWidget({ title, value, icon }: StatsWidgetProps) {
    return (
      <div className="bg-white p-4 shadow text-black rounded-lg flex items-center">
        <div className="text-4xl">{icon}</div>
        <div className="ml-4">
          <h2 className="text-lg">{title}</h2>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  }
  