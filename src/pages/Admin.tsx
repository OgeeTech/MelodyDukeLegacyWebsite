
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminFormSubmissions from '../components/AdminFormSubmissions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock authentication - in a real app, this would be a secure process
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple mock authentication - in a real app, use proper authentication
    setTimeout(() => {
      if (password === 'admin123') { // This is just for demo purposes
        setIsAuthenticated(true);
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Authentication failed",
          description: "The password you entered is incorrect",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main>
        {!isAuthenticated ? (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 rounded-full bg-royal/10 mb-4">
                    <Lock className="h-8 w-8 text-royal" />
                  </div>
                  <h1 className="text-2xl font-bold">Admin Access</h1>
                  <p className="text-gray-600">Enter your password to view form submissions</p>
                </div>
                
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Authenticating..." : "Login"}
                  </Button>
                </form>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12">
            <AdminFormSubmissions />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Admin;
