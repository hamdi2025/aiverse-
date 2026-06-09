import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <SignUp
        fallbackRedirectUrl="/en"
        appearance={{
          variables: {
            colorPrimary: '#7C3AED',
            colorBackground: '#0E0E16',
            colorText: '#F3F4F6',
            colorInputBackground: 'rgba(255,255,255,0.05)',
            colorInputText: '#F3F4F6',
            borderRadius: '0.75rem',
          },
        }}
      />
    </div>
  );
}
