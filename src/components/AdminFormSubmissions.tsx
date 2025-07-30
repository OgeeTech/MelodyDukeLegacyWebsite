
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { format } from 'date-fns';

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}

const AdminFormSubmissions = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Mock data - in a real app, this would be fetched from a database
    const mockData: FormSubmission[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+234 701 234 5678',
        subject: 'booking',
        message: 'I would like to book your band for a wedding ceremony on June 15, 2025. Please let me know if you are available and what your rates are.',
        timestamp: '2025-05-10T10:30:00Z',
      },
      {
        id: '2',
        name: 'Mary Smith',
        email: 'mary@example.com',
        phone: '+234 802 345 6789',
        subject: 'collaboration',
        message: 'I am a vocalist interested in collaborating with your band on an upcoming project. I have been following your work and believe we could create something special together.',
        timestamp: '2025-05-12T14:45:00Z',
      },
      {
        id: '3',
        name: 'Emmanuel Okonkwo',
        email: 'emmanuel@example.com',
        phone: '+234 903 456 7890',
        subject: 'mentorship',
        message: 'I am a young drummer looking for mentorship opportunities. I have been playing for 3 years and would like to improve my skills in traditional African rhythms.',
        timestamp: '2025-05-14T09:15:00Z',
      },
    ];
    
    setTimeout(() => {
      setSubmissions(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleViewSubmission = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
  };
  
  const formatSubject = (subject: string) => {
    return subject.charAt(0).toUpperCase() + subject.slice(1);
  };
  
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, 'PPpp'); // 'May 15, 2025, 10:30 AM'
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="spinner h-8 w-8 border-4 border-t-royal rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading submissions...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Form Submissions</h1>
      
      <Tabs defaultValue="list">
        <TabsList className="mb-6">
          <TabsTrigger value="list">All Submissions ({submissions.length})</TabsTrigger>
          {selectedSubmission && (
            <TabsTrigger value="detail">Submission Details</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Recent Form Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{formatDate(submission.timestamp)}</TableCell>
                      <TableCell>{submission.name}</TableCell>
                      <TableCell>{submission.email}</TableCell>
                      <TableCell>{formatSubject(submission.subject)}</TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewSubmission(submission)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        {selectedSubmission && (
          <TabsContent value="detail">
            <Card>
              <CardHeader>
                <CardTitle>Submission Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date</h3>
                    <p>{formatDate(selectedSubmission.timestamp)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p>{selectedSubmission.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p>{selectedSubmission.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p>{selectedSubmission.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Subject</h3>
                    <p>{formatSubject(selectedSubmission.subject)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Message</h3>
                    <div className="bg-gray-50 p-4 rounded-md mt-1">
                      <p className="whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedSubmission(null)}
                  >
                    Back to List
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default AdminFormSubmissions;
