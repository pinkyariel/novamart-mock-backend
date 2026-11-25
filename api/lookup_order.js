export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  const { order_id } = req.body || {};

  if (order_id === 'NM12345') {
    return res.status(200).json({
      order_id: 'NM12345',
      status: 'Processing',
      customer: 'Sarah Johnson'
    });
  }

  return res.status(404).json({
    error: 'Order not found'
  });
}
