import { NextApiRequest, NextApiResponse } from 'next';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;

      // Input validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Log form data
      console.log('Form Data:', { name, email, subject, message });

      // Insert form data into the database
      const client = await pool.connect();
      await client.query(
        'INSERT INTO form_responses (name, email, subject, message) VALUES ($1, $2, $3, $4)',
        [name, email, subject, message]
      );

      client.release();

      return res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error('Error handling form submission:', error);
    return res.status(500).json({ message: 'Error submitting form' });
  }
}
