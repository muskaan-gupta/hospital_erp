interface FormAlertProps {
    type: 'success' | 'error';
    message: string;
  }
  
  export default function FormAlert({ type, message }: FormAlertProps) {
    const alertStyles = type === 'success' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  
    return (
      <div className={`mt-4 p-4 rounded ${alertStyles}`}>
        <p>{message}</p>
      </div>
    );
  }
  