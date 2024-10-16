import InvoiceTable from '../../../components/InvoiceTable';
import InvoiceSummary from '../../../components/InvoiceSummary';
import ActionButtons from '../../../components/ActionButtons';

export default function InvoicePage() {
  const invoiceData = {
    patientDetails: {
      name: 'Daniel',
      age: 20,
      address: '60-21/100, Smith street, Banglore, India',
      phone: '+91 12345 67890',
    },
    paymentDetails: {
      patientId: 'PI675',
      totalDays: 10,
      paymentType: 'Credit Card',
      cardNumber: '1234 5678 9012 3456',
      method: 'Paypal',
    },
    services: [
      { serviceName: 'Chest X-ray', unitCost: 120, discount: 10 },
      { serviceName: 'Injury Operation', unitCost: 1000, discount: 20 },
    ],
    total: 1200,
    tax: 50,
    discount: 212,
    grandTotal: 1038,
  };

  return (
    <div className="p-6 w-[80vw] text-black">
      <div className="flex justify-between items-center">
        <div>
          <img src="/path-to-logo.png" alt="ProClinic Logo" className="h-12" />
          <p className="text-sm">Street Address</p>
          <p className="text-sm">[City, ST ZIP Code]</p>
          <p className="text-sm">Phone: +00 123456 Fax: 432 1231 3456</p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">INVOICE</h2>
          <p className="text-sm">Invoice # [123]</p>
          <p className="text-sm">Date: Nov 16, 2018</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-pink-500">PATIENT DETAILS:</h3>
          <p><strong>Name:</strong> {invoiceData.patientDetails.name}</p>
          <p><strong>Age:</strong> {invoiceData.patientDetails.age}</p>
          <p><strong>Address:</strong> {invoiceData.patientDetails.address}</p>
          <p><strong>Phone:</strong> {invoiceData.patientDetails.phone}</p>
        </div>

        <div>
          <p><strong>Patient ID:</strong> {invoiceData.paymentDetails.patientId}</p>
          <p><strong>Total Days:</strong> {invoiceData.paymentDetails.totalDays}</p>
          <p><strong>Payment Type:</strong> {invoiceData.paymentDetails.paymentType}</p>
          <p><strong>Card Number:</strong> {invoiceData.paymentDetails.cardNumber}</p>
          <p><strong>Method:</strong> {invoiceData.paymentDetails.method}</p>
        </div>
      </div>

      <InvoiceTable services={invoiceData.services} />

      <InvoiceSummary
        total={invoiceData.total}
        tax={invoiceData.tax}
        discount={invoiceData.discount}
        grandTotal={invoiceData.grandTotal}
      />

      <div className="mt-6">
        <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p><strong>Signature:</strong> ____________________________</p>
      </div>

      <ActionButtons />
    </div>
  );
}
