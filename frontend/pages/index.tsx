import Button from '@/components/Button';
import { formatCurrency, formatPercent, truncateAddress } from '@/utils/format';

export default function Home() {
  // Test data
  const testAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const testValue = 1234.56;
  const testPercent = 12.34;

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">CovenantAI</h1>
        <p className="text">Testing our utilities:</p>
        <div style={{ marginTop: '1rem' }}>
          <p>Address: {truncateAddress(testAddress)}</p>
          <p>Currency: {formatCurrency(testValue)}</p>
          <p>Percentage: {formatPercent(testPercent)}</p>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <Button onClick={() => alert('Primary clicked!')}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  )
}
