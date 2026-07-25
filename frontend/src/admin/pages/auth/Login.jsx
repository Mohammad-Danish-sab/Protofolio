import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
