import React from "react";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-card">
      <form className="bg-white p-8 rounded-lg shadow-card w-full max-w-md border border-border/50">
        <h2 className="text-3xl font-display font-bold text-center text-foreground mb-6">Create an Account</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg py-3 px-4 sm:text-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg py-3 px-4 sm:text-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-primary hover:underline"
            >
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
