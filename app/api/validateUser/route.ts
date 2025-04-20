import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

type User = {
  id: string;
  team_name: string;
  name: string;
};

export async function POST(request: Request) {
  try {
    const { name, teamName } = await request.json();
    console.log('Received data:', { name, teamName });

    if (!name || !teamName || typeof name !== 'string' || typeof teamName !== 'string') {
      return NextResponse.json(
        { message: 'Name and teamName are required and should be strings' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'public/data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data: User[] = JSON.parse(fileContents);

    const matchedUser = data.find(
      entry =>
        entry.team_name.toLowerCase().trim() === teamName.toLowerCase().trim() &&
        entry.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (matchedUser) {
      return NextResponse.json(
        {
          status: 'allowed',
          name: matchedUser.name,
          teamName: matchedUser.team_name,
          id: matchedUser.id
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: 'denied', message: 'User not found. Please check your name or team name.' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
