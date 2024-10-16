interface InvoiceSummaryProps {
    total: number;
    tax: number;
    discount: number;
    grandTotal: number;
  }
  
  export default function InvoiceSummary({
    total,
    tax,
    discount,
    grandTotal,
  }: InvoiceSummaryProps) {
    return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <table className="min-w-full bg-white border">
            <tbody>
              <tr>
                <td className="p-2 border"><strong>Total</strong></td>
                <td className="p-2 border">${total}</td>
              </tr>
              <tr>
                <td className="p-2 border"><strong>Tax</strong></td>
                <td className="p-2 border">${tax}</td>
              </tr>
              <tr>
                <td className="p-2 border"><strong>Discount</strong></td>
                <td className="p-2 border">${discount}</td>
              </tr>
              <tr>
                <td className="p-2 border"><strong>GRAND TOTAL</strong></td>
                <td className="p-2 border">${grandTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  