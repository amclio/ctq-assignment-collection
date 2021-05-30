import axios from 'axios'

export default async function handler(req, res) {
  const { user, repo, path } = req.query

  const url = `https://api.github.com/repos/${user}/${repo}/contents${encodeURIComponent(
    path
  )}`

  const info = await axios.get(url, {
    headers: {
      Authorization: `Token ${process.env.GITHUB_TOKEN}`,
    },
  })

  res.json(info.data)
}
