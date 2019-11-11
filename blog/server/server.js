const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('server/public'));

const defaultData = require('./defaultData');


app.get('/users/', (req,res) => {
  return res.json(defaultData.users);
});

app.get('/default-users/', (req,res) => {
  return res.json(defaultData.defaultUsers);
});

app.post('/default-users/', express.json(), (req,res) => {
  const newUsers=req.body.newUsers;
  console.log(newUsers);
  if(defaultData.findUser(newUsers)) {
    return res.status(400).json({ error: `This name already exists.`});
  } else {
    defaultData.addDefaultUsers({newUsers: newUsers});
    return res.sendStatus(200);
  }
});

app.post('/login/', express.json(), (req, res) => {
  const username = req.body.username;
  console.log(username);
  if(!username || !defaultData.findUser(username)) {
    return res.status(400).json({ error: `Invalid username, please try again.`});
  } else if (defaultData.users[username]) {
    return res.status(409).json({ error: `Username ${username} login already, please try again.`});
  } else {
    defaultData.users[username] = req.body.username;
    return res.sendStatus(200);
  }
});

app.post('/logout/', express.json(), (req, res) => {
	const username = req.body.username;
	console.log(username);
	if (defaultData.users[username]) {
		delete defaultData.users[username];
		return res.sendStatus(200);
	} else {
		return res.status(404).json({ error: `${username} does not exit.`});
	}
});


//
app.post('/delete-blogs/', express.json(), (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  console.log(id);
  console.log(username);
	if (defaultData.blogs[id] && defaultData.blogs[id].sender === username) {
		delete defaultData.blogs[id];
		return res.sendStatus(200);
	} else {
		return res.status(409).json({ error: `You cannot delete this blog, because this blog does not exit or this blog was not post by you.`});
	}
});


app.get('/blogs/', (req,res) => {
  return res.json(defaultData.blogs);
});

app.post('/blogs/', express.json(), (req, res) => {
  const sender = req.body.sender;
  const title = req.body.title;
  const text = req.body.text;
  defaultData.addBlogs({ sender: sender, title: title, timestamp: new Date(), text })
  return res.sendStatus(200);
});

app.listen(PORT, () => console.log(`http://localhost:4000`) );
