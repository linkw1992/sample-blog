const users =  {
	Amit: 'Amit',
	Bao: 'Bao',
};

const blogs = {
	1: {
        id: 1,
        sender: 'Amit',
        title: 'A Perfect Day for Bananafish',
        timestamp: new Date(),
        text: "A Perfect Day for Bananafish is a short story by J. D. Salinger, originally published in the January 31, 1948, issue of The New Yorker. It was anthologized in 1949 from the New Yorker, as well as in Salinger's 1953 collection, Nine Stories. The story is an enigmatic examination of a young married couple, Muriel and Seymour Glass, while on vacation in Florida.It is the first of his stories to feature a member of the fictional Glass family.",
	}
};

let id = 1;
const nextId = () => {id +=1; return id};

const defaultUsers = [
  'Amit',
  'Bao',
  'Miyoshi',
  'Linke',
  'Stan',
  'Kyle',
  'Shinji',
  'Kaworu',
  'Sheldon',
];

function addBlogs({ sender, title, timestamp, text }) {
    if(sender && title && text) {
        const id = nextId();
        blogs[id] = { id, sender, title, timestamp, text };
    };
    return id;
};

function addDefaultUsers({newUsers}) {
    defaultUsers.push(newUsers);
}

function findUser(user) {
    for (const defaultU of defaultUsers) {
        if(user === defaultU) {
            return true;
        }
    }
      return false;
};

const defaultData = {
    users,
    blogs,
    defaultUsers,
    addBlogs,
    addDefaultUsers,
    findUser,
};

module.exports = defaultData;