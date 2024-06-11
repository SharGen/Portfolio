// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Log received data for debugging
    console.log('Received data:', { name, email, subject, message });

    // Here you can add your logic to record the response,
    // e.g., save it to a database or send an email.

    // For now, let's just log it to the console
    console.log('Form Submission:', { name, email, subject, message });

    // Send a response back to the client
    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
