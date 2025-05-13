export default function formatDate(timestamp: Date): string {
  return new Date(timestamp).toLocaleString();
}
