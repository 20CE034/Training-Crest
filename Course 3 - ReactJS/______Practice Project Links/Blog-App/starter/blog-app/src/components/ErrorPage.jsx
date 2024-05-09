
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorPage() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
     
      <Alert severity="error">Something Went Wrong</Alert>
    </Stack>
  );
}