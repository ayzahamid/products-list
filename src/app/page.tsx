import Link from "next/link";
import { Stack, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Stack spacing={3}>
        <Typography variant="h2">
          Welcome to the take-home exercise!
        </Typography>

        <Link href="/products">Products</Link>
      </Stack>
    </Container>
  );
}
