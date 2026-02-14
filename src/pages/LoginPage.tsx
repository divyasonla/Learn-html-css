import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../integrations/supabase/client';
import { useToast } from '../hooks/use-toast';

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({ title: 'Login failed', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Login successful', description: 'Welcome back!', variant: 'success' });
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-card">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-card w-full max-w-md border border-border/50">
        <h2 className="text-3xl font-display font-bold text-center text-foreground mb-6">Welcome Back</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg py-3 px-4 sm:text-lg"
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary focus:border-primary text-lg py-3 px-4 sm:text-lg"
          />
          {errors.password && <p className="text-destructive text-sm mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-primary hover:underline"
            >
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;