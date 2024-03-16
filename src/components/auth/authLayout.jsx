import Link from "next/link";

export const AuthLayout = ({ children }) => {
  return (
    <main>
      <div>
        <div>{children}</div>
        {/* <div className="flex justify-center p-3">
          <Link href="/" className="link">
            Back to Home
          </Link>
        </div> */}
      </div>
    </main>
  );
};
