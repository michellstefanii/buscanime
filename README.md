# BUSCANIME

BUSCANIME is an application developed in **Next.js** that consumes the **Anilist API** via **GraphQL** to list animes. The project uses Next.js API routes to handle requests and provides an intuitive interface for searching and viewing animes.

## Technologies Used

- **Next.js 15**
- **React 18**
- **TypeScript**
- **GraphQL (Anilist API)**
- **Zustand** (State management)
- **Tailwind CSS** (Styling)
- **Jest and Testing Library** (Automated testing)

## Features

- **Anime listing** with detailed information.
- **Filtering** by categories such as **TV, Movie, OVA, Manga**, etc.
- **Search** for animes by name.
- **Load more results** by clicking the "See More" button.
- **Anilist API consumption** via GraphQL with Next.js API routes.
- **Unit testing** with Jest and Testing Library.

## How to Run the Project

### 1. Clone the Repository

```sh
  git clone https://github.com/michellstefanii/buscanime.git
  cd buscanime
```

### 2. Install Dependencies

```sh
  npm install  # or yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add the required credentials:

```sh
NEXT_PUBLIC_API_URL=https://graphql.anilist.co
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the Development Server

```sh
  npm run dev  # or yarn dev
```

The application will be available at `http://localhost:3000`.

### 5. Run Tests

```sh
  npm run test  # or yarn test
```

## Build for Production

To create an optimized build:

```sh
  npm run build
  npm run start
```

## Contribution

1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push your code (`git push origin my-feature`).
5. Open a **Pull Request**.

## License

This project is distributed under the **MIT** license.

---

If you have any questions or need support, feel free to reach out!
