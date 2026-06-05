import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: '#7C3AED',
            colorBackground: '#0E0E16',
            colorText: '#F3F4F6',
            colorInputBackground: 'rgba(255,255,255,0.05)',
            colorInputText: '#F3F4F6',
            borderRadius: '0.75rem',
          },
          elements: {
            card: 'bg-[#0E0E16] border border-white/10 shadow-2xl shadow-violet-900/20',
            headerTitle: 'text-white font-black',
            headerSubtitle: 'text-gray-400',
            socialButtonsBlockButton: 'border border-white/10 bg-white/5 hover:bg-white/10 text-white',
            formFieldInput: 'bg-white/5 border-white/10 text-white placeholder-gray-600',
            formButtonPrimary: 'bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400',
            footerActionLink: 'text-violet-400 hover:text-violet-300',
          }
        }}
      />
    </div>
  );
}
