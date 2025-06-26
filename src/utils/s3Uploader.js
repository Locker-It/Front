import { BASE_URL } from '../constants/routes.constants.js';

export async function getPresignedUrl(fileName, fileType) {
  const response = await fetch(`${BASE_URL}/s3/presigned-url`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fileName, fileType }),
  });

  if (!response.ok) {
    throw new Error('Failed to get presigned URL');
  }

  return response.json(); // מחזיר { url, key }
}
