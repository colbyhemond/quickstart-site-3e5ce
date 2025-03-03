import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
    
    const title = searchParams.get('title');
    const website = searchParams.get('website') || '';
    
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        {title}
        <div 
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '50px',
            fontSize: 20,
            color: 'black',
          }}
            >{website}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}