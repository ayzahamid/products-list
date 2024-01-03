export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_ROOT}/products`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(request: Request) {
  try {
    const productData = await request.json();

    await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_ROOT}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    return new Response(JSON.stringify({ message: 'success' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}