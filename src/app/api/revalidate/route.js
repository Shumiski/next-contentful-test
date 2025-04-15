// app/api/revalidate/route.js

import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request) {
  // Parse the query parameters from the URL
  const { searchParams } = new URL(request.url);
  
  // Validate the secret token
  if (searchParams.get('secret') !== process.env.MY_REVALIDATION_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate the homepage. You can change the path if needed.
    revalidatePath('/');
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json({ message: 'Error revalidating', error: error.toString() }, { status: 500 });
  }
}
