# Nft-Algo

### Click here for Preview:

<a> nft-algo.vercel.app </a>

## 404 vercel page error : page show this error on refresh, and i fixed this by creating a vercel.json file and adding this code given below

<code>
{
  "routes": [{ "src": "/[^.]+", "dest": "/", "status": 200 }]
}

</code>
