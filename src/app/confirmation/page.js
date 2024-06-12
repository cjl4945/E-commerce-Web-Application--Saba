'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ConfirmationPage = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push('/');
  };

  useEffect(() => {
    // Automatically return home after 3 seconds
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 3000);

    // Clear the timeout when the component unmounts or when the user navigates away
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div>
      <h1>Order Confirmed!</h1>
      <p>Thank you for your purchase.</p>

      <button onClick={handleReturnHome}>Return Home</button>
    </div>
  );
};

export default ConfirmationPage;
