

export default function AuthLayout({children} : {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-12 sm:p-24">{children}</div>
  );
}
