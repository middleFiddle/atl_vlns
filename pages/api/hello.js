// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prices from './prices.json'

export default function handler(req, res) {
  res.status(200).json(prices)
}
