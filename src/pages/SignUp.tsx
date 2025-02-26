
import { SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-900">Create Account</h1>
          <p className="text-muted-foreground mt-2">Join our community today</p>
        </div>
        <div className="bg-white/80 backdrop-blur-xl rounded-lg shadow-xl p-6">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition-opacity",
                card: "bg-transparent shadow-none",
                headerTitle: "text-indigo-900",
                headerSubtitle: "text-muted-foreground",
              }
            }}
            afterSignUpUrl="/"
            routing="hash"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
