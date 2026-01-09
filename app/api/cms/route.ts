import { NextRequest, NextResponse } from 'next/server';
import { readContent, writeContent, updateContentSection } from '@/lib/data/storage';
import type { CMSContent } from '@/lib/data/types';

// GET - Fetch all content or specific section
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    const content = readContent();

    if (section && section in content) {
      return NextResponse.json({ 
        success: true, 
        data: content[section as keyof CMSContent] 
      });
    }

    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// POST - Update entire content or specific section
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { section, data } = body;

    if (!section || !data) {
      return NextResponse.json(
        { success: false, error: 'Section and data are required' },
        { status: 400 }
      );
    }

    if (section === 'all') {
      writeContent(data as CMSContent);
    } else if (section in readContent()) {
      updateContentSection(section as keyof CMSContent, data);
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid section' },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update content' },
      { status: 500 }
    );
  }
}


