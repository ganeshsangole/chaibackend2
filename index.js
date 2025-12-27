console.log('chai and backend');

require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

const githubdata = {
  "login": "ganeshsangole",
  "id": 53164023,
  "node_id": "MDQ6VXNlcjUzMTY0MDIz",
  "avatar_url": "https://avatars.githubusercontent.com/u/53164023?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ganeshsangole",
  "html_url": "https://github.com/ganeshsangole",
  "followers_url": "https://api.github.com/users/ganeshsangole/followers",
  "following_url": "https://api.github.com/users/ganeshsangole/following{/other_user}",
  "gists_url": "https://api.github.com/users/ganeshsangole/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ganeshsangole/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ganeshsangole/subscriptions",
  "organizations_url": "https://api.github.com/users/ganeshsangole/orgs",
  "repos_url": "https://api.github.com/users/ganeshsangole/repos",
  "events_url": "https://api.github.com/users/ganeshsangole/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ganeshsangole/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2019-07-22T04:41:13Z",
  "updated_at": "2025-12-26T10:01:10Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})