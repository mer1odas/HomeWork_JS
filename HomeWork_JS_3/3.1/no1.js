async function getUsers(names) {
    let arr = [];
    for (let login of names) {
        let response = await fetch("https://api.github.com/users/" + login);
        if (response.ok) {
            let result = await response.json();
            arr.push(result)
        }
        else {
            arr.push(null)
        };
    };
    return arr
};

describe("getUsers", function() {

    it("gets users from GitHub", async function() {
      let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
      console.log(users);
      assert.equal(users[0].login, 'iliakan');
      assert.equal(users[1].login, 'remy');
      assert.equal(users[2], null);
    });
  
  });