interface TabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
  
  export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
    const tabs = ['Details', 'Vitals', 'Diagnosis', 'Prescriptions', 'Billing'];
  
    return (
      <div className="flex mt-4 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-pink-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }
  