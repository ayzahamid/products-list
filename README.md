# Project Name

This is a Next.js application for managing products.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/project-name.git
   ```

2. Change to the project directory:
   ```bash
   cd project-name
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
    ```


5. Open your browser and visit `http://localhost:3000` to see the application.

## Running Prism Mock Server

To run the Prism mock server using Docker Compose, follow these steps:

1. Make sure you have Docker installed on your machine.

2. Update the Swagger file:
   - Open the `swagger.yaml` file.
   - Modify the Swagger specification as needed for your API.
   - Save the changes.

3. Start the Prism mock server:
   - Open a terminal and navigate to the project directory.
   - Run the following command:
     ```bash
     docker-compose up -d prism
     ```

4. The Prism mock server should now be running. You can access it at `http://localhost:4010`.

## Your task
See the instructions in [Instructions](INSTRUCTIONS.md)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize the instructions and add any additional information specific to your project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
