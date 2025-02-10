import { NextResponse } from "next/server";
import { cache } from "react";

const fetchCategories = cache(async () => {
  const query = `
    query {
      __type(name: "MediaFormat") {
        enumValues {
          name
        }
      }
    }
  `;

  try {
    const response = await fetch(`${process.env.NEXT_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 86400 },
    });

    const data = await response.json();

    if (!response.ok || !data.data) {
      throw new Error("Erro ao buscar categorias da API do AniList.");
    }

    const categories = [
      { name: "All Formats", value: "ALL" },
      ...data.data.__type.enumValues.map((format: any) => ({
        name: format.name.replace("_", " "),
        value: format.name,
      })),
    ];

    return categories;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return null;
  }
});

export async function GET() {
  const categories = await fetchCategories();

  if (!categories) {
    return NextResponse.json(
      { error: "Erro ao buscar categorias ou limite de requisições excedido." },
      { status: 500 }
    );
  }

  return NextResponse.json(categories);
}
